# Kava Construction: Performance Max

**Live since Nov 6, 2026** in the Kava Construction Google Ads account (246-070-3645).

| Setting | Value |
|---|---|
| Campaign | PMax \| Decks & Extensions - Morganton 40mi |
| Budget | $15/day |
| Bidding | Maximize conversions |
| Goals | Submit lead form (calls, texts, Calendly bookings on the site) + calls from ads |
| Location | 40 mi around 105 Reep St, Morganton. **Presence only**, so no clicks from people outside the area |
| Languages | English, Spanish |
| Channels | Google Search/Maps/YouTube first. Search partners capped at 5%, Display at 10% |
| AI options | Final URL expansion, text customization and image enhancement are **off**, so every ad says only true things and lands on the right page |
| Tracking | UTM suffix `utm_medium=pmax` on every click. The site tag AW-18543295549 belongs to this account |

## Asset groups

| Asset group | Landing page | Images | Search themes |
|---|---|---|---|
| Decks & Stairs | /services/decks | 20 real job photos | 26 |
| Porches & Home Extensions | /services/porches | 20 real job photos | 25 |

Both use the audience signal "Kava - Homeowners planning home projects" (Home Improvement, General Contracting & Remodeling, Garden Sheds & Outdoor Structures, Home Renovation, Renovating Home Soon, Recently Moved). Campaign-level assets: call (828-334-2101), SMS, and 5 sitelinks (Book a Free Estimate, Porches & Additions, Roof Repair & Replacement, See Our Work, Towns We Serve).

The copy, search themes and signals are in `campaign.mjs` (`node ad-assets/pmax/campaign.mjs` checks length limits). Images come from the crew's own photos only: cropped, resized and lightly toned by `build-images.cjs`. Nothing is AI-generated or stock.

**Roofing** copy and images are ready in `campaign.mjs` and `images/roofing`, but they're not live. Roofing clicks cost $15 to $40, which would use up a $15 day on a single click.

## What to do next

- **Days 1 to 14:** don't touch anything. PMax is learning.
- **Weekly:** Insights → Search terms. Add junk searches as negative keywords at the account level.
- **Raise ad strength to Excellent:** add one 15 to 30 second vertical phone video of a finished deck or porch to each asset group.
- **After 15+ conversions in 30 days:** consider Target CPA, set at about 1.2 times the actual cost per lead.
- The existing **Search | Decks & Outdoor** campaign ($15/day) is still running. Total account spend is about $30/day.
