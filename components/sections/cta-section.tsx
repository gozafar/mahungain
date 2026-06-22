import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="rounded-md border border-[var(--color-border)] bg-[var(--color-primary)] px-6 py-10 text-white">
      <h2 className="text-2xl font-semibold">Ready to begin?</h2>
      <p className="mt-2 max-w-2xl text-white/90">Start the admission conversation and we will respond with the next steps.</p>
      <div className="mt-6">
        <Button href="#contact" variant="secondary">Reach out now</Button>
      </div>
    </section>
  );
}
