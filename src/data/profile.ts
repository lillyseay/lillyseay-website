// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Lilly Seay",
  pronouns: "She/Her",
  location: "Portland, Oregon",
  email: "team@lillyseay.co",
  headline:
    "iOS engineer, designer, and founder. Apple Design Award Finalist, FOSDEM speaker, and Apple Entrepreneur Camp alum. I also help startups market their apps on social media.",
  about: [
    "I grew up in Oklahoma taking things apart to see how they worked. I studied electrical engineering, then followed the work west to Portland, where the trails are long and the ideas are big.",
    "For ten years I've built native apps and the hardware they talk to. Then I built the one I needed. I'm hard of hearing, and Hearing Buddy became a 2026 Apple Design Award Finalist.",
    "Now I help startups design, build, and market their apps. Off the clock you'll find me on a paddleboard or a trail with my two black labs, Jet and Nova.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/lillyseay",
  },
};

export const stats = [
  { value: "2026", label: "Apple Design Award Finalist" },
  { value: "113K+", label: "followers across my accounts" },
  { value: "10+", label: "years building native apps" },
  { value: "3", label: "products founded and still running" },
];

export const highlights = [
  {
    year: "2026",
    text: "Apple Design Award Finalist for Inclusivity with Hearing Buddy",
  },
  {
    year: "2026",
    text: "Pitched Hearing Buddy in the Observatory at Apple Park",
  },
  { year: "2025", text: "Spoke at FOSDEM in Brussels on Swift for IoT" },
  { year: "2024", text: "Spoke at Apple's International Women's Day event" },
  { year: "2023", text: "Apple Entrepreneur Camp with Tappily" },
];

export const apps = [
  {
    name: "Hearing Buddy",
    role: "Co-founder, designer, and iOS engineer",
    url: "https://hearingbuddyapp.com",
    icon: "/apps/hearing-buddy.jpg",
    platforms: "iOS",
    tagline: "Live captions that help Deaf and hard of hearing people hear.",
    body: "iOS app that helps Deaf/HoH people hear with on-device live captions. It's an Apple Design Award Finalist in Inclusivity and has been featured on the App Store 8 times this year.",
    badges: ["Apple Design Award Finalist", "Featured 8 times", "Apps We Love"],
    year: "2026",
  },
  {
    name: "Hiking Passport",
    role: "Designer and iOS engineer",
    url: "",
    icon: "",
    platforms: "iOS",
    tagline: "See your hiking goals as a picture, not a chart.",
    body: "iOS app that helps people complete their hiking goals, displaying progress and goals in a beautiful image versus using charts.",
    badges: ["New in 2026"],
    year: "2026",
  },
  {
    name: "Tappily",
    role: "Founder and developer",
    url: "https://tappilyapp.com",
    icon: "/apps/tappily.jpg",
    platforms: "iOS and Android",
    tagline: "Fun activities for your mental health.",
    body: "iOS/Android app that has fun mental health activities. The app was accepted into Apple Entrepreneur Camp in 2023 for its simplistic design and creative fullscreen animations.",
    badges: ["Apple Entrepreneur Camp 2023"],
    year: "2019",
  },
  {
    name: "JavaSwift Academy",
    role: "Founder and instructor",
    url: "https://javaswiftacademy.com",
    icon: "",
    platforms: "Courses",
    tagline: "Build your first app in seven days.",
    body: "Created 7 day app development courses and resume templates for app developers.",
    badges: [],
    year: "2019",
  },
];

export const moreApps = [
  {
    name: "Erupt",
    years: "2017",
    body: "iOS/Android social media app with user profiles, social feed, and ability to upload photos/videos and edit them in app.",
  },
  {
    name: "Guess a Number",
    years: "2021",
    body: "A two-player Bluetooth game for iOS and iPad that works fully offline.",
  },
];

