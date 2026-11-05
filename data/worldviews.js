// PEOPLE: Background tab (what each group believes)
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).
// Describe each group's beliefs accurately and charitably.

window.DATA = window.DATA || {};

DATA.worldviews = [
  // --- Atheists ---
  {
    id: "atheist",
    title: "Atheists",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle", "C.S. Lewis"],
    summary: `Many atheists have heard the arguments before and expect a fight. Be friendly, ask good questions, and speak to the conscience, not just the intellect.`,
    parts: [
      {
        heading: "What they believe",
        body: `- Many define atheism as “I lack belief in God,” not “I know there is no God”
- Common reasons: suffering, hypocrisy in the church, science, or a bad church experience
- Many were raised in church and walked away. Ask about their story.
- Most still live as if right and wrong are real`,
      },
      {
        heading: "Questions to ask",
        ask: [
          "Are you 100% sure there's no God?",
          "Where did everything come from?",
          "Is anything really wrong, or just disliked?",
          "What would convince you?",
        ],
        body: `- **Not 100% sure?** Then God could exist. Now you're talking about evidence, not impossibility.
- **Where did it come from?** A building proves a builder; creation proves a Creator ([[Romans 1:20]], [[Hebrews 3:4]]).
- **Real right and wrong?** A real moral law needs a Moral Lawgiver. See {{The Moral Law|evidence/moral-law}}.
- **Nothing would convince them?** Then the issue isn't evidence.`,
        verses: ["Romans 1:20", "Hebrews 3:4", "Psalm 19:1"],
      },
      {
        heading: "Pitfalls",
        body: `- Don't get stuck in an endless debate. Arguments rarely save anyone.
- Don't be smug. Many atheists have been mocked by Christians.
- Don't accept that faith means believing without evidence. Biblical faith is trust in a God who has given evidence ({{The Resurrection|evidence/resurrection}}).`,
      },
      {
        heading: "Go to the Law",
        say: ["Can I ask you a different kind of question? Do you think you're a good person?"],
        body: `- **The real problem is moral, not intellectual.** People suppress what they know about God ([[Romans 1:18]]).
- **Speak to the conscience.** It already agrees with God's Law ([[Romans 2:15]]).
- **Then the cross.** Once they see their sin, Jesus is the answer to their real problem.`,
        verses: ["Romans 1:18", "Romans 2:15"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Ray Comfort, *You Can Lead an Atheist to Evidence, But You Can't Make Him Think*
- Living Waters film *The Atheist Delusion*
- Cliff Knechtle, *Give Me an Answer*`,
      },
    ],
  },

  // --- Agnostics ---
  {
    id: "agnostic",
    title: "Agnostics",
    sources: ["Greg Koukl", "Lee Strobel", "Cliff Knechtle"],
    summary: `“I don't know if God exists.” That can be an honest place to start, but it's a bad place to stay on the most important question there is.`,
    parts: [
      {
        heading: "What they believe",
        body: `- Some mean “I don't know.” Others mean “no one *can* know.” Find out which.
- Many are open but haven't looked very hard
- Some use it to avoid the moral claims God would make on them`,
      },
      {
        heading: "Questions to ask",
        ask: [
          "Do you mean you don't know, or that no one can know?",
          "How much time have you spent looking into it?",
          "If God showed you He's real, would you follow Him?",
        ],
        body: `- **“No one can know”** is itself a claim to know something about God. See {{Suicide|skills/suicide}}.
- **God can be found.** He promises to be found by those who truly seek Him ([[Jeremiah 29:13]], [[Hebrews 11:6]]).
- **Would they follow?** The last question shows whether the issue is evidence or willingness.`,
        verses: ["Jeremiah 29:13", "Hebrews 11:6"],
      },
      {
        heading: "Pitfalls",
        body: `- **Don't pile on arguments.** Point to one strong piece of evidence: the resurrection. If Jesus rose, the question is settled. See {{The Resurrection|evidence/resurrection}}.
- **Don't let “I don't know” be the end.** On something this important, not deciding is still a decision.`,
      },
      {
        heading: "Go to the Law",
        say: ["If God is real, you'll stand before Him one day. Not knowing won't be an excuse."],
        body: `Gently move to the Law. The conscience already knows more than the person admits ([[Romans 2:15]]).`,
        verses: ["Hebrews 9:27", "Romans 2:15"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Lee Strobel, *The Case for Faith* and *The Case for Christ*
- Greg Koukl, *Tactics*`,
      },
    ],
  },

  // --- Muslims ---
  {
    id: "muslim",
    title: "Muslims",
    sources: ["Cliff Knechtle"],
    summary: `Muslims take God seriously and often respect Jesus as a prophet. Be respectful, patient, and clear about who Jesus is and what He did on the cross.`,
    parts: [
      {
        heading: "What they believe",
        body: `- **Tawhid:** God (Allah) is absolutely one. The Trinity sounds to many Muslims like believing in three gods.
- **Muhammad** is the final prophet. The **Qur'an** is God's final, perfect word.
- **Jesus (Isa)** is honored as a great prophet and the Messiah, born of a virgin, who did miracles. But He is not God or God's Son.
- **The cross:** most Muslims believe Jesus was not crucified. Surah 4:157 says it only appeared that way.
- **Salvation:** depends on God's mercy and a person's deeds being weighed. There's no assurance.
- **The Bible:** most believe it has been corrupted over time.`,
      },
      {
        heading: "Where the gospel differs",
        body: `- Jesus is God the Son, not only a prophet ([[John 1:1]], [[John 1:14]], [[John 20:28]])
- Jesus truly died for sins and rose again ([[1 Corinthians 15:3-4]], [[Mark 10:45]])
- Salvation is a free gift, not a scale ([[Ephesians 2:8-9]]), and believers can know they have eternal life ([[1 John 5:11-12]])`,
        verses: ["John 1:1", "John 20:28", "Mark 10:45", "1 John 5:11-12"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "How do you know your good deeds will outweigh your bad?",
          "How can God be just and still forgive sinners?",
          "If God sent the Gospel, when was it corrupted?",
        ],
        body: `- **Good deeds can't cancel crimes.** A just judge can't let them go. God is just *and* forgives, because Jesus paid the penalty ([[Romans 3:26]]).
- **The Qur'an trusts the earlier Scriptures.** It tells Christians to judge by the Gospel (Surah 5:47) and tells Muhammad to ask those who read the earlier Scripture (Surah 10:94). So the Bible was reliable in Muhammad's day, and we have manuscripts far older than that.`,
        verses: ["Romans 3:26"],
      },
      {
        heading: "Pitfalls",
        body: `- **Don't insult Muhammad or the Qur'an.** You'll end the conversation.
- **Respect your Bible.** Don't put it on the ground.
- **Explain the Trinity carefully:** one God in three persons, not three gods. Many Muslims think Christians worship Father, Mary, and Son.
- **Be hospitable and patient.** Many Muslims come to Christ over years of friendship.`,
      },
      {
        heading: "Go to the Law",
        say: ["How have you done with the Ten Commandments?"],
        body: `Muslims believe in judgment, so the Law lands well. Once they see they can't balance the scales, the cross shows how God can be both just and merciful.`,
        verses: ["James 2:10", "Romans 3:20"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Nabeel Qureshi, *Seeking Allah, Finding Jesus*
- Watch how Cliff Knechtle answers Muslim students: respectful, direct, always back to Jesus.`,
      },
    ],
  },

  // --- Mormons ---
  {
    id: "mormon",
    title: "Mormons (LDS)",
    sources: [],
    summary: `Latter-day Saints use Christian words like Jesus, grace, and salvation, but mean different things by them. Define terms, be kind, and focus on the Law and grace.`,
    parts: [
      {
        heading: "What they believe",
        body: `- **God the Father** has a body of flesh and bone and was once a man who progressed to godhood
- **Exaltation:** faithful Latter-day Saints can become gods themselves
- **Jesus** is the firstborn spirit child of Heavenly Father, a separate being from the Father
- **Scripture:** the Bible “as far as it is translated correctly,” plus the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price
- **Restoration:** they believe the true church was lost after the apostles and restored through Joseph Smith
- **Salvation:** almost everyone is resurrected and goes to a kingdom of glory. But the highest level (exaltation in the celestial kingdom) requires temple ordinances and keeping the commandments.
- **Grace:** 2 Nephi 25:23 says saved by grace “after all we can do.” Moroni 10:32 says to deny yourself of *all* ungodliness.`,
      },
      {
        heading: "Where the gospel differs",
        body: `- There is only one God, who has always been God ([[Isaiah 43:10]], [[Isaiah 44:6]], [[Numbers 23:19]])
- Jesus is eternally God, not a created spirit child ([[John 1:1]], [[Colossians 2:9]])
- Grace is a free gift, not a top-up after we've done all we can ([[Ephesians 2:8-9]], [[Romans 4:4-5]])`,
        verses: ["Isaiah 43:10", "Isaiah 44:6", "Colossians 2:9"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "Are you keeping all the commandments?",
          "Have you done “all you can do”?",
          "If you died tonight, would you be in the celestial kingdom?",
        ],
        body: `- **These are honest questions, not traps.** Most sincere Latter-day Saints know they fall short. That opens the door to grace.
- **If they point to a “burning in the bosom”** (Moroni 10:4): feelings can mislead us ([[Jeremiah 17:9]]). God tells us to test teachings against what He has already said ([[Galatians 1:8]]).`,
        verses: ["Jeremiah 17:9", "Galatians 1:8"],
      },
      {
        heading: "Pitfalls",
        body: `- **Define terms.** Ask, “What do you mean by grace? By saved? By Jesus?”
- **Don't mock** temple garments or rituals.
- **Be kind to missionaries.** They're often young and far from home. You may be planting a seed for years.
- **Don't cover every doctrine.** Stay on God and the gospel.`,
      },
      {
        heading: "Go to the Law",
        say: ["The Bible says if you break one commandment, you're guilty of all. How are you doing with them?"],
        body: `Latter-day Saints value commandment keeping, so the Law shows that no one can do “all they can do.” Then present Christ's finished work as a complete gift.`,
        verses: ["James 2:10", "Galatians 3:24"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Bill McKeever and Eric Johnson, *Mormonism 101*
- Mormonism Research Ministry (mrm.org)`,
      },
    ],
  },

  // --- Jehovah's Witnesses ---
  {
    id: "jw",
    title: "Jehovah's Witnesses",
    sources: [],
    summary: `Witnesses are trained, sincere, and committed. Read the Bible with them, one topic at a time, and focus on who Jesus is and whether they can know they're saved.`,
    parts: [
      {
        heading: "What they believe",
        body: `- **Jehovah** alone is the true God. They reject the Trinity.
- **Jesus** was God's first creation. Before coming to earth He was Michael the archangel.
- **The holy spirit** is God's active force, not a person.
- Jesus died on a stake and was raised as a spirit, not in His body.
- **144,000** anointed believers go to heaven. Most Witnesses hope to live forever on a paradise earth.
- **No hell:** the wicked cease to exist.
- **The Watchtower** organization and its Governing Body are seen as God's channel of truth.
- They use the **New World Translation**, which renders John 1:1 as “the Word was a god.”`,
      },
      {
        heading: "Where the gospel differs",
        body: `- Jesus is fully God ([[John 1:1]], [[John 8:58]], [[John 20:28]], [[Colossians 2:9]])
- The Father calls the Son “God” ([[Hebrews 1:8]]) and commands angels to worship Him ([[Hebrews 1:6]])
- Salvation is a gift received by faith, with assurance ([[1 John 5:13]])`,
        verses: ["Hebrews 1:6", "Hebrews 1:8", "John 20:28", "Colossians 2:9"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "Can we read Hebrews 1:6 in your Bible?",
          "Should angels worship an angel?",
          "Can you know you have eternal life?",
          "Are you one of the 144,000?",
        ],
        body: `- **Hebrews 1:6:** even the New World Translation says angels “do obeisance” to the Son. Only God receives worship.
- **John 20:28:** Thomas calls Jesus “My Lord and my God,” and Jesus accepts it.
- **The 144,000:** the Watchtower teaches that Jesus is mediator of the new covenant for the anointed. Many Witnesses haven't thought through what that means for them ([[1 Timothy 2:5]]).`,
        verses: ["1 Timothy 2:5", "1 John 5:13"],
      },
      {
        heading: "Pitfalls",
        body: `- **Stay on one topic.** Witnesses are trained to move between many.
- **Don't argue Greek grammar** you can't back up.
- **Be warm.** They're often treated rudely at the door.
- **Be patient.** Leaving the organization can cost them family and friends.`,
      },
      {
        heading: "Go to the Law",
        say: ["If you stood before Jehovah today, would you be innocent or guilty?"],
        body: `Witnesses work hard to earn a place in paradise and often have no assurance. The Law shows that work can't pay for sin. Then point to a Savior who paid it all.`,
        verses: ["Romans 3:20", "Ephesians 2:8-9"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Ron Rhodes, *Reasoning from the Scriptures with the Jehovah's Witnesses*`,
      },
    ],
  },

  // --- Catholics ---
  {
    id: "catholic",
    title: "Catholics",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `We share a lot: the Trinity, the deity of Christ, His death and resurrection. The key difference is how a person is made right with God, so keep the focus on grace and assurance.`,
    parts: [
      {
        heading: "What they believe",
        body: `- Catholics hold to the Trinity, the virgin birth, the cross, and the resurrection
- **Justification** is begun at baptism and grows through the sacraments and good works
- **Mortal sin** destroys grace in the soul; it is restored through confession
- **Purgatory** purifies those who die in God's grace but still need cleansing
- **The Mass** re-presents Christ's one sacrifice
- **Authority:** Scripture together with Tradition and the teaching of the Church
- Many Catholics are cultural and don't know or follow official teaching. Ask what *they* believe.`,
      },
      {
        heading: "Where the gospel differs",
        body: `- We are justified by faith apart from works ([[Romans 3:28]], [[Galatians 2:16]], [[Romans 4:4-5]])
- Christ's sacrifice was once for all and fully finished ([[John 19:30]], [[Hebrews 10:14]])
- There is one mediator between God and people ([[1 Timothy 2:5]])
- Believers can know they have eternal life now ([[1 John 5:13]])`,
        verses: ["Romans 3:28", "Romans 4:4-5", "John 19:30", "Hebrews 10:14"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "If you died tonight, do you know you'd go to heaven?",
          "What are you trusting in to get there?",
          "Is what Jesus did on the cross enough on its own?",
        ],
        body: `Listen for answers like “I go to Mass,” “I'm a good person,” or “I hope so.” Those show where their trust really is.`,
      },
      {
        heading: "Pitfalls",
        body: `- **Start with the gospel,** not Mary, the Pope, or purgatory.
- **Don't assume** what an individual believes.
- **Be respectful** of their faith and family traditions.
- **Avoid “Catholics aren't Christians.”** Ask whether *they* have been born again.`,
      },
      {
        heading: "Go to the Law",
        say: ["Do you think you've kept the Ten Commandments?"],
        body: `Most Catholics believe in God, heaven, hell, and the Ten Commandments, so Way of the Master works very well. Once they see they can't earn it, show that Jesus finished the work: “It is finished.”`,
        verses: ["James 2:10", "Ephesians 2:8-9"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Gregg Allison, *Roman Catholic Theology and Practice*
- Catechism of the Catholic Church, sections 1987–2029 (grace and justification), to know what's officially taught`,
      },
    ],
  },

  // --- Jewish people ---
  {
    id: "jewish",
    title: "Jewish People",
    sources: [],
    summary: `Jesus is the Jewish Messiah promised in the Hebrew Scriptures. Be humble about the church's history and let the Scriptures speak.`,
    parts: [
      {
        heading: "What they believe",
        body: `- Jewish people range widely: Orthodox, Conservative, Reform, and secular. Many secular Jews don't believe in God at all.
- The Shema: God is one
- Religious Jews await the Messiah. Most don't believe Jesus is the Messiah.
- Without a temple, atonement is usually understood as repentance, prayer, and good deeds, especially on Yom Kippur
- Many Jewish people carry painful memories of persecution done in Jesus' name`,
      },
      {
        heading: "Where the gospel differs",
        body: `- The Messiah would suffer and die for the sins of others ([[Isaiah 53:5]], [[Isaiah 53:8]], [[Psalm 22:16]])
- God promised a new covenant ([[Jeremiah 31:31]])
- Atonement requires blood ([[Leviticus 17:11]]). Jesus is the final sacrifice.
- The Messiah would come from Bethlehem and is eternal ([[Micah 5:2]])`,
        verses: ["Isaiah 53:5", "Isaiah 53:8", "Leviticus 17:11", "Micah 5:2"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "Can I read you a passage and ask who you think it's about?",
          "How are sins atoned for today without a temple?",
        ],
        body: `- **Read Isaiah 53** without saying where it's from. Many Jewish people have never read it.
- **“The servant is Israel”** is a common Jewish reading. But the servant is innocent ([[Isaiah 53:9]]) and suffers for the sins of “my people” ([[Isaiah 53:8]]).`,
        verses: ["Isaiah 53:9"],
      },
      {
        heading: "Pitfalls",
        body: `- **Never say “the Jews killed Jesus.”** Our sins put Him there, and He laid down His life willingly.
- **Acknowledge** the church's past sins against Jewish people.
- **Present Jesus as the Jewish Messiah,** not as someone asking them to stop being Jewish.
- **Use “Messiah” and “Hebrew Scriptures”** where it helps.`,
      },
      {
        heading: "Go to the Law",
        say: ["The Ten Commandments were given to Israel. Have you kept them?"],
        body: `The Law was given to Israel to lead to the Messiah ([[Galatians 3:24]]). Paul's heart for his own people drove him to preach to “the Jew first” ([[Romans 1:16]]).`,
        verses: ["Galatians 3:24", "Romans 1:16"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Michael Brown, *Answering Jewish Objections to Jesus*
- Jews for Jesus (jewsforjesus.org)`,
      },
    ],
  },

  // --- Spiritual but not religious ---
  {
    id: "spiritual",
    title: "“Spiritual but Not Religious”",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    summary: `Often means “I believe in something, but I don't want rules or organized religion.” Find out what they mean, then show that Jesus offers what religion can't.`,
    parts: [
      {
        heading: "What they believe",
        body: `- God is often seen as energy, the universe, or something inside us
- Truth is personal: “what's true for you may not be true for me”
- Common ideas: karma, reincarnation, manifesting, all paths lead to God
- Many have been hurt by church or religious people
- They often like Jesus but dislike Christians`,
      },
      {
        heading: "Where the gospel differs",
        say: ["Karma says you get what you deserve. Grace says Someone else took what you deserve."],
        body: `- **Karma is bad news.** If it were true, everyone would be in trouble.
- **Grace is better news.** God forgives guilty people because Jesus paid their debt ([[Romans 6:23]]).`,
        verses: ["Romans 6:23", "Matthew 11:28"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "What do you mean by spiritual?",
          "Where does your sense of right and wrong come from?",
          "How do you know your inner voice is trustworthy?",
        ],
        body: `- **Use {{Columbo|skills/columbo}}.** The answers are often vague. Help them see that.
- **“True for you, not for me”** falls apart quickly. See {{Suicide|skills/suicide}}.
- **The heart isn't a reliable guide** ([[Jeremiah 17:9]], [[Proverbs 14:12]]).`,
        verses: ["Jeremiah 17:9", "Proverbs 14:12"],
      },
      {
        heading: "Pitfalls",
        body: `- **Don't defend “religion.”** Jesus confronted religious hypocrites too.
- **Don't argue about crystals or astrology.** Get to Jesus.
- **Listen to their church hurt** before you answer.`,
      },
      {
        heading: "Go to the Law",
        say: ["Do you think you're a good person?"],
        body: `Most believe in being a good person, so the Law is a natural next step ({{I'm a good person|objections/good-person}}). Their conscience already agrees with God ([[Romans 2:15]]).`,
        verses: ["Romans 2:15", "John 14:6"],
        branches: [{ if: "Ready to go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Francis Beckwith and Greg Koukl, *Relativism: Feet Firmly Planted in Mid-Air*`,
      },
    ],
  },

  // --- Cultural Christians ---
  {
    id: "nominal",
    title: "Cultural Christians",
    sources: ["Ray Comfort", "Mark Spence", "Living Waters"],
    summary: `“I'm already a Christian.” Some are, many aren't. Don't assume either way; help them examine themselves.`,
    parts: [
      {
        heading: "What they believe",
        body: `- They may have grown up in church, been baptized, or prayed a prayer as a child
- They often believe in God and call themselves Christians, but show no sign of a changed life
- Common trust: “I'm a good person,” “I believe in God,” “I prayed the prayer”
- Jesus warned that many who call Him Lord will be turned away ([[Matthew 7:21-23]])`,
        verses: ["Matthew 7:21-23"],
      },
      {
        heading: "Questions to ask",
        ask: [
          "When did you become a Christian?",
          "Are you born again? What does that mean to you?",
          "If you died tonight, why should God let you into heaven?",
          "Do you read your Bible?",
          "Do you still love sin?",
        ],
        body: `- **Listen for what they trust:** Christ, or something they did.
- **Red flags:** “Because I'm a good person” or “because I go to church.”
- **Why it matters:** Ray Comfort warns that false conversion is one of the biggest problems in the church.`,
      },
      {
        heading: "Examine yourself",
        say: ["The Bible tells us to test ourselves to see if we're really in the faith."],
        body: `Point them to Scripture's tests, not your opinion:
- Do you obey God's commands? ([[1 John 2:3-4]])
- Has your life changed? ([[2 Corinthians 5:17]])
- Is your faith more than what the demons believe? ([[James 2:19]])

Encourage them to read 1 John, which was written so believers can *know* they have eternal life ([[1 John 5:13]]).`,
        verses: ["2 Corinthians 13:5", "1 John 2:3-4", "James 2:19", "Matthew 7:13-14"],
      },
      {
        heading: "Pitfalls",
        body: `- **Don't tell someone they're not saved.** You can't see their heart. Let Scripture do that.
- **Don't give false assurance either.** “You prayed a prayer, so you're fine” can be deadly.
- **Don't rush to the sinner's prayer.** Repentance and faith matter, not words.`,
      },
      {
        heading: "Go to the Law",
        say: ["Would you mind if we went through a few of the Ten Commandments?"],
        body: `- **This is what the Law is for.** It shows whether someone has truly repented or just added Jesus to their life.
- **Go through it like you would with anyone.** Many cultural Christians have never understood that they're guilty before God.`,
        verses: ["Galatians 3:24", "Romans 3:20"],
        branches: [{ if: "Go through the Law", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `- Ray Comfort, *Hell's Best Kept Secret* (free audio message from Living Waters)
- Ray Comfort and Kirk Cameron, *The Way of the Master*`,
      },
    ],
  },
];
