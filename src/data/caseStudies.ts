// Design case studies for the three apps. Everything here was checked against the
// app source, App Store Connect copy, and the live social accounts:
//   Hearing Buddy   ~/Developer/Hearing-Buddy (PersonalityTheme.swift, docs/, Files/)
//   Hiking Passport ~/Developer/Hiking-Passport (PassportTheme.swift, DesignSystem.swift,
//                   TrainingMode.swift, HikingBuddy.swift, AppStore/AppStoreMetadata.md)
//   Tappily         the 2024 International Women's Day talk, the app icon and screens
// Social numbers: Metricool (2026-09-08/09) for the platform totals; TikTok pulled
// directly on 2026-09-22 for the per-video views and the comment quotes.

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
  /** The opening paragraph under the title. */
  lede: string;
  problem: { title: string; body: string[]; stat?: { value: string; label: string } };
  myRole: { body: string; owned: string[] };
  research: {
    title: string;
    method: string[];
    /** Quotes pulled from the accounts, with where they came from. */
    quotes?: { text: string; meta: string }[];
    /** What each research signal turned into in the product. */
    findings?: { signal: string; evidence: string; shipped: string }[];
  };
  strategy: { title: string; body: string[] };
  palette: {
    intro: string;
    groups: { name: string; note: string; swatches: Swatch[] }[];
    type?: string;
  };
  systems: { title: string; body: string[]; diagram?: { from: string; to: string[] } };
  decisions: { title: string; body: string }[];
  marketing: { body: string[]; channels: { name: string; detail: string }[] };
  outcome: { body: string; wins: string[] };
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
    badges: [
      "2026 Apple Design Award Finalist, Inclusivity",
      "Featured on the App Store 7 times",
      "Apps We Love",
      "RevenueCat Shipaton Peace Prize",
    ],
    lede: "I am hard of hearing. I built the app I had been waiting for someone else to build, designed it as a person rather than a tool, and it became a 2026 Apple Design Award Finalist in Inclusivity.",
    problem: {
      title: "Hearing loss is isolating, and the tools were charging rent on it",
      body: [
        "I worked an in-office job for a year and a half and my stress levels were the highest they have ever been. It was not the work. It was the constant social interaction with people who expected me to hear like everyone else. It did not matter how many times I explained that I have a hearing disability and asked them to repeat things. People would not speak louder. They would not adjust. I found myself constantly apologizing for annoying people, for not meeting their expectations, and for existing in a space that was not built for me.",
        "Through all of that I wanted a speech-to-text app that actually worked across different environments, without uploading confidential work conversations to some random server. Most captioning apps charged by the minute or capped free users with strict time limits, which turns an accessibility need into a metered service. Then I went to WWDC25, saw Apple's new on-device speech models in iOS 26, and everything clicked.",
      ],
      stat: {
        value: "1.5 billion",
        label:
          "people live with some degree of hearing loss, on track for 2.5 billion by 2050 (WHO)",
      },
    },
    myRole: {
      body: "Two-person team. I am the co-founder and I own the design end to end: the product, the brand, the sixteen buddy characters, the App Store screenshots and the in-app event artwork. I build it in SwiftUI alongside my co-founder, and I run the marketing.",
      owned: [
        "Product and interaction design across five Apple platforms",
        "Brand, illustration, and the sixteen buddy characters",
        "App Store screenshots, in-app event art, and the featuring pitches",
        "SwiftUI engineering",
        "Social media, content strategy, and the research behind it",
      ],
    },
    research: {
      title: "I use social media as the research instrument",
      method: [
        "My research method is to test pain points in public. I build a keyword sheet for the category first: the questions people already type into Google, TikTok, and YouTube, scored by search volume and difficulty. For Hearing Buddy that was 100 video topics across 15 clusters, from \"hearing age test\" to \"OTC hearing aids\" to \"what sensorineural hearing loss sounds like.\"",
        "Every keyword becomes a short-form video posted to TikTok, Instagram, and YouTube Shorts the same day, around thirty a month. The view count tells me which pain point people relate to. The comments tell me why, in their own words, at a volume no interview schedule would get me. Between February and August 2026 that was 210 videos and 730,072 views, and it is where the product decisions come from.",
        "The comments are the qualitative layer. A single video about the signs of hearing loss drew 84 comments, and they are not applause. They are people describing the workarounds they built for a problem they had never named.",
      ],
      quotes: [
        {
          text: "All of this but I heard that hearing loss only comes with repetitive ringing in the ear(s) and I'm still young so wondering if I'm delusional",
          meta: "67 likes · 6 replies · \"Things I thought were normal but was actually hearing loss\" · 32K views",
        },
        {
          text: "Half the time I just smile and nod in big groups or in loud places cuz I have no idea wtf anyone said lol",
          meta: "41 likes · same video",
        },
        {
          text: "It's not volume but clarity that's needed often. I wish people would speak clearer",
          meta: "19 likes · \"Things people with hearing loss are tired of explaining\" · 22.7K views",
        },
        {
          text: "Sorry, am I finally connecting with my people?! Iv never felt so heard in my life!",
          meta: "41 likes · 5 replies · same video",
        },
        {
          text: "Needs to rest after social events. It's exhausting",
          meta: "on the signs video, alongside \"I'm trying to preserve brain power until I'm ready to function in the world\"",
        },
        {
          text: "So real. I'm not deaf I just have audio processing issues and I get so excited when I don't have to be like \"huh?\"",
          meta: "\"I get so proud of myself when I hear something correctly\" · 32.9K views",
        },
      ],
      findings: [
        {
          signal: "Clarity, not volume",
          evidence:
            "Said independently over and over: \"When people talk louder. No, I just need you to look at me or talk clearer.\" \"People really don't understand how I can hear their voice but not what they're saying.\"",
          shipped:
            "Captions are the free, unlimited core. Amplification exists, but it is the paid add-on, not the promise.",
        },
        {
          signal: "The fake nod",
          evidence:
            "\"I just pretend there was no question.\" \"You asked someone what four times and you still didn't hear them, so you hit them with an okay and hope that's the right answer.\" \"I play mad libs all day every day.\"",
          shipped:
            "Question Alerts and Name Alerts. You do not need every word of context, you need to know a question was asked and that it was aimed at you.",
        },
        {
          signal: "Listening fatigue",
          evidence:
            "\"Needs to rest after social events.\" \"I don't sleep for ages because I'm trying to go through everything and work it all out.\"",
          shipped:
            "Conversation summaries, designed for all-day conferences and marathon meetings so you can catch up at a glance instead of reading every word live.",
        },
        {
          signal: "A large undiagnosed audience",
          evidence:
            "\"Wondering if I'm delusional.\" \"I thought not knowing where the sound is located was normal! Wow.\" \"I have my test done this week.\"",
          shipped:
            "Hearing test support integrated with Apple Health, and a Spring Hearing Check in-app event aimed at people who have not been tested.",
        },
        {
          signal: "Adjacent audiences",
          evidence:
            "Auditory processing disorder, tinnitus, single-sided deafness, late-deafened adults, and the partners of hard of hearing people all showed up in the comments unprompted.",
          shipped:
            "A partner and ally content line, and carousels that cross hearing loss with ADHD, which found a second audience with the same underlying problem.",
        },
        {
          signal: "Feedback on the content itself",
          evidence:
            "Three separate people: \"a lot of people with different types of hearing loss to you will find the music distracting on your video.\"",
          shipped:
            "The videos changed. If the research instrument is not accessible, the research is filtered to people who can already hear it.",
        },
        {
          signal: "Platform and awareness gaps",
          evidence:
            "\"Shame that this is only on the iPhone. Is there any plans to also come out on Android?\" \"What is hearing buddy?\" \"Your link is not working.\"",
          shipped:
            "A fixed funnel, clearer in-video positioning, and a logged demand signal for Android.",
        },
      ],
    },
    strategy: {
      title: "Design the app as the person, not the technology",
      body: [
        "A hearing buddy is what I have always called the person in my life who helps me hear. Usually my partner or a close friend, who takes the stress off me by handling the talking in everyday situations, and who repeats the question I missed without making me feel like a burden. A hearing buddy is a safe person. The premise of the app is to be your backup hearing buddy, for when your person cannot be there.",
        "That decided everything downstream. The app is a character with a name you choose, not a transcription window. The copy never says \"AI\" — features are framed around what your Buddy does, so it is \"Buddy summarizes your meeting,\" never \"AI-powered notes.\" Every personality shares the same core: the warmth, patience and zero judgment of the best hearing buddy you have ever had.",
        "Apple Entrepreneur Camp taught me the philosophy I keep coming back to: accessibility and delight. An app made for people with disabilities can, and should, be something people genuinely enjoy using.",
      ],
    },
    palette: {
      intro:
        "There is no single brand palette. There are sixteen, one per buddy, and choosing a buddy re-themes the entire app. Each is a three-colour gradient plus a hand-tuned character coat, and every one has to keep caption text legible over it, because the captions are the product.",
      groups: [
        {
          name: "The four originals",
          note: "Free, and the ones the whole system was proved on.",
          swatches: [
            { hex: "#5BC0DE", name: "Dash · cyan" },
            { hex: "#7DD3A8", name: "Dash · mint" },
            { hex: "#E16A78", name: "Coral · salmon" },
            { hex: "#F4B458", name: "Coral · golden" },
            { hex: "#7EC8B0", name: "Atlas · seafoam" },
            { hex: "#1B4332", name: "Atlas · forest" },
            { hex: "#F5DEB3", name: "Pearl · wheat" },
            { hex: "#D4A0C0", name: "Pearl · lavender rose" },
          ],
        },
        {
          name: "The identity buddies",
          note: "Launched to the awareness month they belong to, and shaped by the communities they are for.",
          swatches: [
            { hex: "#C4A0D8", name: "Prism · Pride" },
            { hex: "#A0D0E8", name: "Prism · Pride" },
            { hex: "#E87AA0", name: "Rowen · trans pink" },
            { hex: "#5AB8E0", name: "Rowen · trans blue" },
            { hex: "#F6D86B", name: "Lumi · Disability Pride" },
            { hex: "#4C3F73", name: "Luna · low light" },
            { hex: "#9CBDB4", name: "Celeste · Deaf buddy" },
            { hex: "#8FA3CE", name: "Celeste · dusk star" },
          ],
        },
        {
          name: "Seasonal",
          note: "Date-gated in code so they stay hidden until their launch day.",
          swatches: [
            { hex: "#C3BDDC", name: "Paige · periwinkle" },
            { hex: "#7B6BA6", name: "Paige · violet" },
            { hex: "#F6CE55", name: "Chalkie · chalk gold" },
            { hex: "#E97B5C", name: "Chalkie · coral" },
            { hex: "#C99054", name: "Goldie · sunset gold" },
            { hex: "#6A6390", name: "Goldie · dusk violet" },
            { hex: "#B8A9D9", name: "Ziggy · lavender" },
            { hex: "#FF7EB3", name: "Ziggy · pink" },
          ],
        },
      ],
      type: "SF Pro throughout, with iOS 26 Liquid Glass materials, continuous-corner shapes, semantic colours and full Dynamic Type. Captions are the one surface that never takes a decorative treatment.",
    },
    systems: {
      title: "One struct themes five platforms and the marketing calendar",
      body: [
        "Every buddy is a single value in code: a gradient, a character coat, an accent pair, and the words that buddy says. That one value paints the Listen tab, the Home Screen widgets, the Lock Screen Live Activity, the Dynamic Island, the Apple Watch face, and the Mac and Vision Pro companions, which mirror the iPhone rather than keeping their own state. Add a buddy and sixteen surfaces theme themselves.",
        "The same value carries a launch date. Pickers are never allowed to read the full roster directly; they read the date-filtered list, so a Pride buddy or a back-to-school buddy simply does not exist in the interface until its day. That one rule is why the design system and the App Store campaign calendar are the same object. A new character is a design deliverable, an in-app event, a featuring pitch, and a month of social content at once.",
        "The rest of the system is the in-session surface: one floating container, a pinned header, and swipeable pages for Buddy, Boost and Share Captions. Controls surface themselves when their feature is active and slide away when it goes idle, so an engaged feature is always reachable even if you never pinned it. The Buddy page is permanent by rule — no toggle is allowed to remove it — because the thing you came for should never be something you can accidentally hide.",
      ],
      diagram: {
        from: "One buddy value",
        to: [
          "Listen tab gradient",
          "Home Screen widgets",
          "Live Activity",
          "Dynamic Island",
          "Apple Watch",
          "Mac companion",
          "Vision Pro",
          "In-app event art",
          "App Store screenshots",
        ],
      },
    },
    decisions: [
      {
        title: "Unlimited live captions stay free, forever",
        body: "Competitors meter by the minute. Apple's on-device models made it possible to give the core away, so the paid tier is amplification, summaries, and the companions — the extras, never the access.",
      },
      {
        title: "Never say \"AI\"",
        body: "Not in the interface, not in the App Store copy, not in a commit message. Features are framed around the Buddy: \"Buddy summarizes your meeting,\" never \"AI-powered notes.\" The user named this character. Attributing its work to a model breaks the one relationship the product is built on.",
      },
      {
        title: "Alerts go to the wrist as haptics only",
        body: "No Watch notifications, because notification and haptic systems fight each other and the result is noise. One clean haptic language instead: up for your name, down for a question.",
      },
      {
        title: "Accessibility ships on all four surfaces or it does not ship",
        body: "VoiceOver is never iOS-only. Labels and hints are mirrored into Mac, Vision and Watch. Each finalized caption segment is one VoiceOver element, and the live in-progress line is hidden from VoiceOver entirely, because a line that rewrites itself mid-sentence is unreadable by screen reader.",
      },
      {
        title: "Let the community name what is missing",
        body: "Celeste, the first Deaf buddy, came out of feedback from Deaf users, and so did sharing captions from the speaker's microphone and haptic name alerts. The buddy roster is the most visible part of the design, which makes it the honest place to show who the app is actually for.",
      },
    ],
    marketing: {
      body: [
        "I treat the App Store like an editorial calendar. Every month of 2026 had a reason for Apple to feature the app: World Hearing Day in March, National Speech-Language-Hearing Month, Deaf Awareness Week and Global Accessibility Awareness Day stacked through May, Pride in June, Disability Pride in July, back to school in August, Deaf Awareness Month and the iOS 27 launch in September. Each one shipped real work — new buddies, caption sharing, a Vision Pro app, hearing test support — with in-app events and artwork I designed, and a written pitch behind it.",
        "That earned seven App Store features in a year, starting with Best New Apps and Updates for the first pitch. The Pride campaign did not get featured, and it still mattered: it put the inclusivity work in front of Apple weeks before the Apple Design Awards, and in June the app was named a Finalist in Inclusivity.",
        "On social, the same method that does the research does the marketing. Winning topics get a recognizable title and a regular slot. Series videos average 3.4 times the views of one-offs and account for 57% of all views from just 17 of the 210 videos.",
      ],
      channels: [
        {
          name: "App Store campaigns",
          detail:
            "Eight campaigns in 2026, each tied to a real awareness date, with in-app events, artwork, and a featuring pitch. Seven features.",
        },
        {
          name: "Short-form video",
          detail:
            "210 videos in seven months across TikTok, Instagram and YouTube Shorts. 730,072 views. Best video 64,025.",
        },
        {
          name: "Carousels",
          detail:
            "190 TikTok photo carousels on a separate in-character account, 150,796 views in six months, 95% of reach from the For You page.",
        },
        {
          name: "Owned audience",
          detail:
            "Built the app's accounts from zero alongside my own 113,000-follower audience, which gives every launch a first-day floor.",
        },
      ],
    },
    outcome: {
      body: "Hearing Buddy is a 2026 Apple Design Award Finalist in Inclusivity. I pitched it in the Observatory at Apple Park during Apple Design Awards week. It ships on five Apple platforms, has been featured on the App Store seven times this year, and it won RevenueCat's Shipaton Peace Prize against thousands of indie apps.",
      wins: [
        "2026 Apple Design Award Finalist, Inclusivity",
        "Featured on the App Store 7 times in 12 months",
        "Apps We Love, and Best New Apps and Updates",
        "RevenueCat Shipaton Peace Prize",
        "Shipped on iPhone, iPad, Watch, Mac and Vision Pro",
        "16 buddy characters, all designed in house",
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
    badges: ["New in 2026", "Solo design and build"],
    lede: "A training app for people the outdoors keeps telling to stay home. Your season becomes a hand-drawn passport: each goal hike is a mountain, milestones are signs along the trail, and summiting stamps the peak.",
    problem: {
      title: "Training plans assume a body and a life you might not have",
      body: [
        "Every hiking training plan I found assumed the same person: no injuries, a car, a trailhead nearby, a flexible schedule, a gym membership, and a body that does what it is told. If you are not that person the plan does not adapt, it just makes you feel like the goal was never yours.",
        "The second problem is that progress toward a mountain gets shown as a chart. A bar going up is not why anyone hikes. People chase summits for the picture at the top, and the training should look like the thing you are training for.",
      ],
      stat: {
        value: "55",
        label:
          "things the plan can work around, across family, transport, body, sleep, mind, accessibility, and money",
      },
    },
    myRole: {
      body: "Solo. I designed and built the whole thing: the illustration system, the passport canvas, the training model, the six buddy characters, the watch app, the widgets, the App Store listing and the marketing site.",
      owned: [
        "Product, interaction and illustration design",
        "The training plan model and its constraints taxonomy",
        "SwiftUI on iPhone, Apple Watch and four widgets",
        "Six buddy characters and five park themes",
        "App Store metadata, screenshots and the marketing site",
      ],
    },
    research: {
      title: "Designing from constraints rather than from an average user",
      method: [
        "This one did not start from a keyword sheet. It started from the observation that the people most often told the trail is not for them are the ones no training app asks about, so the research went into building a taxonomy of what actually gets in the way, then designing the plan around it.",
        "Setup asks how you can train, how many days, how long a session is, and then it asks what to work around and offers fifty-five things to tap across seven categories: family, transportation, body and health, sleep and energy, mind, accessibility, and money, time and access. Not a mood check — knees, lungs, a mobility aid, a wheelchair, low vision, being hard of hearing, shift work, no car, no safe place to walk, a tight month, being in recovery.",
        "The rule I designed to is that none of it is a barrier to the goal. Tapping something changes what the plan suggests, never whether the mountain is yours to climb. Every milestone ships with five versions: one that matches it exactly, one sized to your usual session, one modified for what you tapped, a low-energy version and a short-on-time version. The plan also tells you which of your own answers each modification is for, so it never feels like the app quietly decided you were fragile.",
        "The six hiking buddies are the same research made visible. Each is a forest animal from a community that gets told the trail is not for them: Aerie is disabled, Berry is plus-size, Acorn trains between naps as a parent, Juniper is queer and non-binary, Otis is neurodivergent, Biscuit is just funny and on your side. They are friends who hike, not trainers or doctors, they never claim expertise, and they never scold.",
      ],
    },
    strategy: {
      title: "Make progress something you can see from across the room",
      body: [
        "The passport is the whole strategy. A goal hike is drawn as a mountain on a hand-drawn canvas. Six milestone signs stand along the trail below it and unlock as your season adds up, finishing with two dress rehearsals at about eighty percent of the goal. When you summit, a stamp lands on the peak with the date, your rating and your photo, the camp moves up the meadow behind you, and the boot prints on the trail reach a little further.",
        "Nothing in that sentence is a number. You can read your entire season from four feet away, which is the test I designed to. The stats exist, but they live on their own tab and they are written in your buddy's voice rather than as a dashboard.",
        "The plan is deliberately unglamorous underneath: a ladder of milestones between the week you already have and the hike you want, built from your real Apple Health history — your longest outing, your biggest climb, how many days a week you actually move. Each sign says how to do it in plain words: on a trail, on a treadmill, on a stair machine, or in the small things you already do every day.",
      ],
    },
    palette: {
      intro:
        "Each theme is five colours lifted from its own icon — sky, sun, far ridge, near ridge, ground — plus a hand-picked accent. Everything else in the app is derived from those: the sky gradient, the meadow, the stamp ink, the stamp paper, every accent and chip. The accents are chosen to sit beside the trail signs, which are warm brown on tan, so the whole set stays in an earthy Pacific Northwest register. Bright enough to feel alive, never a neon that fights the wood.",
      groups: [
        {
          name: "Alpine",
          note: "The free default. Pale sky, warm sun, two ridges, a green meadow.",
          swatches: [
            { hex: "#D6E8F2", name: "sky" },
            { hex: "#F8DFA0", name: "sun" },
            { hex: "#9FB4D8", name: "ridge, far" },
            { hex: "#6E86B4", name: "ridge, near" },
            { hex: "#A9CFA6", name: "ground" },
            { hex: "#5E9A63", name: "accent" },
          ],
        },
        {
          name: "Rainier",
          note: "Alpenglow: lavender overhead, pink through the middle, coral on the ridgeline, and the last of the sun still on the summit while the valley has gone into shadow.",
          swatches: [
            { hex: "#9A97D6", name: "sky, top" },
            { hex: "#F0A3BE", name: "sky, mid" },
            { hex: "#FFB48E", name: "horizon" },
            { hex: "#C2705E", name: "ridge, near" },
            { hex: "#8DB078", name: "meadow" },
            { hex: "#FF5A2E", name: "alpenglow" },
          ],
        },
        {
          name: "Redwood",
          note: "Bark and rust, a tan forest floor, sage rather than bright greens, and a canopy sky washed almost white by the light coming through it.",
          swatches: [
            { hex: "#9FBACB", name: "sky, top" },
            { hex: "#E6E4E2", name: "horizon" },
            { hex: "#A0522B", name: "bark" },
            { hex: "#4A3123", name: "deep bark" },
            { hex: "#87A365", name: "ground" },
            { hex: "#5C7A55", name: "accent" },
          ],
        },
        {
          name: "Voyageurs and White Sands",
          note: "A dark-sky park with a live aurora drawn rather than painted, and high desert noon: saturated blue overhead, bleached at the horizon.",
          swatches: [
            { hex: "#9A93DE", name: "violet" },
            { hex: "#9FD4A4", name: "aurora green" },
            { hex: "#5A5788", name: "accent" },
            { hex: "#66A8E6", name: "desert sky" },
            { hex: "#F2EEE2", name: "sand" },
            { hex: "#2B6CA8", name: "accent" },
          ],
        },
      ],
      type: "National Park is the display face — hike names, plan names, stamps, signs and section titles. SF Pro is the workhorse for everything else.",
    },
    systems: {
      title: "Five colours in, a whole app out",
      body: [
        "A theme is not a skin. It is five colours and an accent, and the rest of the app computes itself from them. The sky gradient takes its stops from the sky colour, the meadow takes the ground's hue, the stamp ink is the near ridge deepened in a loop until it is dark enough to read as ink, and the stamp paper is the sun's warmth on near-white card. Choosing a theme repaints the passport, the widgets and the watch together.",
        "The decision I am proudest of is one I reversed. The accent used to follow your hiking buddy, which meant two people on the same theme saw different greens, and the colour was saying something about a character instead of about the app. Now every accent comes from the passport's theme and the animals keep their own natural coats. It made the app quieter and more coherent in a single change.",
        "The watch keeps its own copy of the passport rather than proxying the phone, so it opens with your season whether or not the phone is nearby, and you can cross off a milestone or stamp a summit from your wrist on a ridge with no signal.",
      ],
      diagram: {
        from: "Five colours from one icon",
        to: [
          "Sky gradient",
          "Meadow bands",
          "Stamp ink",
          "Stamp paper",
          "Accent and chips",
          "Four widgets",
          "Apple Watch",
        ],
      },
    },
    decisions: [
      {
        title: "No account, no cloud",
        body: "Your passport, your hikes, your journal and your photos live on your iPhone and work with no signal at all. There is nothing to sign up for, which is also the honest answer to why a hiking app should never need a login on a trail.",
      },
      {
        title: "Apple Health is read only",
        body: "The app reads five things — steps, distance, flights climbed, active energy, workouts — and writes nothing back. Decline any of them and the plan still works, logged by hand. The permission screen says what each one is for before it asks.",
      },
      {
        title: "The signs thin out instead of colliding",
        body: "As Dynamic Type grows, milestone signs drop out of the scene rather than overlapping into mush. The scene degrades to fewer, readable signs instead of a full set no one can read.",
      },
      {
        title: "The opening animation skips itself",
        body: "The two-and-a-half-second scene build is the first thing you see, and it is the first thing to go when Reduce Motion is on. The whole canvas is also described for VoiceOver, so the passport is readable without seeing it at all.",
      },
      {
        title: "The display face answers Bold Text by hand",
        body: "SF Pro responds to the Bold Text accessibility setting on its own; a custom face does not. Every heading, stamp and sign used to stay exactly as drawn while the body copy around it thickened. Now the typeface picks a heavier weight when that setting is on.",
      },
      {
        title: "Buddies cheer, they do not coach",
        body: "Nothing a buddy says claims expertise, and the app states plainly that its suggestions are not medical advice. Their identities live in their stories and their voices, never as a label applied to the hiker.",
      },
    ],
    marketing: {
      body: [
        "This one is pre-launch, so the marketing work so far is the listing itself and the site behind it. I wrote the App Store metadata as a design problem: the keyword field deliberately leaves out \"passport\" and \"goal hikes\" because the name and subtitle are already indexed, and spends the 100 characters on terms the listing does not already own.",
        "The screenshots are built from the app's own palette. Ten background colours pulled straight out of the themes, every one clearing 10.7:1 against the app's dark text, with each background matched to the theme on the screen inside it so the shot reads as one object rather than a phone on a rectangle. Headline colours are the theme accents.",
        "The promotional text is the seasonal slot: 170 characters that can change for a new season without shipping a build.",
      ],
      channels: [
        {
          name: "App Store listing",
          detail:
            "Name, subtitle, keywords, description and a six-screen story order, all written to a character budget.",
        },
        {
          name: "Screenshot system",
          detail:
            "Ten palette-derived backgrounds at 10.7:1 contrast, matched per screen to the theme shown.",
        },
        {
          name: "Marketing site",
          detail:
            "hikingpassportapp.com, built to carry the listing, the privacy policy and support before the app has a store page.",
        },
        {
          name: "Crossover audience",
          detail:
            "My outdoors audience already exists — the Jet & Nova account is 74K on TikTok, and hiking content performs on my personal account.",
        },
      ],
    },
    outcome: {
      body: "Version 1.0 is submitted and in App Store review. Everything described here is built and in the binary: the passport canvas, the plan, the fifty-five constraints, six buddies, five themes, four widgets and the watch app. The one rejection so far was a metadata fix — a missing Terms of Use link on the product page — resolved without a new build.",
      wins: [
        "Designed and built solo, iPhone and Apple Watch",
        "55-item constraints model with five ways up every milestone",
        "Five park themes, each derived from five colours",
        "VoiceOver description of the entire illustrated scene",
        "Free tier keeps the passport, the scene and summit stamps",
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
    badges: ["Apple Entrepreneur Camp 2023", "200+ beta testers"],
    lede: "The app that taught me design. I learned animation as a craft, then found a purpose for it: game-like mental health activities built out of full-screen colour, made while I was dealing with my own anxiety.",
    problem: {
      title: "Mental health apps asked you to be calm before you could use them",
      body: [
        "The mental health apps I could find were either clinical — forms, streaks, mood charts — or they were quiet, beige and meditative. Both assume you arrive with enough focus to sit still. When I was anxious, what I actually wanted was something to do with my hands and my eyes that was not a form.",
        "At the time Tappily was both my creative brainchild and my outlet for stress, and that is not a side note about the design. Designing it was the thing that helped, and building an app that gives other people that same fifteen minutes is the whole product.",
      ],
    },
    myRole: {
      body: "Founder and sole designer and developer, on both platforms. I came to it from the other direction to most designers: I was a software engineer first, taught myself iOS, and then taught myself design because I wanted to push the experience further than I could reach with engineering alone.",
      owned: [
        "All design: brand, illustration, and the full-screen animations",
        "iOS and Android engineering",
        "Beta programme and feedback loop",
        "Marketing, including the automation behind it",
      ],
    },
    research: {
      title: "Two hundred beta testers and a feedback loop with no middle",
      method: [
        "Before Tappily I had built Erupt, a location-based social app, and learned the hard way how difficult it is to market a social network with no funding against Snapchat and Instagram. Towards the end of that I started learning animation, and that is where Tappily came from. What is powerful about being a technical founder is that you can have an idea and start building, or you can start building and have an idea.",
        "The research was the beta. I got over 200 people onto TestFlight and used it to validate the app while I was still building it. My favourite part of that experience was translating the vision at every level of the business: customer feedback went into design and development and came back out as App Store updates, with none of the communication bottleneck of a large team.",
        "Apple Entrepreneur Camp was the other research instrument. Cohort 18, dedicated to female founders. I met Apple's design and technology evangelists, got detailed and actionable feedback on Tappily's value proposition, and implemented it the same week.",
        "On social, this is where my current method started. The Tappily Instagram grew to 2,900 followers on mental health content and carousels, and testing which posts landed was how I learned that the audience tells you which pain point is real long before a survey would.",
      ],
      quotes: [
        {
          text: "Pivoting doesn't have to make a big splash in your business. It's more like skipping a rock across a pond, making ripples of progress as each attempt is more calculated than the last.",
          meta: "from my talk at Apple's International Women's Day event, Cupertino, 2024",
        },
      ],
    },
    strategy: {
      title: "Full-screen animation as the entire interface",
      body: [
        "I wanted an app that revolved around full-screen animations, and then I rolled that into an idea which had purpose: using colourful animation to make game-like mental health activities. The activity is not a form with an illustration next to it. The activity is the animation, and the whole screen is it.",
        "That is why it works when you are anxious. There is no reading, no configuration, no streak to have broken. You open it, something bright moves, and you follow it. A maze with numbered checkpoints leading to a lightbulb does more for a spinning head than a text field asking how you feel today, and it was the App Store's own read on the app too: Tappily was accepted into Apple Entrepreneur Camp for its simple design and its creative full-screen animations.",
      ],
    },
    palette: {
      intro:
        "A deliberately high-key, warm palette: sunshine yellow as the ground, with coral, rose and peach as the moving parts. It is the opposite of the beige-and-sage register the category defaulted to, and it holds up full screen, which was the requirement — these colours are not accents, they are the interface.",
      groups: [
        {
          name: "Core",
          note: "The brand yellow and the coral family it carries.",
          swatches: [
            { hex: "#FFDC5E", name: "sunshine" },
            { hex: "#F497AC", name: "coral rose" },
            { hex: "#F6A79B", name: "salmon" },
            { hex: "#F8B38D", name: "peach" },
            { hex: "#FBC479", name: "apricot" },
            { hex: "#F5A1A1", name: "blush" },
          ],
        },
        {
          name: "Activity surfaces",
          note: "The same family dropped to a pale wash so the moving elements read on white.",
          swatches: [
            { hex: "#FCE9A2", name: "pale gold" },
            { hex: "#FDEEB5", name: "lit gold" },
            { hex: "#FEBDB4", name: "marker coral" },
            { hex: "#FEF7DC", name: "cream" },
            { hex: "#FFFFFF", name: "paper" },
          ],
        },
      ],
    },
    systems: {
      title: "Rebuilding the app to make the design possible",
      body: [
        "Tappily started in Storyboard: dozens of connected screens on an Xcode canvas, which is exactly the architecture you want when the design is a flow of forms and exactly the wrong one when the design is a system of animations. I migrated the whole app to SwiftUI, and I estimated that doing that myself saved the company around $75,000 on the redesign and development.",
        "That is the systems lesson I still carry. The reason I insist on owning design and engineering together is that the interesting design decisions are usually blocked by an architecture decision that a designer is not allowed to touch. The founding team put around $350,000 of work into the MVP; across seven years the technical-founder approach saved about $2,000,000 in design, development, automation and marketing.",
        "It also taught me how to survive the market. When the pandemic destabilised everything, I took software contracts with other startups so I could pay myself to keep working on Tappily. I got paid to sharpen the exact skills the app needed, and I learned millions of dollars worth of other people's technical mistakes without paying for them myself.",
      ],
    },
    decisions: [
      {
        title: "The animation is the feature, not the decoration",
        body: "Every activity is designed full screen first. If it needs a caption to make sense, it is not finished.",
      },
      {
        title: "Warm and loud, against the category",
        body: "Mental health design had settled on muted calm. Tappily went bright, on the theory that a person in a spiral does not need to be soothed into stillness, they need somewhere to put their attention.",
      },
      {
        title: "Ship feedback the same week",
        body: "With 200 testers and no team between me and the code, a suggestion could be in a build in days. That loop is the single biggest advantage of designing and building the same product.",
      },
      {
        title: "Migrate the architecture rather than fight it",
        body: "Storyboard to SwiftUI was a design decision disguised as an engineering one, and it unlocked the animation work the app is known for.",
      },
    ],
    marketing: {
      body: [
        "With zero funding the constraint was time, not ideas, so the first thing I automated was getting users. I built a bot that found people in the target audience and drafted a custom DM for each one. It took a marketing process that ran eight hours a day down to an hour and a half, a 533% improvement in time efficiency, and tuning it also increased downloads.",
        "Everything else was Instagram: mental health content and carousels to 2,900 followers, which is where I first learned the pattern I now sell as a service. Test a lot of small things, watch what people relate to, and give the winners a repeatable format.",
      ],
      channels: [
        {
          name: "Outreach automation",
          detail:
            "A bot that recommended people in the target audience and composed a custom DM. 8 hours a day to 1.5.",
        },
        {
          name: "Instagram",
          detail:
            "@tappilyapp, 2,900 followers on mental health content and carousels.",
        },
        {
          name: "TestFlight community",
          detail:
            "200+ beta testers who became the app's first word-of-mouth channel.",
        },
        {
          name: "Speaking",
          detail:
            "Tappily's story is the talk I gave at Apple's International Women's Day event in Cupertino in 2024.",
        },
      ],
    },
    outcome: {
      body: "Tappily got into Apple Entrepreneur Camp in 2023 — cohort 18, for female founders — on the strength of its simple design and its creative full-screen animations, and it is still running. More than that, it is where I became a designer. The animation work, the beta feedback loop and the social testing that started on Tappily are exactly what I do on Hearing Buddy today.",
      wins: [
        "Apple Entrepreneur Camp 2023, cohort 18",
        "200+ TestFlight beta testers",
        "Shipped on iOS and Android, still running",
        "Storyboard to SwiftUI migration, ~$75k saved",
        "533% efficiency gain from marketing automation",
        "The origin of the research method I use on every app since",
      ],
    },
  },
];
