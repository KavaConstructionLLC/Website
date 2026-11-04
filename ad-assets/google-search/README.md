# Kava Construction: Google Search campaigns

Three search campaigns built around how Morganton-area homeowners actually search for a contractor, with every click landing on the matching service page. Leads are counted by the site's "Submit lead form" conversion (`AW-18543295549/QgbpCI305K8dEL34kIpF`). That conversion fires on call taps, text taps and finished Calendly bookings.

| Campaign | Daily budget | Bidding | Ad groups |
|---|---|---|---|
| Search \| Home Improvement | $25 | Maximize conversions | Kitchen, Bathroom, General Contractor & Remodeling, Porches/Additions/Sheds, Decks, Concrete, Flooring, Windows, Drywall |
| Search \| Roofing | $20 | Maximize conversions | Roof Replacement, Roof Repair & Leaks |
| Search \| Brand | $3 | Maximize clicks | Kava Brand |

That's about $48 a day, or roughly $1,450 a month. Change the budgets in `build.mjs` or in Google Ads.

**Why roofing is its own campaign:** roofing clicks often cost $15 to $40, several times more than a deck or drywall click. In a shared budget, roofing would eat the money before the kitchen and bath ads ever showed.

**Why brand is its own campaign:** people searching "Kava Construction" convert cheaply. Mixed in with the other campaigns, they'd make the non-brand numbers look better than they really are. The brand word `kava` is a negative keyword in the other two campaigns.

## What's in the file

`kava-search-campaigns.csv` is a Google Ads Editor import:
- 12 ad groups
- 142 keywords
- 1 responsive search ad per ad group, with 15 headlines and 4 descriptions
- a shared negative keyword list on the non-brand campaigns

All 3 campaigns import as **Paused**.

- **Keywords are phrase and exact match only, with no broad match.** Broad match on a new account with a small budget spends on loosely related searches before Smart Bidding has any data to learn from. Add broad match later, once the account has 30+ conversions.
- **The ads use only facts the site already states:** licensed and insured, 10+ years, free estimate, 5% off, Se habla español, 40-mile service area, the crew's own photos. There are no prices, review counts or "best in town" claims.
- **There are no phone numbers in the ad text.** Google rejects ads that contain them. The number goes in the call asset below.
- **The Final URL suffix tags each click** with UTM parameters. The site passes those to Calendly, so every booking shows which campaign and keyword it came from.

To change any copy, edit `build.mjs` and run it again. The script fails if any headline, description or path is over Google's length limit.

```bash
node ad-assets/google-search/build.mjs
```

## Import into Google Ads Editor

1. Download [Google Ads Editor](https://ads.google.com/intl/en/home/tools/ads-editor/), sign in, and download the Kava ad account (the one that owns conversion tag `AW-18543295549`).
2. Go to **Account → Import → From file** and pick `kava-search-campaigns.csv`.
3. Review the changes, then click **Keep**. Don't post yet. Set up the settings below first.

## Settings to set by hand (Editor's CSV can't carry these)

Apply these to all 3 campaigns:

- **Networks:** Google Search only. **Turn off Search Partners and the Display Network.** Display is where small budgets go to die.
- **Locations:** a radius of **40 miles** around 105 Reep St, Morganton, NC 28655.
- **Location options:** choose **"Presence: people in or regularly in your included locations."** This is the most important setting on this page. The default also targets people who are merely "interested in" Morganton, which pays for clicks from people in other states.
- **Languages:** English and Spanish. The import already sets this; confirm it.
- **Ad schedule:** all hours. People book online at night. Only the call asset is limited to business hours.
- **Conversion goal:** use account default goals, with "Submit lead form" as the primary goal.
- **Auto-apply recommendations:** turn them all off (Recommendations → Auto-apply). Otherwise Google adds broad match keywords and raises budgets on its own.

## Assets (add at account level so every campaign uses them)

**Call asset**
- Phone: 828-334-2101
- Schedule: Monday to Saturday, 8 AM to 5 PM, so calls from ads don't go to voicemail.
- Call reporting on, counting calls of 60 seconds or longer as a conversion ("Calls from ads").

**Sitelinks** (25 characters max on the link text, 35 on each description line)

| Link text | URL | Description 1 | Description 2 |
|---|---|---|---|
| Book a Free Estimate | /book | Pick a time that works for you | 5% off our services |
| See Our Work | /gallery | Real photos from our own jobs | Kitchens, baths, decks and more |
| Kitchen Remodeling | /services/kitchen | Cabinets, counters, tile, floors | Free kitchen estimate |
| Bathroom Remodeling | /services/bathroom | Showers, tubs, tile and vanities | Free bathroom estimate |
| Roof Repair & Replacement | /services/roofing | Leaks, storm damage, new roofs | Licensed and insured crew |
| Decks & Porches | /services/decks | Decks, stairs, porches, sheds | Built by our own crew |
| Towns We Serve | /service-areas | Morganton and 40 miles around | Hickory, Lenoir, Marion and more |
| About Kava | /about | 10+ years, licensed and insured | Se habla español |

**Callouts** (25 characters max): Licensed & Insured · 10+ Years Experience · Free Estimates · 5% Off Our Services · Se Habla Español · Book Online 24/7 · One Crew, Start to Finish · Real Photos of Our Work

**Structured snippet.** Header: *Services*. Values: Kitchens, Bathrooms, Roofing, Decks, Porches, Flooring, Concrete, Windows, Drywall

**Location asset:** link the Kava Google Business Profile (Assets → Location) so the address and map pin show with the ads.

**Image assets:** add 4 to 6 real job photos from `site/src/assets/photos` (kitchen-01, bathroom-01, decks-01, porches-01, roofing-02). Use square and landscape crops.

## Before turning it on, confirm with the owner

These would make good negative keywords if Kava doesn't do the work. They aren't in the file yet so no real jobs get blocked:
- `metal roof` or `metal roofing`
- `flat roof`
- `mobile home`
- `gutters`
- `siding`, if he doesn't take siding-only jobs
- `paint` or `painting`
- `fence`
- `pool`

## Launch checklist

1. Import the CSV, set the settings above, add the assets, then **Post**.
2. Enable the campaigns.
3. From your phone, search "deck builder near me" in the target area, click the ad, and tap Call. Within a few hours the conversion should show in Tools → Conversions. "Unverified" at first is normal.
4. Finish a test booking in the Calendly pop-up. That should count too. Cancel the booking afterward.

## First 30 days

- **Days 1 to 7:** don't touch bids or budgets. Smart Bidding is learning. Check that impressions are coming in and the ads are approved.
- **Every 3 to 4 days:** open the **search terms report** and add anything irrelevant as a negative keyword. This is the single biggest lever on a local campaign.
- **Day 14:** pause any ad group with 100+ clicks and no leads. Move its budget to the ad groups that are producing.
- **Day 30, or once there are 15+ conversions in 30 days:** switch Home Improvement and Roofing to **Target CPA**. Set it at about 1.2 times your actual cost per lead so volume doesn't drop.
- **After 30+ conversions:** test broad match on your 2 or 3 best ad groups.
