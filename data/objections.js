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
// Optional (Study view, encyclopedia style):
//   topic:      topic name used as the page title, e.g. "The Problem of Suffering"
//   lead:       one or two plain sentences defining the topic
//   alsoAsked:  other ways people ask it
//   inBrief:    one-sentence answer for the fact box
//   tip:        a short "Before you answer" note for the Talk view
//   otherViews: [{ name, text }] how other worldviews answer it
//   talk:       conversation advice for the Talk view (same bold-heading format as deep).
//               When present, deep is pure reference material and Study leaves out the 30-second answer.
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
  "About Evangelism",
];

DATA.objections = [
  {
    id: "good-person",
    category: "The Gospel & Salvation",
    title: "I'm a good person",
    topic: "Human Goodness and God's Standard",
    lead: "Most people believe they are basically good and that this is enough to be accepted by God. The Bible measures goodness by God's own holy Law rather than by comparison with other people.",
    alsoAsked: ["I've never done anything really bad", "I've done more good than bad", "I'm better than most people"],
    inBrief: "By God's standard no one is good; everyone has broken His Law, so salvation must be a gift, not a reward.",
    tip: "keep it friendly and short. Ask questions, don't lecture.",
    otherViews: [
      { name: "Secular humanism", text: "Goodness means treating others well; there is no divine judge, so being decent is enough." },
      { name: "Islam", text: "Good and bad deeds are weighed on the Day of Judgment, and God's mercy decides the outcome." },
      { name: "Hinduism and Buddhism", text: "Good deeds build good karma, which shapes future lives rather than a single final judgment." },
      { name: "Christianity", text: "No one is good enough by God's perfect standard; Christ's righteousness is given as a gift to those who trust Him." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Most people think they're good. Want to see if you'd pass God's standard?",
    askBack: "Good compared to what? Other people, or God?",
    short: `Most of us compare ourselves to other people, so we look pretty good. But God doesn't grade on a curve. His standard is His Law, and He sees the heart.

Let's try it. Have you ever told a lie? Stolen anything, even something small? Used God's name as a curse word? Looked at someone with lust? Most of us have done all four. So if God judged you by that standard, would you be innocent or guilty?`,
    deep: `**The claim:** Most people compare themselves with other people and conclude they are good. Scripture notes that most people proclaim their own goodness ([[Proverbs 20:6]]).

**God's standard:** God does not grade on a curve. His standard is His Law, and He sees the heart. Lying, stealing, using God's name as a curse word, and lust are all violations of that Law, and most people admit to all four.

**What the Law is for:** The Law exposes self-righteousness so that grace makes sense. “Through the Law comes the knowledge of sin” ([[Romans 3:20]]), and the Law is a tutor that leads to Christ ([[Galatians 3:24]]).

**Good deeds and crimes:** In a court, a criminal cannot appeal to having done more good than bad; the law still has to be satisfied. Good deeds do not cancel crimes, and even human righteousness falls short: “all our righteous deeds are like a filthy garment” ([[Isaiah 64:6]]). All have sinned ([[Romans 3:23]]).

**Further reading:** Ray Comfort and Living Waters, the “Good Person Test.” See also {{Equality of Sin|convictions/equality-of-sin}}.`,
    talk: `**How to say it:** Keep it friendly and short, the way Ray Comfort and Living Waters do the “Good Person Test.” Ask, don't lecture.

**Questions to ask:**
- Have you ever told a lie?
- Have you ever stolen anything, even something small?
- Have you ever used God's name as a curse word?
- Have you ever looked at someone with lust?
- If God judged you by that standard, would you be innocent or guilty?

**If they say “I'm better than most people”:** “A criminal can't tell a judge he's done more good than bad. The law still has to be satisfied.”

**If they say “I've done good things too”:** “Good deeds don't cancel crimes. Even our good deeds fall short” ([[Isaiah 64:6]]).

**Bridge to the gospel:** Once they admit guilt, move to judgment and the cross ({{Way of the Master|paths/way-of-the-master/3}}).`,
    verses: ["Proverbs 20:6", "Romans 3:23", "Isaiah 64:6", "Romans 3:20"],
    related: ["paths/way-of-the-master"],
  },
  {
    id: "what-is-sin",
    category: "The Gospel & Salvation",
    title: "What is sin?",
    topic: "The Nature of Sin",
    lead: "Sin is the biblical term for breaking God's Law, whether in action, word, or thought. It is central to Christianity because it explains why people are separated from God and why Jesus died.",
    alsoAsked: ["Isn't sin just a religious word for mistakes?", "What counts as a sin?"],
    inBrief: "Sin is lawlessness: breaking God's Law in deed, word, or thought, which separates us from God and earns death.",
    otherViews: [
      { name: "Secular ethics", text: "There is no sin against God, only wrongdoing that harms other people." },
      { name: "Islam", text: "Sin is disobedience to God, but people are born pure and are forgiven through repentance and God's mercy." },
      { name: "Buddhism", text: "There is no offense against a creator; wrong action comes from ignorance and craving." },
      { name: "Christianity", text: "Sin is rebellion against a holy God that touches every person and can only be forgiven through Christ." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Sin is breaking God's Law, in what we do, say, or even think.",
    askBack: "Have you ever lied or stolen anything, even something small?",
    short: `The Bible says sin is lawlessness: breaking God's Law. It's not just big crimes. It's lying, stealing, lust, hatred, and putting anything ahead of God. It's also knowing the right thing and not doing it.

Sin is serious because it's against a holy God, and it separates us from Him. The wages of sin is death. But God showed His love: Christ died for sinners.`,
    deep: `**Definition:** “Sin is lawlessness” ([[1 John 3:4]]). God's Law, summed up in the Ten Commandments, is the standard. Sin is not limited to major crimes; it includes lying, stealing, lust, hatred, and putting anything ahead of God.

**More than actions:**
- **Thoughts:** lust is adultery of the heart ([[Matthew 5:27-28]]).
- **Words:** using God's name as a curse word ([[Exodus 20:7]]).
- **Failing to do good:** knowing the right thing and not doing it ([[James 4:17]]).
- **The heart:** the root problem is inside us ([[Jeremiah 17:9]]).

**The greatest sin:** not loving God with all one's heart, soul, and mind ([[Matthew 22:37-38]]). Everyone has broken this commandment.

**Everyone has sinned** ([[Romans 3:23]]). Sin is serious because it is against a holy God: it separates people from Him ([[Isaiah 59:2]]) and earns death ([[Romans 6:23]]).

**Sin and mistakes:** A mistake is accidental. Sin is choosing to do what one knows is wrong.

**The remedy:** God showed His love in that Christ died for sinners. Jesus, who knew no sin, became sin on our behalf ([[2 Corinthians 5:21]]).

**Further reading:** Ray Comfort and Living Waters on using the Law in evangelism ({{The Law|evidence/the-law}}).`,
    talk: `**How to say it:** Keep the definition short: “Sin is breaking God's Law, in what we do, say, or even think.”

**Don't stop at the definition.** Move from “What is sin?” to “Have you sinned?” The Law questions work because they show people what sin is ({{Way of the Master|paths/way-of-the-master/3}}).

**If they say “Sin is just a religious word for mistakes”:** “A mistake is an accident. Sin is choosing to do what you know is wrong.”

**Bridge to the gospel:** After they admit guilt, share the cross: Jesus, who knew no sin, became sin for us ([[2 Corinthians 5:21]]).`,
    verses: ["1 John 3:4", "Romans 3:23", "James 4:17", "Isaiah 59:2", "Romans 6:23"],
    related: ["objections/good-person", "paths/way-of-the-master"],
  },
  {
    id: "judged-by",
    category: "The Gospel & Salvation",
    title: "Does God only judge by the Ten Commandments?",
    topic: "The Standard of Divine Judgment",
    lead: "Christianity teaches that God will judge every person. This topic concerns what that judgment is based on and how the Ten Commandments relate to it.",
    alsoAsked: ["Will God judge my thoughts?", "What about people who never read the Bible?"],
    inBrief: "God judges deeds, words, thoughts, and motives by His perfect holiness; the Ten Commandments are the clearest summary of that standard.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "No. God judges everything we do, say, and think. The Ten Commandments are the clearest summary.",
    askBack: "If God judged your thoughts too, how would you do?",
    short: `God's standard is His own perfect holiness. He judges our deeds, our words, even our thoughts and motives. People who never read the Bible are judged by the law written on their hearts, through their conscience.

The Ten Commandments are the clearest summary of that standard, like a mirror that shows us we've fallen short. That's why we use them.`,
    deep: `**The standard:** God's standard is His own perfect holiness. He judges deeds, words, thoughts, and motives.

**What God judges:**
- **Deeds:** judged “according to their deeds” ([[Revelation 20:12]]).
- **Words:** every careless word ([[Matthew 12:36]]).
- **Thoughts and motives:** hidden things and the motives of the heart ([[1 Corinthians 4:5]], [[Hebrews 4:13]]). Every act, even hidden ones ([[Ecclesiastes 12:14]]).
- **What people knew:** with the written Law, or by conscience without it ([[Romans 2:12]], [[Romans 2:15]]). People who never read the Bible are judged by the law written on their hearts. More knowledge brings more responsibility ([[Luke 12:47-48]]).
- **What people did with Jesus:** “he who does not believe has been judged already” ([[John 3:18]]).

**Where the Ten Commandments fit:** They sum up God's moral law, and Jesus summed it up further: love God, love your neighbor ([[Matthew 22:37-38]]). The Law works like a mirror: “through the Law comes the knowledge of sin” ([[Romans 3:20]]). Jesus showed it reaches the heart: lust is adultery, hatred is murder.

**For believers:** There is no condemnation ([[Romans 8:1]]), because Jesus took their judgment. Their lives will still be evaluated for reward ([[2 Corinthians 5:10]]).

**Further reading:** {{The Law|evidence/the-law}}.`,
    talk: `**How to say it:** “The Ten Commandments are just the clearest way to see we've all fallen short.” Like a mirror, they show the problem.

**If they say “I've never read the Bible”:** “God wrote His Law on your heart too. That's your conscience” ([[Romans 2:15]]).

**Bridge to the gospel:** Go to the Law questions ({{Way of the Master|paths/way-of-the-master/3}}).`,
    verses: ["Revelation 20:12", "Matthew 12:36", "1 Corinthians 4:5", "Romans 2:15", "John 3:18"],
    related: ["objections/what-is-sin", "paths/way-of-the-master"],
  },

  {
    id: "all-religions",
    category: "Other Religions",
    title: "All religions lead to God",
    topic: "Religious Pluralism",
    lead: "Religious pluralism is the view that all religions are equally valid paths to God or ultimate reality. It matters because the major religions make conflicting claims, especially about who Jesus is.",
    alsoAsked: ["Aren't all religions basically the same?", "Isn't it arrogant to say only one religion is true?", "There are many paths up the same mountain"],
    inBrief: "The religions contradict each other about Jesus, so they cannot all be true; Jesus claimed to be the only way to God.",
    tip: "ask what they mean first. Many mean “all religions teach being good.”",
    otherViews: [
      { name: "Religious pluralism", text: "Each religion is a culturally shaped response to the same ultimate reality, and none has the whole truth." },
      { name: "Hinduism", text: "Many traditions see different religions as different paths suited to different people, all leading to the same goal." },
      { name: "Islam", text: "Earlier prophets brought true messages, but Islam is God's final and complete revelation." },
      { name: "Christianity", text: "Salvation is found only in Jesus Christ, who is God in the flesh and the one mediator between God and people." },
    ],
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: "That sounds kind, but they can't all be true. They disagree about who Jesus is.",
    askBack: "What do you mean by that?",
    short: `Christianity says Jesus is God and rose from the dead. Islam says He wasn't God and didn't die on the cross. Judaism says He wasn't the Messiah. They can't all be right.

And saying “all religions lead to God” takes a side too. It says every religion that claims to be the only way is *wrong*. So the real question is: who is right about Jesus? He said He was the only way.`,
    deep: `**The claim:** Pluralism holds that all religions lead to God. In everyday conversation it often means that all religions are basically about being good.

**The religions disagree:** Christianity teaches that Jesus is God and rose from the dead. Islam teaches that He was not God and did not die on the cross. Judaism teaches that He was not the Messiah. These claims contradict each other, so they cannot all be true.

**A self-defeating claim:** The statement “all religions are true” rules out every religion that claims to be exclusive, including Christianity. It is therefore not neutral or open-minded; it is its own exclusive view and takes a side. See {{Suicide|skills/suicide}}.

**Christianity is not about being good enough:** Most religions teach a path of effort toward God. Christianity teaches that no one can be good enough and that salvation is a gift of grace ([[Ephesians 2:8-9]]).

**Jesus' own claim:** Jesus did not present Himself as one way among many. He said He is the only way to the Father ([[John 14:6]]), and the apostles taught that there is salvation in no one else ([[Acts 4:12]]). Either He was right, or He was not a good teacher at all. See {{Liar, Lunatic, or Lord|evidence/trilemma}}.

**Further reading:** Greg Koukl, *Tactics* ({{Tactics|convictions/tactics}}). Cliff Knechtle's open-air dialogues on other religions.`,
    talk: `**Questions to ask:**
- “What do you mean by that?” ({{Columbo|skills/columbo}})
- “Do you mean all religions teach being good?”
- “Who do you think Jesus was?”

**How to say it:** Agree first, the way Knechtle often does: “I appreciate that you want to be fair to everyone.” Then ask why they believe it.

**If they mean “all religions teach being good”:** “Christianity actually says the opposite. You *can't* be good enough” ([[Ephesians 2:8-9]]).

**If they say “It's arrogant to say one is right”:** “Saying all are right takes a side too. It says every religion that claims to be the only way is wrong.”

**If they say “They're all basically the same”:** “They disagree about Jesus. Was He God, a prophet, or not the Messiah? They can't all be right.”

**Bridge to the gospel:** Set other religions aside: “Let's talk about you. Do you think you're a good person?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["John 14:6", "Acts 4:12", "Ephesians 2:8-9"],
    related: ["skills/columbo", "skills/suicide", "evidence/trilemma"],
  },

  // --- The Gospel & Salvation ---
  {
    id: "god-will-forgive",
    category: "The Gospel & Salvation",
    title: "God is loving. He'll forgive me.",
    topic: "God's Love and Justice",
    lead: "Many people assume that because God is loving, He will simply forgive everyone. Christianity teaches that God is both loving and just, and that the cross is where those two meet.",
    alsoAsked: ["Why can't God just forgive everyone?", "A loving God wouldn't punish me"],
    inBrief: "Because God is just, sin must be punished; because He is loving, He punished it in Jesus so the guilty can be forgiven.",
    tip: "this usually means they think they're good. Start with the Law.",
    otherViews: [
      { name: "Islam", text: "God forgives whom He wills through repentance and mercy, without any atoning sacrifice." },
      { name: "Universalism", text: "God's love will eventually bring every person to salvation." },
      { name: "Christianity", text: "God forgives freely, but not by overlooking sin: Christ paid its penalty, and forgiveness comes through repentance and faith." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: `God is loving, but He's also good. A good judge can't just let a guilty criminal go.`,
    askBack: `If a judge let a murderer walk free because he was “loving,” would you call him a good judge?`,
    short: `You're right that God is loving. But He's also just. If a judge said to a guilty criminal, “I'm a nice guy, so you can go,” we'd say he was corrupt.

That's the problem: because God is good, He must punish sin. But because He's loving, He sent Jesus to take the punishment. God doesn't just overlook our sin. He paid for it.`,
    deep: `**God is loving** ([[1 John 4:8]]), **and God is just.** A judge who told a guilty criminal, “I'm a nice guy, so you can go,” would be corrupt.

**The judge illustration** (Way of the Master): A good judge must see justice done. God “will by no means leave the guilty unpunished” ([[Nahum 1:3]]). Letting the guilty go would make Him corrupt ([[Proverbs 17:15]]). Because God is good, He must punish sin.

**Love and justice meet at the cross.** Because God is loving, He sent Jesus to take the punishment. God does not overlook sin; He paid for it. He remains just and still justifies the one who has faith in Jesus ([[Romans 3:26]]). The fine was paid ([[2 Corinthians 5:21]]).

**Presumption:** Assuming forgiveness without repentance is a gamble. God's kindness is meant to lead to repentance, not to delay it ([[Romans 2:4]]).

**Further reading:** Ray Comfort, *Hell's Best Kept Secret*.`,
    talk: `**Agree first:** “You're right that God is loving. But He's also good.”

**Why people say this:** It usually means they assume they're basically good. Go to the Law first so they see why they need forgiveness ({{I'm a good person|objections/good-person}}).

**If they say “He'll just let it go”:** Use the judge. “If a judge let a murderer walk free because he was loving, would he be a good judge?”

**Watch for presumption:** “God will forgive me” without repentance is a gamble. His kindness is meant to lead us to repent now ([[Romans 2:4]]).

**Bridge to the gospel:** “God doesn't just overlook our sin. He paid for it.” ({{Way of the Master|paths/way-of-the-master/6}})`,
    verses: ["1 John 4:8", "Nahum 1:3", "Proverbs 17:15", "Romans 3:26", "Romans 2:4"],
    related: ["paths/way-of-the-master", "objections/good-person"],
  },

  {
    id: "too-far-gone",
    category: "The Gospel & Salvation",
    title: "I've done too much to be forgiven",
    topic: "The Extent of God's Forgiveness",
    lead: "Some people believe their sins are too great for God to forgive. The Bible teaches that no sin is beyond the reach of Christ's sacrifice for anyone who repents and trusts Him.",
    alsoAsked: ["God could never forgive what I've done", "I'm too bad to be saved"],
    inBrief: "No one is beyond God's mercy; the cross is bigger than any sin, and Jesus turns away no one who comes to Him.",
    tip: "this person is often close. Go straight to the cross.",
    sources: ["Living Waters", "Mark Spence"],
    oneLiner: `No one is too far gone. The apostle Paul helped kill Christians, and God saved him.`,
    askBack: `Do you think your sin is bigger than what Jesus did on the cross?`,
    short: `I'm glad you take your sin seriously. Most people don't. But the cross is bigger than your sin.

Paul persecuted Christians and called himself the worst of sinners, yet God saved him to show that no one is beyond His mercy. A criminal dying next to Jesus was forgiven in his last hours. If you repent and trust Jesus, He will not turn you away.`,
    deep: `**The cross is greater than any sin.** If a person repents and trusts Jesus, He will not turn them away.

**Examples of grace:**
- Paul persecuted Christians and called himself the foremost of sinners, yet God saved him to show that no one is beyond His mercy ([[1 Timothy 1:15]]).
- The criminal crucified beside Jesus was forgiven in his last hours, with no time for good works ([[Luke 23:42-43]]).
- The Corinthians had been all kinds of sinners: “Such were some of you” ([[1 Corinthians 6:11]]).
- David committed adultery and murder, and wrote Psalm 51 in repentance.

**Promises:**
- Scarlet sins made white as snow ([[Isaiah 1:18]]).
- Jesus will not cast out anyone who comes ([[John 6:37]]).
- Those who confess are forgiven and cleansed ([[1 John 1:9]]).

**Not minimizing sin:** The Bible does not say sin is “not that bad.” It is that bad, and Jesus paid for it anyway.`,
    talk: `**This person is close.** Someone who feels the weight of their sin is often ready for grace. Don't add more Law. Go straight to the cross.

**How to say it:** “I'm glad you take your sin seriously. Most people don't. But the cross is bigger than your sin.”

**Give them examples:** Paul, the thief on the cross, David. Then give them promises to hold onto ([[Isaiah 1:18]], [[John 6:37]], [[1 John 1:9]]).

**Be careful:** Don't say “it's not that bad.” It *is* that bad, and Jesus paid for it anyway.

**Bridge to the gospel:** Lead them to repent and trust ({{Way of the Master|paths/way-of-the-master/7}}).`,
    verses: ["1 Timothy 1:15", "Isaiah 1:18", "Luke 23:42-43", "John 6:37", "1 John 1:9"],
    related: ["paths/way-of-the-master"],
  },

  {
    id: "hell-unfair",
    category: "The Gospel & Salvation",
    title: "Hell isn't fair",
    topic: "The Justice of Hell",
    lead: "The doctrine of hell teaches that unforgiven sinners face eternal punishment after judgment. Many people object that this is unfair or out of proportion; Christianity presents it as the outworking of God's perfect justice.",
    alsoAsked: ["How could a loving God send anyone to hell?", "Eternal punishment is too harsh"],
    inBrief: "Hell is God's justice against sin, not cruelty; through Jesus, God offers a pardon so no one has to go.",
    tip: "start with agreement. Almost everyone wants some justice.",
    otherViews: [
      { name: "Atheism", text: "There is no hell; death is the end, and no final justice is coming." },
      { name: "Universalism", text: "Any punishment is temporary, and all people will eventually be saved." },
      { name: "Islam", text: "Hell is real, and a person's deeds and God's mercy decide whether they are spared." },
      { name: "Christianity", text: "Hell is real and just, but Christ took the penalty so anyone who repents and trusts Him is pardoned." },
    ],
    sources: ["Ray Comfort", "Greg Koukl", "C.S. Lewis"],
    oneLiner: "Hell is justice, not cruelty. And God offers a pardon, so no one has to go.",
    askBack: `Do you think God should punish murderers and rapists?`,
    short: `Most people agree that some people deserve punishment. The question is where to draw the line. God draws it at His perfect Law, and by that standard we've all broken it.

Hell isn't unfair. It's justice. What's “unfair” is grace: Jesus took the punishment we deserved so we could go free. No one has to go to hell. God has provided a way out.`,
    deep: `**Common ground on justice:** Most people agree that some people deserve punishment. The question is where to draw the line. God draws it at His perfect Law, and by that standard everyone has broken it.

**The seriousness of a crime depends on whom it is against.** Lying to a friend is bad; lying under oath is worse. Sin is against an infinitely holy God, who is angry with the wicked every day ([[Psalm 7:11]]).

**Judgment will be exact.** People are judged according to their deeds ([[Revelation 20:12]]), and nothing is hidden ([[Hebrews 4:13]]).

**Justice and grace:** Hell is not unfair; it is justice. What is “unfair” is grace: Jesus took the punishment sinners deserved so they could go free. God takes no pleasure in the death of the wicked ([[Ezekiel 33:11]]), and He provided a way out ([[John 3:16]]).

**Lewis's view:** In the end, hell is God giving people what they insisted on: life without Him. (*The Great Divorce*, *The Problem of Pain*.)

**Jesus taught about hell more than anyone** ([[Matthew 10:28]]), and He came to rescue people from it.

**Further reading:** Lee Strobel, *The Case for Faith* (chapter on hell). C.S. Lewis, *The Great Divorce*. See also {{Equality of Sin|convictions/equality-of-sin}} on degrees of punishment.`,
    talk: `**Start with agreement:** Almost everyone wants *some* justice. Ask about Hitler or a child abuser. Once they agree evil should be punished, the question is just where the standard is.

**If they say “It's too harsh”:** “Lying to a friend is bad. Lying to a judge is worse. Sin is against a holy God.”

**If they say “A loving God wouldn't”:** “What's unfair isn't hell. It's grace: Jesus took the punishment we deserved.”

**Make it personal:** Go to the Law so it isn't abstract: “Would *you* be innocent or guilty?”

**Bridge to the gospel:** “No one has to go. God has provided a way out.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Revelation 20:12", "Hebrews 4:13", "Matthew 10:28", "Psalm 7:11", "Ezekiel 33:11", "John 3:16"],
    related: ["paths/way-of-the-master", "objections/god-will-forgive"],
  },
  {
    id: "same-as-murderer",
    category: "God & Suffering",
    title: "Why would I get the same punishment as a murderer?",
    topic: "Degrees of Punishment",
    lead: "The question of degrees of punishment asks whether God treats every sinner the same at the final judgment. It matters because many people assume small sins and terrible crimes would earn the same sentence.",
    alsoAsked: ["Are all sins the same to God?", "Isn't a liar better than Hitler?"],
    inBrief: "Punishment fits the crime, so judgment has degrees. But one broken law still makes a person guilty and in need of a Savior.",
    tip: "agree with their sense of justice first. It's a good instinct.",
    otherViews: [
      { name: "Islam", text: "Deeds are weighed on the Day of Judgment, and a person hopes good deeds outweigh bad by God's mercy." },
      { name: "Hinduism and Buddhism", text: "Karma brings consequences in proportion to each action, across lifetimes, with no judge to pardon." },
      { name: "Christianity", text: "Judgment is exact and has degrees, but any sinner can be pardoned because Christ paid the fine." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "You wouldn't. Punishment fits the crime. But a smaller criminal is still a criminal.",
    askBack: "If you broke one law, would a judge call you innocent?",
    short: `The Bible says God judges fairly, and punishment fits the crime. Jesus said some will receive more punishment than others.

But breaking one law still makes you a lawbreaker. A shoplifter isn't a murderer, but he's still guilty. The question isn't whether you're as bad as the worst person; it's whether you're innocent before a holy God. None of us are, and that's why we need a Savior.`,
    deep: `**Degrees of punishment:** Scripture teaches that punishment fits the crime. The servant who knew his master's will and ignored it is beaten with many lashes; the one who did not know, with few ([[Luke 12:47-48]]). Jesus spoke of a “greater sin” ([[John 19:11]]). Everyone is judged according to their deeds ([[Revelation 20:12]]), and the Judge of all the earth will do what is right ([[Genesis 18:25]]).

**One law makes a lawbreaker:** Whoever stumbles in one point of the Law is guilty of all ([[James 2:10]]). “The soul who sins will die” ([[Ezekiel 18:4]]). A shoplifter is not a murderer, but he is still guilty. The question is not whether a person is as bad as the worst offender, but whether he is innocent before a holy God.

**God's standard, not ours:** People tend to compare themselves with the worst offenders and look good by comparison. God measures by His perfect Law ({{I'm a good person|objections/good-person}}). Scripture even treats hatred as murder of the heart ([[1 John 3:15]]).

**Equal in guilt, not in weight:** Any one sin makes a person guilty and in need of a Savior, yet sins differ in harm and in the punishment they bring ({{Equality of Sin|convictions/equality-of-sin}}).

**The sense of justice:** The desire to see a murderer punished is right; it reflects God's own justice. The same justice applies to every lawbreaker.

**The cross:** The guilty can go free because the fine is paid, not ignored ({{Way of the Master|paths/way-of-the-master/6}}).`,
    talk: `**Agree first:** Wanting a murderer punished is right. Then turn it gently: “The same justice applies to us.”

**If they say “I'm not that bad”:** “You're right, you wouldn't get the same punishment. But a smaller criminal is still a criminal.”

**Questions to ask:**
- “If you broke one law, would a judge call you innocent?”
- “Have you ever told a lie? Stolen anything?”
- “Ever hated someone? The Bible calls that murder of the heart.” ([[1 John 3:15]])

**How to say it:** “It's not whether you're as bad as the worst person. It's whether you're innocent before God.”

**Bridge to the gospel:** “None of us are innocent. That's why we need a Savior who paid our fine.” ({{Way of the Master|paths/way-of-the-master/6}})`,
    verses: ["Luke 12:47-48", "James 2:10", "Ezekiel 18:4", "Revelation 20:12"],
    related: ["objections/hell-unfair", "objections/good-person"],
  },
  {
    id: "ot-vs-nt-god",
    category: "God & Suffering",
    title: "Why does God seem so much harsher in the Old Testament?",
    topic: "God in the Old and New Testaments",
    lead: "This question asks whether the God of the Old Testament, who often judges nations, is the same as the God of the New Testament, who is often seen as gentle. It is a common reason people doubt the Bible's consistency.",
    alsoAsked: ["Is the Old Testament God a different God?", "Why was God so angry back then?"],
    inBrief: "God does not change. Both Testaments show mercy and judgment; the cross now opens a season of patience before final judgment.",
    tip: "ask which passage or event they have in mind.",
    otherViews: [
      { name: "Marcion (2nd century)", text: "The Old Testament god was a lesser, harsh deity, not the Father Jesus revealed; the early church rejected this as heresy." },
      { name: "Progressive readings", text: "The harsh passages reflect ancient Israel's limited understanding of God rather than God Himself." },
      { name: "Christianity", text: "One unchanging God, whose kindness and severity both appear in every age." },
    ],
    sources: ["Ray Comfort", "Greg Koukl"],
    oneLiner: "Same God, same justice. The difference is the cross, and His patience before the final judgment.",
    askBack: "What would you expect a just God to do with evil?",
    short: `God doesn't change. The Old Testament is full of mercy: He calls Himself “slow to anger,” spared Nineveh, and waited centuries before judging Canaan. And the New Testament has judgment too: Ananias and Sapphira, Herod, and Jesus' warnings about hell.

What changed is the cross. God poured out His judgment on Jesus, and now He's patiently calling everyone to repent before the day He has fixed for judgment. His patience now isn't a softer God; it's time to be saved.`,
    deep: `**Same God:** “I, the LORD, do not change” ([[Malachi 3:6]]). Jesus Christ is the same yesterday, today, and forever (Hebrews 13:8).

**Mercy in the Old Testament:**
- God's own description: compassionate, gracious, slow to anger, yet He punishes the guilty ([[Exodus 34:6-7]]).
- Jonah fled because he knew God would forgive Nineveh ([[Jonah 4:2]]), and God spared the city.
- God waited centuries before judging the Canaanites ([[Genesis 15:16]]).
- He takes no pleasure in the death of the wicked ([[Ezekiel 33:11]]).

**Judgment in the New Testament:**
- Ananias and Sapphira (Acts 5); Herod struck down ([[Acts 12:23]]).
- Jesus spoke about hell more than anyone else in the Bible.
- Revelation describes the final judgment.

**Why it looks different now:**
1. **The cross.** God passed over sins in His patience, then showed His justice at the cross, so He could be just and forgive ([[Romans 3:25-26]]). His judgment on sin was poured out on Jesus.
2. **A season of patience.** God is not slow; He is patient, not wanting anyone to perish ([[2 Peter 3:9]]). He now commands everyone to repent because He has fixed a day of judgment ([[Acts 17:30-31]]). Judgment is delayed, not cancelled. Now is the day of salvation ([[2 Corinthians 6:2]]).
3. **Israel's history is condensed.** The Old Testament covers thousands of years; the judgments stand out, but long stretches of patience sit between them.
4. **How God judges now:** He still restrains evil through civil government ([[Romans 13:4]]), and every sin will be dealt with at the final judgment.

**The patience argument:** If God judged all evil immediately, He would judge not only rapists and murderers but every liar, and no one would be left. His present patience is therefore mercy, not weakness.

**Both are true in every age:** “Behold then the kindness and severity of God” ([[Romans 11:22]]).`,
    talk: `**If they name a specific event:** Deal with that one. See {{The God of the Old Testament is cruel|objections/ot-cruel}}.

**Turn it around with questions:**
- “Would you want God to judge every rapist right now?” (Most say yes.)
- “How about every murderer?” (Yes.)
- “How about every liar?” (Pause.)
- “Have you ever told a lie? Then if God judged everyone right now, where would that leave you?”

**How to say it:** “His patience isn't weakness. He's showing mercy right now, giving you time to repent.”

**If they say “The New Testament God is nicer”:** Point out that Jesus spoke about hell more than anyone ([[Matthew 10:28]]).

**Bridge to the gospel:** “God's patience right now is His kindness to you. Can I ask how you'd do on Judgment Day?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Malachi 3:6", "Exodus 34:6-7", "Romans 3:25-26", "2 Peter 3:9", "Romans 11:22"],
    related: ["objections/ot-cruel", "objections/hell-unfair"],
  },

  {
    id: "never-heard",
    category: "The Gospel & Salvation",
    title: "What about people who never heard?",
    topic: "The Fate of the Unevangelized",
    lead: "This question asks what happens to people who die without ever hearing about Jesus. It raises issues of God's fairness and of what every person can know about God apart from the Bible.",
    alsoAsked: ["What about a tribe in the jungle?", "Is it fair to judge people who never had a chance?"],
    inBrief: "God judges everyone fairly by the light they had, and everyone has creation and conscience; those who have heard must respond to Jesus.",
    tip: "it may be a way to keep the gospel at arm's length.",
    otherViews: [
      { name: "Universalism", text: "Everyone will be saved in the end, so hearing the gospel is not decisive." },
      { name: "Hinduism", text: "Many paths lead to the divine, and each soul progresses over many lives." },
      { name: "Christianity", text: "God is perfectly just and judges by the light given; Jesus is the only Savior, which is why the gospel must be preached." },
    ],
    sources: ["Cliff Knechtle", "Greg Koukl"],
    oneLiner: `God will judge them perfectly fairly. But you have heard, so what will you do with Jesus?`,
    askBack: `If I could answer that for you, would you be ready to trust Christ yourself?`,
    short: `God is a perfectly fair judge, and He judges people by the light they had. Everyone has creation and a conscience, so no one is totally in the dark.

But I can't answer for someone in a remote village. I can only answer for you, and you've heard. That's the question that matters for you today.`,
    deep: `**God is just.** “Shall not the Judge of all the earth deal justly?” ([[Genesis 18:25]]) Whatever God does, He will not be unfair. He judges people by the light they had.

**Everyone has some light:**
- Creation shows God's power and nature ([[Romans 1:20]]).
- Conscience shows God's Law ([[Romans 2:15]]).
- People are judged by the light they had ([[Romans 2:12]]).

No one is completely in the dark.

**God placed people where they are so they would seek Him** ([[Acts 17:26-27]]), and those who seek Him with all their heart find Him ([[Jeremiah 29:13]]).

**The reason for missions:** “How will they hear without a preacher?” ([[Romans 10:14]]) God wants all to be saved, so the gospel must be taken to everyone ({{Election & Free Will|convictions/election-free-will}}).

**Further reading:** Lee Strobel, *The Case for Faith*.`,
    talk: `**Answer briefly, then turn it gently** (Knechtle often does this): “I can't answer for someone in a remote village. I can only answer for you, and you've heard.”

**Questions to ask:**
- If I could answer that for you, would you be ready to trust Christ yourself?
- What will *you* do with Jesus?

**It's also why we go.** “That's exactly why I'm out here telling people” ([[Romans 10:14]]).

**Bridge to the gospel:** Bring it back to the person in front of you ({{Way of the Master|paths/way-of-the-master/2}}). If they're not ready, leave a {{stone in their shoe|skills/stone-in-shoe}}.`,
    verses: ["Romans 1:20", "Romans 2:15", "Genesis 18:25", "Acts 17:26-27", "Romans 10:14"],
    related: ["skills/stone-in-shoe", "paths/way-of-the-master"],
  },

  {
    id: "think-later",
    category: "The Gospel & Salvation",
    title: "I'll think about it later",
    topic: "Delaying Repentance",
    lead: "Many people agree the gospel matters but plan to deal with it later in life. The Bible stresses that life is uncertain and calls people to repent now.",
    alsoAsked: ["I'm not ready yet", "Maybe when I'm older"],
    inBrief: "No one is promised tomorrow; God's patience is meant to lead to repentance now, because today is the day of salvation.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: `You don't know if you'll have a later. If you died tonight, where would you go?`,
    askBack: `Do you know for sure you'll be alive tomorrow?`,
    short: `I appreciate you being honest. But no one is promised tomorrow. People die every day who planned to get right with God later.

God is being patient with you right now, and that patience is meant to lead you to repentance, not to put it off. Today is the day of salvation.`,
    deep: `**Life is short and uncertain:**
- No one knows what a day will bring ([[Proverbs 27:1]]).
- Life is a vapor ([[James 4:14]]).
- The rich fool planned for years he did not have ([[Luke 12:20]]).

Many people die every day who planned to get right with God later.

**Now is the time:** “Now is the day of salvation” ([[2 Corinthians 6:2]]).

**God's patience is mercy, not permission.** He is patient, not wishing for any to perish ([[2 Peter 3:9]]), and His kindness is meant to lead to repentance, not to put it off ([[Romans 2:4]]).`,
    talk: `**Thank them for honesty:** “I appreciate you being honest. But no one is promised tomorrow.”

**Questions to ask:**
- Do you know for sure you'll be alive tomorrow?
- If you died tonight, where would you go?
- Is there anything stopping you from repenting and trusting Jesus right now? (Comfort often asks this. Let them name it.)

**Don't pressure a prayer.** Urge them, then leave them with a {{stone in their shoe|skills/stone-in-shoe}}.

**Wrapping up:** See {{Wrapping up|openers/wrapping-up}}, and point them back to repent and trust ({{Way of the Master|paths/way-of-the-master/7}}).`,
    verses: ["Proverbs 27:1", "James 4:14", "Luke 12:20", "2 Corinthians 6:2", "2 Peter 3:9"],
    related: ["paths/way-of-the-master", "openers/wrapping-up"],
  },
  {
    id: "happy-as-i-am",
    category: "The Gospel & Salvation",
    title: "I'm happy as I am",
    topic: "Contentment Without God",
    lead: "Many people see no need for God because their lives already feel satisfying. The question is whether present happiness says anything about death, judgment, and eternity.",
    alsoAsked: ["My life is fine without God", "I don't need religion"],
    inBrief: "Happiness now is good, but it doesn't prepare anyone for death and judgment. Only Christ does.",
    tip: "affirm their happiness first. Don't argue with how they feel.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "I'm glad you're happy. But happiness doesn't answer what happens when you die.",
    askBack: "If you died tonight, would you be ready to face God?",
    short: `Being happy is good. But a man can be happy on a plane without a parachute, right up until he has to jump. The question isn't how you feel now; it's whether you're ready for what's coming.

Jesus asked what it profits a man to gain the whole world and lose his soul. Everyone dies, and then comes judgment.`,
    deep: `**Happiness and readiness:** Present contentment and readiness for death are separate questions. Scripture treats death, and the judgment that follows it, as certain for everyone ([[Hebrews 9:27]]).

**The parachute illustration:** A passenger can be happy on a plane without a parachute, right up until he has to jump. No one puts on a parachute to make the flight more pleasant; it is worn because of the jump ahead. In the same way, the gospel presents Jesus not as an add-on for a better life but as the only way to survive the judgment to come.

**Happy now, lost later:** In Jesus' parable, the rich man was content with his full barns, and God called him a fool that very night ([[Luke 12:20]]). Jesus asked what it profits a man to gain the whole world and forfeit his soul ([[Mark 8:36]]).

**Eternity in the heart:** God has set eternity in the human heart ([[Ecclesiastes 3:11]]), so even contented people tend to wonder about death and what comes after.

**Further reading:** Ray Comfort, *Hell's Best Kept Secret* (the parachute illustration).`,
    talk: `**If they say “I don't need God to be happy”:** Agree that happiness is good. “I'm glad. But happiness doesn't answer what happens when you die.”

**How to say it:** Use the parachute. “You can be happy on a plane without a parachute, until you have to jump.”

**Questions to ask:**
- “Do you ever think about what happens when you die?”
- “If you died tonight, would you be ready to face God?”

**Bridge to the gospel:** “Can I ask you a few questions to see if you'd pass God's standard?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Mark 8:36", "Luke 12:20", "Hebrews 9:27", "Ecclesiastes 3:11"],
    related: ["objections/think-later", "paths/way-of-the-master"],
  },
  {
    id: "meaning-of-life",
    category: "The Gospel & Salvation",
    title: "What is the meaning of life?",
    topic: "The Meaning of Life",
    lead: "The meaning of life is the question of why human beings exist and what, if anything, gives life lasting purpose. Every worldview offers an answer, and that answer shapes how people live.",
    alsoAsked: ["Why are we here?", "What's the point of it all?", "What is my purpose?"],
    inBrief: "People were made by God and for God, to know and love Him and love others. Sin broke that; Jesus restores it.",
    otherViews: [
      { name: "Atheism", text: "No purpose is built into life, so people create their own meaning, which lasts only as long as they do." },
      { name: "Buddhism", text: "Life is marked by suffering, and the goal is release from desire and the cycle of rebirth." },
      { name: "Christianity", text: "People were made by God and for Him, and find lasting meaning in knowing Him through Christ." },
    ],
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "To know God, love Him, and love people. Jesus is how we get back to Him.",
    askBack: "What do you think it is?",
    short: `We were made by God and for God. Jesus said eternal life is knowing the only true God and Jesus Christ whom He sent. The greatest commandment is to love God with everything, and the second is to love your neighbor.

That's why nothing else fully satisfies: God set eternity in our hearts. The problem is that our sin separates us from the God we were made for, and that's why Jesus came.`,
    deep: `**The Christian answer:**
- **Know God:** “This is eternal life, that they may know You” ([[John 17:3]]).
- **Love God and others:** the greatest commandment ([[Matthew 22:37-38]]).
- **Made for Him:** all things were created through Christ and for Him ([[Colossians 1:16]]).
- **Sensed by everyone:** God set eternity in human hearts ([[Ecclesiastes 3:11]]), which is why nothing else fully satisfies.

**Meaning without God:** If there is no God, there can be meaning for a while, but no meaning that lasts. Fifty years after a person dies, little of what they did remains. Yet people cannot live as if nothing matters, which suggests meaning is something found rather than invented. ({{Argument from Desire|evidence/argument-from-desire}})

**The problem of sin:** Sin separates people from the God they were made for, which is why Jesus came. Gaining everything else is not enough ([[Mark 8:36]]).

**Further reading:** Greg Koukl, *The Story of Reality*.`,
    talk: `**Ask first:** “What do you think it is?” Most people say being happy, family, or helping others. Listen, and take it seriously.

**Take the roof off, gently:** “If there's no God, then 50 years after we die, does any of it last?” ({{Taking the Roof Off|skills/taking-the-roof-off}})

**If they say life has no meaning:** Ask why anything matters to them, then. People can't live as if nothing matters.

**Bridge to the gospel:** “Our sin separates us from the God we were made for. Can I ask you a few questions about that?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["John 17:3", "Matthew 22:37-38", "Colossians 1:16", "Ecclesiastes 3:11"],
    related: ["objections/happy-as-i-am", "paths/way-of-the-master"],
  },
  {
    id: "good-life",
    category: "The Gospel & Salvation",
    title: "If I follow Jesus, will my life go well?",
    topic: "Faith and Earthly Blessing",
    lead: "Many people assume that following God should bring health, wealth, and an easy life. What people expect from faith shapes whether that faith survives hardship.",
    alsoAsked: ["Will God make my life better?", "Does God want me healthy and rich?", "Why do Christians still suffer?"],
    inBrief: "Jesus promised trouble in this life, but also His presence, His good purpose in everything, and eternal reward.",
    tip: "find out what they're hoping for. It may be a hard season.",
    otherViews: [
      { name: "Prosperity teaching", text: "Faith and giving are expected to bring health and wealth now, as signs of God's favor." },
      { name: "Hinduism and Buddhism", text: "Karma means good actions bring good results, in this life or a later one." },
      { name: "Christianity", text: "Faithfulness brings God's presence and eternal reward, not a guarantee of comfort now." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Not always an easy life. Jesus promised trouble, and His presence and eternal reward.",
    askBack: "What do you think following Jesus should get you?",
    short: `Faith and obedience don't guarantee health, money, or an easy road. Jesus said, “In the world you have tribulation, but take courage; I have overcome the world.” Paul was beaten and shipwrecked, and most of the apostles were killed.

But God gives real rewards: His presence, peace that doesn't depend on circumstances, His good purpose in everything, and treasure in heaven that lasts forever.`,
    deep: `**What Jesus promised for this life:**
- Trouble, and His peace in it ([[John 16:33]]).
- Persecution for those who live godly ([[2 Timothy 3:12]]).
- Suffering for His sake as part of the calling ([[Philippians 1:29]]).
- The faithful in Hebrews 11 “died in faith, without receiving the promises” ([[Hebrews 11:13]]).
- Paul was beaten and shipwrecked, and most of the apostles were killed.

**What faith does bring:**
- God works all things together for good for those who love Him ([[Romans 8:28]]).
- Present affliction is light next to the coming glory ([[2 Corinthians 4:17]]).
- Treasure in heaven that can't be lost ([[Matthew 6:19-20]]).
- Abundant life: life with God ([[John 10:10]]).
- Peace that doesn't depend on circumstances.

**A general pattern, not a guarantee:** Proverbs shows that honesty, hard work, and faithfulness often lead to a better life. But Job and Psalm 73 show the righteous can suffer while the wicked prosper, for now.

**Obedience out of love, not to earn:** Salvation is a gift ([[Ephesians 2:8-9]]). Rewards are God's generosity, not wages.

**False expectations:** In the parable of the sower (Mark 4), some receive the word with joy but fall away when affliction comes. People who come to Jesus for an easy life tend to fall away when trouble arrives. Jesus saves from judgment; He is not presented in Scripture as a route to a better life ({{Way of the Master|paths/way-of-the-master}}).

**The prosperity gospel:** The claim that “God wants you healthy and rich” isn't the message of Jesus or the apostles.`,
    talk: `**If they're going through a hard time:** Be honest. Following Jesus didn't spare Paul or the apostles, but God was with them in it ([[John 16:33]]).

**If they want God for a better life:** Don't promise one. Use the parachute: “You put it on because you're going to jump, not to make the flight nicer.”

**If they say “Then why follow Him?”:** “Because He saves us from judgment, and He's worth it. The rewards last forever.”

**Watch for the prosperity gospel:** If they've heard “God wants you rich,” gently say that isn't what Jesus promised.

**Bridge to the gospel:** “The real question isn't an easy life. It's whether you're ready to face God.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["John 16:33", "2 Timothy 3:12", "Romans 8:28", "2 Corinthians 4:17", "Matthew 6:19-20"],
    related: ["objections/happy-as-i-am", "objections/suffering"],
  },
  {
    id: "living-in-sin",
    category: "The Gospel & Salvation",
    title: "Can I be saved and keep living in sin?",
    topic: "Saving Faith and Ongoing Sin",
    lead: "This question asks whether a person can be truly saved while continuing in known sin without repentance. It concerns the relationship between faith, repentance, and a changed life.",
    alsoAsked: ["If God forgives everything, does it matter how I live?", "Can a Christian keep practicing a sin?"],
    inBrief: "Saving faith includes repentance. Believers still stumble and fight sin, but someone at peace with known sin should question their faith.",
    tip: "find out if they're asking about themselves or someone else.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Real faith turns from sin. The question is: are you at war with your sin, or at peace with it?",
    askBack: "Do you want to stop, or do you think God's okay with it?",
    short: `Every Christian still sins, but saving faith and repentance go together. Jesus said, “Repent and believe.” Someone who knows something is sin, has made peace with it, and doesn't want to stop has good reason to question whether their faith is real.

A believer can stumble, even often, but hates the sin, fights it, and confesses it. Jesus didn't only come to forgive sin. He came to free us from it.`,
    deep: `**Faith and repentance are one package:** “Repent and believe in the gospel” ([[Mark 1:15]]); “repentance toward God and faith in our Lord Jesus Christ” ([[Acts 20:21]]). Grace is never permission to keep sinning ([[Romans 6:1-2]]).

**Saving faith changes a life:** Faith without works is dead ([[James 2:17]]); anyone in Christ is a new creature ([[2 Corinthians 5:17]]). Jesus came not only to forgive sin but to free people from it.

**The warnings:**
- “Those who practice such things will not inherit the kingdom of God” ([[Galatians 5:19-21]]).
- Someone born of God doesn't go on practicing sin ([[1 John 3:9]]).
- Claiming to know God while ignoring His commands is a lie ([[1 John 2:4]]).
- Many will say “Lord, Lord” and hear “I never knew you” ([[Matthew 7:21-23]]).

**Struggling isn't the same as living in it:** Every Christian still sins ([[1 John 1:8]]). A believer confesses and is forgiven ([[1 John 1:9]]), hates the sin, and fights it, like Paul in Romans 7. Same-sex attraction itself, fought and not acted on, is a struggle, not living in sin.

**Every sin, not just one:** The warnings cover sex outside marriage, drunkenness, greed, and lying ([[1 Corinthians 6:9-10]]). And God changes people: “Such were some of you” ([[1 Corinthians 6:11]]).

**What it means for salvation:** A true believer can't lose salvation, so someone comfortable in sin was likely never truly saved ([[1 John 2:19]]). If they are God's child, He will discipline them and draw them back ([[Hebrews 12:6]]). Scripture calls for self-examination: “Test yourselves” ([[2 Corinthians 13:5]]).

**My views:** {{Homosexuality|convictions/homosexuality}} and {{Can You Lose Your Salvation?|convictions/eternal-security}}.`,
    talk: `**If they're struggling:** Encourage them. Fighting sin and confessing it is a sign of real faith ([[1 John 1:9]]).

**If they're comfortable in it:** Ask, “Are you at war with your sin, or at peace with it?”

**Don't pronounce judgment:** You can't see hearts. But don't give false assurance either. Point them to “Test yourselves” ([[2 Corinthians 13:5]]).

**How to say it:** Gently, including yourself. “I've had to turn from things too. Jesus gives the power to change, not just forgiveness.”

**Bridge to the gospel:** “Repentance and faith go together. Have you ever turned from your sin and trusted Jesus?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Mark 1:15", "Galatians 5:19-21", "1 John 3:9", "1 John 1:8", "2 Corinthians 13:5"],
    related: ["convictions/eternal-security", "convictions/homosexuality"],
  },

  {
    id: "spiritual-not-religious",
    category: "The Gospel & Salvation",
    title: "I'm spiritual, not religious",
    topic: "Spirituality Without Religion",
    lead: "“Spiritual but not religious” describes people who believe in something beyond the material world but reject organized religion and its authority. It is a growing identity in the West.",
    alsoAsked: ["I believe in a higher power", "I don't need organized religion", "I have my own spirituality"],
    inBrief: "Religion can't save anyone, but true spirituality depends on what God has revealed, not on what feels right to us.",
    tip: "ask what they mean by spiritual before you respond.",
    otherViews: [
      { name: "Spiritual but not religious", text: "Spiritual truth is personal, found through experience and intuition rather than a church or scripture." },
      { name: "New Age", text: "The divine is within everyone, and growth comes through awareness and inner experience." },
      { name: "Christianity", text: "God has spoken through Christ and Scripture, and people come to Him through Jesus, not self-made paths." },
    ],
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: `That's interesting. What do you mean by spiritual?`,
    askBack: `Where do you think your spirit goes when you die?`,
    short: `I actually agree that religion can't save anyone. Christianity isn't about religious rules; it's about a relationship with God through Jesus.

But “spiritual” can mean a lot of things. If there's a God who made us, the most important question is what He thinks, not just what feels right to us.`,
    deep: `**What the phrase usually means:** “Spiritual” can mean many things. It often means belief in something beyond the physical, combined with a rejection of religious rules and of anyone telling a person what to do. ({{Spiritual|people/spiritual}})

**Common ground:** Jesus was hard on dead religion ([[Matthew 23:28]]). Christianity teaches that religion and rule-keeping can't save anyone ([[Ephesians 2:8-9]]). It presents itself as a relationship with God through Jesus, not religious performance.

**The question of authority:** If there is a God who made people, the most important question is what He thinks, not what feels right. A spirituality people invent for themselves usually agrees with them about everything. Jesus claimed to be the only way to the Father ([[John 14:6]]).

**Eternity and judgment:** God has set eternity in human hearts ([[Ecclesiastes 3:11]]). Spiritual or not, everyone will stand before God ([[Hebrews 9:27]]).

**Further reading:** Greg Koukl, *Tactics* (the Columbo tactic).`,
    talk: `**Use Columbo** ({{Columbo|skills/columbo}}): “What do you mean by spiritual?” Often it means “I believe in something, but I don't want anyone telling me what to do.”

**Find common ground:** “I agree religion can't save anyone. Jesus was hard on dead religion too.”

**Questions to ask:**
- “How do you know your spiritual beliefs are true?”
- “Where do you think your spirit goes when you die?”

**Bridge to the gospel:** “Spiritual or not, we'll all stand before God. Can I ask you a few questions about that?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Ecclesiastes 3:11", "Ephesians 2:8-9", "Hebrews 9:27", "John 14:6"],
    related: ["skills/columbo", "paths/way-of-the-master"],
  },

  {
    id: "believe-in-god",
    category: "The Gospel & Salvation",
    title: "You don't need a relationship with Jesus",
    topic: "The Necessity of Christ",
    lead: "Many people believe in God but see no need for a personal relationship with Jesus. Christianity teaches that reconciliation with God comes only through Christ, one of its most distinctive claims.",
    alsoAsked: ["I believe in God. Isn't that enough?", "Why do I need Jesus?", "I have my own relationship with God"],
    inBrief: "Believing God exists isn't enough. Sinners are reconciled to God only through Jesus, the only one who paid for sin.",
    tip: "find out what they think makes someone right with God.",
    otherViews: [
      { name: "Judaism", text: "Repentance, prayer, and good deeds bring forgiveness, with no need for a mediator such as Jesus." },
      { name: "Islam", text: "God forgives whom He wills; Jesus was a great prophet, not a savior who died for sin." },
      { name: "Deism", text: "God exists and created the world but does not seek a personal relationship with people." },
      { name: "Christianity", text: "Jesus is the one mediator; through Him sinners are forgiven and come to know God." },
    ],
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "You can't be right with God while rejecting the One He sent to save you.",
    askBack: `If you stood before God today, what would you say to Him about your sin?`,
    short: `Believing God exists is a good start, but the Bible says even demons believe that, and they tremble.

The problem isn't whether God exists. It's that we've broken His Law and we're guilty before Him. A relationship with God isn't just a feeling. It means being forgiven and made right with Him, and Jesus is the only one who paid for sin. That's why He said no one comes to the Father except through Him.`,
    deep: `**The real problem:** The question isn't whether God exists. All have sinned ([[Romans 3:23]]) and broken His Law, and are guilty before Him ([[Romans 3:20]]).

**What “relationship” means:** It isn't religious emotion. It's being reconciled to God: forgiven, at peace with Him, and knowing Him ([[2 Corinthians 5:18-19]]). Jesus defined eternal life that way: “that they may know You, the only true God, and Jesus Christ whom You have sent” ([[John 17:3]]).

**Knowing about God isn't enough:** Even demons believe God exists, and tremble ([[James 2:19]]). On Judgment Day many religious people will hear Jesus say, “I never knew you” ([[Matthew 7:22-23]]). Being known by Him is what matters.

**No Father without the Son:** “He who does not honor the Son does not honor the Father who sent Him” ([[John 5:23]]). “Whoever denies the Son does not have the Father” ([[1 John 2:23]]).

**One way:** There is one God and one mediator, Jesus ([[1 Timothy 2:5]]). He is the only way ([[John 14:6]], [[Acts 4:12]]), because He is the only one who paid for sin.`,
    talk: `**Use the courtroom:** “You can't be on good terms with the Judge while refusing the One He sent to pay your fine.”

**If they say “I'm already close to God”:** Ask, “If you stood before God today, what would you say about your sin?”

**Go to the Law:** People who say they don't need Jesus usually think they're good enough. Ask, “Do you think you're a good person?” ({{Good Person|objections/good-person}})

**Bridge to the gospel:** Walk through the Law, then the cross. ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["John 17:3", "James 2:19", "Matthew 7:22-23", "John 5:23", "1 John 2:23", "John 14:6"],
    related: ["paths/way-of-the-master", "objections/good-person", "objections/all-religions"],
  },
  {
    id: "just-be-decent",
    category: "The Gospel & Salvation",
    title: "The Bible is just a guide to being a decent person",
    topic: "The Bible as a Moral Guide",
    lead: "A common view holds that the Bible is mainly a book of moral advice for living a decent life. How its purpose is understood decides whether its message is self-improvement or rescue.",
    alsoAsked: ["The Bible is just a book of good morals", "Jesus just taught us to be nice", "As long as I'm a good person, that's what matters"],
    inBrief: "The Bible's standard is perfection, which no one meets. Its central message is not self-improvement but rescue through Jesus.",
    otherViews: [
      { name: "Secular humanism", text: "Morality comes from human reason and empathy, and being a good person is the goal." },
      { name: "Islam", text: "God's law guides life, and good deeds weighed on Judgment Day count toward salvation." },
      { name: "Christianity", text: "God's Law shows that no one is good enough, and salvation is a gift through Christ." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "If decent were enough, Jesus wouldn't have needed to die.",
    askBack: `Who decides what counts as decent: you, or God?`,
    short: `The Bible does teach us how to live, but it doesn't present its commands as suggestions. It says “You shall not,” not “try not to.” And the standard isn't “don't be a jerk.” It's perfect: love God with all your heart, and keep His commandments in your heart, not just your actions.

By that standard, none of us is decent enough. That's the whole point. The Bible isn't a self-help book; it's a rescue.`,
    deep: `**Commands, not suggestions:** The Bible does teach how to live, but the Ten Commandments say “You shall not,” not “try not to.” Jesus said to be perfect as God is perfect ([[Matthew 5:48]]). The bar isn't “better than most people.”

**The greatest commandment:** Love God with all your heart, soul, and mind ([[Matthew 22:37-38]]). No one has done that for even a day. Breaking the greatest commandment is the greatest sin.

**Jesus raised the bar:** God's Law reaches the heart, not just actions. Lust is adultery of the heart ([[Matthew 5:27-28]]); hatred is murder ([[1 John 3:15]]).

**Everyone thinks they're decent** ([[Proverbs 20:6]]). But people judge themselves on a curve. God doesn't.

**Not a self-improvement plan:** If being good enough could save, Jesus died for nothing. Salvation is by grace, not by good deeds ([[Ephesians 2:8-9]], [[Titus 3:5]]). The Law shows that no one can make it on their own ([[Romans 3:20]]). The Bible is not a self-help book; it is a rescue.`,
    talk: `**Agree first:** “The Bible does teach us how to live. But it doesn't grade on a curve.”

**Questions to ask:**
- “Who decides what counts as decent: you, or God?”
- “Have you ever loved God with all your heart for even one day?”

**If they say “I'm a decent person”:** That's the {{Good Person|objections/good-person}} question. Walk through a few commandments.

**Go to the Law:** “Can I ask you a few questions to see if you'd pass God's standard?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Matthew 5:48", "Matthew 22:37-38", "Proverbs 20:6", "Ephesians 2:8-9", "Romans 3:20"],
    related: ["objections/good-person", "paths/way-of-the-master"],
  },
  {
    id: "death-pays",
    category: "The Gospel & Salvation",
    title: "If the wages of sin is death, don't I pay it when I die?",
    topic: "The Wages of Sin",
    lead: "Romans 6:23 says the wages of sin is death, which leads some to conclude that physical death itself pays for sin. The answer depends on what the Bible means by “death.”",
    alsoAsked: ["Doesn't everyone pay for their sins by dying?", "Isn't death punishment enough?"],
    inBrief: "Physical death isn't the payment. Judgment follows death, and the full wage is the second death, which Jesus paid for believers.",
    tip: "clarify what they mean by “death” before you answer.",
    otherViews: [
      { name: "Atheism", text: "Death is simply the end; there is no debt to pay and no judgment." },
      { name: "Hinduism and Buddhism", text: "Karma is worked out over many lifetimes rather than settled by one death." },
      { name: "Christianity", text: "Death is followed by judgment; the debt is paid either by the second death or by Christ." },
    ],
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "If dying paid for sin, why does judgment come after death?",
    askBack: "If you commit a crime and then pass out, does that pay your fine?",
    short: `The Bible uses “death” in two ways. There's physical death, when the body dies. And there's the second death: eternal separation from God after judgment.

Hebrews says we die once, and **after that** comes judgment. So dying isn't the payment. It's when the bill comes due. That's why Romans 6:23 doesn't stop at death: “the free gift of God is eternal life in Christ Jesus.” Jesus paid the wages so we don't have to.`,
    deep: `**Two deaths:**
- **Physical death,** when the body dies, came into the world through sin ([[Romans 5:12]]).
- **The second death** is the lake of fire: eternal separation from God after judgment ([[Revelation 20:14]], [[Revelation 21:8]]). This is the full wage.

**Judgment comes after death:** “It is appointed for men to die once and after this comes judgment” ([[Hebrews 9:27]]). Dying isn't the payment; it is when the bill comes due. If death settled the debt, there would be nothing left to judge.

**Jesus drew the line:** Don't fear those who can only kill the body; fear Him who can destroy both soul and body in hell ([[Matthew 10:28]]). Physical death isn't the worst thing.

**Who can pay?** A crime against an infinite, holy God isn't paid off by one finite life. Only someone without sin could pay it for others: “the just for the unjust” ([[1 Peter 3:18]], [[2 Corinthians 5:21]]).

**The rest of the verse:** Romans 6:23 doesn't stop at death: “the free gift of God is eternal life in Christ Jesus our Lord” ([[Romans 6:23]]). Jesus paid the wages.

**Further reading:** Greg Koukl, *Tactics*: clarify the key word (“death”) before answering.`,
    talk: `**Clarify the word:** “When the Bible says ‘death,’ which death do you think it means?”

**Use the analogy:** “If you commit a crime and then pass out, does that pay your fine?”

**If they say “Death is punishment enough”:** “Then why does Hebrews say judgment comes after death?”

**Bridge to the gospel:** “The good news is you don't have to pay it. Someone already did.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Romans 6:23", "Hebrews 9:27", "Revelation 20:14", "Matthew 10:28", "1 Peter 3:18"],
    related: ["objections/hell-unfair", "paths/way-of-the-master"],
  },


  // --- God & Suffering ---
  {
    id: "suffering",
    category: "God & Suffering",
    title: "Why does God allow suffering?",
    topic: "The Problem of Suffering",
    lead: "The problem of suffering asks how a good and all-powerful God could allow pain and evil. It's one of the most common reasons people give for doubting God, and one of the most personal.",
    alsoAsked: ["Where was God?", "Why do bad things happen to good people?"],
    inBrief: "The world is broken by sin. God brings good out of evil, entered suffering Himself at the cross, and will end it.",
    tip: "find out if it's personal. Ask before you explain.",
    otherViews: [
      { name: "Atheism", text: "No God, so no ultimate reason for suffering, and no real evil to object to." },
      { name: "Buddhism and Hinduism", text: "Suffering comes from desire or karma; the goal is escape from the cycle." },
      { name: "Christianity", text: "Suffering is real and wrong, God shares in it through Christ, and He will end it." },
    ],
    sources: ["C.S. Lewis", "Greg Koukl", "Ray Comfort"],
    oneLiner: "It's a hard question. But without God, there's no real evil and no hope it gets fixed.",
    askBack: `Is this a question you're asking because of something you've been through?`,
    short: `That's one of the hardest questions there is. The Bible's answer is that the world is broken because of sin, ours included. Suffering is a sign that something has gone wrong.

But God hasn't stayed distant. He came and suffered Himself on the cross. And He promises a day when He will wipe away every tear. Without God, suffering just is. With Him, it has an end. And Jesus said tragedies are a reminder to be ready to meet God.`,
    deep: `**The question:** If God is good, He would want to stop suffering. If He is all-powerful, He could. Yet suffering exists. Philosophers call this the problem of evil. For many people it isn't abstract: it comes from grief, illness, or tragedy.

**Why there is suffering:**
- Sin brought death into the world ([[Romans 5:12]]). Suffering is a sign that something has gone wrong.
- God can bring good out of evil ([[Genesis 50:20]], [[Romans 8:28]]).
- For God's people, suffering is temporary compared with the glory to come ([[Romans 8:18]]).

**God entered suffering:** At the cross, God Himself suffered injustice to save sinners ([[Romans 5:8]]).

**Suffering will end:** God will wipe away every tear, and there will be no more death or pain ([[Revelation 21:4]]).

**The moral argument** (Lewis, Koukl): Calling something truly evil requires a real standard of good. Without God, suffering is simply nature. The objection assumes a moral standard that points back to God. ({{The Moral Law|evidence/moral-law}})

**Jesus on tragedy:** When a tower fell and killed 18 people, Jesus said they were no worse than anyone else, and that all must repent ([[Luke 13:4-5]]). Tragedy is a reminder that life is short.

**Further reading:** C.S. Lewis, *The Problem of Pain*. Lee Strobel, *The Case for Faith*.`,
    talk: `**If they're grieving:** Don't argue. Listen, say you're sorry, and offer to pray if they're open. Arguments can wait for another day.

**If they say “God should have stopped it”:** Ask, “Would you want Him to remove every rapist right now?” Then, “How about every liar?” If God judged all evil today, none of us would be left. His patience is mercy ([[2 Peter 3:9]]).

**If they say “Then God is cruel”:** Ask where their standard of good comes from. Calling God cruel assumes a real moral law.

**Bridge to the gospel:** Jesus said tragedies are a reminder to be ready ([[Luke 13:4-5]]). “Life is short. If you died today, would you be ready to face God?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Romans 5:12", "Genesis 50:20", "Romans 8:18", "Revelation 21:4", "Luke 13:4-5"],
    related: ["evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "who-made-god",
    category: "God & Suffering",
    title: "Who made God?",
    topic: "The Uncaused God",
    lead: "The question “Who made God?” asks whether God, like the universe, needs a cause. It usually comes up in response to the argument that the universe needs a Creator.",
    alsoAsked: ["Where did God come from?", "If everything needs a cause, what caused God?"],
    inBrief: "Only things that begin to exist need a cause. God never began; He is eternal, so He needs no maker.",
    tip: "answer briefly. It's often a side question.",
    otherViews: [
      { name: "Naturalism", text: "The universe, or something physical behind it, is the eternal brute fact that needs no explanation." },
      { name: "Hinduism", text: "Brahman is eternal, and the universe passes through endless cycles without a single beginning." },
      { name: "Christianity", text: "God alone is eternal and uncreated; everything else had a beginning and was made by Him." },
    ],
    sources: ["Cliff Knechtle", "Ray Comfort"],
    oneLiner: `Nobody. Everything that *begins* needs a cause, but God never began. He's eternal.`,
    askBack: `If something never began to exist, would it need a cause?`,
    short: `Good question. The rule is that everything that *begins to exist* needs a cause. The universe had a beginning, so it needs a cause.

God, by definition, didn't begin. He's eternal, outside of time. Something had to be eternal, or nothing would exist at all. The only question is whether that's matter or God. And if it's God, the next question is: are you ready to meet Him?`,
    deep: `**The key word is “begin”:** The principle is not that everything needs a cause, but that whatever *begins to exist* needs a cause. The universe had a beginning ([[Genesis 1:1]]), so it needs a cause. God has no beginning; He is “from everlasting to everlasting” ([[Psalm 90:2]]). Asking who made an unmade being misunderstands what is meant by God.

**Something must be eternal:** If there was ever truly nothing, there would still be nothing. So either the universe is eternal, or something outside it is. The evidence points to the universe having a beginning, which leaves an eternal cause beyond it ({{The Universe Had a Beginning|evidence/cosmological}}).

**Matter or God:** Every worldview holds that something is eternal. The real question is whether that is impersonal matter or a personal God.

**Building and builder:** A building proves a builder ([[Hebrews 3:4]]); creation proves a Creator ([[Romans 1:20]]). Ray Comfort often uses this illustration.

**Christ before all things:** All things were created through Him ([[Colossians 1:16]]), and He is before all things ([[Colossians 1:17]]).

**Further reading:** Lee Strobel, *The Case for a Creator*.`,
    talk: `**How to say it:** “Things that begin need a cause. God never began. He's eternal.”

**Questions to ask:**
- “If something never began to exist, would it need a cause?”
- “Something had to be eternal, or nothing would exist. Is it matter, or God?”

**Then move on:** This is often a side question. Answer in a sentence or two, then get back to what matters.

**Bridge to the gospel:** “If God does exist, would you want to know what He thinks of you?” Then: “Are you ready to meet Him?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Genesis 1:1", "Psalm 90:2", "Hebrews 3:4", "Colossians 1:17"],
    related: ["objections/no-god"],
  },

  {
    id: "no-god",
    category: "God & Suffering",
    title: "There is no God",
    topic: "The Existence of God",
    lead: "Atheism is the belief that no God exists. The claim raises the question of where the universe, its order, and the moral sense found in every person came from.",
    alsoAsked: ["I'm an atheist", "There's no evidence for God", "Prove God exists"],
    inBrief: "Creation points to a Creator, conscience to a Lawgiver, and the resurrection shows God has acted in history.",
    tip: "find out if it's a conclusion or a reaction to something.",
    sources: ["Ray Comfort", "Lee Strobel"],
    oneLiner: `A painting proves there's a painter. Creation proves there's a Creator.`,
    askBack: `Do you know everything? Could God exist in the part you don't know?`,
    short: `When you see a building, you know there was a builder. You don't need to meet him. Creation, with all its order and design, points to a Creator the same way.

The Bible says people actually know God exists but push that knowledge down. Your conscience also tells you right from wrong, which is God's Law written on your heart.`,
    deep: `**Creation and Creator:** A building proves a builder; no one needs to meet the builder to know he existed ([[Hebrews 3:4]]). In the same way, the order and design of creation point to a Creator. The heavens declare the glory of God ([[Psalm 19:1]]), and His invisible attributes are clearly seen in what has been made, so that people are without excuse ([[Romans 1:20]]).

**The limits of knowledge:** A flat claim that God does not exist requires knowing He exists nowhere, which would require knowing everything. Since no one has all knowledge, God could exist in what a person does not know. Strictly, that position is agnosticism rather than atheism (Ray Comfort's argument).

**Conscience:** God's Law is written on the human heart, and conscience bears witness to it ([[Romans 2:15]]). The sense of right and wrong points to a Lawgiver.

**Why people reject God:** Scripture teaches that people know God exists but suppress the truth in unrighteousness ([[Romans 1:18]]). The rejection is often moral rather than intellectual. “The fool has said in his heart, ‘There is no God’” ([[Psalm 14:1]]).

**Lines of evidence:**
- Fine-tuning of the universe ({{Fine-Tuning|evidence/fine-tuning}})
- The universe had a beginning ([[Genesis 1:1]], {{The Universe Had a Beginning|evidence/cosmological}})
- {{The Moral Law|evidence/moral-law}}
- {{The Resurrection|evidence/resurrection}}

**Further reading:** Ray Comfort, *God Doesn't Believe in Atheists*. Lee Strobel, *The Case for a Creator*.`,
    talk: `**How to say it:** “When you see a building, you know there was a builder. Creation points to a Creator.”

**Questions to ask:**
- “Do you know everything? Even 1% of all there is to know?”
- “Could God exist in the 99% you don't know?”

**If they admit they can't be sure:** Then they're agnostic, not atheist. Don't gloat; just move on.

**Go to the conscience:** “Do you have a conscience? That's God's Law written on your heart.” Then go through a few commandments ([[Romans 2:15]]).

**If they want evidence:** Give one piece at a time: the beginning of the universe, fine-tuning, the moral law, the resurrection. See {{Atheists|people/atheist}}.

**Bridge to the gospel:** {{Way of the Master|paths/way-of-the-master/2}}. The issue is usually sin, not evidence.`,
    verses: ["Hebrews 3:4", "Psalm 19:1", "Romans 1:20", "Romans 1:18", "Psalm 14:1"],
    related: ["worldviews/atheist", "evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "morality-relative",
    category: "God & Suffering",
    title: "Morality is relative",
    topic: "Moral Relativism",
    lead: "Moral relativism is the view that right and wrong are not objective but depend on the individual or culture. It is widely assumed today and shapes how people hear any talk of sin.",
    alsoAsked: ["Who's to say what's right or wrong?", "That's just your truth", "Right and wrong depend on your culture"],
    inBrief: "Some things are really wrong for everyone. A real moral law points to a Moral Lawgiver, and everyone has broken it.",
    tip: "ask if they mean it for everything, even the worst crimes.",
    otherViews: [
      { name: "Relativism", text: "Morality is made by people or cultures, so no moral view is truly better than another." },
      { name: "Evolutionary naturalism", text: "Moral feelings evolved because they helped survival; they feel binding but have no deeper authority." },
      { name: "Christianity", text: "Moral law is real because it reflects God's character, and it is written on every conscience." },
    ],
    sources: ["Greg Koukl", "C.S. Lewis"],
    oneLiner: `Is that true for everyone? Because if it is, you've just made an absolute moral claim.`,
    askBack: `Was the Holocaust wrong, or just wrong for some people?`,
    short: `Most people don't really live that way. If someone stole your car, you wouldn't say “well, that's just their truth.” You'd say it was wrong.

We all know some things are really wrong. That's because there's a real moral law, and a moral law points to a Moral Lawgiver: God.`,
    deep: `**Self-defeating:** The statements “There's no absolute truth” and “You shouldn't push your morals on others” are themselves absolute moral claims. Relativism undercuts itself ({{Suicide|skills/suicide}}).

**Clear cases:** Torturing children for fun, racism, and the Holocaust are judged wrong by almost everyone, not as mere preferences. If morality were relative, such acts could only be called disliked, not wrong.

**How people live:** Few people live consistently as relativists. When wronged, for example when a car is stolen, no one calls it “their truth”; they call it wrong.

**Lewis's argument:** In every quarrel people appeal to a standard (“That's not fair!”) that they expect the other person to know. That standard is not invented by either side. A real moral law points to a Moral Lawgiver: God ({{The Moral Law|evidence/moral-law}}).

**The Bible's picture:** Everyone doing what is right in his own eyes is what life without God looks like ([[Judges 21:25]]). Woe to those who call evil good and good evil ([[Isaiah 5:20]]).

**Conscience and the Law:** The conscience already agrees with God's commandments ([[Romans 2:15]]). This is why the moral law leads naturally to the gospel ({{Way of the Master|paths/way-of-the-master}}).

**Further reading:** Francis Beckwith and Greg Koukl, *Relativism: Feet Firmly Planted in Mid-Air*.`,
    talk: `**How to say it:** “Is that true for everyone? Then you've made an absolute moral claim.”

**Test it with a clear case:**
- “Was the Holocaust wrong, or just wrong for some people?”
- “Is torturing a child for fun wrong?”
- “If someone stole your car, would that just be their truth?”

**If they say “You shouldn't impose your morals”:** “Is that a moral rule you're imposing on me?” ({{Suicide|skills/suicide}})

**Bridge to the gospel:** “Your conscience already agrees with God's Law. Can I ask you about a few of the commandments?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Romans 2:15", "Isaiah 5:20", "Judges 21:25"],
    related: ["skills/suicide", "evidence/moral-law", "objections/dont-judge"],
  },

  {
    id: "god-hidden",
    category: "God & Suffering",
    title: "If God is real, why doesn't He show Himself?",
    topic: "The Hiddenness of God",
    lead: "The hiddenness of God is the question of why, if God exists, He does not make Himself more plainly known. For some it is a reason for unbelief; for others, a sincere puzzle.",
    alsoAsked: ["Why doesn't God just appear in the sky?", "If God wanted me to believe, He'd give me a sign"],
    inBrief: "God has shown Himself in creation, conscience, and above all in Jesus, who rose from the dead. Those who seek Him find Him.",
    tip: "ask what kind of evidence would actually convince them.",
    otherViews: [
      { name: "Atheism", text: "A loving God would make Himself known to everyone open to Him, so His hiddenness counts against Him." },
      { name: "Deism", text: "God made the world and then stepped back, so He does not reveal Himself." },
      { name: "Christianity", text: "God has revealed Himself in creation, conscience, and Christ, and is found by those who seek Him." },
    ],
    sources: ["Cliff Knechtle", "Greg Koukl"],
    oneLiner: `He did. God came as a man, Jesus, and proved it by rising from the dead.`,
    askBack: `If God showed Himself to you, what would you do differently?`,
    short: `God has shown Himself in creation, in our conscience, and most clearly in Jesus. Jesus said, “He who has seen Me has seen the Father.” Then He rose from the dead in front of hundreds of witnesses.

Many people saw Jesus' miracles and still rejected Him. The issue usually isn't a lack of evidence. It's whether we want God to be in charge.`,
    deep: `**God has shown Himself:**
- In creation ([[Psalm 19:1]], [[Romans 1:20]])
- In conscience ([[Romans 2:15]])
- In Jesus: the Son has made the Father known ([[John 1:18]]); “He who has seen Me has seen the Father” ([[John 14:9]])
- Through the resurrection, seen by many witnesses, including more than five hundred at once ([[1 Corinthians 15:6]]; {{The Resurrection|evidence/resurrection}})

**More evidence does not always persuade:** Many who saw Jesus' miracles still rejected Him. Jesus said some will not be persuaded even if someone rises from the dead ([[Luke 16:31]]). The issue is often less a lack of evidence than an unwillingness to have God in charge; people loved the darkness rather than the Light ([[John 3:19]]).

**God rewards seekers:** God placed people in their times and places so that they would seek Him, though He is not far from anyone ([[Acts 17:26-27]]). He rewards those who seek Him ([[Hebrews 11:6]]), and those who search with all their heart find Him ([[Jeremiah 29:13]]).

**Further reading:** Lee Strobel, *The Case for Christ*.`,
    talk: `**How to say it:** “He did. God came as a man, Jesus, and rose from the dead.”

**Questions to ask:**
- “If God showed Himself to you, what would you do differently?”
- “What evidence would actually convince you?”

**If they say “I'd believe if I saw a miracle”:** Many saw Jesus' miracles and still rejected Him ([[Luke 16:31]]). The issue is usually the will, not the evidence.

**Offer a next step:** “Are you willing to read the Gospel of John and ask God to show you if it's true?”

**Bridge to the gospel:** “If God showed up today, would you be ready to meet Him?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["John 14:9", "John 1:18", "Luke 16:31", "Jeremiah 29:13", "Hebrews 11:6"],
    related: ["evidence/resurrection", "evidence/trilemma"],
  },

  // --- Church & Christians ---
  {
    id: "hypocrites",
    category: "Church & Christians",
    title: "Christians are hypocrites",
    topic: "Hypocrisy in the Church",
    lead: "Hypocrisy is claiming to hold standards one does not live by. The behavior of some who call themselves Christians is one of the most common reasons people give for rejecting Christianity.",
    alsoAsked: ["Church people are the worst", "Christians don't practice what they preach", "Why would I go to church with a bunch of fakes?"],
    inBrief: "Some professing Christians are hypocrites, and Jesus condemned them; but counterfeits don't disprove the real thing, and each person answers to God.",
    tip: "agree first. It's often true, and it lowers their guard.",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "You're right, some are. Jesus was hard on hypocrites too. They'll answer to God.",
    askBack: `Would you let a hypocrite keep you out of heaven?`,
    short: `I agree. Some people who call themselves Christians are hypocrites, and Jesus condemned that more strongly than anyone.

But a hypocrite doesn't make Christianity false. If someone uses a counterfeit $100 bill, you don't throw out real money. And on Judgment Day, God won't ask about other people's sins. He'll ask about yours.`,
    deep: `**Jesus on hypocrisy:** Jesus condemned religious hypocrisy more strongly than anyone, describing leaders who looked righteous outwardly but were full of hypocrisy and lawlessness inside ([[Matthew 23:28]]).

**False believers:** Not everyone who says “Lord, Lord” belongs to Christ ([[Matthew 7:21]]). Scripture expects that some who claim the name will prove false, and they will answer to God.

**Counterfeits and the real thing:** A counterfeit $100 bill does not make real money worthless. Counterfeits exist because the genuine article is valuable. A hypocrite does not make Christianity false.

**Judging the faith by its founder:** Christianity is properly judged by Christ, not by its worst followers.

**Hypocrisy is universal:** Saying one thing and doing another is common to all people, not only to churchgoers. Everyone has sinned ([[Romans 3:23]]). On Judgment Day each person gives an account for his own sins, not for other people's.`,
    talk: `**How to say it:** “You're right. Some are. Jesus was hard on them too.” Agreeing disarms people.

**Questions to ask:**
- “Would you let a hypocrite keep you out of heaven?”
- “Have you ever said one thing and done another?”

**If they say “That's why I don't go to church”:** “Judge Christianity by Jesus, not by His worst followers.” “Fakes exist because the real thing is worth copying.”

**Bridge to the gospel:** Gently turn it back. Hypocrisy is lying, and lying breaks God's Law. “God won't ask about their sins. He'll ask about yours. Have you ever lied?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Matthew 23:28", "Matthew 7:21", "Romans 3:23"],
    related: ["paths/way-of-the-master", "objections/hurt-by-church"],
  },
  {
    id: "hate-gay",
    category: "Church & Christians",
    title: "Christians hate gay people",
    topic: "Christianity and Homosexuality",
    lead: "Many people see the Christian teaching that homosexual behavior is sin as hateful toward gay people. The Bible places homosexual sin alongside many other sins and offers every sinner the same forgiveness.",
    alsoAsked: ["Christians are homophobic", "Why do Christians care who people love?", "Isn't the church anti-gay?"],
    inBrief: "Disagreeing isn't hating. The Bible calls every person a sinner, homosexual sin among many, and offers all the same forgiveness in Christ.",
    tip: "find out if they've been hurt. Listen before you explain.",
    otherViews: [
      { name: "Secular view", text: "Sexual orientation is part of identity, and calling homosexual behavior sin is seen as rejecting the person." },
      { name: "Affirming churches", text: "The biblical passages are read as condemning exploitation or pagan practices rather than committed same-sex relationships." },
      { name: "Historic Christianity", text: "God designed sex for marriage between a man and a woman; homosexual behavior is sin, and the gospel offers the same forgiveness to all." },
    ],
    sources: ["Ray Comfort", "Greg Koukl"],
    oneLiner: "Disagreeing isn't hating. The Bible says we're all sinners, me included.",
    askBack: "What makes you say that? Has someone treated you badly?",
    short: `Some Christians have been cruel, and that's wrong. But disagreeing with someone isn't hating them.

The Bible lists homosexual sin right next to lying, stealing, and greed. It puts all of us in the same boat. Then it says, “Such were some of you; but you were washed.” The gospel is for everyone, and that includes me.`,
    deep: `**Disagreement and hatred:** Disagreeing with a person's beliefs or conduct is not the same as hating the person. Some Christians have been cruel to gay people, and that cruelty is wrong.

**God's design:** Scripture presents sex as designed for marriage between one man and one woman ([[Genesis 2:24]], [[Matthew 19:4-6]]), and describes homosexual behavior as sin ([[Romans 1:26-27]]).

**Same list, same need:** [[1 Corinthians 6:9-10]] names homosexual sin alongside theft, greed, drunkenness, and other sins most people have committed. No one is singled out. Then [[1 Corinthians 6:11]]: “Such were some of you; but you were washed.” God forgave and changed people like that, so no one is beyond hope.

**All have sinned:** Everyone has sinned ([[Romans 3:23]]), Christians included. Any one sin makes a person guilty before God ([[James 2:10]]).

**Love tells the truth:** If a bridge is out, the loving thing is to warn people. God showed His love while people were still sinners ([[Romans 5:8]]).

**My view:** {{Homosexuality|convictions/homosexuality}} and {{Equality of Sin|convictions/equality-of-sin}}.`,
    talk: `**If they've been hurt by Christians:** Listen first. Say you're sorry. Don't defend bad behavior.

**How to say it:** “Disagreeing isn't hating.” “I've lied and lusted. I needed forgiveness too.” Always include yourself.

**If they say “You think gay people are going to hell”:** “The Bible says every sinner is in trouble, including me. Lying and lust are on the same list.”

**If they say “Love is love”:** “Love tells the truth. If a bridge were out, I'd warn you.”

**Stay on the gospel:** Don't let it become a debate about one sin. Everyone is guilty under the same Law.

**Bridge to the gospel:** “Can I ask you a few questions about the Ten Commandments? I failed them too.” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["Romans 3:23", "1 Corinthians 6:9-10", "1 Corinthians 6:11", "Romans 5:8"],
    related: ["convictions/homosexuality", "objections/dont-judge"],
  },
  {
    id: "blind-faith",
    category: "Church & Christians",
    title: "Christianity teaches you to believe blindly and never question",
    topic: "Faith and Reason",
    lead: "Faith and reason concerns whether Christian belief rests on evidence or on belief without evidence. Many assume faith means believing something without good reasons, or being forbidden to ask questions.",
    alsoAsked: ["Faith is believing without evidence", "Christians aren't allowed to ask questions", "You just believe what you're told"],
    inBrief: "Biblical faith is trust based on good reasons; Scripture invites testing and stakes Christianity on a checkable event, the resurrection.",
    tip: "ask what they mean by faith before you answer.",
    otherViews: [
      { name: "Popular skepticism", text: "Faith is belief without evidence, and so it stands opposed to reason and science." },
      { name: "Fideism", text: "Some religious thinkers hold that faith does not need or rest on rational argument." },
      { name: "Christianity", text: "Faith is active trust in what there is good reason to believe, and loving God includes the mind." },
    ],
    sources: ["Greg Koukl", "Lee Strobel", "C.S. Lewis"],
    oneLiner: "The Bible says “examine everything carefully.” Faith is trust based on good reasons.",
    askBack: "What do you mean by faith?",
    short: `Some Christians have discouraged questions, and that's a mistake. But the Bible itself invites testing. Paul praised people who checked his teaching against Scripture. Luke investigated carefully before he wrote. Jesus showed Himself alive with “many convincing proofs.”

Christianity even stakes everything on a fact you can check: if Jesus didn't rise, Paul says our faith is worthless. That's not blind faith. It's trust based on evidence.`,
    deep: `**Defining faith:** Biblical faith is active trust in what there is good reason to believe is true. It is a step into the light, not a leap in the dark. Some Christians have discouraged questions, but that is not the Bible's teaching.

**The Bible invites questions:**
- “Examine everything carefully” ([[1 Thessalonians 5:21]])
- The Bereans checked Paul's teaching against Scripture and were called noble-minded ([[Acts 17:11]])
- Luke investigated everything carefully so readers could know the truth ([[Luke 1:3-4]])
- Jesus showed Himself alive with “many convincing proofs” over forty days ([[Acts 1:3]])
- John wrote down the signs so people could believe ([[John 20:30-31]])

**A testable faith:** Paul wrote that if Christ has not been raised, faith is worthless ([[1 Corinthians 15:17]]). Few religions stake everything on one checkable historical event. See {{The Resurrection|evidence/resurrection}}.

**Loving God with the mind:** Jesus commanded loving God with all the mind ([[Matthew 22:37-38]]). Thinking is part of worship, not a threat to it.

**Skeptics who investigated:** Lee Strobel examined the evidence for Christ as an atheist journalist and became a Christian. C.S. Lewis was an atheist who reasoned his way to faith.`,
    talk: `**Questions to ask:**
- “What do you mean by faith?” ({{Be Precise|skills/be-precise}})
- “Have you questioned your own view as hard?”

**How to say it:** “Faith is trust based on good reasons.” “It's a step into the light, not a leap in the dark.”

**If they were told not to question:** Agree that was wrong. The Bible says to examine everything.

**If they say “Faith is believing without evidence”:** “Not in the Bible. Paul said if Jesus didn't rise, our faith is worthless. That's checkable.”

**Bridge to the gospel:** “Can I ask you a few questions about the Ten Commandments?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["1 Thessalonians 5:21", "Acts 17:11", "Luke 1:3-4", "Acts 1:3", "1 Corinthians 15:17"],
    related: ["evidence/resurrection", "skills/be-precise"],
  },

  {
    id: "hurt-by-church",
    category: "Church & Christians",
    title: "I was hurt by the church",
    topic: "Church Hurt",
    lead: "Church hurt is harm done to a person by a church, its leaders, or its members, ranging from unkindness to abuse. It often shapes how a person sees God, not only how they see Christians.",
    alsoAsked: ["Church people hurt me", "I left the church because of how I was treated", "Christians burned me"],
    inBrief: "Churches are made of sinners who sometimes do real harm; Jesus Himself is gentle with the hurting and invites them to come to Him.",
    tip: "listen first. This isn't an argument to win.",
    sources: [],
    oneLiner: `I'm really sorry that happened. Can I ask what happened?`,
    askBack: `Has what happened changed how you see God, or just how you see Christians?`,
    short: `I'm sorry. That's real, and it shouldn't have happened. Churches are full of sinners, and sometimes they hurt people badly.

But Jesus isn't the one who hurt you. He invites the hurting and the worn out to come to Him. Don't let what people did keep you from Him.`,
    deep: `**Real harm:** Churches are full of sinners, and sometimes they hurt people badly. Abuse and mistreatment are sin, and God hates them too.

**Jesus and His followers:** The harm done by Christians is distinct from the character of Christ. Jesus invites the weary and burdened to come to Him for rest ([[Matthew 11:28]]). The Lord is near to the brokenhearted ([[Psalm 34:18]]). Jesus promised never to cast out anyone who comes to Him ([[John 6:37]]).

**Everyone needs forgiveness:** All have sinned ([[Romans 3:23]]), both those who caused the hurt and those who were hurt. Everyone needs the same forgiveness in Christ.`,
    talk: `**How to say it:** “I'm really sorry that happened.” Let them talk. Don't defend the church that hurt them.

**Questions to ask:**
- “Can I ask what happened?”
- “Has it changed how you see God, or just how you see Christians?”

**If they were abused or mistreated:** Say clearly that it was wrong. God hates it too.

**How to separate Jesus from His followers:** “Jesus isn't the one who hurt you. Don't let what people did keep you from Him.”

**Bridge to the gospel:** Only when appropriate. “We've all sinned, them and us. We all need the same forgiveness.” ({{Way of the Master|paths/way-of-the-master/2}})

**Offer a next step:** A healthy church, or reading the Gospel of John on their own.`,
    verses: ["Matthew 11:28", "Psalm 34:18", "John 6:37"],
    related: ["objections/hypocrites"],
  },

  {
    id: "dont-judge",
    category: "Church & Christians",
    title: "Jesus said don't judge",
    topic: "Judging in the Bible",
    lead: "Matthew 7:1, “Do not judge,” is one of the most quoted verses in the Bible, often used to say no one may call another's actions wrong. The wider passage and the rest of Scripture distinguish hypocritical judging from right judgment.",
    alsoAsked: ["Who are you to judge?", "Only God can judge me", "Judge not, lest ye be judged"],
    inBrief: "Jesus forbade hypocritical judging, not moral judgment itself; He commanded righteous judgment and told His followers to help others with sin.",
    tip: "stay humble. Include yourself before you say anything about them.",
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "He meant hypocritical judging. In the same passage, He said to help others with sin.",
    askBack: `Isn't “you shouldn't judge” a judgment too?`,
    short: `In Matthew 7, Jesus said not to judge hypocritically: take the log out of your own eye *first*, then help your brother with the speck. He also said to “judge with righteous judgment.”

I'm not saying I'm better than you. I've broken God's Law too. I'm telling you what God says so you can be forgiven, the same way I was.`,
    deep: `**The whole passage:** [[Matthew 7:1]] (“Do not judge”) is followed by [[Matthew 7:5]]: first take the log out of one's own eye, then help a brother with the speck. Jesus forbade hypocritical judging, not helping others with sin.

**Righteous judgment:** Jesus also commanded, “judge with righteous judgment” ([[John 7:24]]).

**Self-defeating:** The statement “You shouldn't judge” is itself a judgment. See {{Suicide|skills/suicide}}.

**God's Law as judge:** In biblical evangelism the Christian does not stand above the hearer. God's Law judges both, and both need the same forgiveness.

**Truth and love:** Telling the truth is not hate. If a bridge is out, warning drivers is love.`,
    talk: `**How to say it:** “I'm not saying I'm better than you. I've broken God's Law too.” Ray Comfort models this: “I'm a liar and a thief too. God's Law judges both of us.”

**Questions to ask:**
- “Isn't ‘you shouldn't judge’ a judgment too?”
- “Have you read the rest of that passage?”

**If they quote Matthew 7:1:** “Read on to verse 5. He said take the log out first, then help with the speck.”

**Bridge to the gospel:** “I'm telling you what God says so you can be forgiven, the same way I was.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Matthew 7:1", "Matthew 7:5", "John 7:24"],
    related: ["skills/suicide", "objections/morality-relative", "paths/way-of-the-master"],
  },  {
    id: "religion-evil",
    category: "Church & Christians",
    title: "Religion is man-made and evil",
    topic: "Religion and Violence",
    lead: "Many people see religion as a human invention responsible for wars and oppression. The question touches on the history of religion, the source of human evil, and the difference between religion and the gospel.",
    alsoAsked: ["Religion causes all the wars", "Religion is just a way to control people", "Look at the Crusades"],
    inBrief: "People have done evil in religion's name, but the root is the human heart, and the gospel is God's rescue, not human effort.",
    tip: "agree that terrible things were done. Then separate Jesus from them.",
    otherViews: [
      { name: "New Atheism", text: "Religion is a human invention that breeds division and violence, and the world would be better without it." },
      { name: "Marxism", text: "Religion is a tool the powerful use to keep people content with oppression." },
      { name: "Christianity", text: "Evil comes from the human heart; man-made religion cannot fix it, but God can give a new heart through Christ." },
    ],
    sources: ["Ray Comfort", "C.S. Lewis", "Cliff Knechtle"],
    oneLiner: "Jesus was the harshest critic of man-made religion. The gospel is God reaching down.",
    askBack: `Is your problem with Jesus, or with people who claimed to follow Him?`,
    short: `I agree that people have done terrible things in the name of religion, and Jesus condemned religious hypocrites more strongly than anyone.

But every man-made religion says “do this to earn God's favor.” The gospel says Jesus did it for us, because we can't. And when people do evil in Jesus' name, they're disobeying Him, not following Him. The question isn't what religious people have done. It's what you'll do with Jesus.`,
    deep: `**Jesus against man-made religion:** Jesus was the harshest critic of empty religion. He called the religious leaders “whitewashed tombs” ([[Matthew 23:27-28]]) and condemned “teaching as doctrines the precepts of men” ([[Mark 7:6-7]]).

**Religion and the gospel:** Man-made religion says “do this to earn God's favor.” The gospel says no one can, so God provided a Savior who did it for us ([[Ephesians 2:8-9]]). The gospel is God reaching down, not people reaching up.

**Counterfeits and the real thing:** People who did evil in Jesus' name disobeyed His commands rather than following them. A counterfeit $20 bill does not make real money worthless.

**The source of evil:** The 20th century's officially atheist regimes, such as Stalin's and Mao's, killed millions. The problem is the human heart ([[Jeremiah 17:9]]), in every person. The need is a new heart, not a better religion.

**A standard for evil:** Calling anything “evil” requires a real moral standard. Without God, “evil” is only an opinion. See {{The Moral Argument|evidence/moral-law}}.

**What real faith does:** Pure religion cares for orphans and widows ([[James 1:27]]). Christians led the way in founding hospitals, caring for the poor, and ending the slave trade.`,
    talk: `**How to say it:** “I agree. Terrible things were done in religion's name.” “Jesus was the harshest critic of man-made religion.”

**Questions to ask:**
- “Is your problem with Jesus, or with people who claimed to follow Him?”
- “Where does your standard of evil come from?”

**If they say “Religion causes wars”:** “Atheist regimes like Stalin's and Mao's killed millions too. The problem is the human heart.”

**How to frame it:** “Religion says ‘do.’ The gospel says ‘done.’” The question isn't what religious people have done. It's what they'll do with Jesus.

**Bridge to the gospel:** “Since we both agree people do evil, can I ask about you? Have you ever lied?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["Matthew 23:27-28", "Mark 7:6-7", "Jeremiah 17:9", "James 1:27", "Ephesians 2:8-9"],
    related: ["objections/hypocrites", "objections/hurt-by-church", "evidence/moral-law", "paths/way-of-the-master"],
  },


  // --- THE BIBLE ---
  {
    id: "bible-changed",
    category: "The Bible",
    title: "The Bible has been changed",
    topic: "The Transmission of the Bible",
    lead: "The transmission of the Bible is the history of how its text was copied and passed down from the original writings to today. It bears directly on whether modern Bibles reflect what the authors first wrote.",
    alsoAsked: ["Isn't the Bible just a game of telephone?", "Didn't the church change the Bible over the centuries?", "Didn't they take books out at Nicaea?"],
    inBrief: "Thousands of early, widespread manuscripts let scholars reconstruct the original text with great confidence, and no core teaching depends on a disputed passage.",
    tip: "ask who changed it and when. Most can't name an example.",
    otherViews: [
      { name: "Islam", text: "The Torah and Gospel were revealed by God but later corrupted, and the Quran is the final, preserved revelation." },
      { name: "Latter-day Saints", text: "The Bible is God's Word as far as it is translated correctly, but plain and precious parts were lost or removed." },
      { name: "Critical scholarship", text: "Some scholars stress the many variants among manuscripts, while still using those manuscripts to reconstruct the earliest text." },
      { name: "Christianity", text: "God has preserved His Word, and the wealth of manuscripts lets the original wording be recovered with confidence." },
    ],
    sources: ["Lee Strobel", "Greg Koukl", "Wes Huff"],
    oneLiner: "It's not a game of telephone. Thousands of ancient copies show what was first written.",
    askBack: "Who do you think changed it, and when?",
    short: `We don't translate a translation of a translation. Translators work from the original Hebrew and Greek, and we have more ancient copies of the New Testament than of any other ancient book: over 5,000 in Greek alone, spread across the ancient world.

Nobody could have gathered them all up and changed them. Comparing them, scholars can see where copies differ, and the differences are mostly spelling and word order. None changes a core teaching. And “You shall not lie” reads the same in every copy. Have you ever lied?`,
    deep: `**Translated from the originals:** Modern Bibles are not a translation of a translation of a translation. Translators work from the original Hebrew and Greek.

**Not a telephone game:** In the telephone game there is one line of messages, and only the last person is heard. The Bible was copied in many places at once, in many independent lines. Comparing these lines lets scholars reconstruct the original with great confidence.

**No one was in control:** By the early 100s, copies of the New Testament were spread from Rome to Egypt to Syria, in several languages. No person, church, or emperor could have collected them all and edited them the same way.

**The numbers (approximate):**
- Over 5,000 Greek New Testament manuscripts, plus thousands more in early translations (Latin, Syriac, Coptic)
- More ancient copies than of any other ancient book
- Complete New Testaments survive from the 300s (Codex Sinaiticus, Codex Vaticanus)
- Early church leaders quoted the New Testament so often that most of it could be pieced together from their quotes alone
- Most other ancient works survive in a handful of copies, often from many centuries after they were written

**The Old Testament:** The Dead Sea Scrolls (found in 1947) include a copy of Isaiah about 1,000 years older than the copies known before, and it reads almost exactly the same.

**The differences between copies:** Most are spelling, word order, or obvious copying slips. The few that matter are listed in the footnotes of most Bibles. No core teaching depends on a disputed passage, and a command such as “You shall not lie” reads the same in every copy.

**The Council of Nicaea and the “lost gospels”:** Nicaea (AD 325) dealt with who Jesus is, not which books belong in the Bible. The “lost gospels” (such as the Gospel of Thomas) were written a century or more after the apostles and were never accepted by the early church. See {{How We Got the Bible|evidence/canon}}.

**Embarrassing details left in:** The text still contains Peter denying Jesus, the disciples doubting and running away, and women as the first witnesses of the resurrection. Editors reshaping a story to look good would be expected to remove such details.

**Careful history:** Luke wrote so that his readers could know the exact truth about what they had been taught ([[Luke 1:3-4]]).

**God's preservation:** Scripture teaches that God keeps His Word ([[Isaiah 40:8]], [[Psalm 12:6-7]], [[Matthew 24:35]]). See {{Infallibility of Scripture|convictions/infallibility}}.

**Further reading:** Wes Huff's talks and videos on the manuscripts, including the Dead Sea Isaiah Scroll. Lee Strobel, *The Case for Christ*, chapter on the documentary evidence (interview with Bruce Metzger). See also {{Has the Bible Been Changed?|evidence/bible-reliability}}.`,
    talk: `**Questions to ask:**
- “Who changed it?”
- “When?”
- “What did it say before?”

Most people have heard the claim but can't name a single example ({{Columbo|skills/columbo}}).

**How to say it:** “It's not telephone. Copies spread everywhere at once.” “Nobody could gather them all up and change them.”

**If they say “What about all the differences?”:** “Mostly spelling and word order. The ones that matter are in the footnotes.”

**If they say “Nicaea changed it” or “They removed books”:** “Nicaea was about who Jesus is, not which books.” “The ‘lost gospels’ came a century after the apostles.”

**If they say “They edited it to look good”:** “Then why leave in Peter denying Jesus?”

**If they're Muslim:** The Quran tells the people of the Gospel to judge by what God revealed in it (Surah 5:47). Ask when they think the change happened, before or after Muhammad. See {{Muslim|people/muslim}}.

**Bridge to the gospel:** The bigger question isn't whether the Bible was changed. It's whether it's right about them. “‘You shall not lie’ reads the same in every copy. Have you ever lied?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Isaiah 40:8", "Psalm 12:6-7", "Matthew 24:35", "Luke 1:3-4"],
    related: ["evidence/canon", "objections/translations", "evidence/bible-reliability", "paths/way-of-the-master"],
  },
  {
    id: "translations",
    category: "The Bible",
    title: "Translations aren't accurate",
    topic: "Bible Translation",
    lead: "Bible translation is the work of rendering the Hebrew, Aramaic, and Greek texts of Scripture into other languages. Questions about accuracy concern whether modern versions faithfully carry the original meaning.",
    alsoAsked: ["Isn't the Bible a translation of a translation?", "Why are there so many versions?", "Hasn't the meaning been lost in translation?"],
    inBrief: "Major translations work directly from the Hebrew and Greek; they differ in wording and style but agree on every core teaching.",
    tip: "find out if they've ever compared versions themselves.",
    otherViews: [
      { name: "Islam", text: "The Quran is truly the Quran only in Arabic; translations are treated as interpretations of its meaning." },
      { name: "Christianity", text: "Scripture was meant to be translated, and a faithful translation is still God's Word to its readers." },
    ],
    sources: ["Lee Strobel", "Greg Koukl", "Wes Huff"],
    oneLiner: "Every major translation goes back to the Hebrew and Greek, and they say the same thing.",
    askBack: "Have you compared a few translations yourself? Where do they disagree?",
    short: `Modern Bibles aren't a translation of a translation. Teams of scholars translate directly from the original Hebrew and Greek, checking each other's work.

Translations differ in wording, not in message. Some go word for word, some go thought for thought, but on who God is, what sin is, and what Jesus did, they all agree. “You shall not steal” means the same thing in every one of them.`,
    deep: `**From the original languages:** English Bibles are not a translation of a translation. Teams of scholars translate directly from the original Hebrew and Greek, using the oldest and best manuscripts, and check each other's work. They do not work from earlier English versions.

**Why translations differ:**
- **Word for word** (NASB, ESV, KJV): stays as close as possible to the original wording
- **Thought for thought** (NIV, NLT): puts the meaning in natural modern English
- Different words, same message. No major translation changes a core teaching.

**What they agree on:** Who God is, what sin is, and what Jesus did read the same across every major translation. “You shall not steal” means the same thing in all of them.

**Open to checking:** Free tools such as Bible Gateway allow translations to be compared side by side, and interlinear Bibles show the Hebrew or Greek under each English word. Nothing is hidden.

**Translation in Scripture:** In Nehemiah's day, God's law was read “translating to give the sense so that they understood” ([[Nehemiah 8:8]]). Jesus and the apostles often quoted the Septuagint, a Greek translation of the Old Testament, and still called it Scripture.

**God's preservation:** Scripture teaches that God keeps His Word ([[Isaiah 40:8]], [[Psalm 12:6-7]]).

**Further reading:** Wes Huff's talks and videos on the manuscripts, including the Dead Sea Isaiah Scroll. See also {{The Bible has been changed|objections/bible-changed}} and {{Has the Bible Been Changed?|evidence/bible-reliability}}.`,
    talk: `**Questions to ask:**
- “Which translations have you compared?”
- “Where do they disagree?”

**How to say it:** “It's not a translation of a translation.” “Scholars work straight from the Hebrew and Greek.” “Different words, same message.”

**If they say “Then why so many versions?”:** “Some go word for word, some thought for thought. Same message.”

**Show them:** Pull up a verse on Bible Gateway and compare a few versions side by side on your phone.

**Bridge to the gospel:** “Every translation agrees on the Ten Commandments. Can I ask how you've done with them?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["Nehemiah 8:8", "Isaiah 40:8", "Psalm 12:6-7"],
    related: ["objections/bible-changed", "evidence/bible-reliability", "paths/way-of-the-master"],
  },


  {
    id: "bible-contradictions",
    category: "The Bible",
    title: "The Bible is full of contradictions",
    topic: "Alleged Contradictions in the Bible",
    lead: "Alleged contradictions are passages in the Bible that appear to conflict with one another. Whether they are genuine affects claims about the Bible's reliability and inspiration.",
    alsoAsked: ["Doesn't the Bible contradict itself?", "The Gospels don't even agree with each other", "How many angels were at the tomb?"],
    inBrief: "Most alleged contradictions are differences in detail or perspective, which is what independent eyewitness testimony looks like, not true contradictions.",
    tip: "ask for a specific example before answering anything.",
    sources: ["Greg Koukl", "Lee Strobel"],
    oneLiner: "I'm happy to look at one. Which contradiction did you have in mind?",
    askBack: "Can you show me one you think is the strongest?",
    short: `Most people have heard this but can't name one. When they do, it's usually a difference in detail, not a true contradiction.

For example, one Gospel mentions one angel at the tomb and another mentions two. If there were two, there was certainly one. Different witnesses reporting different details is exactly what you'd expect from real, independent testimony. And even if every question were answered, we'd still have to deal with our own sin.`,
    deep: `**Definition:** A contradiction is two statements that can't both be true at the same time and in the same sense. “Different” is not the same as “contradictory.”

**An example:** One Gospel mentions one angel at the tomb and another mentions two. If there were two, there was certainly one. The accounts differ in detail but do not contradict.

**Common explanations:**
- **Different details:** One writer mentions part of what happened; another adds more
- **Different perspective or order:** Ancient writers sometimes arranged events by theme, not by time
- **Round numbers or different counting methods**
- **Copying errors in numbers** in a few Old Testament passages. These are well known and noted in study Bibles.

**Independent witnesses:** If four accounts matched word for word, critics would say they were copied. Small differences with the same core story point to genuine, independent testimony. Luke wrote after careful investigation ([[Luke 1:3-4]]), and the apostles claimed to be eyewitnesses, not tellers of clever stories ([[2 Peter 1:16]]).

**Inerrancy and the copies:** The doctrine that Scripture is without error applies to the original writings; the known slips in numbers belong to later copies. See {{Infallibility of Scripture|convictions/infallibility}}.

**Further reading:** Lee Strobel, *The Case for Christ*. J. Warner Wallace, *Cold-Case Christianity*, on eyewitness accounts. See also {{Has the Bible Been Changed?|evidence/bible-reliability}}.`,
    talk: `**Questions to ask:**
- “Which contradiction did you have in mind?”
- “Can you show me the one you think is strongest?”

**Why ask first:** Most people have heard this but can't name one. Often the conversation ends there, or turns to the real reason they don't want to believe ({{Columbo|skills/columbo}}).

**How to say it:** “Different isn't the same as contradictory.” “If there were two angels, there was certainly one.”

**If they say “The Gospels don't match”:** “If they matched word for word, you'd say they copied each other.”

**If you don't know the answer:** Say so: “Good question. Let me look into that and get back to you.” ({{stone in their shoe|skills/stone-in-shoe}}, {{When You Don't Know the Answer|skills/dont-know-answer}})

**Bridge to the gospel:** Even if every question were answered, they'd still have to deal with their own sin. Gently move to the Law ({{Way of the Master|paths/way-of-the-master/2}}).`,
    verses: ["Luke 1:3-4", "2 Peter 1:16"],
    related: ["skills/columbo", "evidence/bible-reliability", "paths/way-of-the-master"],
  },

  {
    id: "who-decided-bible",
    category: "The Bible",
    title: "Men just decided what went in the Bible",
    topic: "The Canon of Scripture",
    lead: "The canon is the list of books recognized as Scripture. How it formed raises the question of whether the Bible's contents reflect divine authority or later human choices.",
    alsoAsked: ["Didn't the Council of Nicaea pick the books?", "Why were the other gospels left out?", "Why do Catholic Bibles have more books?"],
    inBrief: "The church didn't create the canon. It recognized the apostolic books already used as Scripture, and the Old Testament Jesus Himself used.",
    tip: "ask which book they think should be in or out.",
    otherViews: [
      { name: "Judaism", text: "Scripture is the Hebrew Bible of 24 books (the same content as the Protestant Old Testament), with no New Testament." },
      { name: "Catholic and Orthodox", text: "The church recognized the canon, and it includes several Old Testament books (the Deuterocanon) not in the Hebrew Bible." },
      { name: "Protestant", text: "The canon is the Hebrew Bible Jesus used plus the 27 apostolic books, recognized rather than created by the church." },
    ],
    sources: [],
    oneLiner: "The church didn't create the Bible. It recognized the books God had already given.",
    askBack: "Who do you think decided, and when?",
    short: `The New Testament books were written by the apostles and their companions, and churches were already using them as Scripture in the first century. Peter even calls Paul's letters Scripture.

Later lists, like Athanasius in 367, just confirmed what churches across the world already used. Nicaea never voted on it. The Old Testament is the Hebrew Bible Jesus Himself used.`,
    deep: `**Recognized, not invented:** The church did not create the Bible; it recognized the books God had already given. The churches asked whether a book came from an apostle or close companion, was true to the gospel, was early, and was used everywhere. See the full story in {{How We Got the Bible|evidence/canon}}.

**The New Testament:** The books were written by the apostles and their companions, and churches were already using them as Scripture in the first century. Within the New Testament itself, Paul's letters are called Scripture ([[2 Peter 3:16]]), and Paul quotes Luke as Scripture ([[1 Timothy 5:18]]).

**Later lists:** Lists such as Athanasius's in 367 confirmed what churches across the world already used. The Council of Nicaea never voted on the books.

**The Old Testament:** It is the Hebrew Bible Jesus Himself used. God entrusted it to Israel ([[Romans 3:2]]), and Jesus affirmed all three of its parts: the Law, the Prophets, and the Psalms ([[Luke 24:44]]).

**Catholic and Protestant Bibles:** Catholics and Protestants agree on the whole New Testament. The difference is a few Old Testament books the Jews never counted as Scripture.

**Further reading:** F.F. Bruce, *The Canon of Scripture*. Michael Kruger, *The Question of Canon*. See also {{The Bible has been changed|objections/bible-changed}}.`,
    talk: `**Questions to ask:**
- “Who do you think decided, and when?”
- “Which book do you think should have been in or out, and why?”

Most people have heard the claim but can't name a book ({{Be Precise|skills/be-precise}}).

**How to say it:** “The church didn't create the Bible. It recognized it.” “Peter already called Paul's letters Scripture.”

**If they say “Nicaea voted on it”:** “Nicaea was about who Jesus is. It never voted on the books.”

**If they mean the Catholic books:** “We agree on the whole New Testament. The difference is a few Old Testament books the Jews never counted as Scripture.”

**If they mention other gospels:** “Thomas and the rest came long after the apostles. The churches never used them.”

**Bridge to the gospel:** “Every list includes the Ten Commandments. How have you done with them?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["2 Peter 3:16", "1 Timothy 5:18", "Romans 3:2", "Luke 24:44"],
    related: ["evidence/canon", "objections/bible-changed"],
  },
  {
    id: "pick-and-choose",
    category: "The Bible",
    title: "Christians pick and choose from the Old Testament",
    topic: "Old Testament Law and Christians",
    lead: "This topic concerns which Old Testament laws apply to Christians today, and why. Critics often point to food laws, clothing rules, or penalties as evidence of inconsistency.",
    alsoAsked: ["You eat shellfish, so why quote Leviticus?", "Why follow some laws and ignore others?", "Doesn't the Bible also ban tattoos and mixed fabrics?"],
    inBrief: "Ceremonial laws pointed to Jesus and were fulfilled in Him; God's moral law reflects His character and still applies to everyone.",
    tip: "ask which law they mean. It's usually shellfish or fabrics.",
    otherViews: [
      { name: "Judaism", text: "The commandments of the Torah remain binding on Jews, while non-Jews are held only to the basic Noahide laws." },
      { name: "Christianity", text: "Christ fulfilled the ceremonial law; the moral law still binds everyone, and Christians differ on how the civil laws apply." },
    ],
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "Some laws pointed to Jesus and were fulfilled in Him. God's moral law still stands.",
    askBack: "Which law did you have in mind?",
    short: `Christians aren't picking at random. The food laws, sacrifices, and temple rules were shadows pointing to Jesus. When He came, He fulfilled them. Jesus Himself declared all foods clean.

But the moral law, like don't lie, steal, or murder, reflects God's character. It never changes, and the New Testament repeats it. That's the part that shows all of us we need a Savior.`,
    deep: `**Not random:** Christians distinguish between kinds of law because Christ fulfilled each kind differently. The laws most often raised are shellfish, mixed fabrics, and tattoos.

**The three kinds:**
- **Ceremonial laws** (food laws, sacrifices, temple rules) were shadows pointing to Jesus and were fulfilled in Him ([[Colossians 2:16-17]], [[Hebrews 10:12]]). Jesus Himself declared all foods clean ([[Mark 7:19]]).
- **The moral law** (do not lie, steal, or murder) reflects God's character. It never changes, and the New Testament repeats it ([[Romans 13:8-10]]).
- **Civil laws** governed Israel as a nation. Christians differ on how they apply today; see {{God's Law & Civil Government|convictions/theonomy}}.
Full breakdown: {{The Law: What Still Applies|evidence/the-law}}.

**Fulfilled, not abolished:** Jesus said He did not come to abolish the Law but to fulfill it ([[Matthew 5:17-19]]).

**The purpose of the moral law:** It shows that everyone has broken God's standard and needs a Savior ([[Romans 3:20]]).

**Further reading:** {{The Law: What Still Applies|evidence/the-law}}. See also {{The God of the Old Testament is cruel|objections/ot-cruel}}.`,
    talk: `**Questions to ask:** “Which law did you have in mind?” Usually it's shellfish, mixed fabrics, or tattoos ({{Be Precise|skills/be-precise}}).

**How to say it:** “Some laws pointed to Jesus, and He fulfilled them.” “Jesus Himself declared all foods clean.”

**If they say “Then why keep any of it?”:** “Lying and stealing were wrong then and they're wrong now.”

**If they bring up harsh penalties:** See {{The God of the Old Testament is cruel|objections/ot-cruel}}.

**Bridge to the gospel:** “You're right that some laws were for a specific time. But the moral law, like don't lie or steal, still applies to all of us. Can I ask how you've done with those?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["Matthew 5:17-19", "Colossians 2:16-17", "Mark 7:19", "Romans 13:8-10"],
    related: ["evidence/the-law", "objections/ot-cruel"],
  },
  {
    id: "bible-men",
    category: "The Bible",
    title: "The Bible was written by men",
    topic: "The Inspiration of Scripture",
    lead: "Inspiration is the Christian teaching that God guided the human authors of the Bible so that what they wrote is His Word. It addresses how a book written by people can carry divine authority.",
    alsoAsked: ["Isn't the Bible just a human book?", "Why trust what some men wrote thousands of years ago?"],
    inBrief: "Men wrote the Bible, but God moved them to write what He intended, so it is fully human and fully God's Word.",
    tip: "agree first. Yes, men wrote it.",
    otherViews: [
      { name: "Islam", text: "The Quran was revealed word for word to Muhammad through the angel Gabriel, without a human author's input." },
      { name: "Secular view", text: "The Bible is a human anthology that reflects the beliefs and cultures of its authors." },
      { name: "Christianity", text: "God spoke through human authors in their own styles, so Scripture is both their words and His." },
    ],
    sources: ["Ray Comfort", "Greg Koukl"],
    oneLiner: "That's true, and Christians agree. The question is whether God was behind what they wrote.",
    askBack: "If God wanted to speak to people, how else would you expect Him to do it?",
    short: `Every book is written by people. That doesn't make it unreliable. The question is whether these men were telling the truth and whether God was speaking through them.

The Bible was written by about 40 authors over roughly 1,500 years, yet it tells one consistent story, with prophecies fulfilled centuries later. And it describes the human heart exactly right. Your conscience agrees with it.`,
    deep: `**Human authors:** Christians agree that men wrote the Bible: about 40 authors, in three languages, over roughly 1,500 years.

**Inspiration:** Christians believe God moved these men to write what He wanted ([[2 Peter 1:20-21]], [[2 Timothy 3:16]]). The words are fully human and fully God's. See {{Infallibility of Scripture|convictions/infallibility}}.

**Human authorship and reliability:** Every book is written by people, including science textbooks and history books. Human authorship does not make a book unreliable. The real questions are whether the authors told the truth and whether God was speaking through them.

**Evidence offered for something more:**
- One consistent story of sin and redemption across many authors and centuries
- Fulfilled prophecy, such as the suffering servant of Isaiah 53, written centuries before Jesus (see {{Prophecy|evidence/prophecy}})
- Eyewitness claims about Jesus' life, death, and resurrection
- An accurate description of the human heart

**The conscience:** Scripture teaches that God's law is written on every heart, with the conscience bearing witness ([[Romans 2:15]]). Even someone who rejects the Bible has a conscience that agrees with it (Ray Comfort).

**Further reading:** {{Is the Bible reliable?|evidence/bible-reliability}}.`,
    talk: `**How to say it:** “That's true, and Christians agree.” “The question is whether God was behind what they wrote.”

**If they say “So it's just a human book”:** “History books are written by men too. The question is whether it's true.”

**Questions to ask:**
- “What would convince you a book came from God?”
- “Have you ever read it for yourself?”

**Use the conscience:** Ray Comfort's angle: ask, “Have you ever lied?” The Bible's diagnosis of the heart is accurate whether they like the authors or not. They don't need to accept the Bible first ({{I don't believe the Bible|paths/way-of-the-master/10}}).

**Bridge to the gospel:** “Your conscience agrees with it. Can I ask you a few of the commandments?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["2 Peter 1:20-21", "2 Timothy 3:16", "Romans 2:15"],
    related: ["evidence/prophecy", "evidence/bible-reliability", "paths/way-of-the-master"],
  },

  {
    id: "ot-cruel",
    category: "The Bible",
    title: "The God of the Old Testament is cruel",
    topic: "The Morality of the Old Testament",
    lead: "This topic concerns Old Testament passages that appear to show God commanding or permitting violence, such as the conquest of Canaan and laws on servitude. Critics cite them as evidence that the God of the Bible is not good.",
    alsoAsked: ["Didn't God command genocide?", "Doesn't the Bible support slavery?", "How could a loving God order the killing of the Canaanites?"],
    inBrief: "God judged real evil after centuries of patience, regulated a fallen world without endorsing its sins, and takes no pleasure in judgment.",
    tip: "find out which passage is bothering them.",
    otherViews: [
      { name: "Atheism", text: "Morality is a human product, so Old Testament violence is judged by modern human standards." },
      { name: "Marcionism (2nd century)", text: "The Old Testament God was a lesser, harsher deity than the Father of Jesus; the early church rejected this." },
      { name: "Christianity", text: "The same God is just and merciful in both Testaments, judging evil patiently and offering mercy to all." },
    ],
    sources: ["Greg Koukl", "C.S. Lewis"],
    oneLiner: "Fair question. But to call God cruel, you need a real standard. Where does it come from?",
    askBack: "Do you mean it's really wrong, or just that you don't like it?",
    short: `Your sense that cruelty is truly wrong is a good thing, but it points to God, not away from Him. Without God, there's no real standard to judge anything as evil.

And when you look closely, God was not quick to judge. He waited hundreds of years for the Canaanites to turn from practices like child sacrifice. He takes no pleasure in the death of the wicked. The real surprise isn't that God judges sin. It's that He offers mercy.`,
    deep: `**The moral argument turned around:** Calling God cruel assumes a real standard of good and evil. Without God, there is no real standard to judge anything as evil. C.S. Lewis said his own argument against God was that the universe seemed cruel and unjust, until he asked where he got the idea of “just” at all. See {{The Moral Law|evidence/moral-law}}.

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

**God's character:** God was not quick to judge. He takes no pleasure in the death of the wicked ([[Ezekiel 33:11]]) and is patient so people can repent ([[2 Peter 3:9]]). The surprise is not that God judges sin but that He offers mercy.

**The same God in both Testaments:** See {{Why does God seem so much harsher in the Old Testament?|objections/ot-vs-nt-god}}.

**Further reading:** Paul Copan, *Is God a Moral Monster?* C.S. Lewis, *Mere Christianity*, Book 2, chapter 1.`,
    talk: `**Questions to ask:**
- “Which passage are you thinking of?”
- “Where does your standard of right and wrong come from?”

**How to say it:** “Your sense that cruelty is wrong is a good thing. It points to God.” “God waited 400 years for the Canaanites to turn.”

**If they say “God commanded genocide”:** “They sacrificed their children. God waited centuries before judging.”

**If they say “The Bible supports slavery”:** “Kidnapping and selling people was punishable by death.”

**Bridge to the gospel:** “If God judged the Canaanites for their sin, what about us?” Move to the Law and the cross ({{Way of the Master|paths/way-of-the-master/3}}).`,
    verses: ["Genesis 15:16", "Ezekiel 33:11", "Exodus 21:16", "2 Peter 3:9"],
    related: ["evidence/moral-law", "paths/way-of-the-master"],
  },

  {
    id: "bible-interpretation",
    category: "The Bible",
    title: "You just interpret it your way",
    topic: "Biblical Interpretation",
    lead: "Biblical interpretation, or hermeneutics, is the study of how to understand the meaning of Scripture. Disagreements among readers lead some to conclude that the Bible can mean anything.",
    alsoAsked: ["That's just your interpretation", "Everyone reads the Bible differently", "Christians can't even agree among themselves"],
    inBrief: "The Bible means what its authors meant. Read in context, its main message is clear, even where some passages are hard.",
    tip: "read the passage together before arguing about it.",
    otherViews: [
      { name: "Postmodernism", text: "Meaning is shaped largely by the reader, so no single reading of a text is the right one." },
      { name: "Christianity", text: "Meaning is set by the author, and context, grammar, and the rest of Scripture guide the reader to it." },
    ],
    sources: ["Greg Koukl", "Cliff Knechtle"],
    oneLiner: "Fair point. Anyone can twist a text, so let's read it in context together.",
    askBack: "What do you think this passage is saying?",
    short: `Every writer means something, and our job is to find out what they meant, not make it say what we want. That's how we read any letter or book.

Some parts of the Bible are hard to understand. But the main message is not: we've all sinned, God will judge, and Jesus died and rose to save us. “You shall not lie” doesn't need much interpretation.`,
    deep: `**Authorial intent:** Every writer means something. The task of interpretation is to find out what the author meant, not to make the text say what the reader wants. Any letter or book is read the same way.

**Context:** Greg Koukl's rule is “Never read a Bible verse”: read the paragraph around it. Context answers most interpretation questions.

**Disagreement doesn't mean no meaning:** People disagree about the Constitution too, but it still means something. Disagreement calls for careful reading, not the conclusion that every reading is equal.

**Hard passages:** The Bible admits some things in it are hard to understand ([[2 Peter 3:16]]), and warns against twisting them.

**Clear on the main things:** The main message is not hard: all have sinned, God will judge, and Jesus died and rose to save. Christians across many traditions agree on the core: one God, the deity of Christ, His death for sins and bodily resurrection, and salvation by grace through faith. A command such as “You shall not lie” needs little interpretation.

**Scripture's purpose:** All Scripture is inspired and given for teaching and correction ([[2 Timothy 3:16]]).`,
    talk: `**How to say it:** “Fair point. Anyone can twist a text.” “Let's read it in context together.”

**Cliff Knechtle's approach:** Open the Bible, ask them to read the passage aloud, then ask what it says.

**Questions to ask:**
- “Which passage do you mean?”
- “What makes you think I'm reading it wrong?”

**If they say “Christians can't agree”:** “People disagree about the Constitution too. It still means something.”

**Bridge to the gospel:** The commandments are clear enough to show us our guilt. “‘You shall not lie’ doesn't need much interpretation. Have you ever lied?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["2 Peter 3:16", "2 Timothy 3:16"],
    related: ["skills/columbo", "paths/way-of-the-master"],
  },

  // --- JESUS ---
  {
    id: "jesus-existed",
    category: "Jesus",
    title: "Jesus never existed",
    topic: "The Historical Jesus",
    lead: "The historical Jesus refers to what can be known about Jesus of Nazareth from historical sources. Nearly all historians of the ancient world agree that He was a real person.",
    alsoAsked: ["Isn't Jesus just a legend?", "Is there any evidence outside the Bible?", "Wasn't Jesus made up?"],
    inBrief: "Nearly all historians, Christian or not, agree Jesus lived and was crucified under Pontius Pilate; non-Christian writers mention Him.",
    tip: "ask what sources they have read. Most heard it online.",
    otherViews: [
      { name: "Christ myth theory", text: "A small minority argue that Jesus never existed and was invented from myth." },
      { name: "Mainstream historians", text: "Jesus was a real Jewish teacher crucified under Pontius Pilate, whatever one concludes about His miracles." },
      { name: "Islam", text: "Jesus was a real prophet and Messiah born of a virgin, but not God and not crucified." },
      { name: "Christianity", text: "Jesus was a real man in history and also God the Son, who died and rose again." },
    ],
    sources: ["Lee Strobel", "Wes Huff"],
    oneLiner: "Almost no historians believe that, even skeptics. Non-Christian writers mention Him.",
    askBack: "What historians have you read who say He didn't exist?",
    short: `Nearly all historians of the ancient world, Christian or not, agree Jesus was a real person who was crucified under Pontius Pilate.

Roman historian Tacitus and Jewish historian Josephus both mention Him. Even well-known skeptical scholars like Bart Ehrman have written books arguing that Jesus existed. So the real question isn't whether He lived. It's who He was.`,
    deep: `**Scholarly consensus:** Nearly all historians of the ancient world, Christian or not, agree that Jesus was a real person who was crucified under Pontius Pilate. Bart Ehrman, an agnostic New Testament scholar, wrote *Did Jesus Exist?* (2012) to answer the “myth” theory. His answer is yes.

**Non-Christian sources:**
- **Tacitus** (Roman historian, early 100s): mentions “Christus” executed by Pontius Pilate during the reign of Tiberius
- **Josephus** (Jewish historian, late first century): mentions “James, the brother of Jesus who was called Christ,” and has a longer passage about Jesus (part of which was likely added to by later Christian copyists, but most scholars think the core is authentic)
- **Pliny the Younger** (early 100s): describes Christians worshiping Christ “as to a god”

**Christian sources are historical sources too:** The Gospels and Paul's letters were written within decades of Jesus' life. Paul's letters date to the 50s, and he passes on an early creed ([[1 Corinthians 15:3-4]]). Luke wrote as a careful investigator ([[Luke 1:3-4]]), and Peter claimed to be an eyewitness ([[2 Peter 1:16]]).

**The next question:** If Jesus existed, the question becomes who He was. See {{Liar, Lunatic, or Lord|evidence/trilemma}}.

**Further reading:** Lee Strobel, *The Case for Christ*, chapter on corroborating evidence (Edwin Yamauchi). Wes Huff also covers the historical evidence for Jesus. See also {{The Resurrection: Minimal Facts|evidence/resurrection}}.`,
    talk: `**Questions to ask:**
- “What historians have you read who say He didn't exist?”
- “What would count as evidence for you?”

**How to say it:** “Almost no historians believe that, even skeptics. Non-Christian writers mention Him.”

**If they say “There's no evidence outside the Bible”:** “Tacitus and Josephus both mention Him. Neither was a Christian.”

**If they say “The Bible doesn't count”:** “The Gospels and Paul's letters are ancient sources too, written within decades.”

**If they say “Christians made it up”:** “Even Bart Ehrman, an agnostic, wrote a book arguing Jesus existed.”

**Bridge to the gospel:** “So the real question isn't whether He lived. It's who He was.” ({{Liar, Lunatic, or Lord|evidence/trilemma}}, then {{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["1 Corinthians 15:3-4", "Luke 1:3-4", "2 Peter 1:16"],
    related: ["evidence/trilemma", "evidence/resurrection"],
  },

  {
    id: "jesus-good-teacher",
    category: "Jesus",
    title: "Jesus was just a good teacher",
    topic: "Jesus as Moral Teacher",
    lead: "Many people respect Jesus as a wise moral teacher while denying that He is God. This view must account for His claims about Himself.",
    alsoAsked: ["Jesus was a great moral example, nothing more", "Jesus was a prophet, not God", "I like Jesus' teachings, not the religion"],
    inBrief: "Jesus claimed to be God; a mere good teacher would not, so He is either a liar, a lunatic, or Lord.",
    tip: "agree He was a good teacher, then look at what He taught.",
    otherViews: [
      { name: "Secular view", text: "Jesus was a wise ethical teacher whose followers later turned Him into a god." },
      { name: "Islam", text: "Jesus was a great prophet and the Messiah, but only a man and not the Son of God." },
      { name: "Judaism", text: "Jesus was a Jewish teacher, but not the Messiah and not divine." },
      { name: "Christianity", text: "Jesus is a good teacher because He is God the Son, and His claims about Himself are true." },
    ],
    sources: ["C.S. Lewis", "Ray Comfort"],
    oneLiner: "A good teacher doesn't claim to be God. Jesus did.",
    askBack: "What would you think of a teacher today who said he was God?",
    short: `Jesus claimed to forgive sins, to be one with the Father, and to be the only way to God. If those claims were false, He wasn't a good teacher. He was either lying or deluded.

The only other option is that He was telling the truth. And then we have to do what He said.`,
    deep: `**The problem:** Jesus claimed to forgive sins, to be one with the Father, and to be the only way to God. If those claims were false, He was not a good teacher; He was either lying or deluded. The only other option is that He was telling the truth, and then His words must be obeyed.

**Lewis's trilemma:** C.S. Lewis argued that Jesus is either liar, lunatic, or Lord, and that “great moral teacher” is not an option He left open. See {{Liar, Lunatic, or Lord|evidence/trilemma}}.

**His claims:**
- Forgave sins against God ([[Mark 2:5-7]])
- “Before Abraham was born, I am” ([[John 8:58]])
- “I and the Father are one” ([[John 10:30]])
- The only way to the Father ([[John 14:6]])
- Accepted worship ([[John 20:28]])

**What He taught:** Jesus' moral teaching reaches the heart; for example, lust is adultery of the heart ([[Matthew 5:27-28]]). He also spoke about judgment and hell more than anyone else in the Bible ([[Matthew 10:28]]).

**Further reading:** C.S. Lewis, *Mere Christianity*. See also {{Jesus never claimed to be God|objections/jesus-not-god}}.`,
    talk: `**Questions to ask:**
- “What would you think of a teacher today who said he was God?”
- “What did this good teacher say about hell?” (Ray Comfort's angle)

**How to say it:** “A good teacher doesn't claim to be God. Jesus did.”

**If they respect His teaching:** Show them what He taught, like lust being adultery of the heart ([[Matthew 5:27-28]]). That leads right into the Law.

**If they say “He never claimed to be God”:** Point to “Before Abraham was born, I am” ([[John 8:58]]). See {{Jesus never claimed to be God|objections/jesus-not-god}}.

**Bridge to the gospel:** “Jesus said lust is adultery of the heart. Have you ever looked with lust?” ({{Way of the Master|paths/way-of-the-master/3}})`,
    verses: ["Mark 2:5-7", "John 8:58", "John 10:30", "John 14:6"],
    related: ["evidence/trilemma", "objections/jesus-not-god", "paths/way-of-the-master"],
  },

  {
    id: "resurrection-myth",
    category: "Jesus",
    title: "The resurrection didn't happen",
    topic: "The Resurrection of Jesus",
    lead: "The resurrection is the Christian claim that Jesus rose bodily from the dead three days after His crucifixion. Christianity stands or falls on whether it happened.",
    alsoAsked: ["Dead people don't come back to life", "The disciples just hallucinated", "Someone stole the body"],
    inBrief: "The resurrection best explains the facts most scholars accept: Jesus' death, the empty tomb, and the appearances to followers, skeptics, and enemies.",
    tip: "ask what they think happened to the body.",
    otherViews: [
      { name: "Naturalism", text: "Dead people do not rise, so the appearances must have been visions, legends, or mistakes." },
      { name: "Islam", text: "Jesus was not crucified or killed; God raised Him to heaven alive." },
      { name: "Judaism", text: "Jesus died and did not rise; the empty tomb is traditionally explained as the body being stolen." },
      { name: "Christianity", text: "Jesus rose bodily from the dead, proving He is Lord and the coming Judge." },
    ],
    sources: ["Lee Strobel"],
    oneLiner: "Then what explains the empty tomb, and disciples dying for saying they saw Him alive?",
    askBack: "What do you think happened to the body?",
    short: `A handful of facts are accepted by most scholars, even skeptical ones: Jesus died by crucifixion, His followers believed they saw Him alive, and even enemies like Paul and skeptics like His brother James became believers.

Every alternative theory struggles to explain all of those facts together. The resurrection explains all of them. And if Jesus rose, He's the One we'll answer to.`,
    deep: `**Why it matters:** Paul said that if Christ has not been raised, Christian faith is worthless ([[1 Corinthians 15:17]]). Christianity invites investigation.

**The minimal facts:** A handful of facts are accepted by most scholars, even skeptical ones:
- Jesus died by crucifixion
- His followers believed they saw Him alive ([[1 Corinthians 15:3-4]])
- Even an enemy, Paul, and a skeptic, Jesus' brother James, became believers

**The alternatives:** Every alternative theory struggles to explain all of these facts together.
- **The disciples lied:** they were willing to suffer and die for the claim, and people do not die for something they know is false.
- **Hallucinations:** Jesus appeared to more than five hundred people at once ([[1 Corinthians 15:6]]), and groups do not share the same hallucination.
- **The body was stolen or lost:** the authorities could have ended the movement by producing the body, and did not.

The resurrection explains all the facts together. See {{The Resurrection: Minimal Facts|evidence/resurrection}}.

**What it means:** God has given proof that He will judge the world through Jesus by raising Him from the dead ([[Acts 17:30-31]]).

**Further reading:** Lee Strobel, *The Case for Christ*. Gary Habermas and Michael Licona, *The Case for the Resurrection of Jesus*.`,
    talk: `**Questions to ask:**
- “What do you think happened to the body?”
- “Do you think the disciples lied? Would they die for something they knew was false?”
- “Could hundreds of people share the same hallucination?” ([[1 Corinthians 15:6]])
- “Why didn't the authorities just produce the body?”

**How to say it:** “Then what explains the empty tomb, and disciples dying for saying they saw Him alive?”

**If they say “Dead people don't rise”:** “Normally, no. That's why it would mean something if one did.”

**Steer back:** God proved He will judge the world by raising Jesus ([[Acts 17:30-31]]). “If Jesus rose, He's the One we'll answer to.”

**Bridge to the gospel:** That leads straight to the Law and repentance ({{Way of the Master|paths/way-of-the-master/2}}).`,
    verses: ["1 Corinthians 15:3-4", "1 Corinthians 15:6", "1 Corinthians 15:17", "Acts 17:30-31"],
    related: ["evidence/resurrection", "paths/way-of-the-master"],
  },

  {
    id: "jesus-not-god",
    category: "Jesus",
    title: "Jesus never claimed to be God",
    topic: "The Deity of Christ",
    lead: "The deity of Christ is the teaching that Jesus is God the Son, fully divine as well as fully human. A common challenge is that Jesus never claimed this Himself.",
    alsoAsked: ["Where did Jesus ever say “I am God”?", "Wasn't Jesus' divinity invented later by the church?", "Jesus was just a prophet"],
    inBrief: "Jesus claimed divine authority, God's own name, and worship; His enemies understood this and sought His death for blasphemy.",
    tip: "ask why His enemies wanted Him dead.",
    otherViews: [
      { name: "Islam", text: "Jesus was a great prophet and the Messiah but only a man; calling Him God is a serious error." },
      { name: "Jehovah's Witnesses", text: "Jesus is God's first creation, a mighty spirit being, but not God Almighty." },
      { name: "Skeptical scholarship", text: "Belief in Jesus' divinity developed among His followers after His death." },
      { name: "Christianity", text: "Jesus is God the Son, who claimed divine identity and proved it by rising from the dead." },
    ],
    sources: ["Lee Strobel", "Cliff Knechtle"],
    oneLiner: "He did, and His hearers understood. That's why they tried to stone Him for blasphemy.",
    askBack: "Why do you think the religious leaders wanted Him executed?",
    short: `Jesus didn't usually say the words “I am God,” but He said and did things only God could. He forgave sins, claimed God's own name, “I am,” and accepted worship.

His enemies understood. At His trial, the high priest called His claim blasphemy, and that's why they sought His death.`,
    deep: `**The claim:** Jesus did not usually say the words “I am God,” but He said and did things only God could do. His hearers understood, which is why they tried to stone Him for blasphemy.

**What He claimed:**
- Forgave sins: “who can forgive sins but God alone?” ([[Mark 2:5-7]])
- Used God's name: “Before Abraham was born, I am” ([[John 8:58]]). They picked up stones.
- “I and the Father are one” ([[John 10:30]]). Again they picked up stones, because He made Himself out to be God.
- Claimed to be the divine Son of Man of Daniel 7 at His trial ([[Mark 14:62]]). The high priest called this blasphemy, and the council sought His death.
- Accepted worship from Thomas ([[John 20:28]])

**Why He spoke this way:** Jesus revealed who He was through His actions and through Old Testament titles His Jewish audience would recognize.

**The next question:** If Jesus claimed to be God, He was liar, lunatic, or Lord. See {{Liar, Lunatic, or Lord|evidence/trilemma}}.

**Further reading:** Lee Strobel, *The Case for Christ*. See also {{Jesus was just a good teacher|objections/jesus-good-teacher}}.`,
    talk: `**Questions to ask:**
- “Why do you think the religious leaders wanted Him executed?”
- “If Jesus wasn't claiming to be God, why did His enemies keep accusing Him of blasphemy?”

**How to say it:** “He did, and His hearers understood. That's why they tried to stone Him.”

**If they say “He never said the words ‘I am God’”:** “He forgave sins, took God's name ‘I am,’ and accepted worship. Those say it louder.”

**If they're Muslim or a Jehovah's Witness:** Go slowly through [[John 8:58]] and [[John 20:28]]. See {{Muslim|people/muslim}} and {{Jehovah's Witness|people/jw}}.

**Bridge to the gospel:** “If He is God, He's the One who will judge us.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Mark 2:5-7", "John 8:58", "John 10:30", "Mark 14:62", "John 20:28"],
    related: ["evidence/trilemma", "objections/jesus-good-teacher"],
  },

  // --- SCIENCE ---
  {
    id: "science-disproves-god",
    category: "Science",
    title: "Science disproves God",
    topic: "Science and God",
    lead: "The relationship between science and belief in God is often framed as a conflict. Many of the founders of modern science believed in God, and several scientific findings raise questions that science alone cannot answer.",
    alsoAsked: ["Science has replaced God", "Isn't religion anti-science?", "There's no scientific evidence for God"],
    inBrief: "Science explains how nature works but cannot explain why anything exists; its findings, such as a beginning and fine-tuning, point toward a Creator.",
    tip: "ask which discovery they mean. Often it's a general impression.",
    otherViews: [
      { name: "Scientism", text: "Only what science can test counts as knowledge, so God is at best unknowable." },
      { name: "Conflict thesis", text: "Science and religion have always been at war, and science keeps winning ground." },
      { name: "Christianity", text: "God made an orderly world that can be studied, so science explores His work and points to Him." },
    ],
    sources: ["Lee Strobel", "Greg Koukl"],
    oneLiner: "Science explains how things work. It can't explain why there's anything at all.",
    askBack: "What scientific discovery do you think disproved God?",
    short: `Science and God aren't competitors. Explaining how a car engine works doesn't disprove that someone built the car.

Many of the founders of modern science, like Kepler, Boyle, Newton and Faraday, believed in God. They studied nature because they expected an orderly universe made by a rational Creator. And no experiment can erase a guilty conscience.`,
    deep: `**Mechanism and agent:** Science explains how things work. Explaining how a car engine works does not disprove that someone built the car. Knowing how gravity works does not say why there is gravity, or why there is a universe at all.

**Self-defeating claim:** “Only science can tell us what's true” cannot itself be proven by science. See {{Suicide|skills/suicide}}.

**The founders of modern science:** Kepler, Boyle, Newton, and Faraday, among others, believed in God. They studied nature because they expected an orderly universe made by a rational Creator.

**Science points toward God:**
- The universe had a beginning ([[Genesis 1:1]]). What caused it? See {{The Cosmological Argument|evidence/cosmological}}.
- The laws of physics are finely balanced for life. See {{Fine-Tuning|evidence/fine-tuning}}.
- The universe is orderly and understandable, which needs an explanation.

**The Bible's view:** Creation reveals God ([[Psalm 19:1]], [[Romans 1:20]]). People know God exists but suppress the truth ([[Romans 1:18]]).

**The conscience:** No experiment removes a guilty conscience. The moral witness within each person is a separate testimony to God.

**Further reading:** Lee Strobel, *The Case for a Creator*. John Lennox, *God's Undertaker*.`,
    talk: `**Questions to ask:**
- “What scientific discovery do you think disproved God?”
- “Can science prove that only science gives truth?” ({{Suicide|skills/suicide}})

**How to say it:** “Science explains how things work. It can't explain why there's anything at all.” “Knowing how an engine works doesn't mean no one built the car.”

**If they say “Scientists don't believe in God”:** “Newton, Kepler, Boyle and Faraday did. They expected order because they believed in a Creator.”

**Steer back:** Don't get stuck. Even if they're unconvinced by the arguments, their conscience still speaks.

**Bridge to the gospel:** “No experiment can erase a guilty conscience. Can I ask you about the Ten Commandments?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Psalm 19:1", "Romans 1:20", "Genesis 1:1", "Romans 1:18"],
    related: ["evidence/cosmological", "evidence/fine-tuning", "skills/suicide", "paths/way-of-the-master"],
  },

  {
    id: "evolution",
    category: "Science",
    title: "Evolution explains everything",
    topic: "Evolution and Origins",
    lead: "The theory of evolution describes how living things change over generations, and it is often presented as a full account of origins without God. Several of the largest questions about origins lie outside what it explains.",
    alsoAsked: ["Evolution proves there's no God", "We just evolved", "Darwin explained everything"],
    inBrief: "Evolution cannot explain why anything exists, how life began from non-life, the information in DNA, consciousness, or real moral obligation.",
    tip: "don't get stuck in a biology debate. Keep it short.",
    otherViews: [
      { name: "Naturalism", text: "Unguided natural processes account for life's origin and diversity, with no need for a Creator." },
      { name: "Theistic evolution", text: "Some Christians hold that God used evolutionary processes to create life." },
      { name: "Creationism", text: "God created living things according to their kinds, and change within kinds does not produce new kinds." },
    ],
    sources: ["Ray Comfort", "Living Waters", "Lee Strobel"],
    oneLiner: "It can't explain where the universe came from, how life began, or right from wrong.",
    askBack: "Where did the first living thing come from?",
    short: `Whatever someone thinks about evolution, it doesn't touch the biggest questions: why is there a universe, how did life begin from non-life, where does the information in DNA come from, and why do we have a conscience?

And no theory of biology changes the fact that we've all broken God's Law and will stand before Him.`,
    deep: `**What evolution doesn't explain:**
- Why anything exists at all ([[Genesis 1:1]])
- The origin of the first life from non-living chemicals
- The origin of the information coded in DNA
- Consciousness and reason
- Real moral obligation (see {{The Moral Law|evidence/moral-law}})

**Observable change:** Ray Comfort's film *Evolution vs. God* presses for observable evidence of one kind of creature becoming a different kind, as distinct from variation within a kind.

**Creation and the Creator:** Creation itself shows God's power and nature, so that people are without excuse ([[Romans 1:20]]).

**Christian views:** Christians hold a range of views on the age of the earth and on how God created, while affirming God as Creator. See {{Creation & Literal Days|convictions/creation}}.

**The heart issue:** People love darkness rather than light ([[John 3:19]]). For some, evolution can serve as a refuge from accountability to God.

**Accountability remains:** No theory of biology changes the fact that everyone has broken God's Law and will stand before Him.

**Further reading:** Lee Strobel, *The Case for a Creator*. Living Waters' film *Evolution vs. God*.`,
    talk: `**Questions to ask:**
- “Where did the first living thing come from?”
- “Can you give me observable evidence of one kind becoming another kind?”

**How to say it:** “Evolution can't explain where the universe came from, how life began, or right from wrong.”

**Don't get stuck:** Keep the focus on God as Creator and on the gospel, not on winning a biology debate.

**Bridge to the gospel:** Ray Comfort's pivot: “Can I ask you a different question? Do you think you're a good person?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Genesis 1:1", "Romans 1:20", "John 3:19"],
    related: ["objections/science-disproves-god", "evidence/moral-law", "paths/way-of-the-master"],
  },
  {
    id: "dinosaurs-age",
    category: "Science",
    title: "What about dinosaurs and the age of the earth?",
    topic: "Dinosaurs and the Age of the Earth",
    lead: "Fossils and modern dating methods are often taken to show an earth billions of years old with dinosaurs living long before humans. Christians differ on how this fits with Genesis, though all affirm God as Creator.",
    alsoAsked: ["How old is the earth?", "Where do dinosaurs fit in the Bible?", "Doesn't carbon dating disprove the Bible?"],
    inBrief: "God made everything in six days, dinosaurs with people on day six; dating assumes the past, and God may have made a mature creation.",
    tip: "answer briefly. Then bring it back to the Law.",
    otherViews: [
      { name: "Naturalism", text: "The earth is about 4.5 billion years old, and dinosaurs died out tens of millions of years before humans appeared." },
      { name: "Old-earth Christians", text: "The days of Genesis are read as long ages, a gap, or a literary framework, while still affirming God as Creator." },
      { name: "Young-earth Christians", text: "God created in six literal days a few thousand years ago, and land animals, dinosaurs included, were made alongside people." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Dinosaurs were made on day six, with people. The bigger question is who made them.",
    askBack: "If the earth is old, does that change whether you've broken God's Law?",
    short: `The Bible says God made everything in six days, including land animals like dinosaurs. Dating methods depend on assumptions about the past, and God may have made a mature earth, just as Adam was created a grown man.

Christians do differ on the age of the earth, but none doubt that God made it. And either way, you'll still stand before Him one day.`,
    deep: `**Six days:** “In six days the LORD made the heavens and the earth” ([[Exodus 20:11]]). Land animals, including dinosaurs, and people were made on day six.

**People from the beginning:** Jesus said God made them male and female “from the beginning of creation” ([[Mark 10:6]]).

**Death came through sin** ([[Romans 5:12]]), so death and fossils came after the fall.

**Dating methods:** Dating methods depend on assumptions about conditions in the unobserved past.

**Mature creation:** God may have made a mature earth. Adam was created a grown man ([[Genesis 2:7]]), trees were made already bearing fruit ([[Genesis 1:11-12]]), and starlight could have been made already “grown.” Apparent age is not proof of actual age.

**Job's Behemoth** (Job 40:15) is described as a huge animal with a tail like a cedar. Some think it was a dinosaur.

**How Christians differ:** Christians differ on the age of the earth, but none doubt that God made it. Creation itself shows there is a Creator ([[Romans 1:20]]).

**My view:** {{Creation & Literal Days|convictions/creation}}.`,
    talk: `**How to say it:** “Dinosaurs were made on day six, with people.” “Adam was made a grown man. The earth could be made mature too.”

**Questions to ask:**
- “If the earth is old, does that change whether you've broken God's Law?”
- “Who made the dinosaurs?”

**If they say “Carbon dating proves millions of years”:** “Dating depends on assumptions about the past nobody saw.”

**Don't get sidetracked:** Answer briefly. Either way, they'll still stand before God one day.

**Bridge to the gospel:** “The bigger question is who made them, and whether you're ready to meet Him.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Exodus 20:11", "Mark 10:6", "Romans 5:12", "Romans 1:20"],
    related: ["convictions/creation", "objections/evolution"],
  },

  {
    id: "miracles",
    category: "Science",
    title: "Miracles are impossible",
    topic: "The Possibility of Miracles",
    lead: "A miracle is an act of God in the natural world that nature alone would not produce. Whether miracles are possible depends largely on whether God exists.",
    alsoAsked: ["Science shows miracles can't happen", "Dead people don't rise", "Miracles are just stories from a superstitious age"],
    inBrief: "If God exists, miracles are possible; ruling them out assumes there is no God, and Christianity rests on one investigable miracle, the resurrection.",
    otherViews: [
      { name: "Naturalism", text: "Nature is a closed system of cause and effect, so miracles cannot occur." },
      { name: "David Hume", text: "The Scottish skeptic argued that testimony can never outweigh the uniform experience against miracles." },
      { name: "Christianity", text: "God made nature's laws and is free to act within His creation, as He did supremely in raising Jesus." },
    ],
    sources: ["C.S. Lewis", "Lee Strobel"],
    oneLiner: "If God exists, miracles aren't impossible at all. The real question is whether God exists.",
    askBack: "Do you believe the universe had a beginning?",
    short: `A miracle is God acting in the world He made. If there's a God who created the universe from nothing, raising a man from the dead is not hard for Him.

Saying miracles can't happen assumes there's no God, which is the very question we're asking. And Christianity rests on one miracle you can investigate: the resurrection.`,
    deep: `**Definition:** A miracle is God acting in the world He made.

**Regular laws and the Lawgiver** (C.S. Lewis, *Miracles*): Nature has regular patterns, which is exactly why a miracle stands out. Regular laws do not forbid the Lawgiver from acting.

**Circular reasoning:** “Miracles never happen, so any report of a miracle must be false” assumes the conclusion. Saying miracles can't happen assumes there is no God, which is the question under discussion.

**The biggest miracle:** [[Genesis 1:1]]. If the universe came from nothing by God's power, raising a man from the dead is a small thing by comparison. See {{The Cosmological Argument|evidence/cosmological}}.

**A testable miracle:** Christianity rests on one investigable miracle, the resurrection. If Christ has not been raised, faith is worthless ([[1 Corinthians 15:17]]). See {{Minimal Facts|evidence/resurrection}}.

**The resurrection and judgment:** God has fixed a day to judge the world, and He gave proof of it by raising Jesus from the dead ([[Acts 17:30-31]]).

**Further reading:** C.S. Lewis, *Miracles*. Lee Strobel, *The Case for Miracles*.`,
    talk: `**Questions to ask:**
- “Do you believe the universe had a beginning?”
- “If God exists, could He do a miracle?”

**How to say it:** “If God exists, miracles aren't impossible at all.” “The real question is whether God exists.”

**If they say “Science shows the dead don't rise”:** “Agreed, not naturally. That's why it would be a miracle.”

**Bridge to the gospel:** The resurrection means a day of judgment is coming ([[Acts 17:30-31]]). “Are you ready for that day?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Genesis 1:1", "1 Corinthians 15:17", "Acts 17:30-31"],
    related: ["evidence/resurrection", "evidence/cosmological"],
  },

  // --- OTHER RELIGIONS ---
  {
    id: "sincere-religions",
    category: "Other Religions",
    title: "What about sincere people of other religions?",
    topic: "Sincerity and Religious Truth",
    lead: "This question asks whether devout and sincere followers of other religions can be saved through their own faith. It raises the relationship between sincerity, truth, and God's fairness.",
    alsoAsked: ["Won't God accept people who sincerely follow their religion?", "What about a devout Muslim or Buddhist?", "Isn't it enough to be sincere?"],
    inBrief: "Sincerity does not remove sin; everyone has broken God's Law, and only Christ's payment, not religious effort, can save.",
    tip: "bring it back to the person in front of you, not other people.",
    otherViews: [
      { name: "Religious pluralism", text: "Sincere devotion within any tradition is a valid response to the divine." },
      { name: "Inclusivism", text: "Some Christians hold that people may be saved through Christ without knowing Him, if they respond to the light they have." },
      { name: "Christianity", text: "Salvation comes by grace through faith in Christ, and the gospel is to be preached to all people so they can repent and believe." },
    ],
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "Sincere doesn't mean true. You can sincerely take the wrong medicine.",
    askBack: "Can someone be sincere and still be wrong?",
    short: `Being sincere doesn't remove our sin. Every religion tries to reach God through good works, but we've all broken God's Law, and no amount of good deeds can erase that.

Christianity is different: God came to us. Jesus paid the penalty we owe. That's why He is the only way.`,
    deep: `**Sincerely wrong:** Sincerity does not make a belief true; a person can sincerely take the wrong medicine. Scripture says a way can seem right and still end in death ([[Proverbs 14:12]]). Paul described sincere religious people who had zeal for God without knowledge, seeking to establish their own righteousness ([[Romans 10:2-3]]).

**The problem of sin:** Sincerity does not remove sin. All have broken God's Law ([[Romans 3:23]]), and no amount of good deeds can erase that.

**Every religion and the gospel:** Most religions try to reach God through good works; they say “do.” Christianity says “done”: God came to people, and Jesus paid the penalty they owe. No one can earn heaven ([[Ephesians 2:8-9]]). This is why Jesus is the only way ([[John 14:6]]).

**God is fair:** God commands all people everywhere to repent ([[Acts 17:30-31]]) and is patient, not wishing for any to perish ([[2 Peter 3:9]]).

**Further reading:** Ray Comfort and Living Waters on the Law and grace. See also {{All religions lead to God|objections/all-religions}} and {{I'm a good person|objections/good-person}}.`,
    talk: `**How to say it:** “Sincere doesn't mean true. You can sincerely take the wrong medicine.”

**Questions to ask:**
- “Can someone be sincere and still be wrong?”
- “What does that religion say you have to do to reach God?”

**Avoid arguing about other people.** Bring it back to the person in front of you: “Let's talk about you. Do you think you're a good person?” ({{I'm a good person|objections/good-person}})

**If they say “That's not fair to them”:** “God commands everyone to repent, and He's patient so they can” ([[2 Peter 3:9]]).

**If they say “All religions are trying to be good”:** “Most religions say ‘do.’ Christianity says ‘done.’”

**Bridge to the gospel:** Take them through the Law questions ({{Way of the Master|paths/way-of-the-master/3}}).`,
    verses: ["Proverbs 14:12", "Romans 10:2-3", "John 14:6", "Ephesians 2:8-9"],
    related: ["objections/all-religions", "objections/good-person", "paths/way-of-the-master"],
  },

  {
    id: "western-religion",
    category: "Other Religions",
    title: "Christianity is a Western, white man's religion",
    topic: "Christianity as a Global Faith",
    lead: "Some people regard Christianity as a European or Western religion tied to colonialism and race. Its origins in the Middle East and its global spread bear on that claim.",
    alsoAsked: ["Isn't Christianity the white man's religion?", "Wasn't Christianity forced on people by colonizers?", "Why should I follow a European religion?"],
    inBrief: "Christianity began in the Middle East, spread early through Asia and Africa, and today most Christians live outside the West.",
    tip: "acknowledge real wrongs done in Christ's name before giving history.",
    sources: ["Cliff Knechtle"],
    oneLiner: "It began in the Middle East. Most Christians now live in Africa, Asia, and Latin America.",
    askBack: "Where do you think Christianity started?",
    short: `Jesus was a Jewish man from the Middle East. The early church spread across Asia and Africa (Egypt, Ethiopia, Syria) long before it reached most of Europe.

Today, most of the world's Christians live in the Global South. The gospel is for every nation, and heaven will include people from every tribe and language. That includes you.`,
    deep: `**Origins:** Jesus was a Jewish man from the Middle East, and Christianity began in Jerusalem.

**Early spread:** The church spread across Asia and Africa long before it reached most of Europe.
- One of the first converts recorded in Acts was an Ethiopian official (Acts 8)
- Early centers of the church included Antioch (Syria), Alexandria (Egypt) and North Africa, the home of Augustine
- Christians have been in Africa and Asia, including Egypt, Ethiopia and Syria, for many centuries

**Today:** Most of the world's Christians live in the Global South: Africa, Latin America and Asia. That share keeps growing.

**The Bible's view:** God made one human family ([[Acts 17:26]]). In Christ there is no racial division ([[Galatians 3:28]]). The gospel is for every nation ([[Matthew 28:19]]), and heaven will include people from every nation, tribe and language ([[Revelation 7:9]]).

**Wrongs done in Christ's name:** Some who called themselves Christians have used the faith to justify racism and oppression. That contradicts the Bible's teaching rather than following it.

**Further reading:** Cliff Knechtle's campus dialogues on this question.`,
    talk: `**Questions to ask:**
- “Where do you think Christianity started?”
- “Where do most Christians live today?”

**How to say it:** “It began in the Middle East. Most Christians now live in Africa, Asia, and Latin America.”

**If they bring up racism or colonialism:** Agree that it was wrong. “People who used the faith that way went against the Bible, not with it” ([[Galatians 3:28]]).

**If they say “It's not for people like me”:** “Heaven will have people from every tribe and language. That includes you” ([[Revelation 7:9]]).

**Bridge to the gospel:** “The gospel is for every nation. The question is whether it's true for you.” Then move to the Law ({{Way of the Master|paths/way-of-the-master/2}}).`,
    verses: ["Acts 17:26", "Galatians 3:28", "Revelation 7:9"],
    related: ["objections/all-religions"],
  },

  {
    id: "pagan-myths",
    category: "Other Religions",
    title: "Christianity copied pagan myths",
    topic: "The Pagan Copycat Theory",
    lead: "The copycat theory claims that the story of Jesus was borrowed from earlier pagan myths, such as those of Horus or Mithras. It bears on whether the Gospels are history or legend.",
    alsoAsked: ["Wasn't Jesus copied from Horus?", "Didn't Mithras have the same story?", "Isn't the resurrection just a dying-and-rising god myth?"],
    inBrief: "The supposed parallels are mostly invented, exaggerated, or later than the Gospels, which read as history written within living memory.",
    tip: "ask which myth and where they heard it.",
    otherViews: [
      { name: "Christ myth theory", text: "Jesus was a mythical figure built from pagan and Jewish religious ideas rather than a historical person." },
      { name: "Mainstream historians", text: "Jesus was a real first-century Jew, and the copycat parallels are not supported by the ancient sources." },
      { name: "Christianity", text: "The Gospels record real events, attested by eyewitnesses, within living memory of Jesus' life." },
    ],
    sources: ["Lee Strobel"],
    oneLiner: "Historians don't take that seriously. Most parallels are exaggerated or came later.",
    askBack: "Which myth do you think it copied?",
    short: `Claims that Jesus was copied from gods like Horus or Mithras usually fall apart when you check the ancient sources. Many “parallels” are invented, stretched, or come from later centuries.

The Gospels read as history, not myth. They name real places, real rulers and real people, and they were written within living memory of the events.`,
    deep: `**The claim:** Jesus was copied from earlier gods such as Horus or Mithras. Historians do not take this seriously.

**Where the claim comes from:** Many versions trace back to popular books and videos rather than to ancient texts.

**Common problems with the parallels:**
- Details like “born of a virgin on December 25 with 12 disciples” are not found in the ancient sources for Horus or Mithras
- Many “parallels” are invented, stretched, or come from later centuries
- Much of what is known about Mithras worship comes from after the New Testament was written
- Pagan “dying and rising” gods tied to the seasons are very different from a real man executed under Pontius Pilate and seen alive by named witnesses

**History, not myth:** The Gospels name real places, real rulers and real people, and they were written within living memory of the events ([[Luke 1:3-4]]). Paul passes on an early creed about Jesus' death and resurrection ([[1 Corinthians 15:3-4]]).

**Jewish roots:** The first Christians were devout Jews who hated pagan idolatry. They were unlikely to borrow from pagan myths.

**Eyewitnesses:** The apostles said they were not following “cleverly devised tales” but were eyewitnesses ([[2 Peter 1:16]]).

**Further reading:** Lee Strobel, *The Case for the Real Jesus*. See also {{Did Jesus exist?|objections/jesus-existed}} and {{The Resurrection: Minimal Facts|evidence/resurrection}}.`,
    talk: `**Questions to ask:**
- “Which myth do you think it copied?”
- “Where did you hear that?”
- “Have you seen the ancient source for that detail?”

**How to say it:** “Historians don't take that seriously. Most parallels are exaggerated or came later.”

**If they say “Horus was born of a virgin on December 25”:** “That's not in the ancient sources. It comes from modern books.”

**If they say “Other gods died and rose again”:** “Those were seasonal myths. Jesus was a real man, executed under Pilate, seen alive by named people.”

**Bridge to the gospel:** “If Jesus really rose, He's the One we'll answer to” ([[Acts 17:30-31]]). Then move to the Law ({{Way of the Master|paths/way-of-the-master/2}}).`,
    verses: ["2 Peter 1:16", "Luke 1:3-4", "1 Corinthians 15:3-4"],
    related: ["objections/jesus-existed", "evidence/resurrection"],
  },

  {
    id: "abortion",
    category: "Abortion",
    title: "Abortion is a woman's right",
    topic: "Abortion and the Unborn",
    lead: "Abortion is the deliberate ending of a pregnancy by killing the developing child. The debate turns on one question: whether the unborn is a living human being who bears God's image.",
    alsoAsked: ["Shouldn't abortion be legal?", "Isn't abortion health care?", "Who are you to tell a woman what to do?"],
    inBrief: "From fertilization the unborn is a human being made in God's image, so deliberately killing them is murder, and the gospel offers forgiveness.",
    tip: "ask what the unborn is before anything else.",
    otherViews: [
      { name: "Pro-choice", text: "A woman's right to decide about her pregnancy outweighs any claim of the unborn, at least before viability." },
      { name: "Personhood theories", text: "Some philosophers argue a human being becomes a person only with consciousness, self-awareness, or the ability to survive outside the womb." },
      { name: "Incremental pro-life", text: "Abortion is wrong, but laws should restrict it in steps, often with exceptions, until it can be ended." },
      { name: "Christianity (abolitionist)", text: "Every unborn child is made in God's image, abortion is murder, and it should be abolished now with equal protection for all." },
    ],
    sources: ["Russell Hunter", "Abolitionist Rising", "Greg Koukl"],
    oneLiner: "One question: what is the unborn? If it's a human being, no one has the right to kill it.",
    askBack: "If you knew for sure the unborn was a human being, would that change your view?",
    short: `From fertilization, the unborn is a living, whole, distinct human being. That's basic embryology, not religion.

God made every human being in His image ([[Genesis 9:6]]) and knits each child together in the womb ([[Psalm 139:13]]). Deliberately killing an innocent human being is murder ([[Exodus 20:13]]).

So abortion isn't first a political issue. It's sin, and the answer is the gospel.`,
    deep: `**The basic facts:** From fertilization, the unborn is a living, whole, distinct human being. That is basic embryology, not religion.

**What the Bible teaches:** God made every human being in His image ([[Genesis 9:6]]). He knits each child together in the womb ([[Psalm 139:13]]) and knew Jeremiah before he was formed ([[Jeremiah 1:5]]). Deliberately killing an innocent human being is murder ([[Exodus 20:13]]), and God hates “hands that shed innocent blood” ([[Proverbs 6:16-17]]).

**The central question** (Koukl): If the unborn is not human, no justification for abortion is needed. If it *is* human, no justification is adequate. Every other argument depends on the answer to this one.

**The abolitionist position** (Russell Hunter, Abolitionist Rising):
- Abortion is murder, and it should be treated that way in law
- It should be abolished *immediately*, not reduced step by step (see {{Incrementalism|objections/incrementalism}})
- Every child deserves equal protection, with no exceptions
- The root problem is sin, so the real answer is the gospel and repentance
- The church is called to act and rescue ([[Proverbs 24:11]], [[Proverbs 31:8-9]]), not leave it to politicians

**Abortion as sin:** Abortion is not first a political issue. It is one sin among many that every person must answer for to God, and its remedy is the gospel. See {{Abortion|convictions/abortion}}.

**People personally affected:** Many people have had or been involved in an abortion. Scripture names the sin honestly and also offers full forgiveness in Christ ([[1 John 1:9]]). See {{“I've had an abortion”|objections/had-abortion}}.

**Common follow-up objections:**
- {{“It's just a clump of cells”|objections/clump-of-cells}}
- {{“My body, my choice”|objections/my-body}}
- {{“What about rape?”|objections/rape-incest}}
- {{“What if the mother's life is at risk?”|objections/mothers-life}}
- {{“Men don't get a say”|objections/men-opinion}}

**Further reading:** Russell Hunter and Abolitionist Rising on abolition. Greg Koukl, *Tactics*. See also {{Capital Punishment|convictions/capital-punishment}} and {{God's Law & Civil Government|convictions/theonomy}}.`,
    talk: `**Questions to ask:**
- “What is the unborn?”
- “If you knew for sure it was a human being, would that change your view?”

Keep coming back to that one question ({{Columbo|skills/columbo}}).

**How to say it:** “That's basic embryology, not religion.” “If it's a human being, no one has the right to kill it.”

**If they give a reason** (money, timing, career): Ask, “Would that reason justify killing a two-year-old?” If not, the question is still what the unborn is.

**If they say “It's not a person yet”:** See {{“It's just a clump of cells”|objections/clump-of-cells}}.

**If they've had an abortion:** Slow down. Tell the truth about sin, then hold out full forgiveness in Christ ({{“I've had an abortion”|objections/had-abortion}}).

**Bridge to the gospel:** Abortion is one sin among many. Move to the Law so they see everyone, including you, needs mercy. “Can I ask you a few questions about God's standard?” ({{Way of the Master|paths/way-of-the-master/2}})`,
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
    topic: "The Humanity of the Unborn",
    lead: "This question concerns what kind of being the embryo or fetus is. Whether the unborn is a living human being determines whether killing it is morally different from removing tissue.",
    alsoAsked: ["It's not a person yet", "It's just tissue", "It's only a potential life"],
    inBrief: "From fertilization the unborn is a distinct, living human being; size, development, location, and dependency don't change what someone is.",
    tip: "ask when they think it becomes human, and why then.",
    otherViews: [
      { name: "Personhood theories", text: "Some philosophers grant the unborn is biologically human but argue personhood begins later, with consciousness or self-awareness." },
      { name: "Gradualist view", text: "The unborn gains moral value gradually as it develops, so early abortion is less serious than late abortion." },
      { name: "Christianity", text: "Every human being is made in God's image from the beginning, so value doesn't depend on size or ability." },
    ],
    sources: ["Greg Koukl", "Abolitionist Rising"],
    oneLiner: "So are you and I. The question is what kind of thing it is: a living human being.",
    askBack: "At what point do you think it becomes a human being, and why then?",
    short: `From fertilization, the unborn has its own DNA, its own body, and is growing as a human being. It isn't a potential human. It's a human with potential.

The differences between the unborn and you are differences of size and stage, not of kind. None of those make someone less human.`,
    deep: `**The biology:** From fertilization, the unborn has its own DNA, its own body, and is growing as a human being. It is not a potential human but a human with potential. In that sense every person is a “clump of cells”; the question is what kind of thing it is.

**SLED** (from philosopher Stephen Schwarz, popularized by Scott Klusendorf). The only differences between an embryo and an adult are:
- **Size:** it is smaller. A toddler is smaller than an adult, and that does not make the toddler less valuable.
- **Level of development:** it is less developed. So is a 4-year-old compared with a teenager.
- **Environment:** it is inside the womb. Moving a few inches down the birth canal does not change what someone is.
- **Degree of dependency:** it depends on its mother. So do newborns, and people who rely on insulin or a pacemaker.

These are differences of size and stage, not of kind. None of them makes someone less human.

**Drawing a line:** Proposed starting points for human value include a heartbeat, viability, and birth. Each of these is arbitrary, since nothing about the being changes in kind from one week to the next. Fertilization is the only non-arbitrary beginning.

**Scripture:** The unborn are treated as persons. John leaped in Elizabeth's womb ([[Luke 1:44]]), God knew Jeremiah before he was born ([[Jeremiah 1:5]]), and He forms each child in the womb ([[Psalm 139:13]]). Every human being is made in His image ([[Genesis 1:27]]).

**Further reading:** Scott Klusendorf, *The Case for Life*. Greg Koukl, *Tactics*.`,
    talk: `**How to say it:** “So are you and I.” “It's not a potential human. It's a human with potential.”

**Questions to ask:**
- “At what point do you think it becomes a human being?”
- “Why then, and not a week earlier?”

Every answer besides fertilization is an arbitrary line ({{Columbo|skills/columbo}}).

**If they say “It's smaller” or “It can't survive on its own”:** Walk through SLED. “A newborn can't survive on its own either.”

**If they say “It's not conscious”:** “Neither is someone asleep or in a coma. Do they lose their value?”

**Bridge to the gospel:** If every human being bears God's image, then everyone, including you, will answer to Him. “Can I ask how you'd do by God's standard?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Psalm 139:13", "Jeremiah 1:5", "Luke 1:44", "Genesis 1:27"],
    related: ["objections/abortion", "skills/columbo"],
  },

  {
    id: "my-body",
    category: "Abortion",
    title: "My body, my choice",
    topic: "Bodily Autonomy and Abortion",
    lead: "Bodily autonomy is the principle that each person has the right to decide what happens to their own body. In the abortion debate it raises the question of whether the unborn child is part of the mother's body or a separate body.",
    alsoAsked: ["Keep your laws off my body", "No one can force me to stay pregnant", "It's my decision, not yours"],
    inBrief: "The child has a distinct body of their own, and no one's freedom includes the right to kill an innocent person.",
    tip: "many saying this are scared or hurt. Win the person, not the point.",
    otherViews: [
      { name: "Bodily autonomy view", text: "Even if the unborn is a person, no one can be required to use their body to sustain another." },
      { name: "Christianity", text: "Both mother and child are made in God's image, and our bodies ultimately belong to God, not to ourselves." },
    ],
    sources: ["Abolitionist Rising", "Greg Koukl"],
    oneLiner: "You have rights over your body. But there are two bodies here, and one is a child.",
    askBack: "Does your right to your body include the right to end someone else's life?",
    short: `The unborn child has their own body: their own DNA, heartbeat, blood type, and often a different sex from the mother. Being inside someone doesn't make you part of them.

No one's freedom includes the right to kill an innocent person.`,
    deep: `**Two bodies:** The unborn child has their own body: their own DNA, heartbeat, and blood type (which can differ from the mother's), and often a different sex from the mother. Being inside someone does not make a person part of them.

**The limits of freedom:** No one's freedom includes the right to kill an innocent person ([[Genesis 9:6]], [[Exodus 20:13]]).

**Testing the slogan:** Few people would say “my body, my choice” justifies a mother taking a drug in pregnancy that she knows will harm her baby. That reaction shows a shared intuition that the child has a body worth protecting.

**For Christians:** The body is not ultimately one's own. Believers were bought with a price ([[1 Corinthians 6:19-20]]).

**Further reading:** Greg Koukl, *Tactics*. Abolitionist Rising on equal protection. See also {{“It's just a clump of cells”|objections/clump-of-cells}}.`,
    talk: `**How to say it:** “You have rights over your body. But there are two bodies here.” “Being inside someone doesn't make you part of them.”

**Questions to ask:**
- “Does your right to your body include ending someone else's life?”
- “Should a pregnant mother be free to take a drug she knows will harm her baby?”

If they say no, they already agree the child's body matters.

**Tone:** Many people who say this are scared, angry, or hurt. Don't win the point and lose the person. Ask questions ({{Columbo|skills/columbo}}).

**Bridge to the gospel:** “We all want to be in charge of our own lives. The Bible says we'll each answer to God for how we've lived. Can I ask you a few questions?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Genesis 9:6", "Exodus 20:13", "1 Corinthians 6:19-20"],
    related: ["objections/abortion", "objections/clump-of-cells"],
  },

  {
    id: "rape-incest",
    category: "Abortion",
    title: "What about rape or incest?",
    topic: "Abortion in Cases of Rape",
    lead: "This question asks whether abortion is justified when a pregnancy results from rape or incest. It involves both a real victim of a grave crime and the child conceived.",
    alsoAsked: ["Should a rape victim be forced to carry the baby?", "What about a pregnancy from incest?", "Surely there should be exceptions"],
    inBrief: "Rape is evil and deserves justice, but the child is equally human and should not die for the crime of the father.",
    tip: "you may be talking to a survivor. Listen first.",
    otherViews: [
      { name: "Pro-choice", text: "Forcing a rape victim to continue a pregnancy adds to the violation she has already suffered." },
      { name: "Pro-life with exceptions", text: "Abortion is wrong, but laws may allow exceptions for rape and incest as a compromise or out of compassion." },
      { name: "Christianity (abolitionist)", text: "The woman deserves care and justice, the rapist deserves punishment, and the child deserves the same protection as every child." },
    ],
    sources: ["Russell Hunter", "Abolitionist Rising"],
    oneLiner: "Rape is evil and the rapist should be punished. The child shouldn't die for his crime.",
    askBack: "If the child is a human being, should how they were conceived decide whether they live?",
    short: `Rape is a horrible crime. The woman is a real victim, and she deserves care, protection, and justice.

But abortion doesn't undo the rape. It adds a second victim. The child is just as human and just as made in God's image as any other. God's law says children are not put to death for the sins of their fathers ([[Deuteronomy 24:16]]).`,
    deep: `**The crime:** Rape is a horrible crime. The woman is a real victim, and she deserves care, protection, and justice. God sees, and He will bring perfect justice to the rapist. He is near to the brokenhearted ([[Psalm 34:18]]) and heals.

**Where God's law places the penalty:** In God's law the rapist bears the penalty, while the woman has done nothing deserving punishment ([[Deuteronomy 22:25-26]]). See {{Capital Punishment|convictions/capital-punishment}}.

**The child:** Abortion does not undo the rape. It adds a second victim. A child conceived in rape is just as human and just as made in God's image as any other ([[Genesis 9:6]], [[Psalm 139:13]]). God's law says children are not put to death for the sins of their fathers ([[Deuteronomy 24:16]]), and He forbids killing the innocent ([[Exodus 23:7]]).

**Why abolitionists reject exceptions** (Russell Hunter, Abolitionist Rising): If abortion is murder, it is murder in every case. Laws with a rape exception treat some children as less worthy of protection based on who their father is.

**How often it happens:** Pregnancies from rape or incest account for a small fraction of abortions. Most abortions are for other reasons.

**Real lives:** Many people conceived in rape are alive today and glad to be.

**Further reading:** Abolitionist Rising on equal protection. See also {{Abortion|convictions/abortion}}.`,
    talk: `**Start with compassion:** You may be talking to a survivor, or to someone who loves one. Listen first. Say how sorry you are. Arguments can wait.

**How to say it:** “Rape is evil, and the rapist should be punished.” “The child shouldn't die for his crime.”

**Questions to ask:**
- “If the child is a human being, should how they were conceived decide whether they live?”
- “If I could show you abortion is wrong in this case, would you agree it's wrong in the others?”

If yes, the hard case isn't really their reason ({{Columbo|skills/columbo}}).

**If they say “You'd force her to relive it”:** “She deserves every kind of help. But killing her child doesn't take the rape away.”

**If they've had an abortion after rape:** Be very gentle. See {{“I've had an abortion”|objections/had-abortion}}.

**Bridge to the gospel:** God will judge the rapist perfectly. That justice reaches all of us, so we all need mercy. ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Deuteronomy 24:16", "Genesis 9:6", "Psalm 139:13", "Exodus 23:7"],
    related: ["objections/abortion", "objections/had-abortion"],
  },

  {
    id: "mothers-life",
    category: "Abortion",
    title: "What if the mother's life is at risk?",
    topic: "Abortion and the Mother's Life",
    lead: "This question asks whether abortion is justified when a pregnancy threatens the mother's life. It turns on the difference between treating a mother and intentionally killing her child.",
    alsoAsked: ["What about ectopic pregnancies?", "Should a woman have to die for her baby?", "Isn't abortion sometimes medically necessary?"],
    inBrief: "Doctors should try to save both lives; treating a mother when the child dies unintentionally differs from intentionally killing the child.",
    tip: "show you care about the mother too. Then explain intent.",
    otherViews: [
      { name: "Pro-choice", text: "Abortion is health care, and a woman's life and health always come before the pregnancy." },
      { name: "Pro-life with exceptions", text: "Abortion is wrong, but laws should allow an exception when the mother's life is at risk." },
      { name: "Christianity (abolitionist)", text: "Both lives are precious; life-saving treatment is right, but intentionally killing the child is never necessary." },
    ],
    sources: ["Abolitionist Rising"],
    oneLiner: "Doctors should try to save both. Saving the mother isn't the same as killing the child.",
    askBack: "Is treating a sick mother the same as intentionally killing her child?",
    short: `The goal in any medical emergency should be to save both patients. When a mother is treated for a life-threatening condition and the child dies as an unintended result, that isn't abortion.

Abortion is the intentional killing of the child. That's never medically necessary.`,
    deep: `**The goal is two patients:** In any medical emergency in pregnancy, the goal should be to save both mother and child.

**The key distinction is intent:** When a mother is treated for a life-threatening condition and the child dies as an unintended result, that is not abortion. Abortion is the intentional killing of the child, and that is never medically necessary.

**Examples:**
- **Ectopic pregnancy:** the embryo implants outside the womb, usually in a fallopian tube, where it cannot survive, and left untreated it can threaten the mother's life. Treatment aims to save her life.
- **Emergency early delivery:** when a serious condition threatens the mother, delivering the baby early aims to save life. Later in pregnancy the child may survive with intensive care.

In both cases the child's death, if it happens, is a tragedy, not the goal.

**Abolitionist bills:** Model legislation promoted by abolitionists (such as Free the States) generally protects life-saving medical care while still treating the intentional killing of the child as murder. Bill language varies and changes over time.

**How often it happens:** Cases where the mother's life is truly at risk are a small fraction of abortions. A rare hard case does not justify permitting every abortion.

**The principle:** Both mother and child bear God's image ([[Genesis 9:6]]), and deliberately killing the innocent is forbidden ([[Exodus 20:13]]).

**Further reading:** Abolitionist Rising and Free the States on model legislation. See also {{Abortion|convictions/abortion}}.`,
    talk: `**How to say it:** “Doctors should try to save both.” “Saving the mother isn't the same as killing the child.”

**Questions to ask:**
- “Is treating a sick mother the same as intentionally killing her child?”
- “If we agree on the rare emergency, what about the other cases?”

**If they say “So women should just die?”:** “No. Treat her. Life-saving care is right. Aiming to kill the child is the difference.”

**If they bring up ectopic pregnancy:** “Treating that saves the mother's life. The child can't survive there, and no one is aiming to kill.”

**If they ask about a specific law:** Check current abolitionist bill language before quoting it.

**Bridge to the gospel:** “Every life is precious to God, yours included. Can I ask whether you're ready to meet Him?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Exodus 20:13", "Genesis 9:6"],
    related: ["objections/abortion", "objections/rape-incest"],
  },

  {
    id: "men-opinion",
    category: "Abortion",
    title: "Men can't have an opinion on abortion",
    topic: "Men and the Abortion Debate",
    lead: "This objection claims that men should not speak about abortion because they cannot become pregnant. It raises the question of whether an argument's truth depends on who makes it.",
    alsoAsked: ["No uterus, no opinion", "You'll never be pregnant, so it's not your business", "Why do men get to decide?"],
    inBrief: "An argument stands or falls on its own merits, and God calls everyone to speak up for those who can't.",
    tip: "stay calm. Don't take the bait.",
    sources: ["Abolitionist Rising"],
    oneLiner: "Whether killing an innocent person is wrong doesn't depend on who says it.",
    askBack: "Would you say a man can't speak against slavery or child abuse unless he's personally affected?",
    short: `An argument stands or falls on its own, not on the speaker. And half the babies killed by abortion are boys, so men aren't outsiders to this.

God calls everyone, men included, to speak up for those who can't ([[Proverbs 31:8-9]]).`,
    deep: `**Arguments, not speakers:** An argument stands or falls on its own, not on who makes it. Rejecting a claim because of the speaker's identity is a logical fallacy (an *ad hominem*).

**Men are not outsiders:** About half the babies killed by abortion are boys, and every child has a father.

**Applied consistently:** If only women may speak, then pro-choice men must stay silent too, and the men who decided *Roe v. Wade* had no right to rule on it. Most people who make this objection do not hold that. The claim undermines itself ({{Suicide|skills/suicide}}).

**Not men versus women:** Many women are pro-life and abolitionist. The issue is not men versus women but whether the unborn is a human being.

**The duty to speak:** God calls everyone, men included, to open their mouths for those who cannot speak ([[Proverbs 31:8-9]]) and to rescue those being led away to death ([[Proverbs 24:11]]). Knowing the right thing and not doing it is sin ([[James 4:17]]).

**Fathers matter:** Men are called to protect their children and to support the mothers of their children. Men who pressure women into abortion share in the guilt.

**Further reading:** Abolitionist Rising on the duty to speak. See also {{Abortion|convictions/abortion}}.`,
    talk: `**How to say it:** “Whether killing an innocent person is wrong doesn't depend on who says it.” “Half the babies killed are boys.”

**Questions to ask:**
- “Would you say a man can't speak against slavery or child abuse?”
- “So should pro-choice men stay silent too?”

**If they say “You'll never understand”:** “That's fair. I'll never carry a child. But I can still ask whether the child is a human being.”

**Then return to the main question:** “What is the unborn?” ({{Abortion|objections/abortion}})

**Bridge to the gospel:** “I'm not speaking as someone better than you. I've broken God's law too. Can I show you what I mean?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Proverbs 31:8-9", "Proverbs 24:11", "James 4:17"],
    related: ["objections/abortion", "skills/suicide"],
  },

  {
    id: "had-abortion",
    category: "Abortion",
    title: "I've had an abortion",
    topic: "Forgiveness After Abortion",
    lead: "Many women and men carry guilt and grief after being involved in an abortion. The Bible treats abortion as a serious sin and also offers complete forgiveness through Christ.",
    alsoAsked: ["Can God forgive me for an abortion?", "I paid for my girlfriend's abortion", "I don't think I can be forgiven for what I did"],
    inBrief: "Abortion is a serious sin, but it is not beyond the blood of Christ; those who repent and trust Him are fully forgiven.",
    tip: "thank them for telling you. Slow down and listen.",
    sources: ["Living Waters", "Abolitionist Rising"],
    oneLiner: "Thank you for telling me. It was wrong, but Jesus fully forgives, even this.",
    askBack: "Can I tell you how God can completely forgive and clean someone's conscience?",
    short: `I'm not going to pretend it was nothing, and I'm not going to pile on either. I'm a sinner too.

Abortion is a serious sin, but it is not beyond the blood of Christ. Jesus took the punishment for sinners who repent and trust Him, and He removes their sin completely ([[Psalm 103:12]], [[Isaiah 1:18]]). You can be fully forgiven and clean before God.`,
    deep: `**A serious sin:** Abortion takes the life of a human being made in God's image, and Scripture does not treat it lightly. Most people who have been involved in one already carry guilt.

**Not beyond forgiveness:** Abortion is not beyond the blood of Christ. Jesus took the punishment for sinners who repent and trust Him, and He removes their sin completely ([[Psalm 103:12]], [[Isaiah 1:18]]). “If we confess our sins, He is faithful and righteous to forgive us our sins” ([[1 John 1:9]]).

**Truth and grace together:** Truth without grace crushes. Comfort without truth leaves a person guilty before God. The gospel names the sin honestly and then points to the cross.

**One sin among many:** Abortion is not the only sin that separates people from God. Everyone has broken His Law and needs the same Savior ({{Way of the Master|paths/way-of-the-master}}).

**Former murderers forgiven:** Paul persecuted and helped kill Christians, and God saved him and used him. The church in Corinth was full of people with ugly pasts: “such were some of you; but you were washed” ([[1 Corinthians 6:11]]).

**After coming to Christ:** There is no condemnation for those in Christ Jesus ([[Romans 8:1]]). Many find help in a post-abortion recovery ministry at a Bible-believing church.

**Men too:** Fathers who encouraged or paid for an abortion carry guilt as well and need the same forgiveness.

**Further reading:** Living Waters resources on the gospel and forgiveness. See also {{Equality of Sin|convictions/equality-of-sin}} and {{Abortion|convictions/abortion}}.`,
    talk: `**Start here:** “Thank you for telling me.” Listen. Don't rush to the next point.

**Don't minimize it, and don't pile on:** “I'm not going to pretend it was nothing. And I'm a sinner too.”

**How to say it:** “It was wrong. But Jesus fully forgives, even this.” “You can be completely clean before God.”

**Questions to ask:**
- “Can I tell you how God can completely forgive someone?”
- “Do you feel like God could never forgive you?”

**If they say “God could never forgive me”:** “Paul helped kill Christians, and God forgave him” ([[1 Corinthians 6:11]]). “The cross is big enough.”

**Don't make it the only sin:** Walk through the Law like you would with anyone, so they see you need the same Savior.

**If they're a man:** Fathers who pushed for or paid for an abortion need the same forgiveness. Say so gently.

**After they turn to Christ:** “There is no condemnation” ([[Romans 8:1]]). Point them to a Bible-believing church and a post-abortion recovery ministry.

**Bridge to the gospel:** Go straight to the cross and repentance ({{Way of the Master|paths/way-of-the-master/6}}).`,
    verses: ["1 John 1:9", "Psalm 103:12", "Isaiah 1:18", "1 Corinthians 6:11", "Romans 8:1"],
    related: ["paths/way-of-the-master", "objections/abortion"],
  },

  {
    id: "incrementalism",
    category: "Abortion",
    title: "We should reduce abortion step by step",
    topic: "Abolition and Incrementalism",
    lead: "Incrementalism is the strategy of restricting abortion step by step, through limits such as heartbeat bills or gestational bans. Abolitionism calls instead for abortion to be ended immediately, with equal protection for every child.",
    alsoAsked: ["Isn't saving some babies better than none?", "Shouldn't we take what we can get politically?", "Why not support heartbeat bills?"],
    inBrief: "If abortion is murder, laws should not permit any of it; abolitionists call for immediate equal protection for every child from fertilization.",
    tip: "often this is a fellow believer. Disagree charitably.",
    otherViews: [
      { name: "Incremental pro-life", text: "Laws that restrict abortion in steps save lives now and move culture toward ending abortion." },
      { name: "Abolitionist", text: "Laws that regulate abortion still permit murder; Christians should demand immediate, total abolition." },
    ],
    sources: ["Russell Hunter", "Abolitionist Rising"],
    oneLiner: "If abortion is murder, laws shouldn't allow some of it. We should call for it to end now.",
    askBack: "Would we pass a law that says child abuse is legal until a certain age?",
    short: `Abolitionists believe laws like heartbeat bills or 15-week bans, while well meant, still permit killing before that point and regulate murder instead of ending it. God condemns unjust laws ([[Isaiah 10:1-2]]).

The call is immediate abolition: equal protection under the law for every child, from fertilization.`,
    deep: `**The two approaches:**
- **Incrementalism:** pass laws that restrict abortion in steps (heartbeat bills, 15-week bans, regulations), often with exceptions, hoping to reduce abortion over time
- **Abolition:** call for abortion to be treated as homicide now, with equal protection under the law for every child from fertilization

**The abolitionist case** (Russell Hunter, Abolitionist Rising, Free the States):
- Laws like heartbeat bills or 15-week bans, while well meant, still permit killing before that point and regulate murder instead of ending it
- Pro-life laws that set conditions on abortion end up implying the rest is allowed
- God condemns those who enact unjust decrees ([[Isaiah 10:1-2]]) and those who justify the wicked ([[Proverbs 17:15]])
- The church is called to rescue those being led to death ([[Proverbs 24:11]])
- Christians should obey God rather than men ([[Acts 5:29]]), including judges who allow abortion

**The historical model:** The abolition of slavery. Many abolitionists demanded that slavery end immediately rather than be regulated or phased out.

**Equal protection:** In the abolitionist view, the law should not grant blanket immunity to anyone who intentionally kills a child. Abolitionists also emphasize mercy and the gospel for the mothers involved.

**How Christians differ:** Many pro-life Christians disagree with this approach and support incremental laws and exceptions as steps toward ending abortion. See {{Abortion|convictions/abortion}}.

**Further reading:** Russell Hunter and Abolitionist Rising on abolition and immediatism. Free the States on model legislation. See also {{God's Law & Civil Government|convictions/theonomy}}.`,
    talk: `**How to say it:** “If abortion is murder, laws shouldn't allow some of it.” “We should call for it to end now.”

**Questions to ask:**
- “Would we pass a law saying child abuse is legal until a certain age?”
- “What does a 15-week ban say about the child at 14 weeks?”

**If they say “Saving some is better than none”:** “Every child saved matters. But the law should protect all of them, not decide which ones.”

**If they're a pro-life Christian:** Disagree charitably. Keep the focus on the child and on the gospel, not on attacking other believers.

**Bridge to the gospel:** The deepest problem isn't a law. It's sin in every heart, ours included. ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Isaiah 10:1-2", "Proverbs 17:15", "Proverbs 24:11", "Acts 5:29"],
    related: ["objections/abortion"],
  },

  // --- About Evangelism ---
  {
    id: "keep-it-to-yourself",
    category: "About Evangelism",
    title: "Keep your religion to yourself",
    topic: "Evangelism and Religious Privacy",
    lead: "Many people hold that religious faith is a private matter that should not be shared uninvited. Christianity has always understood the gospel as public news meant for every person.",
    alsoAsked: ["Religion is a private thing", "Don't push your religion on people", "I don't talk about religion"],
    inBrief: "Jesus commanded His followers to share the gospel with everyone; sharing in love, while respecting the hearer's freedom, is not imposing.",
    tip: "stay friendly. Agree that respect matters, then explain why you speak.",
    otherViews: [
      { name: "Secular privatism", text: "Religion is a personal matter best kept out of public conversation and public life." },
      { name: "Judaism", text: "Most Jewish communities do not actively seek converts, though they accept sincere ones." },
      { name: "Islam", text: "Muslims are encouraged to invite others to Islam, a practice called da'wah." },
      { name: "Christianity", text: "The gospel is good news for everyone, so believers are commanded to make it known, gently and openly." },
    ],
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "I get that. But if I believed you were in danger and said nothing, would that be loving?",
    askBack: "Is there anything you think is true enough that everyone should hear it?",
    short: `I understand why it can feel pushy. But I'm not trying to win an argument. If what Jesus said is true, everyone will stand before God one day, and I'd be a terrible friend to keep quiet about that.

You're free to disagree, and I'll respect that. I'd just rather tell you and be wrong than stay silent and be right.`,
    deep: `**The claim:** Faith belongs to private life, and raising it with others is intrusive or rude.

**Everyone shares what matters to them:** People talk freely about politics, health, sports, and causes they care about. Faith is not the only subject that touches deeply held beliefs, and it is not uniquely private.

**The claim defeats itself:** “Keep your beliefs to yourself” is itself a belief, shared out loud with someone else. A statement that breaks its own rule is self-defeating ({{Suicide|skills/suicide}}).

**A command, not a hobby:** Jesus told His followers to go into all the world and preach the gospel ([[Mark 16:15]]). For a Christian, keeping it private would be disobedience.

**The apostles' example:** When the authorities ordered Peter and John to stop speaking in Jesus' name, they answered that they could not stop speaking about what they had seen and heard ([[Acts 4:19-20]]).

**The motive:** “The love of Christ controls us” ([[2 Corinthians 5:14]]). If what Jesus said is true, everyone will stand before God one day, and silence would not be kindness.

**Sharing is not forcing:** Offering a message leaves the hearer free to disagree or walk away. See {{“You're forcing your beliefs on me”|objections/forcing-beliefs}}.

**Further reading:** {{The Biblical Case for Evangelism|skills/why-evangelize}}.`,
    talk: `**How to say it:** Agree that it can feel pushy. Make clear you aren't trying to win an argument: “I'd rather tell you and be wrong than stay silent and be right.”

**Respect the person:** Ask permission, listen, and leave when they want to leave. Sharing isn't forcing. See {{“You're forcing your beliefs on me”|objections/forcing-beliefs}}.

**Questions to ask:**
- “Is there anything you think is true enough that everyone should hear it?”
- “If you knew someone was in danger, would you say something?”

**If they say “Religion is private”:** Gently point out that “keep it to yourself” is a belief too, shared out loud ({{Suicide|skills/suicide}}). Keep it light, not a gotcha.

**Bridge to the gospel:** “You're free to disagree. Can I ask you one question? Do you think you're a good person?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Mark 16:15", "Acts 4:19-20", "2 Corinthians 5:14"],
    related: ["objections/forcing-beliefs", "skills/why-evangelize"],
  },

  {
    id: "forcing-beliefs",
    category: "About Evangelism",
    title: "You're forcing your beliefs on me",
    topic: "Persuasion and Coercion",
    lead: "The charge that Christians force their beliefs on others raises the difference between persuading someone and compelling them. The New Testament pattern of evangelism is open persuasion that leaves the hearer free.",
    alsoAsked: ["Stop shoving religion down my throat", "Don't push your beliefs on me", "You're trying to convert me"],
    inBrief: "Forcing means coercion; the gospel is offered by persuasion, and genuine faith can only be freely received, never compelled.",
    tip: "check your tone first. If they feel pushed, slow down.",
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "I'm not forcing anything. You're free to walk away. I'm offering what I think is true.",
    askBack: "What would forcing look like, compared to just telling you?",
    short: `Forcing would mean making you believe, or punishing you if you don't. I can't do that, and I wouldn't want to. Faith has to be your own.

All I'm doing is telling you what I believe and why. You get to decide what to do with it. Can I ask you one question before you go?`,
    deep: `**Definitions:** Forcing (coercion) means making someone believe or act through pressure, threat, or punishment. Persuasion means offering reasons and leaving the other person free to accept or reject them.

**The New Testament pattern:** Paul “persuaded men” ([[2 Corinthians 5:11]]) and reasoned in the marketplace every day ([[Acts 17:17]]), but he never coerced anyone. Conversation is how free people share ideas.

**Faith cannot be forced:** Saving faith is a person's own trust in Christ. Pressure can produce outward conformity, but not genuine belief.

**The messenger's character:** The Lord's servant must not be quarrelsome but kind, correcting opponents with gentleness ([[2 Timothy 2:24-25]]). Believers are to act wisely toward outsiders, with speech that is gracious ([[Colossians 4:5-6]]).

**The objection turned around** (Koukl): Telling someone not to share a view is itself sharing a view about what that person should do. Both sides are doing the same thing: making a case.

**A historical note:** At times in history, Christians used the power of the state to compel religious conformity. Such coercion departs from the New Testament, where the apostles persuaded others and suffered rather than compelling anyone.

**Further reading:** Greg Koukl, *Tactics*. See {{Tactics|convictions/tactics}}.`,
    talk: `**How to say it:** “Forcing would mean making you believe, or punishing you if you don't. I can't do that, and I wouldn't want to. Faith has to be your own.”

**Questions to ask:**
- “What would forcing look like, compared to just telling you?”
- “Can I ask you one question before you go?”

**Turn it around gently** (Koukl): “When you tell me not to share my view, you're sharing yours about what I should do. That's fine. It's what we're both doing.”

**Watch your tone:** If someone feels pushed, slow down, ask questions, and let them lead. Be kind, not quarrelsome ([[2 Timothy 2:24-25]]). See {{Staying Calm|skills/staying-calm}}.

**Know when to stop:** If they're done, thank them, offer a tract, and go. See {{Wrapping Up|openers/wrapping-up}}.

**Bridge to the gospel:** If they're willing to keep talking, ask whether they think they're a good person ({{Way of the Master|paths/way-of-the-master/2}}).`,
    verses: ["2 Corinthians 5:11", "2 Timothy 2:24-25", "Colossians 4:5-6"],
    related: ["objections/keep-it-to-yourself", "skills/staying-calm"],
  },

  {
    id: "use-words-if-necessary",
    category: "About Evangelism",
    title: "Preach the gospel; use words if necessary",
    topic: "The Necessity of Verbal Witness",
    lead: "“Preach the gospel at all times; use words if necessary” is a popular saying that suggests a Christian's example is witness enough. The question is whether the gospel can be communicated without being spoken.",
    alsoAsked: ["I just let my life do the talking", "I witness by how I live", "Actions speak louder than words"],
    inBrief: "The gospel is news about what Christ did, so it must be told; a godly life supports the message but cannot replace it.",
    tip: "usually from a fellow Christian. Agree that example matters first.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "A good life matters, but nobody can see the gospel. It has to be told.",
    askBack: "How would someone learn that Jesus died for their sins just by watching you?",
    short: `I agree our lives should match what we say. But the gospel is news: Jesus died for sinners and rose again. People can see that you're kind, but they can't see that from your kindness.

The Bible says faith comes from hearing ([[Romans 10:17]]). How will they hear without someone telling them?`,
    deep: `**The saying:** It is commonly attributed to Francis of Assisi, but it is not from Scripture, and there is no record that he said it. Francis was known as a preacher.

**The gospel is news:** The gospel is a message about events: Christ died for our sins, was buried, and rose again ([[1 Corinthians 15:3-4]]). Kindness can be seen, but no one can learn from kindness alone that Jesus died for sinners.

**Faith comes by hearing:** Paul asks how people will believe in One they have not heard of, and how they will hear without a preacher ([[Romans 10:14]]). Faith comes from hearing the word of Christ ([[Romans 10:17]]). God chose the message preached to save those who believe ([[1 Corinthians 1:21]]).

**Both, not either:** Believers are to let their light shine so that others see their good works and glorify the Father ([[Matthew 5:16]]), and they are also to speak. Good works without words point to the believer; words without good works sound empty.

**The cost of silence:** Many good people never hear the gospel from Christian friends who assumed their example was enough.

**Further reading:** {{The Biblical Case for Evangelism|skills/why-evangelize}}. See also {{“Shouldn't you build a relationship first?”|objections/relationship-first}}.`,
    talk: `**Who says it:** Usually a fellow Christian, often sincerely. Agree first: our lives should match what we say.

**How to say it:** “People can see that you're kind. They can't see from your kindness that Jesus died for their sins.”

**Questions to ask:**
- “How would someone learn that Jesus died for their sins just by watching you?”
- “How will they hear without someone telling them?” ([[Romans 10:14]])

**If they say “Actions speak louder than words”:** “They do. But actions can't explain the cross. Faith comes from hearing” ([[Romans 10:17]]).

**If they say “Francis of Assisi said it”:** “There's no record he did. He was known as a preacher.”

**Encourage, don't scold:** Many believers are simply afraid. Offer to go out together, or suggest an easy start like {{Handing Out Tracts|skills/handing-out-tracts}}.`,
    verses: ["Romans 10:14", "Romans 10:17", "1 Corinthians 1:21", "Matthew 5:16"],
    related: ["skills/why-evangelize", "objections/relationship-first"],
  },

  {
    id: "street-preaching-turns-off",
    category: "About Evangelism",
    title: "Street preaching doesn't work / turns people off",
    topic: "Open-Air Preaching",
    lead: "Open-air or street preaching is proclaiming the gospel in public to passersby. Critics, including some Christians, argue that it does not work or that it drives people away from the faith.",
    alsoAsked: ["Nobody gets saved from street preachers", "Street preachers give Christians a bad name", "Isn't that just yelling at people?"],
    inBrief: "Public preaching is modeled throughout Scripture; done with love and clarity it reaches people churches don't, and the results belong to God.",
    tip: "find out if the method bothers them, or a bad example.",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle"],
    oneLiner: "Some are turned off, but Jesus and the apostles preached in public, and people were saved.",
    askBack: "Is it the message that bothers you, or the way you've seen it done?",
    short: `Bad street preaching does turn people off: angry, condemning, or showy. But the method itself is biblical. Jesus preached on hillsides, Peter preached to a crowd and three thousand were saved, and Paul reasoned in the marketplace every day.

Done with love and clarity, it reaches people who would never set foot in a church.`,
    deep: `**The concern:** Bad street preaching does turn people off: angry, condemning, or showy. The question is whether the method itself is the problem.

**Biblical precedent:**
- Noah, a preacher of righteousness ([[2 Peter 2:5]])
- Jonah, crying out through Nineveh ([[Jonah 3:4]])
- John the Baptist, preaching to crowds in the wilderness
- Jesus, preaching repentance in public ([[Matthew 4:17]]) and teaching on hillsides
- Peter at Pentecost, where about three thousand were saved
- Paul, reasoning in the marketplace every day ([[Acts 17:17]])

See {{The Biblical Case for Evangelism|skills/why-evangelize}}.

**Church history:** In the 1700s, George Whitefield and John Wesley preached in open fields to large crowds, reaching many people who never attended church.

**Results belong to God:** God's Word does not return empty ([[Isaiah 55:11]]). One plants, another waters, and God gives the growth ([[1 Corinthians 3:6]]). Visible responses on the spot are not the only measure.

**Reaching people churches don't:** Many people will never visit a church or read a Bible, but they will walk past a preacher.

**Some offense is unavoidable:** The cross itself offends (1 Corinthians 1:23). The goal is that the message offends, not the messenger.

**Marks of sound open-air preaching:**
- Friendly and clear, not angry
- Uses the Law to show sin, then the cross ({{Way of the Master|paths/way-of-the-master}})
- Calm with hecklers ({{Staying Calm|skills/staying-calm}})
- Aware of legal rights in public ({{Your Rights in Public|skills/your-rights}})

**Further reading:** Living Waters open-air preaching training. Ray Comfort, *Hell's Best Kept Secret*. Cliff and Stuart Knechtle's campus Q&A videos.`,
    talk: `**If they're a Christian:** Be respectful. Not everyone is called to open-air preaching. “We may do it differently, but we're both called to tell people about Jesus.”

**If they've seen it done badly:** Agree. “I've seen angry preachers too. That's not how Jesus did it.”

**Questions to ask:**
- “Is it the message that bothers you, or the way you've seen it done?”
- “Where else would people who never go to church hear the gospel?”

**If they say “Nobody gets saved that way”:** “Peter preached to a crowd and three thousand were saved. And God gives the growth, not us” ([[1 Corinthians 3:6]]).

**Let your tone answer the critics:** Be friendly and clear, not angry. Make sure it's the message that offends, not you.

**Bridge to the gospel:** If they aren't a believer: “Can I ask what a preacher would ask? Do you think you're a good person?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Acts 17:17", "Isaiah 55:11", "1 Corinthians 3:6", "Jonah 3:4"],
    related: ["skills/why-evangelize", "skills/your-rights", "skills/staying-calm"],
  },

  {
    id: "relationship-first",
    category: "About Evangelism",
    title: "Shouldn't you build a relationship first?",
    topic: "Friendship and Stranger Evangelism",
    lead: "Some Christians hold that the gospel should be shared only after a relationship has been built. The question is whether sharing with strangers is appropriate, and how friendship and urgency fit together.",
    alsoAsked: ["You have to earn the right to be heard", "People don't care how much you know until they know how much you care", "Isn't it rude to talk to strangers about God?"],
    inBrief: "Friendships matter, but Scripture shows the gospel shared with strangers too, and no one is promised tomorrow.",
    tip: "usually a fellow Christian. Affirm sharing with friends first.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "I share with friends too. But Jesus talked to strangers, and no one is promised tomorrow.",
    askBack: "If you knew a stranger was about to step into traffic, would you wait until you were friends to warn them?",
    short: `It's not either-or. I want to share with people I know well. But many people I meet I'll only see once. Jesus talked to a stranger at a well, Philip ran up to a stranger in a chariot, and both conversations changed lives.

Nobody is promised tomorrow, so I'd rather say something today than wait for a perfect moment that may never come.`,
    deep: `**Not either-or:** Scripture shows the gospel shared both with people the messenger knew well and with people met only once.

**Strangers in Scripture:**
- Jesus and the woman at the well ([[John 4:7]])
- Philip and the Ethiopian official in the chariot ([[Acts 8:36-38]])
- Peter and the crowds at Pentecost
- Paul in the marketplace in Athens ([[Acts 17:17]])

The conversations at the well and the chariot both changed lives.

**Friends and family in Scripture:** Jesus sent a man He had healed home to tell his own people what the Lord had done for him ([[Mark 5:19]]). Paul taught publicly and from house to house ([[Acts 20:20]]).

**Urgency:** No one knows what tomorrow will bring ([[Proverbs 27:1]]). Now is the day of salvation ([[2 Corinthians 6:2]]). Many people met in passing will never be seen again.

**Long-term friendships:** Ongoing witness to family and coworkers matters. See {{Coworkers and Friends|openers/workplace-friends}}.

**The danger:** “Relationship first” can quietly become “relationship only,” and the gospel never comes up. See also {{“Use words if necessary”|objections/use-words-if-necessary}}.`,
    talk: `**How to say it:** “It's not either-or. I share with friends too. But Jesus talked to a stranger at a well.”

**Questions to ask:**
- “If you knew a stranger was about to step into traffic, would you wait until you were friends to warn them?”
- “Is there a friend you've been meaning to tell? What's holding you back?”

**If they say “You have to earn the right to be heard”:** “Kindness earns a hearing fast. Philip didn't know the man in the chariot.”

**If they say “It's rude to talk to strangers”:** “It depends how you do it. A friendly question isn't rude.” See {{Starting a Conversation|openers/starting}}.

**Keep the urgency kind:** “Nobody is promised tomorrow, so I'd rather say something today than wait for a perfect moment that may never come.”`,
    verses: ["John 4:7", "Acts 8:36-38", "Proverbs 27:1", "2 Corinthians 6:2"],
    related: ["objections/use-words-if-necessary", "openers/workplace-friends"],
  },

  {
    id: "why-do-you-care",
    category: "About Evangelism",
    title: "Why do you even care what I believe?",
    topic: "The Motive for Evangelism",
    lead: "People often ask why Christians care what others believe. The question goes to the motive behind evangelism, which Scripture locates in love for God and for people who will face judgment.",
    alsoAsked: ["What's it to you?", "Why can't you just leave people alone?", "Do you get points for converts?"],
    inBrief: "Christians share because they believe everyone will face God's judgment, and love does not stay silent when someone is in danger.",
    tip: "answer warmly. Your tone should show that you care.",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    oneLiner: "Because if this is true, your eternity is at stake, and I'd want someone to tell me.",
    askBack: "If you saw someone's house on fire, would you knock on the door even if they were a stranger?",
    short: `I care because I believe what the Bible says about death, judgment, and forgiveness. If I'm right, nothing matters more. If I'm wrong, you've lost five minutes.

I'm not out here to win points. Someone cared enough to tell me, and I'm grateful.`,
    deep: `**The motive is love:** “The love of Christ controls us” ([[2 Corinthians 5:14]]). Jesus came to seek and to save the lost ([[Luke 19:10]]).

**What is at stake:** Christians believe what the Bible says about death, judgment, and forgiveness: people die once and then face judgment ([[Hebrews 9:27]]). If that is true, nothing matters more. If it is false, the listener has lost a few minutes.

**The burning building:** A person who sees a house on fire shouts a warning to a stranger without asking permission first. Scripture calls believers to rescue those being taken away to death ([[Proverbs 24:11]]) and to snatch others out of the fire ([[Jude 1:23]]).

**The watchman:** God warned Ezekiel that a watchman who sees danger and stays silent is held responsible ([[Ezekiel 33:8]]). Silence is not neutral. See {{The Biblical Case for Evangelism|skills/why-evangelize}}.

**Gratitude:** Many Christians share because someone once cared enough to tell them.

**Not about winning:** The aim is not to win points or arguments but to rescue people.`,
    talk: `**How to say it:** “If I'm right, nothing matters more. If I'm wrong, you've lost five minutes.”

**Make it personal:** “Someone cared enough to tell me, and I'm grateful.”

**Questions to ask:**
- “If you saw someone's house on fire, would you knock on the door even if they were a stranger?”
- “If you believed what I believe, would you keep quiet?”

**If they say “You just want converts”:** “I'm not out here to win points. You're free to say no.”

**Let them see it:** Your tone should make it obvious that you care. Smile, listen, and don't argue to win.

**Bridge to the gospel:** “Can I show you why I think it matters? Do you think you're a good person?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["2 Corinthians 5:14", "Proverbs 24:11", "Jude 1:23", "Luke 19:10"],
    related: ["skills/why-evangelize", "paths/way-of-the-master"],
  },

  {
    id: "not-your-place",
    category: "About Evangelism",
    title: "Only pastors should do that",
    topic: "Every Believer as a Witness",
    lead: "Some believe evangelism is the work of pastors, missionaries, or specially gifted Christians. The New Testament presents sharing the gospel as the calling of every believer, with church leaders equipping the rest.",
    alsoAsked: ["I'm not gifted at evangelism", "Leave that to the professionals", "That's what missionaries are for"],
    inBrief: "Every Christian is Christ's ambassador; pastors equip the church, but ordinary believers have carried the gospel from the start.",
    tip: "be humble. This often comes from fear, not theology.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Every Christian is called to share. In Acts, ordinary believers spread it everywhere.",
    askBack: "Where in the Bible does it say evangelism is only for pastors?",
    short: `Pastors have an important role, but they aren't the only ones sent. When persecution scattered the early church, the apostles stayed in Jerusalem and ordinary believers went everywhere preaching the word ([[Acts 8:4]]).

Every believer is an ambassador for Christ ([[2 Corinthians 5:20]]) and called to proclaim Him ([[1 Peter 2:9]]).`,
    deep: `**Ordinary believers spread the gospel:** When persecution scattered the church in Jerusalem, the apostles stayed behind, and those who were scattered went about preaching the word (Acts 8:1-4; [[Acts 8:4]]).

**Every believer is:**
- An ambassador for Christ ([[2 Corinthians 5:20]])
- Part of a royal priesthood called to proclaim God's excellencies ([[1 Peter 2:9]])
- Ready to give an answer for the hope within ([[1 Peter 3:15]])
- A witness, starting where they live ([[Acts 1:8]])

**Pastors equip; believers do the work:** Christ gave pastors and teachers to equip the saints for the work of service ([[Ephesians 4:11-12]]).

**Men and women:** Women shared the gospel in the New Testament too. The Samaritan woman told her town about Jesus (John 4:28-30), and Priscilla helped explain the way of God more accurately to Apollos ([[Acts 18:26]]). Evangelism is distinct from the office of pastor or elder ({{Women in Ministry|convictions/women-in-ministry}}).

**Gifts and settings differ:** Not every believer is called to open-air preaching, but every believer is called to share in some way.

**Within the church:** Evangelism is best done connected to a local church, with training, partners, and accountability ({{The Church|convictions/church}}).

**Further reading:** {{The Biblical Case for Evangelism|skills/why-evangelize}}.`,
    talk: `**Who says it:** Usually a fellow Christian, often one who feels unqualified or afraid. Be gentle.

**How to say it:** “Pastors have an important role, but they aren't the only ones sent. In Acts, ordinary believers spread it everywhere.”

**Questions to ask:**
- “Where in the Bible does it say evangelism is only for pastors?”
- “Who first told you about Jesus? Were they a pastor?”

**If they say “I'm not gifted”:** “You don't need a special gift to tell someone what Jesus did. Start small.” A tract is an easy first step ({{Handing Out Tracts|skills/handing-out-tracts}}).

**Stay humble and teachable:** Get trained, go with others, and stay accountable to your church.

**Invite them:** “Want to come with me sometime? You can just watch.”`,
    verses: ["Acts 8:4", "2 Corinthians 5:20", "1 Peter 2:9", "Ephesians 4:11-12"],
    related: ["skills/why-evangelize", "objections/keep-it-to-yourself"],
  },
  {
    id: "god-knows-heart",
    category: "The Gospel & Salvation",
    title: "God knows my heart",
    topic: "The Human Heart Before God",
    lead: "Many people answer the Law by saying God knows their heart, meaning their intentions are good even if their actions are not. The Bible agrees that God judges the heart, but it describes the heart as the source of sin rather than proof of innocence.",
    alsoAsked: ["I have a good heart", "It's what's inside that counts", "God knows I mean well"],
    inBrief: "God does know the heart, and that is the problem: Scripture says the heart is deceitful, and God judges thoughts as well as deeds.",
    tip: "agree with them. God does know the heart. Then turn it.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "He does. That's the problem. The Bible says the heart is where sin starts.",
    askBack: "If God knows your heart, what do you think He sees there?",
    short: `You're right, God knows your heart. But that's actually bad news before it's good news. The Bible says the heart is deceitful, and it's where lying, lust, and hatred start.

Jesus said lust in the heart is adultery and hatred is murder. So God isn't only judging what we do. He sees what we think and want. If He knows your heart, He knows everything you've hidden.`,
    deep: `**The claim:** “God knows my heart” usually means that a person's inner intentions are good, so God will overlook outward sins. It assumes the heart is the best part of a person.

**God does judge the heart:** Scripture agrees that God looks past appearances and searches the heart and mind ([[Jeremiah 17:10]]). Nothing is hidden from Him ([[Hebrews 4:13]]), and He will judge even the secret things ([[Ecclesiastes 12:14]], [[1 Corinthians 4:5]]).

**What the Bible says about the heart:** The heart is “more deceitful than all else” and “desperately sick” ([[Jeremiah 17:9]]). Jesus taught that evil thoughts, sexual sin, theft, murder, and deceit come out of the heart ([[Mark 7:21]]). The heart is the source of sin, not a refuge from it.

**The Law reaches the heart:** Jesus applied the commandments to inner life. Looking with lust is adultery of the heart ([[Matthew 5:27-28]]), and hatred is murder ([[1 John 3:15]]). A heart-level standard makes the Law harder to pass, not easier.

**Good intentions and self-deception:** People generally judge themselves by their intentions and others by their actions. Scripture warns that sinners are often blind to their own hearts ([[Proverbs 20:6]]) and that a person can look righteous outwardly while being full of lawlessness inside ([[Matthew 23:28]]).

**The remedy is a new heart:** God promises not to improve the old heart but to give a new one. Those in Christ are a new creation ([[2 Corinthians 5:17]]), and Jeremiah 31 promises a new covenant ([[Jeremiah 31:31]]) in which God writes His Law on the heart.

**Further reading:** Ray Comfort and Living Waters on using the Law to reach the conscience. See also {{I'm a good person|objections/good-person}}.`,
    talk: `**Agree first:** “You're right. God does know your heart. That's what worries me.”

**When it comes up:** Usually right after the Law questions, when someone has admitted lying or stealing but wants to soften it. Don't argue. Agree, then turn it.

**Questions to ask:**
- “If God knows your heart, what do you think He sees there?”
- “Has your heart ever wanted something you knew was wrong?”
- “Would you want everyone to see every thought you had this week?”

**How to say it:** “Jesus said lust in the heart is adultery, and hatred is murder. God isn't just looking at what we do. He sees what we want.”

**If they say “But I mean well”:** “Every criminal means well in his own eyes. A judge goes by the law, not by how we feel about ourselves.” ([[Jeremiah 17:9]])

**Bridge to the gospel:** Go back to judgment: “If God judged your heart by His Law, innocent or guilty?” ({{Way of the Master|paths/way-of-the-master/4}})`,
    verses: ["Jeremiah 17:9", "Jeremiah 17:10", "Mark 7:21", "Matthew 5:27-28", "Hebrews 4:13"],
    related: ["objections/good-person", "paths/way-of-the-master"],
  },
  {
    id: "take-my-chances",
    category: "The Gospel & Salvation",
    title: "I'll take my chances",
    topic: "Risk and Eternity",
    lead: "Some people respond to the warning of judgment by saying they will take their chances. The phrase treats eternity as a gamble, while the Bible presents death and judgment as certain.",
    alsoAsked: ["I'll find out when I die", "If I'm wrong, I'm wrong", "I'll deal with it then"],
    inBrief: "Death and judgment are not chances but certainties, and no one gambles with what cannot be undone when a sure way of escape is offered.",
    tip: "stay calm and caring. This is often bravado, not a settled view.",
    otherViews: [
      { name: "Pascal's wager", text: "Blaise Pascal argued that with eternity at stake, a reasonable person should not stake everything on God not existing." },
      { name: "Christianity", text: "Judgment is not a possibility to weigh but an appointment; the rescue is offered now and freely." },
    ],
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "There's no chance about it. Everyone dies, and after that comes judgment.",
    askBack: "Would you jump out of a plane without a parachute and take your chances?",
    short: `I understand, but it isn't really a chance. Death is certain, and the Bible says after death comes judgment. You'd never jump out of a plane and just hope it works out.

What you'd lose isn't a bet. It's your soul, forever. And you don't have to gamble at all. Jesus offers a sure rescue right now, for free. Why risk eternity when you could be certain?`,
    deep: `**What the phrase assumes:** “I'll take my chances” treats life after death as uncertain and the outcome as a fair bet. It often reflects an assumption that judgment, if it comes, will turn out acceptably.

**Certainty, not chance:** Scripture presents death and judgment as appointed, not possible: “it is appointed for men to die once and after this comes judgment” ([[Hebrews 9:27]]). The death rate is one per person.

**The size of the stakes:** Jesus asked what it profits a person to gain the whole world and forfeit his soul ([[Mark 8:36]]), and taught that God is to be feared because He can destroy soul and body in hell ([[Matthew 10:28]]). A loss that is eternal cannot be made up later.

**The uncertainty of time:** No one knows what a day will bring ([[Proverbs 27:1]]). The rich fool in Jesus' parable made plans for years he did not have ([[Luke 12:20]]).

**The parachute illustration:** Ray Comfort often compares the situation to jumping from a plane. No sensible person jumps without a parachute and hopes for the best, especially when a parachute is offered free. Christ is the parachute; trusting Him means putting Him on, not merely believing He exists.

**Pascal's wager:** The 17th-century mathematician Blaise Pascal argued that when the stakes are infinite, wagering against God is unreasonable. The argument shows the folly of indifference, though it does not by itself prove God exists or produce saving faith.

**Distinct from delay:** “I'll take my chances” is a choice to risk judgment; “I'll think about it later” is a choice to postpone. See {{I'll think about it later|objections/think-later}}.`,
    talk: `**When it comes up:** Usually at the “Does that concern you?” step. It's often a shrug to end the discomfort, not a real decision. Don't get frustrated.

**Questions to ask:**
- “Would you jump out of a plane without a parachute and take your chances?”
- “What do you think your chances are, honestly?”
- “If you're wrong, what do you lose?”

**How to say it:** “It's not a chance. Death is certain, and after that comes judgment.” ([[Hebrews 9:27]])

**If they say “I'll find out when I die”:** “That's the one time it's too late to change your mind.”

**If they say “I'm not scared”:** “I'm not trying to scare you. I'm concerned for you. You wouldn't gamble your house, so why gamble your soul?” ([[Mark 8:36]])

**Bridge to the gospel:** “You don't have to gamble. Jesus offers a sure rescue.” Go to the cross ({{Way of the Master|paths/way-of-the-master/6}}).`,
    verses: ["Hebrews 9:27", "Mark 8:36", "Matthew 10:28", "Proverbs 27:1", "Luke 12:20"],
    related: ["objections/think-later", "paths/way-of-the-master"],
  },
  {
    id: "murderer-repents",
    category: "The Gospel & Salvation",
    title: "So a murderer can just repent and go to heaven? That's not fair",
    topic: "Grace and Fairness",
    lead: "When people hear that forgiveness is free, they often object that a murderer or a deathbed convert could be saved while a decent person is not. The objection assumes heaven is a reward for good behavior, whereas the Bible presents salvation as a pardon for the guilty.",
    alsoAsked: ["So Hitler could be in heaven?", "Someone can live how they want and repent at the end?", "That's too easy"],
    inBrief: "No one earns heaven; it is a pardon paid by Christ, so a forgiven murderer and a forgiven liar stand on the same grace.",
    tip: "this is a good sign. They've understood grace is free.",
    otherViews: [
      { name: "Islam", text: "God may forgive any sin through sincere repentance, but deeds are still weighed at the judgment." },
      { name: "Karma-based religions", text: "Every act brings its own result, so no one escapes the consequences of serious wrongdoing by repenting." },
      { name: "Christianity", text: "No one earns heaven; any sinner who truly repents and trusts Christ is pardoned because Christ paid the penalty." },
    ],
    sources: ["Ray Comfort", "Living Waters", "Mark Spence"],
    oneLiner: "You're right, it's not fair. It's grace. No one earns heaven, including you and me.",
    askBack: "Do you think you'd get into heaven because you deserve it?",
    short: `You're right, it isn't fair. If God were fair, we'd all be guilty. Heaven isn't a reward for good people. It's a pardon for guilty ones, and Jesus paid the fine.

The thief on the cross had nothing to offer, and Jesus forgave him. That's the same mercy you and I need. The question isn't whether a murderer deserves it. None of us do.`,
    deep: `**The assumption behind the objection:** The complaint assumes heaven is a reward earned by good behavior, so a decent person deserves it more than a murderer. Scripture teaches that no one earns it: all have sinned ([[Romans 3:23]]), and the wages of sin is death, while eternal life is a free gift ([[Romans 6:23]]).

**Pardon, not reward:** Salvation is by grace through faith, not by works, so no one can boast ([[Ephesians 2:8-9]]). If it were earned it would be a wage, not a gift; God justifies the ungodly who believe ([[Romans 4:4-5]]). A pardon is, by definition, for the guilty.

**Justice is still done:** Forgiveness does not mean sin is ignored. The penalty is paid by Christ, so God remains just while justifying the one who believes ([[Romans 3:26]]). A forgiven murderer is not let off; his sin was punished at the cross ([[2 Corinthians 5:21]]).

**The thief on the cross:** One of the criminals crucified with Jesus admitted he was receiving what he deserved ([[Luke 23:41]]), asked Jesus to remember him, and was promised paradise that day ([[Luke 23:42-43]]). He had no time for good works.

**Biblical examples:** Paul took part in persecuting and killing Christians and called himself the foremost of sinners, yet was shown mercy as an example ([[1 Timothy 1:15]]). David committed adultery and arranged a murder, then repented (Psalm 51). Jesus' parable of the laborers in the vineyard (Matthew 20:1-16) addresses those who resent the generosity shown to latecomers.

**Repentance is real, not a trick:** The gospel offers no loophole for living in sin and repenting at the end. Repentance is a genuine turning from sin ([[Acts 20:21]]), and no one is promised time to repent later ([[Proverbs 27:1]]).

**Earthly consequences remain:** God's pardon does not remove earthly justice. A converted murderer may still rightly face the courts ([[Romans 13:4]]).

**Further reading:** See {{I've done too much to be forgiven|objections/too-far-gone}} and {{Equality of Sin|convictions/equality-of-sin}}.`,
    talk: `**Why this is a good sign:** If they're offended that grace is free, they've understood it. Now help them see they need the same grace.

**Agree first:** “You're right. It isn't fair. It's grace.”

**Questions to ask:**
- “Do you think you'd get into heaven because you deserve it?”
- “If God gave everyone what's fair, where would you be?”
- “Is a pardon ever for innocent people?”

**How to say it:** “Heaven isn't a reward for good people. It's a pardon for guilty people.”

**If they say “So I can live how I want and repent later?”:** “Repentance isn't a trick. And no one is promised a later.” ([[Proverbs 27:1]])

**If they bring up Hitler:** “If a man like that truly repented, his sin would be paid for, not ignored. But don't miss the point: you need the same pardon.”

**Use the thief:** He said he deserved to die, and Jesus forgave him that day ([[Luke 23:42-43]]).

**Bridge to the gospel:** Take them back to their own guilt ({{Way of the Master|paths/way-of-the-master/3}}), then the cross ({{Way of the Master|paths/way-of-the-master/6}}).`,
    verses: ["Romans 6:23", "Ephesians 2:8-9", "Romans 4:4-5", "Luke 23:42-43", "1 Timothy 1:15"],
    related: ["objections/too-far-gone", "objections/same-as-murderer", "paths/way-of-the-master"],
  },
  {
    id: "nobody-perfect",
    category: "The Gospel & Salvation",
    title: "Nobody's perfect",
    topic: "Imperfection and Guilt",
    lead: "People often answer the Law by saying nobody's perfect, as if admitting imperfection settles the matter. The Bible agrees that no one is perfect, but treats this as a confession of guilt before a God whose standard is perfection.",
    alsoAsked: ["Everyone sins", "I'm only human", "We all make mistakes"],
    inBrief: "Admitting imperfection is not a defense but a confession; God's standard is perfection, so everyone needs a Savior.",
    tip: "agree warmly. They've just made your point for you.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Exactly. And God's standard is perfection. That's why we all need a Savior.",
    askBack: "If nobody's perfect, and God requires perfection, where does that leave us?",
    short: `You're right, nobody's perfect. But that's not an excuse. It's a confession. Imagine telling a judge, “Your honor, nobody's perfect.” He'd say, “Thank you for admitting it.”

God's standard isn't “pretty good.” Jesus said to be perfect, as God is perfect. We all fall short, so we're all guilty. That's exactly why Jesus came.`,
    deep: `**What the phrase assumes:** “Nobody's perfect” usually means that because everyone sins, sin is normal and therefore acceptable to God. It turns a universal problem into a universal excuse.

**The Bible agrees no one is perfect:** All have sinned and fall short of God's glory ([[Romans 3:23]]). Anyone who claims to be without sin deceives himself ([[1 John 1:8]]).

**God's standard is perfection:** Jesus said, “you are to be perfect, as your heavenly Father is perfect” ([[Matthew 5:48]]). Whoever keeps the whole Law yet stumbles in one point is guilty of all ([[James 2:10]]), and those who rely on the Law are under a curse unless they keep all of it ([[Galatians 3:10]]).

**Confession, not defense:** In a courtroom, a defendant who says “nobody's perfect” has admitted the charge rather than answered it. The fact that others are also guilty does not make anyone innocent. The Law's purpose is to bring this knowledge of sin ([[Romans 3:20]]).

**Common, not harmless:** Universal sin shows the depth of the human problem, not its smallness. Like a disease that affects everyone, its being common does not make it less deadly ([[Romans 5:12]]).

**Where this leads:** Because no one meets the standard, salvation cannot come by effort. Christ lived the perfect life and died for sinners ([[2 Corinthians 5:21]], [[Romans 5:8]]).

**Further reading:** Ray Comfort and Living Waters, the “Good Person Test.” See also {{I'm a good person|objections/good-person}} and {{Equality of Sin|convictions/equality-of-sin}}.`,
    talk: `**Agree warmly:** “You're right. Nobody's perfect. That's actually the point.”

**When it comes up:** Often during the Law questions, as a way to wave off “liar” or “thief.” Don't let it end the conversation. It's the opening you need.

**Questions to ask:**
- “If nobody's perfect, and God requires perfection, where does that leave us?”
- “Would a judge let you go because other people commit crimes too?”
- “So would you be innocent or guilty on Judgment Day?”

**How to say it:** “Imagine telling a judge, ‘Your honor, nobody's perfect.’ He'd say, ‘Thank you for your confession.’”

**If they say “God doesn't expect perfection”:** “Jesus said to be perfect as God is perfect.” ([[Matthew 5:48]])

**If they say “I'm only human”:** “That's true. And that's why we need someone more than human to save us.”

**Bridge to the gospel:** Move to judgment ({{Way of the Master|paths/way-of-the-master/4}}), then show that Jesus was perfect for us ({{Way of the Master|paths/way-of-the-master/6}}).`,
    verses: ["Matthew 5:48", "Romans 3:23", "James 2:10", "1 John 1:8"],
    related: ["objections/good-person", "paths/way-of-the-master"],
  },
  {
    id: "no-hell",
    category: "The Gospel & Salvation",
    title: "I don't believe in hell",
    topic: "The Reality of Hell",
    lead: "Many people reject the existence of hell outright, apart from whether it would be fair. Christianity teaches that hell is real because Jesus taught it plainly, and that a person's disbelief does not change what is true.",
    alsoAsked: ["Hell isn't real", "Hell was made up to scare people", "Hell is just here on earth"],
    inBrief: "Jesus taught that hell is real; belief does not change reality, and a just God must deal with evil after death.",
    tip: "find out why. Is it about the Bible, God, or fairness?",
    otherViews: [
      { name: "Atheism", text: "There is no afterlife, so there is no hell and no final judgment." },
      { name: "Universalism", text: "God will eventually reconcile everyone, so hell is either unreal or temporary." },
      { name: "Annihilationism", text: "Some Christians hold that the lost are finally destroyed rather than punished forever, while still affirming a real judgment." },
      { name: "Christianity", text: "Hell is real, as Jesus taught, and Jesus came so that no one who trusts Him has to go there." },
    ],
    sources: ["Ray Comfort", "Living Waters", "Lee Strobel", "C.S. Lewis"],
    oneLiner: "Not believing in it won't make it go away. Jesus spoke about hell more than anyone.",
    askBack: "Should a good judge punish a murderer?",
    short: `I understand. But whether we believe something doesn't change whether it's real. If a bridge is out, not believing it won't keep you from falling.

Jesus talked about hell more than anyone, and He came to rescue us from it. And think about it: if God is good, He has to deal with evil. Murderers and abusers won't just get away with it. The real question is whether you'll be ready.`,
    deep: `**The claim:** Disbelief in hell takes several forms: that there is no afterlife at all, that a loving God would never allow it, or that hell is an invention used to control people. This entry addresses whether hell is real; whether it is fair is covered in {{Hell isn't fair|objections/hell-unfair}}.

**Belief does not determine reality:** A thing is true or false regardless of whether anyone believes it. The relevant question is what evidence and authority speak to the matter.

**Jesus taught it:** Jesus warned about hell more than any other figure in Scripture. He taught that God can destroy soul and body in hell ([[Matthew 10:28]]), spoke of being cast into hell rather than entering life with a body intact (Mark 9:43-48), described the rich man in torment (Luke 16:19-31), and ended the parable of the sheep and goats with eternal punishment and eternal life (Matthew 25:46). Anyone who accepts Jesus as a moral teacher must reckon with His teaching on hell.

**The Old and New Testaments agree:** Daniel foresaw a resurrection to everlasting life or everlasting contempt ([[Daniel 12:2]]). Revelation describes the lake of fire as the second death ([[Revelation 20:14]], [[Revelation 21:8]]). Judgment follows death for everyone ([[Hebrews 9:27]]).

**The argument from justice:** Most people believe that serious evil should be punished. Many great crimes go unpunished in this life. If God is good and just, He must deal with evil after death ([[Genesis 18:25]], [[Ecclesiastes 12:14]]). A universe without final justice would mean that tyrants and abusers escape forever.

**The conscience:** Even without the Bible, the conscience bears witness to right and wrong and to accountability ([[Romans 2:15]]).

**Not invented to control:** Jesus used the warning of hell to call people to Himself, not to gain power; He came to give His life for others ([[Mark 10:45]]) and urged people to repent. God takes no pleasure in the death of the wicked ([[Ezekiel 33:11]]).

**Lewis's view:** C.S. Lewis wrote that the doors of hell are in a sense locked from the inside: hell is finally God giving people the separation from Him that they chose (*The Great Divorce*, *The Problem of Pain*).

**Further reading:** Lee Strobel, *The Case for Faith* (chapter on hell). C.S. Lewis, *The Great Divorce*.`,
    talk: `**Find out why first:** Ask, “Why don't you believe in it?” If it's about God or the Bible, see {{I don't believe in God|paths/way-of-the-master/9}} or {{I don't believe the Bible|paths/way-of-the-master/10}}. If it's about fairness, see {{Hell isn't fair|objections/hell-unfair}}.

**Questions to ask:**
- “Should a good judge punish a murderer?”
- “If there's no hell, does Hitler just get away with it?”
- “If you're wrong, what's at stake?”

**How to say it:** “Not believing in it won't make it go away. If a bridge is out, not believing it won't stop you falling.”

**If they say “Hell was invented to control people”:** “Jesus warned about hell more than anyone, and He didn't take power. He gave His life.”

**If they say “Hell is here on earth”:** “Some people suffer terribly here, but many evil people die comfortable. If that's the end, there's no justice.”

**Don't argue forever:** Their conscience already knows they're accountable ([[Romans 2:15]]). Go back to the Law.

**Bridge to the gospel:** “Jesus talked about hell because He came to save us from it.” ({{Way of the Master|paths/way-of-the-master/11}})`,
    verses: ["Matthew 10:28", "Daniel 12:2", "Hebrews 9:27", "Revelation 21:8"],
    related: ["objections/hell-unfair", "paths/way-of-the-master"],
  },
  {
    id: "assurance",
    category: "The Gospel & Salvation",
    title: "How can I know I'm going to heaven?",
    topic: "Assurance of Salvation",
    lead: "Assurance of salvation is the confidence that a person truly has eternal life. It matters both to seekers and to people who once prayed a prayer but are unsure whether anything changed.",
    alsoAsked: ["I said a prayer once. Am I saved?", "Can anyone be sure they're saved?", "I was baptized as a kid. Am I OK?"],
    inBrief: "Assurance rests on Christ's finished work, received by repentance and faith, and is confirmed by a changed life, not by a past prayer.",
    tip: "find out what they're trusting in. A prayer, church, or Christ?",
    otherViews: [
      { name: "Catholicism", text: "A person can have hope of heaven, but grace can be lost through mortal sin, so final salvation is not normally presumed." },
      { name: "Islam", text: "No one can be certain of paradise; a person hopes in God's mercy at the judgment." },
      { name: "Christianity (evangelical)", text: "Those who truly repent and trust Christ can know they have eternal life, because it rests on His work." },
    ],
    sources: ["Ray Comfort", "Living Waters", "Mark Spence"],
    oneLiner: "You can know. Not because of a prayer, but because you've turned to and trusted Jesus.",
    askBack: "What are you trusting in to get you to heaven?",
    short: `The Bible says you can know you have eternal life. It doesn't rest on how good you are, or on a prayer you once said. It rests on Jesus, who paid for your sins.

The question is: have you truly repented, turned from your sin, and trusted Jesus alone? If so, your life will start to change. You'll want to obey Him. That change doesn't save you, but it's evidence that you've been saved.`,
    deep: `**Assurance is possible:** John wrote so that believers “may know” they have eternal life ([[1 John 5:13]]). Eternal life is in the Son: whoever has the Son has life ([[1 John 5:11-12]]). Whoever hears Christ's word and believes has passed from death to life ([[John 5:24]]).

**The ground of assurance is Christ's work:** Salvation rests on what Jesus did, not on human merit ([[Ephesians 2:8-9]], [[Titus 3:5]]). His sacrifice was once for all and complete ([[Hebrews 10:14]]). There is no condemnation for those in Christ ([[Romans 8:1]]).

**The means is repentance and faith:** Jesus called people to repent and believe ([[Mark 1:15]]); Paul preached repentance toward God and faith in Jesus ([[Acts 20:21]]). These are a turning of the whole person, not a formula of words.

**A prayer is not the ground of assurance:** Scripture nowhere bases assurance on having once said a particular prayer. Jesus warned that many who call Him “Lord” will hear “I never knew you” ([[Matthew 7:21-23]]). Way of the Master stresses genuine repentance and faith rather than a quick prayer, out of concern for false conversions.

**The evidence of a changed life:** Those in Christ are a new creation ([[2 Corinthians 5:17]]). Knowing Christ shows itself in keeping His commandments ([[1 John 2:3-4]]). Believers are urged to examine themselves ([[2 Corinthians 13:5]]) and to make their calling and election sure ([[2 Peter 1:10]]). The fruit does not earn salvation; it shows that salvation is real.

**Kept by God:** Those who are truly Christ's are kept by Him; no one can snatch them from His hand ([[John 10:28-29]]), and He finishes what He began ([[Philippians 1:6]]). See {{Can You Lose Your Salvation?|convictions/eternal-security}}.

**Doubts and assurance:** A believer can doubt and still be saved. Salvation rests on Christ; assurance is the confidence in it, which can grow or weaken (see {{If I doubt my salvation...|objections/doubting-salvation}}).

**Imperfect but growing:** Assurance does not require sinlessness. Believers still sin and confess ([[1 John 1:8]], [[1 John 1:9]]), but they do not settle into a life of unrepentant sin.

**Further reading:** See {{Nominal Christians|people/nominal}} and the {{Way of the Master|paths/way-of-the-master}} path on repentance and faith.`,
    talk: `**Find out what they're trusting in:** Ask, “What are you trusting in to get to heaven?” Listen for “I'm a good person,” “I go to church,” “I was baptized,” or “I said a prayer.”

**If they're a seeker:** Don't jump to comfort. Take them through the Law first so they understand what they need saving from ({{Way of the Master|paths/way-of-the-master/2}}).

**If they say “I said a prayer once”:** “I'm glad you prayed. But the Bible never says a prayer saves. Have you truly repented and trusted Jesus? Has your life changed?”

**Questions to ask:**
- “Do you love what God loves now, and hate your sin?”
- “Do you read your Bible and want to obey it?”
- “If you died tonight, why should God let you into heaven?”

**How to say it:** “You can know. Not because of what you did, but because of what Jesus did, and because you've turned to Him.” ([[1 John 5:13]])

**If a believer is doubting:** Point them to Christ, not their feelings. “Are you trusting Jesus alone, and do you hate your sin? Then rest in His promise” ([[John 10:28-29]]). See {{If I doubt my salvation...|objections/doubting-salvation}}.

**Be careful:** Don't tell someone they're saved, and don't tell a struggling believer they're lost. Point them to Christ and to Scripture ([[2 Corinthians 13:5]]).

**Bridge to the gospel:** If they're unsure, call them to repent and trust today ({{Way of the Master|paths/way-of-the-master/7}}). If they have, give next steps ({{Way of the Master|paths/way-of-the-master/8}}).`,
    verses: ["1 John 5:13", "1 John 5:11-12", "2 Corinthians 13:5", "Matthew 7:21-23", "2 Corinthians 5:17"],
    related: ["convictions/eternal-security", "people/nominal", "paths/way-of-the-master"],
  },
  {
    id: "natural-evil",
    category: "God & Suffering",
    title: "Why do children get cancer?",
    topic: "Natural Evil",
    lead: "Natural evil is suffering that no human directly causes, such as disease, earthquakes, and floods. It is often seen as the hardest form of the problem of suffering, because it cannot be blamed on human choices alone.",
    alsoAsked: ["Why does God allow earthquakes and tsunamis?", "Why do innocent babies suffer?", "If God made nature, why is it so cruel?"],
    inBrief: "Sin broke all of creation, not just people. Disease and disaster show the world is fallen, and God promises to make it new.",
    tip: "find out if they've lost someone. Comfort before you explain.",
    otherViews: [
      { name: "Atheism", text: "Disease and disaster are simply nature at work; there is no one to blame and no promise it will be put right." },
      { name: "Hinduism and Buddhism", text: "Suffering is often linked to karma from past lives, and the goal is release from the cycle." },
      { name: "Christianity", text: "Creation was made good, was damaged by the fall, and will be restored when Christ returns." },
    ],
    sources: ["C.S. Lewis", "Lee Strobel", "Ray Comfort"],
    oneLiner: "The whole world is broken by sin, not just people. God promises to make it new.",
    askBack: "Has this touched your life, or someone close to you?",
    short: `That's a heartbreaking question. The Bible says God made the world good, but when sin came in, all of creation was damaged. Disease and disasters aren't how it was meant to be. They show us the world is broken.

But God didn't leave it that way. Jesus healed the sick, wept at a grave, and rose from the dead. He promises a new world with no more death or pain. Without God, a child's cancer is just bad luck. With Him, it's an enemy that will be destroyed.`,
    deep: `**The question:** Some suffering comes from human choices, such as war or abuse. Natural evil is different: childhood cancer, earthquakes, tsunamis, and famine seem to have no human cause. The question is why a good and powerful God would make a world where these happen. The broader question is covered in {{Why does God allow suffering?|objections/suffering}}.

**A good creation:** Genesis 1 describes everything God made as “very good.” There was no death in the original creation; death entered through Adam's sin ([[Romans 5:12]]).

**Creation under a curse:** After the fall, God cursed the ground, and work became painful toil ([[Genesis 3:17-18]]). Paul teaches that creation itself was subjected to futility and now groans, waiting to be set free from its slavery to corruption ([[Romans 8:20-22]]). Natural evil is therefore not part of God's original design; it is a symptom of a fallen world.

**Not a sign of personal guilt:** Scripture does not teach that those who suffer a disaster were worse sinners. When a tower in Siloam fell and killed eighteen people, Jesus said they were no more guilty than anyone else, and called all to repent ([[Luke 13:4-5]]). In John 9 He denied that a man's blindness was punishment for his own or his parents' sin.

**A world of stable laws:** C.S. Lewis argued in *The Problem of Pain* that a shared world needs fixed, dependable natural laws. The same regularity that makes life and free choice possible also means that fire burns and rock can fall. Some scientists also note that processes such as plate movement, which cause earthquakes, help recycle nutrients and support life on earth.

**God is not distant from it:** Jesus healed disease, raised the dead, and wept at the tomb of Lazarus (John 11). At the cross God Himself entered suffering ([[Romans 5:8]]).

**The end of natural evil:** Present sufferings are not worth comparing with the glory to come ([[Romans 8:18]]). God will wipe away every tear, and there will be no more death, mourning, or pain ([[Revelation 21:4]]).

**The moral point:** Calling a child's cancer evil, rather than simply unfortunate, assumes things ought to be otherwise. Without God, disease is just nature; the outrage itself points to a standard of good ({{The Moral Law|evidence/moral-law}}).

**Further reading:** C.S. Lewis, *The Problem of Pain*. Lee Strobel, *The Case for Faith*.`,
    talk: `**If they're grieving:** Don't explain yet. Say you're sorry, ask about the person they lost, and offer to pray. Answers can wait.

**How to say it:** “This isn't how God made the world. Sin broke everything, even nature.”

**If they say “Then God should fix it now”:** “He will. And Jesus showed what that looks like: He healed the sick and beat death.” Point to [[Revelation 21:4]].

**If they say “That's not fair to the child”:** Agree it's wrong. Then ask, “Without God, is it wrong, or just bad luck?”

**If they say “Those people were being punished”:** Jesus said no ([[Luke 13:4-5]]). Disaster isn't a sign that someone was worse.

**Bridge to the gospel:** Jesus used a disaster to say, “Be ready.” Ask, “If your life ended today, would you be ready to face God?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Romans 8:20-22", "Genesis 3:17-18", "Romans 5:12", "Luke 13:4-5", "Revelation 21:4"],
    related: ["objections/suffering", "evidence/moral-law", "paths/way-of-the-master"],
  },
  {
    id: "why-create",
    category: "God & Suffering",
    title: "If God knew people would go to hell, why did He create them?",
    topic: "Foreknowledge and Creation",
    lead: "This question asks why an all-knowing God would create people He knew would reject Him and be lost. It touches on God's foreknowledge, human freedom, and His desire for all to be saved.",
    alsoAsked: ["Why would God make people just to send them to hell?", "If God knows the future, do we really have a choice?"],
    inBrief: "God wants everyone saved and offers grace to all. Knowing a choice in advance is not the same as causing it.",
    tip: "check whether it's about a loved one. Then answer gently.",
    otherViews: [
      { name: "Calvinism", text: "God unconditionally chooses whom He will save for His own glory, and those not chosen are justly left in their sin." },
      { name: "Arminianism", text: "God desires all to be saved, enables all to respond, and elects those He foreknew would believe." },
      { name: "Open theism", text: "God does not know future free choices with certainty, so He did not create anyone knowing they would be lost." },
      { name: "Universalism", text: "God will eventually save everyone, so no one He creates is finally lost." },
    ],
    sources: ["Greg Koukl", "Cliff Knechtle", "C.S. Lewis"],
    oneLiner: "God wants everyone saved. Knowing what you'll choose isn't making you choose it.",
    askBack: "If God only made people who'd love Him, would anyone have real freedom?",
    short: `God doesn't make anyone to be lost. The Bible says He wants everyone to be saved and takes no pleasure in anyone dying in their sin. Jesus died for the whole world.

God knowing what you'll choose doesn't force your choice, any more than me knowing the sun will rise makes it rise. Real love has to be freely given, so God gives real freedom. The question isn't why God made you. It's what you'll do with His offer.`,
    deep: `**God desires all to be saved:** Scripture says God is not willing that any should perish but that all should come to repentance ([[2 Peter 3:9]]), and that He desires all people to be saved ([[1 Timothy 2:3-4]]). He takes no pleasure in the death of the wicked ([[Ezekiel 33:11]]). Christ died for the sins of the whole world ([[1 John 2:2]], [[John 3:16]]).

**Foreknowledge is not causation:** Knowing that something will happen does not make it happen. A person who watches a recorded game knows the outcome, but did not cause it. God's knowledge of a free choice follows the choice; it does not force it. In the Arminian reading, God chose those He foreknew would believe ([[1 Peter 1:1-2]], [[Romans 8:29-30]]).

**People really resist God:** Jesus wept over Jerusalem: He wanted to gather its people, but they were unwilling ([[Matthew 23:37]]). Stephen told his hearers they always resisted the Holy Spirit ([[Acts 7:51]]). Those who are lost are lost because they refused, not because God wanted it.

**Love requires freedom:** A relationship of love cannot be forced. C.S. Lewis argued that free will, though it makes evil possible, is also the only thing that makes love and real goodness possible. In his picture, hell is God finally giving people what they insisted on: life without Him.

**The alternative:** If God refused to create anyone who would reject Him, the free choices of some would decide whether others ever existed. Every person who will be saved would also be part of a human family that includes those who refuse. God chose to create a world where the offer of grace is real for everyone.

**Grace comes first:** No one comes to Christ unless the Father draws him ([[John 6:44]]), but Jesus said He would draw all people to Himself ([[John 12:32]]). God enables everyone to respond.

**How Christians differ:** Calvinists hold that God's choice is the cause of faith, not a response to foreseen faith, and read “all” in passages like 1 Timothy 2:4 as “all kinds of people.” Open theists deny that God knows future free choices. See {{Election & Free Will|convictions/election-free-will}}.

**Further reading:** C.S. Lewis, *The Great Divorce*. See also {{Hell isn't fair|objections/hell-unfair}}.`,
    talk: `**How to say it:** “God didn't make anyone to be lost. He wants everyone saved.” Show them [[2 Peter 3:9]].

**If they say “Knowing is the same as causing”:** “If I know my kid will eat the cookie, did I make him eat it?”

**If they say “Then why not only make the good ones?”:** “Then your existence would depend on someone else's choice. And no one is good anyway. That's why we all need grace.”

**If they ask about Calvinism:** Don't get pulled into a debate. Say Christians differ on how election works, but agree God's offer is real. See {{Election & Free Will|convictions/election-free-will}}.

**Make it personal:** “God knows what you'll do with Jesus. Do you?”

**Bridge to the gospel:** “The question isn't why God made you. It's whether you'll accept His pardon.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["2 Peter 3:9", "1 Timothy 2:3-4", "Ezekiel 33:11", "Matthew 23:37", "1 Peter 1:1-2"],
    related: ["convictions/election-free-will", "objections/hell-unfair", "paths/way-of-the-master"],
  },
  {
    id: "adams-sin",
    category: "God & Suffering",
    title: "Why should I be punished for what Adam did?",
    topic: "Original Sin",
    lead: "Original sin is the teaching that Adam's first sin affected the whole human race, bringing death and a sinful nature to all his descendants. Many people object that it is unfair to be held responsible for another person's choice.",
    alsoAsked: ["Why am I guilty for eating a piece of fruit I never ate?", "It's not fair to blame me for Adam"],
    inBrief: "Everyone is judged for their own sins. Adam represented us, and Christ, the second Adam, represents all who trust Him.",
    tip: "move quickly from Adam to their own sins.",
    otherViews: [
      { name: "Judaism", text: "Most Jewish teaching holds that people inherit an inclination to evil but not Adam's guilt, and each is judged for their own deeds." },
      { name: "Islam", text: "Adam sinned and was forgiven; people are born pure and are accountable only for their own actions." },
      { name: "Christianity", text: "Adam's sin brought death and a fallen nature to all, everyone also sins personally, and Christ undoes what Adam did." },
    ],
    sources: ["Ray Comfort", "Greg Koukl", "Cliff Knechtle"],
    oneLiner: "You won't be judged for Adam's sins, but for your own. Have you sinned?",
    askBack: "Leave Adam aside. Have you ever lied or stolen?",
    short: `Good news: God won't judge you for Adam's sins. The Bible says each person is judged for their own. The bad news is we all have our own. Have you ever lied, stolen, or used God's name as a curse word?

Adam was our representative, and we've all followed in his steps. But God sent a second representative: Jesus. Just as Adam brought death, Jesus brings life to everyone who trusts Him.`,
    deep: `**Each person is judged for their own sins:** Scripture is clear that a son does not bear the punishment for his father's iniquity; the person who sins will die ([[Ezekiel 18:20]], [[Deuteronomy 24:16]]). At the final judgment people are judged according to their own deeds ([[Revelation 20:12]]).

**What Adam's sin did:** Through one man sin entered the world, and death through sin, and so death spread to all “because all sinned” ([[Romans 5:12]]). Adam's fall brought death and a corrupted nature to the whole race. The heart is deceitful above all things ([[Jeremiah 17:9]]), and all have sinned ([[Romans 3:23]]).

**Representation:** Adam acted as the head of the human race, much as a nation's leader can bind citizens by a treaty or a declaration of war. Scripture presents humanity under two heads: Adam and Christ. In Adam all die, and in Christ all will be made alive ([[1 Corinthians 15:22]]).

**The second Adam:** Through one man's disobedience the many were made sinners; through one Man's obedience the many will be made righteous ([[Romans 5:18-19]]). The same principle that joins people to Adam's fall allows them to be joined to Christ's righteousness. Rejecting representation in Adam would also mean rejecting the possibility of salvation through Christ as a substitute ([[2 Corinthians 5:21]]).

**Personal sin:** No adult stands before God guilty only of Adam's sin. Every person has also broken God's Law knowingly ([[James 4:17]]). The objection usually shifts attention away from personal guilt.

**How Christians differ:** Many in the Reformed and Catholic traditions hold that Adam's guilt is counted to all his descendants. Others, including many Arminians and Eastern Orthodox Christians, stress that people inherit a fallen nature and death but are condemned for their own sins. Many Christians believe God deals mercifully with infants and those unable to understand.

**Further reading:** C.S. Lewis, *The Problem of Pain* (chapter on the fall of man). See also {{What is sin?|objections/what-is-sin}}.`,
    talk: `**How to say it:** “God won't judge you for Adam's sin. He'll judge you for yours.” Show them [[Ezekiel 18:20]].

**Then make it personal:** Go through a few commandments. “Have you ever told a lie? Stolen anything?” ({{Using the Law|skills/using-the-law}})

**If they say “But I was born with a sinful nature”:** “True, but you still chose to lie. Nobody made you.”

**If they say “Representation isn't fair”:** “Then you'd have to reject Jesus representing you too. That's the only way anyone is saved.”

**Bridge to the gospel:** “Adam brought death. Jesus, the second Adam, brings life to anyone who trusts Him.” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Ezekiel 18:20", "Romans 5:12", "Romans 5:18-19", "1 Corinthians 15:22", "Romans 3:23"],
    related: ["objections/what-is-sin", "skills/using-the-law", "paths/way-of-the-master"],
  },
  {
    id: "one-god-further",
    category: "God & Suffering",
    title: "I just go one god further than you",
    topic: "God and the Gods",
    lead: "This line suggests that Christians already reject thousands of gods such as Zeus and Thor, and atheists simply reject one more. It assumes that the God of the Bible belongs in the same category as the gods of mythology.",
    alsoAsked: ["You don't believe in Zeus or Thor either", "We're both atheists, I just believe in one fewer god", "Why your God and not all the others?"],
    inBrief: "Zeus and Thor were beings inside the universe. The God of the Bible is its eternal Creator, a different kind of claim.",
    tip: "ask what they mean by “god” before you answer.",
    otherViews: [
      { name: "Atheism", text: "All gods are human inventions, so the God of the Bible is one more to set aside." },
      { name: "Polytheism", text: "Many gods exist, each with limited power and a role within the world." },
      { name: "Christianity", text: "There is one eternal Creator of all things; the gods of the nations are not gods at all." },
    ],
    sources: ["Greg Koukl", "Cliff Knechtle", "Ray Comfort"],
    oneLiner: "Zeus lived inside the universe. God made the universe. That's a different kind of claim.",
    askBack: "Who made the universe Zeus lived in?",
    short: `That line sounds clever, but it compares two different things. Zeus and Thor were born, had parents, and lived inside the world. They were like super-powered people. The God of the Bible isn't one more item in the universe. He's the eternal Creator of it all.

So the question isn't how many gods you reject. It's whether the universe had a Creator. And we don't believe in Jesus just because we like Him; He rose from the dead in history.`,
    deep: `**The claim:** The line, popularized by writers such as Richard Dawkins, argues that Christians are atheists about every other god and that atheists simply reject one more. It treats the God of the Bible as one member of a large class of gods.

**A different category:** In Greek and Norse mythology, the gods were born and had parents. Zeus was the son of Cronus, and Thor the son of Odin. They lived within the world, had limited power, and were part of nature. The God of the Bible has no beginning ([[Psalm 90:2]]), created the heavens and the earth ([[Genesis 1:1]]), and made all things, visible and invisible ([[Colossians 1:16]]). He is the source of the universe, not a powerful being within it.

**Paul in Athens:** Speaking in a city full of idols, Paul proclaimed the God who made the world and everything in it, who does not dwell in temples made with hands ([[Acts 17:24]]). He drew the same contrast between the Creator and the gods of the Greeks.

**One God:** Scripture teaches that besides the Lord there is no God ([[Isaiah 44:6]]), and that no god was formed before Him or after Him ([[Isaiah 43:10]]). Christians do not reject Zeus because of preference, but because there is only one Creator.

**The real question:** Rejecting Zeus means rejecting a being inside nature. Rejecting God means holding that the universe has no Creator, which raises the question of where it came from ({{The Universe Had a Beginning|evidence/cosmological}}, {{Fine-Tuning|evidence/fine-tuning}}). It is the difference between doubting one character in a story and denying that the story has an author.

**Evidence, not numbers:** Belief in a god should rest on evidence. There is no historical evidence that Zeus or Thor acted in history. Christianity rests on a public, testable event: the resurrection of Jesus ([[1 Corinthians 15:17]], {{The Resurrection|evidence/resurrection}}).

**Further reading:** Greg Koukl, *Tactics*. See also {{Who made God?|objections/who-made-god}}.`,
    talk: `**Be precise:** Ask, “What do you mean by god?” Most people picture a big being in the sky ({{Be Precise|skills/be-precise}}).

**How to say it:** “Zeus had a dad. God never began. He made everything, including Mount Olympus.”

**Questions to ask:**
- “Why don't you believe in Zeus?” (Usually: no evidence.)
- “Fair enough. So would evidence matter to you for Jesus?”

**If they say “Your God is just another myth”:** Point to the resurrection. Zeus has no empty tomb and no eyewitnesses.

**Bridge to the gospel:** “If there's a Creator, He gave you a conscience. Can I ask how you'd do by His standard?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Acts 17:24", "Genesis 1:1", "Psalm 90:2", "Isaiah 44:6", "Colossians 1:16"],
    related: ["skills/be-precise", "objections/who-made-god", "evidence/resurrection"],
  },
  {
    id: "heavy-rock",
    category: "God & Suffering",
    title: "Can God make a rock so heavy He can't lift it?",
    topic: "The Omnipotence Paradox",
    lead: "The omnipotence paradox asks whether God can do something that would limit His own power, such as creating a rock too heavy to lift. It is meant to show that the idea of an all-powerful being contradicts itself.",
    alsoAsked: ["If God can do anything, can He make a square circle?", "Is there anything God can't do?"],
    inBrief: "All-powerful means able to do anything that is possible. A self-contradiction is not a thing, so it is no limit on power.",
    tip: "keep it light and short, then move on.",
    sources: ["C.S. Lewis", "Greg Koukl"],
    oneLiner: "That's like asking for a square circle. Nonsense isn't a task, even for God.",
    askBack: "Can you draw a square circle? Is that a lack of skill?",
    short: `It's a fun puzzle, but it's a word trick. “A rock too heavy for an all-powerful God to lift” is like “a square circle.” It's not a real thing, just words that cancel out.

All-powerful means God can do anything that can actually be done. There are things God can't do: He can't lie, and He can't stop being God. That's not weakness, that's perfection. The bigger question is what God's power means for you.`,
    deep: `**The puzzle:** If God can make such a rock, there is something He cannot lift; if He cannot make it, there is something He cannot make. Either way, the argument claims, He is not all-powerful.

**What omnipotence means:** Christian thinkers, such as Thomas Aquinas, have long defined omnipotence as the power to do anything that is logically possible. A self-contradictory task, like a square circle or a married bachelor, is not a real task at all. C.S. Lewis made the same point: putting the words “God can” in front of nonsense does not turn it into sense.

**Nothing too hard:** Within what is possible, nothing is too difficult for God ([[Jeremiah 32:17]]). The puzzle does not describe a hard task, only a contradictory sentence.

**Things God cannot do:** Scripture itself says God cannot lie ([[Titus 1:2]], [[Hebrews 6:18]]). He does not change His mind like a man ([[Numbers 23:19]]) and does not change in His nature ([[Malachi 3:6]]). These are not limits on His power but expressions of His perfect character. Being unable to fail is strength, not weakness.

**Further reading:** C.S. Lewis, *The Problem of Pain* (chapter on divine omnipotence).`,
    talk: `**Keep it short:** This is usually a game, not a real barrier. Answer in a sentence or two and move on.

**How to say it:** “It's a square circle. God can do anything that's possible, not nonsense.”

**If they say “So there are things God can't do”:** “Yes. He can't lie. That's good news, because His promises hold.” ([[Titus 1:2]])

**Bridge to the gospel:** “Here's a better question: if God can't lie, what has He said about you?” Then go to the Law. ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Titus 1:2", "Hebrews 6:18", "Numbers 23:19", "Jeremiah 32:17"],
    related: ["objections/who-made-god", "paths/way-of-the-master"],
  },
  {
    id: "worship-ego",
    category: "God & Suffering",
    title: "Why does God demand worship? That sounds egotistical.",
    topic: "Why God Is Worshiped",
    lead: "Some people object that a God who commands worship must be vain or insecure. The question challenges God's character rather than His existence, and often comes up when the first commandment is discussed.",
    alsoAsked: ["Why does God need our praise?", "Isn't God just insecure?", "Why would God want people bowing down to Him?"],
    inBrief: "God isn't needy. Worship is the fitting response to the highest good, and loving Him first is what we were made for.",
    tip: "find out what they picture when they hear “worship.”",
    otherViews: [
      { name: "Atheism", text: "There is no God to worship; people direct admiration toward what they value most." },
      { name: "Islam", text: "Humans were created to worship God, who is fully self-sufficient and needs nothing from them." },
      { name: "Christianity", text: "God needs nothing, but worship is the fitting response to Him and the source of our deepest joy." },
    ],
    sources: ["C.S. Lewis", "Greg Koukl", "Ray Comfort"],
    oneLiner: "God doesn't need our praise. We need to give it to the right thing.",
    askBack: "Is it ego to want people to love what's truly best?",
    short: `If a person demanded worship, it would be ego, because they'd be claiming more than they deserve. But God isn't claiming too much. He really is the greatest good there is.

And God isn't needy. The Bible says He doesn't need anything from us. Worship is for our good. Everyone worships something: money, pleasure, themselves. God commands us to put Him first because He's the only one worthy of it.`,
    deep: `**The objection:** Among people, demanding praise is a sign of vanity or insecurity. If God commands worship, the argument goes, He must share those faults.

**God is not needy:** God is not served by human hands as though He needed anything, since He gives life and breath to all ([[Acts 17:25]]). In Christian teaching, the Father, Son, and Holy Spirit enjoyed perfect love before creation (John 17), so God did not create in order to fill a lack.

**Fitting, not vain:** Pride in a human is claiming more than is true. For God, the highest honor is simply the truth about Him. He is perfectly righteous and kind in all His ways ([[Psalm 145:17]]). Worship is the right response to that reality, just as admiring a masterpiece is the right response to great art.

**Worship is for human good:** C.S. Lewis wrote in *Reflections on the Psalms* that he was once troubled by God's demand for praise, until he saw that people naturally praise whatever they enjoy, and that praise completes the enjoyment. Commanding worship is commanding people to enjoy the best thing there is. Knowing God is eternal life ([[John 17:3]]).

**Everyone worships something:** People give their highest devotion to something: money, success, pleasure, or themselves. When people refuse to honor God, their thinking becomes futile and their hearts darkened ([[Romans 1:21-22]]). Psalm 115 notes that people become like what they worship.

**The first commandment:** “You shall have no other gods before Me” ([[Exodus 20:3]]). Jesus called loving God with all the heart, soul, and mind the greatest commandment ([[Matthew 22:37-38]]). Failing to put God first is the first way people break His Law.

**Further reading:** C.S. Lewis, *Reflections on the Psalms* (chapter “A Word about Praising”).`,
    talk: `**How to say it:** “It's ego if you're claiming more than you deserve. God isn't.”

**Questions to ask:**
- “What's your favorite band or team? Do you ever tell people about them?”
- “Is that ego on their part, or just you enjoying something great?”

**If they say “God must be insecure”:** “He doesn't need anything from us” ([[Acts 17:25]]). Worship is for our good, not His.

**If they say “I don't worship anything”:** “What do you live for? Whatever that is, that's your god.”

**Bridge to the gospel:** Use the first commandment. “Have you always loved God more than anything else?” Then go through the rest of the Law. ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Acts 17:25", "Exodus 20:3", "Matthew 22:37-38", "Romans 1:21-22", "Psalm 145:17"],
    related: ["evidence/the-law", "paths/way-of-the-master"],
  },
  {
    id: "bible-circular",
    category: "The Bible",
    title: "You're using the Bible to prove the Bible",
    topic: "The Bible and Circular Reasoning",
    lead: "Circular reasoning assumes the very thing it sets out to prove. Skeptics often raise the charge once a verse is quoted, so it matters how the Bible's claims can be tested without simply assuming them.",
    alsoAsked: ["That's circular reasoning", "You can't quote the Bible to prove the Bible", "The Bible says it's true, so it's true?"],
    inBrief: "The Bible is a collection of ancient sources that can be tested like any other history, and outside evidence agrees with it at many points.",
    tip: "agree that “it's true because it says so” is circular. Then show you're not doing that.",
    sources: ["Greg Koukl", "Lee Strobel", "Wes Huff"],
    oneLiner: "The Bible isn't one book. It's 66 documents by about 40 authors. You test it like history.",
    askBack: "How would you test any other ancient document?",
    short: `You're right that “the Bible is true because the Bible says so” would be circular. But that's not the argument. The Bible is 66 documents by about 40 different authors. Historians treat the Gospels and Paul's letters as sources, just like they treat Tacitus or Josephus.

When we test them, they hold up: early copies, eyewitness claims, places and rulers confirmed by archaeology, and non-Christian writers who mention Jesus and His death. If the history is reliable, then we have to deal with what Jesus said, including what He said about sin.`,
    deep: `**The charge:** Circular reasoning assumes its conclusion in its premise: “The Bible is God's Word because the Bible says it is God's Word.” Christian apologists generally agree that such an argument proves nothing on its own.

**Not one book:** The Bible is a collection of 66 documents written by about 40 authors over roughly 1,500 years, in three languages. When Luke, Paul, John, and Matthew report the same events, they function as separate witnesses, not a single source repeating itself.

**Treated as historical sources:** Historians of the ancient world use the Gospels and Paul's letters as sources for first-century Judea, the same way they use Tacitus or Josephus. Doing so assumes nothing about inspiration. Luke states that he investigated carefully so readers could know the exact truth ([[Luke 1:3-4]]), and Peter claims to have been an eyewitness, not a teller of clever tales ([[2 Peter 1:16]]). See {{The Gospels as Eyewitness Accounts|evidence/eyewitness-gospels}}.

**Evidence outside the Bible:**
- **Non-Christian writers:** Tacitus, Josephus, and Pliny the Younger mention Jesus or His followers, and Tacitus records His execution under Pontius Pilate.
- **Archaeology:** The Pilate Stone, the Tel Dan inscription naming the “house of David,” and sites such as the pool of Bethesda confirm people and places the Bible names.
- **Manuscripts:** Thousands of early copies allow the original text to be reconstructed with confidence. See {{Has the Bible Been Changed?|evidence/bible-reliability}}.

**The shape of the argument:** A common non-circular case runs in steps:
- The New Testament documents are generally reliable historical sources.
- They report that Jesus claimed divine authority and rose from the dead, a claim made publicly before many living witnesses ([[1 Corinthians 15:6]], [[Acts 1:3]]).
- If Jesus rose, His claims are vindicated.
- Jesus treated the Old Testament as the Word of God that cannot be broken ([[John 10:35]], [[Luke 24:44]]).

Inspiration is the conclusion of this case, not its starting assumption.

**Testing is biblical:** Scripture itself commends examining claims rather than accepting them blindly ([[Acts 17:11]], [[1 Thessalonians 5:21]]).

**Another approach:** Presuppositional apologists argue that every worldview rests on an ultimate authority that cannot be proven by something higher, so all final standards involve some circularity. On this view, the question is which ultimate standard can account for logic, morality, and knowledge.

**Further reading:** Lee Strobel, *The Case for Christ*. Greg Koukl, *Tactics*. Wes Huff's talks on the manuscripts and historical evidence for Jesus. See also {{Jesus never existed|objections/jesus-existed}}.`,
    talk: `**How to say it:** Agree first. “You're right, ‘it's true because it says so’ would be circular.” Then: “I'm not saying that. I'm treating it like any other ancient source.”

**Questions to ask:**
- “How do historians test any ancient document?”
- “Is Luke's Gospel the same source as Paul's letters?”
- “If a non-Christian historian says Jesus was crucified, is that circular too?”

**If they say “But it's all one book”:** “It's 66 documents by about 40 authors, bound together later. Like a library on one shelf.”

**If they say “Show me evidence outside the Bible”:** “Tacitus and Josephus mention Jesus. Archaeology has found Pilate's name in stone.” See {{Has the Bible Been Changed?|evidence/bible-reliability}}.

**If they say “Everyone believes their book”:** “Fair. So let's test this one. Most holy books can't be checked like this.” See {{Why trust the Bible over the Quran or the Book of Mormon?|objections/bible-vs-other-books}}.

**Bridge to the gospel:** There is a witness that doesn't need a book at all. The conscience already knows lying and stealing are wrong ([[Romans 2:15]]). “Forget the Bible for a second. Have you ever lied?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Luke 1:3-4", "2 Peter 1:16", "1 Corinthians 15:6", "Acts 17:11", "Romans 2:15"],
    related: ["evidence/bible-reliability", "evidence/eyewitness-gospels", "objections/jesus-existed"],
  },
  {
    id: "bible-myths",
    category: "The Bible",
    title: "The Bible is just myths and fairy tales",
    topic: "Miracle Accounts and Biblical Genre",
    lead: "Critics often dismiss the Bible's miracle accounts, such as the serpent in Eden, Noah's ark, and Jonah and the great fish, as myths. The question is whether the biblical writers meant these as history and whether such events are possible.",
    alsoAsked: ["A talking snake? Really?", "Noah's ark and Jonah in a whale are fairy tales", "Adam and Eve are just a story"],
    inBrief: "The Bible presents these events as history, Jesus treated them as real, and if God exists, miracles are not impossible.",
    tip: "don't defend every story at once. Find out what they actually doubt.",
    otherViews: [
      { name: "Naturalism", text: "Nature is all there is, so miracle stories must be legend, myth, or mistake." },
      { name: "Liberal theology", text: "Early chapters of Genesis and Jonah are meaningful stories that teach truth without being historical." },
      { name: "Christianity", text: "The accounts are real history recorded as such, and the God who made the world can act in it." },
    ],
    sources: ["C.S. Lewis", "Ray Comfort", "Greg Koukl"],
    oneLiner: "They sound strange if there's no God. If God made the universe, they're not hard for Him.",
    askBack: "Do you think God exists? If He does, could He do a miracle?",
    short: `I get it. A talking snake and a man in a fish sound like fairy tales. But fairy tales start with “once upon a time.” The Bible gives names, places, rulers, and family trees. It's written as history, and Jesus Himself treated Noah, Jonah, and Adam and Eve as real people.

The real question is whether God exists. If He made the whole universe from nothing, a flood or a great fish is easy for Him. So the issue isn't the snake. It's God. And if He's real, we'll all stand before Him one day.`,
    deep: `**The objection:** Accounts such as the serpent in Eden (Genesis 3), the worldwide flood (Genesis 6 to 9), and Jonah swallowed by a great fish (Jonah 1 to 2) are compared with fables and children's stories. The objection is usually ridicule rather than argument: the events sound unlikely, so they are assumed to be false.

**Genre and intent:** Myths and fairy tales are typically set in no particular time or place. Genesis and Jonah are written as historical narrative, with genealogies, named places (the Tigris and Euphrates, Nineveh), and ties to later recorded history. The Gospels name rulers and places that can be checked. Peter insists the apostles did not follow cleverly devised tales but were eyewitnesses ([[2 Peter 1:16]]). C.S. Lewis, a scholar of myth and legend, argued that the Gospels do not read like legend.

**Jesus treated them as history:**
- **Adam and Eve:** God made them male and female from the beginning of creation ([[Mark 10:6]], [[Matthew 19:4-6]]).
- **Noah:** Jesus compared His return to the days of Noah, when the flood came and took them all away ([[Matthew 24:37-39]]).
- **Jonah:** Jesus compared His three days in the tomb to Jonah's three days in the fish ([[Matthew 12:40]]), and said the men of Nineveh repented at Jonah's preaching (Matthew 12:41).

**The serpent:** The text presents more than a talking animal. Later Scripture identifies the serpent with Satan (Revelation 12:9), a spiritual being speaking through a creature.

**The flood:** Scripture describes a real, worldwide judgment, and the ark's dimensions ([[Genesis 6:15]]) fit a seaworthy vessel. See {{Noah's Flood|convictions/flood}}.

**If God exists, miracles are possible:** A miracle is God acting in the world He made. Ruling miracles out in advance assumes there is no God, which is the question at issue. Compared with creating the universe ([[Genesis 1:1]]), a flood or a great fish is a small thing. See {{Miracles are impossible|objections/miracles}}.

**Strange is not the same as false:** Many true things sound strange at first. The test of a historical claim is the evidence and the reliability of the sources, not whether it fits everyday experience.

**Further reading:** C.S. Lewis, *Miracles*. Lee Strobel, *The Case for Miracles*.`,
    talk: `**How to say it:** Take the ridicule in stride. “Yeah, it sounds wild. Fair enough.” Then: “Fairy tales say ‘once upon a time.’ The Bible gives names and places.”

**Questions to ask:**
- “Which one bothers you most?”
- “Do you think God exists?”
- “If God made the universe, is a flood hard for Him?”

**If they say “A talking snake, though?”:** “The Bible says it was Satan using a snake. That's not a cartoon.”

**If they say “Jonah couldn't survive in a fish”:** “Not without a miracle. That's the point. Jesus said it really happened.”

**If they say “Noah's ark couldn't fit the animals”:** Keep it short and point to {{Noah's Flood|convictions/flood}}. Don't get stuck on details.

**If they say “Miracles don't happen”:** “That assumes there's no God. That's what we're asking.” ({{Miracles are impossible|objections/miracles}})

**Bridge to the gospel:** Jesus used Noah as a warning: judgment came suddenly ([[Matthew 24:37-39]]). “If God judged the world once, would you be ready if He judged you today?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["2 Peter 1:16", "Matthew 24:37-39", "Matthew 12:40", "Mark 10:6", "Genesis 1:1"],
    related: ["convictions/flood", "objections/miracles", "evidence/eyewitness-gospels"],
  },
  {
    id: "archaeology",
    category: "The Bible",
    title: "Archaeology proves the Bible wrong",
    topic: "Archaeology and the Bible",
    lead: "Biblical archaeology studies the physical remains of the lands and peoples the Bible describes. Its findings are often cited both for and against the Bible's historical reliability.",
    alsoAsked: ["The Exodus never happened", "There's no evidence for David", "Archaeologists say the Bible is made up"],
    inBrief: "Archaeology has confirmed many people and places the Bible names; it has never refuted a core biblical claim, though some questions remain debated.",
    tip: "ask which find they mean. Usually it's a documentary, not a dig.",
    otherViews: [
      { name: "Minimalist scholars", text: "Much of the Old Testament history was written late and has little historical basis, especially before the monarchy." },
      { name: "Maximalist scholars", text: "The biblical texts preserve real memories of early Israel, and the evidence fits them better than critics allow." },
      { name: "Christianity", text: "The Bible is true history; archaeology often confirms it, and gaps in the evidence are not disproof." },
    ],
    sources: ["Lee Strobel", "Wes Huff"],
    oneLiner: "Archaeology keeps confirming people and places in the Bible. Which find do you mean?",
    askBack: "Which discovery do you have in mind?",
    short: `Archaeology has actually confirmed a lot in the Bible. A stone with Pontius Pilate's name was found in 1961. An inscription mentioning the “house of David” turned up in the 1990s, after critics had said David was a legend. And the Dead Sea Scrolls showed the Old Testament had been copied faithfully.

There are things we haven't found yet, like direct Egyptian records of the Exodus. But not finding something isn't proof it didn't happen. Most ancient sites have never been dug. The Bible keeps getting checked, and it keeps holding up.`,
    deep: `**What archaeology can and cannot do:** Archaeology can confirm people, places, customs, and events in a historical setting. It cannot directly prove or disprove a miracle or a spiritual claim. Its evidence is also partial: only a fraction of ancient sites have been excavated, and much ancient material has not survived.

**Confirmations (examples):**
- **The Pilate Stone** (found at Caesarea, 1961) names Pontius Pilate as prefect of Judea.
- **The Tel Dan inscription** (found in the 1990s, ninth century BC) refers to the “house of David,” the earliest known mention of David outside the Bible, at a time when some scholars treated him as legendary.
- **The Merneptah Stele** (about 1200 BC) names Israel as a people in Canaan.
- **Assyrian records** of Sennacherib describe his campaign against Judah and King Hezekiah in Jerusalem, matching the setting of 2 Kings 18 and 19.
- **Belshazzar** (Daniel 5) was once unknown outside the Bible; Babylonian texts later showed he was the son of King Nabonidus and ruled in Babylon.
- **The pools of Bethesda and Siloam** in Jerusalem, described in John's Gospel, have been excavated.
- **Luke's details:** Luke uses local titles and place names accurately in Acts, such as the “politarchs” of Thessalonica (Acts 17:6), a title confirmed by inscriptions. Luke presents himself as a careful investigator ([[Luke 1:3-4]]).

**The Dead Sea Scrolls:** Found from 1947, they include a copy of Isaiah about 1,000 years older than the copies known before, and it matches closely. See {{Has the Bible Been Changed?|evidence/bible-reliability}}.

**Absence of evidence:** Not finding evidence is different from finding evidence against. Several biblical names once doubted (David, Belshazzar, the Hittite people) were later confirmed.

**The Exodus debate:** No Egyptian record directly describing the Exodus has been found, and scholars disagree about its date and about how to read the evidence. Some conclude it did not happen as described. Others, such as Egyptologists James Hoffmeier and Kenneth Kitchen, argue that the Egyptian details in the account fit the period and that a group moving through the desert would leave little lasting trace. Ancient Egyptian records also tended not to record national defeats. The question remains debated; archaeology has not settled it either way.

**Examining claims:** Scripture encourages testing claims ([[1 Thessalonians 5:21]]), and the first account in a dispute can seem right until it is examined ([[Proverbs 18:17]]).

**Further reading:** Lee Strobel, *The Case for Christ* (interview with archaeologist John McRay). Kenneth Kitchen, *On the Reliability of the Old Testament*. James Hoffmeier, *Israel in Egypt*.`,
    talk: `**Questions to ask:**
- “Which find do you mean?”
- “Where did you hear that?”
- “Is that evidence against it, or just evidence we haven't found?”

Most people heard it in a documentary or online and can't name a specific dig ({{Columbo|skills/columbo}}).

**How to say it:** Keep it modest. “Archaeology doesn't prove everything. But it keeps confirming names and places.”

**If they say “There's no evidence for David”:** “There is. The Tel Dan inscription mentions the ‘house of David.’”

**If they say “The Exodus never happened”:** Don't overstate. “Scholars debate it. Not finding Egyptian records isn't proof it didn't happen. Egypt didn't usually record its defeats.”

**If they say “Archaeology can't prove miracles”:** “True. But it shows the writers knew real places and real people.”

**Bridge to the gospel:** The Bible's history checks out. Its words about us do too. “The same Book says all have sinned. Do you think that's true of you?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Luke 1:3-4", "1 Thessalonians 5:21", "Proverbs 18:17", "Isaiah 40:8"],
    related: ["evidence/bible-reliability", "objections/bible-changed", "evidence/eyewitness-gospels"],
  },
  {
    id: "bible-sexist",
    category: "The Bible",
    title: "The Bible is sexist",
    topic: "Women in the Bible",
    lead: "Critics charge that the Bible treats women as inferior or as property. The question concerns what Scripture teaches about women's worth and how Jesus treated women.",
    alsoAsked: ["The Bible treats women as property", "Christianity oppresses women", "Why can't women be pastors?"],
    inBrief: "Women are made in God's image with equal worth, Jesus honored them, and they were the first witnesses of the resurrection.",
    tip: "ask which passage they mean. Then read it in context together.",
    otherViews: [
      { name: "Secular critics", text: "Biblical texts reflect ancient patriarchy and should be judged by modern standards of equality." },
      { name: "Egalitarian Christians", text: "Men and women are equal in worth, and every role in church and home is open to both." },
      { name: "Complementarian Christians", text: "Men and women are equal in worth, with some different roles in church and home." },
    ],
    sources: ["Greg Koukl", "Ray Comfort"],
    oneLiner: "The Bible says women are made in God's image. Jesus chose women as first witnesses.",
    askBack: "Which passage are you thinking of?",
    short: `The Bible starts by saying God made both male and female in His image. Same worth, same dignity. And Jesus treated women in ways that surprised people in His day. He taught them, spoke with them in public, and had women among His followers.

When He rose from the dead, the first witnesses were women, in a culture where their word often counted for less. If someone were making it up, they wouldn't write it that way. The Bible says men and women are equal before God, and equally guilty before Him too.`,
    deep: `**Equal in creation:** Both male and female are created in the image of God ([[Genesis 1:27]]). Women and men share the same dignity and worth from the first chapter of the Bible.

**Equal in salvation:** In Christ there is neither male nor female; all are one in Him ([[Galatians 3:28]]). Peter calls husbands and wives fellow heirs of the grace of life (1 Peter 3:7).

**How Jesus treated women:**
- He spoke publicly with a Samaritan woman, crossing barriers of both sex and ethnicity ([[John 4:7]]).
- He taught Mary of Bethany as she sat at His feet, the posture of a disciple (Luke 10:39).
- Women traveled with Him and supported His ministry (Luke 8:1-3).
- Women stayed at the cross when most of the male disciples had fled.

**First witnesses of the resurrection:** Women, including Mary Magdalene, were the first to find the empty tomb and see the risen Jesus. In that culture a woman's testimony was often given less weight, so historians note that writers inventing a story would be unlikely to make women the first witnesses.

**Husbands and wives:** The New Testament commands husbands to love their wives as Christ loved the church and gave Himself for it ([[Ephesians 5:25]]), a standard of sacrificial love.

**Old Testament laws:** Some laws regulated customs of the ancient world rather than endorsing them, much as with slavery (see {{The God of the Old Testament is cruel|objections/ot-cruel}}). Many laws protected women, such as the death penalty for rape, which treated the woman as an innocent victim ([[Deuteronomy 22:25-26]]). Many stories, such as polygamy, are recorded rather than approved, while God's design from the beginning is one man and one woman ([[Matthew 19:4-6]]).

**Women in the early church:** Priscilla helped explain the gospel to Apollos ([[Acts 18:26]]), Phoebe served the church at Cenchrea ([[Romans 16:1]]), and daughters as well as sons would prophesy ([[Acts 2:17-18]]).

**Roles in the church:** Many Christians hold that the office of pastor or elder is given to qualified men ([[1 Timothy 2:12]]), while affirming equal worth; others believe all roles are open to women. Difference of role is not a difference of value. See {{Women in Ministry|convictions/women-in-ministry}}.

**Further reading:** Rebecca McLaughlin, *Confronting Christianity*, chapter on women.`,
    talk: `**Questions to ask:**
- “Which passage are you thinking of?”
- “What do you mean by sexist?”
- “Where do you get the idea that women have equal worth?”

Often they mean one verse they've heard quoted. Read it in context together ({{Columbo|skills/columbo}}).

**How to say it:** Start with Genesis 1:27. “Page one says women are made in God's image.” Then: “Jesus' first resurrection witnesses were women.”

**If they say “Women can't be pastors”:** “That's about role, not worth. Men and women are equal before God.” See {{Women in Ministry|convictions/women-in-ministry}}.

**If they say “The Old Testament treats women as property”:** “Some laws limited ancient customs. Others protected women, like the death penalty for rape.”

**If they say “Wives have to submit”:** “Husbands are told to love their wives like Christ, who died for the church.”

**Bridge to the gospel:** Equal in worth also means equal before God's Law. “God made us all in His image, and we'll all stand before Him. Have you kept His commandments?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Genesis 1:27", "Galatians 3:28", "John 4:7", "Ephesians 5:25", "Acts 2:17-18"],
    related: ["convictions/women-in-ministry", "objections/ot-cruel", "paths/way-of-the-master"],
  },
  {
    id: "bible-outdated",
    category: "The Bible",
    title: "The Bible is outdated",
    topic: "The Relevance of Scripture",
    lead: "A common objection holds that the Bible was written for ancient people and has nothing to say to the modern world. The question is whether its central teachings depend on time and culture.",
    alsoAsked: ["It was written thousands of years ago", "It's a Bronze Age book", "That was for people back then"],
    inBrief: "God's character and human nature have not changed, so the Bible's diagnosis of sin and its offer of grace still apply.",
    tip: "ask what part feels outdated. Lying and greed never go out of date.",
    otherViews: [
      { name: "Secular progressivism", text: "Moral understanding improves over time, so ancient texts should give way to modern values." },
      { name: "Islam", text: "Earlier Scriptures were real revelations but have been superseded by the Quran as God's final word." },
      { name: "Christianity", text: "God and human nature do not change, so His Word speaks to every generation." },
    ],
    sources: ["Ray Comfort", "Mark Spence", "Living Waters"],
    oneLiner: "Technology changes. People don't. Lying and greed aren't outdated.",
    askBack: "Is lying wrong today, or was that just for back then?",
    short: `Old doesn't mean wrong. Our phones change every year, but people haven't changed at all. We still lie, steal, lust, and get angry, the same as people did thousands of years ago.

The Bible's main message is about two things that never change: who God is and who we are. Let's test it. “You shall not lie” is from the Ten Commandments. Is that outdated? Have you ever told a lie?`,
    deep: `**Old is not the same as false:** The age of an idea says nothing about whether it is true. Mathematics and logic are ancient; so are the moral rules against murder and theft. Dismissing a claim because of its date is sometimes called “chronological snobbery,” a term associated with C.S. Lewis and Owen Barfield.

**God does not change:** “I, the LORD, do not change” ([[Malachi 3:6]]). His Word stands forever ([[Isaiah 40:8]]), and Jesus said His words would not pass away ([[Matthew 24:35]]). Scripture describes itself as living and active, able to judge the thoughts of the heart ([[Hebrews 4:12]]).

**Human nature does not change:** Technology and customs change, but the human heart does not. The heart is described as deceitful ([[Jeremiah 17:9]]), and there is nothing new under the sun ([[Ecclesiastes 1:9]]). Lying, greed, lust, and pride look the same in every age.

**The moral law still applies:** The moral law is written on the conscience ([[Romans 2:15]]). Through the Law comes the knowledge of sin ([[Romans 3:20]]). Commands such as “You shall not lie” ([[Exodus 20:16]]) and “You shall not steal” ([[Exodus 20:15]]) are not tied to one culture.

**Fulfilled, not expired:** Some Old Testament laws (sacrifices, food laws, and other ceremonial laws) pointed to Christ and were fulfilled in Him, so Christians no longer keep them. That is fulfillment, not the Bible becoming outdated. See {{Christians pick and choose|objections/pick-and-choose}} and {{The Law|evidence/the-law}}.

**Further reading:** C.S. Lewis, *Surprised by Joy* (on chronological snobbery). Ray Comfort and Living Waters on using the Law.`,
    talk: `**Questions to ask:**
- “Which part feels outdated to you?”
- “Is lying wrong today?”
- “Has human nature changed in 3,000 years?”

**How to say it:** “Phones change. People don't.” Then go straight to the commandments: they show the Bible is current because they describe the listener.

**If they say “What about shellfish and mixed fabrics?”:** “Those laws pointed to Jesus and were fulfilled. The moral law still stands.” ({{Christians pick and choose|objections/pick-and-choose}})

**If they say “We've moved past that morally”:** “Moved past it compared to what? You'd need a standard that doesn't change.”

**If they say “It's a Bronze Age book”:** “So are the laws against murder. Old doesn't mean wrong.”

**Bridge to the gospel:** Let the Law show it's not outdated. “Have you ever lied? Stolen? Used God's name as a curse word?” The conscience agrees every time ([[Romans 2:15]]). ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Malachi 3:6", "Isaiah 40:8", "Hebrews 4:12", "Romans 2:15", "Exodus 20:16"],
    related: ["evidence/the-law", "objections/pick-and-choose", "paths/way-of-the-master"],
  },
  {
    id: "bible-vs-other-books",
    category: "The Bible",
    title: "Why trust the Bible over the Quran or the Book of Mormon?",
    topic: "The Bible and Other Scriptures",
    lead: "Many religions have sacred books that claim divine authority. The question is whether there are good reasons to trust the Bible's claims over those of other scriptures such as the Quran and the Book of Mormon.",
    alsoAsked: ["Every religion has a holy book", "Why is your book better than theirs?", "How do you know the Bible is the right one?"],
    inBrief: "The Bible's central claim, the resurrection, was made publicly before many eyewitnesses, and its history, prophecy, and manuscripts can be tested.",
    tip: "be respectful of the other books. Compare evidence, not insults.",
    otherViews: [
      { name: "Islam", text: "The Quran was revealed to Muhammad through the angel Gabriel and is God's final, perfectly preserved word, confirmed by its unmatched beauty." },
      { name: "Latter-day Saints", text: "The Book of Mormon is another testament of Jesus Christ, translated by Joseph Smith, and confirmed by the witness of the Holy Spirit in prayer." },
      { name: "Skeptics", text: "All holy books are human products, and none has better claim to divine authority than the others." },
      { name: "Christianity", text: "God revealed Himself publicly in history, through many witnesses, culminating in the risen Jesus." },
    ],
    sources: ["Cliff Knechtle", "Lee Strobel", "Wes Huff"],
    oneLiner: "The Bible can be tested: public events, many eyewitnesses, early copies.",
    askBack: "How would you test whether a book is from God?",
    short: `Good question. Most holy books rest on one man's private experience. Muhammad said an angel spoke to him alone. Joseph Smith said an angel showed him golden plates. You can't check that.

The Bible is different. It's many authors over many centuries, and its central claim happened in public: Jesus was crucified and rose again in Jerusalem, and hundreds of people saw Him alive. The authorities could have shown His body. They didn't. That's something you can investigate.`,
    deep: `**The question:** Many sacred texts claim divine authority. Comparing them involves asking what each claims and whether those claims can be tested.

**The Quran:** Muslims believe the Quran was revealed to Muhammad through the angel Gabriel over about 23 years (AD 610 to 632) and compiled into a standard text in the decades after his death. Muslims often point to its literary excellence as a sign of its divine origin. It was given about six centuries after Jesus, and it denies that Jesus was crucified (Surah 4:157), while first-century sources, including non-Christian ones such as Tacitus and Josephus, report His crucifixion. The Quran also affirms the earlier Scriptures (Surah 5:47). See {{Muslim|people/muslim}}.

**The Book of Mormon:** Latter-day Saints believe Joseph Smith translated it from golden plates shown to him by the angel Moroni, publishing it in 1830. Two groups of witnesses (the Three and the Eight) signed statements that they saw the plates; the plates themselves are said to have been returned to the angel. The book describes nations, cities, and wars in the ancient Americas, but no Book of Mormon city or people has been identified by mainstream archaeology. Latter-day Saints are invited to confirm it by prayer (Moroni 10:4). See {{Mormon|people/mormon}}.

**What sets the Bible apart:**
- **Many authors:** About 40 writers over roughly 1,500 years, rather than one person's revelation.
- **Public events:** The resurrection was proclaimed in Jerusalem, where it could be checked, and Paul named more than 500 witnesses, most still alive ([[1 Corinthians 15:6]]). Paul told a Roman governor that these things were not done in a corner ([[Acts 26:26]]).
- **Falsifiable:** Christianity stakes everything on one checkable event: if Christ has not been raised, faith is worthless ([[1 Corinthians 15:17]]). See {{Minimal Facts|evidence/resurrection}}.
- **Eyewitness testimony:** The apostles claimed to be eyewitnesses, not tellers of clever tales ([[2 Peter 1:16]]). See {{The Gospels as Eyewitness Accounts|evidence/eyewitness-gospels}}.
- **Prophecy:** God declares the end from the beginning ([[Isaiah 46:9-10]]). See {{Prophecy|evidence/prophecy}}.
- **Manuscripts and archaeology:** Thousands of early copies and many confirmed places and people. See {{Has the Bible Been Changed?|evidence/bible-reliability}}.

**Feelings and private revelation:** Inner experiences can be sincere and still mistaken, since the heart can deceive ([[Jeremiah 17:9]]). Scripture warns against accepting a different gospel even from an angel ([[Galatians 1:8]]) and commends testing claims ([[Acts 17:11]]).

**Further reading:** Nabeel Qureshi, *Seeking Allah, Finding Jesus*. Bill McKeever and Eric Johnson, *Mormonism 101*. Lee Strobel, *The Case for the Real Jesus*.`,
    talk: `**How to say it:** Be fair and respectful. “Sincere people believe all of these.” Then compare how each can be tested: “One man, alone, with an angel? Or hundreds of people seeing Jesus alive?”

**Questions to ask:**
- “How would you test whether a book is from God?”
- “Can anyone check what happened to Muhammad in the cave?”
- “Could the authorities in Jerusalem have stopped Christianity by showing the body?”

**If they're Muslim:** Don't insult Muhammad or the Quran. Ask: “The Quran says the Gospel came from God. When was it changed?” See {{Muslim|people/muslim}}.

**If they're LDS:** Be kind and define terms. If they mention a burning in the bosom: “Feelings can mislead. How do we test them?” See {{Mormon|people/mormon}}.

**If they say “All holy books are man-made”:** “Then test them. Christianity is the one that says: if Jesus didn't rise, throw it out.” ([[1 Corinthians 15:17]])

**Bridge to the gospel:** The books disagree about the cross. “Every religion says do more. The Bible says Jesus paid it all. Have you kept God's Law?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["1 Corinthians 15:6", "1 Corinthians 15:17", "Acts 26:26", "2 Peter 1:16", "Galatians 1:8"],
    related: ["people/muslim", "people/mormon", "evidence/resurrection"],
  },
  {
    id: "self-defense",
    category: "Church & Christians",
    title: "Can a Christian use force to defend themselves?",
    topic: "Self-Defense and the Christian",
    lead: "Christians have long asked whether Jesus' command to turn the other cheek forbids using force to protect yourself or others. Most Christians through history have held that defending innocent life is allowed, while revenge and retaliation are not.",
    alsoAsked: ["Doesn't Jesus say to turn the other cheek?", "Should a Christian own a gun?", "Would you kill an intruder to protect your family?"],
    inBrief: "Yes, to protect life when necessary: Scripture forbids revenge, not defending the innocent. But Christians accept suffering for the gospel itself without retaliating.",
    tip: "separate revenge, insults, and persecution from a real threat to life.",
    otherViews: [
      { name: "Christian pacifism", text: "Some Christians, such as many Anabaptists and Quakers, believe Jesus forbids all violence, even in self-defense." },
      { name: "Just defense", text: "Most Christians historically hold that protecting innocent life with proportionate force is right, while revenge is forbidden." },
      { name: "Secular law", text: "Many legal systems allow reasonable force against an immediate threat, but not retaliation after the danger has passed." },
    ],
    sources: [],
    oneLiner: "Protecting life is right; revenge isn't. And we accept persecution for Jesus.",
    askBack: "Do you think protecting someone from harm is the same as getting revenge?",
    short: `Jesus said to turn the other cheek, but a slap on the cheek was an insult, not a threat to your life. He was forbidding personal revenge, not protecting the innocent. The Law even allowed a homeowner to defend his house against a thief at night.

Life is precious because people are made in God's image, so protecting it matters. But Christians don't retaliate, and when we suffer for the gospel itself, we follow Jesus, who didn't fight back.`,
    deep: `**The question:** Jesus taught, “Do not resist an evil person; but whoever slaps you on your right cheek, turn the other to him also” ([[Matthew 5:39]]). Some read this as forbidding all force. Others read it as forbidding personal revenge, while still allowing the defense of life.

**Turn the other cheek:** A backhanded slap on the right cheek was an insult, not a threat to life. The surrounding verses deal with personal retaliation (“an eye for an eye”) and wrongs done to a person's honor or property. The command forbids paying back insult with insult, not protecting someone from being killed.

**Revenge belongs to God:** Christians are never to pay back evil for evil or take their own revenge ([[Romans 12:17-19]]). God repays, and He has given civil government the sword to punish evildoers ([[Romans 13:4]]). Revenge looks back at a wrong already done; defense stops a harm that is happening now.

**The Law allowed defense:** A homeowner who struck a thief breaking in at night was not guilty of bloodshed. After sunrise, when the danger and the confusion were less, he was ([[Exodus 22:2-3]]). Force is limited to what the danger requires.

**Protecting others:** Scripture calls God's people to rescue the weak from the wicked ([[Psalm 82:3-4]], [[Proverbs 24:11]]) and to provide for their households ([[1 Timothy 5:8]]). Nehemiah told the people to fight for their families and homes ([[Nehemiah 4:14]]). Because people are made in God's image, human life is worth protecting ([[Genesis 9:6]]).

**The swords in Luke 22:** Before His arrest, Jesus told the disciples to buy a sword ([[Luke 22:36]]). Christians debate whether this was literal provision for travel or a picture of coming danger. When Peter used one to stop Jesus' arrest, Jesus told him to put it away ([[Matthew 26:52]]), because the cross was the Father's plan.

**Persecution for the gospel:** When Christians suffer for Christ Himself, the New Testament pattern is to endure without retaliating, as Jesus did (1 Peter 2:21-23). Stephen prayed for those killing him (Acts 7). Laying down one's life can be the greatest love ([[John 15:13]]).

**Further reading:** See {{Capital Punishment|convictions/capital-punishment}} and {{God's Law & Civil Government|convictions/theonomy}}.`,
    talk: `**Questions to ask:**
- “If someone attacked your child, would stopping them be revenge or protection?”
- “When Jesus said turn the other cheek, do you think He meant a slap or a threat to your life?”

**If they say “Jesus said turn the other cheek”:** “Right. A slap is an insult, and I shouldn't retaliate when insulted. But protecting someone's life isn't revenge. Even the Law allowed a man to defend his home at night.”

**If they say “Christians are hypocrites for owning guns”:** Agree that Christians should be slow to anger and quick to forgive. Then distinguish defense from aggression. Keep it calm; this is rarely the main issue.

**If they're a Christian pacifist:** Respect their conviction. Many faithful believers hold it. Point to Romans 12 and 13 together: no personal revenge, but God does give the sword to government to restrain evil.

**Keep the gospel central:** Don't let this become a political debate. Bring it back: “The bigger question is what God will do with the evil in our own hearts.”

**Bridge to the gospel:** Jesus could have defended Himself, but He chose to lay down His life for sinners. “He didn't fight back, so He could take our place. Can I ask you how you'd do on Judgment Day?” ({{Way of the Master|paths/way-of-the-master/2}})`,
    verses: ["Matthew 5:39", "Romans 12:17-19", "Exodus 22:2-3", "Psalm 82:3-4", "John 15:13"],
    related: ["convictions/capital-punishment", "objections/dont-judge"],
  },
  {
    id: "doubting-salvation",
    category: "The Gospel & Salvation",
    title: "If I doubt my salvation, does that mean I'm not saved?",
    topic: "Doubt and Assurance",
    lead: "Many Christians go through seasons of doubting whether they are truly saved. Scripture distinguishes salvation, which rests on Christ's work, from assurance, the believer's confidence in it, which can grow or weaken.",
    alsoAsked: ["How do I know I'm really saved?", "A pastor said if you doubt, you're not saved. Is that true?"],
    inBrief: "No. Doubt and being lost are different. Salvation rests on Christ; assurance grows by looking to Him, while self-examination is commanded, not a sign of being lost.",
    tip: "find out what's behind the doubt: sin, fear, a hard season, or never having trusted Christ.",
    sources: ["Ray Comfort", "Living Waters"],
    oneLiner: "Doubt doesn't mean you're lost. Look to Christ, not your feelings.",
    askBack: "Are you trusting Jesus alone to save you, and do you hate your sin?",
    short: `Being saved and feeling sure aren't the same thing. Salvation rests on what Jesus did. Assurance is our confidence in it, and that can go up and down. John wrote his letter so believers could know they have eternal life, which means some didn't feel sure yet.

People in the Bible doubted too: the father who said, “I do believe; help my unbelief.” The question isn't how strong your feelings are, but whether you're trusting Christ and turning from sin.`,
    deep: `**Salvation and assurance:** Salvation depends on Christ's finished work, not on the strength of a person's feelings ([[Ephesians 2:8-9]]). Assurance is the believer's confidence in that salvation. John wrote so that believers “may know” they have eternal life ([[1 John 5:13]]), which shows that true believers can lack that confidence and grow in it.

**Doubting believers in Scripture:**
- A father seeking healing for his son cried out, “I do believe; help my unbelief” ([[Mark 9:24]]).
- John the Baptist, in prison, sent to ask Jesus whether He was the Expected One ([[Matthew 11:3]]).
- Psalmists wrote from seasons of discouragement while still hoping in God ([[Psalm 42:5]]).

**The Spirit's witness:** The Holy Spirit testifies with the believer's spirit that they are God's children ([[Romans 8:16]]). This inner witness can feel stronger or weaker at different times.

**Self-examination is commanded:** Paul told the church to test themselves to see if they are in the faith ([[2 Corinthians 13:5]]). Asking the question is part of obedience, not proof of being lost.

**The overconfident were warned:** Those Jesus warned were not doubters but people sure of themselves: “Lord, Lord, did we not...?” ([[Matthew 7:22-23]]).

**When doubt is a warning:** Doubt that comes with no love for God, no fight against sin, and no change of life is a reason to examine whether one has truly repented and believed ([[1 John 2:3-4]]).

**Common causes of doubt:** unconfessed sin, anxiety or depression, poor teaching, hard seasons, or looking at one's own performance instead of at Christ.

**Kept by God:** Those who belong to Christ are kept by Him ([[John 10:28-29]]), and He finishes what He began ([[Philippians 1:6]]). See {{Can You Lose Your Salvation?|convictions/eternal-security}}.

**Further reading:** See {{How can I know I'm going to heaven?|objections/assurance}}.`,
    talk: `**Questions to ask:**
- “What are you trusting in to be saved?”
- “Do you hate your sin and want to follow Jesus?”
- “When did this doubt start? Did something happen?”

**If they're trusting Christ and fighting sin:** Point them away from their feelings to Christ's promise. “He keeps those who are His. Rest in what He did, not in how sure you feel today” ([[John 10:28-29]]).

**If there's unconfessed sin:** Encourage confession. God is faithful to forgive ([[1 John 1:9]]).

**If they've never truly repented:** Don't give false comfort. Take them through the Law and call them to repent and trust Christ today ({{Way of the Master|paths/way-of-the-master/7}}).

**If someone says doubt proves you're lost:** “John wrote so believers could know. That means some didn't feel sure yet. The ones Jesus warned were the overconfident.”

**How to say it:** “Doubt doesn't cancel what Jesus did. Look to Him, not to your feelings.”`,
    verses: ["1 John 5:13", "Mark 9:24", "Romans 8:16", "2 Corinthians 13:5", "John 10:28-29"],
    related: ["objections/assurance", "convictions/eternal-security"],
  },
];
