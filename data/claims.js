// CLAIMS TO QUESTION (Greg Koukl, Tactics)
//
// Common claims and the first question to ask back. Used in two places:
//   - Practice > Columbo drill (see the claim, come up with the question)
//   - Conversation Skills > Suicide (the selfDefeating ones fill its list)
//
// Each claim:
//   id:            short id
//   claim:         what they say
//   ask:           the question to ask back
//   why:           one line on why it works
//   selfDefeating: true if the claim fails its own standard
//   next:          optional "section/id" page with the full answer
//
// Text supports **bold**, *italics*, [[Verse Ref]] and {{Label|section/id}} links.

window.DATA = window.DATA || {};

DATA.claims = [
  // --- Self-defeating ---
  {
    id: "no-truth",
    claim: "There is no truth.",
    ask: "Is that true?",
    why: "If it's true, then there's at least one truth.",
    selfDefeating: true,
  },
  {
    id: "truth-relative",
    claim: "Truth is relative.",
    ask: "Is that true for everyone, or just for you?",
    why: "It claims to be true for everyone, which is what it denies.",
    selfDefeating: true,
    next: "objections/morality-relative",
  },
  {
    id: "no-absolutes",
    claim: "There are no absolutes.",
    ask: "Are you absolutely sure?",
    why: "It's stated as an absolute.",
    selfDefeating: true,
  },
  {
    id: "cant-be-sure",
    claim: "You can't know anything for sure.",
    ask: "Are you sure about that?",
    why: "It claims to know something for sure.",
    selfDefeating: true,
  },
  {
    id: "cant-know-religion",
    claim: "No one can know the truth about religion.",
    ask: "How do you know that?",
    why: "It's a claim to know a truth about religion. Then point to the resurrection: it can be tested.",
    selfDefeating: true,
    next: "evidence/resurrection",
  },
  {
    id: "only-science",
    claim: "Only science can tell us what's true.",
    ask: "What experiment proved that?",
    why: "That statement can't be tested by science, so by its own rule it can't be known.",
    selfDefeating: true,
    next: "objections/science-disproves-god",
  },
  {
    id: "only-proven",
    claim: "I only believe what can be proven.",
    ask: "Can you prove that?",
    why: "The rule itself can't be proven.",
    selfDefeating: true,
  },
  {
    id: "dont-judge",
    claim: "You shouldn't judge.",
    ask: "Aren't you judging me right now?",
    why: "It judges people who judge.",
    selfDefeating: true,
    next: "objections/dont-judge",
  },
  {
    id: "wrong-to-say-wrong",
    claim: "It's wrong to say someone else is wrong.",
    ask: "So am I wrong for saying it?",
    why: "It says someone is wrong.",
    selfDefeating: true,
  },
  {
    id: "forcing-views",
    claim: "You shouldn't force your views on others.",
    ask: "Is that a view you want me to accept?",
    why: "It's a view being pressed on you. (Sharing isn't forcing, either.)",
    selfDefeating: true,
    next: "objections/forcing-beliefs",
  },
  {
    id: "all-religions-true",
    claim: "All religions are true.",
    ask: "Even the ones that say the others are false?",
    why: "Most religions say the others are wrong, so they can't all be true.",
    selfDefeating: true,
    next: "objections/all-religions",
  },
  {
    id: "tolerance",
    claim: "You need to accept every view as equally valid.",
    ask: "Do you accept my view that they're not?",
    why: "It rejects any view that disagrees with it.",
    selfDefeating: true,
  },
  {
    id: "interpretation-valid",
    claim: "Every interpretation of the Bible is equally valid.",
    ask: "Is my interpretation, that yours is wrong, valid too?",
    why: "It can't allow the view that some readings are wrong.",
    selfDefeating: true,
    next: "objections/bible-interpretation",
  },
  {
    id: "god-beyond-words",
    claim: "God is beyond anything words can describe.",
    ask: "Didn't you just describe Him?",
    why: "“Beyond words” is a description.",
    selfDefeating: true,
  },
  {
    id: "reason-untrustworthy",
    claim: "You can't trust reason.",
    ask: "What reasoning led you to that?",
    why: "It uses reason to argue against reason.",
    selfDefeating: true,
  },

  // --- Clarify first ---
  {
    id: "good-person",
    claim: "I'm a good person.",
    ask: "Good compared to what? Other people, or God?",
    why: "Most people grade on a curve. Move to God's standard.",
    next: "objections/good-person",
  },
  {
    id: "no-evidence",
    claim: "There's no evidence for God.",
    ask: "What would count as evidence for you?",
    why: "Find out what they'd accept before you offer anything.",
    next: "objections/no-god",
  },
  {
    id: "bible-changed",
    claim: "The Bible has been changed.",
    ask: "Which parts, and how do you know?",
    why: "Most people have heard it but can't name a change.",
    next: "objections/bible-changed",
  },
  {
    id: "contradictions",
    claim: "The Bible is full of contradictions.",
    ask: "Which one bothers you most?",
    why: "Usually they can't name one. If they can, deal with that one.",
    next: "objections/bible-contradictions",
  },
  {
    id: "jesus-existed",
    claim: "Jesus never existed.",
    ask: "How did you come to that conclusion?",
    why: "Almost no historians agree. Find out where they heard it.",
    next: "objections/jesus-existed",
  },
  {
    id: "science-disproves",
    claim: "Science has disproved God.",
    ask: "Which discovery do you have in mind?",
    why: "It's usually a slogan, not a specific finding.",
    next: "objections/science-disproves-god",
  },
  {
    id: "evolution",
    claim: "Evolution explains everything.",
    ask: "What do you mean by evolution?",
    why: "Small changes within kinds are not the same as life from non-life.",
    next: "objections/evolution",
  },
  {
    id: "religion-wars",
    claim: "Religion causes most wars.",
    ask: "Which wars are you thinking of?",
    why: "Most wars weren't religious, and the worst killers of the last century were atheist regimes.",
    next: "objections/religion-evil",
  },
  {
    id: "hypocrites",
    claim: "Christians are hypocrites.",
    ask: "Who are you thinking of?",
    why: "Listen first. Then: hypocrites prove we need Jesus; they don't disprove Him.",
    next: "objections/hypocrites",
  },
  {
    id: "crutch",
    claim: "Christianity is just a crutch.",
    ask: "What do you mean by a crutch?",
    why: "A crutch helps someone who's actually hurt. The question is whether it's true.",
  },
  {
    id: "loving-god-hell",
    claim: "A loving God wouldn't send anyone to hell.",
    ask: "What do you mean by loving?",
    why: "Would a good judge let a guilty criminal go free?",
    next: "objections/hell-unfair",
  },
  {
    id: "my-interpretation",
    claim: "That's just your interpretation.",
    ask: "What do you think it means?",
    why: "Look at the text together instead of trading opinions.",
    next: "objections/bible-interpretation",
  },
  {
    id: "womans-right",
    claim: "Abortion is a woman's right.",
    ask: "What is the unborn?",
    why: "If it's a human being, no reason justifies killing it. If not, no reason is needed.",
    next: "objections/abortion",
  },
];

// Fill the Suicide page in Conversation Skills with the full list of self-defeating claims.
(function () {
  const page = (DATA.skills || []).find((s) => s.id === "suicide");
  if (!page) return;
  const list = DATA.claims.filter((c) => c.selfDefeating).map((c) => ({
    heading: "“" + c.claim + "”",
    ask: c.ask,
    body: c.why + (c.next ? ` ({{Full answer|${c.next}}})` : ""),
  }));
  const at = page.parts.findIndex((p) => p.heading === "Examples");
  page.parts.splice(at < 0 ? 0 : at, at < 0 ? 0 : 1, ...list);
})();