export const talks = [
  {
    title: "Hearing Buddy pitch",
    event: "WWDC26 Apple Design Award Finalist showcase",
    where: "The Observatory, Apple Park",
    when: "June 2026",
    body: "Demoed and pitched Hearing Buddy to Apple and fellow finalists as part of the Apple Design Awards week.",
    image: "/blog/wwdc26/showing-hearing-buddy.jpg",
    post: "apple-design-award-finalist-wwdc26",
    links: [],
  },
  {
    title: "Why Swift is the Next Big Thing for IoT",
    event: "FOSDEM 2025, Swift devroom",
    where: "Brussels, Belgium",
    when: "February 2025",
    body: "A talk on bringing Swift to embedded devices, Bluetooth, and wearables, drawing on my background bridging hardware and software.",
    image: "/blog/swift-iot/desk-demo.jpg",
    post: "why-swift-is-the-next-big-thing-for-iot",
    links: [
      {
        label: "Talk page",
        url: "https://archive.fosdem.org/2025/schedule/event/fosdem-2025-6148-why-swift-is-the-next-big-thing-for-iot/",
      },
      {
        label: "Watch the recording",
        url: "https://video.fosdem.org/2025/k4401/fosdem-2025-6148-why-swift-is-the-next-big-thing-for-iot.mp4",
      },
    ],
  },
  {
    title: "A Force Together: Women in App Development",
    event: "Apple's International Women's Day event",
    where: "Big Sur theater, Apple Developer Center, Cupertino",
    when: "March 2024",
    body: "Spoke alongside founders Aurelia Edwards and Bria Sullivan about technology, entrepreneurship, and community in app development.",
    image: "/blog/iwd/lilly.jpg",
    post: "a-force-together",
    links: [],
  },
];

export const social = {
  intro:
    "I help startups market their apps on social media. I've grown my own accounts to more than 113,000 followers across TikTok, Instagram, and YouTube, and I use the same playbook for clients: carousels, short-form video, influencer campaigns, and a creative pipeline for UGC and ads.",
  services: [
    {
      title: "Short-form video",
      body: "TikTok and Reels that explain an app in seconds. Hooks, scripts, on-camera talent, and editing, tuned to what the platform rewards.",
    },
    {
      title: "Carousels",
      body: "Swipeable posts that walk through features, launches, and stories. Designed to match your brand and built to be saved and shared.",
    },
    {
      title: "Influencer campaigns",
      body: "Finding the right creators for your niche, briefing them, and running the campaign from outreach to results.",
    },
    {
      title: "UGC and ad creative pipeline",
      body: "A repeatable system for producing user-generated content and paid ad creative so you always have fresh variations to test.",
    },
  ],
  accounts: [
    {
      name: "Lilly Seay",
      avatar: "/social/lillyseay.jpg",
      handle: "@lillyseay",
      total: 37172,
      body: "My personal account. Building in public as a founder, engineer, and dog mom in the Pacific Northwest.",
      platforms: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/lillyseay/",
          stat: "24.9K followers",
        },
        {
          name: "TikTok",
          url: "https://www.tiktok.com/@lillyseay",
          stat: "12.3K followers",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@lillyseay",
          stat: "37 subscribers",
        },
      ],
    },
    {
      name: "Jet & Nova",
      avatar: "/social/blacklabtv.jpg",
      handle: "@blacklabtv",
      total: 74353,
      body: "The black lab adventure duo. A pet and outdoors channel I grew from zero with short-form video.",
      platforms: [
        {
          name: "TikTok",
          url: "https://www.tiktok.com/@blacklabtv",
          stat: "74.1K followers, 2.3M likes",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@blacklabtv",
          stat: "221 subscribers",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/blacklabtv/",
          stat: "31 followers",
        },
      ],
    },
    {
      name: "Hearing Buddy",
      avatar: "/apps/hearing-buddy.jpg",
      handle: "@hearingbuddy",
      total: 2304,
      body: "Accessibility content and launch marketing for the app, including the campaigns behind its App Store features.",
      platforms: [
        {
          name: "TikTok",
          url: "https://www.tiktok.com/@hearingbuddy",
          stat: "1.6K followers",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/hearingbuddy/",
          stat: "520 followers",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@hearingbuddy",
          stat: "100 subscribers",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/hearingbuddyapp",
          stat: "81 followers",
        },
      ],
    },
    {
      name: "Tappily",
      avatar: "/apps/tappily.jpg",
      handle: "@tappilyapp",
      total: 2900,
      body: "Mental health content and carousels for the app.",
      platforms: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/tappilyapp/",
          stat: "2.9K followers",
        },
      ],
    },
    {
      name: "JavaSwift Academy",
      handle: "@javaswift",
      total: 1500,
      body: "Beginner app development tips and course launches.",
      platforms: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/javaswift/",
          stat: "1.5K followers",
        },
      ],
    },
  ],
};

export const community = [
  "WWDC attendee in 2024, 2025, and 2026, the last as an Apple Design Award Finalist",
  "RevenueCat Shipaton 2025: Hearing Buddy placed 2nd for the Peace Prize",
  "Apple Entrepreneur Camp alum",
  "Society of Women Engineers member",
  "IEEE student chapter president at the University of Central Oklahoma",
];

