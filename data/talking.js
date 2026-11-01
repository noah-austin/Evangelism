// TALKING PATHS
//
// Step-by-step on-ramps that start from where the person is ("I'm an
// atheist", "I'm Muslim") and hand off into Way of the Master.
// Same format as paths.js (numbered steps, side steps with detour/next,
// branches). Branch targets can also be "paths/way-of-the-master/N".

window.DATA = window.DATA || {};

DATA.talking = [
  // --- Atheist ---
  {
    id: "atheist",
    title: "“I'm an atheist”",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle"],
    summary: `Stay friendly, ask a few questions, and move to the conscience. You don't need to win a debate about God before you talk about the Law.`,
    numbered: true,
    parts: [
      {
        heading: "Thank them and ask",
        say: ["Thanks for being honest. Can I ask you a question about that?"],
        ask: "What made you an atheist?",
        body: `- **Listen first.** Many atheists were hurt by church or never got real answers.
- **Don't argue yet.** Their story tells you what really matters to them.`,
        branches: [
          { if: "“I was raised in church and left”", go: "objections/hurt-by-church" },
          { if: "“Because of all the suffering”", go: "objections/suffering" },
          { if: "“I just never saw any evidence”", go: "step:2" },
        ],
      },
      {
        heading: "Are you sure?",
        ask: "Are you 100% sure there's no God?",
        body: `- **Most say no.** Then God could exist, and you're talking about evidence, not impossibility.
- **If they say yes:** “Do you know everything? Could God exist in the part you don't know?”`,
        branches: [
          { if: "“Science explains everything”", go: "step:6" },
          { if: "“There's no evidence”", go: "step:7" },
          { if: "“Well, no, not 100%”", go: "step:3" },
        ],
      },
      {
        heading: "Building and builder",
        say: [
          "If you saw a building, would you know there was a builder?",
          "Creation is the same. It's proof there's a Creator.",
        ],
        ask: "Do you think everything came from nothing?",
        verses: ["Hebrews 3:4", "Romans 1:20"],
        branches: [{ if: "“Then who made God?”", go: "step:8" }],
      },
      {
        heading: "The conscience",
        ask: "Do you think some things are really wrong, like torturing a child?",
        say: ["That sense of right and wrong is your conscience. It's God's Law written on your heart."],
        body: `- **Everyone has one.** Even people who reject the Bible know lying and stealing are wrong ([[Romans 2:15]]).
- **The real issue is moral.** People suppress what they know about God ([[Romans 1:18]]).`,
        verses: ["Romans 2:15", "Romans 1:18"],
        branches: [{ if: "“Morality is just evolution”", go: "objections/morality-relative" }],
      },
      {
        heading: "A different kind of question",
        say: ["Can I ask you a different kind of question?"],
        ask: "Do you think you're a good person?",
        body: `- **Now you're in Way of the Master.** Go through the Commandments with them.
- **Keep it gentle.** The goal is their conscience, not winning the argument.`,
        branches: [
          { if: "“Yeah, I'm pretty good”", go: "paths/way-of-the-master/2" },
          { if: "“Nobody's perfect”", go: "paths/way-of-the-master/3" },
        ],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“Science explains everything”",
        detour: true,
        next: 3,
        ask: "Can science prove that statement?",
        say: ["Science tells us how things work. It can't tell us why there's something rather than nothing."],
        body: `- **Self-defeating:** “Only science gives truth” can't be proven by science ({{Suicide|skills/suicide}}).
- **Many great scientists believed in God.** Science and God aren't enemies.`,
        branches: [
          { if: "“Evolution explains it”", go: "objections/evolution" },
          { if: "They want to go deeper", go: "objections/science-disproves-god" },
        ],
      },
      {
        heading: "“There's no evidence”",
        detour: true,
        next: 3,
        ask: "What would count as evidence for you?",
        say: ["Everything that exists is evidence. Creation points to a Creator."],
        body: `- **The resurrection** is the best historical evidence. If Jesus rose, the question is settled ({{The Resurrection|evidence/resurrection}}).
- **If nothing would convince them,** the issue isn't evidence.`,
        verses: ["Romans 1:20", "Psalm 19:1"],
        branches: [{ if: "They want to keep debating", go: "objections/no-god" }],
      },
      {
        heading: "“Then who made God?”",
        detour: true,
        next: 4,
        say: [
          "Good question. Anything that has a beginning needs a cause.",
          "God never began. He's eternal, so He doesn't need a maker.",
        ],
        body: `- **The universe had a beginning;** God didn't ([[Psalm 90:2]]).
- **Keep it brief,** then move on to the conscience.`,
        verses: ["Psalm 90:2"],
        branches: [{ if: "They want to go deeper", go: "objections/who-made-god" }],
      },
    ],
  },

  // --- Agnostic ---
  {
    id: "agnostic",
    title: "“I don't know if God exists”",
    sources: ["Greg Koukl", "Lee Strobel", "Ray Comfort"],
    summary: `Honest uncertainty is a fine place to start but a bad place to stay. Find out what they mean, point to evidence, then speak to the conscience.`,
    numbered: true,
    parts: [
      {
        heading: "Find out what they mean",
        ask: "Do you mean you don't know, or that no one can know?",
        body: `- **“I don't know”** is honest. Ask how much they've looked into it.
- **“No one can know”** claims to know something about God. That defeats itself ({{Suicide|skills/suicide}}).`,
        branches: [
          { if: "“I just haven't really thought about it”", go: "step:2" },
          { if: "“Nobody can know for sure”", go: "step:2" },
        ],
      },
      {
        heading: "Raise the stakes",
        ask: "If God is real, would you want to know?",
        say: ["This is the most important question there is. If God is real, we'll all stand before Him."],
        verses: ["Hebrews 9:27"],
        branches: [{ if: "“Not really” / “I don't care”", go: "step:6" }],
      },
      {
        heading: "Point to evidence",
        say: [
          "If you saw a building, you'd know there was a builder. Creation is the same.",
          "And Jesus rose from the dead. That's the best evidence there is.",
        ],
        body: `- **Don't pile on arguments.** One or two strong points is plenty.
- **God can be found.** He promises to be found by those who truly seek Him ([[Jeremiah 29:13]]).`,
        verses: ["Hebrews 3:4", "Jeremiah 29:13"],
        branches: [{ if: "“How do you know Jesus rose?”", go: "evidence/resurrection" }],
      },
      {
        heading: "The conscience",
        ask: "Do you think lying and stealing are wrong?",
        say: ["You know that without anyone telling you. That's your conscience, and it agrees with God's Law."],
        verses: ["Romans 2:15"],
      },
      {
        heading: "Go to the Law",
        ask: "Do you think you're a good person?",
        body: `Move into Way of the Master. Their conscience already knows more than they admit.`,
        branches: [
          { if: "“Yeah, pretty good”", go: "paths/way-of-the-master/2" },
          { if: "“I've done some bad stuff”", go: "paths/way-of-the-master/3" },
        ],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“I don't care”",
        detour: true,
        next: 4,
        say: [
          "Fair enough. But if God is real, not caring won't change that.",
          "Can I ask you something about your conscience instead?",
        ],
        body: `- **Indifference is usually moral, not intellectual.** People avoid God because of what He might ask of them ([[John 3:19]]).
- **Skip the evidence** and go straight to the conscience.`,
        verses: ["John 3:19", "Proverbs 27:1"],
      },
    ],
  },

  // --- Already a Christian ---
  {
    id: "already-christian",
    title: "“I'm already a Christian”",
    sources: ["Ray Comfort", "Living Waters", "Mark Spence"],
    summary: `Many people who say this have never truly repented. Kindly test their understanding of grace. If they get it, encourage them; if not, go to the Law.`,
    numbered: true,
    parts: [
      {
        heading: "Encourage, then ask",
        say: ["That's great. Can I ask you a question?"],
        ask: "How do you know you're going to heaven?",
        body: `- **Listen for the answer.** “I'm a good person” or “I go to church” means they're trusting themselves.
- **A clear answer** is about Jesus' death for their sins and turning from sin to trust Him.`,
        branches: [
          { if: "“Because I'm a good person”", go: "step:3" },
          { if: "“I go to church” / “I was baptized”", go: "step:3" },
          { if: "“Because Jesus paid for my sins”", go: "step:2" },
        ],
      },
      {
        heading: "Check for real repentance",
        ask: "What changed in your life when you became a Christian?",
        body: `- **Real conversion brings a new life** ([[2 Corinthians 5:17]]). Look for love for God, hatred of sin, and a desire to obey.
- **If their answer is clear,** go to step 5 and encourage them.`,
        verses: ["2 Corinthians 5:17", "1 John 2:3-4"],
        branches: [
          { if: "They clearly understand grace and repentance", go: "step:5" },
          { if: "“Not much, really”", go: "step:3" },
        ],
      },
      {
        heading: "Do you think you're a good person?",
        ask: "Do you think you're a good person?",
        say: ["Can we look at the Ten Commandments together and see?"],
        body: `- **If they say yes,** they likely don't understand grace. Christians know they aren't good ([[Romans 3:23]]).
- **Go through the Law gently.** Many church-goers have never seen their sin.`,
        verses: ["Romans 3:23"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master/3" }],
      },
      {
        heading: "Examine yourself",
        say: [
          "Jesus warned that many will call Him Lord and still not enter heaven.",
          "The Bible says to examine yourself to see if you're in the faith.",
        ],
        ask: "If you died tonight, are you sure you'd go to heaven?",
        body: `- **False conversion is real.** Many have prayed a prayer without repenting ([[Matthew 7:21-23]]).
- **Not to scare them,** but to make sure they're truly trusting Christ ([[2 Corinthians 13:5]]).`,
        verses: ["Matthew 7:21-23", "2 Corinthians 13:5"],
        branches: [
          { if: "“I'm not sure anymore”", go: "paths/way-of-the-master/6" },
          { if: "Ready to go through the Law", go: "paths/way-of-the-master/3" },
        ],
      },
      {
        heading: "If they're truly saved",
        say: [
          "That's wonderful. I'm glad we're family.",
          "Do you ever share your faith? I'd love to show you how I do it.",
        ],
        body: `- **Encourage them.** Pray together if it's natural.
- **Invite them** to come out sharing the gospel with you.`,
        verses: ["Romans 10:14"],
      },
    ],
  },

  // --- Spiritual ---
  {
    id: "spiritual",
    title: "“I'm spiritual, not religious”",
    sources: ["Greg Koukl", "Ray Comfort", "Cliff Knechtle"],
    summary: `Also covers “All religions lead to God.” Ask what they mean, point out that the claim takes a side, contrast karma with grace, then go to the Law.`,
    numbered: true,
    parts: [
      {
        heading: "What do you mean?",
        ask: "What do you mean by spiritual?",
        body: `- **Columbo first** ({{Columbo|skills/columbo}}). It might mean anything from prayer to crystals to karma.
- **Listen** for what they actually trust in.`,
        branches: [
          { if: "“All religions lead to God”", go: "step:2" },
          { if: "“I believe in karma” / “The universe”", go: "step:3" },
          { if: "“I believe in God, just not church”", go: "step:4" },
        ],
      },
      {
        heading: "Can they all be true?",
        say: [
          "Christianity says Jesus is God and rose from the dead. Islam says He wasn't God and didn't die.",
          "They can't both be right.",
        ],
        ask: "How did you come to that conclusion?",
        body: `- **The claim takes a side.** “All religions are true” says every religion that claims to be the only way is wrong ({{Suicide|skills/suicide}}).
- **Jesus claimed to be the only way** ([[John 14:6]]).`,
        verses: ["John 14:6", "Acts 4:12"],
        branches: [{ if: "They want to go deeper", go: "objections/all-religions" }],
      },
      {
        heading: "Karma or grace",
        ask: "If karma is real, what happens to you for the bad things you've done?",
        say: ["Karma is bad news for everyone. Grace is the opposite: getting what you don't deserve."],
        body: `- **Karma means you pay.** Grace means someone pays for you.
- **This sets up the Law:** have they done bad things?`,
        verses: ["Ephesians 2:8-9", "Romans 6:23"],
      },
      {
        heading: "Do you think you're a good person?",
        ask: "Do you think you're a good person?",
        say: ["Can I ask you a few questions to see?"],
        body: `Move into Way of the Master. Spiritual people often believe they're basically good. The Law shows them otherwise.`,
        branches: [
          { if: "“Yes, I'm a good person”", go: "paths/way-of-the-master/2" },
          { if: "Ready to go through the Law", go: "paths/way-of-the-master/3" },
        ],
      },
    ],
  },

  // --- Pro-choice ---
  {
    id: "pro-choice",
    title: "“I'm pro-choice”",
    sources: ["Russell Hunter", "Abolitionist Rising", "Greg Koukl"],
    summary: `Keep it to one question: what is the unborn? Abortion is murder of a person made in God's image, but the real answer is the gospel, for them and for anyone who's been involved in abortion.`,
    numbered: true,
    parts: [
      {
        heading: "Ask, don't attack",
        say: ["Can I ask you a question about that?"],
        ask: "Why do you think abortion is OK?",
        body: `- **Listen first.** Some people have had an abortion or know someone who has.
- **Be gentle.** Truth spoken harshly closes the door.`,
        branches: [
          { if: "“It's my body, my choice”", go: "step:7" },
          { if: "“What about rape?”", go: "step:6" },
          { if: "“I've had an abortion”", go: "step:8" },
          { if: "“It's just a clump of cells”", go: "step:2" },
        ],
      },
      {
        heading: "The one key question",
        ask: "What is the unborn?",
        say: [
          "If it's not a human being, no reason for abortion is needed.",
          "If it is a human being, no reason is good enough.",
        ],
        body: `- **Science answers this.** From conception, the unborn is a living, distinct human being.
- **Size, development, location, and dependency** don't change what a person is.`,
        branches: [{ if: "They want to go deeper", go: "objections/clump-of-cells" }],
      },
      {
        heading: "Made in God's image",
        say: [
          "Every human being is made in the image of God, including in the womb.",
          "Intentionally killing an innocent human being is murder.",
        ],
        verses: ["Genesis 9:6", "Psalm 139:13", "Exodus 20:13"],
        body: `- **Say it plainly, but kindly.** Abortion isn't mainly a political issue; it's a sin issue.
- **The answer is the gospel,** not just changing their vote.`,
        branches: [{ if: "They want to go deeper", go: "objections/abortion" }],
      },
      {
        heading: "Turn to their own heart",
        say: ["Can I ask you a personal question? It's not about abortion."],
        ask: "Do you think you're a good person?",
        body: `- **Everyone needs the gospel,** whatever their view on abortion.
- **Go through the Law** so they see their own sin, not just a political position.`,
        verses: ["Romans 3:23"],
      },
      {
        heading: "Go to the Law",
        body: `Move into Way of the Master. When they see their own guilt, the cross offers full forgiveness, including for abortion ([[1 John 1:9]]).`,
        verses: ["1 John 1:9"],
        branches: [
          { if: "“Yeah, I'm a good person”", go: "paths/way-of-the-master/2" },
          { if: "Ready to go through the Law", go: "paths/way-of-the-master/3" },
        ],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“What about rape?”",
        detour: true,
        next: 2,
        say: [
          "Rape is horrible, and the man who did it deserves justice.",
          "But the child didn't commit the crime. Should we punish the child for what the father did?",
        ],
        body: `- **Show compassion first.** This may be personal.
- **Then come back to the key question:** what is the unborn?`,
        verses: ["Deuteronomy 24:16"],
        branches: [{ if: "They want to go deeper", go: "objections/rape-incest" }],
      },
      {
        heading: "“My body, my choice”",
        detour: true,
        next: 2,
        say: [
          "I agree you have a right to your body.",
          "But the unborn has a different body, a different heartbeat, and different DNA.",
        ],
        ask: "Whose body is being killed in an abortion?",
        branches: [{ if: "They want to go deeper", go: "objections/my-body" }],
      },
      {
        heading: "“I've had an abortion”",
        detour: true,
        next: 4,
        say: [
          "Thank you for trusting me with that.",
          "There is full forgiveness in Jesus, even for this.",
        ],
        body: `- **Be gentle.** Don't lecture. They likely already carry guilt.
- **Point to the cross.** Jesus paid for every sin of those who repent and trust Him ([[1 John 1:9]], [[Isaiah 1:18]]).
- **Paul helped kill Christians,** and God saved him ([[1 Timothy 1:15]]).`,
        verses: ["1 John 1:9", "Isaiah 1:18", "1 Timothy 1:15"],
        branches: [
          { if: "“How could God forgive me?”", go: "objections/had-abortion" },
          { if: "Ready to hear about the cross", go: "paths/way-of-the-master/6" },
        ],
      },
    ],
  },
];
