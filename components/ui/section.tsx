import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("animate-fade-up py-16 sm:py-20", className)} {...props} />;
}