export const experience = [
  {
    role: "Founder, designer, and iOS engineer",
    org: "Hearing Buddy",
    start: "2026",
    end: "Now",
    body: "I design the app and brand, build in SwiftUI, and run marketing. Left a full-time engineering job to do this.",
  },
  {
    role: "Engineering manager",
    org: "Hyster-Yale Group",
    start: "2023",
    end: "2025",
    body: "Hired five to ten entry-level engineers a year and led them through a six-month technical training program I designed and ran. Mentored the team on projects and helped each person find the software team that fit them.",
  },
  {
    role: "Founder and CEO",
    org: "Dalton Technologies",
    start: "2017",
    end: "2023",
    body: "Shipped my own native apps and contracted with startups and software firms on native iOS and Android work, focused on Bluetooth, IoT, and machine learning.",
  },
  {
    role: "Electrical engineer",
    org: "Honeywell FM&T",
    start: "2016",
    end: "2017",
    body: "FPGA design and development, hardware design, Windows application development, and maintaining complex IoT systems in Kansas City.",
  },
  {
    role: "Senior design project",
    org: "Federal Aviation Administration",
    start: "2015",
    end: "2016",
    body: "Worked alongside FAA engineers to build a high-speed RS-232/RS-422 to TCP/IP converter. Our prototype cost a quarter of the technologies available at the time.",
  },
  {
    role: "Research assistant, PCB technician, STEM mentor",
    org: "University of Central Oklahoma",
    start: "2012",
    end: "2016",
    body: "Built a data acquisition system on Arduino, designed and milled printed circuit boards for other engineering students, tutored, and served as president of the IEEE student chapter.",
  },
];

export const education = {
  school: "University of Central Oklahoma",
  degree: "B.S. Electrical Engineering",
  years: "2012 to 2016",
  notes: "GPA 3.67. IEEE chapter president. Society of Women Engineers.",
};

export const services = [
  "Swift and SwiftUI",
  "iOS development",
  "Android development",
  "App and brand design",
  "Bluetooth and IoT",
  "Wearables and smart devices",
  "Embedded systems and FPGA",
  "On-device machine learning",
  "Engineering management",
  "Product strategy",
  "Social media marketing",
  "Short-form video",
  "Influencer campaigns",
  "UGC and ad creative",
];

// Placeholder work. Swap `image` for a real path under public/ when ready.
export const featuredWork = [
  {
    title: "Hearing Buddy",
    kind: "iOS app · design and engineering",
    image: "",
  },
  { title: "Tappily", kind: "iOS and Android app · founder", image: "" },
  { title: "JavaSwift Academy", kind: "Courses · founder", image: "" },
  { title: "Jet & Nova", kind: "Short-form video · 74K on TikTok", image: "" },
  {
    title: "Social campaigns",
    kind: "Carousels, UGC, and influencer work",
    image: "",
  },
];

// App Store features: in-app events, editorial features, and Today tab placements.
// `image` is the feature graphic or event card; `screenshot` is a capture of the
// feature on the App Store; `link` is the App Store story or product page if it exists.
export const appStoreFeatures = [
  {
    app: "Hearing Buddy",
    title: "Apps We Love",
    kind: "Editorial feature",
    date: "August 2026",
    link: "https://apps.apple.com/us/story/id6790991028",
    image: "/appstore/apps-we-love.jpg",
    screenshot: "",
  },
  {
    app: "Hearing Buddy",
    title: "Caption sharing launch",
    kind: "Featured on the App Store",
    date: "August 2026",
    link: "",
    image: "/appstore/caption-sharing-launch.jpg",
    screenshot: "",
  },
  {
    app: "Hearing Buddy",
    title: "Apple Design Awards week",
    kind: "Featured on the App Store",
    date: "July 2026",
    link: "",
    image: "",
    screenshot: "",
  },
  {
    app: "Tappily",
    title: "Apple Entrepreneur Camp alumni",
    kind: "Developer feature",
    date: "2023",
    link: "https://developer.apple.com/entrepreneur-camp/",
    image: "",
    screenshot: "",
  },
];

