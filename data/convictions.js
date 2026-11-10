// MY CONVICTIONS
//
// Personal positions on topics, worked out from Scripture.
// Same format as paths: title, summary, and parts (heading, say, ask, body, verses, branches).
// Each page: category, My view, supporting sections, How Christians differ, If someone asks.
// "Book Notes" pages are a reading log instead: core ideas, how to use them, examples, my takeaways.

window.DATA = window.DATA || {};

DATA.convictionCategories = [
  "Scripture & Creation",
  "Salvation",
  "Church & Christian Living",
  "Ethics & Society",
  "Last Things",
  "Book Notes",
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
    summary: `God gave government the authority to take life for murder, rape, and kidnapping. It still applies today.`,
    parts: [
      {
        heading: "My view",
        body: `God gave government the authority to take the life of a murderer, because people are made in His image ([[Genesis 9:6]]). God's law also gives death for rape ([[Deuteronomy 22:25-26]]) and kidnapping ([[Exodus 21:16]]), and that standard of justice still applies ({{God's Law & Civil Government|convictions/theonomy}}). It must be carried out justly and only with certainty of guilt ([[Numbers 35:30]], [[Deuteronomy 19:15]]).`,
        verses: ["Genesis 9:6", "Deuteronomy 22:25-26", "Exodus 21:16", "Deuteronomy 19:15"],
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
        body: `- Some Christians oppose capital punishment because of the risk of executing the innocent, unequal application, or an emphasis on mercy and repentance.
- Many hold it for murder only, based on [[Genesis 9:6]] (general equity), but not for other crimes in the law of Moses.`,
      },
      {
        heading: "If someone asks",
        say: ["It's grounded in how valuable human life is, not a disregard for it."],
      },
    ],
  },

  // --- God's Law & Civil Government (DRAFT: confirm the details) ---
  {
    id: "theonomy",
    title: "God's Law & Civil Government (Theonomy)",
    category: "Ethics & Society",
    draft: true,
    summary: `God's law, including its civil laws and penalties, is still the standard of justice for every government, except where the New Testament changes it. The ceremonial laws are fulfilled in Christ.`,
    parts: [
      {
        heading: "My view",
        body: `Jesus didn't abolish the Law ([[Matthew 5:17-19]]). The ceremonial laws (sacrifices, priesthood, food laws) are fulfilled in Him. But God's moral law, and the civil laws that apply it to society, still show what justice is. Government is “a minister of God” to punish evil ([[Romans 13:4]]), and God's law is what defines evil and its just penalty. Murder, rape, and kidnapping still deserve death.`,
        verses: ["Matthew 5:17-19", "Romans 13:4", "Deuteronomy 4:6-8"],
      },
      {
        heading: "Why",
        body: `- **Every letter stands until all is accomplished** ([[Matthew 5:17-19]]). The New Testament explicitly sets aside the ceremonial laws, but not the civil ones.
- **God's law was meant to be a model** of wisdom and justice for the nations ([[Deuteronomy 4:6-8]]).
- **Faith establishes the Law** ([[Romans 3:31]]).
- **The Law is still good** for restraining the lawless, including murderers and kidnappers ([[1 Timothy 1:8-10]]).
- **Government punishes evil as God's servant** ([[Romans 13:4]]). Who better defines justice than the One who appointed it?`,
      },
      {
        heading: "Examples",
        body: `- **Murder:** [[Genesis 9:6]], given to all humanity before Moses. See {{Capital Punishment|convictions/capital-punishment}}.
- **Rape:** the rapist dies, the victim is innocent ([[Deuteronomy 22:25-26]]).
- **Kidnapping:** “He who kidnaps a man... shall surely be put to death” ([[Exodus 21:16]]).
- **Theft:** restitution to the victim, not just prison (Exodus 22:1-4).`,
      },
      {
        heading: "Justice must be careful",
        body: `- **Only civil government** carries out penalties, never individuals.
- **Certainty required:** two or three witnesses ([[Deuteronomy 19:15]]).
- **Change comes through the gospel**, persuasion, and lawful means, not force.`,
      },
      {
        heading: "To work through",
        body: `The law of Moses also gives the death penalty for other crimes, such as adultery (Leviticus 20:10), blasphemy (Leviticus 24:16), and Sabbath-breaking (Exodus 31:14). Theonomists differ on how these apply today; some see some of them as the maximum penalty rather than the required one. I need to decide where I stand on these.`,
      },
      {
        heading: "How Christians differ",
        body: `- **General equity:** civil laws expired with Israel, but their justice still applies (Westminster Confession 19.4).
- **Ended with Israel:** governments set penalties under Romans 13, not bound to Moses.
- **New Covenant Theology:** the law of Moses is fulfilled; Christians follow the law of Christ.

See {{The Law: What Still Applies|evidence/the-law}} for the full breakdown.`,
      },
      {
        heading: "If someone asks",
        say: ["I believe God's law is the best standard of justice for any nation.", "But the heart only changes through the gospel, so that comes first."],
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
        body: `- {{Step-by-step conversation: “I'm pro-choice”|talking/pro-choice}}
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

  // --- Israel & the Church ---
  {
    id: "israel-church",
    title: "Israel & the Church",
    category: "Last Things",
    summary: `The church, Jews and Gentiles together in Christ, is the true Israel of God. God's promises to Abraham and Israel are fulfilled in Jesus and His people. Many Jewish people will still turn to Christ, joining the one church.`,
    parts: [
      {
        heading: "My view",
        body: `There is one people of God, not two. Everyone is saved the same way, by grace through faith in Jesus, and all who belong to Christ are Abraham's children and heirs of the promise. The promises to Israel find their “yes” in Christ and are shared by His people, Jew and Gentile. God has not forgotten the Jewish people: Romans 11 points to a time when many will believe in their Messiah and be grafted back in.`,
        verses: ["Galatians 3:29", "Ephesians 2:14-16", "Romans 9:6", "Romans 11:25-26"],
      },
      {
        heading: "Why",
        body: `- **Not all Israel is Israel:** being born Jewish doesn't make someone part of God's true people ([[Romans 9:6]]).
- **Abraham's heirs:** “if you belong to Christ, then you are Abraham's descendants” ([[Galatians 3:29]]).
- **One new man:** Jesus made Jew and Gentile into one body ([[Ephesians 2:14-16]]), with no Jew or Greek in Christ ([[Galatians 3:28]]).
- **Israel's titles go to the church:** a chosen race, a royal priesthood, a holy nation ([[1 Peter 2:9]]).
- **The promise was about Christ:** “to your seed,” that is, Christ ([[Galatians 3:16]]).`,
      },
      {
        heading: "Blessing those who bless Abraham",
        body: `God promised Abraham, “I will bless those who bless you... And in you all the families of the earth will be blessed” ([[Genesis 12:2-3]]). Paul calls this “the gospel preached beforehand to Abraham” ([[Galatians 3:8]]). The blessing to the nations comes through Christ, Abraham's seed. The best way to bless the Jewish people is to share their Messiah with them.`,
      },
      {
        heading: "God hasn't rejected the Jewish people",
        body: `- “God has not rejected His people, has He? May it never be!” ([[Romans 11:1]])
- A partial hardening has come on Israel “until the fullness of the Gentiles has come in” ([[Romans 11:25-26]]).
- His gifts and calling are irrevocable ([[Romans 11:29]]).

Jewish people who believe aren't a separate program; they're grafted back into the one olive tree, the one people of God.`,
      },
      {
        heading: "Why it matters for evangelism",
        body: `Jewish people need Jesus like everyone else. The gospel is “to the Jew first and also to the Greek” ([[Romans 1:16]]). Share it with love and respect, starting from the Hebrew Scriptures ({{Jewish People|people/jewish}}). Hatred of Jewish people is sin.`,
      },
      {
        heading: "How Christians differ",
        body: `- **Fulfilled (covenant), my view:** the church is the true Israel; the promises are fulfilled in Christ and His people. Wayne Grudem holds a version of this, while still expecting many Jews to turn to Christ.
- **Distinct (dispensational):** Israel and the church are separate; promises to ethnic Israel, including the land and national restoration, are still future. Usually held with a pre-trib rapture.
- **In between (progressive):** one people of God in Christ, with a special future for ethnic Israel.

All three agree: salvation is only through Jesus, for Jews and Gentiles alike.`,
      },
      {
        heading: "Still studying",
        body: `How this fits with my view of the end times. The pre-trib rapture usually rests on the dispensational view. See {{Revelation & the End Times|convictions/end-times}}.`,
      },
      {
        heading: "If someone asks",
        say: ["Anyone who trusts Jesus is part of God's people, Jew or Gentile.", "God's promises to Israel are fulfilled in Jesus, and many Jewish people will still come to Him."],
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

  // --- The Flood ---
  {
    id: "flood",
    title: "Noah's Flood",
    category: "Scripture & Creation",
    summary: `The flood was a real, worldwide judgment that covered the whole earth, and the ark was big enough to carry every kind of land animal God sent.`,
    parts: [
      {
        heading: "My view",
        body: `The flood in Noah's day covered the whole earth, not just one region. It's what the text says, Jesus and Peter treated it as real history, and God's promise afterward only makes sense if it was global.`,
        verses: ["Genesis 7:19-20", "Genesis 7:21-23", "Genesis 9:11", "2 Peter 3:5-6"],
      },
      {
        heading: "Why global",
        body: `- **The mountains were covered:** “all the high mountains everywhere under the heavens” ([[Genesis 7:19-20]]). Water seeks its own level; it can't cover mountains in one region only.
- **All life outside the ark died** ([[Genesis 7:21-23]]).
- **It lasted about a year:** the water rose for 150 days before receding ([[Genesis 8:3-4]]), with water from below as well as above ([[Genesis 7:11]]).
- **Why build an ark at all?** For a regional flood, God could have told Noah and the animals to move. A huge ark makes no sense for a local flood.
- **God's promise:** never again “a flood to destroy the earth” ([[Genesis 9:11]]). Regional floods happen every year, so the promise only holds if the flood was global.
- **Jesus and Peter treated it as worldwide:** the flood “took them all away” ([[Matthew 24:37-39]]); “the world at that time was destroyed” ([[2 Peter 3:5-6]]).`,
      },
      {
        heading: "Could the ark hold them?",
        body: `- **It was huge:** about 450 feet long, 75 wide, and 45 high ([[Genesis 6:15]]), roughly 1.5 million cubic feet, with three decks.
- **“Kinds,” not species** ([[Genesis 6:19-20]]): one pair of the dog kind could later produce wolves, coyotes, and foxes. Creationist researchers estimate about 1,400 kinds, fewer than 7,000 animals. Even higher estimates (like John Woodmorappe's study) come to about 16,000.
- **Most animals are small:** the average land animal is about the size of a sheep, and God could have sent young animals, which are smaller and eat less.
- **Not everything needed to be aboard:** sea creatures didn't, and the text focuses on land animals with “the breath of the spirit of life” ([[Genesis 7:21-23]]).
- **The result:** the animals fit in a fraction of the space, with room for food, water, and people.`,
        verses: ["Genesis 6:15", "Genesis 6:19-20"],
      },
      {
        heading: "Why it matters",
        body: `- **Judgment is real.** Jesus used the flood to warn that judgment will come suddenly ([[Matthew 24:37-39]]).
- **Salvation is one door.** Eight people were brought safely through in the ark ([[1 Peter 3:20]]), a picture of being safe in Christ.
- **Faith takes God at His word,** as Noah did ([[Hebrews 11:7]]).`,
        verses: ["1 Peter 3:20", "Hebrews 11:7"],
      },
      {
        heading: "How Christians differ",
        body: `Some Christians, mostly those who hold an old earth, believe the flood was regional: it covered the whole region where people lived. They point out that “all the earth” can sometimes mean the known world, as when “all the earth” came to Egypt for grain ([[Genesis 41:57]]). They still affirm the flood as a real judgment. The question is whether that reading fits this passage's covered mountains, year-long flood, and global promise.`,
        verses: ["Genesis 41:57"],
      },
      {
        heading: "If someone asks",
        say: ["I take it as written: it covered the whole earth. Otherwise, why build an ark instead of just moving?"],
      },
    ],
  },

  // --- Book Notes ---
  {
    id: "story-of-reality",
    title: "The Story of Reality (Greg Koukl)",
    category: "Book Notes",
    sources: ["Greg Koukl"],
    summary: `Started November 2026. Koukl tells the Christian worldview as one true story, from beginning to end. Notes are added as I read.`,
    parts: [
      {
        heading: "Why I'm reading it",
        body: `- Follow-up to {{Tactics|convictions/tactics}}: the big picture behind the arguments.
- Learn to explain Christianity as one story, not a list of rules or doctrines.`,
      },
      {
        heading: "The story in five words",
        body: `Koukl organizes the story around five words: **God, Man, Jesus, Cross, Resurrection.** (Confirm against the book as I read.)`,
      },
      {
        heading: "Where I am",
        body: `Just started.`,
      },
      {
        heading: "Chapter notes",
        body: `No notes yet. For each section: the main idea, key verses, and anything worth remembering.`,
      },
      {
        heading: "My takeaways",
        body: `None yet.`,
      },
    ],
  },
  {
    id: "school-of-biblical-evangelism",
    title: "School of Biblical Evangelism (Ray Comfort & Kirk Cameron)",
    category: "Book Notes",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `Started November 2026. 101 lessons on sharing the gospel the way Jesus did: the Law before grace, true repentance, doing the work, the Bible, apologetics, and other religions.`,
    parts: [
      {
        heading: "About these summaries",
        body: `The lesson summaries below are first drafts written by Claude from the titles and Ray Comfort's teaching, **not from the book itself**. As I read, I'll correct them. Lessons marked **(checked)** have been confirmed against the book.`,
      },
      {
        heading: "Where I am",
        body: `Not started yet. Next up: Lesson 1, The Forgotten Key to Biblical Evangelism.`,
      },
      {
        heading: "My takeaways",
        body: `None yet.`,
      },
      {
        heading: "The message: Law, grace, and repentance (1 to 20)",
        body: `- **1. The Forgotten Key to Biblical Evangelism.** The Law (the Ten Commandments) is the key the modern church forgot. It shows people their sin so they see their need for a Savior. Romans 3:20, 7:7; Galatians 3:24.
- **2. Making Grace Amazing.** Grace only looks amazing after the Law shows how guilty we are. The courtroom: we broke the law, and Jesus paid our fine.
- **3. The Problem with the Modern Gospel.** Preaching Jesus as a way to a happier life produces false converts who fall away when trouble comes. The parachute: put Him on because of the jump to come, not to improve the flight.
- **4. How to Confront Sinners.** Move from natural to spiritual, then walk through the Law. A simple outline: are you a good person, have you kept the Commandments, innocent or guilty on Judgment Day, heaven or hell?
- **5. The Ten Commandments, Part 1.** The first commandment: no other gods before God. Everyone has put something ahead of Him.
- **6. The Ten Commandments, Part 2.** The second commandment: no idols, including making up a god you're comfortable with.
- **7. The Ten Commandments, Part 3.** The third commandment: using God's name in vain, even as a curse word, is blasphemy.
- **8. The Ten Commandments, Part 4.** The fourth commandment: the Sabbath, a day set apart for God.
- **9. The Ten Commandments, Part 5.** The fifth commandment: honor your father and mother.
- **10. The Ten Commandments, Part 6.** The sixth commandment: do not murder. Jesus said hatred is murder of the heart (1 John 3:15).
- **11. The Ten Commandments, Part 7.** The seventh commandment: do not commit adultery. Jesus said lust is adultery of the heart (Matthew 5:27-28).
- **12. The Ten Commandments, Part 8.** The eighth commandment: do not steal, no matter the value.
- **13. The Ten Commandments, Part 9.** The ninth commandment: do not lie or bear false witness. All liars face judgment (Revelation 21:8).
- **14. The Ten Commandments, Part 10.** The tenth commandment: do not covet. It shows sin starts in the heart.
- **15. Our Ally: The Conscience.** “Con-science” means “with knowledge.” God's Law is written on every heart (Romans 2:15), so speak to the conscience, not just the intellect.
- **16. The Necessity of Repentance.** Repentance is turning from sin, not just feeling sorry. It's required for salvation (Luke 13:3, Acts 17:30).
- **17. Personal Witnessing: How Jesus Did It.** Jesus moved from natural to spiritual with the woman at the well, used the Law with the rich young ruler, and gave grace to the humble.
- **18. The Sinner's Prayer.** Be careful leading people in a prayer and then telling them they're saved. Call them to repent and trust Christ, and let God give the assurance.
- **19. True and False Conversions.** The parable of the sower and the wheat and tares: not every profession is real. True converts bear fruit.
- **20. Hypocrisy.** Hypocrites in the church are often false converts. God will judge them; their existence doesn't disprove Christ.`,
      },
      {
        heading: "Judgment and sin (21 to 24)",
        body: `- **21. The Certainty of Judgment.** Everyone will die and then face judgment (Hebrews 9:27). God has fixed the day (Acts 17:31).
- **22. Judgment Day.** What that day will be like: perfect justice, every deed, word, and secret thought judged.
- **23. The Reality of Hell.** Jesus spoke plainly about hell. It's real, eternal, and just. Speak of it with tears, not anger.
- **24. Man's Sinful Condition.** People are not basically good. The heart is deceitful (Jeremiah 17:9), and all have sinned (Romans 3:23).`,
      },
      {
        heading: "Doing the work (25 to 36)",
        body: `- **25. Our Primary Task.** Reaching the lost is the church's main job, not an optional extra. The Great Commission is for every believer.
- **26. The Fear of Man.** Fear of what people think is the biggest hindrance to witnessing (Proverbs 29:25). Love for the lost and fear of God overcome it.
- **27. The Empowering of the Holy Spirit.** The Spirit gives power and boldness to witness (Acts 1:8, Acts 4:31).
- **28. How to Capture the World's Attention.** Use creative openers and attention-getters, like trick tracts or a question, to start conversations.
- **29. Gospel Tracts, Part 1.** Why tracts work: they keep preaching after you leave, they're easy for anyone, and they open conversations.
- **30. Gospel Tracts, Part 2.** How to give tracts well, choosing good tracts, and leaving them in useful places.
- **31. Personal Testimony.** A testimony can't be argued with, but it isn't the gospel. Use it to lead to the Law and the cross, not to replace them.
- **32. Creative Ways to Share Your Faith.** Practical ideas for everyday witnessing: at work, in stores, in restaurants, online, and with family.
- **33. How to Witness to Hurting People.** With the grieving and suffering, be gentle and compassionate, but don't withhold the gospel they need.
- **34. Open-Air Preaching, Part 1.** The biblical case for open-air preaching: Jesus, the prophets, and the apostles preached in public.
- **35. Open-Air Preaching, Part 2.** How to start: drawing a crowd, using a question or test, and keeping attention.
- **36. Open-Air Preaching, Part 3.** Handling hecklers, staying calm, and using interruptions to your advantage.`,
      },
      {
        heading: "Growing as a witness, and core beliefs (37 to 51)",
        body: `- **37. Faith, Part 1.** Everyone lives by faith, in pilots, chairs, and doctors. Biblical faith is trust in God's character.
- **38. Faith, Part 2.** Growing in faith through God's Word and trusting His promises.
- **39. The Enemy, Part 1.** Satan is real, and he opposes the gospel. Know his tactics.
- **40. The Enemy, Part 2.** How the enemy works: lies, accusation, and temptation.
- **41. The Enemy, Part 3.** Standing firm in spiritual warfare: the armor of God (Ephesians 6).
- **42. The Enemy, Part 4.** The world, the flesh, and the devil, and how to resist.
- **43. Prayer.** Prayer for the lost, for laborers, and for boldness. Evangelism starts on your knees.
- **44. The Survivor's Guide.** How to keep going as a Christian: the Word, prayer, fellowship, and obedience.
- **45. Holiness.** God calls His people to be holy. A holy life backs up the message.
- **46. Water Baptism, Part 1.** What baptism means: an outward sign of new life, for believers.
- **47. Water Baptism, Part 2.** Common questions about baptism, and why it doesn't save on its own.
- **48. The Trinity.** One God in three persons: Father, Son, and Holy Spirit.
- **49. The Deity of Christ.** Jesus is God in the flesh, shown by His claims, miracles, and resurrection.
- **50. The Holy Spirit.** The Spirit is a person, not a force, and God Himself.
- **51. The Resurrection.** The evidence for the resurrection and why it's the foundation of the faith (1 Corinthians 15).`,
      },
      {
        heading: "The Bible (52 to 63)",
        body: `- **52. The Bible, Part 1.** The Bible is God's inspired Word (2 Timothy 3:16).
- **53. The Bible, Part 2.** The Bible's reliability: manuscripts and accurate transmission.
- **54. The Bible, Part 3.** Archaeology and history that support the Bible.
- **55. The Bible, Part 4.** How to answer people who don't believe the Bible.
- **56. Contradictions in the Bible.** Common “contradictions” and how they're resolved. Ask which one, then look at the context.
- **57. Prophecy.** Fulfilled prophecy shows the Bible's divine origin.
- **58. Messianic Prophecies, Part 1.** Prophecies about the Messiah fulfilled in Jesus: birth, life, and ministry.
- **59. Messianic Prophecies, Part 2.** Prophecies of the Messiah's death and resurrection (Isaiah 53, Psalm 22).
- **60. Non-Messianic Prophecies.** Other fulfilled prophecies, about nations, cities, and Israel.
- **61. Scientific Facts in the Bible, Part 1.** Statements in Scripture that match later science, such as the earth hanging on nothing (Job 26:7).
- **62. Scientific Facts in the Bible, Part 2.** More examples, such as life being in the blood (Leviticus 17:11).
- **63. Scientific Facts in the Bible, Part 3.** More examples, such as the paths of the seas (Psalm 8:8).`,
      },
      {
        heading: "Evolution, atheism, and relativism (64 to 76)",
        body: `- **64. Evolution, Part 1.** What evolution claims, and the difference between change within kinds and one kind becoming another.
- **65. Evolution, Part 2.** Missing links and the fossil record.
- **66. Evolution, Part 3.** Design in nature points to a Designer.
- **67. Evolution, Part 4.** Problems for evolution, like the origin of life and information.
- **68. Evolution, Part 5.** How to talk with someone who believes in evolution, then move to the conscience.
- **69. Atheism.** Claiming there's no God requires knowing everything. Most people are really saying “I don't know.”
- **70. How to Prove the Existence of God.** Creation proves a Creator (building and builder), and the conscience confirms it.
- **71. Atheist Obstacles.** What keeps atheists from God, often moral reasons more than intellectual ones.
- **72. Atheists' Questions, Part 1.** Answering common questions, like “Who made God?”
- **73. Atheists' Questions, Part 2.** More questions, like suffering and evil.
- **74. Relativism, Part 1.** “There's no absolute truth” defeats itself.
- **75. Relativism, Part 2.** Moral relativism, and how the conscience shows real right and wrong.
- **76. Reincarnation.** The Bible says we die once, then judgment (Hebrews 9:27).`,
      },
      {
        heading: "Other religions and groups (77 to 93)",
        body: `- **77. Islam, Part 1.** What Muslims believe about God, Muhammad, and the Qur'an.
- **78. Islam, Part 2.** How to witness to Muslims: Jesus, the cross, and how a just God can forgive.
- **79. Hinduism.** Hindu beliefs (many gods, karma, reincarnation) and how to share the gospel.
- **80. Buddhism, Part 1.** What Buddhists believe about suffering and enlightenment.
- **81. Buddhism, Part 2.** How to witness to Buddhists: sin, not just suffering, is the problem.
- **82. Judaism.** Witnessing to Jewish people from the Hebrew Scriptures.
- **83. What Makes a Group Non-Christian?.** Groups that deny core truths, like the deity of Christ, the Trinity, or salvation by grace, are not Christian even if they use Christian words.
- **84. Unitarianism.** Unitarians deny the Trinity and Christ's deity.
- **85. Mormonism, Part 1.** LDS beliefs: Joseph Smith, the Book of Mormon, and God once a man.
- **86. Mormonism, Part 2.** How to witness to Mormons.
- **87. Jehovah's Witnesses, Part 1.** Watchtower beliefs: Jesus as Michael, no Trinity, the 144,000.
- **88. Jehovah's Witnesses, Part 2.** How to witness to Jehovah's Witnesses.
- **89. Roman Catholicism.** Catholic teaching on salvation, Mary, and tradition, compared with Scripture, and how to share grace.
- **90. Oneness Pentecostals.** They deny the Trinity, teaching Father, Son, and Spirit are modes of one person, and often require baptism in Jesus' name and tongues.
- **91. International Church of Christ.** A group that teaches baptism is required for salvation and has controlling discipleship.
- **92. Seventh-Day Adventists.** Ellen G. White, Sabbath-keeping, and teachings that differ from Scripture.
- **93. New Age Movement.** God as energy, self as divine, and many paths, compared with the God of the Bible.`,
      },
      {
        heading: "Christian living and revival (94 to 101)",
        body: `- **94. The Will of God.** Reaching the lost is clearly God's will: He isn't willing that any should perish (2 Peter 3:9).
- **95. Our Most Valuable Commodity.** Likely time: use it for what matters eternally.
- **96. When You've Been Wronged.** Forgive, don't retaliate, and trust God with justice.
- **97. The Source of Revival.** Revival comes from God, through prayer, repentance, and faithful preaching.
- **98. Hindrances to Revival.** Sin, apathy, and false converts in the church hold back revival.
- **99. How to Maintain Zeal.** Keep your passion: remember the cross, the reality of hell, and the lost.
- **100. Raising Laborers in Your Church.** Train and encourage other believers to share their faith.
- **101. The Christian's Prayer.** Pray for laborers and for the lost (Matthew 9:38).`,
      },
      {
        heading: "Also in the book",
        body: `Answers to the lesson questions, recommended resources, and a section on memorizing and remembering Scripture.`,
      },
    ],
  },
  {
    id: "tactics",
    title: "Tactics (Greg Koukl)",
    category: "Book Notes",
    sources: ["Greg Koukl"],
    summary: `Finished November 2026. The big idea: you don't have to win the argument or close the deal. Ask good questions, stay calm, and leave people with something to think about. Each tactic below also has a full page in {{Conversation Skills|skills}}.`,
    parts: [
      {
        heading: "The goal: an ambassador",
        body: `- **Knowledge:** know the gospel clearly and enough to answer common questions.
- **Wisdom:** know how to say it. Questions, not speeches.
- **Character:** how you treat people speaks as loud as what you say.
- **The aim:** put a stone in their shoe, one thing they keep thinking about after you leave. You're not responsible for closing the deal; God is.`,
        verses: ["2 Corinthians 5:20", "Colossians 4:5-6"],
      },
      {
        heading: "Columbo: stay in the driver's seat with questions",
        ask: ["What do you mean by that?", "How did you come to that conclusion?", "Have you ever considered...?"],
        body: `**What it means:** Like the TV detective, keep asking questions instead of making speeches.

**How:**
1. **Clarify** what they mean. Many objections change once they explain them.
2. **Get their reasons.** The person making a claim has to back it up (the burden of proof), not you.
3. **Lead** with a question that points out a problem or brings in a new idea.

**Example:** “The Bible has been changed.” Ask: “What do you mean? Which parts, and how do you know?” Most people can't name one.

**Also:** questions buy you time to think, and they keep you out of the hot seat when you don't know an answer.

Full page: {{Columbo|skills/columbo}}.`,
      },
      {
        heading: "Be precise and check the facts",
        body: `**What it means:** Vague claims sound strong; specific ones can be checked. Many challenges rest on a wrong fact.

**How:** Ask for details (“Which one?” “Where did you hear that?”). Be specific yourself, define your words, and don't overstate.

**Example:** “The church picked the Bible at Nicaea.” Ask: “What do you think happened at Nicaea?” (It was about who Jesus is, not which books.)

Full page: {{Be Precise|skills/be-precise}}.`,
        verses: ["Proverbs 18:17"],
      },
      {
        heading: "Suicide: views that defeat themselves",
        body: `**What it means:** Some views fail by their own standard. You don't have to refute them; just help them see it.

**Kinds:**
- **Formal:** the claim contradicts itself. “There is no truth.” Ask: “Is that true?”
- **Practical:** the claim can't be lived or said consistently. “You shouldn't judge.” Ask: “Aren't you judging me?”
- **Sibling rivalry:** two claims they hold can't both be true. “There's no right or wrong” and “God is evil for allowing suffering.”
- **Infanticide:** the claim depends on the very thing it denies. Calling evil real borrows a moral standard that only makes sense if God exists.

**Tone:** ask it as a real question, not a trap.

Full page and list: {{Suicide|skills/suicide}}.`,
      },
      {
        heading: "Taking the Roof Off",
        body: `**What it means:** Take their view seriously and follow it to its logical end. If the end is something they'd never accept, the view has a problem.

**How:**
1. Sum up their view in a sentence.
2. Apply it consistently.
3. Ask if they really accept where it leads.

**Example:** “Morality is just personal opinion.” Then: “So the Holocaust wasn't really wrong, just disliked?” Most people won't go there.

Full page: {{Taking the Roof Off|skills/taking-the-roof-off}}.`,
      },
      {
        heading: "Steamroller",
        say: "Can I respond to that before we move on?",
        body: `**What it means:** Some people pile on objections and won't let you finish.

**How:** Kindly stop them and ask for a turn. If it keeps happening, name it gently (“I'd like to answer, but I can't if you keep moving on”). If they still won't listen, it's fine to end the conversation kindly.

Full page: {{Steamroller|skills/steamroller}}.`,
      },
      {
        heading: "Rhodes Scholar",
        ask: "What reasons do the experts give?",
        body: `**What it means:** “Scientists say...” or “Scholars agree...” is an appeal to experts. Experts can be wrong or biased, and their reasons matter more than their credentials.

**Example:** “Scholars say the Gospels are myths.” Ask: “Which scholars, and what are their reasons?”

Full page: {{Rhodes Scholar|skills/rhodes-scholar}}.`,
      },
      {
        heading: "Character and approach",
        body: `- Use a question before a statement.
- Be ready, but don't be in a hurry. One stone in a shoe is a win.
- Stay calm. If you lose your temper, you lose the person.
- Avoid church jargon.
- It's fine to say “I don't know. I'll look into it.”`,
        verses: ["1 Peter 3:15", "2 Timothy 2:24-25"],
      },
      {
        heading: "My takeaways",
        body: `- **Be precise and use details.** Specifics persuade, and vague claims fall apart when you ask for details.`,
      },
      {
        heading: "Practice",
        body: `- {{Columbo drill|practice/claims/All}}: see a claim, ask the right question.
- {{Objection drill|practice/objections/All}}: practice answers.`,
      },
    ],
  },
];
