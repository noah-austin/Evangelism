// MY CONVICTIONS
//
// Personal positions on topics, worked out from Scripture.
// Same format as paths: title, summary, and parts (heading, say, ask, body, verses, branches).
// Each page: category, My view, supporting sections, How Christians differ, If someone asks.

window.DATA = window.DATA || {};

DATA.convictionCategories = [
  "Scripture & Creation",
  "Salvation",
  "Church & Christian Living",
  "Ethics & Society",
  "Last Things",
];

DATA.convictions = [
  // --- Creation ---
  {
    id: "creation",
    title: "Creation & Literal Days",
    category: "Scripture & Creation",
    summary: `God created everything in six literal days, a few thousand years ago, and He made it mature from the start.`,
    parts: [
      {
        heading: "My view",
        body: `God created the heavens and the earth in six literal, 24-hour days. “Evening and morning” plus a numbered day means a normal day. Death came into the world through Adam's sin, not before it.`,
        verses: ["Genesis 1:1", "Exodus 20:11", "Romans 5:12", "Mark 10:6"],
      },
      {
        heading: "A mature creation",
        body: `God may have made the earth already mature, with the appearance of age:
- **Trees were created bearing fruit** ([[Genesis 1:11-12]]), not as seeds.
- **Adam was created a grown man** ([[Genesis 2:7]]), not a baby.
- **Jesus made aged wine in a moment** ([[John 2:9-10]]). The headwaiter judged it the best wine, with no years of aging behind it.

**So a young creation can still look old.** That isn't deception; it's a working world made ready to live in from day one.`,
        verses: ["Genesis 1:11-12", "Genesis 2:7", "John 2:9-10"],
      },
      {
        heading: "Why it matters",
        body: `- **The gospel depends on Genesis.** If death existed for millions of years before Adam, then death isn't the result of sin, and Christ's victory over death loses its meaning ([[Romans 5:12]]).
- **Jesus took Genesis literally.** He placed humans “from the beginning of creation” ([[Mark 10:6]]).`,
      },
      {
        heading: "How Christians differ",
        body: `Old-earth Christians read the days as long ages (day-age), see a gap between Genesis 1:1 and 1:2 (gap theory), or read Genesis 1 as a literary framework rather than a timeline. They still affirm God as Creator.`,
      },
      {
        heading: "If someone asks",
        say: ["I take Genesis at face value. Jesus and Moses both did."],
      },
    ],
  },

  // --- Drinking ---
  {
    id: "drinking",
    title: "Drinking & Drunkenness",
    category: "Church & Christian Living",
    summary: `Drinking is not a sin. Being drunk is.`,
    parts: [
      {
        heading: "My view",
        body: `Drinking alcohol isn't a sin in itself. Jesus made wine, and good wine ([[John 2:9-10]]), and Scripture calls wine one of God's gifts ([[Psalm 104:15]]). Drunkenness is a sin. We're to be filled with the Spirit, not controlled by alcohol ([[Ephesians 5:18]]).`,
        verses: ["Ephesians 5:18", "John 2:9-10", "Psalm 104:15"],
      },
      {
        heading: "Using freedom wisely",
        body: `- **Don't be mastered by it** ([[1 Corinthians 6:12]]).
- **Don't cause someone to stumble,** like a new believer or someone who struggles with alcohol ([[Romans 14:21]]).
- **Respect its danger** ([[Proverbs 20:1]]).`,
        verses: ["1 Corinthians 6:12", "Romans 14:21", "Proverbs 20:1"],
      },
      {
        heading: "How Christians differ",
        body: `Many Christians hold to total abstinence, out of wisdom about alcohol's dangers, its damage to families, warnings like Proverbs 23, or love for those who struggle. Some also argue biblical wine was weaker than today's drinks.`,
      },
      {
        heading: "If someone asks",
        say: ["Wine isn't evil, but being controlled by anything other than the Spirit is."],
      },
    ],
  },

  // --- Infallibility ---
  {
    id: "infallibility",
    title: "Infallibility of Scripture",
    category: "Scripture & Creation",
    summary: `The Bible is God's Word, without error in all it teaches, and the final authority for faith and life.`,
    parts: [
      {
        heading: "My view",
        body: `The Bible is God's Word. In its original writings it is without error in everything it teaches: about God, salvation, history, and the world. It is the final authority over tradition, feelings, and experience.`,
        verses: ["2 Timothy 3:16", "2 Peter 1:20-21", "Psalm 119:160"],
      },
      {
        heading: "Inspired",
        body: `Scripture is “God-breathed” ([[2 Timothy 3:16]]). Men wrote it, in their own styles, but they were carried along by the Holy Spirit ([[2 Peter 1:20-21]]). So the words are fully human and fully God's.`,
      },
      {
        heading: "Without error",
        body: `- **God cannot lie** ([[Titus 1:2]]). If the Bible is His Word, it can't be wrong.
- **The whole of it is true,** not just the spiritual parts ([[Psalm 119:160]], [[John 17:17]]).`,
        verses: ["Titus 1:2", "John 17:17"],
      },
      {
        heading: "Jesus' view of Scripture",
        body: `- He said Scripture “cannot be broken” ([[John 10:35]]).
- He said not the smallest letter would pass away ([[Matthew 5:18]]).
- He treated Adam, Noah, Jonah, and Moses as real history.

If we follow Jesus, we take Scripture the way He did.`,
        verses: ["John 10:35", "Matthew 5:18"],
      },
      {
        heading: "Preserved",
        body: `God promised His Word would stand forever ([[Isaiah 40:8]]). We have thousands of early manuscripts. The differences between them are mostly spelling and word order, and none changes a core teaching. See {{Has the Bible Been Changed?|evidence/bible-reliability}}.`,
        verses: ["Isaiah 40:8"],
      },
      {
        heading: "Sufficient",
        body: `Scripture gives us everything we need to know God, be saved, and live a godly life ([[2 Timothy 3:16]]). We don't need new revelation to add to it.`,
      },
      {
        heading: "What about contradictions?",
        body: `Most “contradictions” are different witnesses telling the same event from different angles, or details read out of context. See {{“The Bible is full of contradictions”|objections/bible-contradictions}}.`,
      },
      {
        heading: "How Christians differ",
        body: `Some hold the Bible is reliable on faith and morals but not necessarily on history or science (“limited inerrancy”). Others see it as a human record of encounters with God rather than His very words.`,
      },
      {
        heading: "If someone asks",
        say: ["If God is real and He spoke, He can make sure what He said gets through."],
      },
    ],
  },

  // --- Baptism ---
  {
    id: "baptism",
    title: "Baptism",
    category: "Salvation",
    summary: `Baptism is for believers, by immersion, as an act of obedience. It doesn't save; faith in Christ does.`,
    parts: [
      {
        heading: "My view",
        body: `Baptism is for people who have already repented and believed. It's done by immersion, a public picture of dying and rising with Christ ([[Romans 6:3-4]]). It's a step of obedience Jesus commands ([[Matthew 28:19]]), but it doesn't save. Faith in Christ does ([[Ephesians 2:8-9]]).`,
        verses: ["Matthew 28:19", "Romans 6:3-4", "Ephesians 2:8-9"],
      },
      {
        heading: "Why believers first",
        body: `- **In Acts, belief comes first, then baptism** ([[Acts 2:38]], [[Acts 8:36-38]]).
- **The thief on the cross** was promised paradise without being baptized ([[Luke 23:42-43]]).`,
        verses: ["Acts 2:38", "Acts 8:36-38", "Luke 23:42-43"],
      },
      {
        heading: "How Christians differ",
        body: `- **Infant baptism** (Catholic, Lutheran, Presbyterian, Anglican), often seen as a sign of the covenant like circumcision.
- **Baptismal regeneration:** some groups teach baptism is necessary for salvation.
- **Mode:** some baptize by pouring or sprinkling.`,
      },
      {
        heading: "If someone asks",
        say: ["It's like a wedding ring. It shows the marriage; it doesn't make it."],
      },
    ],
  },

  // --- Church ---
  {
    id: "church",
    title: "The Church",
    category: "Church & Christian Living",
    summary: `The church is God's people, not a building. Every believer belongs in a local, Bible-teaching church.`,
    parts: [
      {
        heading: "My view",
        body: `The church is the people of God, the body of Christ ([[1 Corinthians 12:27]]), not a building. Every believer should be committed to a local, Bible-teaching church for worship, teaching, fellowship, communion, prayer, and serving one another ([[Acts 2:42]]). “Just me and Jesus” isn't the New Testament pattern.`,
        verses: ["Hebrews 10:24-25", "Acts 2:42", "1 Corinthians 12:27"],
      },
      {
        heading: "Why it matters",
        body: `- **We grow together.** Leaders equip believers to serve ([[Ephesians 4:11-12]]).
- **We need encouragement and accountability** ([[Hebrews 10:24-25]]).`,
        verses: ["Ephesians 4:11-12"],
      },
      {
        heading: "How Christians differ",
        body: `Christians agree the church matters but differ on its shape: who leads it (bishops, elders, or the congregation), how formal membership is, and how much weight tradition carries. Some also see house churches or small groups as a full expression of church.`,
      },
      {
        heading: "If someone asks",
        say: ["You can't follow Jesus and skip His family."],
      },
    ],
  },

  // --- Homosexuality ---
  {
    id: "homosexuality",
    title: "Homosexuality",
    category: "Church & Christian Living",
    summary: `God designed sex for marriage between one man and one woman. Homosexual behavior is sin, like all sexual sin, and the gospel offers the same forgiveness and new life to everyone.`,
    parts: [
      {
        heading: "My view",
        body: `God designed sex for marriage between one man and one woman ([[Genesis 2:24]], [[Matthew 19:4-6]]). Homosexual behavior is sin ([[Romans 1:26-27]]), as are all sexual sins, heterosexual ones included. People who experience same-sex attraction are loved by God, and the gospel offers them the same forgiveness and new life as any sinner: “such were some of you” ([[1 Corinthians 6:9-10]], [[1 Corinthians 6:11]]).`,
        verses: ["Genesis 2:24", "Matthew 19:4-6", "Romans 1:26-27", "1 Corinthians 6:9-10", "1 Corinthians 6:11"],
      },
      {
        heading: "Temptation isn't sin",
        body: `Same-sex attraction is a temptation; acting on it, or dwelling on it in lust, is the sin. Jesus was tempted in every way and never sinned ([[Hebrews 4:15]]), and God provides a way of escape ([[1 Corinthians 10:13]]).`,
        verses: ["Hebrews 4:15", "1 Corinthians 10:13"],
      },
      {
        heading: "Living in habitual sin",
        body: `There's a difference between **struggling** against sin and **living** in it.
- **A believer can stumble and still belong to Christ.** Christians fight sin, confess it, and get back up ([[1 John 1:9]]).
- **But someone who embraces a sin as a settled way of life,** with no repentance and no fight, has reason to question whether they've truly been born again. “Those who practice such things will not inherit the kingdom of God” ([[Galatians 5:19-21]]). Someone born of God doesn't go on practicing sin ([[1 John 3:9]]).
- **This applies to every habitual sin,** not just homosexuality: sex outside marriage, drunkenness, greed, hatred, lying.
- **Grace is never permission to keep sinning** ([[Romans 6:1-2]]). Real faith brings a new life ([[2 Corinthians 5:17]]).
- **The goal is repentance, not shame.** Call people to Christ, who forgives and changes.`,
        verses: ["Galatians 5:19-21", "1 John 3:9", "Romans 6:1-2", "2 Corinthians 5:17", "1 John 1:9"],
      },
      {
        heading: "How Christians differ",
        body: `“Affirming” churches read these passages as condemning exploitation, prostitution, or pagan practices rather than committed relationships. Historic Christianity across every major tradition has read them as teaching God's design for sex within male and female marriage.`,
      },
      {
        heading: "If someone asks",
        say: ["I'm not condemning you more than me. We've all broken God's law; that's why we need Jesus."],
      },
    ],
  },

  // --- Equality of sin ---
  {
    id: "equality-of-sin",
    title: "Equality of Sin",
    category: "Salvation",
    summary: `Any one sin makes us guilty before God. But not all sins are equal in every way.`,
    parts: [
      {
        heading: "My view",
        body: `Any single sin makes us guilty before God and deserving of judgment ([[James 2:10]], [[Romans 6:23]]). There are no “small” sins that get a pass, so everyone needs a Savior. But sins aren't equal in every way: some do more harm, Jesus spoke of a “greater sin” ([[John 19:11]]), and Scripture describes degrees of punishment ([[Luke 12:47-48]]).`,
        verses: ["James 2:10", "Romans 6:23", "John 19:11", "Luke 12:47-48"],
      },
      {
        heading: "Why both matter",
        body: `- **Equal in guilt:** keeps us humble. No one can look down on anyone else.
- **Not equal in weight:** keeps us honest. Lying and murder are both sin, but they aren't the same.`,
      },
      {
        heading: "How Christians differ",
        body: `- **Catholic teaching** divides sins into mortal (which cut off grace) and venial (which don't).
- **Some Christians** say all sins are equal in every way, stressing that any sin separates us from God.`,
      },
      {
        heading: "If someone asks",
        say: ["Every sin breaks God's law, so we all need a Savior. That doesn't mean lying and murder are the same."],
      },
    ],
  },

  // --- Capital punishment ---
  {
    id: "capital-punishment",
    title: "Capital Punishment",
    category: "Ethics & Society",
    summary: `God gave government the authority to take life for murder, because people are made in His image. It still applies today.`,
    parts: [
      {
        heading: "My view",
        body: `God gave government the authority to take the life of a murderer, because people are made in His image ([[Genesis 9:6]]). It must be carried out justly and only with certainty of guilt ([[Numbers 35:30]], [[Deuteronomy 19:15]]).`,
        verses: ["Genesis 9:6", "Numbers 35:30", "Deuteronomy 19:15"],
      },
      {
        heading: "Why it still applies today",
        body: `This isn't just an Old Testament rule for Israel:
- **It comes before Moses.** God gave it to Noah, the father of all humanity, centuries before the Law ([[Genesis 9:6]]). It was for every nation, not just Israel.
- **It's grounded in something that never changes:** people are made in God's image. As long as that's true, murder is an attack on God's image.
- **The New Testament affirms it.** Government “does not bear the sword for nothing” and is God's servant to punish evil ([[Romans 13:4]]).
- **Paul accepted it.** “If I have committed anything worthy of death, I do not refuse to die” ([[Acts 25:11]]).
- **Jesus didn't correct it.** The thief on the cross said he was receiving what he deserved ([[Luke 23:41]]), and Jesus offered him paradise, not a correction.
- **Personal forgiveness isn't the same as public justice.** Jesus told individuals to turn the other cheek; Romans 13 gives the state the sword. A Christian can forgive a murderer and still support justice.`,
        verses: ["Romans 13:4", "Acts 25:11", "Luke 23:41"],
      },
      {
        heading: "Justice must be careful",
        body: `- **Certainty required.** God required two or three witnesses before anyone was put to death.
- **Caution where the system can't be sure.**
- **The standard is justice, not revenge.**`,
      },
      {
        heading: "How Christians differ",
        body: `Some Christians oppose capital punishment because of the risk of executing the innocent, unequal application, or an emphasis on mercy and the possibility of repentance.`,
      },
      {
        heading: "If someone asks",
        say: ["It's grounded in how valuable human life is, not a disregard for it."],
      },
    ],
  },

  // --- Abortion ---
  {
    id: "abortion",
    title: "Abortion",
    category: "Ethics & Society",
    summary: `The unborn child is a human being made in God's image. Abortion is murder and should be abolished, and the gospel offers full forgiveness.`,
    parts: [
      {
        heading: "My view",
        body: `The unborn child is a human being made in God's image from conception ([[Psalm 139:13]]), so abortion is murder ([[Exodus 20:13]], [[Genesis 9:6]]). It should be abolished immediately, not reduced step by step, with equal protection under the law. The church is called to rescue ([[Proverbs 24:11]]), and the gospel offers full forgiveness to anyone involved in an abortion ([[1 John 1:9]]).`,
        verses: ["Genesis 9:6", "Exodus 20:13", "Psalm 139:13", "Proverbs 24:11", "1 John 1:9"],
      },
      {
        heading: "Go deeper",
        body: `- {{Talking path: “I'm pro-choice”|talking/pro-choice}}
- {{Abortion objections|objections/abortion}}`,
      },
      {
        heading: "How Christians differ",
        body: `Many pro-life Christians support incremental laws and exceptions (for rape or the mother's life) as steps toward ending abortion. Abolitionists reject both.`,
      },
      {
        heading: "If someone asks",
        say: ["What is the unborn? If it's a human being, no one has the right to kill it."],
      },
    ],
  },

  // --- Revelation & the end times ---
  {
    id: "end-times",
    title: "Revelation & the End Times",
    category: "Last Things",
    summary: `Jesus will come for His church before the tribulation (pre-trib rapture), return visibly after it, and reign on earth for a thousand years.`,
    parts: [
      {
        heading: "My view",
        body: `I hold a **pre-tribulation, premillennial** view:
1. **The rapture:** Jesus comes for His church, and believers, living and dead, are caught up to meet Him ([[1 Thessalonians 4:16-17]], [[1 Corinthians 15:51-52]]).
2. **The tribulation:** a seven-year period of judgment on the earth ([[Daniel 9:27]]). The church is kept from it ([[Revelation 3:10]], [[1 Thessalonians 5:9]]).
3. **The second coming:** Jesus returns visibly to the earth to judge and to reign ([[Revelation 19:11]], [[Acts 1:11]]).
4. **The millennium:** Christ reigns on earth for a thousand years ([[Revelation 20:4]]).
5. **The new heavens and new earth:** God makes all things new ([[Revelation 21:1]]).`,
        verses: ["1 Thessalonians 4:16-17", "Revelation 3:10", "1 Thessalonians 5:9", "Revelation 19:11", "Revelation 20:4", "Revelation 21:1"],
      },
      {
        heading: "Why pre-trib",
        body: `- **Believers aren't destined for wrath** ([[1 Thessalonians 5:9]]). The tribulation is God's wrath poured out on the earth.
- **Kept from the hour of testing** that comes on the whole world ([[Revelation 3:10]]).
- **Jesus could come at any moment.** No one knows the day or hour ([[Matthew 24:36]]), which fits a rapture with no signs that must come first.
- **The church isn't mentioned on earth** in Revelation 4 to 19, the chapters describing the tribulation.
- **Jesus promised to come and take us to be with Him** ([[John 14:2-3]]).`,
        verses: ["Matthew 24:36", "John 14:2-3"],
      },
      {
        heading: "How I read Revelation",
        body: `As future prophecy, read plainly where possible (futurist), with real symbols that Scripture often explains itself. It's meant to give hope and urgency, not fear.`,
      },
      {
        heading: "Why it matters for evangelism",
        body: `If Jesus could come at any moment, today matters. Don't put off sharing the gospel ([[2 Corinthians 6:2]]). Our hope is “the blessed hope and the appearing of the glory of our great God and Savior, Christ Jesus” ([[Titus 2:13]]).`,
        verses: ["Titus 2:13", "2 Corinthians 6:2"],
      },
      {
        heading: "How Christians differ",
        body: `- **Mid-trib and pre-wrath:** the rapture happens partway through the tribulation.
- **Post-trib:** the church goes through the tribulation, and the rapture and second coming are one event.
- **Amillennial:** the thousand years is symbolic of the present church age; Christ returns once, at the end.
- **Postmillennial:** the gospel will gradually transform the world before Christ returns.
- **Preterist:** much of Revelation was fulfilled in the first century (the fall of Jerusalem in AD 70).

All agree: Jesus is coming back.`,
      },
      {
        heading: "If someone asks",
        say: ["I believe Jesus could come back any day. That's why I'm telling you now."],
      },
    ],
  },

  // --- Women in ministry (DRAFT) ---
  {
    id: "women-in-ministry",
    title: "Women in Ministry",
    category: "Church & Christian Living",
    summary: `Men and women are equal in worth and both gifted to serve. The role of pastor or elder is for qualified men.`,
    parts: [
      {
        heading: "My view",
        body: `Men and women are equally made in God's image and equal in value and salvation ([[Genesis 1:27]], [[Galatians 3:28]]). Both are gifted and called to serve. The office of pastor or elder, the authoritative teaching and leading of the church, is given to qualified men ([[1 Timothy 2:12]], [[1 Timothy 3:1-2]]). This is about role, not worth.`,
        verses: ["Genesis 1:27", "Galatians 3:28", "1 Timothy 2:12", "1 Timothy 3:1-2"],
      },
      {
        heading: "Women serving",
        body: `Women served throughout the New Testament:
- **Priscilla** helped explain the gospel more accurately to Apollos ([[Acts 18:26]]).
- **Phoebe** served the church at Cenchrea ([[Romans 16:1]]).
- **Older women teach younger women** ([[Titus 2:3-5]]).
- **Sons and daughters will prophesy** ([[Acts 2:17-18]]).
- **Women were the first witnesses** of the resurrection.

Women can evangelize, teach women and children, lead ministries, and serve in countless ways.`,
        verses: ["Acts 18:26", "Romans 16:1", "Titus 2:3-5", "Acts 2:17-18"],
      },
      {
        heading: "How Christians differ",
        body: `- **Complementarian** (this view): equal worth, different roles in church and home.
- **Egalitarian:** all roles, including pastor, are open to women. They point to women leaders like Deborah, Junia, and Priscilla, and read 1 Timothy 2 as addressing a specific local problem in Ephesus.`,
      },
      {
        heading: "If someone asks",
        say: ["Equal in worth, different in role. Jesus submitted to the Father, and He isn't less than God."],
      },
    ],
  },

  // --- Eternal security (DRAFT) ---
  {
    id: "eternal-security",
    title: "Can You Lose Your Salvation?",
    category: "Salvation",
    summary: `A true believer can't lose salvation, because God keeps them. Those who fall away completely show they were never truly saved.`,
    parts: [
      {
        heading: "My view",
        body: `Someone who is truly born again can't lose their salvation, because it depends on God keeping them, not on them keeping themselves ([[John 10:28-29]], [[Philippians 1:6]]). Nothing can separate us from God's love ([[Romans 8:38-39]]). The Holy Spirit is God's seal and guarantee ([[Ephesians 1:13-14]]).`,
        verses: ["John 10:28-29", "Romans 8:38-39", "Philippians 1:6", "Ephesians 1:13-14"],
      },
      {
        heading: "What about people who fall away?",
        body: `- **They were never truly saved.** “They went out from us, but they were not really of us” ([[1 John 2:19]]).
- **Many will say “Lord, Lord”** and hear “I never knew you” ([[Matthew 7:22-23]]). These are false converts, not people who lost salvation.
- This is why Way of the Master stresses real repentance, not just a prayer.`,
        verses: ["1 John 2:19", "Matthew 7:22-23"],
      },
      {
        heading: "The warnings are real",
        body: `Passages like [[Hebrews 6:4-6]] are serious warnings. God uses them to keep His people persevering. True believers heed them and press on.

**Assurance** comes from trusting Christ and seeing the fruit of a changed life ([[1 John 5:13]], [[2 Peter 1:10]]), not from a past prayer.`,
        verses: ["Hebrews 6:4-6", "2 Peter 1:10", "1 John 5:13"],
      },
      {
        heading: "How Christians differ",
        body: `- **Eternal security / perseverance of the saints** (this view).
- **Conditional security** (many Arminian, Methodist, Pentecostal churches): a believer can fall away and lose salvation by turning from Christ.
- **“Once saved, always saved” with no need for fruit:** a looser form that says a past decision guarantees heaven regardless of life. This view rejects that.`,
      },
      {
        heading: "If someone asks",
        say: ["God doesn't lose His children. But someone who never changes should ask if they were ever really His."],
      },
    ],
  },

  // --- Election & free will (DRAFT) ---
  {
    id: "election-free-will",
    title: "Election & Free Will",
    category: "Salvation",
    summary: `God genuinely wants everyone to be saved. Christ died for all, God's grace enables everyone to respond, and each person freely chooses to accept or reject Him.`,
    parts: [
      {
        heading: "My view",
        body: `I lean **Arminian**:
- **God wants everyone saved.** He isn't willing that any should perish ([[2 Peter 3:9]]) and desires all people to be saved ([[1 Timothy 2:3-4]]).
- **Christ died for everyone,** not just the elect. He is the payment for the sins of the whole world ([[1 John 2:2]], [[John 3:16]]).
- **God's grace comes first.** No one can come to Christ on their own ([[John 6:44]]), but Jesus draws all people ([[John 12:32]]), enabling everyone to respond.
- **People can accept or resist.** God commands all to repent ([[Acts 17:30-31]]), and people can refuse Him ([[Matthew 23:37]], [[Acts 7:51]]).
- **Election is based on foreknowledge.** God chose those He knew beforehand would believe ([[1 Peter 1:1-2]], [[Romans 8:29-30]]).`,
        verses: ["2 Peter 3:9", "1 Timothy 2:3-4", "1 John 2:2", "John 12:32", "Matthew 23:37", "1 Peter 1:1-2"],
      },
      {
        heading: "What about election passages?",
        body: `Passages like [[Ephesians 1:4-5]] are real: God does choose. In this view, He chooses “in Him” (in Christ). Everyone who is in Christ by faith is chosen, and God foreknew who would be.`,
        verses: ["Ephesians 1:4-5", "Romans 8:29-30"],
      },
      {
        heading: "Why it matters for evangelism",
        body: `- **Every person you meet is someone Christ died for.** The offer is real for everyone.
- **People must respond, so we must tell them** ([[Romans 10:14]]). Whoever calls on the Lord will be saved ([[Romans 10:13]]).
- **God still does the work.** Our job is to be faithful; the Spirit draws.`,
        verses: ["Romans 10:14", "Romans 10:13"],
      },
      {
        heading: "Fits with eternal security",
        body: `Free will in *coming* to Christ, and God's keeping power *once* you're in Him, are held together by many Christians (including many Baptists). See {{Can You Lose Your Salvation?|convictions/eternal-security}}.`,
      },
      {
        heading: "How Christians differ",
        body: `**Calvinist / Reformed:** God unconditionally chooses who will be saved, Christ's death secures salvation for the elect, and God's grace is irresistible in them. They read “all” in verses like 1 Timothy 2:4 as “all kinds of people,” and see God's choice as the cause of faith, not a response to it.`,
      },
      {
        heading: "If someone asks",
        say: ["Jesus died for you. The question is whether you'll receive Him."],
      },
    ],
  },


  // --- Divorce & remarriage (DRAFT) ---
  {
    id: "divorce",
    title: "Divorce & Remarriage",
    category: "Church & Christian Living",
    summary: `Marriage is meant for life. Scripture allows divorce for adultery and abandonment by an unbelieving spouse, and remarriage in those cases.`,
    parts: [
      {
        heading: "My view",
        body: `God designed marriage to be lifelong ([[Matthew 19:4-6]]) and hates divorce ([[Malachi 2:16]]). Scripture allows divorce in two cases:
1. **Sexual immorality** by a spouse ([[Matthew 19:9]]).
2. **Abandonment by an unbelieving spouse** ([[1 Corinthians 7:15]]).

In those cases, the innocent spouse is free to remarry. Otherwise, believers should stay married or, if separated, remain unmarried or be reconciled ([[1 Corinthians 7:10-11]]).`,
        verses: ["Matthew 19:4-6", "Malachi 2:16", "Matthew 19:9", "1 Corinthians 7:15", "1 Corinthians 7:10-11"],
      },
      {
        heading: "Grace for the divorced",
        body: `Divorce isn't the unforgivable sin. Many people divorced before they knew Christ, or were the victims of a spouse's sin. Christ forgives and restores ([[1 John 1:9]]). Abuse is a serious matter: a victim should get safe, and church leaders should be involved.`,
        verses: ["1 John 1:9"],
      },
      {
        heading: "How Christians differ",
        body: `- **No remarriage** while a former spouse lives, even after a biblical divorce.
- **Broader grounds,** such as abuse or serious neglect, treated as forms of abandonment.
- **Catholic view:** a valid marriage can't be dissolved; an annulment declares it was never valid.`,
      },
      {
        heading: "If someone asks",
        say: ["God takes marriage seriously, and He also forgives. Both are true."],
      },
    ],
  },

  // --- Politics (DRAFT) ---
  {
    id: "politics",
    title: "Politics & the Christian",
    category: "Ethics & Society",
    summary: `Christians should engage as good citizens and vote by biblical values, but our hope is in Christ, not in politics.`,
    parts: [
      {
        heading: "My view",
        body: `- **Respect and pray for leaders.** Government is established by God ([[Romans 13:1]]), and we're to pray for those in authority ([[1 Timothy 2:1-2]]).
- **Engage as good citizens.** Vote, speak up, and seek the good of the place we live ([[Jeremiah 29:7]]), guided by biblical values like the sanctity of life, justice, and truth. Righteousness exalts a nation ([[Proverbs 14:34]]).
- **Obey God first.** When the law commands sin, we obey God rather than men ([[Acts 5:29]]).
- **Our hope isn't political.** Our citizenship is in heaven ([[Philippians 3:20]]). No candidate or party can save; only the gospel changes hearts.`,
        verses: ["Romans 13:1", "1 Timothy 2:1-2", "Jeremiah 29:7", "Proverbs 14:34", "Acts 5:29", "Philippians 3:20"],
      },
      {
        heading: "Keep the gospel first",
        body: `Don't let politics become a barrier to the gospel. Someone who votes differently still needs Jesus, and you may be the one to tell them. Render to Caesar what is Caesar's, and to God what is God's ([[Matthew 22:21]]).`,
        verses: ["Matthew 22:21"],
      },
      {
        heading: "How Christians differ",
        body: `Christians vary widely: from deep political involvement to near withdrawal, and across parties and policies. Most agree on the basics: pray for leaders, obey the law unless it requires sin, and keep the gospel central.`,
      },
      {
        heading: "If someone asks",
        say: ["I vote my convictions, but my hope isn't in any politician. It's in Jesus."],
      },
    ],
  },
];