// Hearing Buddy App Store campaigns: a written summary of each featuring pitch and the in-app
// events that shipped with it. Event copy is from App Store Connect (2026-09-08). Newest first.
export const campaigns = [
  {
    "slug": "ios-27",
    "name": "iOS 27 launch",
    "month": "September 2026",
    "type": "App enhancements",
    "result": "Featured on the App Store",
    "summary": "Smarter summaries on Private Cloud Compute, hands-free Siri, and an interface rebuilt for iOS 27, pitched for launch day.",
    "pitch": [
      "iOS 27 was the moment to show what a Hearing Buddy can do beyond captions. Enhanced summaries built on Private Cloud Compute turn a conversation into decisions, action items, and sectioned notes, and they drag straight into Notes and Reminders.",
      "Siri and App Intents make it hands-free: start a listening session by voice and search past conversations without touching the screen. The whole interface was rebuilt for iOS 27 adaptivity and drag and drop, which shines on iPad in landscape during long meetings and lectures. The pitch came from a two-person team that had worked with the Evaluations Framework and the new Siri, and it earned a feature for the iOS 27 launch."
    ],
    "events": [
      {
        "name": "iOS27: Smarter summaries",
        "badge": "Major update",
        "when": "Sep 14 to Oct 15, 2026",
        "short": "Your Buddy takes detailed notes and action items.",
        "long": "Buddy summarizes your meeting or lecture with key points and action items you can add to your Reminders.",
        "image": "/appstore/events/ios27.jpg",
        "note": "Designed for the iOS 27 launch"
      }
    ]
  },
  {
    "slug": "deaf-awareness-month",
    "name": "Deaf Awareness Month",
    "month": "September 2026",
    "type": "New content",
    "result": "Featured on the App Store",
    "summary": "Launched Celeste, the first Deaf buddy, timed to Deaf Awareness Month and the International Day of Sign Languages.",
    "pitch": [
      "September is Deaf Awareness Month and includes the International Week of Deaf People and the International Day of Sign Languages. The campaign tied Hearing Buddy's newest character launch to those dates so the app had a clear reason to be featured that month.",
      "Celeste is the app's first Deaf buddy, shaped by feedback from Deaf users. Features like sharing captions from the speaker's mic and haptic name and question alerts came from that community. The nomination framed the launch as a community-built update, backed by a demo video and a month-long in-app event."
    ],
    "events": [
      {
        "name": "Happy Deaf Awareness Month!",
        "badge": "Major update",
        "when": "September 2026",
        "short": "Meet Celeste - our new Deaf Hearing Buddy.",
        "long": "Celebrating this month with a new Deaf buddy, improved captions, and smarter summaries.",
        "image": "/appstore/events/deaf-awareness-month.jpg"
      }
    ]
  },
  {
    "slug": "back-to-school",
    "name": "Back to School",
    "month": "August 2026",
    "type": "App enhancements",
    "result": "Featured on the App Store",
    "summary": "Two new buddies and a caption sharing feature for classrooms, pitched as accessibility for students who can't hear the lesson.",
    "pitch": [
      "Back to school is when accessibility barriers hit hardest, so the campaign led with the classroom. A teacher captions from their own mic and shares to the whole class, with live translation for multilingual students.",
      "Two in-app events split the story. Learning for All spotlighted caption sharing, and Back to School Buddies introduced Chalkie and Paige. The pitch drew on my own experience of falling behind in school because I couldn't hear, and it earned a feature on the App Store."
    ],
    "events": [
      {
        "name": "Learning for All",
        "badge": "Major update",
        "when": "August 2026",
        "short": "Teachers share captions the whole class can read.",
        "long": "Teachers share their captions for everyone to read along. Accessible and private, so no one misses the lesson.",
        "image": "/appstore/events/back-to-school.jpg"
      },
      {
        "name": "Back to School Buddies!",
        "badge": "Premiere",
        "when": "Aug 3 to 31, 2026",
        "short": "Start the school year with Chalkie and Paige.",
        "long": "Meet Chalkie and Paige, your new buddies for the school year. Two friends here to make every lesson accessible.",
        "image": "/appstore/events/back-to-school-new-buddies.jpg"
      }
    ]
  },
  {
    "slug": "disability-pride-month",
    "name": "Disability Pride Month",
    "month": "July 2026",
    "type": "App enhancements",
    "result": "",
    "summary": "New buddies Lumi and Luna plus VoiceOver and Dynamic Type support, pitched as an accessibility update for Disability Pride Month.",
    "pitch": [
      "Disability Pride Month is about being seen as you are, so the update expanded who Hearing Buddy works for. It added VoiceOver and Dynamic Type support for people with low vision or blindness, and Luna, a buddy built for hearing in low-light settings.",
      "The pitch positioned the brand itself as disability pride, an app that teaches allyship as much as it captions, and pointed to the Apple Design Award Finalist recognition as the bar the team wanted to keep raising."
    ],
    "events": [
      {
        "name": "Happy Disability Pride Month!",
        "badge": "Premiere",
        "when": "July 2026",
        "short": "New buddies and more accessibility features.",
        "long": "Celebrate Disability Pride Month with our new buddies, Lumi and Luna! Now with Dynamic Type and VoiceOver support.",
        "image": "/appstore/events/disability-pride-month.jpg"
      }
    ]
  },
  {
    "slug": "pride-month",
    "name": "Pride Month",
    "month": "June 2026",
    "type": "New content",
    "result": "Apple Design Award Finalist",
    "summary": "Pride buddies for the queer Deaf and hard-of-hearing community. Not featured, but a big part of the Apple Design Award Finalist story.",
    "pitch": [
      "The campaign connected Pride to the conversations people most want to catch every word of: coming out, sharing new pronouns, a family member finally saying the words out loud. New Pride buddies let users caption with color all June.",
      "Two events ran together, a Premiere for the new characters and a Caption with Pride challenge. The nomination spoke as a queer, hard-of-hearing founder and highlighted that live captions stay free and unlimited.",
      "This one didn't land a feature. It did put Hearing Buddy's inclusivity work in front of Apple weeks before the Apple Design Awards, and in June the app was named a 2026 Finalist in the Inclusivity category."
    ],
    "events": [
      {
        "name": "Happy Pride Month!",
        "badge": "Premiere",
        "when": "June 2026",
        "short": "Add color to your captions with our Pride buddies.",
        "long": "Find the rainbow in all your conversations with our new Pride Buddies. Caption with color this June.",
        "image": "/appstore/events/pride-month-2026.jpg"
      },
      {
        "name": "Caption with Pride",
        "badge": "Challenge",
        "when": "June 2026",
        "short": "Never miss a word of conversations that matter.",
        "long": "From coming out to sharing new pronouns, caption the Pride conversations you never want to miss a single word of.",
        "image": "/appstore/events/pride-month-2026-2.jpg"
      }
    ]
  },
  {
    "slug": "deaf-awareness-week-gaad-and-nslhm",
    "name": "Deaf Awareness Week, GAAD, and NSLHM",
    "month": "May 2026",
    "type": "App enhancements",
    "result": "Featured on the App Store",
    "summary": "Four new buddies, a Vision Pro app, and Apple Health hearing test support across NSLHM, Deaf Awareness Week, and GAAD.",
    "pitch": [
      "May stacks three moments for the hearing loss community: National Speech-Language-Hearing Month, Deaf Awareness Week, and Global Accessibility Awareness Day. The campaign gave each one its own in-app event so the app had fresh content on the App Store all month.",
      "Alongside four new buddy characters, the update launched a Vision Pro app and hearing test support integrated with Apple Health. The pitch leaned on Apple's on-device models as the reason captions can be free and unlimited for everyone."
    ],
    "events": [
      {
        "name": "Deaf Awareness Week",
        "badge": "Special event",
        "when": "May 4 to 10, 2026",
        "short": "New: ASL-Inspired Buddy for the Deaf Community",
        "long": "Celebrating the Deaf community with a new ASL-inspired buddy, Vision Pro live captions & hearing test support.",
        "image": "/appstore/events/deaf-awareness-week-2026.jpg"
      },
      {
        "name": "Celebrating GAAD",
        "badge": "Special event",
        "when": "May 21, 2026",
        "short": "Unlimited live captions so you never miss a word.",
        "long": "Celebrate accessibility with live captions from a Hearing Buddy. Never miss a word, question, or your name again.",
        "image": "/appstore/events/global-accessibility-awareness-day-2026.jpg"
      },
      {
        "name": "Your world, captioned.",
        "badge": "Challenge",
        "when": "May 2026",
        "short": "Join the May caption challenge to catch more words",
        "long": "It's National Speech-Language-Hearing Month. Caption your world with Hearing Buddy all May long to catch 3X more words.",
        "image": "/appstore/events/nslhm-2026.jpg"
      },
      {
        "name": "Spring Hearing Check",
        "badge": "Challenge",
        "when": "Apr 16 to May 16, 2026",
        "short": "Check-in on your hearing health with a quick test.",
        "long": "Not sure how well you hear? This spring, get your hearing baseline in minutes. Take the test & explore results in-app.",
        "image": "/appstore/events/spring-clean-your-hearing-health.jpg"
      }
    ]
  },
  {
    "slug": "world-hearing-day",
    "name": "World Hearing Day",
    "month": "March 2026",
    "type": "App enhancements",
    "result": "Best New Apps and Updates",
    "summary": "The first featuring pitch: free unlimited captions on device, timed to World Hearing Day. It landed Hearing Buddy in Best New Apps and Updates.",
    "pitch": [
      "World Hearing Day on March 3 was the hook for Hearing Buddy's first nomination. With 1.5 billion people living with hearing loss, the pitch argued this was the moment to put the right tool in front of them.",
      "It introduced the app's core: free unlimited live captions on Apple's on-device speech recognition, name and question alerts through Live Activities and Apple Watch haptics, and four buddy personalities users can name. The recent RevenueCat Shipaton prize gave it outside validation.",
      "The pitch and the World Hearing Day in-app event landed Hearing Buddy on the App Store's Best New Apps and Updates list, the first feature for the app."
    ],
    "events": [
      {
        "name": "World Hearing Day 2026",
        "badge": "Special event",
        "when": "March 2026",
        "short": "Celebrate World Hearing Day with live captions",
        "long": "Join millions raising awareness for hearing health. Try Hearing Buddy's real-time captions and never miss a word again.",
        "image": "/appstore/events/world-hearing-day.jpg"
      }
    ]
  }
];

