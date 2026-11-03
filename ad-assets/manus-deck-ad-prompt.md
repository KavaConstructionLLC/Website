# Kava Construction deck ad: Manus prompt

Upload these 4 files from this folder to Manus, then paste everything inside the code block:
`deck-03.jpg`, `deck-01.jpg`, `deck-06.jpg`, `kava-logo.png`

```text
ROLE
You are a senior direct-response designer who makes Facebook feed ads for local home contractors. Build 3 static image ads for Kava Construction LLC, a deck builder in Morganton, NC. The goal is one thing: a homeowner stops scrolling and requests a free estimate.

OUTPUT
- 3 feed PNG files, each exactly 1080 x 1350 px (4:5), sRGB, under 30 MB. Names: kava-deck-A.png, kava-deck-B.png, kava-deck-C.png
- 3 Stories/Reels PNG files, each exactly 1080 x 1920 px (9:16), using the same words and photos. Names: kava-deck-A-story.png, kava-deck-B-story.png, kava-deck-C-story.png. Keep all text out of the top 250 px and bottom 340 px.
- Also give me one zip with all six.

HOW TO BUILD THEM (IMPORTANT)
Build each ad as an HTML/CSS layout using the attached photos and logo, then render it to PNG at the exact size with a headless browser. Check the pixel size of each final file.
Do NOT use an AI image generator for any part of these ads.
Do NOT redraw, repaint, extend, upscale with AI, relight, or add anything to the photos. They are real Kava jobs and must stay real. You may only crop, and apply a mild contrast and exposure lift.
Every word must be live HTML text so the spelling is exact.

BRAND
- Fonts (Google Fonts): Archivo at weight 800-900 for headlines, Public Sans at weight 600-700 for everything else.
- Dark green: #3C4334 and #4A5240
- Orange: #F0892B (CTA button, with text #23281D on it)
- Soft orange accent: #FFBD7A
- White text on dark areas.
- Signature detail: a thin tape-measure ruler strip (evenly spaced tick marks, orange on dark green) used once as a divider. It should look like a real tape measure, subtle.
- Logo: kava-logo.png, about 150 px wide, on a dark area. Do not recolor or stretch it.
- Feel: a good tradesperson's truck and tape measure. Plainspoken, local, sharp. Not an agency, not luxury.

LAYOUT RULES FOR ALL
- The photo is the hero and fills the full canvas, or at least the top 65%.
- Text sits on a solid dark green panel or a strong dark green gradient. All text must pass high contrast on a phone.
- On the 4:5 ads, keep the headline, offer and CTA inside the center 1080 x 1080 area (at least 135 px clear of the top and bottom edges), with at least 70 px side margins. Only the photo, ruler or background reaches beyond that.
- Headline at least 84 px. Supporting text at least 36 px. Nothing under 28 px.
- One headline, one offer line, one button shape. Six seconds of reading at most. Remove anything that does not earn its place.
- The button is a drawn shape in orange saying "Get a Free Estimate".
- Do not fake Facebook UI, play buttons, notifications or stickers.

AD A: THE PROBLEM (photo: deck-03.jpg)
Crew building a deck under a blue sky. Keep the workers and the deck fully visible and crop to fit.
Headline: Soft boards. Loose railings.
Second line, in soft orange: Time for a new deck.
Offer line: Free estimate + 5% off
Trust line: Licensed & insured · 10+ years · Morganton, NC
Button: Get a Free Estimate

AD B: THE PAYOFF (photo: deck-01.jpg)
Finished deck with swing and chairs. This photo is landscape, so crop to the deck and swing, and place the text panel below the photo rather than stretching it.
Headline: Your new deck, built by a Morganton crew.
Offer line: Free estimate + 5% off
Trust line: Licensed & insured · 10+ years · Se habla español
Button: Get a Free Estimate

AD C: THE SLOPED LOT (photo: deck-06.jpg)
Raised deck on posts with stairs, on red Carolina clay. Keep the posts and the red clay visible. They are the point.
Headline: Sloped yard? We build on it.
Supporting line: Posts, framing, stairs and rails, all by our own crew.
Offer line: Free estimate + 5% off
Button: Get a Free Estimate

FACTS YOU MUST NOT CHANGE OR ADD TO
Use only the words above. Do not add:
- Prices, "starting at", or financing
- Star ratings, review counts, or testimonials
- Warranties or guarantees
- Deadlines, "limited time", or "spots left"
- "Best", "#1", or "cheapest"
- Composite, cedar, or any material other than pressure-treated wood
- Any phone number, URL, or address in the image (Facebook adds the link and button)
- References to anyone's age, gender, family, income or religion

FINAL CHECK BEFORE YOU DELIVER
1. Open each PNG and confirm it is exactly 1080 x 1350 or 1080 x 1920.
2. Shrink each to 375 px wide and confirm the headline and offer read easily at phone size.
3. Compare every word against this brief, letter by letter.
4. Confirm the photos look identical to the originals, apart from crop and mild contrast.
5. Show me all 6 side by side and tell me any line you could not follow.
```

## Ad copy for Ads Manager

**Primary text**

Soft boards or a loose railing on your deck? Thinking about adding one? Kava Construction builds, replaces and repairs pressure-treated decks in Morganton and towns within about 40 miles.

Our own crew digs the footings, sets the posts, frames the deck, and builds the stairs and railings. We look at the site, then give you a price.

✔ Free estimate
✔ 5% off when you mention this ad
✔ Licensed and insured, 10+ years
✔ Se habla español

Tap below to request your free estimate.

**Headline:** Free Deck Estimate + 5% Off

**Description:** Licensed and insured. Morganton, NC.

**Button:** Get Quote

## Campaign setup

| Setting | Use |
| --- | --- |
| Ad account | Kava Construction (2015679311823103) |
| Page | KAVA Home Improvements LLC (362570756932216), the one with lead form terms accepted |
| Objective | Leads |
| Special Ad Category | **Housing.** Meta lists housing repairs in this category, and skipping it risks rejection |
| Conversion location | Website and calls. Send everyone to the landing page below |
| Website URL | https://www.kavaconstructionllc.com/services/decks?utm_source=facebook&utm_medium=paid&utm_campaign=deck-leads |
| Pixel | Kava pixel (2127145141522315) |
| Conversion event | Lead |
| Call to action | Get Quote |
| Location | Pin on Morganton, NC, about 25 miles (Housing does not allow ZIP targeting and expands small radiuses) |
| Age, gender, interests | Leave broad. Housing locks most of this anyway |
| Placements | Manual: Facebook and Instagram Feed, Stories and Reels |
| Creative | Ads A, B and C in one ad set, with the 4:5 and 9:16 versions paired on each ad |

The site now reports every lead to the pixel:

| Pixel event | When it fires |
| --- | --- |
| Lead | Tap to call, tap to text, or a finished calendar booking |
| Contact | Tap to call or tap to text |
| Schedule | A finished calendar booking |
| ViewContent | A visitor opens a service page |
| EstimateStarted, EstimateDetailsDone, CalendarOpened | Steps inside the estimate form |

A call Lead counts the tap, not a connected call. If website leads stay expensive after about 2 weeks, test a second ad set on an Instant Form using the same creative, with these questions: full name, phone, ZIP, and "What do you need?" (New deck / Replace old deck / Repair / Stairs or railing). Use https://www.kavaconstructionllc.com/privacy as the form privacy link. Call every lead right away: fast callbacks matter more than anything else on this list.
