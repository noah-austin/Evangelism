// OPENERS & TRANSITIONS
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.openers = [
  {
    id: "starting",
    title: "Starting a Conversation",
    sources: ["Living Waters", "Cliff Knechtle"],
    summary: `Ways to move from everyday talk to spiritual things.`,
    parts: [
      {
        heading: "Questions",
        say: [
          "What do you think happens after someone dies?",
          "Do you have any spiritual beliefs?",
          "Do you think you're a good person?",
        ],
      },
      {
        heading: "Gospel tracts",
        say: ["Did you get one of these?"],
        body: `Hand them a tract (e.g. the Living Waters “million dollar bill”), then ask a question about it.`,
      },
      {
        heading: "Natural bridges",
        body: `- News or tragedy → “Do you ever think about what happens when we die?”
- Someone thanks you → “Can I ask you a question?”
- Prayer → “Is there anything I can pray for you about?”`,
      },
      {
        heading: "Then",
        branches: [{ if: "They're open to talking", go: "paths/way-of-the-master" }],
      },
    ],
  },

  {
    id: "wrapping-up",
    title: "Wrapping Up",
    sources: ["Living Waters"],
    summary: `How to end well — whether they're interested or not.`,
    parts: [
      {
        heading: "If they're not interested",
        say: ["Thanks for talking with me. Can I leave you with this?"],
        body: `Leave a tract or one question to think about ({{stone in their shoe|skills/stone-in-shoe}}). Stay friendly — you may not be the last Christian they meet.`,
      },
      {
        heading: "If they're under conviction",
        ask: "Is there anything stopping you from repenting and trusting Jesus today?",
        body: `Encourage them to pray and get right with God — now or as soon as they're alone. Don't pressure a prayer.`,
        verses: ["2 Corinthians 6:2", "Romans 10:13"],
      },
      {
        heading: "Next steps",
        body: `- Read the Bible daily (start with John)
- Find a Bible-believing church
- Offer your contact info or a follow-up resource`,
        verses: ["1 John 5:13"],
      },
    ],
  },
];
