// Design case studies. Written short on purpose: these pages lead with the work,
// not with paragraphs. Everything factual is checked against source —
//   Hearing Buddy   ~/Developer/Hearing-Buddy (PersonalityTheme.swift, docs/, Files/)
//   Hiking Passport ~/Developer/Hiking-Passport (PassportTheme.swift, DesignSystem.swift,
//                   TrainingMode.swift, HikingBuddy.swift, AppStore/AppStoreMetadata.md)
//   Tappily         the 2024 International Women's Day talk, the app icon and screens
// Social numbers: Metricool (2026-09-08/09); TikTok pulled 2026-09-22 for the
// per-video views and the comment quotes.

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
  /** Index card only: one short meta line and one short badge. */
  cardMeta: string;
  cardBadge: string;
  /** The left-hand chip in the meta bar at the top of the case study. */
  category: string;
  /** Headings may carry a single "|" — everything after it renders in the
   *  app's accent colour, the way a Behance case study splits a title. */
  /** Hero wash, taken from the app's own palette. */
  accent: { from: string; mid: string; to: string };
  /** The tint behind the app's own bands, so each case study reads like that
   *  app's landing page rather than like this site. */
  band: { light: string; dark: string };
  /** One sentence under the title. */
  lede: string;
  /** Three numbers for the hero. */
  stats: { value: string; label: string }[];
  problem: { title: string; body: string; stat?: { value: string; label: string } };
  myRole: { body: string; owned: string[] };
  research: {
    title: string;
    body: string;
    /** Real comments, with where they came from. */
    quotes?: { text: string; meta: string }[];
    /** Signal in, feature out. */
    findings?: { signal: string; shipped: string }[];
  };
  strategy: { title: string; body: string };
  palette: {
    intro: string;
    groups: { name: string; note: string; swatches: Swatch[] }[];
    type?: string;
  };
  systems: { title: string; body: string; diagram?: { from: string; to: string[] } };
  decisions: { title: string; body: string }[];
  marketing: { body: string; channels: { name: string; detail: string }[] };
  outcome: { body: string; wins: string[] };
  /** Screens, shown big. */
  gallery?: { title: string; kicker: string; note?: string; images: { src: string; alt: string }[] };
  /** A second run of screens — the marketing art, shown after the interface. */
  marketingShots?: { title: string; kicker: string; note?: string; images: { src: string; alt: string }[] };
  /** The cast, drawn over their own gradients. */
  characters?: {
    heading: string;
    note: string;
    list: { file: string; name: string; role: string; hex: string; to: string }[];
  };
  /** Hiking Passport's five park themes, each shown with its own five colours. */
  themes?: {
    heading: string;
    note: string;
    list: { file: string; name: string; park: string; swatches: string[] }[];
  };
};

