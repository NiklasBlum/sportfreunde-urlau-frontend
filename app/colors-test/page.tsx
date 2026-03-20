export default function ColorsTestPage() {
  const vars = [
    "--color-blue",
    "--color-blue-mid",
    "--color-red",

    "--color-red-dark",
    "--color-red-accent",
    "--color-red-tint",
    "--color-red-subtle",
    "--color-red-blush",

    "--color-gold",
    "--color-gold-dark",
    "--color-gold-light",
    "--color-gold-highlight",

    "--color-background",
    "--color-surface",
    "--color-surface-hover",
    "--color-surface-hover-warm",
    "--color-muted",
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Color variables — Test page
        </h1>

        <div className="flex flex-col gap-1">
          {vars.map((v) => (
            <div key={v} className="rounded-lg overflow-hidden border flex">
              <div className="flex grow" style={{ background: `var(${v})` }} />
              <div className="p-3 bg-white flex-1">
                <div className="font-mono text-sm font-bold">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
