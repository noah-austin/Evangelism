# Notes for Claude

- Content lives in `data/*.js`; format is documented at the top of each file and in README.md.
- Bible translation is **NASB 1995**. New verses go in `data/verses.js` with `verified: false` unless the exact wording has been confirmed. Keep total verses well under 1,000 (Lockman limit).
- Tag content with `sources` (Ray Comfort, Mark Spence, Living Waters, Greg Koukl, Cliff/Stuart Knechtle, Lee Strobel, C.S. Lewis, Russell Hunter, Abolitionist Rising). Paraphrase their approaches; don't quote long passages from their books.
- Tone: non-denominational; Way of the Master is the primary gospel path.
- Keep "Say"/"Ask" lines short enough to read at a glance on a phone.
- After adding new files, update `FILES` and bump `VERSION` in `sw.js`.
