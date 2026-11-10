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
    lead: "Atheism is the absence of belief in God or gods. Some atheists simply lack belief; others hold that no God exists.",
    facts: [
      {
        label: "Also called",
        text: "Nonbelievers, skeptics, freethinkers; often grouped with secular humanists",
      },
      {
        label: "Forms",
        text: "“Lack of belief” (weak) atheism; “there is no God” (strong) atheism",
      },
      {
        label: "Key thinkers",
        text: "Hume, Feuerbach, Marx, Nietzsche, Russell; the New Atheists (Dawkins, Harris, Dennett, Hitchens)",
      },
      { label: "God", text: "Does not exist, or there is no good reason to believe He does" },
      { label: "Jesus", text: "Usually seen as a human teacher, a legend, or a mix of both" },
      { label: "Morality", text: "Explained by evolution, culture, reason, or human well-being" },
      { label: "Afterlife", text: "None; death is the end of the person" },
    ],
    parts: [
      {
        heading: "History",
        body: `Doubt about the gods appears in the ancient world, and in the second century Romans even called Christians “atheists” for rejecting the gods of Rome. As a widely held position, atheism grew in Europe from the Enlightenment onward through thinkers such as David Hume, Ludwig Feuerbach, Karl Marx, and Friedrich Nietzsche, and later Bertrand Russell. In the early 2000s the “New Atheism” of Richard Dawkins, Sam Harris, Daniel Dennett, and Christopher Hitchens argued openly that religious belief is irrational and harmful. Today many people in the West describe themselves as having no religion, though not all of them call themselves atheists.`,
      },
      {
        heading: "Core beliefs",
        body: `- Many atheists define atheism as “I lack belief in God,” not “I know there is no God.”
- The natural world is usually held to be all that exists (naturalism), and science is seen as the main or only reliable way to know things.
- Common reasons given for unbelief: suffering, hypocrisy in the church, science, or a bad church experience.
- Many were raised in church and walked away.
- Most still live as if right and wrong are real.`,
      },
      {
        heading: "Key terms",
        body: `- **Naturalism:** the view that nature is all there is, with nothing supernatural.
- **Secular humanism:** a non-religious outlook that grounds ethics in human reason and well-being.
- **New Atheism:** the outspoken, popular atheist movement of the early 2000s.
- **Practical atheism:** living as if God does not exist, whatever one claims to believe.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **God's existence is evident.** The Bible teaches that creation makes God's power and nature clearly seen ([[Romans 1:20]], [[Psalm 19:1]]). A building proves a builder; creation proves a Creator ([[Hebrews 3:4]]).
- **The problem is moral, not only intellectual.** Scripture says people suppress the truth about God in unrighteousness ([[Romans 1:18]]), and calls the denial of God folly, a moral rather than an intellectual failing ([[Psalm 14:1]]).
- **The moral law points to a Lawgiver.** A real moral law needs a Moral Lawgiver; the conscience bears witness to God's Law ([[Romans 2:15]]). C.S. Lewis made this argument in *Mere Christianity*. See {{The Moral Law|evidence/moral-law}}.
- **Faith is not belief without evidence.** Biblical faith is trust in a God who has given evidence, above all the resurrection of Jesus ({{The Resurrection|evidence/resurrection}}).`,
        verses: ["Romans 1:20", "Psalm 19:1", "Hebrews 3:4", "Romans 1:18", "Romans 2:15", "Psalm 14:1"],
      },
      {
        heading: "Further reading",
        body: `- Ray Comfort, *You Can Lead an Atheist to Evidence, But You Can't Make Him Think*
- Living Waters film *The Atheist Delusion*
- Cliff Knechtle, *Give Me an Answer*
- C.S. Lewis, *Mere Christianity*`,
      },
    ],
    tips: `**Start with their story:** Many atheists were raised in church and walked away. Ask what happened before you argue.

**Questions to ask:**
- “Are you 100% sure there's no God?” If not, then God could exist. Now you're talking about evidence, not impossibility.
- “Where did everything come from?” A building proves a builder; creation proves a Creator ([[Romans 1:20]], [[Hebrews 3:4]]).
- “Is anything really wrong, or just disliked?” A real moral law needs a Moral Lawgiver ({{The Moral Law|evidence/moral-law}}).
- “What would convince you?” If nothing would, the issue isn't evidence.

**Pitfalls:**
- Don't get stuck in an endless debate. Arguments rarely save anyone.
- Don't be smug. Many atheists have been mocked by Christians.
- Don't accept that faith means believing without evidence ({{Blind faith|objections/blind-faith}}).

**Going to the Law:** The real problem is moral, not intellectual ([[Romans 1:18]]). Speak to the conscience; it already agrees with God's Law ([[Romans 2:15]]). Ask, “Can I ask you a different kind of question? Do you think you're a good person?”

**Bridge to the gospel:** Once they see their sin, Jesus is the answer to their real problem. ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Agnostics ---
  {
    id: "agnostic",
    title: "Agnostics",
    sources: ["Greg Koukl", "Lee Strobel", "Cliff Knechtle"],
    summary: `“I don't know if God exists.” That can be an honest place to start, but it's a bad place to stay on the most important question there is.`,
    lead: "Agnosticism is the view that the existence of God is unknown, or cannot be known. Agnostics neither affirm nor firmly deny that God exists.",
    facts: [
      { label: "Also called", text: "Skeptics, seekers, “undecided”" },
      { label: "Term coined", text: "By Thomas Henry Huxley, in 1869" },
      { label: "Forms", text: "“I don't know” (soft); “no one can know” (hard)" },
      { label: "God", text: "Unknown, or unknowable" },
      { label: "Jesus", text: "Often respected as a teacher; claims about Him left open" },
      { label: "Afterlife", text: "Unknown" },
    ],
    parts: [
      {
        heading: "History",
        body: `The English biologist Thomas Henry Huxley coined the word “agnostic” in 1869, from the Greek for “without knowledge,” to describe his refusal to claim knowledge about God either way. The idea is older: skeptical philosophers in the ancient world and later thinkers such as David Hume and Immanuel Kant questioned whether human reason can reach knowledge of God. Today many people who describe themselves as having no religion would call themselves agnostic.`,
      },
      {
        heading: "Core beliefs",
        body: `- Some agnostics mean “I don't know.” Others mean “no one *can* know.”
- Many are open but have not looked very hard into the question.
- For some, agnosticism is a way of avoiding the moral claims God would make on them.
- Agnosticism is about knowledge, so it can overlap with belief: an “agnostic atheist” lacks belief in God, while an “agnostic theist” believes without claiming certainty.`,
      },
      {
        heading: "Key terms",
        body: `- **Soft (weak) agnosticism:** the personal claim “I don't know whether God exists.”
- **Hard (strong) agnosticism:** the claim that no one can know whether God exists.
- **Apathetic agnosticism:** the view that the question does not matter much either way.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **“No one can know” defeats itself.** The claim that God cannot be known is itself a claim to know something about God ({{Suicide|skills/suicide}}).
- **God can be found.** He promises to be found by those who seek Him with all their heart ([[Jeremiah 29:13]]), and rewards those who seek Him ([[Hebrews 11:6]]).
- **God has made Himself known** in creation, in conscience ([[Romans 2:15]]), and above all in Jesus, whose resurrection is a historical claim that can be examined ({{The Resurrection|evidence/resurrection}}).
- **The question cannot stay open forever.** Scripture teaches that every person will die once and then face judgment ([[Hebrews 9:27]]). On something this important, not deciding is still a decision.`,
        verses: ["Jeremiah 29:13", "Hebrews 11:6", "Romans 2:15", "Hebrews 9:27"],
      },
      {
        heading: "Further reading",
        body: `- Lee Strobel, *The Case for Faith* and *The Case for Christ*
- Greg Koukl, *Tactics*`,
      },
    ],
    tips: `**Questions to ask:**
- “Do you mean you don't know, or that no one can know?” “No one can know” is itself a claim to know something about God ({{Suicide|skills/suicide}}).
- “How much time have you spent looking into it?” God promises to be found by those who truly seek Him ([[Jeremiah 29:13]], [[Hebrews 11:6]]).
- “If God showed you He's real, would you follow Him?” This shows whether the issue is evidence or willingness.

**Pitfalls:**
- Don't pile on arguments. Point to one strong piece of evidence: the resurrection. If Jesus rose, the question is settled ({{The Resurrection|evidence/resurrection}}).
- Don't let “I don't know” be the end. On something this important, not deciding is still a decision.

**Going to the Law:** Gently move to the Law. The conscience already knows more than the person admits ([[Romans 2:15]]). Say, “If God is real, you'll stand before Him one day. Not knowing won't be an excuse” ([[Hebrews 9:27]]).

