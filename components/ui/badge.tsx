import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded-full border border-[var(--color-border)] bg-blue-50 px-3 py-1 text-xs font-medium text-[var(--color-primary)]", className)} {...props} />;
}
