// Design case studies in nine sections:
//   Problem → Research → Product strategy → UX → Visual identity → Product
//   → Marketing → Social → Results
//
// Everything factual is checked against source:
//   Hearing Buddy   ~/Developer/Hearing-Buddy + ~/Developer/hearingbuddyapp
//   Hiking Passport ~/Developer/Hiking-Passport + ~/Developer/hiking-passport-website
//   Tappily         the App Store listing, the 2024 IWD talk, the shipped screens
// Social numbers: Metricool (2026-09-08/09). TikTok comments, handles, like and
// reply counts pulled from the live account on 2026-09-22; wording tidied for
// spelling only.
//
// Headings carry a single "|" — everything after it renders on its own line in
// the app's accent colour. Any `value` in a stat list counts up on scroll.

export type Swatch = { hex: string; name: string };
export type Stat = { value: string; label: string; source?: string };
export type Point = { title: string; body: string };

export type CaseStudy = {
  slug: string;
  name: string;
  years: string;
  role: string;
  platforms: string;
  tagline: string;
  icon: string;
  status: string;
  badges: string[];
  cardMeta: string;
  cardBadge: string;
  category: string;
  accent: { from: string; mid: string; to: string };
  band: { light: string; dark: string };
  lede: string;

  /** Hero: headline numbers and the facts beside them. */
  overview: { stats: Stat[]; facts: { k: string; v: string }[] };

  /** 1 — Problem. */
  problem: { heading: string; note: string; scale?: Stat[] };

  /** 2 — Research. */
  research: {
    heading: string;
    note: string;
    quotes?: {
      user: string;
      text: string;
      likes: number;
      replies?: number;
      date: string;
    }[];
    pullQuote?: { text: string; cite: string };
    findings?: { signal: string; shipped: string }[];
    audiences?: { name: string; detail: string; evidence: string }[];
    /** Posting into a category to see whether the audience is reachable,
     *  before committing to building for it. */
    preTest?: {
      title: string;
      note: string;
      stats: Stat[];
      posts: { title: string; views: number; flag?: string }[];
      footer: string;
    };
  };

  /** 3 — Product strategy. */
  strategy: { heading: string; note: string; bets: Point[] };

  /** 4 — UX. */
  ux: {
    heading: string;
    note: string;
    /** An annotated breakdown of one component. */
    anatomy?: {
      title: string;
      note: string;
      parts: { name: string; detail: string }[];
      shot?: { src: string; alt: string };
    };
    rules: Point[];
  };

  /** 5 — Visual identity. */
  identity: {
    heading: string;
    note: string;
    palette: { note: string; groups: { name: string; swatches: Swatch[] }[] };
    typography: {
      note: string;
      faces: { name: string; role: string; sample: string; detail: string }[];
    };
    characters?: {
      title: string;
      note: string;
      list: {
        file: string;
        name: string;
        role: string;
        hex: string;
        to: string;
      }[];
    };
    themes?: {
      title: string;
      note: string;
      list: { file: string; name: string; park: string; swatches: string[] }[];
    };
  };

  /** 6 — Product. */
  product: {
    heading: string;
    note: string;
    screens?: { title: string; images: { src: string; alt: string }[] };
    second?: { title: string; images: { src: string; alt: string }[] };
    /** The adaptivity rebuild, where there is one. */
    adaptivity?: {
      title: string;
      note: string;
      points: Point[];
      shot?: { src: string; alt: string };
    };
    system?: { title: string; body: string; from: string; to: string[] };
  };

  /** 7 — Marketing. */
  marketing: {
    heading: string;
    note: string;
    cycle: { when: string; title: string; body: string }[];
  };

  /** 8 — Social. */
  social: {
    heading: string;
    note: string;
    strategies: Point[];
    pipeline: Point;
    stats?: Stat[];
  };

  /** 9 — Results. */
  results: { stats: Stat[]; footer: string };
};

