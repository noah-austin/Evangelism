// CONVERSATION SKILLS — tactics for steering conversations
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.skills = [
  {
    id: "stone-in-shoe",
    title: "The Goal: A Stone in Their Shoe",
    sources: ["Greg Koukl"],
    summary: `You don't have to win the argument or close the deal. Aim to leave them with one good thing to think about — something that keeps bugging them after you leave.`,
    parts: [
      {
        body: `- Take the pressure off yourself — God does the saving ([[2 Timothy 2:24-25]])
- Ask more than you tell
- One good question can do more than a 20-minute speech
- If you're out of your depth, say: “Great question — let me look into that and get back to you.”`,
        verses: ["2 Timothy 2:24-25", "Colossians 4:5-6"],
      },
    ],
  },

  {
    id: "columbo",
    title: "Columbo",
    sources: ["Greg Koukl"],
    summary: `Stay in the driver's seat by asking questions — like the TV detective who always had “just one more question.”`,
    parts: [
      {
        heading: "1. Get clear",
        ask: "What do you mean by that?",
        body: `Find out what they actually believe before answering. Often the objection changes once they explain it.`,
      },
      {
        heading: "2. Get their reasons",
        ask: "How did you come to that conclusion?",
        body: `Puts the burden of proof on the person making the claim. Many people have never thought about *why* they believe something.`,
      },
      {
        heading: "3. Lead (when ready)",
        ask: "Have you ever considered…?",
        body: `Use a question to point out a flaw or introduce a new idea gently, instead of making a statement.`,
      },
    ],
  },

  {
    id: "suicide",
    title: "Suicide (Self-Defeating Claims)",
    sources: ["Greg Koukl"],
    summary: `Some claims destroy themselves — they fail their own standard. Point it out gently.`,
    parts: [
      {
        heading: "Examples",
        body: `- **“There is no truth.”** → “Is that true?”
- **“You shouldn't force your views on others.”** → “Isn't that what you're doing now?”
- **“All religions are true.”** → That rules out every religion that says it's the only way. (See {{All religions lead to God|objections/all-religions}})
- **“Only science can tell us what's true.”** → Can science prove that statement?`,
      },
      {
        heading: "Tone",
        body: `Don't spring it like a trap. Ask it as a genuine question and let them see it.`,
      },
    ],
  },

  {
    id: "knechtle-questions",
    title: "Questions to Ask",
    sources: ["Cliff Knechtle", "Stuart Knechtle"],
    summary: `Get people thinking about their own worldview. Listen well, then answer directly from Scripture.`,
    parts: [
      {
        body: `- “What do you think happens after you die?”
- “Why do you believe that?”
- “How sure are you, on a scale of 1 to 10?”
- “If you're wrong, what's at stake?”
- “What would it take to change your mind?”
- “Where do you get your sense of right and wrong?”`,
      },
      {
        heading: "Style notes",
        body: `- Thank them for the question — and mean it
- Let them finish before you answer
- Answer the question they actually asked
- Bring it back to Jesus and the resurrection`,
        verses: ["1 Peter 3:15"],
      },
    ],
  },
];