**Bridge to the gospel:** Ask, “Do you think you're a good person?” and go through the Commandments. ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Muslims ---
  {
    id: "muslim",
    title: "Muslims",
    sources: ["Cliff Knechtle"],
    summary: `Muslims take God seriously and often respect Jesus as a prophet. Be respectful, patient, and clear about who Jesus is and what He did on the cross.`,
    lead: "Muslims are followers of Islam, a faith that teaches God (Allah) is absolutely one and that Muhammad is His final prophet. Islam honors Jesus as a prophet and the Messiah, but not as God or God's Son.",
    facts: [
      { label: "Also called", text: "Followers of Islam" },
      { label: "Founded", text: "7th century AD, Arabia" },
      { label: "Prophet", text: "Muhammad (c. 570–632 AD), held to be the last prophet" },
      { label: "Key texts", text: "The Qur'an; the Hadith (reports of Muhammad's words and deeds)" },
      { label: "Followers", text: "About 2 billion worldwide" },
      { label: "God", text: "Allah, absolutely one (tawhid)" },
      { label: "Jesus", text: "Isa: a virgin-born prophet and Messiah, not God, and not crucified" },
      { label: "Salvation", text: "God's mercy and a person's deeds weighed at the Judgment" },
    ],
    parts: [
      {
        heading: "History",
        body: `Muslims believe Muhammad, a merchant of Mecca, began receiving revelations through the angel Gabriel around AD 610. Facing opposition, he and his followers moved to Medina in 622 (the Hijra), the year the Islamic calendar begins. By his death in 632 much of Arabia had accepted Islam.

A dispute over who should lead the community after Muhammad produced the two main branches: **Sunni** (the large majority) and **Shia**. Islam spread rapidly across the Middle East, North Africa, and Asia.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Tawhid:** God (Allah) is absolutely one. The Trinity sounds to many Muslims like believing in three gods.
- **Muhammad** is the final prophet. The **Qur'an** is God's final, perfect word.
- **Jesus (Isa)** is honored as a great prophet and the Messiah, born of a virgin, who did miracles. But He is not God or God's Son.
- **The cross:** most Muslims believe Jesus was not crucified. Surah 4:157 says it only appeared that way.
- **Salvation:** depends on God's mercy and a person's deeds being weighed. There's no assurance.
- **The Bible:** most believe it has been corrupted over time.
- **Many Muslims think Christians worship Father, Mary, and Son,** rather than one God in three persons.`,
      },
      {
        heading: "Practices",
        body: `The **Five Pillars** shape Muslim life:
- **Shahada:** the confession that there is no god but God and Muhammad is His messenger
- **Salat:** prayer five times a day
- **Zakat:** giving to the poor
- **Sawm:** fasting during the month of Ramadan
- **Hajj:** pilgrimage to Mecca, once in a lifetime for those able

Hospitality is highly valued, and the Qur'an and other holy books are treated with great respect, never placed on the ground.`,
      },
      {
        heading: "Key terms",
        body: `- **Allah:** Arabic for God (also used by Arabic-speaking Christians)
- **Tawhid:** the oneness of God
- **Shirk:** associating partners with God, the gravest sin in Islam
- **Isa:** Jesus
- **Injil:** the Gospel given to Jesus; **Tawrat:** the Torah; **Zabur:** the Psalms
- **Surah:** a chapter of the Qur'an`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **Jesus is God the Son,** not only a prophet ([[John 1:1]], [[John 1:14]], [[John 20:28]]).
- **Jesus truly died for sins and rose again** ([[1 Corinthians 15:3-4]], [[Mark 10:45]]).
- **Salvation is a free gift, not a scale** ([[Ephesians 2:8-9]]), and believers can know they have eternal life ([[1 John 5:11-12]]).
- **God is just and also forgives,** because Jesus paid the penalty; good deeds cannot cancel crimes ([[Romans 3:26]]).
- **The Trinity** is one God in three persons, not three gods.
- **The Qur'an and the earlier Scriptures:** the Qur'an tells Christians to judge by the Gospel (Surah 5:47) and tells Muhammad to ask those who read the earlier Scripture (Surah 10:94). That implies the Bible was reliable in Muhammad's day, and manuscripts far older than that survive. See {{Has the Bible Been Changed?|evidence/bible-reliability}}.`,
        verses: ["John 1:1", "John 20:28", "Mark 10:45", "1 John 5:11-12", "Romans 3:26"],
      },
      {
        heading: "Further reading",
        body: `- Nabeel Qureshi, *Seeking Allah, Finding Jesus*
- Cliff Knechtle's conversations with Muslim students: respectful, direct, always back to Jesus.`,
      },
    ],
    tips: `**Questions to ask:**
- “How do you know your good deeds will outweigh your bad?”
- “How can God be just and still forgive sinners?”
- “If God sent the Gospel, when was it corrupted?”

**If they trust the scales:** Good deeds can't cancel crimes. A just judge can't let them go. God is just *and* forgives, because Jesus paid the penalty ([[Romans 3:26]]).

**If they say the Bible was corrupted:** The Qur'an itself points to the Gospel (Surah 5:47, Surah 10:94). So it was trustworthy in Muhammad's day, and we have manuscripts far older than that.

**Pitfalls:**
- **Don't insult Muhammad or the Qur'an.** You'll end the conversation.
- **Respect your Bible.** Don't put it on the ground.
- **Explain the Trinity carefully:** one God in three persons, not three gods. Many Muslims think Christians worship Father, Mary, and Son.
- **Be hospitable and patient.** Many Muslims come to Christ over years of friendship.
- **Learn from Cliff Knechtle:** respectful, direct, always back to Jesus.

**Going to the Law:** “How have you done with the Ten Commandments?” Muslims believe in judgment, so the Law lands well ([[James 2:10]], [[Romans 3:20]]).

**Bridge to the gospel:** Once they see they can't balance the scales, the cross shows how God can be both just and merciful. ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Mormons ---
  {
    id: "mormon",
    title: "Mormons (LDS)",
    sources: [],
    summary: `Latter-day Saints use Christian words like Jesus, grace, and salvation, but mean different things by them. Define terms, be kind, and focus on the Law and grace.`,
    lead: "The Church of Jesus Christ of Latter-day Saints is a restorationist movement founded by Joseph Smith in 1830 in upstate New York. Its members, often called Mormons, see it as the restored church of Jesus Christ, guided by living prophets and additional scripture.",
    facts: [
      { label: "Also called", text: "Latter-day Saints, LDS Church, Mormons" },
      { label: "Founded", text: "1830, New York; headquarters in Salt Lake City, Utah" },
      { label: "Founder", text: "Joseph Smith" },
      { label: "Key texts", text: "Bible (KJV), Book of Mormon, Doctrine and Covenants, Pearl of Great Price" },
      { label: "God", text: "Heavenly Father, an exalted man with a body of flesh and bone" },
      { label: "Jesus", text: "Firstborn spirit child of Heavenly Father, a separate being" },
      {
        label: "Salvation",
        text: "Grace “after all we can do”; exaltation requires temple ordinances",
      },
      { label: "Afterlife", text: "Three kingdoms of glory: celestial, terrestrial, telestial" },
    ],
    parts: [
      {
        heading: "History",
        body: `- **First Vision:** Joseph Smith said that as a young man in upstate New York he saw God the Father and Jesus Christ, who told him not to join any existing church.
- **The Book of Mormon:** Smith said an angel named Moroni led him to golden plates, which he translated and published in 1830. The church was organized the same year.
- **Move west:** after Smith was killed in 1844, most members followed Brigham Young to the Salt Lake Valley in Utah.
- **Plural marriage** was practiced in the 1800s and officially ended by the church in 1890. Some separate splinter groups still practice it.
- **Name:** the church now asks to be called by its full name or “Latter-day Saints” rather than “Mormon.”`,
      },
      {
        heading: "Core beliefs",
        body: `- **God the Father** has a body of flesh and bone (Doctrine and Covenants 130:22) and was once a man who progressed to godhood.
- **Exaltation:** faithful Latter-day Saints can become gods themselves.
- **Jesus** is the firstborn spirit child of Heavenly Father, a separate being from the Father. All people, Lucifer included, are taught to be spirit children of Heavenly Father from a premortal life.
- **Heavenly Mother:** Heavenly Father is taught to have a wife.
- **Scripture:** the Bible “as far as it is translated correctly,” plus the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price.
- **Restoration:** the true church was lost after the apostles (the Great Apostasy) and restored through Joseph Smith.
- **Living prophets:** the church is led by a prophet and apostles who receive ongoing revelation.
- **Salvation:** almost everyone is resurrected and goes to a kingdom of glory. But the highest level (exaltation in the celestial kingdom) requires temple ordinances and keeping the commandments.
- **Grace:** 2 Nephi 25:23 says saved by grace “after all we can do.” Moroni 10:32 says to deny yourself of *all* ungodliness.
- **Testimony:** members are invited to confirm the Book of Mormon by prayer and an inner witness of the Spirit (Moroni 10:4), often described as a “burning in the bosom.”`,
      },
      {
        heading: "Practices",
        body: `- **Temples** are for sacred ordinances: the endowment, eternal marriage (families “sealed” for eternity), and proxy baptism for the dead.
- **Temple garments** are sacred undergarments worn by endowed members.
- **Word of Wisdom:** a health code forbidding alcohol, tobacco, coffee, and tea.
- **Missions:** many young men, and many young women, serve full-time missions, often in pairs.
- **Sunday worship** meets in local wards; temples are separate buildings not used for weekly services.`,
      },
      {
        heading: "Key terms",
        body: `- **Exaltation:** becoming like Heavenly Father in the highest degree of the celestial kingdom.
- **Salvation (general):** resurrection and a place in a kingdom of glory, given to nearly all.
- **Ordinances:** sacred rites such as baptism and temple sealing, seen as required for exaltation.
- **Burning in the bosom:** a felt confirmation from the Spirit that something is true.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **One God:** there is only one God, who has always been God ([[Isaiah 43:10]], [[Isaiah 44:6]], [[Psalm 90:2]]). God is not a man ([[Numbers 23:19]]) and is spirit ([[John 4:24]]).
- **Jesus:** Jesus is eternally God, not a created spirit child ([[John 1:1]], [[Colossians 2:9]]).
- **Grace:** grace is a free gift, not a top-up after we've done all we can ([[Ephesians 2:8-9]], [[Romans 4:4-5]]). If it is earned, it is no longer grace ([[Romans 11:6]]).
- **The Law:** breaking one commandment makes a person guilty of all ([[James 2:10]]). The Law leads to Christ rather than to self-improvement ([[Galatians 3:24]]).
- **Testing revelation:** Scripture warns that the heart can deceive ([[Jeremiah 17:9]]) and that any gospel contrary to the apostles' gospel is to be rejected, even from an angel ([[Galatians 1:8]]).
- **Scripture:** historic Christianity holds the Bible as complete and reliable; see {{The Reliability of the Bible|evidence/bible-reliability}} and {{Why the Bible over other holy books|objections/bible-vs-other-books}}.`,
        verses: ["Isaiah 43:10", "Isaiah 44:6", "Colossians 2:9", "Ephesians 2:8-9"],
      },
      {
        heading: "Further reading",
        body: `- Bill McKeever and Eric Johnson, *Mormonism 101*
- Mormonism Research Ministry (mrm.org)`,
      },
    ],
    tips: `**Define terms:** Same words, different meanings. Ask, “What do you mean by grace? By saved? By Jesus?” Use {{Columbo|skills/columbo}}: ask, don't assume.

**Questions to ask:**
- “Are you keeping all the commandments?”
- “Have you done ‘all you can do’?”
- “If you died tonight, would you be in the celestial kingdom?”

These are honest questions, not traps. Most sincere Latter-day Saints know they fall short. That opens the door to grace.

**If they point to a “burning in the bosom”:** Feelings can mislead us ([[Jeremiah 17:9]]). God tells us to test teachings against what He has already said ([[Galatians 1:8]]).

**Pitfalls:**
- **Don't mock** temple garments or rituals.
- **Be kind to missionaries.** They're often young and far from home. You may be planting a seed for years.
- **Don't cover every doctrine.** Stay on God and the gospel.

**Going to the Law:** Latter-day Saints value commandment keeping, so the Law shows that no one can do “all they can do.” Try: “The Bible says if you break one commandment, you're guilty of all. How are you doing with them?” ([[James 2:10]], [[Galatians 3:24]])

**Bridge to the gospel:** Present Christ's finished work as a complete gift, not a reward ([[Ephesians 2:8-9]]). ({{Way of the Master|paths/way-of-the-master/3}})`,
  },

  // --- Jehovah's Witnesses ---
  {
    id: "jw",
    title: "Jehovah's Witnesses",
    sources: [],
    summary: `Witnesses are trained, sincere, and committed. Read the Bible with them, one topic at a time, and focus on who Jesus is and whether they can know they're saved.`,
    lead: "Jehovah's Witnesses are a worldwide religious movement that grew out of the Bible Student movement led by Charles Taze Russell in the late 1800s. They are known for door-to-door ministry, the *Watchtower* magazine, and their rejection of the Trinity.",
    facts: [
      { label: "Also called", text: "Witnesses, Bible Students (early name)" },
      { label: "Founded", text: "1870s, Pennsylvania; name adopted in 1931" },
      { label: "Founder", text: "Charles Taze Russell" },
      { label: "Leadership", text: "The Governing Body, through the Watch Tower Society" },
      { label: "Key texts", text: "New World Translation of the Bible; Watchtower publications" },
      { label: "God", text: "Jehovah alone; no Trinity" },
      { label: "Jesus", text: "God's first creation, Michael the archangel before His birth" },
      { label: "Afterlife", text: "144,000 in heaven; most hope for paradise earth; no hell" },
    ],
    parts: [
      {
        heading: "History",
        body: `- **Bible Students:** Charles Taze Russell led a Bible study group in Pennsylvania in the 1870s and began publishing *Zion's Watch Tower* in 1879.
- **Rutherford era:** under Russell's successor, Joseph Rutherford, the movement took the name Jehovah's Witnesses in 1931.
- **End-time dates:** the organization has taught that 1914 marked Christ's invisible rule beginning in heaven. Expectations tied to other dates, such as 1975, were not fulfilled.
- **New World Translation:** their own translation of the Bible, first published in the mid-1900s and revised since.
- **Today:** headquarters are in New York State. Members meet in Kingdom Halls.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Jehovah** alone is the true God. They reject the Trinity.
- **Jesus** was God's first creation. Before coming to earth He was Michael the archangel. The New World Translation renders John 1:1 as “the Word was a god,” and Colossians 1:16 as “all other things” created through Him.
- **The holy spirit** is God's active force, not a person.
- **Death of Jesus:** Jesus died on a stake (not a cross) and was raised as a spirit, not in His body.
- **144,000** anointed believers go to heaven and rule with Christ. Most Witnesses, the “great crowd,” hope to live forever on a paradise earth.
- **Mediator:** the Watchtower teaches that Jesus is mediator of the new covenant for the anointed.
- **No hell:** the soul is not immortal; the wicked cease to exist.
- **Armageddon:** God will soon destroy the present system; the faithful will survive into paradise.
- **The Watchtower** organization and its Governing Body are seen as God's channel of truth.`,
      },
      {
        heading: "Practices",
        body: `- **Public ministry:** door-to-door and literature carts, usually in pairs. Members report hours of preaching.
- **Memorial:** the Lord's Evening Meal is observed once a year; only those who believe they are of the 144,000 partake.
- **Holidays:** they do not celebrate birthdays, Christmas, or Easter.
- **Blood:** they refuse blood transfusions.
- **Neutrality:** they do not vote, salute flags, or serve in the military.
- **Disfellowshipping:** members who leave or are expelled are often shunned by family and friends in the faith.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **Jesus is fully God** ([[John 1:1]], [[John 8:58]], [[John 20:28]], [[Colossians 2:9]]). Thomas called Jesus “My Lord and my God,” and Jesus accepted it.
- **The Father calls the Son “God”** ([[Hebrews 1:8]]) and commands angels to worship Him ([[Hebrews 1:6]]). Even the New World Translation says angels “do obeisance” to the Son, and only God receives worship.
- **Only one God** exists ([[Isaiah 43:10]]), so “a god” beside Him does not fit Scripture. One God in three persons is seen in the one name of [[Matthew 28:19]].
- **Resurrection:** Jesus rose bodily, with flesh and bones ([[Luke 24:39]]).
- **One mediator** for all believers, not just the anointed ([[1 Timothy 2:5]]).
- **Salvation** is a gift received by faith, with assurance ([[1 John 5:13]], [[Ephesians 2:8-9]]). The Law shows that works can't pay for sin ([[Romans 3:20]]).
- See also {{Jesus never claimed to be God|objections/jesus-not-god}}.`,
        verses: ["Hebrews 1:6", "Hebrews 1:8", "John 20:28", "Colossians 2:9"],
      },
      {
        heading: "Further reading",
        body: `- Ron Rhodes, *Reasoning from the Scriptures with the Jehovah's Witnesses*`,
      },
    ],
    tips: `**Questions to ask:**
- “Can we read Hebrews 1:6 in your Bible?”
- “Should angels worship an angel?”
- “Can you know you have eternal life?”
- “Are you one of the 144,000?”

**On the 144,000:** Many Witnesses haven't thought through what it means that Jesus is mediator only for the anointed ([[1 Timothy 2:5]]). Ask gently.

**Pitfalls:**
- **Stay on one topic.** Witnesses are trained to move between many.
- **Don't argue Greek grammar** you can't back up.
- **Be warm.** They're often treated rudely at the door.
- **Be patient.** Leaving the organization can cost them family and friends.

**Going to the Law:** Witnesses work hard to earn a place in paradise and often have no assurance. Ask, “If you stood before Jehovah today, would you be innocent or guilty?” The Law shows that work can't pay for sin ([[Romans 3:20]]).

**Bridge to the gospel:** Point to a Savior who paid it all, received as a gift ([[Ephesians 2:8-9]]), so they can know they have eternal life ([[1 John 5:13]]). ({{Way of the Master|paths/way-of-the-master/3}})`,
  },

  // --- Catholics ---
  {
    id: "catholic",
    title: "Catholics",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `We share a lot: the Trinity, the deity of Christ, His death and resurrection. The key difference is how a person is made right with God, so keep the focus on grace and assurance.`,
    lead: "Catholics are members of the Roman Catholic Church, the largest Christian body in the world, led by the Pope as bishop of Rome. Catholic teaching holds to the Trinity, the deity of Christ, and His death and resurrection, and gives a central place to the Church, its sacraments, and Tradition.",
    facts: [
      { label: "Also called", text: "Roman Catholics" },
      { label: "Founded", text: "Traces itself to Jesus and the apostles, with Peter as the first pope" },
      { label: "Leader", text: "The Pope, with the bishops in communion with him" },
      {
        label: "Key texts",
        text: "The Bible (including the deuterocanonical books); the Catechism of the Catholic Church",
      },
      { label: "Followers", text: "About 1.4 billion worldwide" },
      { label: "God", text: "The Trinity: Father, Son, and Holy Spirit" },
      {
        label: "Salvation",
        text: "By God's grace, received in baptism and growing through the sacraments, faith, and good works",
      },
      { label: "Afterlife", text: "Heaven, hell, and purgatory (purification before heaven)" },
    ],
    parts: [
      {
        heading: "History",
        body: `The Catholic Church sees itself as the continuation of the church Jesus founded on the apostles, with an unbroken line of bishops of Rome from Peter. East and West formally divided in 1054, producing the Catholic and Eastern Orthodox churches. The Protestant Reformation began in 1517; the Council of Trent (1545–1563) answered it, defining Catholic teaching on justification, Scripture and Tradition, and the sacraments. Vatican I (1870) defined papal infallibility, and Vatican II (1962–1965) brought changes such as the Mass in local languages.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Shared with all historic Christians:** the Trinity, the virgin birth, the deity of Christ, the cross, and the resurrection.
- **Justification** is by God's grace. It is begun at baptism and grows through the sacraments and good works, which Catholic teaching regards as themselves the fruit of grace.
- **Mortal sin** destroys grace in the soul; it is restored through confession.
- **Purgatory** purifies those who die in God's grace but still need cleansing.
- **The Mass** re-presents Christ's one sacrifice. Catholic teaching says it is not a new sacrifice but makes the one sacrifice of the cross present.
- **Authority:** Scripture together with Tradition and the teaching of the Church (the Magisterium).
- **Mary** is honored as the Mother of God and believed to be sinless and taken bodily into heaven. Catholic teaching distinguishes this veneration from the worship given to God alone.
- **Assurance:** Catholics are taught to hope for heaven, but official teaching holds that, apart from special revelation, no one can be certain of final perseverance.
- **Many Catholics are cultural** and don't know or follow official teaching, so individual beliefs vary widely.`,
      },
      {
        heading: "Practices",
        body: `- **Seven sacraments:** baptism, confirmation, the Eucharist, confession (reconciliation), anointing of the sick, holy orders, and marriage.
- **Mass** on Sundays and holy days, centered on the Eucharist.
- **Confession** to a priest, especially for mortal sins.
- **Prayer** including the rosary and asking Mary and the saints to intercede.`,
      },
      {
        heading: "Key terms",
        body: `- **Sacrament:** an outward sign through which Catholics believe God gives grace
- **Mortal sin:** a grave sin committed with full knowledge and deliberate consent, which cuts off sanctifying grace
- **Venial sin:** a lesser sin that weakens but does not destroy grace
- **Magisterium:** the Church's teaching authority
- **Transubstantiation:** the belief that the bread and wine become the body and blood of Christ`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `The main difference is how a person is made right with God.
- **Justified by faith apart from works** ([[Romans 3:28]], [[Galatians 2:16]], [[Romans 4:4-5]]). God credits righteousness to the one who trusts Him ([[Ephesians 2:8-9]]).
- **Christ's sacrifice was once for all and fully finished** ([[John 19:30]], [[Hebrews 10:14]]).
- **One mediator** between God and people ([[1 Timothy 2:5]]).
- **Believers can know they have eternal life now** ([[1 John 5:13]]).
- **Scripture is the final authority** over Tradition. See {{Infallibility of Scripture|convictions/infallibility}}.
- **Baptism** follows faith and does not save. See {{Baptism|convictions/baptism}}.`,
        verses: ["Romans 3:28", "Romans 4:4-5", "John 19:30", "Hebrews 10:14"],
      },
      {
        heading: "Further reading",
        body: `- Gregg Allison, *Roman Catholic Theology and Practice*
- Catechism of the Catholic Church, sections 1987–2029 (grace and justification), for what is officially taught`,
      },
    ],
    tips: `**Questions to ask:**
- “If you died tonight, do you know you'd go to heaven?”
- “What are you trusting in to get there?”
- “Is what Jesus did on the cross enough on its own?”

Listen for answers like “I go to Mass,” “I'm a good person,” or “I hope so.” Those show where their trust really is.

**Pitfalls:**
- **Start with the gospel,** not Mary, the Pope, or purgatory.
- **Don't assume** what an individual believes. Many are cultural Catholics. Ask what *they* believe.
- **Be respectful** of their faith and family traditions.
- **Avoid “Catholics aren't Christians.”** Ask whether *they* have been born again.

**Going to the Law:** “Do you think you've kept the Ten Commandments?” Most Catholics believe in God, heaven, hell, and the Ten Commandments, so Way of the Master works very well ([[James 2:10]]).

**Bridge to the gospel:** Once they see they can't earn it, show that Jesus finished the work: “It is finished” ([[John 19:30]]). Salvation is a gift received by faith ([[Ephesians 2:8-9]]). ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Jewish people ---
  {
    id: "jewish",
    title: "Jewish People",
    sources: [],
    summary: `Jesus is the Jewish Messiah promised in the Hebrew Scriptures. Be humble about the church's history and let the Scriptures speak.`,
    lead: "Jewish people are the descendants of ancient Israel and those who have joined them; Judaism is their religion, centered on the one God and His covenant with Israel. Jewish identity is both a people and a faith, and many Jewish people are secular.",
    facts: [
      { label: "Also called", text: "Jews; the religion is Judaism" },
      { label: "Roots", text: "God's covenant with Abraham, and the Law given to Israel through Moses at Sinai" },
      { label: "Key texts", text: "The Hebrew Bible (Tanakh: Torah, Prophets, Writings); the Talmud" },
      { label: "Branches", text: "Orthodox, Conservative, Reform, and secular" },
      { label: "Followers", text: "About 15 million worldwide" },
      { label: "God", text: "One God (the Shema)" },
      { label: "Jesus", text: "Most do not believe Jesus is the Messiah" },
      { label: "Atonement", text: "Usually repentance, prayer, and good deeds, especially on Yom Kippur" },
    ],
    parts: [
      {
        heading: "History",
        body: `The Hebrew Scriptures trace Israel from Abraham through the Exodus, the giving of the Law at Sinai, the kingdom, and the exile. The second temple was destroyed by Rome in AD 70, ending the sacrificial system; rabbinic Judaism, centered on the Torah, prayer, and the synagogue, developed after that. Jesus and His first followers were all Jewish.

Jewish people have endured centuries of persecution, some of it done in Jesus' name by professing Christians, culminating in the Holocaust. The modern State of Israel was founded in 1948.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Wide range:** Orthodox, Conservative, Reform, and secular. Many secular Jews don't believe in God at all.
- **The Shema:** God is one.
- **The Messiah:** religious Jews await the Messiah. Most don't believe Jesus is the Messiah.
- **Atonement:** without a temple, atonement is usually understood as repentance, prayer, and good deeds, especially on Yom Kippur.
- **Afterlife:** many Jewish people don't think much about hell; Jewish views of the afterlife vary.
- **Memory:** many Jewish people carry painful memories of persecution done in Jesus' name.
- **Isaiah 53:** “the servant is Israel” is a common Jewish reading. Many Jewish people have never read the passage.`,
      },
      {
        heading: "Practices",
        body: `- **Sabbath** from Friday evening to Saturday evening
- **Synagogue** worship and Torah reading
- **Festivals** such as Passover, Rosh Hashanah, and Yom Kippur (the Day of Atonement, a day of fasting and repentance)
- **Observance** of food laws and other commandments varies widely between branches`,
      },
      {
        heading: "Key terms",
        body: `- **Tanakh:** the Hebrew Bible
- **Torah:** the Law, the five books of Moses
- **Shema:** the confession that God is one
- **Messiah (Mashiach):** the anointed one
- **Yom Kippur:** the Day of Atonement
- **Messianic Jews:** Jewish believers in Jesus, many of whom keep their heritage`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **The Messiah would suffer and die for the sins of others** ([[Isaiah 53:5]], [[Isaiah 53:8]], [[Psalm 22:16]]). The servant is innocent ([[Isaiah 53:9]]) and suffers for the sins of “my people” ([[Isaiah 53:8]]), which fits Jesus rather than the nation.
- **God promised a new covenant** ([[Jeremiah 31:31]]).
- **Atonement requires blood** ([[Leviticus 17:11]]). Jesus is the final sacrifice.
- **The Messiah would come from Bethlehem and is eternal** ([[Micah 5:2]]).
- **The Hebrew Bible itself** teaches that sin brings death ([[Ezekiel 18:4]]) and judgment after death ([[Daniel 12:2]]).
- **The Law was given to Israel to lead to the Messiah** ([[Galatians 3:24]]). The gospel is “to the Jew first” ([[Romans 1:16]]).
- **Jews and Gentiles** are one people of God in Christ. See {{Israel & the Church|convictions/israel-church}}.`,
        verses: ["Isaiah 53:5", "Isaiah 53:8", "Isaiah 53:9", "Leviticus 17:11", "Micah 5:2", "Galatians 3:24", "Romans 1:16"],
      },
      {
        heading: "Further reading",
        body: `- Michael Brown, *Answering Jewish Objections to Jesus*
- Jews for Jesus (jewsforjesus.org)`,
      },
    ],
    tips: `**Questions to ask:**
- “Can I read you a passage and ask who you think it's about?”
- “How are sins atoned for today without a temple?”

**Isaiah 53 first:** Read it without saying where it's from. Many Jewish people have never read it. Point them to Isaiah 53 first, then Matthew or John.

**If they say “The servant is Israel”:** The servant is innocent ([[Isaiah 53:9]]) and suffers for the sins of “my people” ([[Isaiah 53:8]]).

**Pitfalls:**
- **Never say “the Jews killed Jesus.”** Our sins put Him there, and He laid down His life willingly.
- **Acknowledge** the church's past sins against Jewish people.
- **Present Jesus as the Jewish Messiah,** not as someone asking them to stop being Jewish.
- **Use “Messiah” and “Hebrew Scriptures”** where it helps.
- **Respect Yom Kippur.** Don't call it “informal.” Agree repentance is real, then ask who pays the fine.
- **Jesus and His first followers were all Jewish.** Trusting the Jewish Messiah isn't leaving your people. Many Jewish believers (Messianic Jews) keep their heritage.

**Use the Hebrew Bible:** Quote the Hebrew Bible, not the New Testament, when you can. Instead of “the wages of sin is death,” use “the soul who sins will die” ([[Ezekiel 18:4]]). For judgment after death, use [[Daniel 12:2]].

**Going to the Law:** “The Ten Commandments were given to Israel. Have you kept them?” Ask “innocent or guilty?” rather than “heaven or hell?” Many Jewish people don't think much about hell. The Law was given to lead to the Messiah ([[Galatians 3:24]]).

**Bridge to the gospel:** Paul's heart for his own people drove him to preach to “the Jew first” ([[Romans 1:16]]). Show that the Messiah of Isaiah 53 paid the fine. ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Spiritual but not religious ---
  {
    id: "spiritual",
    title: "“Spiritual but Not Religious”",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    summary: `Often means “I believe in something, but I don't want rules or organized religion.” Find out what they mean, then show that Jesus offers what religion can't.`,
    lead: "“Spiritual but not religious” describes people who believe in a spiritual reality but reject organized religion and its doctrines. Many draw on New Age ideas such as God as energy, the divine self, and karma and reincarnation.",
    facts: [
      { label: "Also called", text: "SBNR; seekers; closely tied to the New Age movement" },
      {
        label: "Roots",
        text: "Transcendentalism, New Thought, Theosophy, and Eastern religions; spread widely from the 1960s on",
      },
      { label: "Key texts", text: "No single scripture; popular books, teachers, and online content" },
      { label: "God", text: "Often an impersonal energy, the universe, or the divine within each person" },
      { label: "Jesus", text: "Admired as a teacher or enlightened master; one way among many" },
      { label: "Salvation", text: "Awakening, growth, or realizing one's own divine nature" },
      {
        label: "Afterlife",
        text: "Often reincarnation, union with the divine, or a vague “better place”",
      },
    ],
    parts: [
      {
        heading: "History",
        body: `The phrase “spiritual but not religious” became common in the late twentieth century as more people in the West left churches without giving up belief in the spiritual. Many of its ideas come from the New Age movement. That movement drew on nineteenth-century American Transcendentalism, the New Thought movement (which taught that the mind shapes reality), and Theosophy (founded in 1875 by Helena Blavatsky and others, mixing Western occultism with Hindu and Buddhist ideas). In the 1960s and 1970s, interest in Eastern religions, meditation, and astrology spread through the counterculture; the “Age of Aquarius” gave the movement its name. Since then the ideas have spread far beyond any organized group, through self-help books, wellness culture, and social media.`,
      },
      {
        heading: "Core beliefs",
        body: `- **God as energy:** God is often seen as an impersonal force, the universe, or “something bigger,” rather than a personal Creator. Some hold that all is God (pantheism).
- **The divine self:** God is often found within; the goal is to awaken to one's own divine nature or “higher self.” Jesus may be described as a man who reached “Christ consciousness.”
- **Many paths:** All religions are seen as different paths to the same truth. Truth is personal: “what's true for you may not be true for me.”
- **Karma and reincarnation:** Actions bring back what one puts out, and souls return in new lives. In Hinduism and Buddhism, rebirth is a cycle of suffering to escape. Western versions usually treat reincarnation as a hopeful series of chances to learn and grow.
- **Personal experience as authority:** Intuition, feelings, and an inner voice are trusted more than any scripture or church.
- Many have been hurt by church or religious people, and many like Jesus but dislike Christians.`,
      },
      {
        heading: "Practices",
        body: `Practices vary widely and are usually chosen individually: meditation, yoga as a spiritual discipline, prayer to “the universe,” manifesting (the “law of attraction,” popularized by the 2006 book *The Secret*), crystals, astrology, tarot, energy healing such as Reiki, contacting spirit guides or the dead, and retreats. There is usually no membership, creed, or weekly gathering.`,
      },
      {
        heading: "Key terms",
        body: `- **Pantheism:** the belief that everything is God.
- **Higher self:** a person's true, divine identity, beyond the everyday self.
- **Christ consciousness:** a state of awareness Jesus is said to have reached, open to anyone.
- **Karma:** the principle that actions return to the one who does them, in this life or the next.
- **Reincarnation:** the soul's rebirth into a new body after death.
- **Manifesting:** using thoughts and intentions to attract outcomes.
- **Relativism:** the view that truth or morality varies by person or culture.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **God is personal and distinct from creation.** The Bible presents one personal God who created all things ([[Genesis 1:1]], [[Colossians 1:16]]) and is not part of His creation. People are made in His image ([[Genesis 1:27]]), not divine themselves. The oldest temptation was “you will be like God” ([[Genesis 3:5]]); there is no other God ([[Isaiah 43:10]]).
- **Not all paths lead to God.** Religions make contradictory claims about Jesus, so they cannot all be true. Jesus claimed to be the only way ([[John 14:6]], [[Acts 4:12]]). The claim that truth is “true for you, not for me” undercuts itself ({{Suicide|skills/suicide}}).
- **Karma versus grace.** Karma says people get what they deserve; if it were true, everyone would be in trouble. Scripture does teach that people reap what they sow ([[Galatians 6:7]]), but the gospel announces grace: God forgives guilty people because Jesus paid their debt ([[Romans 6:23]], [[Ephesians 2:8-9]]).
- **One life, then judgment.** The Bible teaches that people die once and then face judgment, not a series of lives ([[Hebrews 9:27]]).
- **The heart is not a reliable guide.** Scripture warns that the heart is deceitful ([[Jeremiah 17:9]]) and that a way can seem right and still lead to death ([[Proverbs 14:12]]).
- **Spirit contact is forbidden.** The Law forbids divination, sorcery, and consulting the dead ([[Deuteronomy 18:10-12]]).
- **Jesus offers rest, not rules.** He invites the weary to come to Him ([[Matthew 11:28]]). He also confronted religious hypocrisy, so rejecting empty religion does not mean rejecting Him.`,
        verses: ["Genesis 1:27", "Genesis 3:5", "John 14:6", "Galatians 6:7", "Romans 6:23", "Hebrews 9:27", "Jeremiah 17:9", "Proverbs 14:12", "Deuteronomy 18:10-12", "Matthew 11:28"],
      },
      {
        heading: "Further reading",
        body: `- Francis Beckwith and Greg Koukl, *Relativism: Feet Firmly Planted in Mid-Air*
- Douglas Groothuis, *Unmasking the New Age*`,
      },
    ],
    tips: `**Questions to ask:**
- “What do you mean by spiritual?” Use {{Columbo|skills/columbo}}. The answers are often vague. Help them see that.
- “Where does your sense of right and wrong come from?”
- “How do you know your inner voice is trustworthy?” The heart isn't a reliable guide ([[Jeremiah 17:9]], [[Proverbs 14:12]]).

**If they say “That's true for you, not for me”:** It falls apart quickly. See {{Suicide|skills/suicide}} and {{All religions lead to God|objections/all-religions}}.

**Pitfalls:**
- Don't defend “religion.” Jesus confronted religious hypocrites too.
- Don't argue about crystals or astrology. Get to Jesus.
- Listen to their church hurt before you answer ({{Hurt by church|objections/hurt-by-church}}).

**Karma and grace:** Say, “Karma says you get what you deserve. Grace says Someone else took what you deserve.” Karma is bad news for everyone; grace is better news ([[Romans 6:23]]).

**Going to the Law:** Most believe in being a good person, so the Law is a natural next step ({{I'm a good person|objections/good-person}}). Ask, “Do you think you're a good person?” Their conscience already agrees with God ([[Romans 2:15]]).

**Bridge to the gospel:** Jesus is the only way ([[John 14:6]]), and He offers rest to the weary ([[Matthew 11:28]]). ({{Way of the Master|paths/way-of-the-master/2}})`,
  },

  // --- Cultural Christians ---
  {
    id: "nominal",
    title: "Cultural Christians",
    sources: ["Ray Comfort", "Mark Spence", "Living Waters"],
    summary: `“I'm already a Christian.” Some are, many aren't. Don't assume either way; help them examine themselves.`,
    lead: "Cultural (or nominal) Christians identify as Christian by upbringing, family, or culture, but show little sign of personal faith or a changed life. The term describes a pattern, not a denomination; only God sees the heart.",
    facts: [
      {
        label: "Also called",
        text: "Nominal Christians; “Christmas and Easter Christians”; false converts (Ray Comfort's term)",
      },
      { label: "Found in", text: "Every denomination, and in cultures with a Christian heritage" },
      { label: "God", text: "Usually believed in, but distant from daily life" },
      { label: "Jesus", text: "Respected; often seen as Savior in name, with little sense of personal need" },
      { label: "Salvation", text: "Often trusted to goodness, church membership, baptism, or a past prayer" },
      { label: "Afterlife", text: "Usually assume they will go to heaven" },
    ],
    parts: [
      {
        heading: "History",
        body: `Wherever Christianity has been the majority or official faith, many people have belonged to the church by birth and custom rather than personal conviction. In the nineteenth century the Danish philosopher Søren Kierkegaard sharply criticized the comfortable state religion he called “Christendom.” In more recent times, the sociologists Christian Smith and Melinda Lundquist Denton used the term “moralistic therapeutic deism” (2005) to describe a common belief among American teenagers: God exists, wants people to be nice, helps when needed, and takes good people to heaven. Ray Comfort's message *Hell's Best Kept Secret* argues that evangelism without the Law has produced many false converts.`,
      },
      {
        heading: "Core beliefs",
        body: `- Many grew up in church, were baptized, or prayed a prayer as a child.
- They often believe in God and call themselves Christians, but show no sign of a changed life.
- Common grounds of trust: “I'm a good person,” “I believe in God,” “I go to church,” “I prayed the prayer.”
- The Bible is respected but seldom read.`,
      },
      {
        heading: "Key terms",
        body: `- **False conversion:** professing faith without true repentance and trust in Christ.
- **Born again:** the new birth by God's Spirit that Jesus said is needed to see the kingdom of God ([[John 3:3]]).
- **Moralistic therapeutic deism:** belief in a distant God who wants people to be good and happy.
- **Assurance:** the confidence a true believer may have of eternal life ([[1 John 5:13]]).`,
        verses: ["John 3:3", "1 John 5:13"],
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **Calling Jesus Lord is not enough.** Jesus warned that many who call Him Lord will be turned away ([[Matthew 7:21-23]]), and asked why people call Him Lord and do not do what He says ([[Luke 6:46]]). Few find the narrow way ([[Matthew 7:13-14]]).
- **Salvation is by grace through faith,** not by goodness, church attendance, or baptism ([[Ephesians 2:8-9]], [[Titus 3:5]]). See {{Baptism|convictions/baptism}}.
- **True conversion changes a life.** Scripture tells people to examine themselves ([[2 Corinthians 13:5]]). Its tests include obeying God's commands ([[1 John 2:3-4]]) and becoming a new creation ([[2 Corinthians 5:17]]). Belief that God exists is not saving faith; even the demons believe ([[James 2:19]]).
- **Assurance comes from Christ and a changed life,** not a past prayer. 1 John was written so believers can *know* they have eternal life ([[1 John 5:13]]). Those who fall away completely show they were never truly saved ([[1 John 2:19]]); see {{Can You Lose Your Salvation?|convictions/eternal-security}}.
- **The Law shows the need.** The Law brings knowledge of sin ([[Romans 3:20]]) and leads people to Christ ([[Galatians 3:24]]). Many cultural Christians have never understood that they are guilty before God.`,
        verses: ["Matthew 7:21-23", "Luke 6:46", "Matthew 7:13-14", "2 Corinthians 13:5", "1 John 2:3-4", "2 Corinthians 5:17", "James 2:19", "Romans 3:20", "Galatians 3:24"],
      },
      {
        heading: "Further reading",
        body: `- Ray Comfort, *Hell's Best Kept Secret* (free audio message from Living Waters)
- Ray Comfort and Kirk Cameron, *The Way of the Master*`,
      },
    ],
    tips: `**Questions to ask:**
- “When did you become a Christian?”
- “Are you born again? What does that mean to you?”
- “If you died tonight, why should God let you into heaven?”
- “Do you read your Bible?”
- “Do you still love sin?”

**Listen for what they trust:** Christ, or something they did. Red flags are “Because I'm a good person” or “because I go to church.” Ray Comfort warns that false conversion is one of the biggest problems in the church.

**Examine yourself:** Say, “The Bible tells us to test ourselves to see if we're really in the faith” ([[2 Corinthians 13:5]]). Point them to Scripture's tests, not your opinion: obedience ([[1 John 2:3-4]]), a changed life ([[2 Corinthians 5:17]]), faith beyond what demons believe ([[James 2:19]]). Encourage them to read 1 John ([[1 John 5:13]]).

**Pitfalls:**
- Don't tell someone they're not saved. You can't see their heart. Let Scripture do that.
- Don't give false assurance either. “You prayed a prayer, so you're fine” can be deadly.
- Don't rush to the sinner's prayer. Repentance and faith matter, not words.

**Going to the Law:** Say, “Would you mind if we went through a few of the Ten Commandments?” This is what the Law is for: it shows whether someone has truly repented or just added Jesus to their life ([[Galatians 3:24]], [[Romans 3:20]]). Go through it like you would with anyone.

**Bridge to the gospel:** If they trust their own goodness, take them through the Law to the cross ({{Way of the Master|paths/way-of-the-master/3}}). If they're truly saved, encourage them and invite them to share the gospel with you.`,
  },
  {
    id: "hindu",
    title: "Hindus",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle"],
    summary: `Hinduism is a family of traditions, not one creed. Many Hindus gladly honor Jesus as one teacher among many. Lovingly show that He is the only way, and that grace answers what karma can't.`,
    lead: "Hinduism is the major religion of India and Nepal, a broad family of traditions with no single founder, creed, or central authority. Most Hindus share belief in karma, rebirth, and liberation (moksha), while differing widely on God and practice.",
    facts: [
      {
        label: "Also called",
        text: "Sanatana Dharma (“the eternal order” or “eternal way”)",
      },
      {
        label: "Origins",
        text: "Ancient India; no single founder. Grew from the religion of the Vedas over many centuries.",
      },
      {
        label: "Key texts",
        text: "The Vedas (including the Upanishads), the Bhagavad Gita, the Ramayana and Mahabharata, the Puranas",
      },
      { label: "Followers", text: "Over one billion, most in India and Nepal" },
      {
        label: "God",
        text: "Varies: one ultimate reality (Brahman), one supreme god such as Vishnu or Shiva, many gods, or a mix",
      },
      { label: "Jesus", text: "Often honored as a holy man, guru, or one divine incarnation among many" },
      {
        label: "Salvation",
        text: "Moksha: release from the cycle of rebirth, by knowledge, devotion, or right action",
      },
      { label: "Afterlife", text: "Rebirth according to karma until liberation" },
    ],
    parts: [
      {
        heading: "History",
        body: `Hinduism has no single founding moment. Its oldest scriptures, the Vedas, were composed in ancient India and passed down orally for centuries. Later texts, the Upanishads, explored the nature of ultimate reality and the self. The great epics, the Ramayana and the Mahabharata (which contains the Bhagavad Gita), and the Puranas shaped popular devotion to gods such as Vishnu, his incarnations Rama and Krishna, Shiva, and the goddess (Devi).

Over time devotional movements (bhakti) spread across India, and philosophical schools developed different readings of the Upanishads. In the modern era, teachers carried Hindu ideas to the West, where yoga, meditation, and groups such as ISKCON (the Hare Krishna movement) became widely known. The word “Hindu” itself began as an outsider's term for the people beyond the Indus River.`,
      },
      {
        heading: "Major branches",
        body: `Hindus often describe their tradition by the deity they treat as supreme:
- **Vaishnavism:** devotion to Vishnu and his incarnations (avatars), especially Krishna and Rama. ISKCON belongs to this family.
- **Shaivism:** devotion to Shiva as the supreme god.
- **Shaktism:** devotion to the goddess, Devi or Shakti, in forms such as Durga and Kali.
- **Smarta tradition:** worship of several deities as forms of the one ultimate reality.

Philosophical schools also differ. **Advaita Vedanta** (associated with Shankara) teaches that the true self (atman) is identical with Brahman and that the world of separate things is illusion (maya). Other Vedanta schools, associated with Ramanuja and Madhva, keep a real distinction between the soul and a personal God. Many ordinary Hindus mix family, regional, and village traditions and do not identify with one school.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Brahman:** the one ultimate reality behind everything. Some understand it as impersonal; others as a personal God.
- **Many gods:** many Hindus worship numerous deities, often seen as forms or expressions of one divine reality. Some are close to monotheism, with one supreme god.
- **Atman:** the eternal self or soul.
- **Karma:** every action brings results, in this life or a later one. There is no judge who pardons; the law of action and result works itself out.
- **Samsara:** the cycle of birth, death, and rebirth. A soul may be reborn as a human, an animal, or another being.
- **Moksha:** liberation from samsara. In nondual teaching, it is realizing the self is one with Brahman; in devotional teaching, it is eternal union with or service to a personal God.
- **Dharma:** duty and right order, including one's duties in family and society.
- **Three paths:** the Bhagavad Gita describes paths of action (karma yoga), knowledge (jnana yoga), and devotion (bhakti yoga). Some devotional traditions speak strongly of God's grace.
- **Many paths:** many Hindus see other religions as different paths suited to different people, all leading to the same goal.`,
      },
      {
        heading: "Practices",
        body: `- **Puja:** worship at home shrines and temples, often before images of the gods (murti), with offerings of flowers, food, light, and incense.
- **Festivals:** Diwali (festival of lights) and Holi are among the best known.
- **Pilgrimage:** to holy places such as Varanasi and the Ganges River.
- **Yoga and meditation:** in Hinduism these are spiritual disciplines, not only exercise.
- **Ethics:** nonviolence (ahimsa), truthfulness, and duty are widely valued. Many Hindus are vegetarian, and the cow is honored.
- **Caste:** a hereditary social system (varna and jati) long tied to ideas of karma and duty. Caste discrimination is illegal in India, and many Hindus reject it, though it still shapes society.`,
      },
      {
        heading: "Key terms",
        body: `- **Avatar:** a descent of a god, especially Vishnu, into the world in a bodily form.
- **Guru:** a spiritual teacher.
- **Maya:** illusion, or the changing appearance of the world.
- **Avidya:** ignorance of one's true nature, often seen as the root problem.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **God:** the Bible reveals one personal, holy God, the Creator, distinct from His creation ([[Genesis 1:1]], [[Isaiah 44:6]]). People are made in His image, not divine themselves ([[Genesis 1:27]]).
- **The problem:** Scripture names the root problem as sin, a moral offense against God, not ignorance of one's true self ([[Romans 3:23]], [[Psalm 51:4]]).
- **One life:** the Bible teaches one life, then judgment, not many lives ([[Hebrews 9:27]]). The dead will be raised ([[Daniel 12:2]]).
- **Karma and grace:** karma gives each person what they earn. The gospel offers forgiveness as a free gift, because Christ bore the penalty for sin ([[Romans 6:23]], [[Ephesians 2:8-9]], [[1 Peter 3:18]]). Some bhakti traditions speak of divine grace, but without a substitute who pays for sin.
- **Jesus:** not one avatar among many, but the eternal Word who became flesh once and for all ([[John 1:1]], [[John 1:14]]). He died, rose bodily, and claimed to be the only way to the Father ([[John 14:6]], [[1 Corinthians 15:3-4]]).
- **Worship:** the Bible forbids worshiping other gods or images ([[Exodus 20:3]]).`,
        verses: ["Genesis 1:1", "Isaiah 44:6", "Hebrews 9:27", "Romans 6:23", "Ephesians 2:8-9", "John 1:14", "John 14:6"],
      },
      {
        heading: "Further reading",
        body: `- Winfried Corduan, *Neighboring Faiths*
- Lesson 79, Hinduism, in the {{School of Biblical Evangelism|convictions/school-of-biblical-evangelism}}`,
      },
    ],
    tips: `**Approach:** Hinduism is very diverse. Ask what they believe instead of assuming. A temple-going family, a philosophy student, and a Western yoga teacher may believe very different things.

**Questions to ask:**
- “Which god or tradition does your family follow?”
- “What do you think happens when we die?”
- “If karma is real, what do you have coming?”
- “Who do you think Jesus is?”

**Pitfalls:**
- **Don't let Jesus be added to the shelf.** Many Hindus will happily accept Jesus as one god among many. The issue is whether He is the only way ([[John 14:6]]).
- **Define your terms.** Words like God, sin, salvation, and born again can mean very different things. “Born again” may sound like reincarnation.
- **Don't mock images or gods.** Be gentle and respectful ([[1 Peter 3:15]]).
- **Family and community matter.** Leaving the family religion can be costly. Be patient.
- **Don't get lost in philosophy.** Stay on sin, judgment, and the cross.

**Reincarnation:** “The Bible says we die once, and after that comes judgment” ([[Hebrews 9:27]]). One life raises the stakes.

**Karma and grace:** “Karma says you get what you deserve. Grace says Someone else took what you deserve.” Karma is bad news for anyone with a past ([[Romans 6:23]]).

**Going to the Law:** Many Hindus value truthfulness and nonviolence, so the conscience already agrees. Use the Ten Commandments: lying, stealing, lust, hatred. The problem isn't ignorance but guilt before a holy God.

**Bridge to the gospel:** Jesus didn't come to show a path. He came to pay the debt karma can only collect. {{Way of the Master|paths/way-of-the-master/2}}. See also {{All religions lead to God|objections/all-religions}}.`,
  },
  {
    id: "buddhist",
    title: "Buddhists",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle"],
    summary: `Buddhists see suffering clearly and often value peace and ethics. Agree that something is deeply wrong, then show that the root is sin, not desire, and that grace offers what karma can't.`,
    lead: "Buddhism is a religion and philosophy founded on the teaching of Siddhartha Gautama, called the Buddha (“awakened one”). Its traditions differ widely, but most teach that suffering arises from craving and ignorance and can be ended by following the Buddha's path to nirvana.",
    facts: [
      { label: "Founder", text: "Siddhartha Gautama, the Buddha" },
      { label: "Founded", text: "Northern India, around the fifth century BC (exact dates are debated)" },
      {
        label: "Key texts",
        text: "The Pali Canon (Theravada), Mahayana sutras such as the Lotus and Heart Sutras, Tibetan scriptures",
      },
      { label: "Followers", text: "Roughly 500 million, mostly in East and Southeast Asia" },
      { label: "God", text: "No creator God. Gods may exist but are within the cycle of rebirth." },
      { label: "Jesus", text: "Often seen as a wise or enlightened teacher" },
      { label: "Salvation", text: "Nirvana: the end of craving, suffering, and rebirth" },
      { label: "Afterlife", text: "Rebirth driven by karma until nirvana" },
    ],
    parts: [
      {
        heading: "History",
        body: `According to Buddhist tradition, Siddhartha Gautama was born a prince in the region of present-day Nepal and northern India. Troubled by old age, sickness, and death, he left his privileged life to seek an answer to suffering. After years of searching, including severe self-denial, he is said to have reached enlightenment while meditating under a tree, and spent the rest of his life teaching a “middle way.”

After his death, his teaching spread across Asia. Disagreements over teaching and discipline produced distinct traditions. In the twentieth century, Buddhist teachers and practices such as meditation and mindfulness became popular in the West, often in a secular form.`,
      },
      {
        heading: "Major branches",
        body: `- **Theravada** (“teaching of the elders”): mainly in Sri Lanka, Thailand, Myanmar, Cambodia, and Laos. Stresses the Pali Canon, monastic life, and personal effort toward nirvana.
- **Mahayana** (“great vehicle”): mainly in China, Japan, Korea, and Vietnam. Honors bodhisattvas, enlightened beings who delay nirvana to help others. Includes **Zen**, which emphasizes meditation, and **Pure Land**, which relies on the vow of Amida (Amitabha) Buddha to bring the faithful to rebirth in a paradise called the Pure Land.
- **Vajrayana or Tibetan Buddhism:** in Tibet, Mongolia, and Bhutan. Uses ritual, mantras, and teachers called lamas. The Dalai Lama is its best-known figure.
- **Western Buddhism:** often centered on meditation and mindfulness, sometimes with little belief in rebirth or the supernatural.

Folk Buddhism in much of Asia also includes prayers to Buddhas, bodhisattvas, spirits, and ancestors.`,
      },
      {
        heading: "Core beliefs",
        body: `- **Four Noble Truths:** life involves suffering or unsatisfactoriness (dukkha); suffering arises from craving (tanha); suffering can end (nirvana); the way to end it is the Noble Eightfold Path.
- **Eightfold Path:** right view, intention, speech, action, livelihood, effort, mindfulness, and concentration.
- **Three marks of existence:** everything is impermanent (anicca), unsatisfactory (dukkha), and without a permanent self (anatta).
- **Karma:** intentional actions shape future experience and future births. There is no judge who pardons.
- **Rebirth:** the cycle of samsara continues across lives. Because Buddhism denies a permanent soul, most Buddhists speak of rebirth rather than a soul moving from body to body.
- **Nirvana:** the “blowing out” of craving, ignorance, and the cycle of rebirth. It is not usually described as union with God or as heaven.
- **Ignorance and craving** are the root problem, not offense against a creator.
- **God:** the Buddha did not teach a creator God. Traditional cosmology includes gods (devas), but they are also bound in samsara.`,
      },
      {
        heading: "Practices",
        body: `- **Three Refuges:** taking refuge in the Buddha, the Dharma (teaching), and the Sangha (community).
- **Five Precepts** for lay Buddhists: not killing, not stealing, no sexual misconduct, not lying, and no intoxicants.
- **Meditation:** mindfulness and concentration practices, central in many traditions.
- **Devotion:** bowing, offerings, chanting, and visiting temples and shrines.
- **Monastic life:** monks and nuns follow many more rules; in Theravada countries, laypeople support them with food and gifts as a way of earning merit.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **God:** the Bible begins with a personal Creator ([[Genesis 1:1]], [[Acts 17:24]]). Creation points to Him ([[Romans 1:20]]).
- **The problem:** Scripture says the root problem is sin, an offense against a holy God, coming from the heart ([[Mark 7:21]], [[Psalm 51:4]]). Desire itself is not the problem; wrong desire is.
- **The self:** people are real, made in God's image, and will exist forever ([[Genesis 1:27]]).
- **One life:** people die once and then face judgment, not endless rebirth ([[Hebrews 9:27]]).
- **The solution:** not extinguishing the self by effort, but forgiveness and a new life given by God ([[Titus 3:5]], [[2 Corinthians 5:17]]).
- **Karma and grace:** karma gives each person what they earn. Grace gives what is not earned, because Christ bore the penalty ([[Romans 6:23]], [[1 Peter 3:18]]). Pure Land Buddhism also speaks of relying on another's power, but has no atonement for sin.
- **Jesus:** the Buddha pointed to a path; Jesus claimed to be the way ([[John 14:6]]), forgave sins ([[Mark 2:5-7]]), and rose from the dead ([[1 Corinthians 15:3-4]]).`,
        verses: ["Genesis 1:1", "Mark 7:21", "Hebrews 9:27", "Titus 3:5", "Romans 6:23", "John 14:6"],
      },
      {
        heading: "Further reading",
        body: `- Winfried Corduan, *Neighboring Faiths*
- Lessons 80 and 81, Buddhism, in the {{School of Biblical Evangelism|convictions/school-of-biblical-evangelism}}`,
      },
    ],
    tips: `**Approach:** Buddhism varies a lot. Ask which tradition they follow. A Thai Theravada family, a Japanese Pure Land believer, and an American who meditates may believe very different things.

**Questions to ask:**
- “What drew you to Buddhism?” or “Were you raised Buddhist?”
- “Where do you think suffering comes from?”
- “What do you think happens after you die?”
- “If karma is real, what do you have coming?”

**Pitfalls:**
- **Don't assume they believe in God.** Many don't. Start with creation and conscience if needed.
- **Define your terms.** Sin, salvation, and heaven may mean little to them. Explain simply.
- **Don't argue about meditation.** Stay on sin, judgment, and the cross.
- **Be patient and gentle.** Family, culture, and national identity are often bound up with Buddhism.

**Sin, not desire:** Agree that suffering is real and that craving causes much of it. Then go deeper: “Jesus said evil comes from the heart” ([[Mark 7:21]]). The problem isn't having desires, but wrong ones, and guilt before God.

**Rebirth:** “The Bible says we die once, and after that comes judgment” ([[Hebrews 9:27]]).

**Karma and grace:** “Karma says you pay. Grace says Someone paid for you.” Pure Land believers already understand relying on another's power; point them to the One who actually paid for sin.

**Going to the Law:** The Five Precepts forbid killing, stealing, sexual misconduct, and lying. Ask if they've kept them, then go to the Ten Commandments.

**Bridge to the gospel:** {{Way of the Master|paths/way-of-the-master/2}}. See also {{All religions lead to God|objections/all-religions}} and {{What about sincere people of other religions?|objections/sincere-religions}}.`,
  },
  {
    id: "adventist",
    title: "Seventh-Day Adventists",
    sources: ["Ray Comfort", "Greg Koukl"],
    summary: `Many Adventists love Jesus, believe the Trinity, and speak of grace. Start there, then focus on assurance: is Christ's finished work enough on its own?`,
    lead: "The Seventh-day Adventist Church is a Protestant denomination that grew out of the 1840s Millerite movement in the United States. It is known for worship on Saturday, the seventh day, for its emphasis on Christ's soon return, and for its health teaching.",
    facts: [
      { label: "Also called", text: "Adventists, SDA" },
      { label: "Founded", text: "Organized in 1863 in Battle Creek, Michigan, out of the Millerite movement" },
      { label: "Founders", text: "Ellen G. White, James White, and Joseph Bates, among others" },
      {
        label: "Key texts",
        text: "The Bible; the 28 Fundamental Beliefs; the writings of Ellen G. White, such as *The Great Controversy* and *Steps to Christ*",
      },
      { label: "Followers", text: "Over 20 million baptized members worldwide" },
      { label: "God", text: "One God in three persons (the Trinity), in official teaching" },
      { label: "Jesus", text: "Eternal God, made flesh; died for sins and rose bodily" },
      {
        label: "Afterlife",
        text: "The dead are unconscious until the resurrection; the lost are finally destroyed, not punished forever",
      },
    ],
    parts: [
      {
        heading: "History",
        body: `**The Millerites:** In the 1830s and 1840s, the Baptist preacher William Miller taught from Daniel 8:14 (“2,300 evenings and mornings”) that Christ would return around 1843 to 1844. His followers settled on October 22, 1844. When Jesus did not return, the day became known as the Great Disappointment.

**A new explanation:** A small group concluded the date was right but the event was wrong. Instead of coming to earth, Christ had entered the Most Holy Place of the heavenly sanctuary to begin a final phase of His work. This became the teaching of the investigative judgment.

**Organization:** Joseph Bates promoted keeping the seventh-day Sabbath, and Ellen G. White (1827 to 1915) was accepted by the group as having the gift of prophecy. The General Conference of Seventh-day Adventists was organized in 1863.

**Discussion with evangelicals:** In the 1950s, Adventist leaders met with evangelicals including Walter Martin, and the church published *Questions on Doctrine* (1957) to explain its beliefs. Martin concluded that the church, as its leaders described it, held to the gospel while teaching some serious errors. Other Christians, including some former Adventists, disagreed. Debate over the investigative judgment also continued inside the church, notably around the theologian Desmond Ford in 1980.`,
      },
      {
        heading: "Core beliefs",
        body: `Many Adventist beliefs are shared with other Protestants:
- **The Trinity:** one God in three persons, Father, Son, and Holy Spirit.
- **Jesus** is fully God and fully man, born of a virgin, crucified for sins, and bodily raised.
- **Salvation** is described in official teaching as by grace through faith in Christ.
- **Scripture** is affirmed as the inspired Word of God and the standard for doctrine.
- **The second coming** is literal, visible, and near.

Distinctive teachings include:
- **The seventh-day Sabbath:** Saturday, from Friday sunset to Saturday sunset, is the Lord's day of rest and worship, and keeping it is part of obeying the Ten Commandments.
- **Ellen G. White:** her writings are regarded as a genuine prophetic gift and an authoritative source of truth for the church, though Adventists say they are tested by and subject to the Bible.
- **The investigative judgment:** since 1844 Christ has been reviewing the records of those who have professed faith, as the final phase of His priestly ministry in the heavenly sanctuary, before His return.
- **Soul sleep:** humans do not have an immortal soul that lives on consciously after death. The dead sleep until the resurrection.
- **Annihilation:** the unsaved will be raised for judgment and then destroyed, not punished consciously forever.
- **The remnant church:** traditional teaching sees the Adventist movement as the end-time remnant of Revelation 12:17, called to proclaim the three angels' messages of Revelation 14. Traditional teaching has also linked a future enforced Sunday worship with the mark of the beast; Adventists generally say no one has received that mark yet.`,
      },
      {
        heading: "Practices",
        body: `- **Sabbath worship:** Saturday services, with Sabbath School (Bible study) and a worship service. Many avoid work, shopping, and secular entertainment on the Sabbath.
- **Health message:** abstaining from alcohol and tobacco, avoiding meats called unclean in Leviticus 11, and often vegetarian diets. Adventists run many hospitals and Loma Linda University in California.
- **Baptism** of believers by immersion, and foot washing before the Lord's Supper.
- **Education and mission:** a large worldwide network of schools, hospitals, and relief work, including the Adventist Development and Relief Agency (ADRA).`,
      },
      {
        heading: "Key terms",
        body: `- **Great Disappointment:** the failure of Christ to return on October 22, 1844.
- **Investigative judgment:** the teaching that Christ began a final review of professed believers' records in 1844.
- **Sanctuary doctrine:** the belief that Christ's ministry in heaven follows the pattern of the Old Testament tabernacle, with a Holy Place and Most Holy Place.
- **Spirit of Prophecy:** a common Adventist term for Ellen G. White's writings.
- **Remnant:** God's faithful end-time people who keep His commandments.
- **Michael:** Adventists hold that Michael the archangel is a title of Christ. Unlike Jehovah's Witnesses, they teach that Christ is eternal and uncreated.`,
      },
      {
        heading: "How Christians classify Adventism",
        body: `Christians disagree. Some see the Seventh-day Adventist Church as an evangelical denomination with unusual teachings, since it officially affirms the Trinity, the deity of Christ, and salvation by grace. Others see it as a sect or an aberrant group because of Ellen White's authority, the investigative judgment, and its view of Sunday worship. Members also vary widely: some sound like any evangelical, while others stress Ellen White and law-keeping. It is fairest to treat each person according to what they actually believe.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **The finished work of Christ:** the New Testament says Christ entered the holy place in heaven “once for all” at His ascension, having obtained eternal redemption (Hebrews 9:12, Hebrews 6:19-20). His one offering has perfected for all time those who are sanctified ([[Hebrews 10:12]], [[Hebrews 10:14]]). Nothing in Scripture describes a new phase of atonement or review beginning in 1844.
- **Assurance:** believers have eternal life now and do not come into judgment ([[John 5:24]], [[1 John 5:13]]). There is no condemnation for those in Christ ([[Romans 8:1]]).
- **The Sabbath:** Paul calls the Sabbath, along with festivals and food laws, “a mere shadow of what is to come; but the substance belongs to Christ” ([[Colossians 2:16-17]]). He leaves the observance of days to each person's conscience ([[Romans 14:5]]). Hebrews 4 presents Christ as the rest the Sabbath pointed to. The other nine commandments are repeated in the New Testament as commands; the Sabbath is not. See {{The Law: What Still Applies|evidence/the-law}}.
- **Prophecy:** Scripture is the final test of every prophet ([[1 Thessalonians 5:21]], [[Acts 17:11]]). The 1844 date grew out of a failed prediction, and Jesus said no one knows the day or hour ([[Matthew 24:36]]).
- **The state of the dead:** Paul says to be absent from the body is to be at home with the Lord ([[2 Corinthians 5:8]]), and Jesus promised the thief, “today you shall be with Me in Paradise” ([[Luke 23:42-43]]).
- **Hell:** Jesus set eternal punishment beside eternal life ([[Matthew 25:46]]), and Daniel speaks of everlasting contempt ([[Daniel 12:2]]).`,
        verses: ["Hebrews 10:14", "John 5:24", "Romans 8:1", "Colossians 2:16-17", "2 Corinthians 5:8", "Matthew 25:46"],
      },
      {
        heading: "Further reading",
        body: `- *Seventh-day Adventists Believe* (the church's own explanation of its 28 Fundamental Beliefs)
- Walter Martin, *The Kingdom of the Cults* (appendix on Adventism)
- {{The Law: What Still Applies|evidence/the-law}}
- {{School of Biblical Evangelism|convictions/school-of-biblical-evangelism}}, lesson 92`,
      },
    ],
    tips: `**Start with common ground:** Many Adventists believe in the Trinity, the deity of Christ, and salvation by grace. Thank God for that. Don't open with Ellen White, 1844, or the Sabbath; you'll end up arguing about days instead of the gospel.

**Find out where they stand:** Adventists vary a lot. Some sound like any evangelical; others lean heavily on Ellen White and law-keeping. Ask before you assume.

**Questions to ask:**
- “What do you love most about your church?”
- “If you died today, do you know you'd be with the Lord?”
- “Is anything you do part of what keeps you saved?”
- “If Ellen White and the Bible seemed to disagree, which would win?”

**Focus on assurance:** Many Adventists hope they'll be ready but aren't sure, especially if they were taught that their lives are being reviewed in the investigative judgment. The heart of the conversation is whether Christ's finished work is enough. Assurance rests on His work, not on ours ([[John 19:30]], [[Hebrews 10:14]], [[1 John 5:13]]). Most Adventists believe a Christian can lose salvation; a true believer is kept by God ({{Can You Lose Your Salvation?|convictions/eternal-security}}).

**On the Sabbath:** Keep it short. “Paul calls the Sabbath a shadow; the substance is Christ” ([[Colossians 2:16-17]]). Christians differ on the day; the real question is whether keeping it is part of being saved. See {{The Law: What Still Applies|evidence/the-law}}.

**Pitfalls:**
- Don't call them a cult in the first sentence. Many are born-again believers.
- Don't attack Ellen White's character. Ask how her writings are tested.
- Don't get pulled into food laws, Daniel 8, or the mark of the beast. Come back to the cross.

**Going to the Law:** Adventists honor the Ten Commandments, which is great common ground. Show that the Law is a mirror, not a ladder ([[Romans 3:20]], [[Galatians 3:24]]). Breaking one commandment makes a person guilty of all ([[James 2:10]]), so no one is saved by keeping them, the Sabbath included.

**Bridge to the gospel:** “Jesus said, ‘It is finished.’ If He paid it all, nothing is left for you to settle.” ({{Way of the Master|paths/way-of-the-master/3}})`,
  },
  {
    id: "oneness",
    title: "Oneness Pentecostals",
    sources: ["Ray Comfort", "Greg Koukl", "Wes Huff"],
    summary: `Oneness Pentecostals love Jesus and believe He is fully God, but deny the Trinity and often add baptism in Jesus' name and tongues to salvation. Talk about who Jesus prayed to, and grace alone.`,
    lead: "Oneness Pentecostalism is a branch of the Pentecostal movement that teaches God is a single person who reveals Himself as Father, Son, and Holy Spirit. It emerged around 1913 to 1916 and is known for baptizing only in the name of Jesus.",
    facts: [
      { label: "Also called", text: "Apostolic, Jesus' Name, or “Jesus Only” Pentecostals" },
      { label: "Founded", text: "About 1913 to 1916, within early American Pentecostalism" },
      {
        label: "Largest bodies",
        text: "United Pentecostal Church International (UPCI); Pentecostal Assemblies of the World (PAW)",
      },
      { label: "Key texts", text: "The Bible, especially Acts 2:38, Deuteronomy 6:4, and Colossians 2:9" },
      { label: "God", text: "One person, not three; Father, Son, and Spirit are ways He reveals Himself" },
      { label: "Jesus", text: "Fully God and fully man; “Jesus” is the name of the one God" },
      {
        label: "Salvation",
        text: "Often taught as repentance, baptism in Jesus' name, and receiving the Spirit with tongues",
      },
    ],
    parts: [
      {
        heading: "History",
        body: `**Origins:** At a Pentecostal camp meeting at Arroyo Seco near Los Angeles in 1913, a preacher spoke on baptism in the name of Jesus, based on Acts 2:38. Some ministers, including Frank Ewart, began rebaptizing believers in Jesus' name only, and the teaching developed into a denial of the Trinity.

**The split:** In 1916 the Assemblies of God adopted a statement affirming the Trinity, and Oneness ministers left. Oneness groups then formed their own bodies. The Pentecostal Assemblies of the World became a major Oneness church, and the United Pentecostal Church International was formed by a merger in 1945.

**Older roots:** The view resembles modalism (also called Sabellianism), taught by Sabellius and others in the early third century and rejected by the early church. Tertullian wrote *Against Praxeas* around AD 213 against an early form of it. Oneness teachers generally see themselves as restoring the apostles' teaching rather than following Sabellius.`,
      },
      {
        heading: "Core beliefs",
        body: `- **God is one person.** Oneness believers stress that God is absolutely one (Deuteronomy 6:4). Father, Son, and Holy Spirit are not three persons but titles or manifestations of the one God.
- **Jesus is that one God.** All the fullness of deity dwells in Jesus ([[Colossians 2:9]]). The Father is God as Spirit, the Son is God made flesh, and the Holy Spirit is God at work in believers.
- **The Son began at the incarnation.** The Son refers to the human nature of Christ, so most Oneness teachers deny that the Son existed eternally as a distinct person.
- **The name of Jesus:** the “name” in [[Matthew 28:19]] is understood to be Jesus, so baptism must be done “in the name of Jesus Christ” ([[Acts 2:38]]), not with the words “Father, Son, and Holy Spirit.”
- **The new birth:** many Oneness churches, including the UPCI, teach that the full new birth includes repentance, water baptism by immersion in Jesus' name, and receiving the Holy Spirit with the evidence of speaking in tongues. Some Oneness believers hold that faith and repentance save, with baptism and tongues following.
- **Holiness:** a holy life is expected, often expressed in outward standards.`,
      },
      {
        heading: "Practices",
        body: `- **Lively worship** with singing, raised hands, prayer at the altar, and expectation of the Spirit's gifts.
- **Baptism by immersion** in Jesus' name. Converts baptized with the Trinitarian formula are usually rebaptized.
- **Holiness standards** vary by church. Common ones: women with long, uncut hair, wearing dresses or skirts, and avoiding makeup and jewelry; men with short hair; modest dress; caution about some forms of entertainment.
- **Speaking in tongues** is sought and seen as the initial sign of receiving the Holy Spirit.`,
      },
      {
        heading: "Key terms",
        body: `- **Oneness:** God is one person, not three.
- **Modalism:** the older name for the view that Father, Son, and Spirit are modes or roles of one person.
- **Jesus' Name baptism:** baptism using the words “in the name of Jesus Christ.”
- **Initial evidence:** speaking in tongues as the first sign of the Spirit's baptism.
- **Apostolic:** a term many Oneness churches use for themselves, claiming the apostles' teaching.`,
      },
      {
        heading: "Where it differs from biblical Christianity",
        body: `- **The Trinity:** historic Christianity teaches one God in three distinct, co-equal, eternal persons. It agrees with Oneness believers that there is only one God ([[Isaiah 44:6]]) and that Jesus is fully God ([[John 1:1]], [[Colossians 2:9]]). It differs on whether the Father, Son, and Spirit are distinct persons.
- **All three at once:** at Jesus' baptism the Son is in the water, the Spirit descends, and the Father speaks from heaven about His beloved Son ([[Matthew 3:16-17]]).
- **Relationship before creation:** Jesus prayed to the Father for the glory He had “with You before the world was” and said the Father loved Him “before the foundation of the world” ([[John 17:5]], [[John 17:24]]). The Word was with God and was God ([[John 1:1]]). This points to a distinct person of the Son before the incarnation, not only a human nature added later.
- **The Father and the Son relate as persons:** the Son prays to, is sent by, and speaks of the Father, and the Spirit is “another Helper” (John 14:16).
- **Salvation by grace through faith:** Scripture says salvation is a gift received by faith, not by works ([[Ephesians 2:8-9]], [[Titus 3:5]]). The thief on the cross was promised paradise without baptism ([[Luke 23:42-43]]). Cornelius and his household received the Holy Spirit before they were baptized (Acts 10:44-48). Baptism is a command for believers but not the means of salvation; see {{Baptism|convictions/baptism}}.
- **Tongues:** Paul asks, “All do not speak with tongues, do they?” (1 Corinthians 12:30), expecting the answer no. Believers are sealed with the Spirit when they believe ([[Ephesians 1:13-14]]).
- **Holiness:** holiness is the fruit of salvation, not a condition for it ([[Ephesians 2:10]], [[Romans 11:6]]).`,
        verses: ["Matthew 3:16-17", "John 17:5", "John 17:24", "John 1:1", "Ephesians 2:8-9", "Luke 23:42-43"],
      },
      {
        heading: "Further reading",
        body: `- David K. Bernard, *The Oneness of God* (a leading Oneness presentation)
- Gregory Boyd, *Oneness Pentecostals and the Trinity* (by a former Oneness Pentecostal)
- James White, *The Forgotten Trinity*
- {{School of Biblical Evangelism|convictions/school-of-biblical-evangelism}}, lesson 90`,
      },
    ],
    tips: `**Start with common ground:** Oneness Pentecostals believe Jesus is fully God, and they're often zealous and sincere. Say so. Don't mock holiness standards or worship styles.

**Questions to ask:**
- “How did you come to faith?”
- “At Jesus' baptism, who was the voice from heaven talking to?”
- “Who was Jesus with before the world was made?”
- “If someone trusted Jesus but died before being baptized, could they be saved?”

**Define the Trinity first:** Many Oneness believers think the Trinity means three gods. Make clear Christians believe in one God in three persons, not three gods. They may have been arguing against something you don't believe.

**On the Trinity:** Stay in a few clear passages: Jesus' baptism ([[Matthew 3:16-17]]) and Jesus' prayer in John 17 ([[John 17:5]], [[John 17:24]]). Ask questions rather than lecture (the Columbo approach). Expect the answer that the Father was speaking to the human nature; ask how a human nature could share glory with the Father before the world was.

**On salvation:** Many have been taught that without baptism in Jesus' name and tongues they aren't saved. That can bring either pride or fear. Show that salvation is by grace through faith ([[Ephesians 2:8-9]]), and that the thief on the cross was saved without either ([[Luke 23:42-43]]). Baptism matters as obedience but doesn't save ({{Baptism|convictions/baptism}}). Assurance rests on Christ's work ([[1 John 5:13]]).

**Pitfalls:**
- Don't argue over the baptism formula first. Who God is and how we're saved matter more.
- Don't deny that tongues are real; the question is whether they're required.
- Don't get lost in Church history; one or two Bible passages work better.

**Going to the Law:** Holiness standards can leave someone feeling righteous for what they avoid, or crushed for falling short. The Law shows that no one measures up inside, where God looks ([[Romans 3:20]], [[James 2:10]]).

**Bridge to the gospel:** “If you had to keep every standard perfectly to be saved, would you make it? That's why Jesus paid it all.” ({{Way of the Master|paths/way-of-the-master/3}})`,
  },
];
