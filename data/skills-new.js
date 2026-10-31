// CONVERSATION SKILLS — tactics for steering conversations
//
// Same format as paths: title, sources, summary, and parts
// (heading, say, ask, body, verses, branches).

window.DATA = window.DATA || {};

DATA.skillsNew = [
  {
    id: "ambassador-model",
    title: "The Ambassador Model",
    sources: ["Greg Koukl"],
    summary: `We represent Christ to people who don't know Him yet ([[2 Corinthians 5:20]]). A good ambassador needs three things: **knowledge**, **wisdom**, and **character**.`,
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
    title: "Columbo",
    sources: ["Greg Koukl"],
    summary: `Stay in the driver's seat by asking questions, like the TV detective who always had "just one more thing."`,
    parts: [
      {
        heading: "1. Get clear",
        ask: "What do you mean by that?",
        body: `Find out what they actually believe before answering. Often the objection changes once they explain it. Words like "God," "faith," "truth," and "good" mean different things to different people.`,
      },
      {
        heading: "2. Get their reasons",
        ask: "How did you come to that conclusion?",
        body: `Puts the burden of proof on the person making the claim. Many people have never thought about *why* they believe something. You're not being sneaky; you're being curious.`,
      },
      {
        heading: "3. Lead (when ready)",
        ask: "Have you ever considered...?",
        body: `Use a question to point out a flaw or bring in a new idea gently, instead of making a statement they can push back on.`,
      },
      {
        heading: "Tips",
        body: `- Ask with real curiosity, not as a trap
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
    title: "Suicide (Self-Defeating Claims)",
    sources: ["Greg Koukl"],
    summary: `Some claims destroy themselves: they fail their own standard. Point it out gently.`,
    parts: [
      {
        heading: "Examples",
        body: `- **"There is no truth."** Then ask: "Is that true?"
- **"You shouldn't force your views on others."** Then ask: "Isn't that what you're doing now?"
- **"All religions are true."** That rules out every religion that says it's the only way. (See {{All religions lead to God|objections/all-religions}})
- **"Only science can tell us what's true."** Can science prove that statement?
- **"You can't know anything about God."** Then how do you know that about God?`,
      },
      {
        heading: "Tone",
        body: `Don't spring it like a trap. Ask it as a real question and let them see it themselves.`,
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, the "Suicide" chapters.`,
      },
    ],
  },

  {
    id: "taking-the-roof-off",
    title: "Taking the Roof Off",
    sources: ["Greg Koukl"],
    summary: `Take their view seriously and follow it to its logical end. If the result is something they can't accept, the view has a problem.`,
    parts: [
      {
        heading: "How it works",
        body: `1. Find out what they believe (use {{Columbo|skills/columbo}})
2. Ask, "If that's true, what follows?"
3. Point out where it leads, with a question`,
      },
      {
        heading: "Examples",
        body: `- **"Morality is just personal opinion."** Then torturing children for fun is only wrong for you, not really wrong. (See {{The Moral Law|evidence/moral-law}})
- **"We're just chemicals and evolution."** Then your thoughts are just chemical reactions too. Why trust them?
- **"Everyone goes to heaven."** Including people who never wanted God? Would God force them?`,
        ask: "If that's true, how would you explain...?",
      },
      {
        heading: "Study",
        body: `Greg Koukl, *Tactics*, "Taking the Roof Off."`,
      },
    ],
  },

  {
    id: "steamroller",
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
        body: `Greg Koukl, *Tactics*, "Steamroller."`,
      },
    ],
  },

  {
    id: "rhodes-scholar",
    title: "Rhodes Scholar",
    sources: ["Greg Koukl"],
    summary: `For "Experts say..." or "Scientists have proven...". An expert's opinion is only as good as the reasons behind it.`,
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
        body: `Greg Koukl, *Tactics*, "Rhodes Scholar."`,
      },
    ],
  },

  {
    id: "using-the-law",
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
- Include yourself: "I've done these things too"
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
        body: `"Conscience" means "with knowledge." Even people who reject the Bible know lying and stealing are wrong. Speak to that.`,
        ask: "Your conscience tells you lying is wrong, doesn't it?",
      },
      {
        heading: "Walk through it",
        branches: [{ if: "Ready to use it", go: "paths/way-of-the-master" }],
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
        body: `- "How sure are you, on a scale of 1 to 10?"
- "If you're wrong, what's at stake?"
- "What would it take to change your mind?"`,
      },
      {
        heading: "About meaning and morality",
        body: `- "Where do you get your sense of right and wrong?"
- "What gives your life meaning?"
- "Who do you think Jesus is?"`,
      },
      {
        heading: "Style notes",
        body: `- Thank them for the question, and mean it
- Let them finish before you answer
- Answer the question they actually asked
- Bring it back to Jesus and the resurrection`,
        verses: ["1 Peter 3:15"],
      },
    ],
  },

  {
    id: "listening-well",
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
        body: `Answer the actual question, briefly. Then turn it back to Jesus. Some questions are really personal pain dressed up as an argument; be gentle there.`,
      },
    ],
  },

  {
    id: "staying-calm",
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
        body: `If someone is only mocking, you can kindly end it. "I'd love to talk more if you ever want to. Take care." Don't throw pearls before swine, but don't give up quickly on people either.`,
      },
    ],
  },

  {
    id: "handing-out-tracts",
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
- Leave them with a tip at restaurants (with a generous tip)
- Leave them where people wait: bus stops, waiting rooms
- Pick tracts that give the full gospel, including the Law and repentance`,
        verses: ["Ecclesiastes 11:1"],
      },
      {
        heading: "Turning it into a conversation",
        ask: "Do you think you're a good person?",
        branches: [{ if: "They stop and talk", go: "paths/way-of-the-master" }],
      },
    ],
  },

  {
    id: "dont-know-answer",
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
        heading: "Then",
        body: `- Ask what they think the answer is ({{Columbo|skills/columbo}})
- Come back to what you *do* know: sin, the cross, the resurrection
- Actually follow up, and write the question down to study later`,
        ask: "Even if I can't answer that, can I ask you a question?",
      },
      {
        heading: "Remember",
        body: `One unanswered question doesn't make Christianity false. Bring it back to the main issue: what they'll do with Jesus.`,
        verses: ["1 Peter 3:15"],
      },
    ],
  },
];