export const caseStudies: CaseStudy[] = [
  // ─────────────────────────────────────────────────────────────── Hearing Buddy
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
      "2026 Apple Design Award Finalist, Inclusivity",
      "Featured on the App Store 7 times",
      "Apps We Love",
      "RevenueCat Shipaton Peace Prize",
    ],
    lede: "I am hard of hearing. I built the app I had been waiting for someone else to build, and designed it as a person rather than a tool.",
    stats: [
      { value: "16", label: "buddy characters" },
      { value: "5", label: "Apple platforms" },
      { value: "7", label: "App Store features" },
    ],
    problem: {
      title: "The tools were charging rent on|an accessibility need",
      body: "Captioning apps metered a disability by the minute. At WWDC25 Apple shipped on-device speech models, and the app I had wanted for years became possible to build.",
      stat: {
        value: "1.5 billion",
        label: "people live with hearing loss, on track for 2.5 billion by 2050",
      },
    },
    myRole: {
      body: "Two-person team. I own design end to end and build in SwiftUI.",
      owned: [
        "Product and interaction design, 5 platforms",
        "Brand and 16 characters",
        "App Store art and pitches",
        "SwiftUI engineering",
        "Content strategy and research",
      ],
    },
    research: {
      title: "Social media is my|research instrument",
      body: "I score the keywords people already search, turn each one into a video, and read the view count as a vote. The comments are the qualitative half — people describing workarounds they had built for a problem they had never named.",
      quotes: [
        {
          text: "All of this but I heard that hearing loss only comes with repetitive ringing in the ear(s) and I'm still young so wondering if I'm delusional",
          meta: "67 likes · 6 replies",
        },
        {
          text: "Half the time I just smile and nod in big groups or in loud places cuz I have no idea wtf anyone said lol",
          meta: "41 likes",
        },
        {
          text: "It's not volume but clarity that's needed often. I wish people would speak clearer",
          meta: "19 likes",
        },
        {
          text: "Sorry, am I finally connecting with my people?! Iv never felt so heard in my life!",
          meta: "41 likes · 5 replies",
        },
        {
          text: "Needs to rest after social events. It's exhausting",
          meta: "alongside \"I'm trying to preserve brain power until I'm ready to function\"",
        },
        {
          text: "So real. I'm not deaf I just have audio processing issues and I get so excited when I don't have to be like \"huh?\"",
          meta: "an audience I had not designed for",
        },
      ],
      findings: [
        {
          signal: "Clarity, not volume",
          shipped: "Captions are the free core. Amplification is the paid extra.",
        },
        {
          signal: "The fake nod",
          shipped: "Question Alerts and Name Alerts — you need to know a question was asked, not every word.",
        },
        {
          signal: "Listening fatigue",
          shipped: "Conversation summaries, for catching up at a glance.",
        },
        {
          signal: "An undiagnosed audience",
          shipped: "Hearing test support through Apple Health.",
        },
        {
          signal: "Adjacent audiences",
          shipped: "A partner and ally content line, and an ADHD crossover.",
        },
        {
          signal: "Music makes videos inaccessible",
          shipped: "The videos changed. Research the audience cannot hear is filtered research.",
        },
      ],
    },
    strategy: {
      title: "Design the app as the person,|not the technology",
      body: "A hearing buddy is the person who repeats the question without making you feel like a burden. So the app is a character you name, and the copy never says \"AI.\" Accessibility and delight are the same job.",
    },
    palette: {
      intro:
        "No single brand palette — sixteen of them. Choosing a buddy re-themes the whole app, and every gradient has to keep caption text legible over it, because the captions are the product.",
      groups: [
        {
          name: "The four originals",
          note: "Free, and where the system was proved.",
          swatches: [
            { hex: "#5BC0DE", name: "Dash · cyan" },
            { hex: "#7DD3A8", name: "Dash · mint" },
            { hex: "#E16A78", name: "Coral · salmon" },
            { hex: "#F4B458", name: "Coral · golden" },
            { hex: "#7EC8B0", name: "Atlas · seafoam" },
            { hex: "#1B4332", name: "Atlas · forest" },
            { hex: "#F5DEB3", name: "Pearl · wheat" },
            { hex: "#D4A0C0", name: "Pearl · rose" },
          ],
        },
        {
          name: "The identity buddies",
          note: "Launched to the awareness month they belong to.",
          swatches: [
            { hex: "#C4A0D8", name: "Prism · Pride" },
            { hex: "#E87AA0", name: "Rowen · trans pink" },
            { hex: "#5AB8E0", name: "Rowen · trans blue" },
            { hex: "#F6D86B", name: "Lumi · Disability Pride" },
            { hex: "#4C3F73", name: "Luna · low light" },
            { hex: "#9CBDB4", name: "Celeste · Deaf buddy" },
          ],
        },
      ],
      type: "SF Pro throughout, with iOS 26 Liquid Glass materials and full Dynamic Type. Captions never take a decorative treatment.",
    },
    systems: {
      title: "One value themes five platforms|and the launch calendar",
      body: "A gradient, a coat, an accent pair, a voice — one value, sixteen surfaces. It also carries a launch date, so a Pride buddy does not exist in the interface until its day. That rule is why the design system and the App Store calendar are the same object.",
      diagram: {
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
    characters: {
      heading: "Sixteen buddies,|sixteen palettes",
      note: "Each one is a single value in code — a gradient, a coat, an accent pair and a voice. Pick one and the whole app, every widget and both companions follow it.",
      list: [
        { file: "smart.svg", name: "Dash", role: "Concise", hex: "#5BC0DE", to: "#7DD3A8" },
        { file: "encouraging.svg", name: "Coral", role: "Encouraging", hex: "#F4B458", to: "#E16A78" },
        { file: "brainy.png", name: "Atlas", role: "Brainy", hex: "#7EC8B0", to: "#A8DECE" },
        { file: "sweet.png", name: "Pearl", role: "Sweet", hex: "#F5DEB3", to: "#D4A0C0" },
        { file: "playful.svg", name: "Ziggy", role: "Playful", hex: "#B8A9D9", to: "#FF7EB3" },
        { file: "chill.svg", name: "Reef", role: "Chill", hex: "#87CEEB", to: "#FFE17B" },
        { file: "sporty.png", name: "Sunny", role: "Sporty", hex: "#F8B4C8", to: "#5BB8E8" },
        { file: "zen.png", name: "Fern", role: "Zen", hex: "#B5D8A0", to: "#F5A8C0" },
        { file: "radiant.png", name: "Prism", role: "Pride", hex: "#C4A0D8", to: "#A0D0E8" },
        { file: "affirming.png", name: "Rowen", role: "Trans Pride", hex: "#E87AA0", to: "#5AB8E0" },
        { file: "lumi.png", name: "Lumi", role: "Disability Pride", hex: "#F6D86B", to: "#F4A95F" },
        { file: "luna.png", name: "Luna", role: "Low light", hex: "#B5A9D6", to: "#4C3F73" },
        { file: "paige.png", name: "Paige", role: "Studious", hex: "#C3BDDC", to: "#7B6BA6" },
        { file: "chalkie.png", name: "Chalkie", role: "Patient", hex: "#F6CE55", to: "#E97B5C" },
        { file: "celeste.png", name: "Celeste", role: "Deaf buddy", hex: "#9CBDB4", to: "#8FA3CE" },
        { file: "goldie.png", name: "Goldie", role: "Golden", hex: "#C99054", to: "#6A6390" },
      ],
    },
    gallery: {
      kicker: "Inside the app",
      title: "Captions, alerts, and a Buddy|who takes notes",
      note: "Live captions with speaker colours, a summary that surfaces the question you missed, a people tab that learns voices, and an onboarding that names your Buddy before it asks for anything.",
      images: [
        { src: "/case-studies/hearing-buddy/screens/listening-summary.png", alt: "The Summary view: a question alert from Scott, and the current topic written out" },
        { src: "/case-studies/hearing-buddy/screens/listening-speakers.png", alt: "Live captions with each speaker in their own colour" },
        { src: "/case-studies/hearing-buddy/screens/people-tab.png", alt: "The People tab, where voices are learned and named" },
        { src: "/case-studies/hearing-buddy/screens/onboarding-tap.png", alt: "Onboarding: tap to start a session" },
        { src: "/case-studies/hearing-buddy/screens/onboarding_name.png", alt: "Onboarding: naming your Buddy" },
        { src: "/case-studies/hearing-buddy/screens/onboarding-morning.png", alt: "Onboarding: the morning scene" },
        { src: "/case-studies/hearing-buddy/screens/settings.png", alt: "Settings" },
      ],
    },
    marketingShots: {
      kicker: "On the App Store",
      title: "The listing is|part of the design",
      note: "Seven features in a year came off these. I design the screenshots, the in-app event art and the pitch behind each one.",
      images: [
        { src: "/case-studies/hearing-buddy/shots/01.jpg", alt: "Real-time captions for every conversation" },
        { src: "/case-studies/hearing-buddy/shots/02.jpg", alt: "Never miss a word again" },
        { src: "/case-studies/hearing-buddy/shots/03.jpg", alt: "Onboarding flow shown on the App Store" },
        { src: "/case-studies/hearing-buddy/shots/04.jpg", alt: "Live transcription for hearing loss" },
        { src: "/case-studies/hearing-buddy/shots/05.jpg", alt: "Smart summaries keep you updated" },
        { src: "/case-studies/hearing-buddy/shots/06.jpg", alt: "On-device transcription" },
      ],
    },
    decisions: [
      {
        title: "Unlimited captions stay free",
        body: "On-device models made it possible to give the core away. The paid tier is the extras, never the access.",
      },
      {
        title: "Never say \"AI\"",
        body: "The user named this character. Attributing its work to a model breaks the one relationship the product is built on.",
      },
      {
        title: "Haptics only on the wrist",
        body: "No Watch notifications. One clean haptic language: up for your name, down for a question.",
      },
      {
        title: "Accessibility ships everywhere or not at all",
        body: "VoiceOver is never iOS-only, and the live caption line is hidden from it — a sentence that rewrites itself is unreadable aloud.",
      },
      {
        title: "Let the community name what is missing",
        body: "Celeste, the first Deaf buddy, came from Deaf users. So did caption sharing and haptic name alerts.",
      },
    ],
    marketing: {
      body: "The App Store as an editorial calendar. Every month of 2026 had a reason to be featured, and each one shipped real work behind it. Seven features in a year.",
      channels: [
        { name: "App Store campaigns", detail: "8 campaigns, 7 features, all art designed in house" },
        { name: "Short-form video", detail: "210 videos, 730,072 views in 7 months" },
        { name: "Carousels", detail: "190 posts, 95% of reach from For You" },
        { name: "Owned audience", detail: "113K followers give every launch a floor" },
      ],
    },
    outcome: {
      body: "A 2026 Apple Design Award Finalist in Inclusivity, pitched in the Observatory at Apple Park.",
      wins: [
        "Apple Design Award Finalist, Inclusivity",
        "7 App Store features in 12 months",
        "Apps We Love · Best New Apps",
        "RevenueCat Shipaton Peace Prize",
        "iPhone, iPad, Watch, Mac, Vision Pro",
        "16 characters, designed in house",
      ],
    },
  },

  // ───────────────────────────────────────────────────────────── Hiking Passport
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
    stats: [
      { value: "55", label: "things it works around" },
      { value: "6", label: "hiking buddies" },
      { value: "5", label: "park themes" },
    ],
    problem: {
      title: "Training plans assume a body|and a life you might not have",
      body: "Every plan assumed no injuries, a car, a trailhead nearby, and a body that does what it is told. And progress toward a mountain always arrives as a chart, which is not why anyone hikes.",
      stat: {
        value: "55",
        label:
          "things the plan can work around, across family, transport, body, sleep, mind, accessibility and money",
      },
    },
    myRole: {
      body: "Solo. Design, illustration, the training model, SwiftUI on both platforms.",
      owned: [
        "Product and illustration design",
        "The training model",
        "SwiftUI, iPhone and Watch",
        "6 characters, 5 themes",
        "App Store listing and site",
      ],
    },
    research: {
      title: "Designed from constraints,|not from an average user",
      body: "The people most often told the trail is not for them are the ones no training app asks about. Setup offers fifty-five things to tap — knees, lungs, a mobility aid, shift work, no car, a tight month. None of it is a barrier to the goal.",
      findings: [
        { signal: "A body that hurts", shipped: "Five ways up every milestone, including a low-energy one." },
        { signal: "No car, no trail nearby", shipped: "Treadmill, stairs, and everyday-life versions of each step." },
        { signal: "A schedule that does not bend", shipped: "A short-on-time tier sized to the session you actually get." },
        { signal: "Being told the trail is not for you", shipped: "Six buddies from communities that hear it most." },
      ],
    },
    strategy: {
      title: "Make progress something|you can see from across the room",
      body: "A goal hike is a mountain. Milestones are signs along the trail. Summit, and a stamp lands on the peak, the camp moves up the meadow, the boot prints reach further. Nothing in that sentence is a number.",
    },
    palette: {
      intro:
        "The five theme colours are only the input. Everything else is computed from them: the sky gradient takes its stops from the sky colour, the meadow takes the ground's hue, the stamp ink is the near ridge deepened in a loop until it reads as ink, and the stamp paper is the sun's warmth on card. The one colour I pick by hand is the accent, and it has to sit beside trail signs that are warm brown on tan — so the set stays earthy rather than neon.",
      groups: [
        {
          name: "The accents, hand-picked",
          note: "One per theme. Lake blue, cedar, evergreen, huckleberry, lichen gold — bright enough to feel alive, never enough to fight the wood.",
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
          note: "Derived in code from the five above, which is why no two themes can drift out of step.",
          swatches: [
            { hex: "#FF5A2E", name: "alpenglow" },
            { hex: "#C4A886", name: "sign wood" },
            { hex: "#3A4A52", name: "stamp ink" },
            { hex: "#FBF3E4", name: "stamp paper" },
          ],
        },
      ],
      type: "National Park is the display face — hike names, stamps, signs. SF Pro carries everything else.",
    },
    systems: {
      title: "Five colours in,|a whole app out",
      body: "A theme is not a skin — the stamp ink is the near ridge deepened in a loop until it reads as ink. The decision I am proudest of is one I reversed: the accent used to follow your buddy. Colour should say something about the app, not about a character.",
      diagram: {
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
    gallery: {
      kicker: "Inside the app",
      title: "A season you can read|from across the room",
      note: "The passport canvas, a summit being stamped, the training setup, the fifty-five things it works around, the buddy picker, and a theme changing the whole scene at once.",
      images: [
        { src: "/hiking-passport/shots/01-goal-hikes.jpg", alt: "The passport scene with a goal hike stamped on the summit" },
        { src: "/hiking-passport/shots/02-stamp-the-summit.jpg", alt: "Logging a summit with a date, rating, mood and photo" },
        { src: "/hiking-passport/shots/03-train-your-faves.jpg", alt: "Picking how you can train" },
        { src: "/hiking-passport/shots/04-training-for-everyone.jpg", alt: "The list of things the plan can work around" },
        { src: "/hiking-passport/shots/05-hike-with-a-buddy.jpg", alt: "Choosing a hiking buddy" },
        { src: "/hiking-passport/shots/06-hiking-insights.jpg", alt: "The stats tab, written in your buddy's voice" },
        { src: "/hiking-passport/shots/07-passport-themes.jpg", alt: "Picking a theme, with the whole scene recoloured" },
        { src: "/hiking-passport/shots/08-training-widgets.jpg", alt: "Home Screen widgets carrying the plan" },
      ],
    },
    marketingShots: {
      kicker: "On your wrist",
      title: "The watch keeps|its own copy",
      note: "It opens with your passport whether or not the phone is nearby, so you can cross off a milestone or stamp a summit on a ridge with no signal.",
      images: [
        { src: "/hiking-passport/watch/1-plan.jpg", alt: "The plan on the watch" },
        { src: "/hiking-passport/watch/2-todays-pick.jpg", alt: "Today's pick from your buddy" },
        { src: "/hiking-passport/watch/3-ways-to-do-it.jpg", alt: "Ways to do today's milestone" },
        { src: "/hiking-passport/watch/4-passport.jpg", alt: "The passport drawn on the watch" },
        { src: "/hiking-passport/watch/5-insights.jpg", alt: "Insights on the watch" },
      ],
    },
    characters: {
      heading: "Six buddies,|six reasons to be out there",
      note: "Forest animals, each from a community that gets told the trail is not for them. They read your workouts and cheer. They are friends who hike — not trainers, not doctors — and they never scold.",
      list: [
        { file: "buddy-eagle.svg", name: "Aerie", role: "Disabled, fierce and kind", hex: "#6E86B4", to: "#9FB4D8" },
        { file: "buddy-berry.png", name: "Berry", role: "Plus-size and joyful", hex: "#C2705E", to: "#F0AC85" },
        { file: "buddy-acorn.png", name: "Acorn", role: "Trains between naps", hex: "#C99054", to: "#F8DFA0" },
        { file: "buddy-turtle.png", name: "Juniper", role: "Queer, trans and outside", hex: "#5A5788", to: "#9A93DE" },
        { file: "buddy-owl.svg", name: "Otis", role: "Neurodivergent and clear", hex: "#5C7A55", to: "#87A365" },
        { file: "buddy-cat.png", name: "Biscuit", role: "Funny and on your side", hex: "#A0522B", to: "#DED7C9" },
      ],
    },
    themes: {
      heading: "Five parks,|five colours each",
      note: "Each theme starts from a place: alpenglow on Rainier, a grove washed white by canopy light, Voyageurs under the northern lights, high desert noon. The five colours under each icon are the whole theme.",
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
          park: "Inspired by Mount Rainier",
          swatches: ["#9A97D6", "#F0A3BE", "#FFB48E", "#C2705E", "#8DB078"],
        },
        {
          file: "theme-redwood.svg",
          name: "Redwood",
          park: "Inspired by Redwood",
          swatches: ["#9FBACB", "#E6E4E2", "#A0522B", "#4A3123", "#87A365"],
        },
        {
          file: "theme-voyageurs.svg",
          name: "Voyageurs",
          park: "Inspired by the northern lights",
          swatches: ["#9A93DE", "#C5BCEA", "#9E97C6", "#7E79AC", "#9FD4A4"],
        },
        {
          file: "theme-white-sands.svg",
          name: "White Sands",
          park: "Inspired by White Sands",
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
        title: "Signs thin out instead of colliding",
        body: "As Dynamic Type grows the scene drops signs rather than overlapping them into mush.",
      },
      {
        title: "The opening animation skips itself",
        body: "The scene build is the first thing to go under Reduce Motion, and the whole canvas is described for VoiceOver.",
      },
      {
        title: "The display face answers Bold Text by hand",
        body: "A custom typeface ignores that setting, so every heading and stamp used to stay thin while the body copy thickened.",
      },
      {
        title: "Buddies cheer, they do not coach",
        body: "Nothing they say claims expertise, and identity lives in their stories rather than as a label on the hiker.",
      },
    ],
    marketing: {
      body: "Pre-launch, so the work is the listing: ten screenshot backgrounds pulled from the app's own palette, every one clearing 10.7:1 against its text.",
      channels: [
        { name: "Screenshot system", detail: "10 palette-derived backgrounds, all clearing 10.7:1" },
        { name: "App Store listing", detail: "Written to a character budget, six-screen story order" },
        { name: "Marketing site", detail: "hikingpassportapp.com" },
        { name: "Crossover audience", detail: "An outdoors audience already at 74K" },
      ],
    },
    outcome: {
      body: "Version 1.0 is submitted and in review. Everything here is built and in the binary.",
      wins: [
        "Designed and built solo",
        "55-item constraints model",
        "5 ways up every milestone",
        "5 themes from 5 colours each",
        "VoiceOver description of the whole scene",
        "Free tier keeps the passport and stamps",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────── Tappily
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
    badges: ["Apple Entrepreneur Camp 2023", "4.3 stars", "200+ beta testers"],
    lede: "The app that taught me design. I learned animation as a craft, then found a purpose for it.",
    stats: [
      { value: "4.3", label: "stars from 68 ratings" },
      { value: "200+", label: "beta testers" },
      { value: "533%", label: "marketing efficiency gain" },
    ],
    problem: {
      title: "Mental health apps asked you to be calm|before you could use them",
      body: "Every app in the category was clinical or beige. Both assume you arrive calm enough to sit still. What I wanted when anxious was something to do with my hands that was not a form.",
    },
    myRole: {
      body: "Founder, sole designer and developer on both platforms. Engineer first, then design — because I wanted to push further than engineering could reach alone.",
      owned: [
        "Brand, illustration, animation",
        "iOS and Android engineering",
        "Beta programme",
        "Marketing and its automation",
      ],
    },
    research: {
      title: "Two hundred testers and|a feedback loop with no middle",
      body: "200 testers on TestFlight while I was still building. Feedback went in and came back out as App Store updates, with nobody in between. Apple Entrepreneur Camp was the other instrument — feedback from Apple's design evangelists, implemented the same week.",
      quotes: [
        {
          text: "Pivoting doesn't have to make a big splash in your business. It's more like skipping a rock across a pond, making ripples of progress as each attempt is more calculated than the last.",
          meta: "my talk at Apple's International Women's Day event, Cupertino, 2024",
        },
      ],
    },
    strategy: {
      title: "Full-screen animation|as the entire interface",
      body: "The activity is not a form with an illustration next to it. The activity is the animation, and the whole screen is it. No reading, no configuration, no streak to have broken.",
    },
    palette: {
      intro:
        "One saturated colour per activity, carried edge to edge. The opposite of the beige-and-sage the category had settled on — and it had to hold up full screen, because these are not accents, they are the interface. Each activity owns a colour, so you know which one you are in before you read a word.",
      groups: [
        {
          name: "One colour per activity",
          note: "Sampled from the shipped App Store screens.",
          swatches: [
            { hex: "#FE7DCA", name: "task lists · pink" },
            { hex: "#E07EFC", name: "organize · orchid" },
            { hex: "#54D3FA", name: "negative thoughts · sky" },
            { hex: "#5B69AF", name: "spin the wheel · indigo" },
            { hex: "#FEDB5E", name: "gratitude · sunshine" },
          ],
        },
        {
          name: "Interface",
          note: "White ground so the colour has something to be loud against.",
          swatches: [
            { hex: "#FFFFFF", name: "paper" },
            { hex: "#FCE9A2", name: "pale gold" },
            { hex: "#FEBDB4", name: "marker coral" },
            { hex: "#2B2B33", name: "ink" },
          ],
        },
      ],
    },
    systems: {
      title: "Rebuilding the app|to make the design possible",
      body: "Storyboard was the wrong architecture for a system of animations. Migrating to SwiftUI myself saved about $75,000 — a design decision disguised as an engineering one.",
    },
    gallery: {
      kicker: "On the App Store",
      title: "Every activity is|a colour you land inside",
      note: "The shipped listing, still live after eight years. Task lists in pink, self care in orchid, breathing in sky blue, and the night activity in indigo.",
      images: [
        { src: "/case-studies/tappily/shots/01.jpg", alt: "Daily, weekly and monthly task lists, on hot pink" },
        { src: "/case-studies/tappily/shots/02.jpg", alt: "Accomplish tasks and stay organized, on orchid" },
        { src: "/case-studies/tappily/shots/03.jpg", alt: "Overcome negative thoughts, on sky blue" },
        { src: "/case-studies/tappily/shots/04.jpg", alt: "Interactive, game-like activities: spin the wheel, on indigo" },
        { src: "/case-studies/tappily/shots/05.jpg", alt: "The maze animation: beautiful animations for a positive experience" },
        { src: "/case-studies/tappily/shots/06.jpg", alt: "A safe space for your thoughts, on sunshine yellow" },
        { src: "/case-studies/tappily/shots/07.jpg", alt: "Daily activities for positive mental health" },
      ],
    },
    marketingShots: {
      kicker: "Behind it",
      title: "Learning the craft,|then rebuilding for it",
      note: "The animation work came first and the purpose followed. Migrating off Storyboard is what made the animation system possible.",
      images: [
        { src: "/blog/iwd/tappily-maze.jpg", alt: "A Tappily activity: a yellow maze with numbered checkpoints leading to a lightbulb" },
        { src: "/blog/iwd/designing-animations.jpg", alt: "Designing the animations in Photoshop" },
        { src: "/blog/iwd/swiftui-migration-2.jpg", alt: "The original Tappily Storyboard, dozens of connected screens" },
        { src: "/blog/iwd/swiftui-migration-1.jpg", alt: "Tappily's TodayView rewritten in SwiftUI" },
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
        body: "200 testers and nobody between me and the code. That loop is the advantage of designing and building the same product.",
      },
      {
        title: "Migrate rather than fight the architecture",
        body: "Storyboard to SwiftUI was a design decision disguised as an engineering one.",
      },
    ],
    marketing: {
      body: "Zero funding, so the constraint was time. A bot that found the audience and drafted each DM took an eight-hour day down to ninety minutes.",
      channels: [
        { name: "Outreach automation", detail: "8 hours a day down to 1.5" },
        { name: "Instagram", detail: "@tappilyapp, 2,900 followers" },
        { name: "TestFlight community", detail: "200+ testers, the first word of mouth" },
        { name: "Speaking", detail: "Apple's International Women's Day event, 2024" },
      ],
    },
    outcome: {
      body: "Accepted into Apple Entrepreneur Camp in 2023 for its simple design and creative full-screen animations, and still running. More than that, it is where I became a designer.",
      wins: [
        "Apple Entrepreneur Camp, cohort 18",
        "200+ beta testers",
        "Shipped iOS and Android, still running",
        "Storyboard to SwiftUI, ~$75K saved",
        "533% marketing efficiency gain",
        "The origin of my research method",
      ],
    },
  },
];
