import { interviewees } from "../data";
import { Header } from "../components/Header";

export function ProcessPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32">
      <Header />
      
      <div className="mb-24 relative">
        <div className="absolute top-0 right-[40%] w-24 h-24 md:w-48 md:h-48 bg-accent rounded-full -z-10 mix-blend-multiply origin-center translate-y-[-20%] opacity-80 blur-md"></div>
        <h1 className="text-[12vw] xl:text-[9.5vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 break-words">
          BEHIND THE RESEARCH
        </h1>
        
        <p className="text-xl md:text-2xl font-medium leading-tight max-w-4xl border-t border-ink pt-8">
          The reality of field research is that assumptions are broken. Here are the process notes and emerging questions from our four researchers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {interviewees.map((person) => (
          <article key={person.id} className="border border-ink p-6 md:p-10 relative bg-paper group">
             <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
             
             <header className="mb-8 border-b border-ink/20 pb-6">
                <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">Subject: {person.displayName}</h2>
                <div className="text-sm font-bold uppercase opacity-60 tracking-widest">
                  Researcher: {person.interviewerName}
                </div>
             </header>

             <div className="mb-10">
               <h3 className="text-xl font-black uppercase mb-4 tracking-tight flex items-center gap-2">
                 <span className="bg-ink text-paper px-2 py-1 leading-none text-sm">NOTE</span> PROCESS
               </h3>
               <p className="text-lg font-medium leading-relaxed bg-paper-dim p-6 border border-ink/20 italic">
                 {person.processNotes}
               </p>
             </div>

             <div>
               <h3 className="text-xl font-black uppercase mb-4 tracking-tight flex items-center gap-2">
                 <span className="bg-accent text-ink border border-ink px-2 py-1 leading-none text-sm">ASK</span> OPEN QUESTIONS
               </h3>
               <ul className="flex flex-col gap-4">
                 {person.openQuestions.map((q, idx) => (
                   <li key={idx} className="text-lg font-bold uppercase leading-tight relative pl-6 border-l-2 border-ink">
                     {q}
                   </li>
                 ))}
               </ul>
             </div>
          </article>
        ))}
      </div>
    </div>
  );
}
