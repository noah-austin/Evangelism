// OPENERS & TRANSITIONS
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.openersNew = [
  {
    id: "starting",
    title: "Starting a Conversation",
    sources: ["Living Waters", "Cliff Knechtle"],
    summary: `Simple ways to begin. Pick one or two and use them until they feel natural.`,
    parts: [
      {
        heading: "Direct questions",
        say: [
          "What do you think happens after someone dies?",
          "Do you have any spiritual beliefs?",
          "Do you think you're a good person?",
        ],
      },
      {
        heading: "With a tract",
        say: ["Did you get one of these?"],
        body: `More in {{Tract openers|openers/tract-openers}}.`,
      },
      {
        heading: "From everyday talk",
        body: `See {{Transitions|openers/transitions}} for moving from small talk to spiritual things.`,
      },
      {
        heading: "Then",
        branches: [{ if: "They're open to talking", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Remember",
        body: `Most people are more open than you expect. The hardest part is the first sentence.`,
        verses: ["Romans 1:16", "Romans 10:14"],
      },
    ],
  },

  {
    id: "transitions",
    title: "Transitions",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    summary: `How to move from small talk to spiritual things, the way Jesus did with the woman at the well: He started with water, then talked about living water.`,
    parts: [
      {
        heading: "The John 4 model",
        body: `Jesus started with something ordinary ([[John 4:7]]) and turned it toward the spiritual ([[John 4:10]]). Look for a natural bridge in whatever you're already talking about.`,
        verses: ["John 4:7", "John 4:10"],
      },
      {
        heading: "Afterlife",
        say: ["Do you think there's an afterlife?"],
        body: `A natural follow-up: "Where do you think you'll go?" Then "Why?" That leads straight to {{Are you a good person?|paths/way-of-the-master/2}}.`,
      },
      {
        heading: "What gets you to heaven",
        say: ["What do you think it takes to go to heaven?"],
        body: `Most people say "being good." That opens the door to the Law.`,
        branches: [{ if: "They say being good", go: "objections/good-person" }],
      },
      {
        heading: "Bridges from everyday topics",
        body: `- **News, death, tragedy:** "Do you ever think about what happens when we die?"
- **Work or stress:** "What gets you through hard times?"
- **Someone thanks you:** "Can I ask you a question? Do you think much about spiritual things?"
- **Church comes up:** "What's your background with church?"
- **Holidays:** "What does Christmas (or Easter) mean to you?"`,
      },
      {
        heading: "Ask permission",
        say: ["Can I ask you a personal question?"],
        body: `Most people say yes, and it keeps things respectful.`,
      },
    ],
  },

  {
    id: "tract-openers",
    title: "Tract Openers",
    sources: ["Living Waters"],
    summary: `Short lines to go with handing out a tract. The tract does half the work.`,
    parts: [
      {
        heading: "Simple",
        say: [
          "Did you get one of these?",
          "Here's something for you to read.",
          "Here's a gospel tract. Have you had one before?",
        ],
      },
      {
        heading: "With a question",
        say: [
          "There's a quick quiz on the back. Want to see if you'd pass?",
          "Do you think you're a good person? This has a little test on it.",
        ],
        body: `Living Waters makes tracts with attention-getters (fake million-dollar bills, coin-sized tracts, quizzes). Pick ones that clearly present the Law and the gospel.`,
      },
      {
        heading: "If they take it and keep walking",
        say: ["Have a great day. Read the back when you get a chance."],
        body: `That's a win. Seeds still grow ([[Ecclesiastes 11:1]]).`,
        verses: ["Ecclesiastes 11:1"],
      },
      {
        heading: "If they stop",
        ask: "What do you think happens after someone dies?",
        branches: [{ if: "They're open", go: "paths/way-of-the-master" }],
      },
    ],
  },

  {
    id: "praying-with-someone",
    title: "Praying With Someone",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `Prayer is good. But a repeated prayer isn't what saves someone. Repentance and faith are.`,
    parts: [
      {
        heading: "The caution",
        body: `Way of the Master warns against leading people through a quick "sinner's prayer" and then telling them they're saved. Many people have prayed a prayer without real repentance and now feel falsely secure.

Assurance comes from a changed life and trust in Christ, not from having said certain words ([[Matthew 7:21]], [[2 Corinthians 5:17]]).`,
        verses: ["Matthew 7:21", "2 Corinthians 5:17", "2 Corinthians 7:10"],
      },
      {
        heading: "What to do instead",
        ask: "Is there anything stopping you from repenting and trusting Jesus today?",
        body: `- Encourage them to pray to God themselves, in their own words, confessing their sin and trusting Christ
- They can do it right now, or as soon as they're alone
- If they ask you to pray with them, that's fine; just don't put words in their mouth or pronounce them saved`,
        verses: ["Psalm 51:4", "Romans 10:13"],
      },
      {
        heading: "Praying for someone",
        say: ["Can I pray for you before I go?"],
        body: `Most people, even unbelievers, are glad to be prayed for. Keep it short and personal.`,
      },
    ],
  },

  {
    id: "follow-up",
    title: "Follow-Up",
    sources: ["Living Waters"],
    summary: `What to give and say after someone shows real interest or turns to Christ.`,
    parts: [
      {
        heading: "Get them reading",
        say: ["Do you have a Bible? Start with the Gospel of John."],
        body: `- Read a little every day
- Obey what you read
- Offer to get them a Bible if they don't have one`,
        verses: ["1 Peter 2:2", "Romans 10:17"],
      },
      {
        heading: "Get them connected",
        body: `- Point them to a Bible-believing church
- If possible, offer to go with them the first time`,
        verses: ["Hebrews 10:24-25"],
      },
      {
        heading: "Stay in touch",
        say: ["Can I get your number and check in with you this week?"],
        body: `Then actually follow up. Send a verse or ask how their reading is going.`,
      },
      {
        heading: "Assurance",
        body: `Point them to God's promises, not to a feeling or a prayer.`,
        verses: ["1 John 5:13", "John 5:24"],
      },
    ],
  },

  {
    id: "wrapping-up",
    title: "Wrapping Up",
    sources: ["Living Waters"],
    summary: `How to end well, whether they're interested or not.`,
    parts: [
      {
        heading: "If they're not interested",
        say: ["Thanks for talking with me. Can I leave you with this?"],
        body: `Leave a tract or one question to think about ({{stone in their shoe|skills/stone-in-shoe}}). Stay friendly; you may not be the last Christian they meet.`,
      },
      {
        heading: "If they're under conviction",
        ask: "Is there anything stopping you from repenting and trusting Jesus today?",
        body: `Encourage them to pray and get right with God, now or as soon as they're alone. Don't pressure a prayer. See {{Praying with someone|openers/praying-with-someone}}.`,
        verses: ["2 Corinthians 6:2", "Romans 10:13"],
      },
      {
        heading: "If they're thinking about it",
        say: ["You could die tonight. Please don't put this off."],
        verses: ["Proverbs 27:1"],
      },
      {
        heading: "Next steps",
        body: `See {{Follow-up|openers/follow-up}}.`,
      },
    ],
  },

  {
    id: "workplace-friends",
    title: "Coworkers and Friends",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    summary: `With people you see every day, trust is built over time. You can be bold without being awkward.`,
    parts: [
      {
        heading: "Earn trust",
        body: `- Do good work and be honest
- Care about them as people, not projects
- Let your faith be known naturally ("I'm going to church Sunday")`,
        verses: ["Matthew 5:16", "Colossians 4:5-6"],
      },
      {
        heading: "Ask permission",
        say: ["Can I ask you something personal sometime?"],
        ask: "What do you think about spiritual things?",
        body: `Asking first keeps the friendship safe and makes them more open.`,
      },
      {
        heading: "Don't",
        body: `- Corner people or preach during work time
- Make every conversation about religion
- Avoid it forever because it might be awkward`,
      },
      {
        heading: "Use a question",
        body: `One good question over lunch can start an ongoing conversation. See {{Questions to ask|skills/knechtle-questions}}.`,
      },
    ],
  },

  {
    id: "family",
    title: "Family",
    sources: ["Personal"],
    summary: `Often the hardest people to talk to, because they know you best. Your life speaks first.`,
    parts: [
      {
        heading: "Live it",
        body: `They've seen your past. Let them see the change. Be patient, humble, and kind, especially when they push back.`,
        verses: ["Mark 5:19", "1 Peter 3:1"],
      },
      {
        heading: "Tell your story",
        say: ["Can I tell you what's happened to me?"],
        body: `Your testimony is hard to argue with. See {{My Testimony|paths/testimony}}.`,
      },
      {
        heading: "Be honest, not preachy",
        body: `- Pick your moment; not at every family dinner
- Admit your own failures
- Say it once clearly, then keep loving them
- Pray for them by name`,
        ask: "Do you ever think about where you stand with God?",
      },
      {
        heading: "Don't give up",
        body: `Many people come to faith years after a family member first spoke to them.`,
        verses: ["2 Peter 3:9"],
      },
    ],
  },
];
