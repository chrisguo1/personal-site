import { Client } from '@notionhq/client';
import type {
  PageObjectResponse,
  BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID!;

export interface PostMeta {
  id: string;
  title: string;
  slug: string;
  date: string;
  isPrivate: boolean;
  author: string;
  tags: string[];
  description: string;
}

function getTitle(page: PageObjectResponse): string {
  const prop = page.properties['Name'];
  if (prop.type === 'title') {
    return prop.title.map((t) => t.plain_text).join('');
  }
  return '';
}

function getSlug(page: PageObjectResponse): string {
  const prop = page.properties['Slug'];
  if (prop.type === 'rich_text') {
    return prop.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
}

function getDate(page: PageObjectResponse): string {
  const prop = page.properties['Published Date'];
  if (prop.type === 'date' && prop.date) {
    return prop.date.start;
  }
  return '';
}

function getPrivate(page: PageObjectResponse): boolean {
  const prop = page.properties['Private'];
  if (prop.type === 'checkbox') {
    return prop.checkbox;
  }
  return false;
}

function getAuthor(page: PageObjectResponse): string {
  const prop = page.properties['Author'];
  if (prop.type === 'people' && prop.people.length > 0) {
    const person = prop.people[0];
    return 'name' in person ? (person.name ?? '') : '';
  }
  return '';
}

function getTags(page: PageObjectResponse): string[] {
  const prop = page.properties['Tags'];
  if (prop.type === 'multi_select') {
    return prop.multi_select.map((t) => t.name);
  }
  return [];
}

function getDescription(page: PageObjectResponse): string {
  const prop = page.properties['Description'];
  if (prop.type === 'rich_text') {
    return prop.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
}

export async function getPublishedPosts(): Promise<PostMeta[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [
      { property: 'Published Date', direction: 'descending' },
    ],
  });

  return response.results
    .filter((p): p is PageObjectResponse => 'properties' in p)
    .map((page) => ({
      id: page.id,
      title: getTitle(page),
      slug: getSlug(page),
      date: getDate(page),
      isPrivate: getPrivate(page),
      author: getAuthor(page),
      tags: getTags(page),
      description: getDescription(page),
    }))
    .filter((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<PostMeta | null> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'Status', select: { equals: 'Published' } },
        { property: 'Slug', rich_text: { equals: slug } },
      ],
    },
  });

  const page = response.results[0];
  if (!page || !('properties' in page)) return null;

  const p = page as PageObjectResponse;
  return {
    id: p.id,
    title: getTitle(p),
    slug: getSlug(p),
    date: getDate(p),
    isPrivate: getPrivate(p),
    author: getAuthor(p),
    tags: getTags(p),
    description: getDescription(p),
  };
}

export async function getPostBlocks(pageId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    for (const block of response.results) {
      if ('type' in block) {
        blocks.push(block as BlockObjectResponse);
      }
    }

    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks;
}

export async function getChildBlocks(blockId: string): Promise<BlockObjectResponse[]> {
  return getPostBlocks(blockId);
}
