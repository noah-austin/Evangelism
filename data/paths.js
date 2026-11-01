// GOSPEL PATHS
//
// Each path is a list of numbered steps. Each step can have:
//   heading:  short name of the step
//   say:      line(s) to say — shown big and highlighted
//   ask:      a question to ask — shown highlighted
//   body:     notes (supports **bold**, *italics*, "- " lists, [[Verse Ref]] and {{Label|section/id}} links)
//   verses:   verse references (must match a ref in verses.js to show the text)
//   branches: "if they say X, go to Y" — go is "step:N" or "section/id"
//             (N counts every part in the list, side steps included)
//   detour:   true for an optional side step. Side steps go at the end of
//             the list, aren't numbered, and are skipped by "Next".
//   next:     for a side step, the step number "Continue" returns to

window.DATA = window.DATA || {};

DATA.paths = [
  {
    id: "way-of-the-master",
    title: "Way of the Master",
    sources: ["Ray Comfort", "Mark Spence", "Living Waters"],
    summary: `Use the Law (Ten Commandments) to show someone their sin, so the cross makes sense. **Law to the proud, grace to the humble.**

**You don't need to prove the Bible first.** The Law is already written on every heart, and the conscience agrees with it ([[Romans 2:15]]). You're not asking them to accept a book. You're asking whether *they* think lying and stealing are wrong. If they push back on God, the Bible, or hell, use a side step, then come back.`,
    numbered: true,
    parts: [
      {
        heading: "Natural to spiritual",
        say: ["What do you think happens after someone dies?"],
        body: `Start where they are, the way Jesus did with the woman at the well (John 4). A gospel tract is an easy way in.

Other options:
- “Do you have any spiritual beliefs?”
- “Do you think there's a heaven?”
- “Did you get one of these?” (hand a tract)`,
        branches: [
          { if: "They think they'll go to heaven", go: "step:2" },
          { if: "“I don't believe in God” / “Nothing happens”", go: "step:9" },
          { if: "Not interested", go: "openers/wrapping-up" },
        ],
      },
      {
        heading: "Are you a good person?",
        say: ["Do you think you're a good person?"],
        verses: ["Proverbs 20:6"],
        body: `Most people say yes. Don't argue — just ask if you can test it:

“Can I ask you a few questions to see if you'd pass God's standard?”`,
        branches: [
          { if: "“Yes, I'm pretty good” / “Sure, ask away”", go: "step:3" },
          { if: "They argue about being good", go: "objections/good-person" },
        ],
      },
      {
        heading: "The Law",
        say: [
          "Have you ever told a lie? … What does that make you?",
          "Have you ever stolen anything, even something small? … What does that make you?",
          "Have you ever used God's name in vain — as a curse word?",
          "Jesus said if you look with lust, you commit adultery in your heart. Have you ever done that?",
        ],
        verses: ["Exodus 20:16", "Exodus 20:15", "Exodus 20:7", "Matthew 5:27-28", "1 John 3:15"],
        body: `Let them say the word (“a liar,” “a thief”). Be gentle and include yourself: “I've done the same.”

On blasphemy: “You used the name of the God who gave you life as a cuss word. That's serious.”

Optional: hatred is murder in God's eyes ([[1 John 3:15]]).`,
        branches: [
          { if: "They admit breaking them", go: "step:4" },
          { if: "“Who cares what the Bible says?”", go: "step:10" },
        ],
      },
      {
        heading: "Judgment",
        say: [
          "By your own admission, you're a lying, thieving, blasphemous adulterer at heart.",
          "If God judges you by the Ten Commandments on Judgment Day, would you be innocent or guilty?",
          "Would you go to heaven or hell?",
        ],
        verses: ["Hebrews 9:27", "Revelation 21:8", "Romans 3:20"],
        body: `Say it gently and without a smug tone. You're not condemning them — the Law is.`,
        branches: [
          { if: "“Guilty” / “Hell”", go: "step:5" },
          { if: "“God is good, He'll forgive me”", go: "objections/god-will-forgive" },
          { if: "“I don't believe the Bible”", go: "step:10" },
          { if: "“Hell isn't real” / “Hell isn't fair”", go: "step:11" },
        ],
      },
      {
        heading: "Does that concern you?",
        ask: "Does that concern you?",
        body: `Pause and let it sink in.

**If they say “God is good, He'll forgive me”:** “A good judge can't let a guilty criminal go. That's exactly why you're in trouble — God *is* good.”

**If they don't believe in hell:** “Your conscience still says lying and stealing are wrong. That's God's Law written on your heart.” ([[Romans 2:15]])

**If they're not concerned:** “You could die today. You have no promise of tomorrow.” ([[Proverbs 27:1]])`,
        branches: [
          { if: "“Yes, it concerns me”", go: "step:6" },
          { if: "“I'll think about it later”", go: "objections/think-later" },
        ],
      },
      {
        heading: "The cross",
        say: [
          "You broke God's Law, and Jesus paid your fine.",
          "It's like a courtroom: you're guilty, but someone pays your fine for you. The judge can let you go — legally.",
          "Jesus died for your sins and rose again three days later, defeating death.",
        ],
        verses: ["Romans 5:8", "2 Corinthians 5:21", "1 Corinthians 15:3-4", "John 3:16"],
        body: `Only bring the cross once they see their guilt. Grace means little to someone who doesn't think they need it.`,
      },
      {
        heading: "Repent and trust",
        say: [
          "You need to repent — turn from your sin — and trust Jesus alone to save you.",
          "Trust Him like you'd trust a parachute. You don't just believe in it; you put it on.",
        ],
        verses: ["Mark 1:15", "Acts 17:30-31", "Ephesians 2:8-9", "Proverbs 28:13"],
        ask: "Is there anything stopping you from repenting and trusting Jesus today?",
        body: `Don't pressure them into a quick prayer. Encourage them to get right with God themselves — they can pray right now, or as soon as they're alone.`,
        branches: [
          { if: "“I want to get right with God”", go: "step:8" },
          { if: "“I've done too much to be forgiven”", go: "objections/too-far-gone" },
          { if: "“Not today”", go: "objections/think-later" },
        ],
      },
      {
        heading: "Next steps",
        body: `- Read the Bible daily — start with the Gospel of John
- Obey what you read
- Find a Bible-believing church
- Offer your contact info or a follow-up resource`,
        verses: ["1 John 5:13", "2 Corinthians 5:17"],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“I don't believe in God”",
        detour: true,
        next: 2,
        say: [
          "If you saw a building, would you know there was a builder?",
          "Creation is the same. It's proof there's a Creator.",
        ],
        ask: "Do you think everything came from nothing?",
        body: `Keep it short. This is Ray Comfort's usual move: a building proves a builder, a painting proves a painter ([[Hebrews 3:4]]). Everyone knows God exists; people suppress it ([[Romans 1:20]]).

Then go straight back to the conscience. You don't need to win the argument first. Most people's problem with God is moral, not intellectual ([[John 3:19]]).`,
        verses: ["Hebrews 3:4", "Romans 1:20", "John 3:19"],
        branches: [
          { if: "“OK, maybe there's a God”", go: "step:2" },
          { if: "They want to keep debating", go: "objections/no-god" },
          { if: "Atheist background notes", go: "worldviews/atheist" },
        ],
      },
      {
        heading: "“I don't believe the Bible”",
        detour: true,
        next: 3,
        say: [
          "That's fine. Let's leave the Bible out of it for a minute.",
          "Do you think lying is wrong? Stealing?",
          "You don't need the Bible to know that. Your conscience tells you.",
        ],
        body: `The commandments aren't true because they're in the Bible; they're in the Bible because they're true, and the conscience agrees with them ([[Romans 2:15]]). Their own conscience gives the verdict.

If they want to talk about the Bible's reliability later, that's a good conversation, but don't let it replace the Law.`,
        verses: ["Romans 2:15"],
        branches: [
          { if: "Back to the Law questions", go: "step:3" },
          { if: "Back to Judgment", go: "step:4" },
          { if: "“The Bible has been changed”", go: "objections/bible-changed" },
          { if: "“The Bible was written by men”", go: "objections/bible-men" },
        ],
      },
      {
        heading: "“Hell isn't real”",
        detour: true,
        next: 5,
        say: [
          "Should a good judge punish a murderer?",
          "Then a perfect God will punish sin too. Hell is God's prison for people who break His Law.",
        ],
        ask: "If God is good, shouldn't He punish evil?",
        body: `Argue from justice, not from the Bible's authority. Everyone's conscience already believes in justice: they want murderers and child abusers punished. A judge who lets the guilty go is corrupt ([[Proverbs 17:15]]). The question isn't whether hell seems harsh, but whether God is just ([[Genesis 18:25]]).

Whether they believe in it or not, everyone faces judgment ([[Hebrews 9:27]]).`,
        verses: ["Proverbs 17:15", "Genesis 18:25", "Hebrews 9:27"],
        branches: [
          { if: "They see it", go: "step:5" },
          { if: "“Hell isn't fair”", go: "objections/hell-unfair" },
        ],
      },
    ],
  },

  {
    id: "romans-road",
    title: "Romans Road",
    sources: ["Classic"],
    summary: `A backup path: five verses, all from Romans. Quick to memorize and easy to walk through with an open Bible.`,
    numbered: true,
    parts: [
      { heading: "Everyone has sinned", verses: ["Romans 3:23"] },
      { heading: "Sin earns death; God offers life as a gift", verses: ["Romans 6:23"] },
      { heading: "Christ died for us while we were sinners", verses: ["Romans 5:8"] },
      { heading: "Confess Jesus as Lord and believe He rose", verses: ["Romans 10:9"] },
      { heading: "Whoever calls on Him will be saved", verses: ["Romans 10:13"] },
    ],
  },

  {
    id: "testimony",
    title: "My Testimony",
    sources: ["Personal"],
    summary: `Your story in about a minute. Short, simple, and always pointing to Jesus — not to you. **Draft: we'll write this together.**`,
    numbered: true,
    parts: [
      {
        heading: "Before",
        body: `*What was your life like before Christ? What did you trust in?*

[Your words here]`,
      },
      {
        heading: "How I came to Christ",
        body: `*What showed you your sin? What did you understand about the cross?*

[Your words here]`,
      },
      {
        heading: "After",
        body: `*What changed? Keep it honest — not “life got easy.”*

[Your words here]`,
      },
      {
        heading: "Bridge back to them",
        ask: "Can I ask — what do you think happens after you die?",
        branches: [{ if: "Continue the conversation", go: "paths/way-of-the-master" }],
      },
    ],
  },
];
