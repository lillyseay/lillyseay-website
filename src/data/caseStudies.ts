// Design case studies, in five sections: overview, audience, research, design,
// marketing. Written short on purpose — the work carries the page.
//
// Everything factual is checked against source:
//   Hearing Buddy   ~/Developer/Hearing-Buddy + ~/Developer/hearingbuddyapp
//   Hiking Passport ~/Developer/Hiking-Passport + ~/Developer/hiking-passport-website
//   Tappily         the App Store listing, the 2024 IWD talk, the shipped screens
// Social numbers: Metricool (2026-09-08/09). TikTok comments, handles, like and
// reply counts pulled from the live account on 2026-09-22; wording tidied for
// spelling only.

export type Swatch = { hex: string; name: string };

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
  /** One sentence under the title. */
  lede: string;

  /** Everything the hero needs: the headline numbers and the facts beside them. */
  overview: {
    problem: string;
    stats: { value: string; label: string }[];
    facts: { k: string; v: string }[];
  };

  /** Who it is for. Market numbers, then the audiences the research surfaced. */
  audience?: {
    heading: string;
    note: string;
    primary: { value: string; label: string; source: string }[];
    adjacent: { name: string; detail: string; evidence: string }[];
  };

  research: {
    heading: string;
    note: string;
    /** Real comments, rendered as comments. */
    quotes?: {
      user: string;
      text: string;
      likes: number;
      replies?: number;
      date: string;
    }[];
    /** A line of my own, set large. Not a user comment. */
    pullQuote?: { text: string; cite: string };
    findings?: { signal: string; shipped: string }[];
  };

  design: {
    heading: string;
    note: string;
    screens?: { title: string; images: { src: string; alt: string }[] };
    second?: { title: string; images: { src: string; alt: string }[] };
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
    decisions: { title: string; body: string }[];
    system?: { title: string; body: string; from: string; to: string[] };
  };

  marketing: {
    heading: string;
    note: string;
    /** The campaign loop, as a timeline. */
    cycle: { when: string; title: string; body: string }[];
    /** How the social side works. */
    strategies: { title: string; body: string }[];
    /** Organic winners into paid creative. */
    pipeline: { title: string; body: string };
    results: { value: string; label: string }[];
    footer: string;
  };
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
      problem:
        "Captioning apps metered a disability by the minute. Apple shipped on-device speech models at WWDC25, and the app became possible to build.",
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

    audience: {
      heading: "Who it is for,|and who turned up",
      note: "The WHO numbers are the market. The adjacent audiences are what my own research surfaced — people who arrived in the comments describing the same problem under a different name.",
      primary: [
        {
          value: "1.5B",
          label: "live with some degree of hearing loss",
          source: "WHO",
        },
        { value: "2.5B", label: "projected by 2050", source: "WHO" },
        { value: "430M", label: "need rehabilitation today", source: "WHO" },
      ],
      adjacent: [
        {
          name: "Auditory processing",
          detail:
            "Hears the sound, cannot resolve the words — the exact problem captions solve, under a different diagnosis.",
          evidence: '"I\'m not deaf, I just have auditory processing issues."',
        },
        {
          name: "ADHD",
          detail:
            "The same failure to hold a thread in a noisy room, from a different cause. Tested as a carousel crossover.",
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

    research: {
      heading: "Social media is my|research instrument",
      note: "I score the keywords people already search, turn each one into a video, and read the view count as a vote. The comments are the qualitative half — one video on the signs of hearing loss drew 84.",
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
    },

    design: {
      heading: "Design the app as the person,|not the technology",
      note: 'A hearing buddy is the person who repeats the question without making you feel like a burden. So the app is a character you name, and the copy never says "AI." Accessibility and delight are the same job.',
      screens: {
        title: "Inside the app",
        images: [
          {
            src: "/case-studies/hearing-buddy/screens/listening-summary.png",
            alt: "The Summary view: a question alert from Scott, and the current topic written out",
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
        title: "On the App Store",
        images: [
          {
            src: "/case-studies/hearing-buddy/shots/01.jpg",
            alt: "Real-time captions for every conversation",
          },
          {
            src: "/case-studies/hearing-buddy/shots/02.jpg",
            alt: "Never miss a word again",
          },
          {
            src: "/case-studies/hearing-buddy/shots/03.jpg",
            alt: "Onboarding shown on the App Store",
          },
          {
            src: "/case-studies/hearing-buddy/shots/04.jpg",
            alt: "Live transcription for hearing loss",
          },
          {
            src: "/case-studies/hearing-buddy/shots/05.jpg",
            alt: "Smart summaries keep you updated",
          },
          {
            src: "/case-studies/hearing-buddy/shots/06.jpg",
            alt: "On-device transcription",
          },
        ],
      },
      palette: {
        note: "No single brand palette — sixteen of them. Choosing a buddy re-themes the whole app, and every gradient has to keep caption text legible over it, because the captions are the product.",
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
              "Full Dynamic Type. Captions never take a decorative treatment.",
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
      decisions: [
        {
          title: "Unlimited captions stay free",
          body: "On-device models made it possible to give the core away.",
        },
        {
          title: 'Never say "AI"',
          body: "The user named this character. Crediting a model breaks the one relationship the product is built on.",
        },
        {
          title: "Haptics only on the wrist",
          body: "Up for your name, down for a question. No competing notifications.",
        },
        {
          title: "Accessibility ships everywhere",
          body: "VoiceOver is never iOS-only, and the live caption line is hidden from it — a sentence that rewrites itself is unreadable aloud.",
        },
      ],
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
      strategies: [
        {
          title: "Keyword sheet first",
          body: "100 topics across 15 clusters, scored by search volume and difficulty, before a single video is shot.",
        },
        {
          title: "Thirty a month, three platforms",
          body: "Every topic posts to TikTok, Instagram and YouTube Shorts the same day. Volume is how you find the signal.",
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
      results: [
        { value: "7", label: "App Store features" },
        { value: "730K", label: "views in 7 months" },
        { value: "64K", label: "best single video" },
        { value: "57%", label: "of views from 17 series videos" },
        { value: "95%", label: "of carousel reach from For You" },
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
      problem:
        "Every training plan assumed no injuries, a car, a trailhead nearby, and a body that does what it is told. And progress toward a mountain always arrives as a chart.",
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

    audience: {
      heading: "For the people told|the trail is not for them",
      note: "The plan never asks who you are. It asks what you are working around, and offers fifty-five things to tap across seven categories.",
      primary: [
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
      adjacent: [
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

    research: {
      heading: "Designed from constraints,|not from an average user",
      note: "This one did not start from a keyword sheet. It started from the observation that the people most often told the trail is not for them are the ones no training app asks about — so I built the taxonomy first and designed the plan around it.",
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
    },

    design: {
      heading: "Make progress something|you can see from across the room",
      note: "A goal hike is a mountain. Milestones are signs along the trail. Summit, and a stamp lands on the peak, the camp moves up the meadow, the boot prints reach further. Nothing in that sentence is a number.",
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
      palette: {
        note: "Five colours lifted from each theme's icon are the only input. The sky gradient, the meadow, the stamp ink and the stamp paper are all computed from them. The accent is the one colour I pick by hand, and it has to sit beside signs that are warm brown on tan.",
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
              "Full Dynamic Type. Milestone signs thin out rather than collide as text grows.",
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
      decisions: [
        {
          title: "No account, no cloud",
          body: "Everything lives on your iPhone and works with no signal. A hiking app should never need a login on a trail.",
        },
        {
          title: "Apple Health is read only",
          body: "Five things read, nothing written back. Decline any of them and the plan still works.",
        },
        {
          title: "The scene degrades gracefully",
          body: "Signs thin out instead of colliding as Dynamic Type grows, and the whole canvas is described for VoiceOver.",
        },
        {
          title: "Buddies cheer, they do not coach",
          body: "Nothing they say claims expertise. Identity lives in their stories, never as a label on the hiker.",
        },
      ],
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
        body: "The same keyword-and-series method I run for Hearing Buddy is ready to point at hiking the day the app is approved, with the passport image as the native hook.",
      },
      results: [
        { value: "1.0", label: "submitted to the App Store" },
        { value: "10", label: "screenshot backgrounds, all 10.7:1" },
        { value: "175", label: "countries at launch" },
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
      problem:
        "Every app in the category was clinical or beige. Both assume you arrive calm enough to sit still. What I wanted when anxious was something to do with my hands that was not a form.",
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

    design: {
      heading: "Full-screen animation|as the entire interface",
      note: "The activity is not a form with an illustration next to it. The activity is the animation, and the whole screen is it. No reading, no configuration, no streak to have broken.",
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
      palette: {
        note: "One saturated colour per activity, carried edge to edge — the opposite of the beige-and-sage the category had settled on. These are not accents, they are the interface, so each one had to hold up full screen against white.",
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
        note: "The type had to disappear. When the animation is the interface, anything competing with it is noise — so the face is the system one at heavy weights, and the promo headlines set lowercase to read as a friend rather than a clinician.",
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
      decisions: [
        {
          title: "The animation is the feature",
          body: "Every activity is designed full screen first. If it needs a caption to make sense, it is not finished.",
        },
        {
          title: "Warm and loud, against the category",
          body: "A person in a spiral does not need to be soothed into stillness. They need somewhere to put their attention.",
        },
        {
          title: "Ship feedback the same week",
          body: "200 testers and nobody between me and the code.",
        },
        {
          title: "Migrate rather than fight the architecture",
          body: "Storyboard to SwiftUI was a design decision disguised as an engineering one.",
        },
      ],
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
      strategies: [
        {
          title: "Carousels before they were the format",
          body: "Mental health content and carousels on Instagram to 2,900 followers — where the method I sell today started.",
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
      results: [
        { value: "533%", label: "time efficiency gain" },
        { value: "8", label: "hour days cut to 1.5" },
        { value: "2.9K", label: "Instagram followers" },
        { value: "4.3", label: "stars, eight years on" },
      ],
      footer:
        "Accepted into Apple Entrepreneur Camp in 2023 for its simple design and creative full-screen animations, and still running. More than that, it is where I became a designer.",
    },
  },
];
