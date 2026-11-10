# Notes for Claude

- Content lives in `data/*.js`; format is documented at the top of each file and in README.md.
- Bible translation is **NASB 1995**. All verses were checked against Bible Gateway (NASB1995). New verses go in `data/verses.js` with `verified: false`; check them with `tools/fetch_nasb.py` (www.biblegateway.com is allowed in the network settings), fix the text, then set `verified: true`. Keep total verses well under 1,000 (Lockman limit).
- Tag content with `sources` (Ray Comfort, Mark Spence, Living Waters, Greg Koukl, Cliff/Stuart Knechtle, Lee Strobel, C.S. Lewis, Russell Hunter, Abolitionist Rising, Wes Huff). Paraphrase their approaches; don't quote long passages from their books.
- Tone: non-denominational; Way of the Master is the primary gospel path.
- Keep "Say"/"Ask" lines short enough to read at a glance on a phone.
- After adding new files, update `FILES` and bump `VERSION` in `sw.js`.
- No emojis or decorative symbols anywhere (the user dislikes them). Icons are inline SVG line drawings.
- Objections need a `category` from `DATA.objectionCategories`.
- My Convictions (`data/convictions.js`) holds the user's own positions; only change a "My view" after they confirm it.
- Every verse needs a short `tag` (2-5 words) shown next to its reference.
- Visual style: warm cards (cream background, navy top bar, gold "Say" boxes, teal "Ask" boxes). The user preferred this over a minimal white design.
- Site layout is Learn / Practice / Look up (see README "Site layout"). A People page joins a worldview note (Background) with its talking path (Conversation); map ids in `PERSON_TALK` in js/app.js when they differ.
- Answer pages have Talk and Study views. Study (`deep`, `lead`, `inBrief`, `otherViews`) is pure reference material; conversation advice (pushback replies, tips, gospel bridge) goes in `talk`. Sections in `deep` and `talk` start with a bold heading ending in a colon. See the header of data/objections.js.
