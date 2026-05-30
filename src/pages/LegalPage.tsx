import { Link } from "react-router-dom";

export function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/" className="inline-flex items-center text-sm text-cyan-glow hover:text-foreground transition">
          Back to Farisium AI Compute
        </Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight gradient-text">{title}</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </main>
  );
}