// Social media case study: Hearing Buddy, Feb to Aug 2026. Numbers pulled from Metricool on
// 2026-09-08 (TikTok, Instagram, YouTube; LinkedIn excluded). Views are per post, grouped by
// publish month.
export const socialCase = {
  app: "Hearing Buddy",
  period: "February to August 2026",
  stats: [
    { value: 210, label: "videos", sub: "cross-posted to 3 platforms" },
    { value: 730072, label: "views", sub: "TikTok, Instagram, YouTube" },
    { value: 64025, label: "views, best video", sub: "a series video on TikTok" },
    { value: 3.4, label: "x more views", sub: "series videos vs one-offs", decimals: 1 },
  ],
  method: [
    {
      step: "Research",
      title: "Find the keywords in your niche",
      body: "I build a keyword sheet for your category: the questions people already type into Google, TikTok, and YouTube, scored by search volume and difficulty. For Hearing Buddy that was 100 video topics across 15 clusters.",
    },
    {
      step: "Test",
      title: "Turn every keyword into a video",
      body: "Each topic becomes a short-form video posted to TikTok, Instagram, and YouTube Shorts the same day. Around 30 a month. The numbers show which hooks land with your audience.",
    },
    {
      step: "Scale",
      title: "Find the high-converting series",
      body: "Winners get a title people recognize and a regular slot. For Hearing Buddy, series videos average 3.4 times the views of one-offs and make up 57% of all views from just 17 videos.",
    },
  ],
  months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  views: {
    tiktok: [36261, 44304, 57823, 69860, 76297, 78066, 102673],
    instagram: [19758, 12996, 3189, 5543, 14820, 13315, 49637],
    youtube: [196, 243, 11767, 23128, 21496, 15409, 73134],
  },
  series: [
    {
      name: "POV: when my ears actually work",
      hook: "The relief of hearing something correctly, for once.",
      videos: 4,
      posts: 12,
      views: 229636,
      best: 64025,
      bestOn: "TikTok",
      since: "July 2026",
      note: "31% of all views from four videos. It drove the August spike on every platform.",
    },
    {
      name: "Things I thought were normal but actually hearing loss",
      hook: "Realizing the workarounds were symptoms.",
      videos: 8,
      posts: 49,
      views: 103830,
      best: 30486,
      bestOn: "TikTok",
      since: "March 2026",
      note: "Grew out of the signs-of-hearing-loss keyword cluster. Eight versions between March and August.",
    },
    {
      name: "Things people with hearing loss are tired of explaining",
      hook: "The same five conversations, every week.",
      videos: 5,
      posts: 31,
      views: 85835,
      best: 22645,
      bestOn: "TikTok",
      since: "May 2026",
      note: "The most repeatable format: five versions posted across the summer, with the top one at 22,645 views on TikTok.",
    },
  ],
};

