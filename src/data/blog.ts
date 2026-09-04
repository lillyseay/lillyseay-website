// Blog posts. Each post page lives in src/pages/blog/<slug>.astro.
export const posts = [
  {
    slug: "top-10-linkedin-posts",
    title:
      "My 10 most popular LinkedIn posts, and what they say about how I work",
    description:
      "A deep dive on the posts that reached the most people: Apple Design Awards, WWDC, App Store features, embedded Swift, and the decision to go all in on my own app.",
    date: "September 4, 2026",
    readTime: "9 min read",
    cover: "/blog/top-linkedin-posts/02-ada-finalist.jpg",
  },
];

// The ten posts, ranked by impressions where LinkedIn still shows them, with reactions as the
// tie-breaker for older posts. Stats were captured on September 4, 2026.
export const topPosts = [
  {
    rank: 1,
    title: "WWDC25 recap",
    when: "June 2025",
    stats: ["9,726 impressions", "217 reactions", "5 comments"],
    image: "/blog/top-linkedin-posts/01-wwdc25.jpg",
    alt: "Lilly at Apple Park during WWDC25, holding her badge, with photos of the keynote lawn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7338032356705914880/",
    quote:
      "WWDC25 was such a good time today! The weather, food, camaraderie, and sessions were top notch. Here are my fave things that were announced: an on-device AI model, more customizations for CarPlay, hold assist when waiting on a call, recording both sides of a FaceTime in high quality, and background tasks.",
    skills: ["Apple platforms", "Community", "Technical writing"],
    body: [
      "This is my most-seen post ever, and it is a simple one: a photo dump from Apple Park and a short list of the announcements I cared about. The lesson I took from it is that people want a filter. Thousands of features get announced at WWDC. A developer who has shipped apps for a decade telling you the five that matter is more useful than the full keynote.",
      "Every item on that list turned into work for me within the year. The on-device AI model became the foundation of Hearing Buddy's redesign. Background tasks made caption sharing possible. Reading Apple's roadmap and picking the parts that change what you can build is a skill, and it is most of what I do for clients now.",
    ],
  },
  {
    rank: 2,
    title: "Hearing Buddy is an Apple Design Award finalist",
    when: "June 2026",
    stats: ["7,675 impressions", "30 comments"],
    image: "/blog/top-linkedin-posts/02-ada-finalist.jpg",
    alt: "Apple Design Awards 2026 finalist graphic for Hearing Buddy with three cartoon dolphin buddies",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7462194542281142272/",
    quote:
      "This is a dream I've had for the last decade of designing apps. What's most special to me is that Hearing Buddy is a finalist in Inclusivity. As a disabled female founder, inclusivity and accessibility are the backbone of everything I do. The Hearing Buddy brand is a colorful expression of my disability pride and commitment to making hearing solutions accessible to all.",
    skills: ["App design", "Accessibility", "Branding"],
    body: [
      "Thirty comments is the most conversation any of my posts has started, and I think it is because the post is honest about what the award means. I have been hard of hearing my whole life. Hearing Buddy started as the app I needed in conference rooms where I could not follow the speaker. Being recognized in the Inclusivity category, specifically, is the version of this award I would have picked.",
      "Underneath the celebration is a design story. The finalist build was my best work with Apple's Liquid Glass design language, and the brand around it, the dolphin buddies, the pastel palette, the pride variants, is deliberate. A brand that people recognize on the App Store is a growth engine, not decoration. That is the thesis behind every brand I design now.",
    ],
  },
  {
    rank: 3,
    title: "WWDC24 footage",
    when: "June 2024",
    stats: ["286 reactions", "Highest reaction count of any post"],
    image: "/blog/top-linkedin-posts/03-wwdc24.jpg",
    alt: "Group photo in front of the Apple keynote stage at WWDC24, with the rainbow arch at Apple Park",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7206296242623057921/",
    quote:
      "First WWDC experience in the books, and I don't want it to end. I got to sit about six rows back from Tim Cook on the stage. Spent the day hanging with Apple Entrepreneur Camp alumni and talking to the Swift Student Challenge winners. Their app ideas blew my mind.",
    skills: ["Community", "Apple ecosystem"],
    body: [
      "My first WWDC, and still the post with the most reactions I have ever had. LinkedIn stopped showing impressions for posts this old, but 286 reactions on a personal account tells the story. The photo of the whole Entrepreneur Camp alumni group in front of the keynote stage is the one people responded to.",
      "This was the year I stopped thinking of Apple as a platform and started thinking of it as a community. Entrepreneur Camp had introduced me to founders I still work with, and WWDC turned that into a yearly ritual. I have been back every June since, and in 2026 I went as a finalist.",
    ],
  },
  {
    rank: 4,
    title: "What I learned at the Society of Women Engineers conference",
    when: "November 2024",
    stats: ["3,344 impressions", "54 reactions", "6 comments"],
    image: "/blog/top-linkedin-posts/04-swe-recap.jpg",
    alt: "Lilly in front of the Together We Rise wall at the SWE conference in Chicago",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7257586465579163648/",
    quote:
      "As a hiring manager, it's crucial to be aware of implicit biases and the discrimination marginalized communities face when trying to land an engineering job. As someone that hires engineers on a yearly basis, it's important to get educated and continue to improve my hiring methodologies to hire and retain diverse talent.",
    skills: ["Hiring", "Engineering management", "Mentoring"],
    body: [
      "At the time I was an engineering manager hiring five to ten new engineers a year and running the six-month training program they went through. I went to Chicago with a specific goal: get better at hiring. I spent the conference in the diversity and inclusion sessions built for managers, not the technical tracks.",
      "The post did well because it is practical. It names the bias problem, says what I was doing about it, and points at a concrete next step, funding professional development events through SWE. This is the work behind the hiring and team building service I offer today. Good hiring is a process you design, the same as an app.",
    ],
  },
  {
    rank: 5,
    title: "Swift Connection 2025 in Paris",
    when: "Fall 2025",
    stats: ["2,737 impressions", "73 reactions"],
    image: "/blog/top-linkedin-posts/05-swift-connection.jpg",
    alt: "Lilly with friends on stage at Swift Connection 2025 in Paris",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7381698045845053441/",
    quote:
      "A solid message was delivered at this conference: AI can generate code for us, but it cannot replace the connections we make in person. It can't replace the encouragement and support received from the community.",
    skills: ["iOS community", "Public speaking"],
    body: [
      "I flew to Paris for an iOS conference and spent most of the post celebrating other people: friends who were presenting for the first time, talks on habit-forming app design, the technical side of Liquid Glass, and what people get wrong about accessibility. That last one is close to home.",
      "The takeaway I wrote about is one I keep coming back to. Code is getting cheaper to produce. Trust, taste, and the people who will tell you the truth about your app are not. Showing up at conferences on two continents in one year is how I keep those relationships, and it is why I speak at them when I am asked.",
    ],
  },
  {
    rank: 6,
    title: "Rebranding Hearing Buddy",
    when: "February 2026",
    stats: ["2,667 impressions", "68 reactions", "14 comments"],
    image: "/blog/top-linkedin-posts/06-rebrand.jpg",
    alt: "Lilly pointing at the new Hearing Buddy website on her monitor, next to the redesigned homepage",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419832274952736769/",
    quote:
      "Even though I'm an engineer, branding and app design are my bread and butter. What's really fun is finding ways to use Apple's new Liquid Glass design aesthetic across all platforms, not just iOS. MVP website branding is done, now onto the App Store screenshots.",
    skills: ["Branding", "Web design", "App Store screenshots"],
    body: [
      "Fourteen comments on a design post from an engineer. That is the tension this post lives on, and it is the tension in my whole career. I studied electrical engineering, I write Swift every day, and I also design brands. People find that combination unusual enough to ask about.",
      "The rebrand covered everything at once: the website, the app, the App Store screenshots, and the pride and holiday variants of the mascots that came later. The rule I follow is that the brand and the app should feel like one object. When someone lands on the App Store page, the screenshots should look like the website, and the website should look like the app. That consistency is what got Hearing Buddy noticed by Apple's editorial team a few months later.",
    ],
  },
  {
    rank: 7,
    title: "Featured on the App Store for Deaf Awareness Week",
    when: "May 2026",
    stats: ["2,675 impressions", "18 comments"],
    image: "/blog/top-linkedin-posts/07-app-store-feature.jpg",
    alt: "Lilly holding her phone showing the Hearing Buddy App Store feature, next to the in-app event card",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7457102406200475649/",
    quote:
      "It was so much fun to design an ASL-themed hearing buddy that's inclusive to the Deaf community. This was also my first time designing promotional graphics for the App Store. It was just me and Photoshop for a few days, but I'm happy how the in-app event graphics turned out.",
    skills: ["App Store marketing", "In-app events", "Graphic design"],
    body: [
      "This was my first App Store feature and my first in-app event graphic. I designed the event card myself over a few days, tied it to Deaf Awareness Week, and Apple's editorial team picked it up. Hearing Buddy has been featured three more times since, and every one started with an in-app event.",
      "This is the part of App Store marketing most developers skip. In-app events are free placement on the App Store if the graphic is good and the timing makes sense. I now treat them as a calendar: awareness weeks, holidays, launches. It is the most repeatable way I have found to get an app in front of new people without paying for ads.",
    ],
  },
  {
    rank: 8,
    title: "Arriving at the SWE conference",
    when: "November 2024",
    stats: ["2,663 impressions", "61 reactions"],
    image: "/blog/top-linkedin-posts/08-swe-arrival.jpg",
    alt: "Video still of Lilly showing off Society of Women Engineers merch in a hotel room",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7255696689804541954/",
    quote:
      "As someone that has always dedicated time to mentor women engineers, this conference inspires me to keep investing in the next generation. One way to do that is buying merch from your local SWE chapter, as it helps them fund events and provide resources to local women engineers.",
    skills: ["Short-form video", "Mentoring"],
    body: [
      "A vertical video shot in a hotel room after an overnight flight. No editing to speak of. It reached almost as many people as the thoughtful recap I wrote three days later, which is a good reminder that short-form video earns attention on every platform, including LinkedIn.",
      "The content is the same theme as my engineering management work: investing in the next generation of women engineers. I was a Society of Women Engineers member in college and an IEEE chapter president. Showing up for those communities is not a side project. It is how I ended up hiring well later.",
    ],
  },
  {
    rank: 9,
    title: "Embedded Swift and Matter: a motion-activated light in Apple Home",
    when: "February 2026",
    stats: ["2,590 impressions", "59 reactions", "10 comments"],
    image: "/blog/top-linkedin-posts/09-swift-matter.jpg",
    alt: "An ESP32 board with a motion sensor on a breadboard next to an iPhone showing the Apple Home app",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7421625440638812160/",
    quote:
      "I built a motion-activated LED using an ESP32-C6 that syncs with Apple Home in real time. Embedded Swift is so cool. I was able to seamlessly create a wrapper around my C and C++ calls and write all the logic in Swift. It's why I've always loved IoT, every layer of software and hardware is required to make products.",
    skills: ["Embedded Swift", "IoT", "Matter", "Hardware"],
    body: [
      "This is the post that connects my electrical engineering degree to my iOS work. An ESP32 microcontroller, a motion sensor on a breadboard, the Matter protocol, and Embedded Swift wrapping the C calls. Walk past the sensor and the light shows up in Apple Home. Ten comments, mostly from engineers who did not know Swift could run on a microcontroller.",
      "I gave a talk at FOSDEM on this exact idea, why Swift is the next big thing for IoT. My first job was FPGA and hardware work at Honeywell, and I have never stopped building at that layer. When a client needs an app that talks to a device, this is the background that lets me design the whole system instead of just the screen.",
    ],
  },
  {
    rank: 10,
    title: "I quit my job to work on Hearing Buddy",
    when: "August 2026",
    stats: ["1,961 impressions", "43 reactions"],
    image: "/blog/top-linkedin-posts/10-quit-my-job.jpg",
    alt: "Video still of Lilly in her car with the caption I quit for my dream app",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7480336573444575232/",
    quote:
      "I quit my full-time engineering job to work on Hearing Buddy. Here's how it's going.",
    skills: ["Founder", "Short-form video"],
    body: [
      "One sentence and a video. This post says the least and might matter the most. I left a full-time engineering manager role to work on my own app, and I told people about it in the format I use every day for marketing, a vertical video with a hook in the first line.",
      "It is on this list because it closes the loop. Every other post here is a step toward it: the degree, the conferences, the rebrand, the features, the award. If you are wondering whether I understand what it takes to ship and market an app as a small team, the answer is that I bet my job on it.",
    ],
  },
];
