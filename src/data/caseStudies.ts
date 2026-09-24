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
// the app's accent color. Any `value` in a stat list counts up on scroll.

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

  /** 0 — The founder story, where there is one. Three sentences, no more. */
  story?: { heading: string; beats: Point[] };

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
    /** The recurring video formats, and what each one was testing. */
    series?: {
      title: string;
      note: string;
      list: { name: string; tests: string; result: string }[];
    };
    /** Organised by what shipped: one feature can answer several pain
     *  points at once. `why` is the one sentence, revealed on expand. */
    findings?: { feature: string; pains: string[]; why: string }[];
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
      /** Eyebrow above the block. Defaults to "Anatomy". */
      label?: string;
      title?: string;
      note: string;
      parts?: { name: string; detail: string }[];
      shot?: { src: string; alt: string };
      /** The component walked through its states, in order. */
      states?: { src: string; alt: string; label: string; caption: string }[];
      /** Everything the component has to hold. */
      checklist?: string[];
    };
    rules?: Point[];
    /** The adaptivity rebuild, where there is one. */
    adaptivity?: {
      title: string;
      note: string;
      /** Ticked off, like the Listening tab. */
      checklist?: string[];
      points?: Point[];
      shot?: { src: string; alt: string };
    };
  };

  /** 5 — Visual identity. */
  identity: {
    heading: string;
    note: string;
    /** Hearing Buddy carries its color story in the cast instead. */
    palette?: { note: string; groups: { name: string; swatches: Swatch[] }[] };
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
        /** gradientPrimary and gradientSecondary, straight from the app. */
        hex: string;
        to: string;
        /** Three gradient stops then the accent pair, as the app defines them.
         *  Falls back to the gradient pair where a study has not supplied it. */
        swatches?: string[];
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
    /** What each device is for, when the app spans several. */
    devices?: {
      title: string;
      list: { name: string; role: string; detail: string }[];
    };
    screens?: { title: string; images: { src: string; alt: string }[] };
    second?: { title: string; images: { src: string; alt: string }[] };
    system?: { title: string; body: string; from: string; to: string[] };
    /** Demand for a platform the product is not on yet. */
    comingSoon?: {
      label: string;
      title: string;
      note: string;
      quotes: { user: string; text: string }[];
    };
  };

  /** 7 — Marketing, where a study has one. */
  marketing?: {
    heading: string;
    note: string;
    cycle: { when: string; title: string; body: string }[];
  };

  /** 8 — Social, where a study has one. */
  social?: {
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
      "Shipaton Peace Prize, 2nd",
      "Featured 7 times",
    ],
    lede: "I am hard of hearing. I built this app so people with hearing loss can feel more confident in conversations.",

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

    story: {
      heading: "Hearing Buddy started with|a real hearing buddy",
      beats: [
        {
          title: "What a hearing buddy means",
          body: "A decade ago, I started using \u201chearing buddy\u201d for the person I could rely on to help me hear without judgment.",
        },
        {
          title: "My hearing buddy",
          body: "That person is Scott Krager, my partner and co-founder. He brings the half of the conversation I can\u2019t always hear, and he cared enough about the problem to build the first MVP himself.",
        },
        {
          title: "The technology that made it possible",
          body: "At WWDC25, Scott began testing Apple\u2019s new SpeechAnalyzer API. For the first time, on-device speech recognition was accurate, private, and lightweight enough to build the entire experience around it.",
        },
      ],
    },

    problem: {
      heading: "I needed a way to hear|in large meeting rooms",
      note: "Live captioning apps charge by the hour of transcription, and most cap you at around ten hours a month, nowhere near a week of meetings. I wanted a product and a brand that felt like round-the-clock accessibility support, not a metered utility.",
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
      note: "I use social media to test ideas before I build them. I score the keywords people already search for, turn the strongest into recurring series, and build three pain points into every video. The comments show me which one resonates most, turning every post into a lightweight research study.",
      quotes: [
        {
          user: "Sarah",
          text: "All of this, but I heard that hearing loss only comes with ringing in the ears, and I'm still young, so now I'm wondering if I'm imagining it.",
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
        {
          user: "Rosemarie",
          text: "Yep, I thought my hearing aids would fix everything. How wrong was I?",
          likes: 5,
          date: "5-21",
        },
        {
          user: "klaudia",
          text: "Me not being able to watch anything unless I have captions, because I simply don't understand the other person.",
          likes: 6,
          replies: 3,
          date: "3-22",
        },
        {
          user: "Diesel ocean",
          text: "My brain fills in the gaps, but it's never right, and sometimes it's wild.",
          likes: 4,
          replies: 1,
          date: "6-7",
        },
        {
          user: "Paula",
          text: "I wish people understood that hearing aids aren't replacing your hearing. They're there to help.",
          likes: 5,
          date: "6-6",
        },
        {
          user: "Heather",
          text: 'The "if you can hear me, you aren\'t really deaf" one really irks me.',
          likes: 4,
          replies: 1,
          date: "5-5",
        },
        {
          user: "Treedoc",
          text: "I hate the drive-through.",
          likes: 5,
          replies: 1,
          date: "6-5",
        },
      ],
      findings: [
        {
          feature: "Free unlimited live captions",
          pains: [
            "It is loud enough, the words are still mush",
            "Hearing aids do not give you clarity back",
            "Masks took away the lip reading people leaned on",
          ],
          why: "Every one of these says the same thing in a different way, that turning the room up does not make it understandable, so captions became the free core and amplification the paid extra.",
        },
        {
          feature: "Question Alerts and Name Alerts",
          pains: [
            "Nodding along with no idea what was said",
            "Missing a question aimed straight at you",
          ],
          why: "People fake understanding rather than ask a third time, so the app taps them the moment their name or a question lands.",
        },
        {
          feature: "Conversation summaries",
          pains: ["Worn out by an hour of concentrating"],
          why: "Following a long meeting costs more energy than the meeting itself, so the app carries the recall instead of the listener.",
        },
        {
          feature: "Hearing test support through Apple Health",
          pains: [
            "Struggling for years without knowing why",
            "The same struggle under a different diagnosis",
          ],
          why: "Much of the audience has never been tested, and many arrive through auditory processing or ADHD instead, so the app meets them before a diagnosis rather than after one.",
        },
      ],
      audiences: [
        {
          name: "Auditory processing",
          detail:
            "Hears the sound but cannot resolve the words, the exact problem captions solve under a different diagnosis.",
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
            "Years of workarounds without a word for the problem, and the single largest comment theme.",
          evidence:
            "The top comment, at 67 likes, asks whether they are imagining it.",
        },
        {
          name: "Partners and allies",
          detail:
            "Hearing people who want to help and get it wrong, with their own content line filmed by my co-founder.",
          evidence:
            "4 videos, 11.4K views, the highest share rate on the account.",
        },
      ],
    },

    strategy: {
      heading:
        "Design an AI app that feels like a real hearing buddy,|make it human",
      note: "A hearing buddy is the safe person who helps me hear without judgment. I wanted to embody my real-life hearing buddy, Scott Krager, in an app, so I could have a hearing buddy when he is not there.",
      bets: [
        {
          title: "Give the AI an inclusive personality",
          body: "Sixteen buddies to choose from, drawn from communities that rarely see themselves in accessibility software.",
        },
        {
          title: "Make the app feel like a supportive friend",
          body: "It repeats the question without making you feel like a burden.",
        },
        {
          title: "No AI jargon",
          body: "The audience skews older, so the words AI, transcription and speech recognition never appear anywhere they can see.",
        },
        {
          title: "Always there for you",
          body: "Live captions are unlimited and free forever, never metered by the hour.",
        },
      ],
    },

    ux: {
      heading: "One container for everything|that happens mid-conversation",
      note: "During a session you are reading, not browsing. Every control had to collapse into a single surface you can find without looking away from the captions.",
      anatomy: {
        label: "The Listening tab",
        note: "Every in-session control lives behind one floating container, so the captions keep the whole screen. Maximum functionality, minimum footprint.",
        checklist: [
          "Audio Boost",
          "Live captions, on-device and server",
          "Live translation",
          "Changing buddies",
          "Summaries",
          "Name and question alerts",
          "Sharing captions",
        ],
        states: [
          {
            src: "/case-studies/hearing-buddy/buddybox/1-collapsed.png",
            alt: "The Buddy Box collapsed to a corner avatar with a question badge, captions filling the screen",
            label: "Collapsed",
            caption:
              "Resting state is a single corner avatar, and the badge on it is the only thing that interrupts you.",
          },
          {
            src: "/case-studies/hearing-buddy/buddybox/2-expanded.png",
            alt: "The Buddy Box expanded into a card showing Dash's summary, with page dots beneath",
            label: "Expanded",
            caption:
              "One card carries Share Captions, Boost Audio, enhanced captions, Name and Question alerts, and summaries.",
          },
          {
            src: "/case-studies/hearing-buddy/buddybox/3-settings.png",
            alt: "The Buddy Box settings popover: summaries, alerts, spoken language, translation, text size, position and change buddy",
            label: "Settings",
            caption:
              "The overflow holds what you set less often, including live translation and switching your buddy.",
          },
        ],
      },
      adaptivity: {
        title: "Any window size,|either orientation",
        note: "The interface was rebuilt so it holds up at any window size and either orientation. It earned a Great on iPadOS 27 feature on the App Store.",
        checklist: [
          "Looks great in any window size or orientation",
          "Ready for the iPhone Duo",
          "Layouts decide by fit, never by device",
          "Landscape built for long meetings",
        ],
        shot: {
          src: "/case-studies/hearing-buddy/platforms/ipados-feature.jpg",
          alt: "Hearing Buddy featured on the App Store as Great on iPadOS 27",
        },
      },
    },

    identity: {
      heading: "Colorful and minimal,|everything floats",
      note: "Every buddy brings its own color while the captions stay clean and easy to read. Every animation eases and drifts the way it would underwater, so the app feels calm and weightless.",
      typography: {
        note: "System type throughout, so the face answers the reader's own accessibility settings instead of expressing a brand.",
        faces: [
          {
            name: "SF Pro Display",
            role: "Headings, buddy names",
            sample: "Aa",
            detail: "Tight tracking at large sizes, semibold and bold only.",
          },
          {
            name: "SF Pro Text",
            role: "Captions and interface",
            sample: "Aa",
            detail:
              "Full Dynamic Type and semantic styles only, so captions never take a decorative treatment.",
          },
        ],
      },
      characters: {
        title: "Sixteen hearing buddies",
        note: "Each buddy has its own color palette, gradients, and inclusive personality.",
        list: [
          {
            file: "dash.png",
            name: "Dash",
            role: "Concise",
            hex: "#5BC0DE",
            to: "#7DD3A8",
            swatches: ["#E3F1F9", "#BADFEE", "#F4B3C7", "#385578"],
          },
          {
            file: "coral.png",
            name: "Coral",
            role: "Encouraging",
            hex: "#F4B458",
            to: "#E16A78",
            swatches: ["#FEF1EF", "#F3CECA", "#E68587", "#50333E"],
          },
          {
            file: "atlas.png",
            name: "Atlas",
            role: "Brainy",
            hex: "#7EC8B0",
            to: "#A8DECE",
            swatches: ["#E5F2F1", "#C5E4DF", "#789D95", "#255348"],
          },
          {
            file: "pearl.png",
            name: "Pearl",
            role: "Sweet",
            hex: "#F5DEB3",
            to: "#D4A0C0",
            swatches: ["#FBF1D5", "#E8B9B3", "#D69F76", "#462F18"],
          },
          {
            file: "ziggy.png",
            name: "Ziggy",
            role: "Playful",
            hex: "#B8A9D9",
            to: "#FF7EB3",
            swatches: ["#F6EEF5", "#D2B8D6", "#B286B8", "#735195"],
          },
          {
            file: "reef.png",
            name: "Reef",
            role: "Chill",
            hex: "#87CEEB",
            to: "#FFE17B",
            swatches: ["#F4F6F7", "#FBE27E", "#CFDAE1", "#4D85B0"],
          },
          {
            file: "sunny.png",
            name: "Sunny",
            role: "Sporty",
            hex: "#F8B4C8",
            to: "#5BB8E8",
            swatches: ["#F9EEF3", "#ECC7CF", "#3CB5E5", "#4F4367"],
          },
          {
            file: "fern.png",
            name: "Fern",
            role: "Zen",
            hex: "#B5D8A0",
            to: "#F5A8C0",
            swatches: ["#F1F1E6", "#F1B4CD", "#AFB296", "#73835A", "#395427"],
          },
          {
            file: "prism.png",
            name: "Prism",
            role: "Pride",
            hex: "#C4A0D8",
            to: "#A0D0E8",
            swatches: ["#F5E5DE", "#F4C388", "#A5B6BA", "#342B41"],
          },
          {
            file: "rowen.png",
            name: "Rowen",
            role: "Trans Pride",
            hex: "#E87AA0",
            to: "#5AB8E0",
            swatches: ["#F5F1F6", "#F7CFDA", "#B1CADE", "#78ACCA", "#3781A4"],
          },
          {
            file: "lumi.png",
            name: "Lumi",
            role: "Disability Pride",
            hex: "#F6D86B",
            to: "#F4A95F",
            swatches: ["#FCF7E5", "#EDD297"],
          },
          {
            file: "luna.png",
            name: "Luna",
            role: "Low light",
            hex: "#B5A9D6",
            to: "#4C3F73",
            swatches: ["#F4F0F7", "#C8C4DD", "#494061"],
          },
          {
            file: "paige.png",
            name: "Paige",
            role: "Studious",
            hex: "#C3BDDC",
            to: "#7B6BA6",
            swatches: ["#F1ECF5", "#DAD7E3", "#D4AFC4", "#584866"],
          },
          {
            file: "chalkie.png",
            name: "Chalkie",
            role: "Patient",
            hex: "#F6CE55",
            to: "#E97B5C",
            swatches: ["#F8F0E2", "#CBBEAD", "#EA9761", "#503B31"],
          },
          {
            file: "celeste.png",
            name: "Celeste",
            role: "Deaf buddy",
            hex: "#9CBDB4",
            to: "#8FA3CE",
            swatches: ["#EEF4F3", "#EEC5B8", "#A1BBC0", "#6F83A3", "#3C5082"],
          },
          {
            file: "goldie.png",
            name: "Goldie",
            role: "Golden",
            hex: "#C99054",
            to: "#6A6390",
            swatches: ["#F8F5EB", "#E6DCCF", "#DBC5A0", "#545970"],
          },
        ],
      },
    },

    product: {
      heading: "Live captions,|five Apple devices",
      note: "Hearing Buddy works as one system rather than five separate apps. The iPhone runs the session and every other device plays the part it is best placed to play.",
      devices: {
        title: "What each device is for",
        list: [
          {
            name: "iPhone",
            role: "Runs the session",
            detail:
              "Captions keep running from your pocket with the screen off, so the phone never has to be out on the table.",
          },
          {
            name: "Mac",
            role: "Reaches across the room",
            detail:
              "Leave the iPhone near whoever is speaking and it streams captions back to your Mac, which is what makes a large conference room workable.",
          },
          {
            name: "iPad",
            role: "Takes the notes",
            detail:
              "The extra width goes to summaries you can read and drag action items out of while the conversation is still going.",
          },
          {
            name: "Apple Watch",
            role: "Taps your wrist",
            detail:
              "Your name and a question each have their own haptic, so you know you are being spoken to without reading anything.",
          },
          {
            name: "Vision Pro",
            role: "Keeps your eyes up",
            detail:
              "Captions sit in your view at a play or a talk, so you follow the words without looking down at a screen.",
          },
        ],
      },
      comingSoon: {
        label: "Coming soon",
        title: "Android is the most asked for thing we do not have",
        note: "The comments ask for it unprompted, in the middle of threads about something else entirely.",
        quotes: [
          {
            user: "Chrissy",
            text: "Firstly, thank you. It is so nice to actually feel seen. Secondly, is the app available on Android?",
          },
          {
            user: "Janey",
            text: "Can you download the app for Android?",
          },
        ],
      },
      screens: {
        title: "Inside the app",
        images: [
          {
            src: "/case-studies/hearing-buddy/screens/captions.jpg",
            alt: "Live captions on iPhone, with a question marked in the margin",
          },
          {
            src: "/case-studies/hearing-buddy/screens/questions.jpg",
            alt: "A question alert surfacing in the summary",
          },
          {
            src: "/case-studies/hearing-buddy/screens/name.jpg",
            alt: "A name alert: Sunny caught Mary",
          },
          {
            src: "/case-studies/hearing-buddy/screens/recap.jpg",
            alt: "Coral's summary, recapping the conversation in topics",
          },
          {
            src: "/case-studies/hearing-buddy/screens/boost.jpg",
            alt: "Buddy Boost, amplifying voices into your headphones",
          },
          {
            src: "/case-studies/hearing-buddy/screens/private.jpg",
            alt: "A finished transcript, captured and stored on device",
          },
          {
            src: "/case-studies/hearing-buddy/screens/lockscreen.jpg",
            alt: "A summary arriving on the Lock Screen",
          },
          {
            src: "/case-studies/hearing-buddy/screens/buddy.jpg",
            alt: "Choosing a buddy, each with its own personality and match score",
          },
        ],
      },
      second: {
        title: "Vision Pro, Mac, iPad and Watch",
        images: [
          {
            src: "/case-studies/hearing-buddy/devices/vision.jpg",
            alt: "Captions floating in view on Vision Pro, outdoors under a bridge",
          },
          {
            src: "/case-studies/hearing-buddy/devices/mac-connect.jpg",
            alt: "The Mac companion pairing with an iPhone to receive captions",
          },
          {
            src: "/case-studies/hearing-buddy/devices/mac-2.jpg",
            alt: "Summaries and custom alerts in the Mac window",
          },
          {
            src: "/case-studies/hearing-buddy/devices/mac-3.jpg",
            alt: "Every word captioned in the Mac window, with questions marked",
          },
          {
            src: "/case-studies/hearing-buddy/devices/ipad-summary.jpg",
            alt: "A running summary on iPad, with question and name alerts inline",
          },
          {
            src: "/case-studies/hearing-buddy/devices/ipad-captions.jpg",
            alt: "Live captions on iPad at reading size",
          },
          {
            src: "/case-studies/hearing-buddy/devices/ipad-boost.jpg",
            alt: "Buddy Boost on iPad, amplifying voices into your headphones",
          },
          {
            src: "/case-studies/hearing-buddy/devices/watch-1.jpg",
            alt: "A name alert on Apple Watch",
          },
          {
            src: "/case-studies/hearing-buddy/devices/watch-2.jpg",
            alt: "A question alert on Apple Watch",
          },
          {
            src: "/case-studies/hearing-buddy/devices/watch-3.jpg",
            alt: "Summaries on Apple Watch",
          },
        ],
      },
    },

    results: {
      stats: [
        {
          value: "2026",
          label: "Apple Design Award Finalist, Inclusivity",
        },
        {
          value: "2nd",
          label: "RevenueCat Shipaton Peace Prize",
        },
        { value: "7", label: "App Store features" },
        { value: "5", label: "Apple platforms shipped" },
      ],
      footer:
        "Hearing Buddy is a 2026 Apple Design Award Finalist in Inclusivity, pitched in the Observatory at Apple Park, and took second place in RevenueCat's Shipaton Peace Prize.",
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
    lede: "Track your hiking goals in a beautiful canvas instead of data charts. All your favorite hikes in one passport to stamp the summit.",

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

    story: {
      heading: "It started with|20,000 steps a day",
      beats: [
        {
          title: "Where it started",
          body: "I took on a 20,000 step a day challenge having never walked more than 5 miles, and ended that month on the summit of South Sister: 14 miles, 5,000 feet of elevation, 7 hours up.",
        },
        {
          title: "What was missing",
          body: "I am disabled, with hearing loss and insomnia, so my training looks different every year, and in 2025 I had only enough energy to skip a stair on every staircase I walked up.",
        },
        {
          title: "What made it possible",
          body: "That one unorthodox habit cut 1 hour and 18 minutes off my summit time, which is when it clicked that I did not need a conventional plan, I needed one that adapts to my life.",
        },
      ],
    },

    problem: {
      heading: "Training plans assume a body|and a life you might not have",
      note: "For millions of people hiking is limited by time, energy, transportation, caregiving or access, not by motivation. Hiking Passport turns those barriers into accommodations, so the plan bends and the goal does not.",
      scale: [
        {
          value: "1 in 4",
          label: "US adults has a disability",
          source: "CDC",
        },
        {
          value: "63M",
          label: "Americans are family caregivers",
          source: "AARP",
        },
        {
          value: "55",
          label: "constraints the plan adapts to",
          source: "In app",
        },
      ],
    },

    research: {
      heading: "Designed from constraints,|not from an average user",
      note: "Time outdoors is one of the most reliable things a person can do for their mental health, and the people most often shut out of it are shut out by circumstance rather than by interest. So I designed from a list of those circumstances instead of from an average user.",
      preTest: {
        title: "The audience is already outside",
        note: "A year of outdoors posting on @lillyseay, to find out whether people training for hikes were reachable at all. They are, and the best of it is the strongest thing the account has published since 2020.",
        stats: [
          { value: "80K", label: "views, top outdoors post" },
          { value: "13K", label: "likes on it, a 16% like rate" },
          { value: "82K", label: "more views cross-posted to YouTube" },
          { value: "12", label: "months of posting before submission" },
        ],
        posts: [
          {
            title: "#paddleboarding #outdoorsy #pnw",
            views: 80000,
            flag: "Top post on the account since 2020",
          },
          {
            title: "Bc this sleeping pad may as well be the ground",
            views: 15000,
          },
          { title: "My ego after cowboy camping ONCE", views: 8469 },
          { title: "5 hr 38 minute summit time", views: 1596 },
          { title: "1000 ft elevation in 1 mile", views: 1243 },
          { title: "Setting hiking goals for 2026", views: 968 },
          { title: "Summit my first mountain with me", views: 425 },
        ],
        footer:
          "Outdoors posts hold a floor of 400 to 1,600 views week after week, with spikes well past that. The same posts cross-posted to a 37-subscriber YouTube channel pulled another 82,000 views, which says the reach is the category rather than the following.",
      },
      findings: [
        {
          feature: "Five ways up every milestone",
          pains: ["A body that hurts", "A schedule that will not bend"],
          why: "Pain and a rigid week both change what a session can be rather than whether the goal is yours, so each milestone carries a low-energy route and a short-on-time one.",
        },
        {
          feature: "Treadmill and everyday-life versions",
          pains: ["No car, no trail nearby"],
          why: "Access is the most common barrier in the taxonomy, so every step has a version that works from a front door.",
        },
        {
          feature: "Six buddies from those communities",
          pains: ["Told the trail is not for you"],
          why: "The people told to stay home are the ones no training app asks about, so the cast is drawn from them.",
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
          body: "A goal hike is a mountain, milestones are signs along the trail, and a summit is a stamp on the peak, readable from four feet away.",
        },
        {
          title: "Start from the week you already have",
          body: "On-device Apple Intelligence reads your real Health history and builds the milestones from how you already move, not from an ideal beginner.",
        },
        {
          title: "Constraints change the route, never the goal",
          body: "55 things to tap turn a barrier into an accommodation, changing what the plan suggests and never whether the goal is yours.",
        },
        {
          title: "Stairs and groceries count",
          body: "Taking the stairs, pushing a stroller or carrying groceries all build toward a hard hike, so unorthodox training is a first-class route rather than a fallback.",
        },
        {
          title: "Keep it on the device",
          body: "No account, no cloud and no signal needed, because a hiking app should never ask for a login on a trail.",
        },
      ],
    },

    ux: {
      heading: "A canvas that answers|before you read anything",
      note: "The passport is the interface and everything else is a way of adding to it. It is drawn natively in SwiftUI rather than assembled from images, because it has to redraw whenever your health data changes.",
      anatomy: {
        title: "The passport canvas",
        note: "The hardest thing in the app to draw, and harder still to make accessible.",
        parts: [
          {
            name: "The mountain",
            detail:
              "Each goal hike drawn to its own shape, with a dated stamp landing on the peak when you summit.",
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
              "Date, rating, mood and your own photo, inked in the theme's deepened ridge color.",
          },
        ],
        shot: {
          src: "/hiking-passport/shots/passport-canvas.jpg",
          alt: "The 2026 passport: two goal hikes on the horizon, milestone signs along the trail, and a tent, campfire and buddy where the boot prints end",
        },
      },
      rules: [
        {
          title: "Jagged ridges that read as mountains",
          body: "A triangle is not a mountain, so the ridgelines are built jagged enough to look natural and still resolve at icon size.",
        },
        {
          title: "Peaks layer instead of colliding",
          body: "Several goal hikes share one horizon, so each peak sits behind the last with the overlap and depth that gives the range distance.",
        },
        {
          title: "An easier hike is a hill",
          body: "The silhouette scales with the goal, so adding a gentler hike draws a hill rather than a shrunken mountain.",
        },
        {
          title: "The meadow is shaded by hand",
          body: "Custom shading makes a flat SwiftUI canvas read as rolling terrain rather than a green rectangle.",
        },
        {
          title: "The accessibility layer was harder than the drawing",
          body: "Dynamic Type changes how much text fits on the landscape, VoiceOver needs the scene translated into meaning, and Reduce Motion changes how it animates, all while staying legible on iPhone, Watch and in widgets.",
        },
        {
          title: "The icon is a tiny passport",
          body: "Every theme has its own icon drawn from the same landscape, so opening the app feels like that tiny passport expanding into the full scene.",
        },
      ],
    },

    identity: {
      heading: "Five colors in,|a whole app out",
      note: "Each theme is five colors lifted from its own icon. Everything else (the sky gradient, the meadow, the stamp ink, the stamp paper) is computed from them, which is why no two themes can drift out of step.",
      palette: {
        note: "The accent is the one color picked by hand, and it has to sit beside trail signs that are warm brown on tan. Bright enough to feel alive, never a neon that fights the wood.",
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
              "Four weights, stepped up by hand when Bold Text is on, because a custom face does not answer that setting on its own.",
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
        note: "Six forest animals carrying inclusive identities, body types and perspectives, who read your workouts and cheer. Friends who hike, not trainers or doctors, and they never scold.",
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
        title: "Five parks, five colors each",
        note: "Each theme starts from a national park: alpenglow on Rainier, a grove washed white by canopy light, Voyageurs under the northern lights, high desert noon. The sun sits where it really is in the sky, and after dark it is stars and a moon instead.",
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
      heading: "One canvas,|everywhere you check it",
      note: "The passport is drawn in SwiftUI rather than assembled from images, so the same scene can be redrawn at any size. That is what lets it travel from the phone to the wrist and into a widget without becoming a chart on the way.",
      devices: {
        title: "Where the passport goes",
        list: [
          {
            name: "iPhone",
            role: "The full season",
            detail:
              "The whole landscape at reading size, with every milestone sign, the trail, the camp and your buddy in their real positions.",
          },
          {
            name: "Apple Watch",
            role: "The same scene, smaller",
            detail:
              "It keeps its own copy of the passport so a milestone can be crossed off on a ridge with no phone and no signal.",
          },
          {
            name: "Widgets",
            role: "A glance at the trail",
            detail:
              "The canvas redraws small enough to sit on the Home Screen, which is the hardest size to keep legible and the one people see most.",
          },
        ],
      },

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
            alt: "Picking a theme, with the whole scene recolored",
          },
        ],
      },
    },

    results: {
      stats: [
        { value: "1.0", label: "submitted to the App Store" },
        { value: "10", label: "screenshot backgrounds, all 10.7:1" },
        { value: "175", label: "countries at launch" },
        { value: "55", label: "constraints modeled" },
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
    lede: "A mental health app that relieves anxiety with science-backed, game-like activities. It is also the app that taught me design.",

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

    story: {
      heading: "Over 40 million US adults|have anxiety, me included",
      beats: [
        {
          title: "Where it started",
          body: "A few years ago my anxiety got really bad, and every app I opened was either a form to fill in or a meditation to sit still for.",
        },
        {
          title: "What was missing",
          body: "People with anxiety have higher cortisol in the first hour after waking, which finally explained why my mornings were the worst part of the day.",
        },
        {
          title: "What made it possible",
          body: "That first hour is the window where you can still decide how the day goes, so Tappily is three short activities built on cognitive behavioral therapy rather than one long one.",
        },
      ],
    },

    problem: {
      heading:
        "Mental health apps asked you to be calm|before you could use them",
      note: "Over 40 million US adults have anxiety, and cortisol runs highest in the first hour after waking, partly from anticipating the day ahead. Every app in the category was either clinical or meditative, and both assume you arrive with enough focus to sit still.",
    },

    research: {
      heading: "Two hundred testers and|a feedback loop with no middle",
      note: "200 testers on TestFlight while I was still building, with feedback going in and coming back out as App Store updates and nobody in between. Apple Entrepreneur Camp was the other instrument, with feedback from Apple's design evangelists implemented the same week.",
      pullQuote: {
        text: "Pivoting doesn't have to make a big splash. It's more like skipping a rock across a pond, ripples of progress, each attempt more calculated than the last.",
        cite: "My talk at Apple's International Women's Day event, Cupertino, 2024",
      },
      findings: [
        {
          feature: "Full-screen animated activities",
          pains: ["Forms feel like homework"],
          why: "A form asks you to report on yourself before it helps, so every activity became something you land inside instead.",
        },
        {
          feature: "No streaks, no scoring",
          pains: ["Streaks punish bad weeks"],
          why: "A broken streak punishes exactly the week you most needed the app, so there is nothing to break.",
        },
        {
          feature: "One color per activity",
          pains: ["Nobody reads instructions"],
          why: "Color tells you which activity you are in before you read a word, so the interface never depends on being read.",
        },
      ],
    },

    strategy: {
      heading: "Give anxious hands|somewhere to go",
      note: "The bet was that attention, not calm, is the thing to design for, and that cognitive behavioral therapy works better as a game than as a worksheet.",
      bets: [
        {
          title: "Animation is the product",
          body: "Not decoration on a form: the activity is the animation, and the whole screen is it.",
        },
        {
          title: "Loud, against the category",
          body: "Saturated color edge to edge where everyone else went beige, because a person in a spiral needs somewhere to put their attention rather than to be soothed into stillness.",
        },
        {
          title: "No streaks, no scoring",
          body: "Nothing that can be broken, and nothing that makes a bad week visible.",
        },
        {
          title: "Three activities, not a program",
          body: "Gratitude to start the day, a plan for the anxiety that shows up later, and a task list that narrows the day to what is actually relevant.",
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
        note: "Every activity is the same shape: a color, a title, a one-line instruction and a single button.",
        parts: [
          {
            name: "The color",
            detail:
              "Carried edge to edge, telling you which activity you are in before you read the title.",
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
              "Full width, bottom of screen, the same position every time, so there is one decision to make.",
          },
        ],
        shot: {
          src: "/case-studies/tappily/shots/01.jpg",
          alt: "A Tappily activity screen: Organize Tasks on hot pink, with a theme list, instructions and a single Start Activity button",
        },
      },
      rules: [
        {
          title: "One color per activity",
          body: "Pink for task lists, orchid for organize, sky for negative thoughts, indigo for the wheel, so the color is the wayfinding.",
        },
        {
          title: "Full screen or it is not finished",
          body: "If an activity needs a caption to make sense, the animation is not doing its job.",
        },
        {
          title: "The same button in the same place",
          body: "Every activity ends in one full-width action at the bottom, with nothing to hunt for.",
        },
      ],
    },

    identity: {
      heading: "Candy color|as the interface",
      note: "The opposite of the beige-and-sage the category had settled on. These are not accents, they are the interface, so each one had to hold up full screen against white.",
      palette: {
        note: "One saturated color per activity, sampled from the shipped App Store screens.",
        groups: [
          {
            name: "One color per activity",
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
              '"daily, weekly, & monthly task lists", where lowercase reads as a friend, not a clinician.',
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
        body: "Storyboard was the wrong architecture for a system of animations, and migrating to SwiftUI myself saved about $75,000 and unlocked the work the app is known for.",
        from: "Storyboard to SwiftUI",
        to: [
          "Reusable animation system",
          "One color per activity",
          "Faster ship cycle",
          "~$75K saved",
        ],
      },
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
