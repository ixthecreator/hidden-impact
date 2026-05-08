export interface Interviewee {
  id: string;
  displayName: string;
  interviewerName: string;
  interviewDate: string;
  interviewFormat: string;
  interviewDurationMinutes: number | null;
  anonymized: boolean;
  realNameIfNotAnonymized: string | null;
  summary: {
    oneLine: string;
    shortAbstract: string;
  };
  persona: {
    background: string;
    designPhilosophy: string;
    voice: string;
    contradictions: string | null;
  };
  themes: string[];
  quotableLines: {
    quote: string;
    context: string;
    themeTag: string;
  }[];
  hiddenImpact: {
    intendedOutput: string;
    actualImpact: string;
    whoIsAffected: string[];
  };
  imageAssets: {
    filename: string;
    caption: string;
    suggestedUse: string;
    altText: string;
  }[];
  openQuestions: string[];
  processNotes: string;
}

export interface Synthesis {
  groupFindings: {
    sharedPatterns: string;
    productiveDisagreements: string;
    crossCuttingThemes: string[];
  };
  emergingQuestions: string[];
  designOutputRationale: string;
}

export const interviewees: Interviewee[] = [
  {
    id: "vogue-art-director",
    displayName: "Art Director, Vogue",
    interviewerName: "Student A",
    interviewDate: "2026-03-12",
    interviewFormat: "video call",
    interviewDurationMinutes: 65,
    anonymized: true,
    realNameIfNotAnonymized: null,
    summary: {
      oneLine: "Visual storytelling functions as an invisible framework dictating cultural aspirations.",
      shortAbstract: "The interview explored the tension between artistic vision and commercial viability in high fashion publishing. The art director detailed how editorial layouts construct aspirational realities that subtly shift cultural norms. What surprised the interviewer was the sheer level of calculation involved in appearing spontaneous, revealing that effortless beauty requires immense, invisible labor."
    },
    persona: {
      background: "Former graphic designer who transitioned to editorial fashion. Trained in classical typography but forced to constantly adapt to digital-first, social-driven visual economies.",
      designPhilosophy: "They view their work as 'curated desire'—orchestrating images and texts not just to sell clothes, but to sell a very specific, unattainable lifestyle.",
      voice: "Fast-paced, heavily reliant on industry jargon ('bleed', 'gutter', 'comp'), yet prone to sudden, introspective metaphors about 'weight' and 'space' in layouts.",
      contradictions: "Insisted that fashion is becoming more democratic and inclusive, while simultaneously admitting that the core mechanics of editorial design still rely on maintaining exclusivity and distance."
    },
    themes: ["manufactured spontaneity", "invisible labor", "aspirational curation", "commercial tension"],
    quotableLines: [
      {
        quote: "We aren't designing pages. We are designing the feeling of not having what's on the page.",
        context: "Discussing the core purpose of a fashion editorial spread.",
        themeTag: "aspirational curation"
      },
      {
        quote: "The easiest looking shoots take the most bodies in the room to pull off.",
        context: "Revealing the logistical reality of 'effortless' beauty.",
        themeTag: "invisible labor"
      }
    ],
    hiddenImpact: {
      intendedOutput: "A cohesive, visually arresting 12-page magazine spread featuring the fall collection.",
      actualImpact: "Normalizes specific body standards and class indicators as the cultural baseline. It actively manufactures a state of perpetual lack in the reader, driving consumption not of products, but of identity.",
      whoIsAffected: [
        "young women consuming fashion media",
        "freelance creatives adjusting portfolios to match this standard",
        "clothing manufacturers interpreting these trends"
      ]
    },
    imageAssets: [
      {
        filename: "moodboard_vogue.jpg",
        caption: "A cluttered physical moodboard with fabric swatches and tear sheets.",
        suggestedUse: "hero image",
        altText: "A cork board covered in overlapping magazine cutouts, fabric pieces, and handwritten notes."
      }
    ],
    openQuestions: [
      "Can editorial design truly subvert the commercial imperatives it relies on for funding?",
      "How does the digitalization of fashion imagery change the 'weight' the art director spoke of?"
    ],
    processNotes: "The interviewer realized their assumption that the art director acted alone was deeply flawed. The process revealed an intense hierarchy of approval that dilutes individual authorship."
  },
  {
    id: "event-planner",
    displayName: "Founder, The Drama Queen Events (Mumbai)",
    interviewerName: "Shaan Patel",
    interviewDate: "Spring 2026",
    interviewFormat: "video call",
    interviewDurationMinutes: null,
    anonymized: false,
    realNameIfNotAnonymized: "Khyati Patel",
    summary: {
      oneLine: "A Mumbai event designer whose first design move is reading the family, while the labor that builds her temporary spaces stays invisible.",
      shortAbstract: "Khyati Patel runs an event design company in Mumbai handling everything from children's birthday parties to thousand-guest Indian weddings. The interview opened with an unexpected reframing: her process does not begin with mood boards or color palettes but with reading a family — its emotion, hierarchy, and the meaning of the occasion. From there she translates feeling into temporary space. The conversation surfaced two parallel forms of invisibility: the physical labor of mostly male crews who build the structures before guests arrive, and the months of conceptual decision-making that disappear into a seamless experience. She framed both with a stitching-seam metaphor — craftsmanship that is sometimes meant to be seen, sometimes meant to vanish."
    },
    persona: {
      background: "Khyati Patel is the founder and owner of The Drama Queen Events, a Mumbai-based event planning and design company that handles a wide range of occasions from children's birthday parties and baby showers to thousand-person Indian weddings. She works at the intersection of family ritual and spatial design, leading a team that splits along gendered lines between creative direction (women) and physical build-out (men). The transcript does not specify her formal training or career path before founding the company; that biographical material would need to be confirmed in a follow-up.",
      designPhilosophy: "Khyati frames her practice as translation rather than decoration — the work of converting a family's emotion into a temporary spatial experience that tells a story. She refuses the opposition between tradition and creativity, treating Indian cultural ritual as the starting material for contemporary design rather than a constraint on it. Her central claim is that designing something temporary produces something permanent: a few hours of designed space generate years of memory. She also treats productive friction with clients as evidence that creative pressure is being applied; absence of tension, for her, signals undercooked ideas.",
      voice: "Plain, warm, and confident, with a tendency toward declarative reframings ('I don't see tradition and creativity as opposites'). She uses craft and textile metaphors — the stitching seam — when explaining labor, and storytelling vocabulary when explaining process. She does not use trade jargon. She acknowledges hard questions briefly but tends to redirect to what she can speak to as a designer; she does not dwell on the labor conditions of her physical crew.",
      contradictions: "The clearest contradiction sits between her articulated awareness of invisible labor — the men who build the structures and disappear before guests arrive — and her framing of that invisibility as a craft choice ('sometimes the goal is for it to just disappear so everything feels effortless'). Aestheticizing invisibility as a stitching seam softens what is also a labor condition: night-shift work to meet morning-event schedules. She names the dynamic but does not theorize the cost."
    },
    themes: ["invisible labor", "reading a family", "translational design", "temporary permanence", "gendered craft hierarchy", "tradition as source"],
    quotableLines: [
      {
        quote: "I'm not asking about the event details right away, I'm trying to understand the family, the emotion behind the occasion, and what the celebration means to them.",
        context: "Describing the very first move of her design process, in response to a question about how a project unfolds from client intake to finished event.",
        themeTag: "reading a family"
      },
      {
        quote: "Designing something temporary creates a permanent memory, and that's the real goal.",
        context: "Closing reflection on what event design actually accomplishes, after discussing how clients sometimes underrecognize the form as design at all.",
        themeTag: "temporary permanence"
      },
      {
        quote: "Sometimes people appreciate seeing the craftsmanship, and sometimes the goal is for it to just disappear so everything feels effortless.",
        context: "The stitching-seam metaphor she offered when asked whether clients recognize the gendered labor on her team equally.",
        themeTag: "invisible labor"
      },
      {
        quote: "If you don't have tension with a client, you're not pushing creative ideas enough.",
        context: "Response to a question about how she navigates disagreement between her own design vision and what a client wants.",
        themeTag: "translational design"
      },
      {
        quote: "In India especially, culture is the starting point for design.",
        context: "Her reframing of the question about balancing tradition and creative vision, refusing the binary the question implied.",
        themeTag: "tradition as source"
      },
      {
        quote: "The workers, mostly men on our team, are building structures, carrying furniture, and setting up installations. But all of that happens before the guests arrive.",
        context: "Describing the gendered division on her team in response to a question about whether clients recognize all forms of labor equally.",
        themeTag: "gendered craft hierarchy"
      }
    ],
    hiddenImpact: {
      intendedOutput: "A temporary, memorable event environment that translates a family's emotion and cultural ritual into spatial experience — lighting, flowers, layout, and movement designed so the celebration tells a coherent story for the few hours it exists.",
      actualImpact: "Beyond the event itself, the work shapes which forms of celebration become culturally legible as 'designed' versus invisible labor, and who gets credited as a designer at all — women in creative direction, not the men building structures overnight. Her practice also produces a specific Indian-modern aesthetic that circulates as aspirational across class lines in Mumbai, and authors the emotional architecture of family memory: the rituals her clients will remember, photograph, and reproduce. Quietly, her work sets templates for what middle- and upper-class Indian celebration is supposed to look and feel like.",
      whoIsAffected: [
        "middle- and upper-class Indian families staging life-cycle rituals",
        "mostly male event-build crews working overnight shifts in Mumbai",
        "women event designers visible to clients as the creative face of the work",
        "vendors and sub-contractors operating across the collaborative Mumbai event circuit",
        "children whose early sensory memories are shaped by designed environments"
      ]
    },
    imageAssets: [],
    openQuestions: [
      "How would Khyati's account of invisible labor change if the conversation included one of the men who build her structures, rather than only the designer who directs them?",
      "If Indian cultural ritual is design's starting point rather than a constraint, what happens when clients arrive with London or Dubai references that conflict with that ritual — whose vision actually wins, and how often?",
      "Does framing temporary work as producing permanent memory help theorize the form, or does it obscure the precarity of the workers whose temporary contracts make that memory possible?",
      "What would it take, structurally, for the night-shift labor of Mumbai event construction to be recognized as design work rather than decoration-support?"
    ],
    processNotes: "The interview revised my central premise. I came in expecting to ask about aesthetics and cultural influence; the most theoretically loaded answer arrived in the first minute, when Khyati located her practice in empathy rather than visual decision-making. That reframed the whole conversation. I also noticed where my questioning faltered — when she described night-shift workers being briefly acknowledged but quickly subsumed into the stitching-seam metaphor, I let the topic move on rather than pressing. A future interview would slow down at that moment. I also note that Khyati and I share a surname; whether and how that shaped her candor with me is something I cannot independently assess and want to flag for the team."
  },
  {
    id: "long-museum-curator",
    displayName: "Curator, Long Museum",
    interviewerName: "Student C",
    interviewDate: "2026-03-18",
    interviewFormat: "hybrid",
    interviewDurationMinutes: 90,
    anonymized: false,
    realNameIfNotAnonymized: "Chen Wei",
    summary: {
      oneLine: "Private institutional curation acts as a translation layer between local heritage and global art markets.",
      shortAbstract: "The interview focused on the interpretation of art within a private museum setting in Shanghai. The curator discussed the nuances of institutional politics and the role of the museum in shaping cultural memory. The researcher was surprised by the heavy reliance on Western art-school frameworks to validate Chinese contemporary art."
    },
    persona: {
      background: "Returnee Chinese curator with a background in US art schools. Now navigates the complex landscape of private funding and government regulations in Shanghai's West Bund.",
      designPhilosophy: "Approaches exhibitions as acts of 'translational identity.' Seeks to present local narratives in a visual vocabulary that is legible to the international art establishment.",
      voice: "Academic and reflective, frequently code-switching between English critical theory ('relational aesthetics', 'hegemony') and Shanghainese colloquialisms when discussing local realities.",
      contradictions: "Advocated for decolonizing the museum space, but admitted that securing funding and prestige still requires adhering to Western standards of exhibition design."
    },
    themes: ["translational identity", "curatorial authorship", "institutional friction"],
    quotableLines: [
      {
        quote: "We are translating our history not just for the West, but for a local public that has been taught to look at art through a Western lens.",
        context: "Discussing the intended audience for a recent historical retrospective.",
        themeTag: "translational identity"
      }
    ],
    hiddenImpact: {
      intendedOutput: "A coherent curatorial narrative linking a private collection of contemporary Chinese art to global movements.",
      actualImpact: "Legitimizes private wealth as a steward of public cultural memory. It subtly redefines Chinese contemporary art by prioritizing works that fit into an easily exported, translation-friendly global aesthetic.",
      whoIsAffected: [
        "local artists adjusting their practice for institutional visibility",
        "Shanghai residents visiting the West Bund cultural district",
        "the international art market assessing the value of these works"
      ]
    },
    imageAssets: [
      {
        filename: "gallery_longmuseum.jpg",
        caption: "Raw concrete exhibition halls of the Long Museum.",
        suggestedUse: "hero image",
        altText: "A massive, vaulted concrete gallery space with minimal lighting and a single large painting on the far wall."
      }
    ],
    openQuestions: [
      "Can a private museum truly serve the public interest, or does it inevitably serve the legacy of its founders?",
      "How does the architecture of the Long Museum dictate the kind of art that can be shown?"
    ],
    processNotes: "The interviewer recognized how their own Western-centric education influenced the questions they asked, prompting a necessary pivot during the conversation to center local perspectives."
  },
  {
    id: "polo-concept-designer",
    displayName: "Concept Designer, Polo Ralph Lauren",
    interviewerName: "Student D",
    interviewDate: "2026-03-20",
    interviewFormat: "phone",
    interviewDurationMinutes: 45,
    anonymized: true,
    realNameIfNotAnonymized: null,
    summary: {
      oneLine: "Brand world-building relies on the meticulous fabrication of a non-existent, idealized past.",
      shortAbstract: "This interview explored the mechanics of identity manufacturing through fashion. The designer explained how moodboards and mockups are used to construct the 'Polo lifestyle.' The major revelation was that the heritage they are designing isn't historical, but entirely synthetic—a hyper-real simulacrum of Americana."
    },
    persona: {
      background: "Studied illustration before moving into concept design. Now spends days sourcing vintage references and building the narrative frameworks that dictate the seasonal collections.",
      designPhilosophy: "Views their work as 'manufactured nostalgia.' They are not producing clothes; they are producing the myth of the person who wears the clothes.",
      voice: "Evocative and deeply visual. Speaks in cinematic terms ('mise-en-scène', 'character study', 'the establishing shot') when describing retail layouts or ad campaigns.",
      contradictions: "Acknowledged that the Americana they build is rooted in exclusivity and often erasure, yet genuinely loves and defends the emotional comfort the aesthetic provides."
    },
    themes: ["manufactured nostalgia", "identity fabrication", "synthetic heritage"],
    quotableLines: [
      {
        quote: "We don't look at archives to find out what happened. We look at archives to figure out what should have happened.",
        context: "Explaining the difference between historical research and concept research.",
        themeTag: "manufactured nostalgia"
      }
    ],
    hiddenImpact: {
      intendedOutput: "A season-defining lookbook and retail rollout plan based on a specific thematic narrative (e.g., 'Nantucket 1974').",
      actualImpact: "Commodifies class identity and historical nostalgia. It establishes a dominant, often whitewashed version of American heritage as the global standard for classic style, marginalizing other narratives.",
      whoIsAffected: [
        "consumers buying into the accessible entry points of the brand",
        "retail workers tasked with performing the brand identity",
        "communities whose actual histories are flattened into aesthetic moodboards"
      ]
    },
    imageAssets: [
      {
        filename: "concept_polo.jpg",
        caption: "A massive internal concept deck spread across a table.",
        suggestedUse: "inline portrait",
        altText: "A collection of vintage photographs, fabric swatches, and color palettes neatly arranged to tell a story."
      }
    ],
    openQuestions: [
      "What happens to cultural memory when commercial brands become its primary archivists?",
      "Can nostalgia be decoupled from the problematic histories it often romanticizes?"
    ],
    processNotes: "The researcher learned the importance of challenging a subject's use of 'we'—realizing that corporate identity often masks individual ethical compromises."
  }
];