// Carousel case study: Hearing Buddy Dash on TikTok (photo carousels), Mar to Sep 2026.
// Pulled from Metricool on 2026-09-09.
export const carouselCase = {
  account: "@hearingbuddy.dash",
  period: "March to September 2026",
  stats: [
    { value: 190, label: "carousels", sub: "TikTok photo posts, no video" },
    { value: 150796, label: "views", sub: "in six months" },
    { value: 50102, label: "views, best carousel", sub: "a 50-item list" },
    { value: 95, label: "from For You", sub: "reach beyond followers", suffix: "%" },
  ],
  months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  views: [62039, 19504, 4745, 6440, 29439, 22003, 6626],
  posts: [9, 24, 6, 11, 63, 60, 17],
  formats: [
    { name: "Numbered lists", example: "50 ADHD-friendly plans that require zero willpower", n: 25, views: 60269, avg: 2411, best: 50102 },
    { name: "ADHD crossover", example: "50 little shifts that finally made mornings work", n: 16, views: 19871, avg: 1242, best: 8560 },
    { name: "Hearing loss at work", example: "My boss mumbles. I still catch it all.", n: 32, views: 21749, avg: 680, best: 5379 },
    { name: "Hearing aid pricing", example: "The $4,800 shocker: one hidden line ate half the bill", n: 23, views: 15012, avg: 653, best: 2265 },
    { name: "Everything else", example: "One-off topics used to test new angles", n: 94, views: 33895, avg: 361, best: 1963 },
  ],
  takeaway:
    "Numbered lists average almost seven times the views of a one-off topic, and the ADHD crossover found a second audience with the same hearing loss problem. Those two formats are now the backbone of the carousel accounts.",
};

