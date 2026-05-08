import { Link } from "wouter";
import { synthesisData, interviewees } from "../data";
import { Header } from "../components/Header";

export function SynthesisPage() {
  const { groupFindings, emergingQuestions, designOutputRationale } = synthesisData;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32">
      <Header />

      <div className="mb-24 relative">
        <div className="absolute top-0 right-[20%] w-16 h-16 md:w-32 md:h-32 bg-accent rounded-full -z-10 mix-blend-multiply origin-center translate-y-[-20%]"></div>
        <h1 className="text-[12vw] xl:text-[9.5vw] leading-[0.85] font-black tracking-tighter uppercase mb-12 break-words">
          THE HIDDEN IMPACT OF DESIGN
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-ink">
          <div>
            <h3 className="text-lg font-black tracking-tight mb-4 uppercase">Output Rationale</h3>
            <p className="text-lg md:text-xl leading-tight font-medium text-balance">
              {designOutputRationale}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight mb-4 uppercase">Emerging Questions</h3>
            <ul className="space-y-4">
              {emergingQuestions.map((q, idx) => (
                <li key={idx} className="text-lg md:text-xl font-medium leading-tight">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mb-24 pt-12 border-t border-ink">
        <h2 className="text-5xl md:text-[6vw] leading-[0.9] font-black tracking-tighter uppercase mb-12">INTERVIEWEES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {interviewees.map((person) => (
            <Link key={person.id} href={`/interviewee/${person.id}`}>
              <a className="group block cursor-pointer group hover:-translate-y-1 transition-transform">
                <div className="aspect-[4/3] sm:aspect-square bg-paper-dim mb-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300 border border-ink">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors z-10 mix-blend-multiply" />
                  {person.imageAssets.length > 0 ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/${person.imageAssets[0].filename}`}
                      alt={person.imageAssets[0].altText}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-black text-ink/10 group-hover:scale-110 transition-transform duration-500">
                      {person.displayName.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-[1] mb-2 group-hover:text-ink/70">
                  {person.displayName}
                </h3>
                <p className="font-medium text-base leading-tight h-[2.5rem] line-clamp-2">{person.summary.oneLine}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-12 border-t border-ink grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[4vw] leading-[0.9] font-black tracking-tighter uppercase mb-6">SHARED PATTERNS</h2>
          <p className="text-lg md:text-xl leading-tight font-medium">
            {groupFindings.sharedPatterns}
          </p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[4vw] leading-[0.9] font-black tracking-tighter uppercase mb-6">PRODUCTIVE DISAGREEMENTS</h2>
          <p className="text-lg md:text-xl leading-tight font-medium">
            {groupFindings.productiveDisagreements}
          </p>
        </div>
      </section>
      
      <section className="pt-12 border-t border-ink mt-24">
         <h2 className="text-4xl md:text-5xl lg:text-[4vw] leading-[0.9] font-black tracking-tighter uppercase mb-8">CROSS-CUTTING THEMES</h2>
         <div className="flex flex-wrap gap-4">
            {groupFindings.crossCuttingThemes.map((theme, idx) => (
               <span key={idx} className="px-6 py-3 border border-ink text-xl md:text-2xl font-black tracking-tight uppercase hover:bg-accent cursor-pointer transition-colors bg-paper-dim">
                 {theme}
               </span>
            ))}
         </div>
      </section>
    </div>
  );
}
