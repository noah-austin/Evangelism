// EVIDENCE & ARGUMENTS
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.evidence = [
  {
    id: "resurrection",
    title: "The Resurrection: Minimal Facts",
    sources: ["Gary Habermas", "Lee Strobel"],
    summary: `Facts accepted by most scholars, even skeptical ones. The best explanation for all of them together is that Jesus rose from the dead.`,
    parts: [
      {
        heading: "The facts",
        body: `1. Jesus died by crucifixion
2. His disciples believed they saw Him risen, and were willing to suffer and die for it
3. Paul, a persecutor of the church, suddenly became a follower
4. James, Jesus' skeptical brother, became a follower and church leader
5. The tomb was empty`,
        verses: ["1 Corinthians 15:3-4", "1 Corinthians 15:6"],
      },
      {
        heading: "Why it matters",
        say: ["If Jesus rose from the dead, then He is who He said He is, and we need to listen to Him."],
        verses: ["1 Corinthians 15:17", "Acts 17:30-31"],
      },
      {
        heading: "Common alternatives, and the problem",
        body: `- **The disciples lied.** People don't die for what they *know* is a lie.
- **Hallucinations.** Groups don't share the same hallucination, and it doesn't explain the empty tomb.
- **Wrong tomb.** The authorities could have produced the body.
- **Jesus didn't really die.** Roman executioners knew their job, and a half-dead man wouldn't inspire belief in a risen Lord.
- **Legend.** The creed in [[1 Corinthians 15:3-4]] dates to within a few years of the cross. Too early for legend.`,
      },
      {
        ask: "If Jesus really rose, what would that mean for you?",
      },
      {
        heading: "Study",
        body: `Lee Strobel, *The Case for Christ*. Gary Habermas and Michael Licona, *The Case for the Resurrection of Jesus*.`,
      },
    ],
  },

  {
    id: "eyewitness-gospels",
    title: "The Gospels as Eyewitness Accounts",
    sources: ["Lee Strobel"],
    summary: `The Gospels read like history, written early, based on eyewitnesses, and full of details no one would invent.`,
    parts: [
      {
        heading: "Written by eyewitnesses or their close associates",
        body: `- Matthew and John were apostles
- Mark is traditionally linked to Peter's preaching
- Luke says he carefully investigated eyewitness accounts ([[Luke 1:3-4]])`,
        verses: ["Luke 1:3-4", "2 Peter 1:16", "John 20:30-31"],
      },
      {
        heading: "Written early",
        body: `Most scholars date the Gospels within roughly 30 to 60 years of Jesus' death, and Paul's letters even earlier. Eyewitnesses, including hostile ones, were still alive to challenge them.`,
      },
      {
        heading: "Embarrassing details",
        body: `People making up a story leave out what makes them look bad. The Gospels include:
- Women as the first witnesses of the empty tomb (their testimony was not valued then)
- Peter denying Jesus
- The disciples doubting, fleeing, and misunderstanding
- Jesus' own family thinking He was out of His mind`,
      },
      {
        heading: "Study",
        body: `Lee Strobel, *The Case for Christ*, first chapters (interview with Craig Blomberg).`,
      },
    ],
  },

  {
    id: "bible-reliability",
    title: "Has the Bible Been Changed?",
    sources: ["Lee Strobel"],
    summary: `We have far more and far earlier copies of the New Testament than of any other ancient book. We can be confident we have what was originally written.`,
    parts: [
      {
        heading: "Manuscripts",
        body: `- Over 5,000 Greek manuscripts of the New Testament, plus thousands more in other languages
- Most other ancient works survive in a handful to a few hundred copies
- Some New Testament fragments date to within about 100 years of the originals; for many classical works the gap is closer to 1,000 years`,
      },
      {
        heading: "The differences between copies",
        body: `Most are spelling, word order, or obvious copying slips. None of them changes a core Christian belief. Comparing so many copies lets scholars work back to the original wording.`,
      },
      {
        heading: "The Old Testament",
        body: `The Dead Sea Scrolls (found in 1947) included copies of Isaiah about 1,000 years older than the earliest ones known before. They match closely.`,
      },
      {
        heading: "Archaeology",
        body: `Archaeology has repeatedly confirmed places, rulers, and details mentioned in the Bible, for example Pontius Pilate, the pool of Bethesda, and many of the places Luke names in Acts.`,
      },
      {
        ask: "Which part do you think was changed, and when?",
        body: `This is a good {{Columbo|skills/columbo}} moment: most people have heard the claim but can't point to an example.`,
      },
      {
        heading: "Study",
        body: `Lee Strobel, *The Case for Christ* (interviews with Bruce Metzger and John McRay).`,
        verses: ["Isaiah 40:8", "2 Timothy 3:16"],
      },
    ],
  },

  {
    id: "prophecy",
    title: "Fulfilled Prophecy",
    sources: ["Lee Strobel"],
    summary: `Hundreds of years before Jesus, the Old Testament described the Messiah in detail. Jesus fit the description.`,
    parts: [
      {
        heading: "Key prophecies",
        body: `- **Isaiah 53** (about 700 years before): a servant who is pierced, crushed for our sins, silent before His accusers, and buried with the rich
- **Psalm 22** (about 1,000 years before): hands and feet pierced, clothing divided by lot, mocked by onlookers
- **Micah 5:2**: the ruler comes from Bethlehem
- **Daniel 9**: gives a timeline pointing to the Messiah coming and being "cut off" before the temple was destroyed (it was destroyed in AD 70)`,
        verses: ["Isaiah 53:5", "Isaiah 53:6", "Psalm 22:16", "Micah 5:2"],
      },
      {
        heading: "Try this",
        say: ["Can I read you something and you tell me who it's about?"],
        body: `Read [[Isaiah 53:5]] without the reference. Many people assume it's from the New Testament.`,
      },
      {
        heading: "Why it matters",
        body: `Jesus said the Scriptures were about Him ([[Luke 24:44]]). Only God knows the future ([[Isaiah 46:9-10]]).`,
        verses: ["Luke 24:44", "Isaiah 46:9-10"],
      },
      {
        heading: "Study",
        body: `Lee Strobel, *The Case for Christ*, chapter on the "fingerprint" of fulfilled prophecy (interview with Louis Lapides).`,
      },
    ],
  },

  {
    id: "trilemma",
    title: "Liar, Lunatic, or Lord",
    sources: ["C.S. Lewis"],
    summary: `People like to call Jesus "just a good teacher." But given what He claimed, that's the one option He didn't leave us.`,
    parts: [
      {
        heading: "The argument",
        body: `Jesus claimed to be God ([[John 8:58]]) and the only way to the Father ([[John 14:6]]). So He was either:
- **A liar.** He knew it was false.
- **A lunatic.** He believed it but was out of His mind.
- **Lord.** He was telling the truth.

A good moral teacher is not on the list.`,
        verses: ["John 8:58", "John 14:6"],
      },
      {
        ask: "Which of those three do you think fits the Jesus of the Gospels?",
      },
      {
        heading: "If they say it's a legend",
        body: `Some say Jesus never claimed to be God. That's where the {{eyewitness evidence|evidence/eyewitness-gospels}} and {{early creeds|evidence/resurrection}} come in.`,
      },
      {
        heading: "Study",
        body: `C.S. Lewis, *Mere Christianity*, Book 2, chapter 3.`,
      },
    ],
  },

  {
    id: "design-creation",
    title: "Creation Needs a Creator",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `A simple, common-sense argument. A building proves there was a builder; creation proves there is a Creator.`,
    parts: [
      {
        heading: "The illustration",
        say: [
          "When you look at a building, how do you know there was a builder?",
          "The building itself is proof. You don't need to meet the builder.",
          "In the same way, creation is proof of a Creator.",
        ],
        verses: ["Hebrews 3:4", "Romans 1:20", "Psalm 19:1"],
      },
      {
        heading: "Other versions",
        body: `- A painting proves there was a painter
- A phone didn't make itself; it's far simpler than a single living cell`,
      },
      {
        heading: "Then go to the conscience",
        body: `Comfort usually doesn't stay here long. Creation shows God exists; the conscience shows we've sinned against Him.`,
        branches: [{ if: "They agree there's probably a God", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `Ray Comfort, *The Way of the Master* and Living Waters' videos with atheists.`,
      },
    ],
  },

  {
    id: "cosmological",
    title: "The Universe Had a Beginning",
    sources: ["William Lane Craig", "Lee Strobel"],
    summary: `The Kalam cosmological argument: whatever begins to exist has a cause. The universe began to exist. So the universe has a cause.`,
    parts: [
      {
        heading: "The argument",
        body: `1. Whatever begins to exist has a cause
2. The universe began to exist
3. So the universe has a cause`,
        verses: ["Genesis 1:1"],
      },
      {
        heading: "Why believe the universe began?",
        body: `- Big Bang cosmology points to a beginning of space, time, and matter
- The universe is running down (it can't have been running forever)`,
      },
      {
        heading: "What the cause must be like",
        body: `Something outside space, time, and matter that caused them: timeless, immaterial, enormously powerful, and personal (it chose to create). That sounds a lot like God.`,
      },
      {
        ask: "Can something come from nothing?",
        body: `If they ask "Who made God?": God didn't begin to exist, so He doesn't need a cause. The argument is about things that *begin*.`,
      },
      {
        heading: "Study",
        body: `William Lane Craig, *On Guard*. Lee Strobel, *The Case for a Creator*.`,
      },
    ],
  },

  {
    id: "fine-tuning",
    title: "A Fine-Tuned Universe",
    sources: ["Lee Strobel"],
    summary: `The laws and constants of physics are set within a narrow range that allows life. Change them slightly and no life could exist anywhere.`,
    parts: [
      {
        heading: "Examples",
        body: `- The strength of gravity
- The cosmological constant (the expansion rate of the universe)
- The ratio of the strength of the forces inside atoms

Physicists across the spectrum, believers and not, acknowledge the fine-tuning. The debate is over what explains it.`,
      },
      {
        heading: "The options",
        body: `- **Chance.** The odds are astronomically against it.
- **Necessity.** Nothing we know says the constants *had* to be these values.
- **Design.** The best explanation.

Some propose an unlimited number of universes (a "multiverse"), but there's no evidence for it, and it would itself need explaining.`,
        verses: ["Psalm 19:1", "Romans 1:20"],
      },
      {
        heading: "Study",
        body: `Lee Strobel, *The Case for a Creator*.`,
      },
    ],
  },

  {
    id: "moral-law",
    title: "The Moral Law",
    sources: ["C.S. Lewis"],
    summary: `Everyone knows some things are really wrong. A real moral law points to a real Moral Lawgiver.`,
    parts: [
      {
        ask: "Is anything really wrong, not just disliked, but actually wrong?",
        body: `Most people say yes (for example, torturing children for fun). Then: "Where does that standard come from?" If there's no God, morality is just opinion or evolution, and nothing is *really* wrong.`,
      },
      {
        heading: "Lewis's observation",
        body: `People everywhere quarrel by appealing to a standard: "That's not fair." They expect the other person to know the standard too. And everyone breaks it.`,
      },
      {
        heading: "Connect it to the Law",
        body: `This leads straight into the {{Way of the Master|paths/way-of-the-master}}: their conscience already agrees with God's commandments ([[Romans 2:15]]). The real problem isn't that they don't know right from wrong. It's that they've done wrong.`,
        verses: ["Romans 2:15", "Romans 1:20"],
      },
      {
        heading: "Study",
        body: `C.S. Lewis, *Mere Christianity*, Book 1.`,
      },
    ],
  },

  {
    id: "argument-from-desire",
    title: "The Argument from Desire",
    sources: ["C.S. Lewis"],
    summary: `We have a longing that nothing in this world satisfies. That suggests we were made for something beyond this world.`,
    parts: [
      {
        heading: "The idea",
        body: `Our natural desires have real objects: hunger and food, thirst and water. But people have a deep longing that no achievement, pleasure, or relationship fully satisfies. Lewis argued that this suggests we were made for another world.`,
        verses: ["Ecclesiastes 3:11"],
      },
      {
        ask: "Have you ever gotten something you really wanted, and found it didn't satisfy like you expected?",
      },
      {
        heading: "Use it gently",
        body: `This works well with people who are restless or disillusioned, more than with debaters. It opens the door to Jesus as the "living water" ([[John 4:10]]).`,
        verses: ["John 4:10"],
      },
      {
        heading: "Study",
        body: `C.S. Lewis, *Mere Christianity*, Book 3, chapter 10 ("Hope").`,
      },
    ],
  },
];
