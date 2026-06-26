import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "hover-lift rounded-md border border-[var(--color-border)] bg-white p-6 shadow-sm shadow-blue-50",
        className
      )}
      {...props}
    />
  );
}
