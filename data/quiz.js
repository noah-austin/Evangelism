// QUIZZES (Practice > Quizzes)
//
// Hand-written question banks. Other quizzes (verses, answers, Columbo
// questions, Way of the Master) are built from the rest of the data in js/app.js.
//
// Each bank: id, title, blurb, and questions.
// Each question:
//   q:       the question or statement
//   a:       the correct answer (one of the bank's `choices`, or "True"/"False")
//   choices: optional list of options just for this question
//   explain: one or two sentences shown after answering
//   link:    optional "section/id" page to learn more
// A bank's `choices` lists the options to draw wrong answers from.

window.DATA = window.DATA || {};

DATA.quizBanks = [
  {
    id: "who-believes",
    title: "Who Believes This?",
    blurb: "Match the belief to the group",
    choices: ["Atheist", "Agnostic", "Muslim", "Mormon (LDS)", "Jehovah's Witness", "Catholic", "Jewish", "Spiritual but not religious", "Cultural Christian", "Biblical Christian"],
    questions: [
      { q: "Jesus is Michael the archangel.", a: "Jehovah's Witness", explain: "Witnesses teach that Jesus was God's first creation, Michael, not God Himself.", link: "people/jw" },
      { q: "The Holy Spirit is God's active force, not a person.", a: "Jehovah's Witness", explain: "Witnesses deny the Trinity and see the Spirit as an impersonal force.", link: "people/jw" },
      { q: "Only 144,000 will rule with Christ in heaven.", a: "Jehovah's Witness", explain: "Witnesses teach most faithful people will live on a paradise earth, not in heaven.", link: "people/jw" },
      { q: "Jesus died on a stake, not a cross.", a: "Jehovah's Witness", explain: "The Watchtower teaches a single upright stake.", link: "people/jw" },
      { q: "The wicked don't suffer in hell; they simply cease to exist.", a: "Jehovah's Witness", explain: "Witnesses reject conscious punishment after death.", link: "people/jw" },
      { q: "God the Father has a body of flesh and bones.", a: "Mormon (LDS)", explain: "LDS teaching (Doctrine and Covenants 130:22). The Bible says God is spirit (John 4:24).", link: "people/mormon" },
      { q: "The Book of Mormon is another testament of Jesus Christ.", a: "Mormon (LDS)", explain: "Latter-day Saints add the Book of Mormon and other books to the Bible.", link: "people/mormon" },
      { q: "The true church was lost after the apostles and restored through Joseph Smith.", a: "Mormon (LDS)", explain: "This is the LDS teaching of the Great Apostasy and the Restoration.", link: "people/mormon" },
      { q: "Faithful members can be exalted and become like God.", a: "Mormon (LDS)", explain: "LDS teaching on exaltation in the highest degree of heaven.", link: "people/mormon" },
      { q: "Jesus was a great prophet, but He was not crucified.", a: "Muslim", explain: "Most Muslims believe it only appeared that Jesus died (Surah 4:157).", link: "people/muslim" },
      { q: "On Judgment Day, our good and bad deeds will be weighed.", a: "Muslim", explain: "Islam teaches salvation depends on God's mercy and the scales of deeds.", link: "people/muslim" },
      { q: "The Qur'an is God's final, perfect word.", a: "Muslim", explain: "Muslims believe earlier scriptures were corrupted and the Qur'an is final.", link: "people/muslim" },
      { q: "God forgives whom He wills. No one needed to die for sins.", a: "Muslim", explain: "Islam rejects the idea of a substitute paying for sin.", link: "people/muslim" },
      { q: "Mary was conceived without original sin.", a: "Catholic", explain: "The Immaculate Conception, defined as Catholic dogma in 1854.", link: "people/catholic" },
      { q: "Some believers are purified in purgatory before entering heaven.", a: "Catholic", explain: "Catholic teaching; Protestants hold that Christ's work is fully sufficient.", link: "people/catholic" },
      { q: "The Pope can speak infallibly on faith and morals.", a: "Catholic", explain: "Papal infallibility, defined at the First Vatican Council (1870).", link: "people/catholic" },
      { q: "Grace is received through the sacraments, starting with baptism.", a: "Catholic", explain: "Catholic teaching ties grace to the seven sacraments.", link: "people/catholic" },
      { q: "The Messiah has not come yet.", a: "Jewish", explain: "Most Jewish people do not accept Jesus as the Messiah. Isaiah 53 is a good place to start.", link: "people/jewish" },
      { q: "With no Temple, atonement comes through repentance, prayer, and good deeds.", a: "Jewish", explain: "Rabbinic Judaism's answer to the loss of the sacrifices in AD 70.", link: "people/jewish" },
      { q: "There is no God. The natural world is all there is.", a: "Atheist", explain: "Atheism denies God exists. Ask what makes anything really right or wrong.", link: "people/atheist" },
      { q: "Right and wrong are just products of evolution and culture.", a: "Atheist", explain: "A common atheist view. It leaves nothing that's truly wrong.", link: "people/atheist" },
      { q: "I don't know if God exists, and maybe no one can know.", a: "Agnostic", explain: "Agnostics are unsure. Ask if they'd want to know if God were real.", link: "people/agnostic" },
      { q: "God is an energy in everything, and every path leads there.", a: "Spiritual but not religious", explain: "Common in spiritual-but-not-religious and New Age thinking.", link: "people/spiritual" },
      { q: "I believe in something, but I don't need organized religion.", a: "Spiritual but not religious", explain: "Ask what they mean by “spiritual.”", link: "people/spiritual" },
      { q: "I grew up in church, so I'm already a Christian.", a: "Cultural Christian", explain: "Kindly ask if they've ever repented and trusted Christ personally.", link: "people/nominal" },
      { q: "I'm a good person, so I'm sure I'll go to heaven.", a: "Cultural Christian", choices: ["Cultural Christian", "Biblical Christian", "Jewish", "Atheist"], explain: "Many church-goers trust their goodness. The Law shows no one is good enough.", link: "people/nominal" },
      { q: "We are saved by grace through faith in Christ, not by our works.", a: "Biblical Christian", explain: "Ephesians 2:8-9. Salvation is a free gift.", link: "paths/way-of-the-master" },
      { q: "Jesus is fully God and fully man, and He rose bodily from the dead.", a: "Biblical Christian", choices: ["Biblical Christian", "Jehovah's Witness", "Muslim", "Mormon (LDS)"], explain: "Historic Christian teaching on who Jesus is.", link: "evidence/resurrection" },
    ],
  },

  {
    id: "name-tactic",
    title: "Name That Tactic",
    blurb: "Pick the Tactics move for each moment",
    choices: ["Columbo", "Suicide", "Taking the Roof Off", "Steamroller", "Rhodes Scholar", "Be Precise", "A Stone in Their Shoe"],
    questions: [
      { q: "They say, “There is no truth.”", a: "Suicide", choices: ["Suicide", "Steamroller", "Rhodes Scholar", "A Stone in Their Shoe"], explain: "The claim fails its own standard. Ask: “Is that true?”", link: "skills/suicide" },
      { q: "They say, “You shouldn't push your views on others.”", a: "Suicide", choices: ["Suicide", "Rhodes Scholar", "Steamroller", "A Stone in Their Shoe"], explain: "That's a view being pushed on you.", link: "skills/suicide" },
      { q: "They say evil disproves God, but also that morality is just opinion.", a: "Suicide", choices: ["Suicide", "Rhodes Scholar", "Steamroller", "Be Precise"], explain: "Sibling rivalry: two claims that can't both be true.", link: "skills/suicide" },
      { q: "They say, “Scientists have proven we don't need God.”", a: "Rhodes Scholar", choices: ["Rhodes Scholar", "Suicide", "Steamroller", "Taking the Roof Off"], explain: "An appeal to experts. Ask what their reasons are.", link: "skills/rhodes-scholar" },
      { q: "They keep interrupting with new objections before you can answer.", a: "Steamroller", explain: "Kindly ask for a turn: “Can I respond to that before we move on?”", link: "skills/steamroller" },
      { q: "They say morality is personal opinion. You show that means nothing is really wrong, not even the Holocaust.", a: "Taking the Roof Off", explain: "Follow the view to where it leads.", link: "skills/taking-the-roof-off" },
      { q: "They say, “It's my body, my choice.” You ask if that reason would also justify killing a toddler.", a: "Taking the Roof Off", choices: ["Taking the Roof Off", "Steamroller", "Rhodes Scholar", "A Stone in Their Shoe"], explain: "Apply their reason consistently and see where it ends up.", link: "skills/taking-the-roof-off" },
      { q: "They make a big claim, and you ask, “How did you come to that conclusion?”", a: "Columbo", choices: ["Columbo", "Steamroller", "A Stone in Their Shoe", "Rhodes Scholar"], explain: "Columbo step 2: get their reasons.", link: "skills/columbo" },
      { q: "You're not sure how to answer, so you ask a question to learn more and buy time.", a: "Columbo", choices: ["Columbo", "Steamroller", "Taking the Roof Off", "Suicide"], explain: "Questions keep you in the driver's seat.", link: "skills/columbo" },
      { q: "They say, “The church picked the Bible at Nicaea.” You ask what they think happened there.", a: "Be Precise", choices: ["Be Precise", "Steamroller", "Taking the Roof Off", "A Stone in Their Shoe"], explain: "Check the facts. Nicaea was about who Jesus is, not which books.", link: "skills/be-precise" },
      { q: "Instead of “lots of evidence,” you say “over 5,000 Greek manuscripts.”", a: "Be Precise", choices: ["Be Precise", "Rhodes Scholar", "Steamroller", "Suicide"], explain: "Specifics persuade better than vague claims.", link: "skills/be-precise" },
      { q: "You don't try to close the deal. You leave them with one good question to think about.", a: "A Stone in Their Shoe", explain: "That's a win. God does the rest.", link: "skills/stone-in-shoe" },
    ],
  },

  {
    id: "fact-check",
    title: "Fact Check",
    blurb: "True or false: claims you'll hear",
    choices: ["True", "False"],
    questions: [
      { q: "We have over 5,000 Greek manuscripts of the New Testament.", a: "True", explain: "Plus thousands more in early translations.", link: "evidence/bible-reliability" },
      { q: "The Council of Nicaea voted on which books are in the Bible.", a: "False", explain: "Nicaea (AD 325) was about who Jesus is.", link: "objections/bible-changed" },
      { q: "Non-Christian historians from the first and second centuries mention Jesus.", a: "True", explain: "Including Tacitus and Josephus.", link: "objections/jesus-existed" },
      { q: "Most historians, even skeptical ones, doubt that Jesus existed.", a: "False", explain: "Almost all historians agree He lived.", link: "objections/jesus-existed" },
      { q: "The Dead Sea Scrolls include a copy of Isaiah about 1,000 years older than those known before.", a: "True", explain: "And it reads almost the same.", link: "evidence/bible-reliability" },
      { q: "Jesus never claimed to be God.", a: "False", explain: "His hearers understood His claims and tried to stone Him for blasphemy.", link: "objections/jesus-not-god" },
      { q: "The Bible tells us to examine everything carefully.", a: "True", explain: "1 Thessalonians 5:21.", link: "objections/blind-faith" },
      { q: "The Bible says, “God helps those who help themselves.”", a: "False", explain: "That saying is not in the Bible. Scripture says God helps the helpless.", link: "objections/good-person" },
      { q: "The Bible says money is the root of all evil.", a: "False", explain: "It says the love of money is a root of all sorts of evil (1 Timothy 6:10).", link: "objections/bible-interpretation" },
      { q: "“Judge not” means Christians should never call anything sin.", a: "False", explain: "Jesus warned against hypocritical judging, not against calling sin sin.", link: "objections/dont-judge" },
      { q: "Most Christians today live in Africa, Asia, and Latin America.", a: "True", explain: "Christianity isn't a Western religion.", link: "objections/western-religion" },
      { q: "Paul said if Christ has not been raised, our faith is worthless.", a: "True", explain: "1 Corinthians 15:17. Christianity stakes everything on the resurrection.", link: "evidence/resurrection" },
      { q: "Biblical faith means believing without evidence.", a: "False", explain: "It's trust based on good reasons.", link: "objections/blind-faith" },
      { q: "Paul's earliest letters were written within about 20 years of Jesus' death.", a: "True", explain: "1 Thessalonians dates to around AD 50.", link: "evidence/eyewitness-gospels" },
      { q: "According to the Bible, everyone knows right from wrong because the Law is written on their hearts.", a: "True", explain: "Romans 2:14-15. That's why the conscience agrees with the Law.", link: "paths/way-of-the-master" },
      { q: "In the Bible, sincere belief in any religion is enough to be saved.", a: "False", explain: "Jesus said He is the only way to the Father (John 14:6).", link: "objections/sincere-religions" },
    ],
  },
];
