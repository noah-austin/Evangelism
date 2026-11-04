// CONVERSATION SKILLS: tactics for steering conversations
//
// Same format as paths: title, category, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.skills = [
  {
    id: "ambassador-model",
    category: "Mindset",
    title: "The Ambassador Model",
    sources: ["Greg Koukl"],
    summary: `We represent Christ to people who don't know Him yet ([[2 Corinthians 5:20]]). A good ambassador needs three things: **knowledge**, **wisdom**, and **character**. This is the big picture behind every other skill here.`,
    parts: [
      {
        heading: "Knowledge",
        body: `Know the basic message of the gospel clearly, and know enough to answer common questions. You don't need to know everything; you need to know the core well.`,
        verses: ["1 Peter 3:15"],
      },
      {
        heading: "Wisdom",
        body: `Know *how* to say it. Ask questions, stay on point, and fit your approach to the person in front of you.`,
        verses: ["Colossians 4:5-6", "Matthew 10:16"],
      },
      {
        heading: "Character",
        body: `How you treat them speaks as loudly as what you say. Be kind, patient, and honest. If you lose your temper, you lose the person.`,
        verses: ["2 Timothy 2:24-25"],
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, chapters 1 to 3.`,
      },
    ],
  },

  {
    id: "stone-in-shoe",
    category: "Mindset",
    title: "The Goal: A Stone in Their Shoe",
    sources: ["Greg Koukl"],
    summary: `You don't have to win the argument or close the deal. Aim to leave them with one good thing to think about, something that keeps bugging them after you leave.`,
    parts: [
      {
        heading: "Why this helps",
        body: `- Takes the pressure off you. God gives the growth ([[1 Corinthians 3:6]])
- Keeps the conversation friendly, so they're open to the next Christian they meet
- One good question can do more than a 20-minute speech`,
        verses: ["1 Corinthians 3:6", "2 Timothy 2:24-25"],
      },
      {
        heading: "How to do it",
        body: `- Ask more than you tell
- Pick one point and make it well
- End on a question, not a lecture`,
        ask: "Would you be willing to think about that this week?",
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, introduction and chapter 3.`,
      },
    ],
  },

  {
    id: "columbo",
    category: "Asking Questions",
    title: "Columbo",
    sources: ["Greg Koukl"],
    summary: `Stay in the driver's seat by asking questions, like the TV detective who always had “just one more thing.” Three questions, used in order.`,
    parts: [
      {
        heading: "1. Get clear",
        ask: "What do you mean by that?",
        body: `Find out what they actually believe before answering. Often the objection changes once they explain it. Words like “God,” “faith,” “truth,” and “good” mean different things to different people.`,
      },
      {
        heading: "2. Get their reasons",
        ask: "How did you come to that conclusion?",
        body: `Puts the burden of proof on the person making the claim. Many people have never thought about *why* they believe something. You're not being sneaky; you're being curious.`,
      },
      {
        heading: "3. Lead them (when ready)",
        ask: "Have you ever considered...?",
        body: `Use a question to point out a flaw or bring in a new idea gently, instead of making a statement they can push back on.`,
      },
      {
        heading: "Tips",
        body: `- Ask out of real curiosity, not as a trap
- If you get stuck, ask another question
- It also buys you time to think`,
        verses: ["Proverbs 18:13"],
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, chapters 4 to 7.`,
      },
    ],
  },

  {
    id: "suicide",
    category: "Asking Questions",
    title: "Suicide (Self-Defeating Claims)",
    sources: ["Greg Koukl"],
    summary: `Some claims defeat themselves: they fail their own standard. Spot them, then point it out gently with a question.`,
    parts: [
      {
        heading: "Examples",
        body: `- **“There is no truth.”** Then ask: “Is that true?”
- **“You shouldn't force your views on others.”** Then ask: “Isn't that what you're doing now?”
- **“All religions are true.”** That rules out every religion that says it's the only way. (See {{All religions lead to God|objections/all-religions}})
- **“Only science can tell us what's true.”** Can science prove that statement?
- **“You can't know anything about God.”** Then how do you know that about God?

See the full list: {{Self-Defeating Claims List|skills/self-defeating-claims}}.`,
      },
      {
        heading: "Tone",
        body: `Don't spring it like a trap. Ask it as a real question and let them see it themselves.`,
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, the “Suicide” chapters.`,
      },
    ],
  },

  {
    id: "taking-the-roof-off",
    category: "Asking Questions",
    title: "Taking the Roof Off",
    sources: ["Greg Koukl"],
    summary: `Take their view seriously and follow it to its logical end. If the result is something they can't accept, the view has a problem.`,
    parts: [
      {
        heading: "How it works",
        body: `1. Find out what they believe (use {{Columbo|skills/columbo}})
2. Ask, “If that's true, what follows?”
3. Point out where it leads, with a question`,
      },
      {
        heading: "Examples",
        body: `- **“Morality is just personal opinion.”** Then torturing children for fun is only wrong for you, not really wrong. (See {{The Moral Law|evidence/moral-law}})
- **“We're just chemicals and evolution.”** Then your thoughts are just chemical reactions too. Why trust them?
- **“Everyone goes to heaven.”** Including people who never wanted God? Would God force them?`,
        ask: "If that's true, how would you explain...?",
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, “Taking the Roof Off.”`,
      },
    ],
  },

  {
    id: "steamroller",
    category: "Hard Moments",
    title: "Steamroller",
    sources: ["Greg Koukl"],
    summary: `For someone who keeps interrupting, piles on objections, and won't let you finish.`,
    parts: [
      {
        heading: "1. Stop them, kindly",
        say: ["Can I finish my thought? Then I'll listen to yours."],
      },
      {
        heading: "2. Name it",
        say: ["I'd like to answer, but you keep cutting me off. Is that fair?"],
        body: `Say it calmly, without heat. Most people will back off when it's pointed out fairly.`,
      },
      {
        heading: "3. Let it go",
        body: `If they still won't listen, don't fight. Thank them, leave a tract or a question, and walk away gracefully. Others nearby are watching how you handle it.`,
        verses: ["Proverbs 15:1"],
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, “Steamroller.”`,
      },
    ],
  },

  {
    id: "rhodes-scholar",
    category: "Asking Questions",
    title: "Rhodes Scholar",
    sources: ["Greg Koukl"],
    summary: `For “Experts say…” or “Scientists have proven…”. An expert's opinion is only as good as the reasons behind it.`,
    parts: [
      {
        heading: "Questions to ask",
        ask: [
          "Which expert? What did they actually say?",
          "What reasons did they give?",
        ],
        body: `- Experts often speak outside their field
- Many experts disagree with each other
- Sometimes the conclusion comes from their worldview, not their evidence`,
      },
      {
        heading: "Watch yourself too",
        body: `Don't just answer with your own list of experts. Give the reasons.`,
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, “Rhodes Scholar.”`,
      },
    ],
  },

  {
    id: "using-the-law",
    category: "Sharing the Gospel",
    title: "Using the Law Well",
    sources: ["Ray Comfort", "Living Waters"],
    summary: `The Ten Commandments show people their sin so that grace makes sense. **Law to the proud, grace to the humble.** Used badly, the Law sounds harsh; used well, it speaks to the conscience.`,
    parts: [
      {
        heading: "Why use the Law?",
        body: `- It shows people what sin is ([[Romans 3:20]], [[Romans 7:7]])
- It leads people to Christ ([[Galatians 3:24]])
- It speaks to the conscience, which already agrees with it ([[Romans 2:15]])
- God resists the proud but gives grace to the humble ([[James 4:6]])`,
        verses: ["Romans 3:20", "Galatians 3:24", "Romans 2:15", "James 4:6"],
      },
      {
        heading: "Tone",
        body: `- Be gentle and calm, never smug
- Include yourself: “I've done these things too”
- Let them answer; don't call them names
- It's the Law that convicts, not you`,
        say: ["I'm not judging you. I'm guilty of the same things."],
      },
      {
        heading: "Don't skip to grace",
        body: `If someone thinks they're a good person, the cross makes no sense to them. Stay with the Law until they see they're guilty. Then bring the good news.

If someone is already humble and broken over their sin, go straight to grace.`,
      },
      {
        heading: "The conscience",
        body: `“Conscience” means “with knowledge.” Even people who reject the Bible know lying and stealing are wrong. Speak to that.`,
        ask: "Your conscience tells you lying is wrong, doesn't it?",
      },
      {
        heading: "Put it into practice",
        body: `Walk through the steps in {{Way of the Master|paths/way-of-the-master}}.`,
      },
      {
        heading: "Study",
        body: `Ray Comfort, *Hell's Best Kept Secret* (message and book) and *The Way of the Master*. Comfort draws on preachers like Charles Spurgeon who used the Law this way.`,
        verses: ["1 Timothy 1:8"],
      },
    ],
  },

  {
    id: "knechtle-questions",
    category: "Asking Questions",
    title: "Questions to Ask",
    sources: ["Cliff Knechtle", "Stuart Knechtle"],
    summary: `Get people thinking about their own worldview. Listen well, then answer directly from Scripture.`,
    parts: [
      {
        heading: "About what they believe",
        ask: [
          "What do you think happens after you die?",
          "Why do you believe that?",
        ],
        body: `- “How sure are you, on a scale of 1 to 10?”
- “If you're wrong, what's at stake?”
- “What would it take to change your mind?”`,
      },
      {
        heading: "About meaning and morality",
        body: `- “Where do you get your sense of right and wrong?”
- “What gives your life meaning?”
- “Who do you think Jesus is?”`,
      },
      {
        heading: "Style notes",
        body: `- Thank them for the question, and mean it
- Let them finish before you answer
- Answer the question they actually asked
- Bring it back to Jesus and the resurrection`,
        verses: ["1 Peter 3:15"],
      },
      {
        heading: "Study",
        body: `Cliff Knechtle, *Give Me an Answer*, and the Knechtles' “Give Me an Answer” campus videos.`,
      },
    ],
  },

  {
    id: "listening-well",
    category: "Asking Questions",
    title: "Listening Well",
    sources: ["Cliff Knechtle", "Stuart Knechtle"],
    summary: `People listen to you after they feel heard. Listening also tells you which question they're really asking.`,
    parts: [
      {
        heading: "1. Listen all the way",
        body: `Don't plan your answer while they're talking. Let them finish.`,
        verses: ["James 1:19", "Proverbs 18:13"],
      },
      {
        heading: "2. Restate it",
        say: ["So what you're saying is... Did I get that right?"],
        body: `If you can say their view back in a way they agree with, you've earned the right to respond.`,
      },
      {
        heading: "3. Thank them",
        say: ["That's a great question. Thanks for asking it."],
      },
      {
        heading: "4. Answer what they asked",
        body: `Answer the actual question, briefly. Then turn it back to Jesus.

**Watch for pain.** Some questions are really personal hurt dressed up as an argument. Be gentle there.`,
      },
      {
        heading: "Study",
        body: `Watch the Knechtles' “Give Me an Answer” videos and notice how often they restate the question before answering.`,
      },
    ],
  },

  {
    id: "staying-calm",
    category: "Hard Moments",
    title: "Staying Calm Under Fire",
    sources: ["Ray Comfort", "Cliff Knechtle"],
    summary: `Hostility, mockery, and hecklers come with the territory. Your calm answer may matter more than your argument.`,
    parts: [
      {
        heading: "Remember",
        body: `- You're not the target; Christ is
- The person yelling is still someone God loves
- Others nearby are watching how you respond`,
        verses: ["2 Timothy 2:24-25", "Proverbs 15:1"],
      },
      {
        heading: "When it gets heated",
        say: [
          "I can tell this matters to you. Can I ask why?",
          "I'm not here to fight. I care about where you'll spend eternity.",
        ],
        body: `- Lower your voice, don't raise it
- Don't take the bait on side issues
- Agree where you honestly can`,
      },
      {
        heading: "Hecklers",
        body: `- Stay friendly; a smile defuses a lot
- Ask them a question instead of arguing (try {{Columbo|skills/columbo}})
- Don't let one person take over; talk to someone else if needed`,
      },
      {
        heading: "Knowing when to leave",
        say: ["I'd love to talk more if you ever want to. Take care."],
        body: `If someone is only mocking, you can kindly end it. But don't give up on people too quickly either.`,
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, “Steamroller.” Living Waters' open-air videos show how Ray Comfort handles hecklers.`,
      },
    ],
  },

  {
    id: "handing-out-tracts",
    category: "Sharing the Gospel",
    title: "Handing Out Tracts",
    sources: ["Living Waters", "Ray Comfort"],
    summary: `Tracts start conversations and keep working after you leave. Living Waters' tracts are designed to get attention and lead to the Law and the gospel.`,
    parts: [
      {
        heading: "Easy ways to hand one out",
        say: [
          "Did you get one of these?",
          "Here's something for you. It's a gospel tract.",
        ],
        body: `See more lines in {{Tract openers|openers/tract-openers}}.`,
      },
      {
        heading: "Practical tips",
        body: `- Always carry some
- Smile and keep walking if they're busy
- At restaurants, leave one with a generous tip
- Leave them where people wait: bus stops, waiting rooms
- Pick tracts that give the full gospel, including the Law and repentance`,
        verses: ["Ecclesiastes 11:1"],
      },
      {
        heading: "Turning it into a conversation",
        ask: "Do you think you're a good person?",
        branches: [{ if: "“No, not really” / “Yeah, I think so”", go: "paths/way-of-the-master" }],
      },
      {
        heading: "Study",
        body: `Living Waters' tract catalog, and Ray Comfort, *The Way of the Master*.`,
      },
    ],
  },

  {
    id: "dont-know-answer",
    category: "Hard Moments",
    title: "When You Don't Know the Answer",
    sources: ["Greg Koukl"],
    summary: `It will happen. That's fine. Honesty builds trust, and a good question can still keep the conversation going.`,
    parts: [
      {
        heading: "What to say",
        say: [
          "That's a good question. I don't know, but I'll find out.",
          "Can I get your number and get back to you?",
        ],
      },
      {
        heading: "Keep it going",
        body: `- Ask what they think the answer is ({{Columbo|skills/columbo}})
- Come back to what you *do* know: sin, the cross, the resurrection
- Actually follow up, and write the question down to study later`,
        ask: "Even if I can't answer that, can I ask you a question?",
      },
      {
        heading: "Keep perspective",
        body: `One unanswered question doesn't make Christianity false. Bring it back to the main issue: what they'll do with Jesus.`,
        verses: ["1 Peter 3:15"],
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, on asking questions when you're stuck.`,
      },
    ],
  },

  // --- The Biblical Case for Evangelism ---
  {
    id: "why-evangelize",
    category: "Mindset",
    title: "The Biblical Case for Evangelism",
    sources: ["Ray Comfort", "Living Waters", "Cliff Knechtle"],
    summary: `Why we share the gospel, including in public: God commands it, Scripture models it, and love compels it.`,
    parts: [
      {
        heading: "We're commanded",
        body: `- **Go into all the world** and preach the gospel ([[Mark 16:15]]).
- **Make disciples** of all nations ([[Matthew 28:19]]).
- **Be My witnesses,** starting where you live ([[Acts 1:8]]).
- **Preach the word,** in season and out of season ([[2 Timothy 4:2]]).`,
      },
      {
        heading: "Public preaching is biblical",
        body: `- **Noah** was “a preacher of righteousness” to his generation ([[2 Peter 2:5]]).
- **Jonah** cried out through the streets of Nineveh, and the city repented ([[Jonah 3:4]]).
- **John the Baptist** preached in the wilderness to crowds.
- **Jesus** preached repentance in public ([[Matthew 4:17]]), and the Sermon on the Mount was preached outdoors.
- **Peter** preached to a crowd at Pentecost, and about three thousand were saved.
- **Paul** reasoned in the marketplace every day ([[Acts 17:17]]) and taught “publicly and from house to house” ([[Acts 20:20]]).`,
      },
      {
        heading: "How will they hear?",
        body: `Faith comes from hearing the message about Christ ([[Romans 10:14]], [[Romans 10:17]]). God chose the “foolishness” of preaching to save those who believe ([[1 Corinthians 1:21]]).`,
      },
      {
        heading: "The watchman",
        body: `God told Ezekiel that a watchman who sees danger and stays silent is responsible ([[Ezekiel 33:8]]). It's a sober reminder: silence isn't neutral when people are headed for judgment.`,
      },
      {
        heading: "Love is the motive",
        body: `- “Knowing the fear of the Lord, we persuade men” ([[2 Corinthians 5:11]]).
- “The love of Christ controls us” ([[2 Corinthians 5:14]]).
- We are ambassadors, pleading on Christ's behalf ([[2 Corinthians 5:20]]).
- Snatch people from the fire ([[Jude 1:23]]); rescue those headed for death ([[Proverbs 24:11]]).`,
      },
      {
        heading: "Boldness, not shame",
        body: `- When told to stop, Peter and John said, “We cannot stop speaking” ([[Acts 4:19-20]]).
- Under threat, the church prayed for boldness, not safety ([[Acts 4:29]]).
- The gospel is the power of God for salvation ([[Romans 1:16]]).
- Don't be ashamed of Jesus or His words ([[Mark 8:38]]).`,
      },
      {
        heading: "When other Christians question it",
        body: `- **Be respectful.** Believers have different gifts and settings, and not everyone is called to open-air preaching.
- **But every believer is called to share.** Ordinary Christians spread the gospel in Acts ([[Acts 8:4]]).
- **Let your tone answer the critics.** Be gracious and clear ([[Colossians 4:5-6]]), gentle and respectful ([[1 Peter 3:15]]).
- **Use many means** to reach people ([[1 Corinthians 9:22]]).`,
        say: ["We may do it differently, but we're both called to tell people about Jesus."],
      },
      {
        heading: "Study",
        body: `- Ray Comfort, *Hell's Best Kept Secret*
- Living Waters open-air preaching training
- Cliff and Stuart Knechtle's campus Q&A videos`,
      },
    ],
  },

  // --- Your rights in public (US) ---
  {
    id: "your-rights",
    category: "Hard Moments",
    title: "Your Rights in Public (US)",
    sources: [],
    summary: `General information about sharing your faith in public in the United States. This is not legal advice, and local rules vary.`,
    parts: [
      {
        heading: "Public places",
        body: `- **Public sidewalks, streets, and parks** are traditional public forums. Religious speech there is strongly protected by the First Amendment.
- **Handing out tracts and talking with people** in these places is generally protected.
- **Content can't be singled out.** The government generally can't restrict your speech because of its religious message.`,
      },
      {
        heading: "What can be limited",
        body: `- **Time, place, and manner rules** that are reasonable and apply to everyone equally, such as noise limits or hours.
- **Amplified sound** (a speaker or microphone) may need a permit or have volume limits.
- **Don't block** sidewalks, entrances, or traffic.
- **Private property is different.** Malls, store fronts, and private parking lots belong to the owner, who can ask you to leave. Respect that.`,
      },
      {
        heading: "If police approach",
        body: `- **Stay calm and respectful.** Your demeanor matters more than winning the moment.
- **Ask politely** what law or ordinance applies.
- **Comply with lawful orders.** If you think an order is wrong, follow it and challenge it later, not on the spot.
- **Record calmly** if it's allowed where you are, without interfering.
- **Don't argue.** Thank them and move on if needed.`,
        say: ["Officer, I want to follow the law. Can you tell me which ordinance applies here?"],
      },
      {
        heading: "Be wise",
        body: `- **Know local ordinances** before you go, especially about amplification.
- **Go with others** when you can, and carry ID.
- **Keep your tone gracious.** A good testimony matters more than proving your rights.
- **Respect authority** ([[Romans 13:1]]), and be shrewd and innocent ([[Matthew 10:16]]).`,
        verses: ["Romans 13:1", "Matthew 10:16"],
      },
      {
        heading: "If you need help",
        body: `- **Contact a religious liberty legal organization** that defends free speech for street evangelists.
- **Keep notes and video** of what happened, with names, badge numbers, dates, and locations.`,
      },
    ],
  },
];
