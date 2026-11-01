// GOSPEL PATHS
//
// Each path is a list of numbered steps. Each step can have:
//   heading:  short name of the step
//   say:      line(s) to say, shown big and highlighted
//   ask:      a question to ask, shown highlighted
//   body:     notes (supports **bold**, *italics*, "- " lists, [[Verse Ref]] and {{Label|section/id}} links)
//   verses:   verse references (must match a ref in verses.js to show the text)
//   branches: "if they say X, go to Y". go is "step:N" or "section/id"
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
    summary: `Use the Ten Commandments to show someone their sin, so the cross makes sense. **Law to the proud, grace to the humble.**

**You don't need to prove the Bible first.** The Law is written on every heart, and the conscience agrees with it ([[Romans 2:15]]). You're not asking them to accept a book. You're asking whether *they* think lying and stealing are wrong. If they push back on God, the Bible, or hell, take a side step, then come back.`,
    numbered: true,
    parts: [
      {
        heading: "Natural to spiritual",
        say: ["What do you think happens after someone dies?"],
        body: `Start where they are, the way Jesus did with the woman at the well (John 4). A gospel tract is an easy way in.

**Other openers:**
- “Do you have any spiritual beliefs?”
- “Do you think there's a heaven?”
- “Did you get one of these?” (hand them a tract)`,
        branches: [
          { if: "“I think I'll go to heaven”", go: "step:2" },
          { if: "“I don't believe in God” / “Nothing happens”", go: "step:9" },
          { if: "“I'm not interested”", go: "openers/wrapping-up" },
        ],
      },
      {
        heading: "Are you a good person?",
        say: [
          "Do you think you're a good person?",
          "Can I ask you a few questions to see if you'd pass God's standard?",
        ],
        verses: ["Proverbs 20:6"],
        body: `Most people say yes. Don't argue the point. Just ask if you can test it.`,
        branches: [
          { if: "“Yes, I'm a good person” / “Sure, ask away”", go: "step:3" },
          { if: "“I'm better than most people”", go: "objections/good-person" },
        ],
      },
      {
        heading: "The Law",
        say: [
          "Have you ever told a lie? What does that make you?",
          "Have you ever stolen anything, even something small? What does that make you?",
          "Have you ever used God's name as a curse word?",
          "Jesus said if you look with lust, you commit adultery in your heart. Have you ever done that?",
        ],
        verses: ["Exodus 20:16", "Exodus 20:15", "Exodus 20:7", "Matthew 5:27-28", "1 John 3:15"],
        body: `- **Let them say the word:** “a liar,” “a thief.”
- **Include yourself:** “I've done the same.”
- **On blasphemy:** “You used the name of the God who gave you life as a cuss word. That's serious.”
- **Optional:** hatred is murder in God's eyes ([[1 John 3:15]]).`,
        branches: [
          { if: "“Yes, I've done those”", go: "step:4" },
          { if: "“Who cares what the Bible says?”", go: "step:10" },
        ],
      },
      {
        heading: "Judgment",
        say: [
          "By your own admission, you're a liar, a thief, a blasphemer, and an adulterer at heart.",
          "If God judges you by the Ten Commandments on Judgment Day, would you be innocent or guilty?",
          "Would you go to heaven or hell?",
        ],
        verses: ["Hebrews 9:27", "Revelation 21:8", "Romans 3:20"],
        body: `Say it gently, never smugly. You're not condemning them. The Law is.`,
        branches: [
          { if: "“Guilty” / “Hell”", go: "step:5" },
          { if: "“God is good. He'll forgive me.”", go: "objections/god-will-forgive" },
          { if: "“I don't believe the Bible”", go: "step:10" },
          { if: "“Hell isn't real” / “Hell isn't fair”", go: "step:11" },
        ],
      },
      {
        heading: "Does that concern you?",
        ask: "Does that concern you?",
        body: `Pause. Let it sink in.

- **“God is good, He'll forgive me”:** “A good judge can't let a guilty criminal go. That's exactly why you're in trouble. God *is* good.”
- **“I don't believe in hell”:** “Your conscience still says lying and stealing are wrong. That's God's Law written on your heart.” ([[Romans 2:15]])
- **Not concerned:** “You could die today. You have no promise of tomorrow.” ([[Proverbs 27:1]])`,
        branches: [
          { if: "“Yes, it concerns me”", go: "step:6" },
          { if: "“I'll think about it later”", go: "objections/think-later" },
        ],
      },
      {
        heading: "The cross",
        say: [
          "You broke God's Law, and Jesus paid your fine.",
          "It's like a courtroom. You're guilty, but someone pays your fine, so the judge can legally let you go.",
          "Jesus died for your sins, and three days later He rose from the dead.",
        ],
        verses: ["Romans 5:8", "2 Corinthians 5:21", "1 Corinthians 15:3-4", "John 3:16"],
        body: `Bring the cross only once they see their guilt. Grace means little to someone who doesn't think they need it.`,
      },
      {
        heading: "Repent and trust",
        say: [
          "You need to repent, which means turning from your sin, and trust Jesus alone to save you.",
          "Trust Him like a parachute. You don't just believe in it. You put it on.",
        ],
        ask: "Is there anything stopping you from repenting and trusting Jesus today?",
        verses: ["Mark 1:15", "Acts 17:30-31", "Ephesians 2:8-9", "Proverbs 28:13"],
        body: `Don't pressure them into a quick prayer. Encourage them to get right with God themselves, right now or as soon as they're alone.`,
        branches: [
          { if: "“I want to get right with God”", go: "step:8" },
          { if: "“I've done too much to be forgiven”", go: "objections/too-far-gone" },
          { if: "“Not today”", go: "objections/think-later" },
        ],
      },
      {
        heading: "Next steps",
        say: ["Read the Bible every day, starting with the Gospel of John, and find a church that teaches it."],
        body: `- Read the Bible daily, starting with John
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
        body: `- **Keep it short.** A building proves a builder; a painting proves a painter ([[Hebrews 3:4]]). Everyone knows God exists, but people suppress it ([[Romans 1:20]]).
- **Go back to the conscience.** You don't need to win the argument first. Most people's problem with God is moral, not intellectual ([[John 3:19]]).`,
        verses: ["Hebrews 3:4", "Romans 1:20", "John 3:19"],
        branches: [
          { if: "“OK, maybe there's a God”", go: "step:2" },
          { if: "“You can't prove God exists”", go: "objections/no-god" },
          { if: "“I'm an atheist”", go: "worldviews/atheist" },
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
        body: `- **Conscience, not authority.** The commandments aren't true because they're in the Bible. They're in the Bible because they're true, and the conscience agrees ([[Romans 2:15]]).
- **Don't get sidetracked.** The Bible's reliability is a good conversation for later, but don't let it replace the Law.`,
        verses: ["Romans 2:15"],
        branches: [
          { if: "“OK, lying is wrong”", go: "step:3" },
          { if: "“Fine, I'd be guilty”", go: "step:4" },
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
        body: `- **Argue from justice, not authority.** Everyone wants murderers and child abusers punished. A judge who lets the guilty go is corrupt ([[Proverbs 17:15]]).
- **The real question** isn't whether hell seems harsh, but whether God is just ([[Genesis 18:25]]).
- Believe it or not, everyone faces judgment ([[Hebrews 9:27]]).`,
        verses: ["Proverbs 17:15", "Genesis 18:25", "Hebrews 9:27"],
        branches: [
          { if: "“I guess that's fair”", go: "step:5" },
          { if: "“Hell still isn't fair”", go: "objections/hell-unfair" },
        ],
      },
    ],
  },

  {
    id: "romans-road",
    title: "Romans Road",
    sources: ["Classic"],
    summary: `A backup path: five verses, all from Romans. Easy to memorize and to walk through with an open Bible.`,
    numbered: true,
    parts: [
      {
        heading: "Everyone has sinned",
        say: ["The Bible says everyone has sinned, including you and me."],
        verses: ["Romans 3:23"],
      },
      {
        heading: "Sin earns death; God offers life",
        say: ["Sin earns death. But God offers eternal life as a free gift."],
        verses: ["Romans 6:23"],
      },
      {
        heading: "Christ died for sinners",
        say: ["God showed His love by sending Jesus to die for us while we were still sinners."],
        verses: ["Romans 5:8"],
      },
      {
        heading: "Confess and believe",
        say: ["If you confess Jesus as Lord and believe God raised Him from the dead, you will be saved."],
        verses: ["Romans 10:9"],
      },
      {
        heading: "Call on Him",
        say: ["Whoever calls on the name of the Lord will be saved. That includes you."],
        verses: ["Romans 10:13"],
      },
    ],
  },

  {
    id: "testimony",
    title: "My Testimony",
    sources: ["Personal"],
    summary: `Your story in about one minute: short, simple, and pointing to Jesus, not to you. **Draft:** we'll write it together, then you can practice it out loud.`,
    numbered: true,
    parts: [
      {
        heading: "Before",
        body: `**Prompt:** What was your life like before Christ? What were you trusting in?

[Your words here]`,
      },
      {
        heading: "How I came to Christ",
        body: `**Prompt:** What showed you your sin? When did the cross make sense to you?

[Your words here]`,
      },
      {
        heading: "After",
        body: `**Prompt:** What changed? Be honest: following Jesus doesn't mean life got easy.

[Your words here]`,
      },
      {
        heading: "Turn it back to them",
        ask: "Can I ask what you think happens after you die?",
        branches: [{ if: "“I'm not sure” / “I hope heaven”", go: "paths/way-of-the-master" }],
      },
    ],
  },
];
