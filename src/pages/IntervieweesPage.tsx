import { Link } from "wouter";
import { interviewees } from "../data";
import { Header } from "../components/Header";

export function IntervieweesPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32">
      <Header />
      
      <div className="mb-24 relative">
        <div className="absolute top-0 left-[10%] w-16 h-16 md:w-32 md:h-32 bg-accent rounded-full -z-10 mix-blend-multiply origin-center translate-y-[-20%]"></div>
        <h1 className="text-[12vw] xl:text-[9.5vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 break-words">
          THE SUBJECTS
        </h1>
        
        <p className="text-xl md:text-2xl font-medium leading-tight max-w-4xl border-t border-ink pt-8">
          Four designers acting as architects of immaterial experiences. Explore their distinct philosophies, contradictions, and the hidden impacts of their work.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-24">
        {interviewees.map((person, index) => (
          <div key={person.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${index !== 0 ? 'pt-12 md:pt-24 border-t border-ink' : ''}`}>
            <div className="lg:col-span-5 relative group">
                <Link href={`/interviewee/${person.id}`}>
                  <a className="block aspect-[4/3] bg-paper-dim overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300 border border-ink hover:-translate-y-2">
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-black text-ink/10 group-hover:scale-110 transition-transform duration-500">
                      {person.displayName.charAt(0)}
                    </div>
                  </a>
                </Link>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6 items-start">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                 {person.displayName}
               </h2>
               <div className="border border-ink px-4 py-2 bg-paper-dim text-sm font-bold uppercase tracking-widest inline-block">
                 Interviewed by {person.interviewerName}
               </div>
               <p className="text-xl md:text-2xl font-bold leading-tight uppercase">
                 {person.summary.oneLine}
               </p>
               <p className="text-lg font-medium leading-tight text-balance opacity-80 border-l border-ink pl-4">
                 {person.summary.shortAbstract}
               </p>
               <Link href={`/interviewee/${person.id}`}>
                  <a className="mt-4 border border-ink px-8 py-3 text-lg font-bold uppercase hover:bg-accent transition-colors bg-paper">
                    Read Full Profile
                  </a>
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