export const synthesisData: Synthesis = {
  groupFindings: {
    sharedPatterns: "Across all four interviews, a central finding emerged: these designers do not primarily view themselves as creating discrete objects (a magazine, a party, an exhibition, a shirt), but as architects of immaterial experiences and desires. Whether it's the Vogue Art Director 'designing the feeling of lack' or the Event Planner engineering 'social choreography,' design at this scale operates as an invisible infrastructure that governs how people move, what they value, and who they aspire to be.",
    productiveDisagreements: "A key tension arose regarding the honesty of the design process. The Concept Designer explicitly embraced the artificiality of their work ('manufactured nostalgia'), while the Event Planner insisted their engineered environments facilitated 'genuine' connection. Furthermore, the Long Museum Curator grappled with the ethical weight of their institutional power, whereas the Vogue Art Director largely accepted commercial imperatives as natural law. These disagreements highlight varying levels of comfort with design as a manipulative force.",
    crossCuttingThemes: [
      "The Aesthetics of Control",
      "Invisible Labor in Lived Spaces",
      "Translating Identity for the Market",
      "The Commodification of Experience"
    ]
  },
  emergingQuestions: [
    "How can designers make their invisible infrastructures visible to the public?",
    "When does curation cross over into erasure?",
    "Are all designed experiences inherently manipulative?",
    "How can we intervene in systems that are designed to feel natural or inevitable?"
  ],
  designOutputRationale: "The website must reflect the tension between the polished surface of these professions and their messy, complex impact. We will use a clean, editorial layout—evoking the aesthetic authority of the spaces these designers inhabit—but disrupt it with raw process notes, marginalia, and stark, isolated quotes. The navigation will be driven by the cross-cutting themes rather than just the individuals, forcing the viewer to see the structural connections uniting fashion, events, and institutional curation."
};
