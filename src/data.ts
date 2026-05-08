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
    displayName: "Event Planner",
    interviewerName: "Student B",
    interviewDate: "2026-03-15",
    interviewFormat: "in-person",
    interviewDurationMinutes: 80,
    anonymized: false,
    realNameIfNotAnonymized: "Sarah Jenkins",
    summary: {
      oneLine: "The design of celebration is less about joy and more about controlling social choreography.",
      shortAbstract: "This conversation examined the mechanics of temporary environments and social rituals. The planner revealed how space, lighting, and timeline are manipulated to force desired interactions. The most striking insight was how the illusion of organic celebration is entirely engineered, reducing attendees to predictable variables."
    },
    persona: {
      background: "Studied theater production before moving into corporate and high-end private event planning. Runs a boutique agency specializing in 'immersive experiences.'",
      designPhilosophy: "Views events as temporary, high-stakes narratives. Believes that if people notice the design, she has failed; the design must be felt, not seen.",
      voice: "Highly structured, precise, and practical. Uses logistical metaphors ('flow', 'bottleneck', 'transition') to describe human emotional states.",
      contradictions: "Claimed her goal is to facilitate genuine human connection, yet her methods involve extreme, almost manipulative control over every environmental variable."
    },
    themes: ["social choreography", "temporary permanence", "engineered spontaneity"],
    quotableLines: [
      {
        quote: "If you want people to talk, you make the music slightly too loud so they have to lean in. It's not magic, it's acoustics.",
        context: "Explaining how environment dictates social intimacy.",
        themeTag: "social choreography"
      }
    ],
    hiddenImpact: {
      intendedOutput: "A seamless, three-hour corporate gala that feels elegant and engaging.",
      actualImpact: "Reinforces social hierarchies by physically organizing bodies in space (VIP sections, table placements). It scripts human interaction, limiting the possibility for genuine, unmediated connection while producing the aesthetic of it.",
      whoIsAffected: [
        "service workers executing the invisible labor",
        "attendees navigating the scripted social space",
        "the local neighborhood experiencing the temporary disruption"
      ]
    },
    imageAssets: [
      {
        filename: "floorplan_gala.jpg",
        caption: "A top-down architectural floorplan with flow arrows.",
        suggestedUse: "context image",
        altText: "A blueprint of a ballroom showing circular tables and designated pathways for servers and guests."
      }
    ],
    openQuestions: [
      "What happens to the memory of an event when the experience is so heavily engineered?",
      "Who truly owns the space during a temporary, privatized takeover?"
    ],
    processNotes: "The interview forced the researcher to reconsider architecture not just as permanent structures, but as temporal interventions that dictate power dynamics."
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
