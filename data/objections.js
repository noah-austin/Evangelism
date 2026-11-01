// OBJECTIONS & QUESTIONS
//
// Each objection:
//   title:    what they say (shown in quotes)
//   oneLiner: what to say right now
//   askBack:  a question to hand back to them
//   short:    the ~30-second answer
//   deep:     notes for study at home
//   verses:   verse references
//   related:  links to other pages ("section/id")
//   category: which group it shows under (see DATA.objectionCategories)
//   sources:  where this approach comes from
//
// Text supports **bold**, *italics*, "- " lists, [[Verse Ref]] and {{Label|section/id}} links.

window.DATA = window.DATA || {};

DATA.objectionCategories = [
  "The Gospel & Salvation",
  "God & Suffering",
  "Jesus",
  "The Bible",
  "Science",
  "Other Religions",
  "Abortion",
  "Church & Christians",
];

DATA.objections = [
  {
    id: "good-person",
    category: "The Gospel & Salvation",
    title: "I'm a good person",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Most people think they're good. Can I ask you a few questions to see if you'd pass God's standard?",
    askBack: "Good compared to what? Other people, or God?",
    short: `Most of us compare ourselves to other people, so we look pretty good. But God doesn't grade on a curve. His standard is His Law, and He sees the heart.

Let's try it. Have you ever told a lie? Stolen anything, even something small? Used God's name as a curse word? Looked at someone with lust? Most of us have done all four. So if God judged you by that standard, would you be innocent or guilty?`,
    deep: `**Why this works:** Most people proclaim their own goodness ([[Proverbs 20:6]]). The Law exposes that self-righteousness so grace makes sense ([[Romans 3:20]], [[Galatians 3:24]]).

**If they say “I'm better than most people”:** A criminal can't tell a judge “I've done more good than bad.” The law still has to be satisfied.

**If they say “I've done good things too”:** Good deeds don't cancel crimes. Even our good deeds fall short ([[Isaiah 64:6]]).

**Study:** Ray Comfort and Living Waters' “Good Person Test.” Watch how they keep it friendly and short.`,
    verses: ["Proverbs 20:6", "Romans 3:23", "Isaiah 64:6", "Romans 3:20"],
    related: ["paths/way-of-the-master"],
  },

  {
    id: "all-religions",
    category: "Other Religions",
    title: "All religions lead to God",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: "That sounds kind, but they can't all be true. They disagree about who Jesus is.",
    askBack: "What do you mean by that?",
    short: `Christianity says Jesus is God and rose from the dead. Islam says He wasn't God and didn't die on the cross. Judaism says He wasn't the Messiah. They can't all be right.

And saying “all religions lead to God” takes a side too. It says every religion that claims to be the only way is *wrong*. So the real question is: who is right about Jesus? He said He was the only way.`,
    deep: `**Use Columbo first** ({{Columbo|skills/columbo}}): “What do you mean by that?” Often they mean “all religions are basically about being good.” That's not what Christianity teaches at all. It says you *can't* be good enough ([[Ephesians 2:8-9]]).

**Self-defeating claim** ({{Suicide|skills/suicide}}): “All religions are true” rules out every religion that says it's exclusive, including Christianity. So it isn't open-minded. It's its own exclusive view.

**Jesus' own claim:** He didn't claim to be one way among many ([[John 14:6]], [[Acts 4:12]]). So either He was right, or He wasn't a good teacher at all. (See {{Liar, Lunatic, or Lord|evidence/trilemma}}.)

**Tone:** Knechtle often agrees first (“I appreciate that you want to be fair to everyone”), then asks why they believe it.

**Then go to the Law:** “Let's set other religions aside. Do you think *you're* a good person?” ({{Way of the Master|paths/way-of-the-master}})`,
    verses: ["John 14:6", "Acts 4:12", "Ephesians 2:8-9"],
    related: ["skills/columbo", "skills/suicide", "evidence/trilemma"],
  },

  // --- The Gospel & Salvation ---
  {
    id: "god-will-forgive",
    category: "The Gospel & Salvation",
    title: "God is loving. He'll forgive me.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: `God is loving, but He's also good. A good judge can't just let a guilty criminal go.`,
    askBack: `If a judge let a murderer walk free because he was “loving,” would you call him a good judge?`,
    short: `You're right that God is loving. But He's also just. If a judge said to a guilty criminal, “I'm a nice guy, so you can go,” we'd say he was corrupt.

That's the problem: because God is good, He must punish sin. But because He's loving, He sent Jesus to take the punishment. God doesn't just overlook our sin. He paid for it.`,
    deep: `**The judge illustration** (Way of the Master): A good judge must see justice done. God will by no means leave the guilty unpunished ([[Nahum 1:3]]). Letting the guilty go would make Him corrupt ([[Proverbs 17:15]]).

**Love and justice meet at the cross.** God stays just and still forgives the one who trusts Jesus ([[Romans 3:26]]). Our fine was paid ([[2 Corinthians 5:21]]).

**Why people say this:** It usually means they assume they're basically good. Go to the Law first so they see why they need forgiveness ({{Are you a good person?|objections/good-person}}).

**Watch for presumption:** “God will forgive me” without repentance is a gamble. God's kindness is meant to lead to repentance, not to delay it ([[Romans 2:4]]).

**Study:** Ray Comfort, *Hell's Best Kept Secret*.`,
    verses: ["1 John 4:8", "Nahum 1:3", "Proverbs 17:15", "Romans 3:26", "Romans 2:4"],
    related: ["paths/way-of-the-master", "objections/good-person"],
  },

  {
    id: "too-far-gone",
    category: "The Gospel & Salvation",
    title: "I've done too much to be forgiven",
    sources: ["Living Waters", "Mark Spence"],
    oneLiner: `No one is too far gone. The apostle Paul helped kill Christians, and God saved him.`,
    askBack: `Do you think your sin is bigger than what Jesus did on the cross?`,
    short: `I'm glad you take your sin seriously. Most people don't. But the cross is bigger than your sin.

Paul persecuted Christians and called himself the worst of sinners, yet God saved him to show that no one is beyond His mercy. A criminal dying next to Jesus was forgiven in his last hours. If you repent and trust Jesus, He will not turn you away.`,
    deep: `**This person is close.** Someone who feels the weight of their sin is often ready for grace. Don't add more Law. Go straight to the cross.

**Examples of grace:**
- Paul, a persecutor, called himself the foremost of sinners ([[1 Timothy 1:15]])
- The thief on the cross had no time for good works ([[Luke 23:42-43]])
- The Corinthians had been all kinds of sinners: “Such were some of you” ([[1 Corinthians 6:11]])
- David committed adultery and murder, and wrote Psalm 51 in repentance

**Promises to give them:**
- Scarlet sins made white as snow ([[Isaiah 1:18]])
- Jesus will not cast out anyone who comes ([[John 6:37]])
- Confess, and He forgives and cleanses ([[1 John 1:9]])

**Be careful:** Saying “it's not that bad” is not the answer. It *is* that bad, and Jesus paid for it anyway.`,
    verses: ["1 Timothy 1:15", "Isaiah 1:18", "Luke 23:42-43", "John 6:37", "1 John 1:9"],
    related: ["paths/way-of-the-master"],
  },

  {
    id: "hell-unfair",
    category: "The Gospel & Salvation",
    title: "Hell isn't fair",
    sources: ["Ray Comfort", "Greg Koukl", "C.S. Lewis"],
    oneLiner: `Hell is justice, not cruelty. The good news is that God offers a pardon, and nobody has to go there.`,
    askBack: `Do you think God should punish murderers and rapists?`,
    short: `Most people agree that some people deserve punishment. The question is where to draw the line. God draws it at His perfect Law, and by that standard we've all broken it.

Hell isn't unfair. It's justice. What's “unfair” is grace: Jesus took the punishment we deserved so we could go free. No one has to go to hell. God has provided a way out.`,
    deep: `**Start with agreement:** Almost everyone wants *some* justice. Ask about Hitler or a child abuser. Once they agree evil should be punished, the question is just where the standard is.

**The seriousness of a crime depends on who it's against.** Lying to a friend is bad; lying under oath is worse. Sin is against an infinitely holy God ([[Psalm 7:11]]).

**Judgment will be exact.** People are judged according to their deeds ([[Revelation 20:12]]), and nothing is hidden ([[Hebrews 4:13]]).

**Lewis's angle:** In the end, hell is God giving people what they insisted on: life without Him. (*The Great Divorce*, *The Problem of Pain*.)

**Then go to the Law** so it isn't abstract: “Would *you* be innocent or guilty?” ({{Way of the Master|paths/way-of-the-master}})

**Jesus talked about hell more than anyone** ([[Matthew 10:28]]). And He came to rescue us from it ([[John 3:16]]).

**Study:** Lee Strobel, *The Case for Faith* (chapter on hell).`,
    verses: ["Revelation 20:12", "Hebrews 4:13", "Matthew 10:28", "Psalm 7:11", "Ezekiel 33:11", "John 3:16"],
    related: ["paths/way-of-the-master", "objections/god-will-forgive"],
  },

  {
    id: "never-heard",
    category: "The Gospel & Salvation",
    title: "What about people who never heard?",
    sources: ["Cliff Knechtle", "Greg Koukl"],
    oneLiner: `God will judge them perfectly fairly. But you have heard, so what will you do with Jesus?`,
    askBack: `If I could answer that for you, would you be ready to trust Christ yourself?`,
    short: `God is a perfectly fair judge, and He judges people by the light they had. Everyone has creation and a conscience, so no one is totally in the dark.

But I can't answer for someone in a remote village. I can only answer for you, and you've heard. That's the question that matters for you today.`,
    deep: `**Everyone has some light:**
- Creation shows God's power and nature ([[Romans 1:20]])
- Conscience shows God's Law ([[Romans 2:15]])
- People are judged by the light they had ([[Romans 2:12]])

**God is just.** “Shall not the Judge of all the earth deal justly?” ([[Genesis 18:25]]) Whatever God does, He won't be unfair.

**God placed people where they are so they would seek Him** ([[Acts 17:26-27]]), and those who seek Him find Him ([[Jeremiah 29:13]]).

**Turn it gently** (Knechtle often does this): the question can be a way to keep the gospel at arm's length. Answer briefly, then bring it back to the person in front of you.

**It's also why we go.** “How will they hear without a preacher?” ([[Romans 10:14]])

**Study:** Lee Strobel, *The Case for Faith*.`,
    verses: ["Romans 1:20", "Romans 2:15", "Genesis 18:25", "Acts 17:26-27", "Romans 10:14"],
    related: ["skills/stone-in-shoe", "paths/way-of-the-master"],
  },

  {
    id: "think-later",
    category: "The Gospel & Salvation",
    title: "I'll think about it later",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: `You don't know if you'll have a later. If you died tonight, where would you go?`,
    askBack: `Do you know for sure you'll be alive tomorrow?`,
    short: `I appreciate you being honest. But no one is promised tomorrow. People die every day who planned to get right with God later.

God is being patient with you right now, and that patience is meant to lead you to repentance, not to put it off. Today is the day of salvation.`,
    deep: `**Life is short and uncertain:**
- We don't know what a day will bring ([[Proverbs 27:1]])
- Life is a vapor ([[James 4:14]])
- The rich fool planned for years he didn't have ([[Luke 12:20]])

**Now is the time** ([[2 Corinthians 6:2]]). God's patience is mercy, not permission ([[2 Peter 3:9]], [[Romans 2:4]]).

**Comfort often asks:** “Is there anything stopping you from repenting and trusting Jesus right now?” Let them name it.

**Don't pressure a prayer.** Urge them, then leave them with a {{stone in their shoe|skills/stone-in-shoe}}.`,
    verses: ["Proverbs 27:1", "James 4:14", "Luke 12:20", "2 Corinthians 6:2", "2 Peter 3:9"],
    related: ["paths/way-of-the-master", "openers/wrapping-up"],
  },

  {
    id: "spiritual-not-religious",
    category: "The Gospel & Salvation",
    title: "I'm spiritual, not religious",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: `That's interesting. What do you mean by spiritual?`,
    askBack: `Where do you think your spirit goes when you die?`,
    short: `I actually agree that religion can't save anyone. Christianity isn't about religious rules; it's about a relationship with God through Jesus.

But “spiritual” can mean a lot of things. If there's a God who made us, the most important question is what He thinks, not just what feels right to us.`,
    deep: `**Use Columbo** ({{Columbo|skills/columbo}}): “What do you mean by that?” Often it means “I believe in something, but I don't want anyone telling me what to do.”

**Find common ground:** Jesus was hard on dead religion ([[Matthew 23:28]]). Christianity says rule-keeping can't save you ([[Ephesians 2:8-9]]).

**Then ask about authority:** “How do you know your spiritual beliefs are true?” A spirituality we invent for ourselves usually agrees with us about everything.

**Bring in the Law:** Spiritual or not, we will all stand before God ([[Hebrews 9:27]]). Go to {{Way of the Master|paths/way-of-the-master}}.`,
    verses: ["Ecclesiastes 3:11", "Ephesians 2:8-9", "Hebrews 9:27", "John 14:6"],
    related: ["skills/columbo", "paths/way-of-the-master"],
  },

  {
    id: "believe-in-god",
    category: "The Gospel & Salvation",
    title: "I believe in God. Why do I need Jesus?",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: `Even the demons believe in God. Believing He exists doesn't deal with your sin. Only Jesus does.`,
    askBack: `If you stood before God today, what would you say to Him about your sin?`,
    short: `Believing God exists is a good start, but the Bible says even demons believe that, and they tremble.

The issue isn't whether God exists. It's that we've broken His Law and are guilty before Him. Jesus is the only one who paid for sin. That's why He said no one comes to the Father except through Him.`,
    deep: `**Belief isn't enough** ([[James 2:19]]). The question is what we do about our guilt.

**Go to the Law:** Someone who believes in God usually has a high view of themselves. Ask “Do you think you're a good person?” and walk through {{Way of the Master|paths/way-of-the-master}}.

**One mediator:** There's one God and one go-between, Jesus ([[1 Timothy 2:5]]). He is the only way ([[John 14:6]], [[Acts 4:12]]).

**Belief in the Son** ([[John 3:36]]): eternal life comes through the Son, and God's wrath remains on those who reject Him.`,
    verses: ["James 2:19", "1 Timothy 2:5", "John 14:6", "John 3:36"],
    related: ["paths/way-of-the-master", "objections/all-religions"],
  },

  // --- God & Suffering ---
  {
    id: "suffering",
    category: "God & Suffering",
    title: "Why does God allow suffering?",
    sources: ["C.S. Lewis", "Greg Koukl", "Ray Comfort"],
    oneLiner: `It's a hard question. But without God, there's no real evil to complain about, and no hope it will ever be fixed.`,
    askBack: `Is this a question you're asking because of something you've been through?`,
    short: `That's one of the hardest questions there is. The Bible's answer is that the world is broken because of sin, ours included. Suffering is a sign that something has gone wrong.

But God hasn't stayed distant. He came and suffered Himself on the cross. And He promises a day when He will wipe away every tear. Without God, suffering just is. With Him, it has an end. And Jesus said tragedies are a reminder to be ready to meet God.`,
    deep: `**First, find out if it's personal.** If someone is grieving, listen and show compassion before giving arguments.

**The moral argument turned around** (Lewis, Koukl): To call something truly evil, you need a real standard of good. Without God, suffering is just nature. The objection quietly assumes God exists. ({{The Moral Law|evidence/moral-law}})

**Why there's suffering:**
- Sin brought death into the world ([[Romans 5:12]])
- God can bring good out of evil ([[Genesis 50:20]], [[Romans 8:28]])
- Suffering is temporary for God's people ([[Romans 8:18]])

**God entered suffering.** At the cross, God Himself suffered injustice to save us ([[Romans 5:8]]).

**It will end** ([[Revelation 21:4]]).

**Jesus' answer to tragedy:** When a tower fell and killed 18 people, Jesus said it was a warning to repent ([[Luke 13:4-5]]). Comfort often goes here: life is short, are you ready?

**Study:** C.S. Lewis, *The Problem of Pain*; Lee Strobel, *The Case for Faith*.`,
    verses: ["Romans 5:12", "Genesis 50:20", "Romans 8:18", "Revelation 21:4", "Luke 13:4-5"],
    related: ["evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "who-made-god",
    category: "God & Suffering",
    title: "Who made God?",
    sources: ["Cliff Knechtle", "Ray Comfort"],
    oneLiner: `Nobody. Everything that *begins* needs a cause, but God never began. He's eternal.`,
    askBack: `If something never began to exist, would it need a cause?`,
    short: `Good question. The rule is that everything that *begins to exist* needs a cause. The universe had a beginning, so it needs a cause.

God, by definition, didn't begin. He's eternal, outside of time. Something had to be eternal, or nothing would exist at all. The only question is whether that's matter or God. And if it's God, the next question is: are you ready to meet Him?`,
    deep: `**The key word is “begin.”** Things that begin need a cause. God has no beginning ([[Psalm 90:2]]).

**Something must be eternal.** If there was ever truly nothing, there would still be nothing. So either the universe is eternal (science says it began) or something outside it is.

**Building and builder** (Comfort often uses this): A building proves a builder ([[Hebrews 3:4]]). Creation proves a Creator ([[Romans 1:20]]).

**Christ is before all things** ([[Colossians 1:17]]).

**Then move on.** This is often a side question. Answer briefly, then ask: “If God does exist, would you want to know what He thinks of you?”

**Study:** Lee Strobel, *The Case for a Creator*.`,
    verses: ["Genesis 1:1", "Psalm 90:2", "Hebrews 3:4", "Colossians 1:17"],
    related: ["objections/no-god"],
  },

  {
    id: "no-god",
    category: "God & Suffering",
    title: "There is no God",
    sources: ["Ray Comfort", "Lee Strobel"],
    oneLiner: `A painting proves there's a painter. Creation proves there's a Creator.`,
    askBack: `Do you know everything? Could God exist in the part you don't know?`,
    short: `When you see a building, you know there was a builder. You don't need to meet him. Creation, with all its order and design, points to a Creator the same way.

The Bible says people actually know God exists but push that knowledge down. Your conscience also tells you right from wrong, which is God's Law written on your heart.`,
    deep: `**Comfort's approach:**
- Building proves builder ([[Hebrews 3:4]]); creation proves Creator ([[Psalm 19:1]], [[Romans 1:20]])
- Ask: “Do you know everything? Even 1%?” Then God could exist in the 99% you don't know. That makes them agnostic, not atheist.
- Then move to the conscience and the Law ([[Romans 2:15]])

**Why people reject God:** Often it's moral, not intellectual. People suppress the truth ([[Romans 1:18]]).

**Evidence when they want it:**
- Fine-tuning of the universe
- The universe had a beginning ([[Genesis 1:1]])
- {{The Moral Law|evidence/moral-law}}
- {{The Resurrection|evidence/resurrection}}

**Study:** Ray Comfort, *God Doesn't Believe in Atheists*; Lee Strobel, *The Case for a Creator*.`,
    verses: ["Hebrews 3:4", "Psalm 19:1", "Romans 1:20", "Romans 1:18", "Psalm 14:1"],
    related: ["worldviews/atheist", "evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "morality-relative",
    category: "God & Suffering",
    title: "Morality is relative",
    sources: ["Greg Koukl", "C.S. Lewis"],
    oneLiner: `Is that true for everyone? Because if it is, you've just made an absolute moral claim.`,
    askBack: `Was the Holocaust wrong, or just wrong for some people?`,
    short: `Most people don't really live that way. If someone stole your car, you wouldn't say “well, that's just their truth.” You'd say it was wrong.

We all know some things are really wrong. That's because there's a real moral law, and a moral law points to a Moral Lawgiver: God.`,
    deep: `**Self-defeating** ({{Suicide|skills/suicide}}): “There's no absolute truth” and “You shouldn't push your morals on others” are both absolute moral claims.

**Test it with a clear case:** Torturing children for fun. Racism. The Holocaust. Almost no one will say these are just preferences.

**Lewis's argument** ({{The Moral Law|evidence/moral-law}}): We all appeal to a standard when we quarrel (“That's not fair!”). That standard isn't invented by us.

**The Bible's picture:** Everyone doing what is right in their own eyes is what life without God looks like ([[Judges 21:25]]). Calling evil good brings woe ([[Isaiah 5:20]]).

**Use it for the Law:** Their conscience already agrees with God's commandments ([[Romans 2:15]]). Move to {{Way of the Master|paths/way-of-the-master}}.

**Study:** Francis Beckwith & Greg Koukl, *Relativism: Feet Firmly Planted in Mid-Air*.`,
    verses: ["Romans 2:15", "Isaiah 5:20", "Judges 21:25"],
    related: ["skills/suicide", "evidence/moral-law", "objections/dont-judge"],
  },

  {
    id: "god-hidden",
    category: "God & Suffering",
    title: "If God is real, why doesn't He show Himself?",
    sources: ["Cliff Knechtle", "Greg Koukl"],
    oneLiner: `He did. God came as a man, Jesus, and proved it by rising from the dead.`,
    askBack: `If God showed Himself to you, what would you do differently?`,
    short: `God has shown Himself in creation, in our conscience, and most clearly in Jesus. Jesus said, “He who has seen Me has seen the Father.” Then He rose from the dead in front of hundreds of witnesses.

Many people saw Jesus' miracles and still rejected Him. The issue usually isn't a lack of evidence. It's whether we want God to be in charge.`,
    deep: `**God has shown Himself:**
- In creation ([[Psalm 19:1]], [[Romans 1:20]])
- In conscience ([[Romans 2:15]])
- In Jesus ([[John 1:18]], [[John 14:9]])
- Through the resurrection ({{The Resurrection|evidence/resurrection}})

**More evidence doesn't always help.** Jesus said some will not be persuaded even if someone rises from the dead ([[Luke 16:31]]).

**God rewards seekers** ([[Hebrews 11:6]], [[Jeremiah 29:13]]). Ask: “Are you willing to read the Gospel of John and ask God to show you if it's true?”

**Study:** Lee Strobel, *The Case for Christ*.`,
    verses: ["John 14:9", "John 1:18", "Luke 16:31", "Jeremiah 29:13", "Hebrews 11:6"],
    related: ["evidence/resurrection", "evidence/trilemma"],
  },

  // --- Church & Christians ---
  {
    id: "hypocrites",
    category: "Church & Christians",
    title: "Christians are hypocrites",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: `You're right, some are. Jesus was hard on hypocrites too. But they'll answer to God, and so will we.`,
    askBack: `Would you let a hypocrite keep you out of heaven?`,
    short: `I agree. Some people who call themselves Christians are hypocrites, and Jesus condemned that more strongly than anyone.

But a hypocrite doesn't make Christianity false. If someone uses a counterfeit $100 bill, you don't throw out real money. And on Judgment Day, God won't ask about other people's sins. He'll ask about yours.`,
    deep: `**Agree first.** It's true, and it disarms people. Jesus said the same ([[Matthew 23:28]]).

**Not everyone who says “Lord, Lord” is His** ([[Matthew 7:21]]). Fake Christians will face God.

**Counterfeit illustration:** Counterfeits exist because the real thing is valuable.

**Turn it back gently:** “Have you ever said one thing and done another?” That's hypocrisy too, and it leads naturally into the Law ({{Way of the Master|paths/way-of-the-master}}).

**Point to Jesus, not Christians.** Judge Christianity by Christ, not by His worst followers.`,
    verses: ["Matthew 23:28", "Matthew 7:21", "Romans 3:23"],
    related: ["paths/way-of-the-master", "objections/hurt-by-church"],
  },

  {
    id: "hurt-by-church",
    category: "Church & Christians",
    title: "I was hurt by the church",
    sources: [],
    oneLiner: `I'm really sorry that happened. Can I ask what happened?`,
    askBack: `Has what happened changed how you see God, or just how you see Christians?`,
    short: `I'm sorry. That's real, and it shouldn't have happened. Churches are full of sinners, and sometimes they hurt people badly.

But Jesus isn't the one who hurt you. He invites the hurting and the worn out to come to Him. Don't let what people did keep you from Him.`,
    deep: `**Listen first.** This isn't an argument to win. Let them talk. Don't defend the church that hurt them.

**Separate Jesus from His followers.** Jesus is gentle with the broken ([[Matthew 11:28]], [[Psalm 34:18]]).

**Name sin as sin.** If someone was abused or mistreated, say clearly that it was wrong. God hates it too.

**Then, when appropriate, the gospel.** We've all sinned, including the people who hurt them, and including them. Everyone needs the same forgiveness ([[Romans 3:23]]).

**Offer a next step:** a healthy church, or even just reading the Gospel of John on their own.`,
    verses: ["Matthew 11:28", "Psalm 34:18", "John 6:37"],
    related: ["objections/hypocrites"],
  },

  {
    id: "dont-judge",
    category: "Church & Christians",
    title: "Jesus said don't judge",
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: `He was talking about hypocritical judging. In the same passage, He told us to help others with their sin.`,
    askBack: `Isn't “you shouldn't judge” a judgment too?`,
    short: `In Matthew 7, Jesus said not to judge hypocritically: take the log out of your own eye *first*, then help your brother with the speck. He also said to “judge with righteous judgment.”

I'm not saying I'm better than you. I've broken God's Law too. I'm telling you what God says so you can be forgiven, the same way I was.`,
    deep: `**Read the whole passage.** [[Matthew 7:1]] is followed by [[Matthew 7:5]]: remove the log, then help with the speck. Jesus also commands right judgment ([[John 7:24]]).

**Self-defeating** ({{Suicide|skills/suicide}}): “You shouldn't judge” is itself a judgment.

**Include yourself.** Comfort models this: “I'm a liar and a thief too. I'm not judging you. God's Law judges both of us.”

**Telling the truth isn't hate.** If a bridge is out, warning drivers is love.`,
    verses: ["Matthew 7:1", "Matthew 7:5", "John 7:24"],
    related: ["skills/suicide", "objections/morality-relative", "paths/way-of-the-master"],
  },

  // --- THE BIBLE ---
  {
    id: "bible-changed",
    category: "The Bible",
    title: "The Bible has been changed",
    sources: ["Lee Strobel", "Greg Koukl"],
    oneLiner: "It's not a game of telephone. Modern Bibles are translated straight from thousands of ancient copies.",
    askBack: "Which part do you think was changed, and how do you know?",
    short: `We don't translate a translation of a translation. Translators work from the original languages, and we have more ancient copies of the New Testament than of any other ancient book: over 5,000 in Greek alone.

By comparing them, scholars can see where copies differ. Most differences are spelling or word order, and none changes a core teaching. And “You shall not lie” reads the same in every copy. Have you ever lied?`,
    deep: `**Not a telephone game:** In telephone, there's one line of messages and you can only hear the last person. With the Bible, there are many independent copies spread across different regions. Comparing them lets scholars reconstruct the original with great confidence.

**The numbers (approximate):**
- Over 5,000 Greek New Testament manuscripts, plus thousands more in early translations (Latin, Syriac, Coptic)
- Complete New Testaments survive from the 300s (Codex Sinaiticus, Codex Vaticanus)
- Most other ancient works survive in a handful of copies, often written many centuries after the original

**The Old Testament:** The Dead Sea Scrolls (found 1947) include a copy of Isaiah about 1,000 years older than the copies we had before, and it is remarkably close to them.

**What about variants?** Most are misspellings, word order, or obvious copying slips. The few meaningful ones are noted in the footnotes of most modern Bibles. No core doctrine depends on a disputed passage.

**Steer back:** The bigger question isn't whether the Bible was changed. It's whether it's right about you. “You shall not lie” reads the same in every manuscript. Move to the Law ({{Way of the Master|paths/way-of-the-master}}).

**Study:** *The Case for Christ*, chapter on the documentary evidence (Strobel's interview with Bruce Metzger). See also {{Is the Bible reliable?|evidence/bible-reliability}}.`,
    verses: ["Isaiah 40:8", "Matthew 24:35", "Luke 1:3-4"],
    related: ["evidence/bible-reliability", "paths/way-of-the-master"],
  },

  {
    id: "bible-contradictions",
    category: "The Bible",
    title: "The Bible is full of contradictions",
    sources: ["Greg Koukl", "Lee Strobel"],
    oneLiner: "I'm happy to look at one. Which contradiction did you have in mind?",
    askBack: "Can you show me one you think is the strongest?",
    short: `Most people have heard this but can't name one. When they do, it's usually a difference in detail, not a true contradiction.

For example, one Gospel mentions one angel at the tomb and another mentions two. If there were two, there was certainly one. Different witnesses reporting different details is exactly what you'd expect from real, independent testimony. And even if every question were answered, we'd still have to deal with our own sin.`,
    deep: `**Use Columbo** ({{Columbo|skills/columbo}}): Ask for a specific example. Often the conversation ends there, or turns to the real reason they don't want to believe.

**What counts as a contradiction?** Two statements that can't both be true at the same time and in the same sense. “Different” is not the same as “contradictory.”

**Common explanations:**
- **Different details:** One writer mentions part of what happened; another adds more
- **Different perspective or order:** Ancient writers sometimes arranged events by theme, not by time
- **Round numbers or different counting methods**
- **Copying errors in numbers** in a few Old Testament passages. These are well known and noted in study Bibles.

**Independent witnesses:** If four accounts matched word-for-word, people would say they were copied. Small differences with the same core story point to genuine testimony.

**Honesty:** If you don't know the answer to a specific one, say so: “Good question. Let me look into that and get back to you.” ({{stone in their shoe|skills/stone-in-shoe}})

**Steer back:** Even if every question were answered, they'd still need to deal with their sin. Gently move to the Law.

**Study:** *The Case for Christ*; *Cold-Case Christianity* (J. Warner Wallace) on eyewitness accounts.`,
    verses: ["Luke 1:3-4", "2 Peter 1:16"],
    related: ["skills/columbo", "evidence/bible-reliability", "paths/way-of-the-master"],
  },

  {
    id: "bible-men",
    category: "The Bible",
    title: "The Bible was written by men",
    sources: ["Ray Comfort", "Greg Koukl"],
    oneLiner: "That's true, and Christians agree. The question is whether God was behind what they wrote.",
    askBack: "If God wanted to speak to people, how else would you expect Him to do it?",
    short: `Every book is written by people. That doesn't make it unreliable. The question is whether these men were telling the truth and whether God was speaking through them.

The Bible was written by about 40 authors over roughly 1,500 years, yet it tells one consistent story, with prophecies fulfilled centuries later. And it describes the human heart exactly right. Your conscience agrees with it.`,
    deep: `**Agree first:** Yes, men wrote it. Christians believe God moved them to write what He wanted ([[2 Peter 1:20-21]], [[2 Timothy 3:16]]).

**“Written by men” isn't an argument:** Science textbooks and history books are written by men too. The real question is whether it's true.

**Evidence of something more:**
- Around 40 authors, three languages, about 1,500 years, one unified story of sin and redemption
- Fulfilled prophecy, such as the suffering servant of Isaiah 53, written centuries before Jesus (see {{Prophecy|evidence/prophecy}})
- Eyewitness claims about Jesus' life, death and resurrection

**Ray Comfort's angle:** Even someone who rejects the Bible has a conscience that agrees with it. Ask: “Have you ever lied?” The Bible's diagnosis of the human heart is accurate whether they like the authors or not.

**Study:** See {{Is the Bible reliable?|evidence/bible-reliability}}.`,
    verses: ["2 Peter 1:20-21", "2 Timothy 3:16", "Romans 2:15"],
    related: ["evidence/prophecy", "evidence/bible-reliability", "paths/way-of-the-master"],
  },

  {
    id: "ot-cruel",
    category: "The Bible",
    title: "The God of the Old Testament is cruel",
    sources: ["Greg Koukl", "C.S. Lewis"],
    oneLiner: "That's a fair question. But to call God cruel, you need a real standard of right and wrong. Where does that come from?",
    askBack: "Do you mean it's really wrong, or just that you don't like it?",
    short: `Your sense that cruelty is truly wrong is a good thing, but it points to God, not away from Him. Without God, there's no real standard to judge anything as evil.

And when you look closely, God was not quick to judge. He waited hundreds of years for the Canaanites to turn from practices like child sacrifice. He takes no pleasure in the death of the wicked. The real surprise isn't that God judges sin. It's that He offers mercy.`,
    deep: `**The moral argument turned around** (C.S. Lewis): Lewis said his own argument against God was that the universe seemed cruel and unjust, until he asked where he got the idea of “just” at all. See {{The Moral Law|evidence/moral-law}}.

**The Canaanites:**
- God waited about 400 years before judging them ([[Genesis 15:16]])
- They practiced child sacrifice and other serious evils (e.g. Leviticus 18 and Deuteronomy 12:31)
- Ancient war language often used sweeping, exaggerated phrases; the same books mention the same peoples still living there afterward
- This was a specific judgment at a specific time, not a general command for anyone to follow today

**Slavery:**
- Old Testament servitude was mostly debt-based and time-limited, very different from race-based chattel slavery
- Kidnapping and selling people was punishable by death ([[Exodus 21:16]])
- Some laws regulated a fallen practice rather than endorsing it. Jesus said the same about divorce (Matthew 19:8).
- The gospel undermined slavery from within ([[Galatians 3:28]], [[Philemon 1:16]]), and many abolitionists were driven by their Christian faith

**God's heart:** He takes no pleasure in judgment ([[Ezekiel 33:11]]) and is patient so people can repent ([[2 Peter 3:9]]).

**Steer back:** “If God judged the Canaanites for their sin, what about us?” Move to the Law and the cross.

**Study:** Paul Copan, *Is God a Moral Monster?*; C.S. Lewis, *Mere Christianity*, Book 2, chapter 1.`,
    verses: ["Genesis 15:16", "Ezekiel 33:11", "Exodus 21:16", "2 Peter 3:9"],
    related: ["evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "bible-interpretation",
    category: "The Bible",
    title: "You just interpret it your way",
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: "Fair point. Anyone can twist a text. So let's read it in context together and see what the writer meant.",
    askBack: "What do you think this passage is saying?",
    short: `Every writer means something, and our job is to find out what they meant, not make it say what we want. That's how we read any letter or book.

Some parts of the Bible are hard to understand. But the main message is not: we've all sinned, God will judge, and Jesus died and rose to save us. “You shall not lie” doesn't need much interpretation.`,
    deep: `**Koukl's rule: “Never read a Bible verse.”** Read the paragraph around it. Context answers most interpretation questions.

**Different interpretations don't mean no meaning:** People disagree about the Constitution too, but it still means something. Disagreement means we have to read carefully, not that every reading is equal.

**The Bible admits some things are hard** ([[2 Peter 3:16]]), and warns against twisting it.

**Clear on the main things:** Christians across many traditions agree on the core: one God, the deity of Christ, His death for sins and bodily resurrection, salvation by grace through faith.

**Cliff Knechtle's approach:** Open the Bible and ask them to read the passage aloud, then ask what it says.

**Steer back:** The commandments are clear enough to show us our guilt. Move to the Law.`,
    verses: ["2 Peter 3:16", "2 Timothy 3:16"],
    related: ["skills/columbo", "paths/way-of-the-master"],
  },

  // --- JESUS ---
  {
    id: "jesus-existed",
    category: "Jesus",
    title: "Jesus never existed",
    sources: ["Lee Strobel"],
    oneLiner: "Almost no historians believe that, even skeptical ones. Non-Christian writers from that time mention Him.",
    askBack: "What historians have you read who say He didn't exist?",
    short: `Nearly all historians of the ancient world, Christian or not, agree Jesus was a real person who was crucified under Pontius Pilate.

Roman historian Tacitus and Jewish historian Josephus both mention Him. Even well-known skeptical scholars like Bart Ehrman have written books arguing that Jesus existed. So the real question isn't whether He lived. It's who He was.`,
    deep: `**Non-Christian sources:**
- **Tacitus** (Roman historian, early 100s): mentions “Christus” executed by Pontius Pilate during the reign of Tiberius
- **Josephus** (Jewish historian, late first century): mentions “James, the brother of Jesus who was called Christ,” and has a longer passage about Jesus (part of which was likely added to by later Christian copyists, but most scholars think the core is authentic)
- **Pliny the Younger** (early 100s): describes Christians worshiping Christ “as to a god”

**Christian sources are historical sources too:** The Gospels and Paul's letters were written within decades of Jesus' life. Paul's letters date to the 50s, and he passes on an early creed ([[1 Corinthians 15:3-4]]).

**Scholarly consensus:** Bart Ehrman, an agnostic New Testament scholar, wrote *Did Jesus Exist?* (2012) to answer the “myth” theory. His answer is yes.

**Next step:** If Jesus existed, the question becomes: who was He? (See {{Liar, Lunatic, or Lord|evidence/trilemma}}.)

**Study:** *The Case for Christ*, chapter on corroborating evidence (Edwin Yamauchi).`,
    verses: ["1 Corinthians 15:3-4", "Luke 1:3-4", "2 Peter 1:16"],
    related: ["evidence/trilemma", "evidence/resurrection"],
  },

  {
    id: "jesus-good-teacher",
    category: "Jesus",
    title: "Jesus was just a good teacher",
    sources: ["C.S. Lewis", "Ray Comfort"],
    oneLiner: "A good teacher doesn't claim to be God. Jesus did, so “just a good teacher” isn't an option.",
    askBack: "What would you think of a teacher today who said he was God?",
    short: `Jesus claimed to forgive sins, to be one with the Father, and to be the only way to God. If those claims were false, He wasn't a good teacher. He was either lying or deluded.

The only other option is that He was telling the truth. And then we have to do what He said.`,
    deep: `**Lewis's trilemma:** Liar, lunatic, or Lord. See {{Liar, Lunatic, or Lord|evidence/trilemma}}.

**His claims:**
- Forgave sins against God ([[Mark 2:5-7]])
- “Before Abraham was born, I am” ([[John 8:58]])
- “I and the Father are one” ([[John 10:30]])
- The only way to the Father ([[John 14:6]])
- Accepted worship ([[John 20:28]])

**Take His teaching seriously:** If they respect His teaching, show them what He taught, like lust being adultery of the heart ([[Matthew 5:27-28]]). That leads right into the Law.

**Ray Comfort's angle:** “What did this good teacher say about hell?” Jesus spoke about judgment more than anyone else in the Bible.`,
    verses: ["Mark 2:5-7", "John 8:58", "John 10:30", "John 14:6"],
    related: ["evidence/trilemma", "objections/jesus-not-god", "paths/way-of-the-master"],
  },

  {
    id: "resurrection-myth",
    category: "Jesus",
    title: "The resurrection didn't happen",
    sources: ["Lee Strobel"],
    oneLiner: "Then how do you explain the empty tomb, and why the disciples died saying they'd seen Him alive?",
    askBack: "What do you think happened to the body?",
    short: `A handful of facts are accepted by most scholars, even skeptical ones: Jesus died by crucifixion, His followers believed they saw Him alive, and even enemies like Paul and skeptics like His brother James became believers.

Every alternative theory struggles to explain all of those facts together. The resurrection explains all of them. And if Jesus rose, He's the One we'll answer to.`,
    deep: `See {{The Resurrection: Minimal Facts|evidence/resurrection}} for the full outline.

**Why it matters:** Paul said if Christ wasn't raised, Christianity is worthless ([[1 Corinthians 15:17]]). Christianity invites investigation.

**Ask about alternatives:**
- “Do you think the disciples lied? Would they die for something they knew was false?”
- “Could hundreds of people share the same hallucination?” ([[1 Corinthians 15:6]])
- “Why didn't the authorities just produce the body?”

**Steer back:** God has proven He will judge the world by raising Jesus from the dead ([[Acts 17:30-31]]). That leads straight to the Law and repentance.

**Study:** *The Case for Christ*; *The Case for the Resurrection of Jesus* (Habermas and Licona).`,
    verses: ["1 Corinthians 15:3-4", "1 Corinthians 15:6", "1 Corinthians 15:17", "Acts 17:30-31"],
    related: ["evidence/resurrection", "paths/way-of-the-master"],
  },

  {
    id: "jesus-not-god",
    category: "Jesus",
    title: "Jesus never claimed to be God",
    sources: ["Lee Strobel", "Cliff Knechtle"],
    oneLiner: "He did, and the people who heard Him understood it. That's why they tried to stone Him for blasphemy.",
    askBack: "Why do you think the religious leaders wanted Him executed?",
    short: `Jesus didn't usually say the words “I am God,” but He said and did things only God could. He forgave sins, claimed God's own name, “I am,” and accepted worship.

His enemies understood. At His trial, the high priest called His claim blasphemy, and that's why they sought His death.`,
    deep: `**What He claimed:**
- Forgave sins: “who can forgive sins but God alone?” ([[Mark 2:5-7]])
- Used God's name: “Before Abraham was born, I am” ([[John 8:58]]). They picked up stones.
- “I and the Father are one” ([[John 10:30]]). Again they picked up stones, because He made Himself out to be God.
- Claimed to be the divine Son of Man of Daniel 7 at His trial ([[Mark 14:62]])
- Accepted worship from Thomas ([[John 20:28]])

**Why He spoke this way:** Jesus revealed who He was through His actions and Old Testament titles His Jewish audience would recognize.

**Ask:** “If Jesus wasn't claiming to be God, why did His enemies keep accusing Him of blasphemy?”

**Next step:** {{Liar, Lunatic, or Lord|evidence/trilemma}}.`,
    verses: ["Mark 2:5-7", "John 8:58", "John 10:30", "Mark 14:62", "John 20:28"],
    related: ["evidence/trilemma", "objections/jesus-good-teacher"],
  },

  // --- SCIENCE ---
  {
    id: "science-disproves-god",
    category: "Science",
    title: "Science disproves God",
    sources: ["Lee Strobel", "Greg Koukl"],
    oneLiner: "Science explains how things work. It can't explain why there's anything at all.",
    askBack: "What scientific discovery do you think disproved God?",
    short: `Science and God aren't competitors. Explaining how a car engine works doesn't disprove that someone built the car.

Many of the founders of modern science, like Kepler, Boyle, Newton and Faraday, believed in God. They studied nature because they expected an orderly universe made by a rational Creator. And no experiment can erase a guilty conscience.`,
    deep: `**Self-defeating:** “Only science can tell us what's true” can't be proven by science. See {{Suicide|skills/suicide}}.

**Science points toward God:**
- The universe had a beginning. What caused it? ({{The Cosmological Argument|evidence/cosmological}})
- The laws of physics are finely balanced for life ({{Fine-Tuning|evidence/fine-tuning}})
- The universe is orderly and understandable. Why?

**Mechanism vs. agent:** Knowing how gravity works doesn't tell you why there is gravity or why there's a universe at all.

**The Bible's view:** Creation reveals God ([[Psalm 19:1]], [[Romans 1:20]]). People know God exists but suppress it ([[Romans 1:18]]).

**Steer back:** Even if they're unconvinced by the arguments, their conscience still testifies against them. Move to the Law.

**Study:** Lee Strobel, *The Case for a Creator*; John Lennox, *God's Undertaker*.`,
    verses: ["Psalm 19:1", "Romans 1:20", "Genesis 1:1", "Romans 1:18"],
    related: ["evidence/cosmological", "evidence/fine-tuning", "skills/suicide", "paths/way-of-the-master"],
  },

  {
    id: "evolution",
    category: "Science",
    title: "Evolution explains everything",
    sources: ["Ray Comfort", "Living Waters", "Lee Strobel"],
    oneLiner: "It can't explain where the universe came from, how life started, or why you know right from wrong.",
    askBack: "Where did the first living thing come from?",
    short: `Whatever someone thinks about evolution, it doesn't touch the biggest questions: why is there a universe, how did life begin from non-life, where does the information in DNA come from, and why do we have a conscience?

And no theory of biology changes the fact that we've all broken God's Law and will stand before Him.`,
    deep: `**Don't get stuck:** Christians hold a range of views on the age of the earth and on how God created. Keep the focus on God as Creator and on the gospel, not on winning a biology debate.

**What evolution doesn't explain:**
- Why anything exists at all ([[Genesis 1:1]])
- The origin of the first life from non-living chemicals
- The origin of the information coded in DNA
- Consciousness and reason
- Real moral obligation (see {{The Moral Law|evidence/moral-law}})

**Ray Comfort's approach** (*Evolution vs. God*): Ask for observable evidence of one kind of creature becoming a different kind. Then pivot: “Can I ask you a different question? Do you think you're a good person?”

**The heart issue:** People love darkness rather than light ([[John 3:19]]). Sometimes evolution is a refuge from accountability.

**Study:** Lee Strobel, *The Case for a Creator*; Living Waters' film *Evolution vs. God*.`,
    verses: ["Genesis 1:1", "Romans 1:20", "John 3:19"],
    related: ["objections/science-disproves-god", "evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "miracles",
    category: "Science",
    title: "Miracles are impossible",
    sources: ["C.S. Lewis", "Lee Strobel"],
    oneLiner: "If God exists, miracles aren't impossible at all. The real question is whether God exists.",
    askBack: "Do you believe the universe had a beginning?",
    short: `A miracle is God acting in the world He made. If there's a God who created the universe from nothing, raising a man from the dead is not hard for Him.

Saying miracles can't happen assumes there's no God, which is the very question we're asking. And Christianity rests on one miracle you can investigate: the resurrection.`,
    deep: `**C.S. Lewis, *Miracles*:** Nature has regular patterns, which is exactly why a miracle stands out. Regular laws don't forbid the Lawgiver from acting.

**Circular reasoning:** “Miracles never happen, so any report of a miracle must be false” assumes the conclusion.

**The biggest miracle:** [[Genesis 1:1]]. If the universe came from nothing by God's power, the resurrection is a small thing by comparison.

**Test the claim:** Christianity rests on one checkable miracle, the resurrection ({{Minimal Facts|evidence/resurrection}}).

**Study:** C.S. Lewis, *Miracles*; Lee Strobel, *The Case for Miracles*.`,
    verses: ["Genesis 1:1", "1 Corinthians 15:17", "Acts 17:30-31"],
    related: ["evidence/resurrection", "evidence/cosmological"],
  },

  // --- OTHER RELIGIONS ---
  {
    id: "sincere-religions",
    category: "Other Religions",
    title: "What about sincere people of other religions?",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "Sincerity matters, but it doesn't make something true. You can sincerely take the wrong medicine.",
    askBack: "Can someone be sincere and still be wrong?",
    short: `Being sincere doesn't remove our sin. Every religion tries to reach God through good works, but we've all broken God's Law, and no amount of good deeds can erase that.

Christianity is different: God came to us. Jesus paid the penalty we owe. That's why He is the only way.`,
    deep: `**Sincerely wrong:** A way can seem right and still end in death ([[Proverbs 14:12]]). Paul described sincere religious people who had zeal without knowledge ([[Romans 10:2-3]]).

**Every religion vs. the gospel:** Most religions say “do.” Christianity says “done.” No one can earn heaven ([[Ephesians 2:8-9]]).

**Avoid arguing about other people:** Bring it back to the person in front of you: “Let's talk about you. Do you think you're a good person?” ({{I'm a good person|objections/good-person}})

**God is fair:** He commands all people everywhere to repent ([[Acts 17:30-31]]) and is patient so they can ([[2 Peter 3:9]]).

**See also:** {{All religions lead to God|objections/all-religions}}.`,
    verses: ["Proverbs 14:12", "Romans 10:2-3", "John 14:6", "Ephesians 2:8-9"],
    related: ["objections/all-religions", "objections/good-person", "paths/way-of-the-master"],
  },

  {
    id: "western-religion",
    category: "Other Religions",
    title: "Christianity is a Western, white man's religion",
    sources: ["Cliff Knechtle"],
    oneLiner: "Christianity began in the Middle East. Today most Christians live in Africa, Latin America and Asia.",
    askBack: "Where do you think Christianity started?",
    short: `Jesus was a Jewish man from the Middle East. The early church spread across Asia and Africa (Egypt, Ethiopia, Syria) long before it reached most of Europe.

Today, most of the world's Christians live in the Global South. The gospel is for every nation, and heaven will include people from every tribe and language. That includes you.`,
    deep: `**History:**
- Christianity began in Jerusalem
- One of the first converts recorded in Acts was an Ethiopian official (Acts 8)
- Early centers of the church included Antioch (Syria), Alexandria (Egypt) and North Africa, the home of Augustine
- Christians have been in Africa and Asia for many centuries

**Today:** Most Christians live in Africa, Latin America and Asia, and that share keeps growing.

**The Bible's view:** One human family ([[Acts 17:26]]). In Christ there is no racial division ([[Galatians 3:28]]). Heaven is from every nation ([[Revelation 7:9]]).

**Acknowledge wrongs:** Some who called themselves Christians have used the faith to justify racism and oppression. That contradicts the Bible's teaching rather than following it.`,
    verses: ["Acts 17:26", "Galatians 3:28", "Revelation 7:9"],
    related: ["objections/all-religions"],
  },

  {
    id: "pagan-myths",
    category: "Other Religions",
    title: "Christianity copied pagan myths",
    sources: ["Lee Strobel"],
    oneLiner: "That idea spreads online, but historians don't take it seriously. Most of the parallels are exaggerated or come from later sources.",
    askBack: "Which myth do you think it copied?",
    short: `Claims that Jesus was copied from gods like Horus or Mithras usually fall apart when you check the ancient sources. Many “parallels” are invented, stretched, or come from later centuries.

The Gospels read as history, not myth. They name real places, real rulers and real people, and they were written within living memory of the events.`,
    deep: `**Check the sources:** Ask where the claim comes from. Many trace back to popular books and videos rather than ancient texts.

**Common problems with the parallels:**
- Details like “born of a virgin on December 25 with 12 disciples” are not found in the ancient sources for Horus or Mithras
- Much of what we know about Mithras worship comes from after the New Testament was written
- Pagan “dying and rising” gods tied to the seasons are very different from a real man executed under Pontius Pilate and seen alive by named witnesses

**Jewish roots:** The first Christians were devout Jews who hated pagan idolatry. They were unlikely to borrow from pagan myths.

**Eyewitnesses:** The apostles said they were not following “cleverly devised tales” ([[2 Peter 1:16]]).

**Study:** Lee Strobel, *The Case for the Real Jesus*.`,
    verses: ["2 Peter 1:16", "Luke 1:3-4", "1 Corinthians 15:3-4"],
    related: ["objections/jesus-existed", "evidence/resurrection"],
  },

  {
    id: "abortion",
    category: "Abortion",
    title: "Abortion is a woman's right",
    sources: ["Russell Hunter", "Abolitionist Rising", "Greg Koukl"],
    oneLiner: "It comes down to one question: what is the unborn? If it's a human being, no one has the right to kill it.",
    askBack: "If you knew for sure the unborn was a human being, would that change your view?",
    short: `From fertilization, the unborn is a living, whole, distinct human being. That's basic embryology, not religion.

God made every human being in His image ([[Genesis 9:6]]) and knits each child together in the womb ([[Psalm 139:13]]). Deliberately killing an innocent human being is murder ([[Exodus 20:13]]).

So abortion isn't first a political issue. It's sin, and the answer is the gospel.`,
    deep: `**The one question** (Koukl): If the unborn is not human, no justification for abortion is needed. If it *is* human, no justification is adequate. Keep coming back to this.

**The abolitionist emphasis** (Russell Hunter, Abolitionist Rising):
- Abortion is murder, and it should be treated that way in law
- It should be abolished *immediately*, not reduced step by step (see {{incrementalism|objections/incrementalism}})
- Every child deserves equal protection, with no exceptions
- The root problem is sin, so the real answer is the gospel and repentance
- The church is called to act and rescue ([[Proverbs 24:11]], [[Proverbs 31:8-9]]), not leave it to politicians

**Common follow-ups:**
- {{“It's just a clump of cells”|objections/clump-of-cells}}
- {{“My body, my choice”|objections/my-body}}
- {{“What about rape?”|objections/rape-incest}}
- {{“What if the mother's life is at risk?”|objections/mothers-life}}
- {{“Men don't get a say”|objections/men-opinion}}

**Be ready for someone who has had an abortion.** Many people have been personally affected. Tell the truth about sin, then hold out full forgiveness in Christ (see {{“I've had an abortion”|objections/had-abortion}}).

**Bring it to the gospel.** Abortion is one sin among many that every person must answer for. Moving to the Law shows everyone, including you, needs mercy: {{Way of the Master|paths/way-of-the-master}}.`,
    verses: ["Genesis 9:6", "Exodus 20:13", "Psalm 139:13", "Jeremiah 1:5", "Proverbs 24:11", "Proverbs 6:16-17"],
    related: [
      "objections/clump-of-cells",
      "objections/my-body",
      "objections/rape-incest",
      "objections/mothers-life",
      "objections/men-opinion",
      "objections/had-abortion",
      "objections/incrementalism",
    ],
  },

  {
    id: "clump-of-cells",
    category: "Abortion",
    title: "It's just a clump of cells",
    sources: ["Greg Koukl", "Abolitionist Rising"],
    oneLiner: "So are you and I. The question isn't how many cells, but what kind of thing it is: a living human being.",
    askBack: "At what point do you think it becomes a human being, and why then?",
    short: `From fertilization, the unborn has its own DNA, its own body, and is growing as a human being. It isn't a potential human. It's a human with potential.

The differences between the unborn and you are differences of size and stage, not of kind. None of those make someone less human.`,
    deep: `**SLED** (from philosopher Stephen Schwarz, popularized by Scott Klusendorf). The only differences between an embryo and an adult are:
- **Size:** it's smaller. But a toddler is smaller than you, and we don't think that makes them less valuable.
- **Level of development:** it's less developed. So is a 4-year-old compared to a teenager.
- **Environment:** it's inside the womb. Moving 8 inches down the birth canal doesn't change what you are.
- **Degree of dependency:** it depends on its mother. So do newborns, and people on insulin or a pacemaker.

**Ask where they draw the line** (heartbeat, viability, birth). Then ask why that line, and not a week earlier. Every line besides fertilization is arbitrary.

**Scripture** treats the unborn as persons: John leaped in Elizabeth's womb ([[Luke 1:44]]), and God knew Jeremiah before he was born ([[Jeremiah 1:5]]).`,
    verses: ["Psalm 139:13", "Jeremiah 1:5", "Luke 1:44", "Genesis 1:27"],
    related: ["objections/abortion", "skills/columbo"],
  },

  {
    id: "my-body",
    category: "Abortion",
    title: "My body, my choice",
    sources: ["Abolitionist Rising", "Greg Koukl"],
    oneLiner: "I agree you have rights over your body. But there are two bodies here, and the other one is a child.",
    askBack: "Does your right to your body include the right to end someone else's life?",
    short: `The unborn child has their own body: their own DNA, heartbeat, blood type, and often a different sex from the mother. Being inside someone doesn't make you part of them.

No one's freedom includes the right to kill an innocent person.`,
    deep: `**Test the slogan.** Would “my body, my choice” justify a mother taking a drug in pregnancy that she knows will harm her baby? Most people say no. So they already agree the child has a body worth protecting.

**For Christians:** our bodies aren't ultimately our own. We were bought with a price ([[1 Corinthians 6:19-20]]).

**Tone:** Many people saying this are scared, angry, or hurt. Don't win the point and lose the person. Ask questions ({{Columbo|skills/columbo}}) and move toward the gospel.`,
    verses: ["Genesis 9:6", "Exodus 20:13", "1 Corinthians 6:19-20"],
    related: ["objections/abortion", "objections/clump-of-cells"],
  },

  {
    id: "rape-incest",
    category: "Abortion",
    title: "What about rape or incest?",
    sources: ["Russell Hunter", "Abolitionist Rising"],
    oneLiner: "Rape is evil, and the rapist should be punished. But the child did nothing wrong and shouldn't die for his father's crime.",
    askBack: "If the child is a human being, should how they were conceived decide whether they live?",
    short: `Rape is a horrible crime. The woman is a real victim, and she deserves care, protection, and justice.

But abortion doesn't undo the rape. It adds a second victim. The child is just as human and just as made in God's image as any other. God's law says children are not put to death for the sins of their fathers ([[Deuteronomy 24:16]]).`,
    deep: `**Start with compassion.** You may be talking to a survivor. Listen first.

**Abolitionists reject exceptions.** If abortion is murder, it's murder in every case. A child conceived in rape is just as human and just as made in God's image. Laws with a rape exception treat some children as less worthy of protection based on who their father is.

**Check the real question.** Ask: “If I could show you abortion is wrong in this case, would you agree it's wrong in the others?” If yes, the hard case isn't really their reason. Most abortions aren't for rape or incest.

**Point to God.** He sees, He will bring perfect justice to the rapist, and He heals.

**Real stories:** Many people conceived in rape are alive today and glad to be.`,
    verses: ["Deuteronomy 24:16", "Genesis 9:6", "Psalm 139:13", "Exodus 23:7"],
    related: ["objections/abortion", "objections/had-abortion"],
  },

  {
    id: "mothers-life",
    category: "Abortion",
    title: "What if the mother's life is at risk?",
    sources: ["Abolitionist Rising"],
    oneLiner: "Doctors should try to save both lives. Treating a mother to save her life is not the same as deliberately killing her child.",
    askBack: "Is treating a sick mother the same as intentionally killing her child?",
    short: `The goal in any medical emergency should be to save both patients. When a mother is treated for a life-threatening condition and the child dies as an unintended result, that isn't abortion.

Abortion is the intentional killing of the child. That's never medically necessary.`,
    deep: `**The key distinction is intent.** Treating an ectopic pregnancy or performing an emergency early delivery aims to save life. The child's death, if it happens, is a tragedy, not the goal. Abortion aims to end the child's life.

**Abolitionist bills** (such as model legislation from Free the States) generally protect life-saving medical care while still treating intentional killing of the child as murder.

**This is a small fraction of cases.** Don't let a rare hard case become a reason to permit every abortion.

*Note: confirm the details of current abolitionist bill language before quoting it.*`,
    verses: ["Exodus 20:13", "Genesis 9:6"],
    related: ["objections/abortion", "objections/rape-incest"],
  },

  {
    id: "men-opinion",
    category: "Abortion",
    title: "Men can't have an opinion on abortion",
    sources: ["Abolitionist Rising"],
    oneLiner: "Whether killing an innocent person is wrong doesn't depend on who's saying it. Truth isn't male or female.",
    askBack: "Would you say a man can't speak against slavery or child abuse unless he's personally affected?",
    short: `An argument stands or falls on its own, not on the speaker. And half the babies killed by abortion are boys, so men aren't outsiders to this.

God calls everyone, men included, to speak up for those who can't ([[Proverbs 31:8-9]]).`,
    deep: `**Apply it consistently.** If only women may speak, then pro-choice men must stay silent too. Most people who say this don't hold that.

**Many women are pro-life and abolitionist.** The issue is not men versus women. It's whether the unborn is a human being.

**Fathers matter.** Men are called to protect their children and to support the mothers of their children. Men who pressure women into abortion share in the guilt.`,
    verses: ["Proverbs 31:8-9", "Proverbs 24:11", "James 4:17"],
    related: ["objections/abortion", "skills/suicide"],
  },

  {
    id: "had-abortion",
    category: "Abortion",
    title: "I've had an abortion",
    sources: ["Living Waters", "Abolitionist Rising"],
    oneLiner: "Thank you for telling me. It was wrong, and I think you know that. But there's full forgiveness in Jesus, even for this.",
    askBack: "Can I tell you how God can completely forgive and clean someone's conscience?",
    short: `I'm not going to pretend it was nothing, and I'm not going to pile on either. I'm a sinner too.

Abortion is a serious sin, but it is not beyond the blood of Christ. Jesus took the punishment for sinners who repent and trust Him, and He removes their sin completely ([[Psalm 103:12]], [[Isaiah 1:18]]). You can be fully forgiven and clean before God.`,
    deep: `**Don't minimize it, and don't pile on.** Most people who've had an abortion already carry guilt.

**Truth and grace together.** If you only give truth, you crush. If you only give comfort, you leave them guilty before God. Name the sin honestly, then point straight to the cross.

**Don't make it the only sin.** Walk through the Law like you would with anyone ({{Way of the Master|paths/way-of-the-master}}). Everyone needs the same Savior.

**Paul was a murderer** of Christians, and God saved him and used him. The church in Corinth was full of people with ugly pasts: “such were some of you; but you were washed” ([[1 Corinthians 6:11]]).

**After they turn to Christ:** there is no condemnation ([[Romans 8:1]]). Many find help in a post-abortion recovery ministry at a Bible-believing church.

**Men too.** Fathers who encouraged or paid for an abortion carry guilt as well and need the same forgiveness.`,
    verses: ["1 John 1:9", "Psalm 103:12", "Isaiah 1:18", "1 Corinthians 6:11", "Romans 8:1"],
    related: ["paths/way-of-the-master", "objections/abortion"],
  },

  {
    id: "incrementalism",
    category: "Abortion",
    title: "We should reduce abortion step by step",
    sources: ["Russell Hunter", "Abolitionist Rising"],
    oneLiner: "If abortion is murder, we shouldn't write laws that allow some of it. We should call for it to end now.",
    askBack: "Would we pass a law that says child abuse is legal until a certain age?",
    short: `Abolitionists believe laws like heartbeat bills or 15-week bans, while well meant, still permit killing before that point and regulate murder instead of ending it. God condemns unjust laws ([[Isaiah 10:1-2]]).

The call is immediate abolition: equal protection under the law for every child, from fertilization.`,
    deep: `**What abolitionists mean by this** (Russell Hunter, Abolitionist Rising, Free the States):
- Laws should treat abortion as homicide, with equal protection for the unborn
- Pro-life laws that set conditions on abortion end up implying the rest is allowed
- The model is the abolition of slavery: activists demanded it end, not that it be regulated
- Christians should obey God rather than men ([[Acts 5:29]]), including judges who allow abortion

**Equal protection** also means the law should not grant blanket immunity to anyone who intentionally kills a child, though abolitionists emphasize mercy and the gospel for the mothers involved.

**Be aware:** many pro-life Christians disagree with this approach and support incremental laws. Disagree charitably. Keep the focus on the child and on the gospel, not on attacking other believers.

*Note: we can refine this page to match exactly how Abolitionist Rising presents it.*`,
    verses: ["Isaiah 10:1-2", "Proverbs 17:15", "Proverbs 24:11", "Acts 5:29"],
    related: ["objections/abortion"],
  },
];
