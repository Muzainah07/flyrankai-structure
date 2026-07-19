async function getHealthData() {
  const start = Date.now();
  const res = await fetch("https://api.github.com/zen", { cache: "no-store" });
  const message = await res.text();
  return {
    ok: res.ok,
    status: res.status,
    latencyMs: Date.now() - start,
    message,
    checkedAt: new Date().toISOString(),
  };
}

export default async function HealthPage() {
  const health = await getHealthData();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        Health
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Health Check
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Confirms the app can fetch external data at request time — this page
        is a Server Component with no client-side JS.
      </p>

      <div className="mt-8 max-w-md rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              health.ok ? "bg-accent" : "bg-red-500"
            }`}
          />
          <span className="font-mono text-sm">
            {health.ok ? "Operational" : "Degraded"}
          </span>
        </div>

        <dl className="mt-5 space-y-3 font-mono text-sm">
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted">Status code</dt>
            <dd>{health.status}</dd>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted">Latency</dt>
            <dd>{health.latencyMs} ms</dd>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <dt className="text-muted">Checked at</dt>
            <dd>{health.checkedAt}</dd>
          </div>
          <div className="pt-1">
            <dt className="text-muted">Fetched message</dt>
            <dd className="mt-1 text-foreground">&ldquo;{health.message}&rdquo;</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
