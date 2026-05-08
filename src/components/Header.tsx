import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();

  const isHome = location === "/";
  const isInterviewees = location.startsWith("/interviewee");
  const isProcess = location === "/process";

  return (
    <>
      <header className="border-b border-ink pt-4 pb-2 mb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h2 className="text-xs md:text-sm font-bold uppercase">Intro to Design Studies — Parsons School of Design</h2>
        <div className="flex gap-4 text-xs md:text-sm font-medium">
          <span className="bg-accent px-4 py-1 border border-ink hidden md:block uppercase font-bold whitespace-nowrap">RA03 — Spring 2026</span>
        </div>
      </header>

      <nav className="border-b border-ink pb-4 mb-16 overflow-x-auto flex gap-6 md:gap-12 text-4xl md:text-6xl font-black tracking-tighter uppercase whitespace-nowrap">
        <Link href="/">
          <a className={`hover:text-ink/60 transition-colors ${isHome ? "text-ink" : "text-ink/30"}`}>
            SYNTHESIS
          </a>
        </Link>
        <Link href="/interviewees">
          <a className={`hover:text-ink/60 transition-colors ${isInterviewees ? "text-ink" : "text-ink/30"}`}>
            INTERVIEWEES
          </a>
        </Link>
        <Link href="/process">
          <a className={`hover:text-ink/60 transition-colors ${isProcess ? "text-ink" : "text-ink/30"}`}>
            PROCESS
          </a>
        </Link>
      </nav>
    </>
  );
}