export const caseStudies: CaseStudy[] = [
  // ═══════════════════════════════════════════════════════════ Hearing Buddy
  {
    slug: "hearing-buddy",
    name: "Hearing Buddy",
    years: "2025 to now",
    role: "Co-founder, designer, and iOS engineer",
    platforms: "iPhone, iPad, Apple Watch, Mac, and Vision Pro",
    tagline: "Live captions that help Deaf and hard of hearing people hear.",
    icon: "/apps/hearing-buddy.jpg",
    status: "Shipping",
    cardMeta: "Design + iOS · 5 platforms",
    cardBadge: "Apple Design Award Finalist",
    category: "Accessibility · iOS",
    accent: { from: "#5BC0DE", mid: "#C4A0D8", to: "#E16A78" },
    band: { light: "#EDF6F9", dark: "#0E1A1F" },
    badges: [
      "2026 Apple Design Award Finalist",
      "Featured 7 times",
      "Apps We Love",
    ],
    lede: "I am hard of hearing. I built the app I had been waiting for someone else to build, and designed it as a person rather than a tool.",

    overview: {
      stats: [
        { value: "2026", label: "Apple Design Award Finalist" },
        { value: "7", label: "App Store features in 12 months" },
        { value: "5", label: "Apple platforms" },
        { value: "16", label: "buddy characters designed" },
        { value: "730K", label: "views from the research" },
      ],
      facts: [
        { k: "Role", v: "Co-founder, designer, iOS engineer" },
        { k: "Team", v: "Two people" },
        { k: "Ships on", v: "iPhone, iPad, Watch, Mac, Vision Pro" },
        { k: "Built with", v: "SwiftUI, on-device speech" },
      ],
    },

    problem: {
      heading: "The tools were charging rent on|an accessibility need",
      note: "Captioning apps metered a disability by the minute, or capped free users with strict time limits. I spent a year and a half in an office apologising for not hearing people who would not adjust. Then Apple shipped on-device speech models at WWDC25, and the app I had wanted for years became possible to build.",
      scale: [
        {
          value: "1.5B",
          label: "live with some degree of hearing loss",
          source: "WHO",
        },
        { value: "2.5B", label: "projected by 2050", source: "WHO" },
        { value: "430M", label: "need rehabilitation today", source: "WHO" },
      ],
    },

    research: {
      heading: "Social media is my|research instrument",
      note: "I score the keywords people already search, turn each one into a video, and read the view count as a vote on which pain point lands. The comments are the qualitative half — one video on the signs of hearing loss drew 84 of them.",
      quotes: [
        {
          user: "Sarah",
          text: "All of this, but I heard that hearing loss only comes with ringing in the ears, and I'm still young — so now I'm wondering if I'm imagining it.",
          likes: 67,
          replies: 6,
          date: "4-27",
        },
        {
          user: "emmajadem",
          text: "Sorry, am I finally connecting with my people? I've never felt so heard in my life!",
          likes: 41,
          replies: 5,
          date: "5-16",
        },
        {
          user: "Jackie B",
          text: "Half the time I just smile and nod in big groups or loud places, because I have no idea what anyone said.",
          likes: 41,
          replies: 1,
          date: "5-19",
        },
        {
          user: "Tania40RT",
          text: "I can't hear you properly. I have to concentrate on what you're saying, because the background music is too loud.",
          likes: 33,
          replies: 2,
          date: "5-22",
        },
        {
          user: "Fenny",
          text: "It's not volume but clarity that's needed. I wish people would speak more clearly.",
          likes: 19,
          replies: 1,
          date: "5-27",
        },
        {
          user: "Tuberculosis",
          text: "So real. I'm not deaf, I just have auditory processing issues, and I get so excited when I don't have to say \"huh?\"",
          likes: 9,
          replies: 1,
          date: "7-9",
        },
      ],
      findings: [
        {
          signal: "Clarity, not volume",
          shipped:
            "Captions are the free core. Amplification is the paid extra.",
        },
        { signal: "The fake nod", shipped: "Question Alerts and Name Alerts." },
        { signal: "Listening fatigue", shipped: "Conversation summaries." },
        {
          signal: "Undiagnosed audience",
          shipped: "Hearing test support through Apple Health.",
        },
        {
          signal: "Adjacent audiences",
          shipped: "A partner content line and an ADHD crossover.",
        },
        {
          signal: "Music blocks the research",
          shipped:
            "The videos changed. Research the audience cannot hear is filtered research.",
        },
      ],
      audiences: [
        {
          name: "Auditory processing",
          detail:
            "Hears the sound, cannot resolve the words — the exact problem captions solve, under a different diagnosis.",
          evidence:
            'Arrived unprompted: "I\'m not deaf, I just have auditory processing issues."',
        },
        {
          name: "ADHD",
          detail:
            "The same failure to hold a thread in a noisy room, from a different cause.",
          evidence:
            "16 carousels, 19,871 views, second only to numbered lists.",
        },
        {
          name: "Undiagnosed",
          detail:
            "Years of workarounds without a word for the problem. The single largest comment theme.",
          evidence:
            "The top comment, at 67 likes, asks whether they are imagining it.",
        },
        {
          name: "Partners and allies",
          detail:
            "Hearing people who want to help and get it wrong. Their own content line, filmed by my co-founder.",
          evidence:
            "4 videos, 11.4K views, the highest share rate on the account.",
        },
      ],
    },

    strategy: {
      heading: "Be the person,|not the transcription window",
      note: "A hearing buddy is what I have always called the person who repeats the question without making me feel like a burden. Every strategic call came out of that one idea.",
      bets: [
        {
          title: "Give the core away",
          body: "Unlimited live captions stay free forever. On-device models made that affordable, and metering an accessibility need was the thing I built this to escape.",
        },
        {
          title: "Sell relief, not minutes",
          body: "The paid tier is amplification, summaries and the companions — the things that reduce effort once you can already read the room.",
        },
        {
          title: 'Never say "AI"',
          body: "Not in the interface, the App Store copy, or a commit message. You named this character. Crediting a model breaks the one relationship the product runs on.",
        },
        {
          title: "Ship where the conversation is",
          body: "Phone in your pocket, watch on your wrist, Mac in the meeting, Vision Pro at the table. The same session, wherever you can actually look.",
        },
      ],
    },

    ux: {
      heading: "One container for everything|that happens mid-conversation",
      note: "During a session you are reading, not browsing. Every control had to collapse into a single surface you can find without looking away from the captions.",
      anatomy: {
        title: "The Box",
        note: "The floating in-session container. A pinned header that never moves, swipeable pages underneath, and cards that change with what the app is doing.",
        parts: [
          {
            name: "Box header",
            detail:
              "Pinned and never swipes: buddy avatar, headline, per-page subline, status icons, minimize.",
          },
          {
            name: "Box pages",
            detail:
              "Buddy, Boost and Share Captions. Swipe between them; the Buddy page is permanent by rule and no toggle can remove it.",
          },
          {
            name: "Cards",
            detail:
              "Each page's content by state — summary, alert and suggestion cards on Buddy; locked, enable and running on Boost.",
          },
          {
            name: "Status icons",
            detail:
              "A control appears when its feature is engaged and slides away when it goes idle, so an active feature is always one tap away.",
          },
          {
            name: "Minimize",
            detail:
              "The Box collapses to a corner avatar, with the header avatar flying to it via matched geometry.",
          },
          {
            name: "Presence capsule",
            detail:
              "Who else is in the room, kept separate from the action bar so people and controls never compete.",
          },
        ],
        shot: {
          src: "/case-studies/hearing-buddy/screens/listening-summary.png",
          alt: "The Box in a live session: a pinned header, a question alert card from Scott, and the current topic written out below it",
        },
      },
      rules: [
        {
          title: "The live line is invisible to VoiceOver",
          body: "Each finalised caption segment is one element; the in-progress line is hidden. A sentence that rewrites itself mid-word is unreadable aloud.",
        },
        {
          title: "Haptics only on the wrist",
          body: "No Watch notifications — they fight the haptic system. One language instead: up for your name, down for a question.",
        },
        {
          title: "Alerts outrank summaries",
          body: "On the Lock Screen a question jumps the queue, shows immediately and dismisses itself after ten seconds. You need it now or not at all.",
        },
        {
          title: "Accessibility ships on all four surfaces",
          body: "VoiceOver labels are mirrored into Mac, Vision and Watch. Nothing ships iOS-only.",
        },
      ],
    },

    identity: {
      heading: "Sixteen palettes,|one reading surface",
      note: "The brand is a cast, not a colour. Choosing a buddy re-themes the entire app — but every gradient has to keep caption text legible over it, because the captions are the product.",
      palette: {
        note: "Each buddy carries a three-colour gradient, a character coat and an accent pair. The identity buddies launch to the awareness month they belong to.",
        groups: [
          {
            name: "The four originals",
            swatches: [
              { hex: "#5BC0DE", name: "Dash" },
              { hex: "#E16A78", name: "Coral" },
              { hex: "#7EC8B0", name: "Atlas" },
              { hex: "#D4A0C0", name: "Pearl" },
            ],
          },
          {
            name: "Identity buddies",
            swatches: [
              { hex: "#C4A0D8", name: "Prism · Pride" },
              { hex: "#E87AA0", name: "Rowen · Trans" },
              { hex: "#F6D86B", name: "Lumi · Disability" },
              { hex: "#9CBDB4", name: "Celeste · Deaf" },
            ],
          },
        ],
      },
      typography: {
        note: "System type throughout. A captioning app is a reading app, so the face has to answer every accessibility setting the reader has already chosen rather than express a brand.",
        faces: [
          {
            name: "SF Pro Display",
            role: "Headings, buddy names",
            sample: "Aa",
            detail: "Tight tracking at large sizes. Semibold and bold only.",
          },
          {
            name: "SF Pro Text",
            role: "Captions and interface",
            sample: "Aa",
            detail:
              "Full Dynamic Type, semantic styles only. Captions never take a decorative treatment.",
          },
        ],
      },
      characters: {
        title: "Sixteen buddies, sixteen palettes",
        note: "One value in code — a gradient, a coat, an accent pair and a voice. It paints sixteen surfaces at once, and carries a launch date, so a Pride buddy does not exist in the interface until its day.",
        list: [
          {
            file: "smart.svg",
            name: "Dash",
            role: "Concise",
            hex: "#5BC0DE",
            to: "#7DD3A8",
          },
          {
            file: "encouraging.svg",
            name: "Coral",
            role: "Encouraging",
            hex: "#F4B458",
            to: "#E16A78",
          },
          {
            file: "brainy.png",
            name: "Atlas",
            role: "Brainy",
            hex: "#7EC8B0",
            to: "#A8DECE",
          },
          {
            file: "sweet.png",
            name: "Pearl",
            role: "Sweet",
            hex: "#F5DEB3",
            to: "#D4A0C0",
          },
          {
            file: "playful.svg",
            name: "Ziggy",
            role: "Playful",
            hex: "#B8A9D9",
            to: "#FF7EB3",
          },
          {
            file: "chill.svg",
            name: "Reef",
            role: "Chill",
            hex: "#87CEEB",
            to: "#FFE17B",
          },
          {
            file: "sporty.png",
            name: "Sunny",
            role: "Sporty",
            hex: "#F8B4C8",
            to: "#5BB8E8",
          },
          {
            file: "zen.png",
            name: "Fern",
            role: "Zen",
            hex: "#B5D8A0",
            to: "#F5A8C0",
          },
          {
            file: "radiant.png",
            name: "Prism",
            role: "Pride",
            hex: "#C4A0D8",
            to: "#A0D0E8",
          },
          {
            file: "affirming.png",
            name: "Rowen",
            role: "Trans Pride",
            hex: "#E87AA0",
            to: "#5AB8E0",
          },
          {
            file: "lumi.png",
            name: "Lumi",
            role: "Disability Pride",
            hex: "#F6D86B",
            to: "#F4A95F",
          },
          {
            file: "luna.png",
            name: "Luna",
            role: "Low light",
            hex: "#B5A9D6",
            to: "#4C3F73",
          },
          {
            file: "paige.png",
            name: "Paige",
            role: "Studious",
            hex: "#C3BDDC",
            to: "#7B6BA6",
          },
          {
            file: "chalkie.png",
            name: "Chalkie",
            role: "Patient",
            hex: "#F6CE55",
            to: "#E97B5C",
          },
          {
            file: "celeste.png",
            name: "Celeste",
            role: "Deaf buddy",
            hex: "#9CBDB4",
            to: "#8FA3CE",
          },
          {
            file: "goldie.png",
            name: "Goldie",
            role: "Golden",
            hex: "#C99054",
            to: "#6A6390",
          },
        ],
      },
    },

    product: {
      heading: "One session,|five Apple platforms",
      note: "The iPhone is the source of truth. Everything else mirrors it, so there is never a question about which screen is right.",
      screens: {
        title: "Inside the app",
        images: [
          {
            src: "/case-studies/hearing-buddy/screens/listening-summary.png",
            alt: "The Box in summary mode: a question alert and the current topic",
          },
          {
            src: "/case-studies/hearing-buddy/screens/listening-speakers.png",
            alt: "Live captions with each speaker in their own colour",
          },
          {
            src: "/case-studies/hearing-buddy/screens/people-tab.png",
            alt: "The People tab, where voices are learned and named",
          },
          {
            src: "/case-studies/hearing-buddy/screens/onboarding-tap.png",
            alt: "Onboarding: tap to start a session",
          },
          {
            src: "/case-studies/hearing-buddy/screens/onboarding_name.png",
            alt: "Onboarding: naming your Buddy",
          },
          {
            src: "/case-studies/hearing-buddy/screens/settings.png",
            alt: "Settings",
          },
        ],
      },
      second: {
        title: "Mac and Apple Watch",
        images: [
          {
            src: "/case-studies/hearing-buddy/platforms/mac-1.jpg",
            alt: "Hearing Buddy on the Mac, streaming captions from the iPhone",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/mac-2.jpg",
            alt: "Conference mode on the Mac",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/mac-3.jpg",
            alt: "Caption history on the Mac",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/watch-1.jpg",
            alt: "Hearing Buddy on Apple Watch",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/watch-2.jpg",
            alt: "A name alert on Apple Watch",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/watch-3.jpg",
            alt: "Summaries glanceable on Apple Watch",
          },
          {
            src: "/case-studies/hearing-buddy/platforms/watch-4.jpg",
            alt: "Session control from the wrist",
          },
        ],
      },
      adaptivity: {
        title: "Rebuilt for adaptivity",
        note: "The interface was rebuilt so it holds up at any window size and either orientation — not just the two the simulator defaults to. It earned a Great on iPadOS 27 feature on the App Store.",
        points: [
          {
            title: "The system lies about iPhone width",
            body: "iOS never grants an iPhone window the regular size class, even at 874pt in landscape. Every width-adaptive layout was therefore dead on iPhone. I publish an effective size class instead, upgrading to regular above 600pt so a wide iPhone window behaves exactly like an equally sized iPad one.",
          },
          {
            title: "Grids decide by fit, not by device",
            body: "Settings flows two-up when a column can hold 360pt, conversations at 330pt. No device checks anywhere — the layout answers the space it was given.",
          },
          {
            title: "Never second-guess iPad",
            body: "The override is iPhone-only. On iPad the system already picks per window, Stage Manager splits included, and overriding that would break the one case it gets right.",
          },
          {
            title: "Drag straight out of a summary",
            body: "Action items, decisions and questions are individually draggable, so a summary lands in Notes or Reminders without a copy-and-paste round trip. That is what the extra width on iPad is for.",
          },
          {
            title: "Landscape is the meeting case",
            body: "A lecture or a long meeting is where people prop an iPad sideways. Getting landscape right was not polish, it was the primary posture for the longest sessions.",
          },
        ],
        shot: {
          src: "/case-studies/hearing-buddy/platforms/ipados-feature.jpg",
          alt: "Hearing Buddy featured on the App Store as Great on iPadOS 27",
        },
      },
      system: {
        title: "One value, sixteen surfaces",
        body: "Add a buddy and the whole system themes itself. That single rule is why the design system and the App Store calendar are the same object.",
        from: "One buddy value",
        to: [
          "Listen tab",
          "Widgets",
          "Live Activity",
          "Dynamic Island",
          "Apple Watch",
          "Mac",
          "Vision Pro",
          "Event art",
          "Screenshots",
        ],
      },
    },

    marketing: {
      heading: "One loop:|build, pitch, test, convert",
      note: "Two people, so nothing gets made twice. Every campaign produces the launch, the research and the ad creative out of the same work.",
      cycle: [
        {
          when: "8 weeks out",
          title: "Build ahead",
          body: "Features are finished one to two months early. Apple and Google both want to see the work, not the plan.",
        },
        {
          when: "4 weeks out",
          title: "Pitch the stores",
          body: "Tie the finished feature to a date that already matters — World Hearing Day, GAAD, Deaf Awareness Month — with in-app events and artwork.",
        },
        {
          when: "Launch",
          title: "Test the sector",
          body: "Keyword-focused short-form video aimed at one slice of the audience. Views answer whether that group would use the feature; comments answer how.",
        },
        {
          when: "After",
          title: "Convert the winners",
          body: "Organic posts that performed become the paid creative. The test doubles as the asset library.",
        },
      ],
    },

    social: {
      heading: "Volume finds the signal,|series bank it",
      note: "Thirty videos a month across three platforms. The ones that land get a name and a slot, and the rest are data.",
      strategies: [
        {
          title: "Keyword sheet first",
          body: "100 topics across 15 clusters, scored by search volume and difficulty, before a single video is shot.",
        },
        {
          title: "Thirty a month, three platforms",
          body: "Every topic posts to TikTok, Instagram and YouTube Shorts the same day.",
        },
        {
          title: "Turn winners into series",
          body: "A topic that lands gets a recognisable title and a regular slot. Series average 3.4× the views of one-offs.",
        },
        {
          title: "Carousels where video will not fit",
          body: "A character account posting nothing but TikTok photo carousels. Numbered lists win by almost 7×.",
        },
      ],
      pipeline: {
        title: "Creative pipeline",
        body: "Every organic post is written to my hook formula, so anything that performs is already shaped for paid. Winners move straight into ad creative with no reshoot — the research budget and the creative budget are the same budget.",
      },
      stats: [
        { value: "210", label: "videos in 7 months" },
        { value: "730K", label: "views" },
        { value: "64K", label: "best single video" },
        { value: "190", label: "carousels" },
      ],
    },

    results: {
      stats: [
        { value: "7", label: "App Store features" },
        { value: "730K", label: "views in 7 months" },
        { value: "57%", label: "of views from 17 series videos" },
        { value: "95%", label: "of carousel reach from For You" },
        { value: "5", label: "platforms shipped" },
      ],
      footer:
        "Hearing Buddy is a 2026 Apple Design Award Finalist in Inclusivity, pitched in the Observatory at Apple Park, and it won RevenueCat's Shipaton Peace Prize.",
    },
  },

  // ═════════════════════════════════════════════════════════ Hiking Passport
  {
    slug: "hiking-passport",
    name: "Hiking Passport",
    years: "2026",
    role: "Designer and iOS engineer",
    platforms: "iPhone and Apple Watch",
    tagline: "See your hiking goals as a picture, not a chart.",
    icon: "/apps/hiking-passport.png",
    status: "In App Store review",
    cardMeta: "Design + iOS · iPhone and Watch",
    cardBadge: "Solo design and build",
    category: "Health & Fitness · iOS",
    accent: { from: "#9A97D6", mid: "#F0A3BE", to: "#FFB48E" },
    band: { light: "#F4F0E4", dark: "#17140F" },
    badges: ["New in 2026", "Solo design and build"],
    lede: "A training app for people the outdoors keeps telling to stay home. Your season becomes a hand-drawn passport you can read from across the room.",

    overview: {
      stats: [
        { value: "55", label: "things the plan works around" },
        { value: "5", label: "ways up every milestone" },
        { value: "6", label: "hiking buddies designed" },
        { value: "5", label: "park themes" },
        { value: "2", label: "platforms, built solo" },
      ],
      facts: [
        { k: "Role", v: "Designer and iOS engineer" },
        { k: "Team", v: "Solo" },
        { k: "Ships on", v: "iPhone and Apple Watch" },
        { k: "Built with", v: "SwiftUI, Apple Health, no account" },
      ],
    },

    problem: {
      heading: "Training plans assume a body|and a life you might not have",
      note: "Every plan I found assumed no injuries, a car, a trailhead nearby, a flexible schedule, and a body that does what it is told. If you are not that person the plan does not adapt — it just makes the goal feel like it was never yours. And progress toward a mountain always arrives as a chart, which is not why anyone hikes.",
      scale: [
        {
          value: "55",
          label: "constraints the plan adapts to",
          source: "In app",
        },
        {
          value: "7",
          label: "categories, from transport to sleep",
          source: "In app",
        },
        { value: "5", label: "versions of every milestone", source: "In app" },
      ],
    },

    research: {
      heading: "Designed from constraints,|not from an average user",
      note: "This one did not start from a keyword sheet. It started from the observation that the people most often told the trail is not for them are the ones no training app asks about — so I built the taxonomy first and designed the plan around it.",
      preTest: {
        title: "I tested the audience before I built the app",
        note: "Before writing a line of Hiking Passport I spent months posting outdoors content to my personal account — hiking, car camping, backpacking, the PNW — to find out whether the algorithm would carry it at all. The channel had 37 subscribers, so almost every view is discovery rather than followers. That was the number I needed: not whether my audience liked hiking, but whether a stranger's feed would surface it.",
        stats: [
          { value: "48", label: "outdoors posts" },
          { value: "82K", label: "views, from 37 subscribers" },
          { value: "1,200", label: "median views per post" },
          { value: "31", label: "of 48 cleared 1,000 views" },
        ],
        posts: [
          { title: "Sleeping on a backpacking trip be like…", views: 27000 },
          { title: "Hiking in the PNW be like", views: 6700 },
          { title: "Catching tadpoles while backpacking", views: 3200 },
          {
            title: "How to prevent blisters when hiking",
            views: 2400,
            flag: "Training content",
          },
          {
            title: "My hiking goals for 2026",
            views: 1800,
            flag: "The app's premise",
          },
          { title: "3 things I'm good at (hiker edition)", views: 1600 },
          {
            title: "Hiking 1,000 ft of elevation in 1 mile",
            views: 1500,
            flag: "The app's premise",
          },
          {
            title: "Training for a summit",
            views: 800,
            flag: "The app's premise",
          },
        ],
        footer:
          "Outdoors posts averaged 1,706 views against 581 for the founder and app-building content on the same channel — roughly three times the reach, from an account with no audience. Four of them were the product pitch before the product existed: goal hikes, elevation training, and what to do about blisters on the way up.",
      },
      findings: [
        {
          signal: "A body that hurts",
          shipped: "Five ways up every milestone, including a low-energy one.",
        },
        {
          signal: "No car, no trail nearby",
          shipped: "Treadmill, stairs and everyday-life versions of each step.",
        },
        {
          signal: "A schedule that will not bend",
          shipped:
            "A short-on-time tier sized to the session you actually get.",
        },
        {
          signal: "Told the trail is not for you",
          shipped: "Six buddies from communities that hear it most.",
        },
      ],
      audiences: [
        {
          name: "Body and health",
          detail:
            "Knees, lungs, asthma, POTS, chronic pain, pregnancy, long COVID.",
          evidence:
            "Changes what the plan suggests, never whether the goal is yours.",
        },
        {
          name: "Accessibility",
          detail:
            "Wheelchair, mobility aid, limb difference, low vision, hard of hearing, balance, service dog.",
          evidence:
            "Each modification names which of your own answers it is for.",
        },
        {
          name: "Money, time and access",
          detail:
            "No gym, no gear, no car, no safe place to walk, a tight month, travel.",
          evidence:
            "Treadmill, stairs and everyday-life versions of every step.",
        },
        {
          name: "Mind and energy",
          detail:
            "Anxiety, burnout, ADHD, shift work, insomnia, being in recovery.",
          evidence:
            "A low-energy tier on every milestone, and no streak to break.",
        },
      ],
    },

    strategy: {
      heading: "Make the goal the picture,|not the number",
      note: "The product bet is that people chase summits for the image at the top, so progress toward one should look like the thing you are training for.",
      bets: [
        {
          title: "Draw the season, don't chart it",
          body: "A goal hike is a mountain, milestones are signs along the trail, and a summit is a stamp on the peak. You can read your whole season from four feet away.",
        },
        {
          title: "Start from the week you already have",
          body: "The plan is built from real Apple Health history — your longest outing, your biggest climb, how often you actually move — not from an ideal beginner.",
        },
        {
          title: "Constraints change the route, never the goal",
          body: "Fifty-five things to tap, and none of them is a barrier. They change what the plan suggests and nothing else.",
        },
        {
          title: "Keep it on the device",
          body: "No account, no cloud, works with no signal. A hiking app should never need a login on a trail.",
        },
      ],
    },

    ux: {
      heading: "A canvas that answers|before you read anything",
      note: "The passport is the interface. Everything else is a way of adding to it.",
      anatomy: {
        title: "The passport canvas",
        note: "One hand-drawn scene that carries the whole season, redrawn from the theme's five colours.",
        parts: [
          {
            name: "The mountain",
            detail:
              "Each goal hike, drawn to its own shape. Summit it and a dated stamp lands on the peak.",
          },
          {
            name: "Milestone signs",
            detail:
              "Six along the trail, unlocking as the season adds up, finishing with two dress rehearsals near eighty percent of the goal.",
          },
          {
            name: "The trail",
            detail:
              "Boot prints reach further as you train, so progress is a distance rather than a percentage.",
          },
          {
            name: "Camp and buddy",
            detail:
              "The camp moves up the meadow behind you; your buddy waits where the prints end.",
          },
          {
            name: "The stamp",
            detail:
              "Date, rating, mood and your own photo, inked in the theme's deepened ridge colour.",
          },
        ],
        shot: {
          src: "/hiking-passport/shots/01-goal-hikes.jpg",
          alt: "The passport canvas: a goal hike stamped on the summit, milestone signs along the trail, a tent and a buddy where the boot prints end",
        },
      },
      rules: [
        {
          title: "Signs thin out instead of colliding",
          body: "As Dynamic Type grows the scene drops signs rather than overlapping them into mush. Fewer, readable signs beats a full set nobody can read.",
        },
        {
          title: "The opening animation skips itself",
          body: "The two-and-a-half-second scene build is the first thing to go under Reduce Motion, and the whole canvas is described for VoiceOver.",
        },
        {
          title: "Five ways up every milestone",
          body: "One that matches it exactly, one sized to your usual session, one modified for what you tapped, a low-energy version and a short-on-time version.",
        },
        {
          title: "The watch keeps its own copy",
          body: "It opens with your passport whether or not the phone is nearby, so a milestone can be crossed off on a ridge with no signal.",
        },
      ],
    },

    identity: {
      heading: "Five colours in,|a whole app out",
      note: "Each theme is five colours lifted from its own icon. Everything else — the sky gradient, the meadow, the stamp ink, the stamp paper — is computed from them, which is why no two themes can drift out of step.",
      palette: {
        note: "The accent is the one colour picked by hand, and it has to sit beside trail signs that are warm brown on tan. Bright enough to feel alive, never a neon that fights the wood.",
        groups: [
          {
            name: "The accents, hand-picked",
            swatches: [
              { hex: "#5E9A63", name: "Alpine" },
              { hex: "#A85A38", name: "Rainier" },
              { hex: "#5C7A55", name: "Redwood" },
              { hex: "#5A5788", name: "Voyageurs" },
              { hex: "#2B6CA8", name: "White Sands" },
            ],
          },
          {
            name: "Computed, never picked",
            swatches: [
              { hex: "#FF5A2E", name: "alpenglow" },
              { hex: "#C4A886", name: "sign wood" },
              { hex: "#3A4A52", name: "stamp ink" },
              { hex: "#FBF3E4", name: "stamp paper" },
            ],
          },
        ],
      },
      typography: {
        note: "One display face doing the work of a stamp, and the system face carrying everything that has to stay legible at any size.",
        faces: [
          {
            name: "National Park",
            role: "Hike names, stamps, signs",
            sample: "Aa",
            detail:
              "Four weights. It steps up a weight by hand when Bold Text is on, because a custom face does not answer that setting on its own.",
          },
          {
            name: "SF Pro",
            role: "Everything else",
            sample: "Aa",
            detail:
              "Full Dynamic Type, so the plan stays readable at every size.",
          },
        ],
      },
      characters: {
        title: "Six buddies, six reasons to be out there",
        note: "Forest animals, each from a community that gets told the trail is not for them. They read your workouts and cheer. Friends who hike — not trainers, not doctors — and they never scold.",
        list: [
          {
            file: "buddy-eagle.svg",
            name: "Aerie",
            role: "Disabled, fierce and kind",
            hex: "#6E86B4",
            to: "#9FB4D8",
          },
          {
            file: "buddy-berry.png",
            name: "Berry",
            role: "Plus-size and joyful",
            hex: "#C2705E",
            to: "#F0AC85",
          },
          {
            file: "buddy-acorn.png",
            name: "Acorn",
            role: "Trains between naps",
            hex: "#C99054",
            to: "#F8DFA0",
          },
          {
            file: "buddy-turtle.png",
            name: "Juniper",
            role: "Queer, trans and outside",
            hex: "#5A5788",
            to: "#9A93DE",
          },
          {
            file: "buddy-owl.svg",
            name: "Otis",
            role: "Neurodivergent and clear",
            hex: "#5C7A55",
            to: "#87A365",
          },
          {
            file: "buddy-cat.png",
            name: "Biscuit",
            role: "Funny and on your side",
            hex: "#A0522B",
            to: "#DED7C9",
          },
        ],
      },
      themes: {
        title: "Five parks, five colours each",
        note: "Each theme starts from a place: alpenglow on Rainier, a grove washed white by canopy light, Voyageurs under the northern lights, high desert noon.",
        list: [
          {
            file: "theme-default.svg",
            name: "Alpine",
            park: "The free default",
            swatches: ["#D6E8F2", "#F8DFA0", "#9FB4D8", "#6E86B4", "#A9CFA6"],
          },
          {
            file: "theme-rainier.svg",
            name: "Rainier",
            park: "Mount Rainier",
            swatches: ["#9A97D6", "#F0A3BE", "#FFB48E", "#C2705E", "#8DB078"],
          },
          {
            file: "theme-redwood.svg",
            name: "Redwood",
            park: "Redwood",
            swatches: ["#9FBACB", "#E6E4E2", "#A0522B", "#4A3123", "#87A365"],
          },
          {
            file: "theme-voyageurs.svg",
            name: "Voyageurs",
            park: "Northern lights",
            swatches: ["#9A93DE", "#C5BCEA", "#9E97C6", "#7E79AC", "#9FD4A4"],
          },
          {
            file: "theme-white-sands.svg",
            name: "White Sands",
            park: "White Sands",
            swatches: ["#66A8E6", "#FCF3D2", "#F6F2EA", "#DED7C9", "#F2EEE2"],
          },
        ],
      },
    },

    product: {
      heading: "A season on your phone|and on your wrist",
      note: "Everything lives on the device. Apple Health is read only — five things read, nothing written back — and declining any of them leaves the plan working.",
      screens: {
        title: "Inside the app",
        images: [
          {
            src: "/hiking-passport/shots/01-goal-hikes.jpg",
            alt: "The passport scene with a goal hike stamped on the summit",
          },
          {
            src: "/hiking-passport/shots/02-stamp-the-summit.jpg",
            alt: "Logging a summit with a date, rating, mood and photo",
          },
          {
            src: "/hiking-passport/shots/03-train-your-faves.jpg",
            alt: "Picking how you can train",
          },
          {
            src: "/hiking-passport/shots/04-training-for-everyone.jpg",
            alt: "The list of things the plan can work around",
          },
          {
            src: "/hiking-passport/shots/05-hike-with-a-buddy.jpg",
            alt: "Choosing a hiking buddy",
          },
          {
            src: "/hiking-passport/shots/07-passport-themes.jpg",
            alt: "Picking a theme, with the whole scene recoloured",
          },
        ],
      },
      second: {
        title: "On your wrist",
        images: [
          {
            src: "/hiking-passport/watch/1-plan.jpg",
            alt: "The plan on the watch",
          },
          {
            src: "/hiking-passport/watch/2-todays-pick.jpg",
            alt: "Today's pick from your buddy",
          },
          {
            src: "/hiking-passport/watch/3-ways-to-do-it.jpg",
            alt: "Ways to do today's milestone",
          },
          {
            src: "/hiking-passport/watch/4-passport.jpg",
            alt: "The passport drawn on the watch",
          },
          {
            src: "/hiking-passport/watch/5-insights.jpg",
            alt: "Insights on the watch",
          },
        ],
      },
      system: {
        title: "Five colours in, a whole app out",
        body: "The stamp ink is the near ridge deepened in a loop until it reads as ink. The decision I am proudest of is one I reversed: the accent used to follow your buddy, which meant colour was saying something about a character instead of about the app.",
        from: "Five colours from one icon",
        to: [
          "Sky gradient",
          "Meadow",
          "Stamp ink",
          "Stamp paper",
          "Accents",
          "Widgets",
          "Apple Watch",
        ],
      },
    },

    marketing: {
      heading: "Pre-launch, so the listing|is the marketing",
      note: "Nothing to promote yet, so the work went into the thing that sells the app on the day it lands.",
      cycle: [
        {
          when: "Build",
          title: "Ship the feature set",
          body: "Everything in this case study is in the binary before a word of marketing is written.",
        },
        {
          when: "Metadata",
          title: "Write to a character budget",
          body: 'The keyword field skips "passport" and "goal hikes" — the name and subtitle already index those — and spends its 100 characters elsewhere.',
        },
        {
          when: "Art",
          title: "Screenshots from the app's own palette",
          body: "Ten backgrounds pulled from the themes, each matched to the screen inside it, every one clearing 10.7:1.",
        },
        {
          when: "Launch",
          title: "Seasonal promo text",
          body: "170 characters that can change for a new season without shipping a build.",
        },
      ],
    },

    social: {
      heading: "The audience exists|before the app does",
      note: "An outdoors audience is already built. The method that runs Hearing Buddy is ready to point at hiking the day this is approved.",
      strategies: [
        {
          title: "A crossover audience already exists",
          body: "My outdoors account is 74K on TikTok, and hiking content performs on my personal account.",
        },
        {
          title: "The passport is the shareable",
          body: "Sharing a picture of your passport is free, by design. The product markets itself in the group chat.",
        },
      ],
      pipeline: {
        title: "Creative pipeline",
        body: "The same keyword-and-series method, pointed at hiking, with the passport image as the native hook — a visual that is already the product rather than an ad for it.",
      },
      stats: [
        { value: "48", label: "outdoors posts already tested" },
        { value: "82K", label: "views before the app existed" },
        { value: "74K", label: "outdoors audience on TikTok" },
        { value: "113K", label: "followers across my accounts" },
      ],
    },

    results: {
      stats: [
        { value: "1.0", label: "submitted to the App Store" },
        { value: "10", label: "screenshot backgrounds, all 10.7:1" },
        { value: "175", label: "countries at launch" },
        { value: "55", label: "constraints modelled" },
      ],
      footer:
        "Version 1.0 is in review. Everything described here is built and in the binary.",
    },
  },

  // ═══════════════════════════════════════════════════════════════ Tappily
  {
    slug: "tappily",
    name: "Tappily",
    years: "2017 to now",
    role: "Founder, designer, and developer",
    platforms: "iOS and Android",
    tagline: "Fun activities for your mental health.",
    icon: "/apps/tappily.jpg",
    status: "Shipping",
    cardMeta: "Design + dev · iOS and Android",
    cardBadge: "Apple Entrepreneur Camp",
    category: "Mental Health · iOS + Android",
    accent: { from: "#FE7DCA", mid: "#E07EFC", to: "#54D3FA" },
    band: { light: "#FDF0F8", dark: "#1A1020" },
    badges: ["Apple Entrepreneur Camp 2023", "4.3 stars"],
    lede: "The app that taught me design. I learned animation as a craft, then found a purpose for it.",

    overview: {
      stats: [
        { value: "2023", label: "Apple Entrepreneur Camp" },
        { value: "4.3", label: "stars from 68 ratings" },
        { value: "200+", label: "beta testers" },
        { value: "533%", label: "marketing efficiency gain" },
        { value: "$75K", label: "saved on the SwiftUI rebuild" },
      ],
      facts: [
        { k: "Role", v: "Founder, designer, developer" },
        { k: "Team", v: "Solo" },
        { k: "Ships on", v: "iOS and Android" },
        { k: "Built with", v: "SwiftUI, migrated off Storyboard" },
      ],
    },

    problem: {
      heading:
        "Mental health apps asked you to be calm|before you could use them",
      note: "Every app in the category was either clinical — forms, streaks, mood charts — or quiet and meditative. Both assume you arrive with enough focus to sit still. What I wanted when anxious was something to do with my hands that was not a form.",
    },

    research: {
      heading: "Two hundred testers and|a feedback loop with no middle",
      note: "200 testers on TestFlight while I was still building. Feedback went in and came back out as App Store updates, with nobody in between. Apple Entrepreneur Camp was the other instrument — feedback from Apple's design evangelists, implemented the same week.",
      pullQuote: {
        text: "Pivoting doesn't have to make a big splash. It's more like skipping a rock across a pond — ripples of progress, each attempt more calculated than the last.",
        cite: "My talk at Apple's International Women's Day event, Cupertino, 2024",
      },
      findings: [
        {
          signal: "Forms feel like homework",
          shipped: "Every activity is an animation you land inside.",
        },
        {
          signal: "Streaks punish bad weeks",
          shipped: "No streak to break, ever.",
        },
        {
          signal: "Nobody reads instructions",
          shipped:
            "One colour per activity, so you know where you are before you read.",
        },
      ],
    },

    strategy: {
      heading: "Give anxious hands|somewhere to go",
      note: "The bet was that attention, not calm, is the thing to design for. Everything followed from refusing to ask for stillness first.",
      bets: [
        {
          title: "Animation is the product",
          body: "Not decoration on a form. The activity is the animation, and the whole screen is it.",
        },
        {
          title: "Loud, against the category",
          body: "Saturated colour edge to edge where everyone else went beige. A person in a spiral needs somewhere to put their attention, not to be soothed into stillness.",
        },
        {
          title: "No streaks, no scoring",
          body: "Nothing that can be broken, and nothing that makes a bad week visible.",
        },
        {
          title: "Own the whole stack",
          body: "Design and build together, so an architecture decision can never quietly veto a design one.",
        },
      ],
    },

    ux: {
      heading: "No reading,|no configuration",
      note: "You open it in the worst five minutes of your day. Anything that asks a question first has already failed.",
      anatomy: {
        title: "An activity screen",
        note: "Every activity is the same shape: a colour, a title, a one-line instruction and a single button.",
        parts: [
          {
            name: "The colour",
            detail:
              "Carried edge to edge. It tells you which activity you are in before you read the title.",
          },
          {
            name: "Title and one line",
            detail: "Plain language, sentence case, never clinical.",
          },
          {
            name: "Theme picker",
            detail:
              "Where an activity has variants, they sit as a short list rather than a settings screen.",
          },
          {
            name: "Instructions block",
            detail:
              "One paragraph, always in the same place, so it can be ignored once you know the activity.",
          },
          {
            name: "Start button",
            detail:
              "Full width, bottom of screen, the same position every time. One decision to make.",
          },
        ],
        shot: {
          src: "/case-studies/tappily/shots/01.jpg",
          alt: "A Tappily activity screen: Organize Tasks on hot pink, with a theme list, instructions and a single Start Activity button",
        },
      },
      rules: [
        {
          title: "One colour per activity",
          body: "Pink for task lists, orchid for organize, sky for negative thoughts, indigo for the wheel. The colour is the wayfinding.",
        },
        {
          title: "Full screen or it is not finished",
          body: "If an activity needs a caption to make sense, the animation is not doing its job.",
        },
        {
          title: "The same button in the same place",
          body: "Every activity ends in one full-width action at the bottom. Nothing to hunt for.",
        },
      ],
    },

    identity: {
      heading: "Candy colour|as the interface",
      note: "The opposite of the beige-and-sage the category had settled on. These are not accents, they are the interface, so each one had to hold up full screen against white.",
      palette: {
        note: "One saturated colour per activity, sampled from the shipped App Store screens.",
        groups: [
          {
            name: "One colour per activity",
            swatches: [
              { hex: "#FE7DCA", name: "task lists" },
              { hex: "#E07EFC", name: "organize" },
              { hex: "#54D3FA", name: "negative thoughts" },
              { hex: "#5B69AF", name: "spin the wheel" },
              { hex: "#FEDB5E", name: "gratitude" },
            ],
          },
        ],
      },
      typography: {
        note: "The type had to disappear. When the animation is the interface, anything competing with it is noise.",
        faces: [
          {
            name: "System face, heavy",
            role: "Screen titles",
            sample: "Aa",
            detail:
              "Large and bold enough to read at a glance, then it gets out of the way.",
          },
          {
            name: "Lowercase promo",
            role: "App Store headlines",
            sample: "aa",
            detail:
              '"daily, weekly, & monthly task lists" — lowercase reads as a friend, not a clinician.',
          },
        ],
      },
    },

    product: {
      heading: "Eight years on the App Store,|still 4.3 stars",
      note: "Shipped on both platforms, rebuilt once to make the design possible.",
      screens: {
        title: "On the App Store",
        images: [
          {
            src: "/case-studies/tappily/shots/01.jpg",
            alt: "Daily, weekly and monthly task lists, on hot pink",
          },
          {
            src: "/case-studies/tappily/shots/02.jpg",
            alt: "Accomplish tasks and stay organized, on orchid",
          },
          {
            src: "/case-studies/tappily/shots/03.jpg",
            alt: "Overcome negative thoughts, on sky blue",
          },
          {
            src: "/case-studies/tappily/shots/04.jpg",
            alt: "Interactive, game-like activities: spin the wheel, on indigo",
          },
          {
            src: "/case-studies/tappily/shots/05.jpg",
            alt: "The maze animation: beautiful animations for a positive experience",
          },
          {
            src: "/case-studies/tappily/shots/06.jpg",
            alt: "A safe space for your thoughts, on sunshine yellow",
          },
          {
            src: "/case-studies/tappily/shots/07.jpg",
            alt: "Daily activities for positive mental health",
          },
        ],
      },
      second: {
        title: "Behind it",
        images: [
          {
            src: "/blog/iwd/tappily-maze.jpg",
            alt: "A Tappily activity: a yellow maze with numbered checkpoints leading to a lightbulb",
          },
          {
            src: "/blog/iwd/designing-animations.jpg",
            alt: "Designing the animations in Photoshop",
          },
          {
            src: "/blog/iwd/swiftui-migration-2.jpg",
            alt: "The original Tappily Storyboard, dozens of connected screens",
          },
          {
            src: "/blog/iwd/swiftui-migration-1.jpg",
            alt: "Tappily's TodayView rewritten in SwiftUI",
          },
        ],
      },
      system: {
        title: "Rebuilding the app to make the design possible",
        body: "Storyboard was the wrong architecture for a system of animations. Migrating to SwiftUI myself saved about $75,000 and unlocked the work the app is known for.",
        from: "Storyboard to SwiftUI",
        to: [
          "Reusable animation system",
          "One colour per activity",
          "Faster ship cycle",
          "~$75K saved",
        ],
      },
    },

    marketing: {
      heading: "Zero funding,|so I automated the outreach",
      note: "The constraint was never ideas, it was hours. So the first thing I built after the app was the thing that found its users.",
      cycle: [
        {
          when: "Build",
          title: "Ship to TestFlight early",
          body: "200 testers validating the app while it was still being built.",
        },
        {
          when: "Listen",
          title: "Feed it straight back in",
          body: "Suggestions reached a build in days, with no team in between.",
        },
        {
          when: "Automate",
          title: "Find the audience with a bot",
          body: "It surfaced people in the target audience and drafted a custom DM for each one.",
        },
        {
          when: "Scale",
          title: "Tune and repeat",
          body: "Refining the targeting raised downloads as well as saving the hours.",
        },
      ],
    },

    social: {
      heading: "Where the method|I sell today started",
      note: "Mental health content and carousels on Instagram, long before carousels were the format everyone recommends.",
      strategies: [
        {
          title: "Carousels before they were the format",
          body: "Mental health content to 2,900 followers, testing which post shapes people saved and shared.",
        },
        {
          title: "Speak the story",
          body: "Tappily's journey became my talk at Apple's International Women's Day event in Cupertino.",
        },
      ],
      pipeline: {
        title: "Creative pipeline",
        body: "The bot handled reach, the carousels handled proof, and the beta community handled word of mouth. With no budget each channel had to feed the next — the same principle the Hearing Buddy loop runs on now.",
      },
      stats: [
        { value: "2.9K", label: "Instagram followers" },
        { value: "200+", label: "beta community" },
      ],
    },

    results: {
      stats: [
        { value: "533%", label: "time efficiency gain" },
        { value: "8", label: "hour days cut to 1.5" },
        { value: "4.3", label: "stars, eight years on" },
        { value: "$75K", label: "saved on the rebuild" },
      ],
      footer:
        "Accepted into Apple Entrepreneur Camp in 2023 for its simple design and creative full-screen animations, and still running. More than that, it is where I became a designer.",
    },
  },
];
