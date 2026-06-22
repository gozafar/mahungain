// import { notices } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function NoticeStrip() {
  return (
    <div className="bg-[var(--color-primary)] text-white">
      <Container className="flex items-stretch gap-0 overflow-hidden py-0">
        <div className="flex items-center bg-[var(--color-accent)] px-4 py-3 text-sm font-extrabold text-[var(--color-foreground)]">
          LATEST NEWS
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-4 overflow-hidden px-4 py-3 text-sm font-semibold whitespace-nowrap">
          <span className="min-w-fit">Jharkhand - 825318</span>
          {/* {notices.map((item, index) => (
            <span key={item} className="min-w-fit">
              {index > 0 ? " | " : " "}
              {item}
            </span>
          ))} */}
        </div>
      </Container>
    </div>
  );
}
