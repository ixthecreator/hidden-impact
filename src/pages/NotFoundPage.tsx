import { Link } from "wouter";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-[20vw] font-black tracking-tighter leading-none mb-4 text-accent mix-blend-multiply">404</h1>
      <p className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-8">PAGE NOT FOUND</p>
      <Link href="/">
        <a className="border border-ink px-8 py-3 text-lg font-bold uppercase hover:bg-accent transition-colors">
          RETURN TO SYNTHESIS
        </a>
      </Link>
    </div>
  );
}