export const recognition = [
  "Apple Design Award Finalist 2026",
  "Apple Entrepreneur Camp",
  "RevenueCat Shipaton 2025 Peace Prize",
  "FOSDEM speaker",
  "Apple International Women's Day speaker",
  "WWDC 2024, 2025, and 2026",
];

export const servicesLine = [
  "iOS and Android apps",
  "App and brand design",
  "Social media marketing",
  "Short-form video and carousels",
  "Influencer campaigns",
  "UGC and ad creative",
];

// The career adventure, told as a trail with three basecamps.
export const trail = {
  intro:
    "I grew up in Oklahoma, studied electrical engineering, and followed the work west to the Pacific Northwest. Every stretch of the trail taught me a different craft. I still use all three.",
  basecamps: [
    {
      name: "Electrical engineering",
      years: "2012 to 2017",
      place: "Oklahoma and Kansas City",
      elevation: "Where it started",
      story:
        "I learned how things actually work: circuits, signals, FPGAs, and the patience to debug hardware that won't tell you what's wrong. I milled printed circuit boards for other students, built a serial-to-TCP/IP converter with the FAA, and shipped FPGA and IoT work at Honeywell.",
      stops: [
        "B.S. Electrical Engineering, University of Central Oklahoma",
        "IEEE student chapter president",
        "Senior design project with the Federal Aviation Administration",
        "Electrical engineer, Honeywell FM&T",
      ],
      skills: ["FPGA", "Embedded systems", "PCB design", "IoT"],
    },
    {
      name: "Mobile app design and engineering",
      years: "2017 to now",
      place: "Portland, Oregon",
      elevation: "The long climb",
      story:
        "I started Dalton Technologies and built native iOS and Android apps for startups and for myself: Bluetooth, wearables, on-device machine learning. I led a training program for new engineers at Hyster-Yale. Then I built the app I needed as someone who is hard of hearing, and Hearing Buddy became a 2026 Apple Design Award Finalist.",
      stops: [
        "Founder, Dalton Technologies",
        "Tappily, JavaSwift Academy, Guess a Number, Erupt",
        "Engineering manager, Hyster-Yale Group",
        "Co-founder and designer, Hearing Buddy",
        "RevenueCat Shipaton 2025 Peace Prize, 2nd place",
        "Apple Design Award Finalist, Inclusivity, 2026",
      ],
      skills: [
        "Swift and SwiftUI",
        "Android",
        "App design",
        "Bluetooth",
        "On-device ML",
      ],
    },
    {
      name: "Marketing",
      years: "2023 to now",
      place: "Everywhere the trail goes",
      elevation: "The view from up here",
      story:
        "Building apps taught me that shipping is only half the trip. I grew my own accounts past 113,000 followers with short-form video and carousels, ran influencer campaigns and a creative pipeline for UGC and ads, and now I help other startups do the same for their apps.",
      stops: [
        "Apple Entrepreneur Camp with Tappily",
        "Jet & Nova to 74K on TikTok",
        "Hearing Buddy featured in Apps We Love",
        "Social media marketing for app startups",
      ],
      skills: [
        "Short-form video",
        "Carousels",
        "Influencer campaigns",
        "UGC and ad creative",
      ],
    },
  ],
};

