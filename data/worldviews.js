// WORLDVIEW NOTES
//
// Same format as paths: title, sources, summary, and parts.
// Set draft: true on pages that still need content.

window.DATA = window.DATA || {};

DATA.worldviews = [
  {
    id: "atheist",
    title: "Atheists",
    sources: ["Ray Comfort", "Cliff Knechtle", "C.S. Lewis"],
    summary: `Most atheists have heard arguments before. Respect them, ask questions, and speak to the conscience.`,
    parts: [
      {
        heading: "Key questions",
        ask: "Do you know for sure there's no God, or do you just not believe there is one?",
        body: `- “Where did everything come from?” ([[Romans 1:20]])
- “Is anything really wrong?” (See {{The Moral Law|evidence/moral-law}})
- “What would convince you?”`,
      },
      {
        heading: "Go to the Law",
        body: `Arguments matter, but the conscience is the real point of contact ([[Romans 2:15]]). Ray Comfort often moves to the Law even with committed atheists.`,
        branches: [{ if: "Ready to go to the Law", go: "paths/way-of-the-master" }],
      },
    ],
  },
  { id: "muslim", title: "Muslims", sources: [], summary: "To fill in together.", draft: true, parts: [] },
  { id: "mormon", title: "Mormons (LDS)", sources: [], summary: "To fill in together.", draft: true, parts: [] },
  { id: "jw", title: "Jehovah's Witnesses", sources: [], summary: "To fill in together.", draft: true, parts: [] },
  { id: "catholic", title: "Catholics", sources: [], summary: "To fill in together.", draft: true, parts: [] },
  { id: "spiritual", title: "“Spiritual but not religious”", sources: [], summary: "To fill in together.", draft: true, parts: [] },
];
