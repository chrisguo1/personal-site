import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { getChildBlocks } from './notion';

// ---- Rich text ----

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderRichText(richText: RichTextItemResponse[]): string {
  return richText
    .map((item) => {
      let text = escapeHtml(item.plain_text);

      if (item.annotations.code) text = `<code>${text}</code>`;
      if (item.annotations.bold) text = `<strong>${text}</strong>`;
      if (item.annotations.italic) text = `<em>${text}</em>`;
      if (item.annotations.strikethrough) text = `<s>${text}</s>`;
      if (item.annotations.underline) text = `<span style="text-decoration:underline">${text}</span>`;

      if (item.annotations.color && item.annotations.color !== 'default') {
        const color = item.annotations.color;
        if (color.endsWith('_background')) {
          text = `<span style="background-color:var(--notion-${color})">${text}</span>`;
        } else {
          text = `<span style="color:var(--notion-${color})">${text}</span>`;
        }
      }

      if (item.href) {
        text = `<a href="${escapeHtml(item.href)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }

      return text;
    })
    .join('');
}

// ---- Blocks ----

type AnyBlock = BlockObjectResponse & { type: string; [key: string]: unknown };

function getRichText(block: AnyBlock): RichTextItemResponse[] {
  const data = block[block.type] as { rich_text?: RichTextItemResponse[] } | undefined;
  return data?.rich_text ?? [];
}

async function renderBlock(block: BlockObjectResponse): Promise<string> {
  const b = block as AnyBlock;

  switch (b.type) {
    case 'paragraph':
      return `<p>${renderRichText(getRichText(b))}</p>`;

    case 'heading_1':
      return `<h1>${renderRichText(getRichText(b))}</h1>`;

    case 'heading_2':
      return `<h2>${renderRichText(getRichText(b))}</h2>`;

    case 'heading_3':
      return `<h3>${renderRichText(getRichText(b))}</h3>`;

    case 'bulleted_list_item':
      return `<li>${renderRichText(getRichText(b))}${await renderChildren(b)}</li>`;

    case 'numbered_list_item':
      return `<li>${renderRichText(getRichText(b))}${await renderChildren(b)}</li>`;

    case 'quote':
      return `<blockquote>${renderRichText(getRichText(b))}</blockquote>`;

    case 'code': {
      const codeData = b.code as { rich_text: RichTextItemResponse[]; language: string };
      const lang = codeData.language || '';
      const code = codeData.rich_text.map((t) => t.plain_text).join('');
      return `<pre><code class="language-${escapeHtml(lang)}">${escapeHtml(code)}</code></pre>`;
    }

    case 'callout': {
      const calloutData = b.callout as { rich_text: RichTextItemResponse[]; icon?: { emoji?: string } };
      const icon = calloutData.icon?.emoji || '';
      return `<div class="callout"><span class="callout-icon">${icon}</span><div>${renderRichText(calloutData.rich_text)}${await renderChildren(b)}</div></div>`;
    }

    case 'toggle': {
      const toggleData = b.toggle as { rich_text: RichTextItemResponse[] };
      const children = await renderChildren(b);
      return `<details><summary>${renderRichText(toggleData.rich_text)}</summary>${children}</details>`;
    }

    case 'divider':
      return '<hr>';

    case 'image': {
      const imgData = b.image as {
        type: 'file' | 'external';
        file?: { url: string };
        external?: { url: string };
        caption?: RichTextItemResponse[];
      };
      const url = imgData.type === 'file' ? imgData.file?.url : imgData.external?.url;
      if (!url) return '';
      const caption = imgData.caption?.length ? renderRichText(imgData.caption) : '';
      const altText = imgData.caption?.length
        ? imgData.caption.map((t) => t.plain_text).join('')
        : '';
      return caption
        ? `<figure><img src="${escapeHtml(url)}" alt="${escapeHtml(altText)}" loading="lazy"><figcaption>${caption}</figcaption></figure>`
        : `<img src="${escapeHtml(url)}" alt="${escapeHtml(altText)}" loading="lazy">`;
    }

    case 'video': {
      const vidData = b.video as {
        type: 'file' | 'external';
        file?: { url: string };
        external?: { url: string };
      };
      const url = vidData.type === 'file' ? vidData.file?.url : vidData.external?.url;
      if (!url) return '';
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('youtu.be')
          ? url.split('/').pop()
          : new URL(url).searchParams.get('v');
        return `<iframe src="https://www.youtube.com/embed/${escapeHtml(videoId || '')}" title="YouTube video" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0"></iframe>`;
      }
      return `<video src="${escapeHtml(url)}" controls style="max-width:100%"></video>`;
    }

    case 'bookmark': {
      const bmData = b.bookmark as { url: string; caption?: RichTextItemResponse[] };
      const label = bmData.caption?.length
        ? renderRichText(bmData.caption)
        : escapeHtml(bmData.url);
      return `<p><a href="${escapeHtml(bmData.url)}" target="_blank" rel="noopener noreferrer">${label}</a></p>`;
    }

    case 'table': {
      const children = b.has_children ? await getChildBlocks(b.id) : [];
      const tableData = b.table as { has_column_header: boolean; has_row_header: boolean };
      let html = '<table>';
      children.forEach((row, i) => {
        if (row.type !== 'table_row') return;
        const rowData = (row as AnyBlock).table_row as { cells: RichTextItemResponse[][] };
        const tag = (i === 0 && tableData.has_column_header) ? 'th' : 'td';
        const scope = tag === 'th' ? ' scope="col"' : '';
        html += '<tr>';
        for (const cell of rowData.cells) {
          html += `<${tag}${scope}>${renderRichText(cell)}</${tag}>`;
        }
        html += '</tr>';
      });
      html += '</table>';
      return html;
    }

    case 'to_do': {
      const todoData = b.to_do as { rich_text: RichTextItemResponse[]; checked: boolean };
      const checked = todoData.checked;
      const cls = checked ? 'todo-item todo-checked' : 'todo-item';
      const label = todoData.rich_text.map((t) => t.plain_text).join('');
      return `<div class="${cls}"><input type="checkbox" disabled${checked ? ' checked' : ''} aria-label="${escapeHtml(label)}"> ${renderRichText(todoData.rich_text)}</div>`;
    }

    case 'embed': {
      const embedData = b.embed as { url: string };
      return `<iframe src="${escapeHtml(embedData.url)}" title="Embedded content" style="width:100%;min-height:400px;border:0"></iframe>`;
    }

    default:
      return '';
  }
}

