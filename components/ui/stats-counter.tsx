import { Card } from "@/components/ui/card";

export function StatsCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-semibold text-[var(--color-primary)]">{value}{suffix}</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </Card>
  );
}
