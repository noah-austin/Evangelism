// QUICK VERSES — NASB 1995
//
// Each verse:
//   ref:      "Book Chapter:Verse" (this exact text is how other pages link to it, e.g. [[Romans 3:23]])
//   text:     verse text, NASB 1995
//   topics:   list of topics it shows up under on the Verses page
//   note:     why this verse matters / how to use it
//   verified: false until the wording has been checked word-for-word against a NASB 1995 Bible.
//             Unverified verses show a "check wording" badge in the app.

window.DATA = window.DATA || {};

DATA.verseTopics = [
  "Sin",
  "The Law",
  "Judgment",
  "The Cross",
  "Grace",
  "Repentance & Faith",
  "Assurance",
  "Only Way",
  "Urgency",
  "God's Existence",
  "The Resurrection",
  "Life & the Unborn",
  "How We Speak",
];

DATA.verses = [
  // ── Sin ──────────────────────────────────────────────
  {
    ref: "Romans 3:23",
    text: "for all have sinned and fall short of the glory of God,",
    topics: ["Sin"],
    note: "Everyone is included — no exceptions. Good for “I'm a good person.”",
    verified: false,
  },
  {
    ref: "Proverbs 20:6",
    text: "Many a man proclaims his own loyalty, But who can find a trustworthy man?",
    topics: ["Sin"],
    note: "Way of the Master uses this right after “Do you think you're a good person?” Most people proclaim their own goodness.",
    verified: false,
  },
  {
    ref: "Isaiah 64:6",
    text: "For all of us have become like one who is unclean, And all our righteous deeds are like a filthy garment; And all of us wither like a leaf, And our iniquities, like the wind, take us away.",
    topics: ["Sin"],
    note: "Even our good deeds can't clean us up before a holy God.",
    verified: false,
  },
  {
    ref: "Isaiah 53:6",
    text: "All of us like sheep have gone astray, Each of us has turned to his own way; But the LORD has caused the iniquity of us all To fall on Him.",
    topics: ["Sin", "The Cross"],
    note: "Sin and the cross in one verse.",
    verified: false,
  },

  // ── The Law ─────────────────────────────────────────
  {
    ref: "Exodus 20:7",
    text: "You shall not take the name of the LORD your God in vain, for the LORD will not leave him unpunished who takes His name in vain.",
    topics: ["The Law"],
    note: "Blasphemy. God says He will not leave it unpunished.",
    verified: false,
  },
  {
    ref: "Exodus 20:13",
    text: "You shall not murder.",
    topics: ["The Law", "Life & the Unborn"],
    note: "Pair with 1 John 3:15 (hate = murder) and with the abortion conversation.",
    verified: false,
  },
  {
    ref: "Exodus 20:15",
    text: "You shall not steal.",
    topics: ["The Law"],
    note: "“Have you ever stolen anything, even something small?”",
    verified: false,
  },
  {
    ref: "Exodus 20:16",
    text: "You shall not bear false witness against your neighbor.",
    topics: ["The Law"],
    note: "“Have you ever told a lie?”",
    verified: false,
  },
  {
    ref: "Matthew 5:27-28",
    text: "You have heard that it was said, ‘You shall not commit adultery’; but I say to you that everyone who looks at a woman with lust for her has already committed adultery with her in his heart.",
    topics: ["The Law"],
    note: "Jesus raises the standard to the heart. Few people can claim innocence here.",
    verified: false,
  },
  {
    ref: "1 John 3:15",
    text: "Everyone who hates his brother is a murderer; and you know that no murderer has eternal life abiding in him.",
    topics: ["The Law"],
    note: "God sees hatred as murder of the heart.",
    verified: false,
  },
  {
    ref: "Romans 3:20",
    text: "because by the works of the Law no flesh will be justified in His sight; for through the Law comes the knowledge of sin.",
    topics: ["The Law"],
    note: "Why we use the Law: it doesn't save — it shows people they need saving.",
    verified: false,
  },
  {
    ref: "Galatians 3:24",
    text: "Therefore the Law has become our tutor to lead us to Christ, so that we may be justified by faith.",
    topics: ["The Law"],
    note: "The Law is the tutor that leads to Christ — the core idea behind Way of the Master.",
    verified: false,
  },
  {
    ref: "Romans 2:15",
    text: "in that they show the work of the Law written in their hearts, their conscience bearing witness and their thoughts alternately accusing or else defending them,",
    topics: ["The Law", "God's Existence"],
    note: "Even people who reject the Bible have a conscience that agrees with God's Law. Speak to the conscience.",
    verified: false,
  },

  // ── Judgment ────────────────────────────────────────
  {
    ref: "Hebrews 9:27",
    text: "And inasmuch as it is appointed for men to die once and after this comes judgment,",
    topics: ["Judgment"],
    note: "Death is certain, then judgment. No second chances.",
    verified: false,
  },
  {
    ref: "Revelation 21:8",
    text: "But for the cowardly and unbelieving and abominable and murderers and immoral persons and sorcerers and idolaters and all liars, their part will be in the lake that burns with fire and brimstone, which is the second death.",
    topics: ["Judgment"],
    note: "“All liars.” Sobering after the Law questions.",
    verified: false,
  },
  {
    ref: "Acts 17:30-31",
    text: "Therefore having overlooked the times of ignorance, God is now declaring to men that all people everywhere should repent, because He has fixed a day in which He will judge the world in righteousness through a Man whom He has appointed, having furnished proof to all men by raising Him from the dead.",
    topics: ["Judgment", "Repentance & Faith", "The Resurrection"],
    note: "Repent, judgment day, and the resurrection as proof — all together.",
    verified: false,
  },

  // ── The Cross ───────────────────────────────────────
  {
    ref: "Romans 5:8",
    text: "But God demonstrates His own love toward us, in that while we were yet sinners, Christ died for us.",
    topics: ["The Cross", "Grace"],
    note: "God's love shown at the cross — while we were still sinners.",
    verified: false,
  },
  {
    ref: "2 Corinthians 5:21",
    text: "He made Him who knew no sin to be sin on our behalf, so that we might become the righteousness of God in Him.",
    topics: ["The Cross"],
    note: "The great exchange: our sin on Him, His righteousness to us.",
    verified: false,
  },
  {
    ref: "1 Corinthians 15:3-4",
    text: "For I delivered to you as of first importance what I also received, that Christ died for our sins according to the Scriptures, and that He was buried, and that He was raised on the third day according to the Scriptures,",
    topics: ["The Cross", "The Resurrection"],
    note: "The gospel in a sentence. Also one of the earliest Christian creeds — useful in resurrection evidence.",
    verified: false,
  },
  {
    ref: "John 3:16",
    text: "For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.",
    topics: ["The Cross", "Grace"],
    note: "Best said after the Law — then “perish” has weight.",
    verified: false,
  },

  // ── Grace ───────────────────────────────────────────
  {
    ref: "Romans 6:23",
    text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    topics: ["Grace", "Sin"],
    note: "What we earned vs. what God gives.",
    verified: false,
  },
  {
    ref: "Ephesians 2:8-9",
    text: "For by grace you have been saved through faith; and that not of yourselves, it is the gift of God; not as a result of works, so that no one may boast.",
    topics: ["Grace"],
    note: "Not by works. Key for anyone trusting in their own goodness.",
    verified: false,
  },

  // ── Repentance & Faith ──────────────────────────────
  {
    ref: "Mark 1:15",
    text: "and saying, “The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.”",
    topics: ["Repentance & Faith"],
    note: "Jesus' own message: repent and believe.",
    verified: false,
  },
  {
    ref: "Proverbs 28:13",
    text: "He who conceals his transgressions will not prosper, But he who confesses and forsakes them will find compassion.",
    topics: ["Repentance & Faith"],
    note: "Confess AND forsake. A clear picture of repentance.",
    verified: false,
  },
  {
    ref: "Romans 10:9",
    text: "that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved;",
    topics: ["Repentance & Faith"],
    note: "Jesus as Lord, raised from the dead.",
    verified: false,
  },
  {
    ref: "Romans 10:13",
    text: "for “Whoever will call on the name of the Lord will be saved.”",
    topics: ["Repentance & Faith"],
    note: "“Whoever” — no one is too far gone.",
    verified: false,
  },
  {
    ref: "John 1:12",
    text: "But as many as received Him, to them He gave the right to become children of God, even to those who believe in His name,",
    topics: ["Repentance & Faith"],
    note: "Receiving Christ makes us God's children.",
    verified: false,
  },

  // ── Assurance ───────────────────────────────────────
  {
    ref: "1 John 5:13",
    text: "These things I have written to you who believe in the name of the Son of God, so that you may know that you have eternal life.",
    topics: ["Assurance"],
    note: "You can KNOW. Good for new believers and for “nobody can know.”",
    verified: false,
  },
  {
    ref: "John 5:24",
    text: "Truly, truly, I say to you, he who hears My word, and believes Him who sent Me, has eternal life, and does not come into judgment, but has passed out of death into life.",
    topics: ["Assurance"],
    note: "“Has” eternal life — present tense.",
    verified: false,
  },
  {
    ref: "2 Corinthians 5:17",
    text: "Therefore if anyone is in Christ, he is a new creature; the old things passed away; behold, new things have come.",
    topics: ["Assurance"],
    note: "Real conversion brings a new life, not just a new opinion.",
    verified: false,
  },
  {
    ref: "1 John 1:9",
    text: "If we confess our sins, He is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.",
    topics: ["Assurance", "Repentance & Faith"],
    note: "Forgiveness for anyone who confesses — including someone who has had an abortion.",
    verified: false,
  },

  // ── Only Way ────────────────────────────────────────
  {
    ref: "John 14:6",
    text: "Jesus said to him, “I am the way, and the truth, and the life; no one comes to the Father but through Me.",
    topics: ["Only Way"],
    note: "Jesus' own exclusive claim.",
    verified: false,
  },
  {
    ref: "Acts 4:12",
    text: "And there is salvation in no one else; for there is no other name under heaven that has been given among men by which we must be saved.”",
    topics: ["Only Way"],
    note: "No other name.",
    verified: false,
  },
  {
    ref: "John 8:58",
    text: "Jesus said to them, “Truly, truly, I say to you, before Abraham was born, I am.”",
    topics: ["Only Way"],
    note: "Jesus claims God's name (Exodus 3:14). The crowd picked up stones — they knew what He meant.",
    verified: false,
  },

  // ── Urgency ─────────────────────────────────────────
  {
    ref: "Proverbs 27:1",
    text: "Do not boast about tomorrow, For you do not know what a day may bring forth.",
    topics: ["Urgency"],
    note: "For “I'll think about it later.”",
    verified: false,
  },
  {
    ref: "2 Corinthians 6:2",
    text: "for He says, “At the acceptable time I listened to you, And on the day of salvation I helped you.” Behold, now is “the acceptable time,” behold, now is “the day of salvation”—",
    topics: ["Urgency"],
    note: "Now is the day of salvation.",
    verified: false,
  },
  {
    ref: "2 Peter 3:9",
    text: "The Lord is not slow about His promise, as some count slowness, but is patient toward you, not wishing for any to perish but for all to come to repentance.",
    topics: ["Urgency", "Grace"],
    note: "God's patience is meant to lead to repentance, not delay.",
    verified: false,
  },

  // ── God's Existence ─────────────────────────────────
  {
    ref: "Romans 1:20",
    text: "For since the creation of the world His invisible attributes, His eternal power and divine nature, have been clearly seen, being understood through what has been made, so that they are without excuse.",
    topics: ["God's Existence"],
    note: "Creation points to a Creator. Everyone knows God exists.",
    verified: false,
  },
  {
    ref: "Psalm 14:1",
    text: "The fool has said in his heart, “There is no God.” They are corrupt, they have committed abominable deeds; There is no one who does good.",
    topics: ["God's Existence"],
    note: "Use with care. Unbelief is a heart issue, not just a head issue.",
    verified: false,
  },

  // ── The Resurrection ────────────────────────────────
  {
    ref: "1 Corinthians 15:17",
    text: "and if Christ has not been raised, your faith is worthless; you are still in your sins.",
    topics: ["The Resurrection"],
    note: "Christianity stands or falls on the resurrection — Paul invites testing.",
    verified: false,
  },
  {
    ref: "1 Corinthians 15:6",
    text: "After that He appeared to more than five hundred brethren at one time, most of whom remain until now, but some have fallen asleep;",
    topics: ["The Resurrection"],
    note: "Hundreds of eyewitnesses, many still alive and able to be questioned when Paul wrote.",
    verified: false,
  },

  // ── Life & the Unborn ───────────────────────────────
  {
    ref: "Genesis 9:6",
    text: "Whoever sheds man's blood, By man his blood shall be shed, For in the image of God He made man.",
    topics: ["Life & the Unborn"],
    note: "Human life is sacred because people are made in God's image.",
    verified: false,
  },
  {
    ref: "Psalm 139:13",
    text: "For You formed my inward parts; You wove me in my mother's womb.",
    topics: ["Life & the Unborn"],
    note: "God personally forms each child in the womb.",
    verified: false,
  },
  {
    ref: "Jeremiah 1:5",
    text: "Before I formed you in the womb I knew you, And before you were born I consecrated you; I have appointed you a prophet to the nations.",
    topics: ["Life & the Unborn"],
    note: "God knows and calls people before birth.",
    verified: false,
  },
  {
    ref: "Proverbs 24:11",
    text: "Deliver those who are being taken away to death, And those who are staggering to slaughter, Oh hold them back.",
    topics: ["Life & the Unborn"],
    note: "A command to rescue — a key verse for abolitionists.",
    verified: false,
  },

  // ── How We Speak ────────────────────────────────────
  {
    ref: "1 Peter 3:15",
    text: "but sanctify Christ as Lord in your hearts, always being ready to make a defense to everyone who asks you to give an account for the hope that is in you, yet with gentleness and reverence;",
    topics: ["How We Speak"],
    note: "Be ready — and be gentle.",
    verified: false,
  },
  {
    ref: "Colossians 4:5-6",
    text: "Conduct yourselves with wisdom toward outsiders, making the most of the opportunity. Let your speech always be with grace, as though seasoned with salt, so that you will know how you should respond to each person.",
    topics: ["How We Speak"],
    note: "Gracious, salty, and tailored to each person.",
    verified: false,
  },
  {
    ref: "2 Timothy 2:24-25",
    text: "The Lord's bond-servant must not be quarrelsome, but be kind to all, able to teach, patient when wronged, with gentleness correcting those who are in opposition, if perhaps God may grant them repentance leading to the knowledge of the truth,",
    topics: ["How We Speak"],
    note: "Not quarrelsome. God grants repentance — not our arguments.",
    verified: false,
  },
];
