import { Link, useParams } from "wouter";
import { interviewees } from "../data";
import { NotFoundPage } from "./NotFoundPage";
import { Header } from "../components/Header";

export function IntervieweePage() {
  const params = useParams<{ id: string }>();
  const person = interviewees.find((i) => i.id === params.id);

  if (!person) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-32">
      <Header />

      <div className="mb-16 relative">
        <div className="absolute top-[50%] right-[10%] w-24 h-24 md:w-48 md:h-48 bg-accent rounded-full -z-10 mix-blend-multiply origin-center translate-y-[-50%] opacity-80 blur-sm"></div>
        <h1 className="text-[12vw] xl:text-[9.5vw] leading-[0.8] font-black tracking-tighter uppercase mb-4 break-words">
          {person.displayName}
        </h1>
        <div className="text-4xl md:text-6xl font-black tracking-tighter text-ink/30 uppercase mt-2">
          {person.interviewerName}
        </div>
      </div>

      {person.imageAssets.length > 0 && (
        <div className="mb-12 border border-ink">
          <img
            src={`${import.meta.env.BASE_URL}images/${person.imageAssets[0].filename}`}
            alt={person.imageAssets[0].altText}
            className="w-full max-h-[60vh] object-cover object-top"
          />
          <p className="text-xs font-medium uppercase tracking-widest text-ink/50 px-4 py-3 border-t border-ink">
            {person.imageAssets[0].caption}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-ink pt-12">
        
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          <section>
            <p className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-8">
              {person.summary.oneLine}
            </p>
            <p className="text-xl font-medium leading-tight text-balance">
              {person.summary.shortAbstract}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-ink">
            <div>
              <h2 className="text-xl font-black tracking-tight uppercase mb-3">BACKGROUND</h2>
              <p className="text-lg font-medium leading-tight">{person.persona.background}</p>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight uppercase mb-3">DESIGN PHILOSOPHY</h2>
              <p className="text-lg font-medium leading-tight">{person.persona.designPhilosophy}</p>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight uppercase mb-3">VOICE</h2>
              <p className="text-lg font-medium leading-tight">{person.persona.voice}</p>
            </div>
            {person.persona.contradictions && (
              <div className="bg-accent p-6 border border-ink">
                <h2 className="text-xl font-black tracking-tight uppercase mb-3">CONTRADICTIONS</h2>
                <p className="text-lg font-medium leading-tight">{person.persona.contradictions}</p>
              </div>
            )}
          </section>

          <section className="pt-8 border-t border-ink">
            <h2 className="text-5xl md:text-[5vw] leading-[0.9] font-black tracking-tighter uppercase mb-10">HIDDEN IMPACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-black tracking-tight uppercase mb-3">INTENDED OUTPUT</h3>
                <p className="text-lg font-medium leading-tight">{person.hiddenImpact.intendedOutput}</p>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight uppercase mb-3">ACTUAL IMPACT</h3>
                <p className="text-lg font-medium leading-tight">{person.hiddenImpact.actualImpact}</p>
              </div>
              <div className="md:col-span-2 mt-4">
                <h3 className="text-xl font-black tracking-tight uppercase mb-4">WHO IS AFFECTED</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {person.hiddenImpact.whoIsAffected.map((group, idx) => (
                    <li key={idx} className="border border-ink p-4 text-base font-bold uppercase leading-tight bg-paper-dim">
                      {group}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-ink mb-16">
            <h2 className="text-5xl md:text-[5vw] leading-[0.9] font-black tracking-tighter uppercase mb-12">KEY VERBATIM</h2>
            <div className="flex flex-col gap-16">
              {person.quotableLines.map((q, idx) => (
                <div key={idx} className="relative pl-4 md:pl-8 border-l border-ink max-w-3xl">
                  <blockquote className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6 relative z-10 uppercase">
                    "{q.quote}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 text-sm font-bold uppercase">
                    <span className="bg-ink text-paper px-3 py-1.5">{q.themeTag}</span>
                    <span className="text-ink/60">{q.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
           <div className="border border-ink p-6 lg:p-8 bg-paper">
              <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 border-b border-ink pb-2">METADATA</h3>
              <dl className="flex flex-col gap-4 text-sm lg:text-base font-bold uppercase">
                <div className="grid grid-cols-[1fr_2fr] gap-4">
                  <dt className="text-ink/50">DATE</dt>
                  <dd>{person.interviewDate}</dd>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4 border-t border-ink/20 pt-4">
                  <dt className="text-ink/50">DURATION</dt>
                  <dd>{person.interviewDurationMinutes ? `${person.interviewDurationMinutes} MIN` : 'UNKNOWN'}</dd>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4 border-t border-ink/20 pt-4">
                  <dt className="text-ink/50">FORMAT</dt>
                  <dd>{person.interviewFormat}</dd>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-4 border-t border-ink/20 pt-4">
                  <dt className="text-ink/50">STUDENT</dt>
                  <dd>{person.interviewerName}</dd>
                </div>
                {!person.anonymized && person.realNameIfNotAnonymized && (
                  <div className="grid grid-cols-[1fr_2fr] gap-4 border-t border-ink/20 pt-4">
                    <dt className="text-ink/50">NAME</dt>
                    <dd>{person.realNameIfNotAnonymized}</dd>
                  </div>
                )}
                {person.anonymized && (
                  <div className="mt-4 pt-4 border-t border-ink/20 text-ink bg-accent p-3 text-center border-ink">
                    ANONYMOUS SOURCE
                  </div>
                )}
              </dl>
           </div>

           <div className="border border-ink p-6 lg:p-8 bg-paper-dim">
              <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">PROCESS NOTES</h3>
              <p className="text-lg font-medium leading-tight">
                {person.processNotes}
              </p>
           </div>

           <div>
              <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 border-b border-ink pb-2">THEMES</h3>
              <div className="flex flex-col gap-2">
                 {person.themes.map((theme, i) => (
                    <div key={i} className="text-lg font-bold uppercase tracking-tight py-2 border-b border-ink/20 hover:bg-accent transition-colors px-2 -mx-2">
                       {theme}
                    </div>
                 ))}
              </div>
           </div>

           <div className="mb-8">
              <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 border-b border-ink pb-2 mt-8">OPEN QUESTIONS</h3>
              <ul className="flex flex-col gap-6">
                 {person.openQuestions.map((q, idx) => (
                    <li key={idx} className="text-xl font-bold leading-tight uppercase relative pl-6">
                       <span className="absolute left-0 text-accent select-none font-black text-2xl leading-none">?</span>
                       {q}
                    </li>
                 ))}
              </ul>
           </div>
        </aside>

      </div>
    </div>
  );
}
