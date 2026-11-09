// CONVERSATIONS (step-by-step paths)
//
// Paths whose id matches a worldview (or is mapped in PERSON_TALK in js/app.js)
// show as the Conversation tab on that People page. The rest (pro-choice,
// morality) are listed under People > Topics.
// category: "Doubting God", "Other Faiths", "Christians", or "Topics"
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
    category: "Doubting God",
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
          { if: "“Well, no, not 100%”", then: "Then God could exist. Can I show you why I think He does?", go: "step:3" },
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
          { if: "“Science has disproved God”", go: "objections/science-disproves-god" },
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
        branches: [{ if: "“I still don't see any evidence”", go: "objections/no-god" }],
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
        branches: [{ if: "“But something had to make God”", go: "objections/who-made-god" }],
      },
    ],
  },

  // --- Agnostic ---
  {
    id: "agnostic",
    title: "“I don't know if God exists”",
    category: "Doubting God",
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
          { if: "“I just haven't really thought about it”", then: "Fair enough. Can I ask you something?", go: "step:2" },
          { if: "“Nobody can know for sure”", then: "How do you know no one can know?", go: "step:2" },
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
    category: "Christians",
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
          { if: "“Jesus changed everything. I hate my sin now”", go: "step:5" },
          { if: "“Not much, really”", then: "Can I ask you a question about that?", go: "step:3" },
        ],
      },
      {
        heading: "The good person test",
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
    category: "Doubting God",
    sources: ["Greg Koukl", "Ray Comfort", "Cliff Knechtle"],
    summary: `Find out what they mean by “spiritual,” show that “all religions are true” takes a side, and contrast karma with grace. Then go to the Law. Also covers “All religions lead to God.”`,
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
        branches: [{ if: "“They're all basically the same”", go: "objections/all-religions" }],
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
        heading: "The good person test",
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
    category: "Topics",
    sources: ["Russell Hunter", "Abolitionist Rising", "Greg Koukl"],
    summary: `Keep it to one question: what is the unborn? Abortion kills a human being made in God's image, but the real answer is the gospel, for them and for anyone involved in an abortion.`,
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
        branches: [{ if: "“It's not a person yet”", go: "objections/clump-of-cells" }],
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
        branches: [{ if: "“It's a woman's right”", go: "objections/abortion" }],
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
        branches: [{ if: "“It's still not fair to her”", go: "objections/rape-incest" }],
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
        branches: [{ if: "“It's still my body”", go: "objections/my-body" }],
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

  // --- Muslim ---
  {
    id: "muslim",
    title: "“I'm Muslim”",
    category: "Other Faiths",
    sources: ["Cliff Knechtle", "Ray Comfort"],
    summary: `Start with what you share: one God, a coming judgment, and respect for Jesus. Then ask the big question every Muslim has to face: how can a just God forgive sinners?`,
    numbered: true,
    parts: [
      {
        heading: "Common ground",
        say: ["I'd love to hear what you believe. We actually agree on a lot."],
        ask: "What do you think happens on Judgment Day?",
        body: `- **You share a lot:** one Creator, prophets, a day of judgment, and Jesus born of a virgin.
- **Listen first.** Most Muslims will say God weighs our good and bad deeds.
- **Be respectful.** Don't mock Muhammad or the Qur'an.`,
        branches: [
          { if: "“God weighs our good and bad deeds”", go: "step:2" },
          { if: "“The Bible was corrupted”", go: "step:6" },
        ],
      },
      {
        heading: "The scales",
        ask: "How do you know your good deeds will outweigh your bad?",
        say: ["If a judge let a criminal go because he'd done some good things, would that judge be just?"],
        body: `- **Good deeds don't cancel crimes.** A just judge has to punish wrongdoing ([[Proverbs 17:15]]).
- **One broken law is enough** to make us guilty ([[James 2:10]]).
- **Most Muslims have no assurance.** Gently let that sink in.`,
        verses: ["Proverbs 17:15", "James 2:10"],
        branches: [
          { if: "“God is merciful”", go: "step:3" },
          { if: "“I can't know for sure”", go: "step:3" },
        ],
      },
      {
        heading: "Just and merciful",
        say: [
          "That's the big question: how can God be perfectly just and still forgive?",
          "The gospel's answer is the cross. Someone else paid the fine.",
        ],
        body: `- **Mercy without justice** would make God unjust.
- **At the cross** God punished sin and showed mercy at the same time ([[Romans 3:26]]).
- **Jesus said** He came to give His life as a ransom ([[Mark 10:45]]).`,
        verses: ["Romans 3:26", "2 Corinthians 5:21", "Mark 10:45"],
        branches: [
          { if: "“How would that work?”", go: "step:4" },
          { if: "“Jesus wasn't crucified”", go: "step:7" },
          { if: "“God can't have a son”", go: "step:8" },
        ],
      },
      {
        heading: "Who is Jesus?",
        say: ["Jesus didn't only claim to be a prophet. He forgave sins and accepted worship."],
        ask: "Who can forgive sins but God alone?",
        body: `- **He forgave sins**, and the religious leaders knew what that meant ([[Mark 2:5-7]]).
- **He accepted worship.** Thomas called Him “my Lord and my God” ([[John 20:28]]).
- **He used God's name** for Himself ([[John 8:58]]).`,
        verses: ["Mark 2:5-7", "John 20:28", "John 8:58"],
        branches: [
          { if: "“The Bible was corrupted”", go: "step:6" },
          { if: "“God can't have a son”", go: "step:8" },
        ],
      },
      {
        heading: "Go to the Law",
        say: ["You take God's commands seriously. Can I ask how you've done with them?"],
        ask: "Have you ever told a lie?",
        body: `- **Muslims believe in judgment**, so the Law lands well.
- **Once they see they can't balance the scales**, the cross is the answer to their real problem.`,
        verses: ["Romans 3:20", "James 2:10"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master/3" }],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“The Bible was corrupted”",
        detour: true,
        next: 4,
        say: [
          "The Qur'an tells Christians to judge by the Gospel. That means it was reliable in Muhammad's day.",
          "And we have copies of the Bible from centuries before Muhammad.",
        ],
        ask: "When do you think it was changed?",
        body: `- **The Qur'an trusts the earlier Scriptures:** Surah 5:47 and 10:94.
- **The Qur'an says no one can change God's words** (Surah 6:115). So who changed them?
- **Manuscripts from before Muhammad** say what our Bibles say today.`,
        verses: ["Isaiah 40:8", "Matthew 24:35"],
        branches: [{ if: "“It was changed before Muhammad”", go: "evidence/bible-reliability" }],
      },
      {
        heading: "“Jesus wasn't crucified”",
        detour: true,
        next: 4,
        say: [
          "Almost every historian, even skeptics, agrees Jesus died on a Roman cross.",
          "And Jesus said ahead of time that He came to give His life.",
        ],
        body: `- **Surah 4:157** says it only appeared that He was crucified. That was written about 600 years later.
- **The eyewitness accounts** and early non-Christian historians all say He died.
- **Then He rose.** See the evidence for the resurrection.`,
        verses: ["Mark 10:45", "1 Corinthians 15:3-4"],
        branches: [{ if: "“What's the evidence?”", go: "evidence/resurrection" }],
      },
      {
        heading: "“God can't have a son”",
        detour: true,
        next: 4,
        say: [
          "We agree. God didn't take a wife and have a child. That's not what Christians mean.",
          "“Son of God” means Jesus shares God's nature, the way a son shares his father's.",
        ],
        body: `- **Not a physical son.** Jesus was conceived by the Holy Spirit ([[Luke 1:35]]).
- **One God, three persons**, not three gods. Christians don't worship Mary.
- **The Word was God** and became flesh ([[John 1:1]], [[John 1:14]]).`,
        verses: ["Luke 1:35", "John 1:1", "John 1:14", "Matthew 28:19"],
      },
    ],
  },

  // --- Mormon ---
  {
    id: "mormon",
    title: "“I'm Mormon”",
    category: "Other Faiths",
    sources: ["Greg Koukl", "Ray Comfort"],
    summary: `Latter-day Saints use the same words Christians do, but often mean something different. Define terms, then talk about grace, the nature of God, and God's perfect standard.`,
    numbered: true,
    parts: [
      {
        heading: "Define terms",
        say: ["I'd love to understand what you believe."],
        ask: "When you say “Jesus” and “saved,” what do you mean?",
        body: `- **Same words, different meanings.** In LDS teaching, Jesus is the spirit brother of Lucifer, God was once a man, and “salvation” is different from “exaltation.”
- **Use Columbo.** Ask, don't assume.
- **Be kind.** Missionaries are often young, sincere, and far from home.`,
        branches: [
          { if: "“We believe in Jesus too”", go: "step:7" },
          { if: "“We're saved by grace”", go: "step:2" },
        ],
      },
      {
        heading: "Grace “after all we can do”",
        ask: "Do you think you've done all you can do?",
        say: ["The Book of Mormon says we're saved by grace “after all we can do.”"],
        body: `- **2 Nephi 25:23** puts grace after our best efforts.
- **Most Latter-day Saints will honestly say no.** That's the opening.
- **The Bible says grace is a gift.** If it's earned, it isn't grace ([[Romans 11:6]]).`,
        verses: ["Ephesians 2:8-9", "Romans 11:6"],
        branches: [
          { if: "“No, I haven't”", go: "step:3" },
          { if: "“I'm trying my best”", go: "step:3" },
        ],
      },
      {
        heading: "Eternal life is a gift",
        say: ["The Bible says eternal life is a free gift, not a reward."],
        ask: "Do you know you have eternal life?",
        body: `- **A gift you receive**, not wages you earn ([[Romans 6:23]]).
- **Not by our deeds**, even our good ones ([[Titus 3:5]]).
- **You can know** you have it ([[1 John 5:13]]).`,
        verses: ["Romans 6:23", "Titus 3:5", "1 John 5:13"],
        branches: [{ if: "“I've felt the Spirit confirm it”", go: "step:6" }],
      },
      {
        heading: "Who is God?",
        say: ["The Bible says there's only one God, and He has always been God."],
        ask: "Was God ever a man?",
        body: `- **LDS teaching:** God was once a man who became God, and faithful members can be exalted too.
- **The Bible:** there is no other God, before or after ([[Isaiah 43:10]]). God is not a man ([[Numbers 23:19]]). He is God from everlasting ([[Psalm 90:2]]).
- **Keep it short.** Don't turn this into a debate. Move to the Law.`,
        verses: ["Isaiah 43:10", "Isaiah 44:6", "Numbers 23:19", "Psalm 90:2"],
      },
      {
        heading: "Go to the Law",
        say: ["God's standard is perfect obedience. Can I ask how you're doing with the Ten Commandments?"],
        ask: "Have you ever told a lie?",
        body: `- **The Law shuts every mouth.** If we have to keep all of it, we're cursed ([[Galatians 3:10]]).
- **Then the cross:** Jesus kept it perfectly and paid for those who didn't.`,
        verses: ["James 2:10", "Galatians 3:10"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master/3" }],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“I've felt the burning in the bosom”",
        detour: true,
        next: 4,
        say: [
          "I don't doubt you felt something real.",
          "But feelings can mislead us. God tells us to test everything by His Word.",
        ],
        ask: "If your feelings and the Bible disagreed, which would you trust?",
        body: `- **The heart can deceive** ([[Jeremiah 17:9]]).
- **A way can seem right** and still be wrong ([[Proverbs 14:12]]).
- **Even an angel's message** must match the gospel ([[Galatians 1:8]]).`,
        verses: ["Jeremiah 17:9", "Proverbs 14:12", "Galatians 1:8"],
      },
      {
        heading: "“We believe in Jesus too”",
        detour: true,
        next: 2,
        say: [
          "I'm glad. Can I ask which Jesus?",
          "The Bible's Jesus is eternal God, not a spirit brother of Lucifer.",
        ],
        ask: "Was Jesus ever not God?",
        body: `- **The Word was God** from the beginning ([[John 1:1]]).
- **All the fullness of God** lives in Him ([[Colossians 2:9]]).
- **The Father calls the Son “God”** ([[Hebrews 1:8]]).`,
        verses: ["John 1:1", "Colossians 2:9", "Hebrews 1:8"],
      },
    ],
  },

  // --- Jehovah's Witness ---
  {
    id: "jw",
    title: "“I'm a Jehovah's Witness”",
    category: "Other Faiths",
    sources: ["Greg Koukl", "Ray Comfort"],
    summary: `Jehovah's Witnesses know their Bibles and are trained to answer. Stay friendly, focus on who Jesus is, and ask whether they know they're saved.`,
    numbered: true,
    parts: [
      {
        heading: "Start friendly",
        say: ["I appreciate how seriously you take the Bible."],
        ask: "Can we look at what the Bible says about who Jesus is?",
        body: `- **What they believe:** Jehovah alone is God. Jesus is a created being, Michael the archangel. The Holy Spirit is a force.
- **They use the New World Translation.** Stick to a few clear verses.
- **Stay calm and kind.** They expect hostility.`,
        branches: [
          { if: "“Sure”", go: "step:2" },
          { if: "“Jesus is Michael the archangel”", go: "step:6" },
        ],
      },
      {
        heading: "Who is Jesus?",
        say: [
          "John 1:1 says the Word was God.",
          "Thomas called Jesus “my Lord and my God,” and Jesus didn't correct him.",
        ],
        ask: "If Jesus isn't God, why did He accept worship?",
        body: `- **“A god”:** The New World Translation says “a god” in John 1:1. Then there are two gods, but God says there is no other ([[Isaiah 43:10]]).
- **“I am”:** Jesus used God's name for Himself ([[John 8:58]]).
- **Angels worship Him** ([[Hebrews 1:6]]). Angels only worship God.`,
        verses: ["John 1:1", "John 20:28", "John 8:58", "Hebrews 1:6", "Isaiah 43:10"],
        branches: [
          { if: "“I'll have to think about that”", go: "step:3" },
          { if: "“The Trinity isn't in the Bible”", go: "step:7" },
        ],
      },
      {
        heading: "Do you know you're saved?",
        ask: "Do you know where you'll spend eternity?",
        say: ["The Bible says you can know you have eternal life."],
        body: `- **Most Witnesses aren't sure.** They hope to survive Armageddon and live on a paradise earth if they stay faithful.
- **Only 144,000** go to heaven in their teaching.
- **God's promise:** you can *know* ([[1 John 5:13]], [[John 5:24]]).`,
        verses: ["1 John 5:13", "John 5:24"],
      },
      {
        heading: "Saved by grace",
        say: ["It's not by our works. It's a gift."],
        ask: "Are you sure you've been faithful enough?",
        body: `- **Not of works** ([[Ephesians 2:8-9]]).
- **Not even our righteous deeds** ([[Titus 3:5]]).
- **This is where the Law helps:** no one is faithful enough.`,
        verses: ["Ephesians 2:8-9", "Titus 3:5"],
      },
      {
        heading: "Go to the Law",
        say: ["Can I ask you a few questions about God's commandments?"],
        ask: "Have you ever told a lie?",
        body: `- **The Law shows we need a Savior**, not just better effort ([[Romans 3:20]]).
- **Then the cross:** only God Himself could pay what we owe.`,
        verses: ["Romans 3:20"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master/3" }],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“Jesus is Michael the archangel”",
        detour: true,
        next: 2,
        say: [
          "The Bible says all of God's angels worship Jesus.",
          "Michael wouldn't even rebuke the devil on his own authority. Jesus did it all the time.",
        ],
        body: `- **God never called an angel His Son**, and He commands the angels to worship Him ([[Hebrews 1:6]]).
- **Michael said “The Lord rebuke you”** ([[Jude 1:9]]). Jesus rebuked demons directly.`,
        verses: ["Hebrews 1:6", "Jude 1:9"],
      },
      {
        heading: "“The Trinity isn't in the Bible”",
        detour: true,
        next: 3,
        say: [
          "The word isn't, but the teaching is. One God, three persons.",
          "The Father is called God, and so is the Son.",
        ],
        ask: "If there's only one God, and both are called God, how do you explain that?",
        body: `- **One God** ([[Isaiah 44:6]]).
- **The Son is called God** ([[John 1:1]], [[John 20:28]], [[Hebrews 1:8]]).
- **One name, three persons** ([[Matthew 28:19]]).`,
        verses: ["Isaiah 44:6", "Hebrews 1:8", "Matthew 28:19"],
      },
    ],
  },

  // --- Catholic ---
  {
    id: "catholic",
    title: "“I'm Catholic”",
    category: "Other Faiths",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    summary: `Many Catholics love God and know a lot about Jesus. The key question is how someone is made right with God: by grace through faith alone, or grace plus works and sacraments.`,
    numbered: true,
    parts: [
      {
        heading: "Start respectfully",
        say: ["I'd love to hear about your faith."],
        ask: "If you died today, do you know you'd go to heaven?",
        body: `- **Don't attack the Church.** Focus on the gospel, not on Mary, the Pope, or traditions.
- **Most Catholics say “I hope so.”** That's the opening.`,
        branches: [
          { if: "“I hope so”", go: "step:2" },
          { if: "“Yes, because I'm Catholic”", go: "step:2" },
        ],
      },
      {
        heading: "How do you get to heaven?",
        ask: "What do you think gets someone into heaven?",
        body: `- **Listen.** A common answer: being a good person, going to Mass, and the sacraments.
- **Catholic teaching** says grace comes through faith and the sacraments, and mortal sin can lose it.`,
        branches: [
          { if: "“Being a good person and going to Mass”", go: "step:3" },
          { if: "“I go to confession”", go: "step:6" },
        ],
      },
      {
        heading: "Grace through faith",
        say: [
          "The Bible says we're saved by grace through faith, not by works.",
          "If it's earned, it isn't grace anymore.",
        ],
        body: `- **A gift, not a wage** ([[Ephesians 2:8-9]], [[Romans 4:4-5]]).
- **Grace plus works** isn't grace ([[Romans 11:6]]).
- **Not by our righteous deeds** ([[Titus 3:5]]).`,
        verses: ["Ephesians 2:8-9", "Romans 4:4-5", "Romans 11:6", "Titus 3:5"],
        branches: [{ if: "“Faith without works is dead”", go: "step:7" }],
      },
      {
        heading: "It is finished",
        say: ["On the cross Jesus said, “It is finished.” His sacrifice was once for all."],
        ask: "If Jesus paid it all, what's left for you to pay?",
        body: `- **Paid in full** ([[John 19:30]]).
- **One offering** perfects forever those who are being sanctified ([[Hebrews 10:14]]).
- **Gently:** this is why there's no need for purgatory to finish paying for sin.`,
        verses: ["John 19:30", "Hebrews 10:14"],
      },
      {
        heading: "Go to the Law",
        say: ["The Bible says you can know you have eternal life.", "Can I ask you a few questions to see if you'd be good enough on your own?"],
        ask: "Do you think you're a good person?",
        body: `- **The Law shows no one is good enough**, so trust shifts from self to Christ.
- **Assurance** comes from His work, not ours ([[1 John 5:13]]).`,
        verses: ["1 John 5:13"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master/2" }],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“I go to confession”",
        detour: true,
        next: 3,
        say: [
          "Confessing sin is good. The Bible says to confess to God, and He forgives.",
          "But forgiveness rests on what Jesus did, not on our penance.",
        ],
        ask: "Do you know your sins are fully forgiven, or only until next time?",
        body: `- **Confess to God** ([[1 John 1:9]]).
- **One mediator:** Jesus ([[1 Timothy 2:5]]).
- **His one sacrifice** is enough ([[Hebrews 10:14]]).`,
        verses: ["1 John 1:9", "1 Timothy 2:5", "Hebrews 10:14"],
      },
      {
        heading: "“Faith without works is dead”",
        detour: true,
        next: 4,
        say: [
          "Agreed. Real faith always produces good works.",
          "But works are the fruit of being saved, not the root.",
        ],
        body: `- **James is about showing** that faith is real. Even demons believe ([[James 2:19]]).
- **Paul says the same thing:** saved by grace ([[Ephesians 2:8-9]]), *for* good works ([[Ephesians 2:10]]).`,
        verses: ["James 2:19", "Ephesians 2:8-9", "Ephesians 2:10"],
      },
    ],
  },

  // --- Jewish ---
  {
    id: "jewish",
    title: "“I'm Jewish”",
    category: "Other Faiths",
    sources: ["Ray Comfort", "Lee Strobel"],
    summary: `You share the Hebrew Scriptures. Stay in them: the need for atonement, Isaiah 53, and the Messiah. Then go to the Law they already know.`,
    numbered: true,
    parts: [
      {
        heading: "Common ground",
        say: ["I really respect the Hebrew Scriptures. We share them."],
        ask: "Are you religious, or more cultural?",
        body: `- **Find out where they are.** Many Jewish people are secular.
- **Use the Hebrew Bible.** Its verses carry more weight than the New Testament.
- **Never imply blame** for Jesus' death. We all put Him there.`,
        branches: [
          { if: "“I'm observant” / “Somewhat religious”", go: "step:2" },
          { if: "“More cultural”", go: "step:7" },
        ],
      },
      {
        heading: "Atonement",
        say: ["The Torah says atonement requires blood."],
        ask: "Since the temple was destroyed, how are sins atoned for now?",
        body: `- **The life is in the blood**, given for atonement ([[Leviticus 17:11]]).
- **No temple since AD 70.** Most rabbinic teaching now points to prayer, repentance, and good deeds.
- **God promises cleansing** ([[Isaiah 1:18]]). But how?`,
        verses: ["Leviticus 17:11", "Isaiah 1:18", "Hebrews 10:4"],
        branches: [
          { if: "“Yom Kippur is enough”", go: "step:8" },
          { if: "“A man can't die for someone else's sins”", go: "step:9" },
        ],
      },
      {
        heading: "Isaiah 53",
        say: ["Can I read you a passage, and you tell me who it's about?"],
        body: `- **Read it without the reference.** Many people assume it's from the New Testament.
- **The servant is innocent** ([[Isaiah 53:9]]) and suffers for the sins of others ([[Isaiah 53:5]], [[Isaiah 53:8]]).
- **If they say it's about Israel:** the servant is sinless and dies for “my people.” That can't be the nation.`,
        verses: ["Isaiah 53:5", "Isaiah 53:6", "Isaiah 53:8", "Isaiah 53:9"],
        branches: [{ if: "“Who is it about?”", go: "step:4" }],
      },
      {
        heading: "The Messiah",
        say: ["Jesus was born in Bethlehem, was pierced, died for sins, and rose again, just as the prophets said."],
        body: `- **Bethlehem** ([[Micah 5:2]]).
- **Pierced hands and feet** ([[Psalm 22:16]]).
- **A new covenant** that forgives sin ([[Jeremiah 31:31]]).
- **Daniel 9** puts the Messiah before the temple's destruction. See {{Fulfilled Prophecy|evidence/prophecy}}.`,
        verses: ["Micah 5:2", "Psalm 22:16", "Jeremiah 31:31"],
        branches: [
          { if: "“There's no world peace, so He's not the Messiah”", go: "step:6" },
          { if: "“What would my family think?”", go: "step:10" },
          { if: "“What's the evidence?”", go: "evidence/prophecy" },
        ],
      },
      {
        heading: "Go to the Law",
        say: ["You know the Ten Commandments better than most people. How do you think you've done?"],
        ask: "Have you ever told a lie?",
        body: `- **Stay in the Torah:** Exodus 20.
- **No one is righteous** on their own ([[Isaiah 64:6]]).
- **Then the cross:** the Messiah is the atonement.`,
        verses: ["Exodus 20:16", "Exodus 20:15", "Isaiah 64:6"],
        branches: [
          { if: "Ready to go through the Law", go: "paths/way-of-the-master/3" },
          { if: "“So I'm as bad as a murderer?”", go: "objections/same-as-murderer" },
        ],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“There's no world peace”",
        detour: true,
        next: 5,
        say: [
          "The prophets describe the Messiah suffering and also reigning.",
          "Jesus came first to deal with sin. He'll return to bring peace.",
        ],
        body: `- **Suffering servant** ([[Isaiah 53:5]]) and **Prince of Peace** ([[Isaiah 9:6]]).
- **Two comings:** first to bear sin, then to reign ([[Hebrews 9:28]]).`,
        verses: ["Isaiah 53:5", "Isaiah 9:6", "Hebrews 9:28"],
      },
      {
        heading: "“I'm Jewish culturally, not religiously”",
        detour: true,
        next: 5,
        say: ["That's common. Can I ask what you think happens after we die?"],
        body: `- **Treat it like a conversation with an agnostic or atheist.**
- **If suffering comes up** (often the Holocaust), listen first. Their longing for justice is a bridge: if nothing happens after death, the guilty walk free. The Hebrew Bible says the dead will rise to life or to contempt ([[Daniel 12:2]]).
- **Go to the conscience.** They know lying and stealing are wrong ([[Romans 2:15]]).`,
        verses: ["Romans 2:15", "Daniel 12:2"],
        branches: [
          { if: "“I don't believe in God”", go: "paths/way-of-the-master/9" },
          { if: "Ready to go through the Law", go: "paths/way-of-the-master/2" },
        ],
      },
      {
        heading: "“Yom Kippur is enough”",
        detour: true,
        next: 3,
        say: ["Repentance is real and important. But if a guilty man says sorry in court, does a good judge let him go?"],
        ask: "On Yom Kippur, who pays for the sin?",
        body: `- **Respect it.** People take it seriously; don't call it informal.
- **The judge:** being sorry doesn't pay the fine.
- **Blood was always required** ([[Leviticus 17:11]]). With no temple and no sacrifice, the fine is unpaid.`,
        verses: ["Leviticus 17:11", "Ezekiel 18:4"],
      },
      {
        heading: "“A man can't die for someone else's sins”",
        detour: true,
        next: 3,
        say: [
          "You're right, it is a sacrifice. Think about Passover: the lamb died so the firstborn would live.",
          "Jesus had no sin of His own to pay for, so He could pay for yours.",
        ],
        ask: "Can I read you something from your own Scriptures?",
        body: `- **Agree it's a sacrifice.** Arguing about the word gets you stuck.
- **The Torah already has a substitute:** the Passover lamb ([[Exodus 12:13]]) and the Yom Kippur goat carrying Israel's sins (Leviticus 16).
- **Isaiah 53:** the servant is pierced for our transgressions ([[Isaiah 53:5]], [[Isaiah 53:6]]).
- **Why one death pays for many:** who died. A sinless man owed nothing, and as God in the flesh His life is worth more than all our sins.
- **Not pagan sacrifice:** no one forced Him. God came Himself, like the judge paying the fine.
- **Ezekiel 18** says each person answers for their own sin instead of blaming their fathers ([[Ezekiel 18:20]]). It doesn't rule out God providing a substitute.
- **Answer first.** If they ask sincerely, don't turn it back with a question.`,
        verses: ["Exodus 12:13", "Isaiah 53:5", "Isaiah 53:6", "Ezekiel 18:20"],
      },
      {
        heading: "“What would my family think?”",
        detour: true,
        next: 5,
        say: ["I understand. That's a real cost.", "Jesus and all His first followers were Jewish. Trusting the Jewish Messiah isn't leaving your people."],
        body: `- **Be gentle.** For many, especially Holocaust families, this is deeply personal.
- **Many Jewish believers (Messianic Jews)** keep their heritage.
- **Don't push.** Ask them to read Isaiah 53 and a Gospel, and to pray.`,
        verses: ["Romans 1:16"],
      },
    ],
  },

  // --- Morality is just opinion (the moral argument) ---
  {
    id: "morality",
    title: "“Morality is just opinion”",
    category: "Topics",
    sources: ["C.S. Lewis", "Greg Koukl", "Ray Comfort"],
    summary: `The moral argument, step by step. Everyone knows some things are really wrong. A real moral law above all of us points to a Moral Lawgiver, and it shows us we've broken His law.`,
    numbered: true,
    parts: [
      {
        heading: "Is anything really wrong?",
        ask: "Do you think anything is really wrong, not just something you dislike?",
        say: ["Like torturing a child for fun?"],
        body: `- **Pick a clear case.** Almost no one will call child torture “just a preference.”
- **Let them say it.** Once they agree something is truly wrong, they've admitted a moral standard that isn't just opinion.`,
        branches: [
          { if: "“Yes, of course that's wrong”", go: "step:2" },
          { if: "“No, it's all opinion”", go: "step:6" },
        ],
      },
      {
        heading: "Where does that come from?",
        ask: "Where does that “really wrong” come from?",
        body: `There are only a few options:
- **Personal feeling.** Then it's just your taste, like preferring vanilla. Torturing a child would only be wrong *for you*.
- **Society.** Then whatever a culture approves is right. See the side step.
- **Evolution.** That explains why we *feel* things, not why we *ought* to do them. See the side step.
- **A standard above all of us.** That's the only option that makes it *really* wrong.`,
        branches: [
          { if: "“Society decides”", go: "step:7" },
          { if: "“Evolution gave us morality”", go: "step:8" },
          { if: "“It has to be bigger than us”", go: "step:3" },
        ],
      },
      {
        heading: "A law needs a lawgiver",
        say: [
          "If there's a real moral law above all of us, then someone put it there.",
          "A law points to a lawgiver. That's God.",
        ],
        body: `**The argument in three lines:**
1. If there is no God, nothing is really right or wrong. It's all opinion.
2. But some things really are wrong. We all know it.
3. So God exists.

You don't need to say it this formally. Just walk them through it with questions.`,
        verses: ["Romans 2:14", "Romans 2:15"],
        branches: [
          { if: "“But why is God's opinion any better?”", go: "step:9" },
        ],
      },
      {
        heading: "You already know it",
        say: [
          "That's why your conscience bothers you when you lie or steal.",
          "The Bible says God wrote His law on every heart. That's exactly what we see.",
        ],
        body: `- **The Bible predicts this.** People who never read it still know right from wrong ([[Romans 2:14]], [[Romans 2:15]]).
- **This is why it points to the God of the Bible,** not just “a higher power.” He's a moral Lawgiver who will judge by that law ([[Genesis 18:25]]).`,
        verses: ["Romans 2:15", "Genesis 18:25"],
      },
      {
        heading: "Which means we have a problem",
        ask: "If there's a real moral law, have you kept it?",
        body: `This is the turn. The moral argument doesn't just prove God; it shows we're guilty before Him. Move straight into the Law.`,
        branches: [
          { if: "“Nobody's perfect”", go: "paths/way-of-the-master/3" },
          { if: "“I'm a pretty good person”", go: "paths/way-of-the-master/2" },
        ],
      },

      // --- Side steps (only if needed) ---
      {
        heading: "“Nothing is really wrong”",
        detour: true,
        next: 2,
        ask: [
          "So if someone stole your phone right now, that wouldn't really be wrong?",
          "Was slavery wrong, or just unpopular?",
        ],
        body: `- **Nobody lives this way.** The moment they're wronged, they appeal to a real standard: “That's not fair.”
- **It defeats itself.** “You shouldn't push your morals on others” is itself a moral rule for everyone. See {{Suicide|skills/suicide}}.
- **Be gentle.** You're not trying to win, just showing they already believe in right and wrong.`,
        verses: ["Isaiah 5:20"],
        branches: [
          { if: "“OK, some things are wrong”", go: "step:2" },
          { if: "“I still say it's all opinion”", go: "objections/morality-relative" },
        ],
      },
      {
        heading: "“Society decides”",
        detour: true,
        next: 3,
        ask: [
          "Then when a society approved of slavery, was slavery right?",
          "Were the abolitionists wrong for going against their society?",
        ],
        body: `- **Reformers prove the point.** We praise people like William Wilberforce and Martin Luther King Jr. because they stood for a right that was *above* their society.
- **Moral progress needs a fixed target.** You can only say a society got *better* if there's a standard it's moving toward.`,
        verses: ["Judges 21:25"],
      },
      {
        heading: "“Evolution gave us morality”",
        detour: true,
        next: 3,
        say: ["Evolution might explain why we feel something. It can't tell us what we ought to do."],
        ask: ["If torturing a child helped someone survive, would that make it right?"],
        body: `- **Feelings aren't obligations.** Survival instincts describe what we do, not what we should do.
- **C.S. Lewis's point:** the moral law often tells us to go *against* our strongest instinct, like risking ourselves to save a stranger. So it can't just be one of our instincts.
- **If it's only evolution, it's not really wrong;** it's just unhelpful for the species. Most people won't accept that about cruelty.`,
      },
      {
        heading: "“Why is God's opinion any better?”",
        detour: true,
        next: 4,
        say: [
          "Good isn't a rule God follows or something He made up.",
          "It's His own character. God Himself is the standard.",
        ],
        body: `- **The objection (called the Euthyphro dilemma):** Is something good because God commands it (then it's arbitrary), or does God command it because it's good (then goodness is above God)?
- **The answer:** neither. God's commands flow from His nature, which is perfectly good and never changes ([[Psalm 145:17]]).`,
        verses: ["Psalm 145:17"],
      },
    ],
  },
];