async function renderChildren(block: AnyBlock): Promise<string> {
  if (!block.has_children) return '';
  const children = await getChildBlocks(block.id);
  return await renderBlocks(children);
}

// ---- Main export ----

export async function renderBlocks(blocks: BlockObjectResponse[]): Promise<string> {
  const parts: string[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    // Group consecutive bulleted list items into <ul>
    if (block.type === 'bulleted_list_item') {
      let listHtml = '<ul>';
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        listHtml += await renderBlock(blocks[i]);
        i++;
      }
      listHtml += '</ul>';
      parts.push(listHtml);
      continue;
    }

    // Group consecutive numbered list items into <ol>
    if (block.type === 'numbered_list_item') {
      let listHtml = '<ol>';
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        listHtml += await renderBlock(blocks[i]);
        i++;
      }
      listHtml += '</ol>';
      parts.push(listHtml);
      continue;
    }

    // Group consecutive to_do items
    if (block.type === 'to_do') {
      let todoHtml = '<div class="todo-list">';
      while (i < blocks.length && blocks[i].type === 'to_do') {
        todoHtml += await renderBlock(blocks[i]);
        i++;
      }
      todoHtml += '</div>';
      parts.push(todoHtml);
      continue;
    }

    parts.push(await renderBlock(block));
    i++;
  }

  return parts.join('');
}