// Journey table, most recent first: what I was doing, where, when, and the LinkedIn description.
export const journey = [
  {
    what: "Co-founder, Designer, and iOS Engineer",
    where: "Hearing Buddy",
    type: "Self-employed",
    when: "2026 to Now",
    details:
      "I'm the co-founder and designer of the Hearing Buddy app and brand. Hearing Buddy helps Deaf and hard of hearing people hear with on-device live captions. It's an Apple Design Award Finalist in Inclusivity and has been featured on the App Store 8 times this year.",
  },
  {
    what: "Founder and CEO",
    where: "Lilly Seay & Co",
    type: "Self-employed",
    when: "May 2019 to Now",
    details:
      "I help app startups design, build, and market their apps.",
    bullets: [
      "I design and build native iOS and Android apps for startups. My specialty is IoT apps that talk to hardware and apps with AI features.",
      "I help apps get featured on the App Store with in-app events, marketing screens, and creative pitches to Apple.",
      "I run social media marketing for apps: short-form video, influencer campaigns, UGC, and ad creative that converts.",
      "I have grown my own accounts past 113,000 followers and done more than 30 brand collaborations.",
    ],
  },
  {
    what: "Engineering Manager",
    where: "Hyster-Yale Group",
    type: "Full-time",
    when: "July 2023 to March 2025",
    details:
      "I hired and trained new engineers at Hyster-Yale.",
    bullets: [
      "I hired 20 engineers across several disciplines.",
      "I designed a six-month technical training program and led every new hire through it. It covered CAN, Embedded C, Simulink, hydraulics, and the electrical systems on a forklift.",
      "I built a simple, effective hiring process. Ten engineers and five managers met after each interview, scored the candidate together, and made the decision as a group.",
    ],
  },
  {
    what: "Founder and CEO",
    where: "Dalton Technologies",
    type: "Self-employed",
    when: "2017 to 2023",
    details:
      "I created multiple native apps of my own and worked as an independent contractor with startups and software development firms on native app projects. I specialized in native Android and iOS Bluetooth, IoT, and machine learning apps.",
  },
  {
    what: "Electrical Engineer",
    where: "Honeywell FM&T",
    type: "Full-time",
    when: "2016 to 2017",
    details:
      "As an electrical engineer at Honeywell FM&T, I focused on FPGA design, FPGA development, hardware design, Windows application development, and maintaining complex IoT systems.",
  },
  {
    what: "Senior Design Project",
    where: "Federal Aviation Administration",
    type: "Part-time",
    when: "2015 to 2016",
    details:
      "I did my senior design project with the Federal Aviation Administration in Oklahoma, working alongside full-time engineers and engineering management to create a high-speed RS-232/RS-422 to TCP/IP converter. My team successfully created a prototype that was one fourth the cost of the technologies available at the time.",
  },
  {
    what: "Student of Electrical Engineering",
    where: "University of Central Oklahoma",
    type: "Full-time Student",
    when: "2012 to 2016",
    details:
      "I earned my bachelor's in electrical engineering with a 3.67 GPA in May 2016. I was president of the IEEE club during my senior year, organizing a staff of officers, coordinating meetings, presenting budgets to the local chapter, and raising funding. As the printed circuit board machine technician, I created PCBs for other engineering students and maintained the machine, using NI Multisim, Ultiboard, and BoardMaster to simulate circuits. I was also a STEM peer mentor and engineering tutor, and a research assistant who designed a data acquisition system on an Arduino, converting analog sensor signals into usable data and milling my own circuit boards.",
  },
];

// Summits: career accomplishments drawn as peaks on the hero ridgeline, left to right,
// each higher than the last. x is the horizontal position (0 to 100), height the peak height (0 to 100).
export const summits = [
  { year: "2016", label: "B.S. Electrical Engineering", x: 14, height: 38 },
  { year: "2023", label: "Apple Entrepreneur Camp", x: 38, height: 54 },
  { year: "2025", label: "Shipaton Peace Prize, 2nd place", x: 62, height: 70 },
  { year: "2026", label: "Apple Design Award Finalist", x: 85, height: 92 },
];

// Services as statements: one bold sentence, one supporting line, tags, and a graphic key.
export const statements = [
  {
    key: "design",
    headline: "I design brands that stand out.",
    support:
      "Your logo, colors, and App Store screenshots become one system. The brand and the app feel like the same thing.",
    tags: ["Branding", "Logos", "App Store screenshots"],
  },
  {
    key: "apps",
    headline: "I create app experiences you won't find anywhere else.",
    support:
      "I specialize in minimalist, totally unique app experiences your users won't find anywhere else on the App Store. Every screen follows Apple's guidelines and still feels like yours.",
    tags: ["UI and UX", "Liquid Glass", "Accessibility"],
  },
  {
    key: "social",
    headline: "I get apps downloaded.",
    cta: { label: "Read a case study", href: "/case-studies/hearing-buddy-social/" },
    support:
      "Short-form video, carousels, and influencer campaigns turn views into downloads and trial starts.",
    tags: [
      "Short-form video",
      "Carousels",
      "Influencer and UGC campaigns",
      "Paid ad creative",
    ],
  },
  {
    key: "software",
    headline: "I build software end to end.",
    support:
      "Native iOS and Android, web, IoT and embedded systems, and AI and ML integrations. From the circuit board to the App Store.",
    tags: ["iOS and Android", "Web", "IoT and embedded", "AI and ML"],
  },
  {
    key: "teams",
    headline: "I grow teams that ship.",
    support:
      "Technical training programs for new engineers. A hiring process where the whole team scores every candidate together. Habits that keep a team shipping.",
    tags: ["Training programs", "Hiring process", "Team building"],
  },
];
