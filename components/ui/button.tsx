import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, variant = "primary", type = "button", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
    const variants = {
      primary: "bg-[var(--color-accent)] text-[var(--color-foreground)] hover:brightness-95",
      secondary: "bg-[var(--color-surface)] text-[var(--color-primary)] border border-[var(--color-border)] hover:bg-blue-50",
      ghost: "bg-transparent text-[var(--color-foreground)] hover:bg-blue-50",
    };
    const classes = cn(base, variants[variant], className);

    if (href) {
      return (
        <Link className={classes} href={href}>
          {props.children}
        </Link>
      );
    }

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
