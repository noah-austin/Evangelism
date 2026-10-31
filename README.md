# Gospel Field Guide

A phone-first, offline-capable evangelism reference: gospel paths, objections, conversation skills, evidence, quick verses (NASB 1995), openers, and worldview notes.

No build step — it's plain HTML/CSS/JS. Open `index.html` through any static server (e.g. GitHub Pages).

## Where things live

| File | What's in it |
|---|---|
| `data/verses.js` | Every verse (NASB 1995), topics, notes, and a `verified` flag |
| `data/paths.js` | Way of the Master, Romans Road, testimony |
| `data/objections.js` | Objections: one-liner, ask-back, 30-second answer, deeper study |
| `data/skills.js` | Tactics (Koukl), Knechtle-style questions |
| `data/evidence.js` | Resurrection, Lewis's trilemma, moral law |
| `data/openers.js` | Starting and wrapping up conversations |
| `data/worldviews.js` | Notes for specific worldviews |

## Writing content

In any text field:
- `**bold**`, `*italics*`
- Lines starting with `- ` or `1. ` become lists
- `[[Romans 3:23]]` makes a tappable verse (must match a `ref` in `verses.js`)
- `{{Label|objections/good-person}}` links to another page

## Verse checking

Every verse starts with `verified: false` and shows a "check wording" badge. Once the text is checked word-for-word against a NASB 1995 Bible, set `verified: true`.

## Updating offline copies

`sw.js` saves files for offline use. If you add a new file, add it to `FILES` in `sw.js` and bump `VERSION`. Changes to existing files show up on the next app open after an update.

## Copyright

Scripture quotations taken from the (NASB®) New American Standard Bible®, Copyright © 1960, 1971, 1977, 1995 by The Lockman Foundation. Used by permission. All rights reserved. lockman.org

(Lockman allows quoting up to 1,000 verses without written permission, provided they don't make up a complete book of the Bible or 50% or more of the work.)
