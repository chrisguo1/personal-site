export default function HomePage() {
  return (
    <div className="prose">
      <section className="mb-12">
        <p>
          Working at <strong>Chicago Trading Company</strong> as a Quantitative
          Trader. Building smart execution systems and designing quant research
          frameworks.
        </p>
        <p>
          Graduated from <strong>Northwestern University</strong> where I
          studied Math, Economics, and Computer Science.
        </p>
      </section>

      <section>
        <h2 id="experience" style={{ marginTop: 0 }}>
          Experience
        </h2>
        <ul>
          <li>Python</li>
          <li>Batch Data Processing &mdash; PySpark SQL, tick data</li>
          <li>Stream Processing &mdash; PySpark Structured Streaming</li>
          <li>Databases &mdash; Snowflake, Redis, Mongo</li>
          <li>Data Science &mdash; Numpy, Pandas</li>
          <li>Dashboarding &mdash; Plotly Dash, Sigma Computing</li>
        </ul>
      </section>
    </div>
  );
}
