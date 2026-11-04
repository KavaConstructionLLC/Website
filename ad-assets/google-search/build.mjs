// Builds the Google Ads Editor import file for Kava's search campaigns.
// Run: node ad-assets/google-search/build.mjs
// Every headline, description and path is length-checked against Google's limits.
import { writeFileSync } from 'node:fs';

const site = 'https://www.kavaconstructionllc.com';
const urlSuffix = 'utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}';

// Proof and call-to-action lines every ad group shares. No phone numbers: Google rejects them in ad text.
const sharedHeadlines = [
  'Licensed & Insured Crew',
  '10+ Years in Construction',
  'Free Estimates, Book Online',
  '5% Off Our Services',
  'Se Habla Español',
  'Local Morganton Contractor',
  'Pick Your Estimate Time',
  'One Crew, Start to Finish',
  'See Our Real Job Photos',
  'Book a Free Estimate Today',
];
const sharedDescriptions = [
  'Licensed and insured, 10+ years. Pick a time online and get a free, straight estimate.',
  'Serving Morganton and towns within 40 miles. 5% off our services. Se habla español.',
];

// Generic words a hiring homeowner never searches. Applied to every non-brand campaign.
const negatives = {
  phrase: [
    'how to', 'how do i', 'do it yourself', 'contractor license', 'equipment rental', 'for sale',
    'home depot', 'lowes', "lowe's", 'menards', 'ikea', 'harbor freight', 'floor and decor',
  ],
  broad: [
    'diy', 'youtube', 'video', 'videos', 'jobs', 'job', 'hiring', 'career', 'careers', 'salary', 'wage',
    'employment', 'apprentice', 'apprenticeship', 'school', 'course', 'courses', 'training', 'class',
    'certification', 'wholesale', 'supply', 'supplies', 'materials', 'used', 'craigslist', 'software',
    'app', 'template', 'pdf', 'calculator', 'ideas', 'pictures', 'images', 'pinterest', 'inspiration',
    'commercial', 'industrial', 'lawyer', 'attorney', 'lawsuit', 'complaints', 'scam',
    'asheville', 'charlotte', 'raleigh', 'greensboro', 'durham', 'gastonia',
  ],
};

const kw = (phrase = [], exact = []) => ({ phrase, exact });

const campaigns = [
  {
    name: 'Search | Home Improvement',
    budget: 25,
    bid: 'Maximize conversions',
    adGroups: [
      {
        name: 'Kitchen Remodeling', path: ['kitchen', 'remodel'], url: '/services/kitchen',
        keywords: kw(
          ['kitchen remodel', 'kitchen remodeling', 'kitchen renovation', 'kitchen remodeling contractor', 'kitchen remodelers',
            'kitchen cabinet installation', 'cabinet installer', 'countertop installation', 'backsplash installation', 'kitchen remodel cost'],
          ['kitchen remodel near me', 'kitchen remodeling near me', 'kitchen remodelers near me', 'kitchen remodel morganton nc'],
        ),
        headlines: ['Kitchen Remodeling Morganton', 'Kitchen Remodel Contractor', 'Cabinets, Counters & Tile', 'Free Kitchen Remodel Estimate', 'Full Gut or One Upgrade'],
        descriptions: [
          'Cabinets, countertops, backsplash and floors, or a full gut job. One crew does it all.',
          'See real kitchens our crew built, then book your free estimate in under a minute.',
        ],
      },
      {
        name: 'Bathroom Remodeling', path: ['bathroom', 'remodel'], url: '/services/bathroom',
        keywords: kw(
          ['bathroom remodel', 'bathroom remodeling', 'bathroom renovation', 'bathroom remodel contractor', 'shower remodel',
            'tub to shower conversion', 'walk in shower installation', 'shower installation', 'bathroom tile installation', 'bathroom remodel cost'],
          ['bathroom remodel near me', 'bathroom remodeling near me', 'shower installation near me', 'bathroom remodel morganton nc'],
        ),
        headlines: ['Bathroom Remodel Morganton', 'Tub to Walk-In Shower', 'Tile Showers & New Vanities', 'Free Bathroom Estimate', "We Fix What's Behind the Wall"],
        descriptions: [
          'Showers, tubs, tile and vanities. If a wall is rotten behind it, we fix that first.',
          'Swap your tub for a walk-in shower. Book a free estimate online in under a minute.',
        ],
      },
      {
        name: 'General Contractor & Remodeling', path: ['home', 'remodeling'], url: '/services/remodel',
        keywords: kw(
          ['home remodeling', 'home remodeling contractor', 'home renovation contractor', 'remodeling contractor', 'remodeling company',
            'basement remodel', 'basement finishing', 'home improvement contractor', 'whole house remodel', 'general contractor morganton'],
          ['general contractor near me', 'remodeling contractor near me', 'remodeling companies near me', 'home remodeling near me', 'contractor morganton nc'],
        ),
        headlines: ['Home Remodeling Morganton', 'General Contractor Near You', 'Whole-Home & Basement Remodels', 'Kitchens, Baths, Floors & More', 'Rental & Flip Updates'],
        descriptions: [
          'Demo, framing, drywall, floors, kitchens and baths. You deal with one company.',
          'Whole-home, basement and rental remodels around Morganton. Book a free estimate.',
        ],
      },
      {
        name: 'Porches, Additions & Sheds', path: ['porches', 'additions'], url: '/services/porches',
        keywords: kw(
          ['porch builder', 'covered porch builder', 'covered porch', 'front porch addition', 'porch contractor', 'room addition',
            'room addition contractor', 'home addition builder', 'shed builder', 'custom shed builder'],
          ['porch builders near me', 'home additions near me', 'shed builders near me'],
        ),
        headlines: ['Covered Porches & Additions', 'Porch Builder in Morganton', 'Room Additions & Sheds', 'Framed & Finished by Our Crew', 'Free Porch & Addition Estimate'],
        descriptions: [
          'Covered porches, front extensions, additions and sheds framed from the ground up.',
          'Tongue-and-groove ceilings, siding and roofing to finish the job. Free estimate.',
        ],
      },
      {
        name: 'Decks', path: ['decks'], url: '/services/decks',
        keywords: kw(
          ['deck builder', 'deck builders', 'deck contractor', 'deck installation', 'deck repair', 'deck replacement',
            'deck stairs', 'deck railing installation', 'new deck cost', 'build a deck'],
          ['deck builders near me', 'deck repair near me', 'deck contractors near me'],
        ),
        headlines: ['Deck Builder in Morganton', 'New Decks, Stairs & Railings', 'Deck Repair & Replacement', 'Decks on Sloped Yards', 'Free Deck Estimate'],
        descriptions: [
          'Pressure-treated decks, stairs, landings and railings, built or rebuilt by our crew.',
          'Sloped yard? We build raised decks on posts with the bracing the height needs.',
        ],
      },
      {
        name: 'Concrete', path: ['concrete'], url: '/services/concrete',
        keywords: kw(
          ['concrete contractor', 'concrete steps', 'concrete stairs', 'concrete patio', 'concrete patio contractor',
            'concrete walkway', 'concrete driveway', 'concrete driveway contractor', 'concrete company'],
          ['concrete contractors near me', 'concrete company near me', 'concrete steps near me'],
        ),
        headlines: ['Concrete Contractor Morganton', 'Concrete Steps & Patios', 'Walkways & Driveways Poured', 'Forms, Pour & Finish', 'Free Concrete Estimate'],
        descriptions: [
          'Steps, patios, walkways and driveways. We build the forms, pour and finish.',
          'Worn slope to a full flight of poured steps. See our work and book a free estimate.',
        ],
      },
      {
        name: 'Flooring', path: ['flooring'], url: '/services/flooring',
        keywords: kw(
          ['flooring installation', 'flooring installer', 'flooring contractor', 'vinyl plank flooring installation', 'lvp installation',
            'laminate flooring installation', 'tile floor installation', 'tile installer', 'floor installation'],
          ['flooring installers near me', 'floor installation near me', 'tile installer near me'],
        ),
        headlines: ['Flooring Installation Near You', 'Vinyl Plank, Laminate & Tile', 'Floors Installed in Morganton', 'Finished With New Baseboard', 'Free Flooring Estimate'],
        descriptions: [
          'Vinyl plank, laminate and tile for kitchens, baths, bedrooms and covered porches.',
          'We can take out the old floor and finish the room with new baseboard. Free estimate.',
        ],
      },
      {
        name: 'Windows', path: ['windows'], url: '/services/windows',
        keywords: kw(
          ['window replacement', 'window installation', 'replacement windows', 'window replacement company', 'new window installation', 'window installer'],
          ['window replacement near me', 'window installers near me', 'window installation near me'],
        ),
        headlines: ['Window Replacement Morganton', 'One Window or Whole House', 'Window Installation Near You', 'Wall Repair Around Windows', 'Free Window Estimate'],
        descriptions: [
          'Replace one window or the whole house, and we repair the wall around it too.',
          'Window replacement and new openings in Morganton. Book your free estimate online.',
        ],
      },
      {
        name: 'Drywall', path: ['drywall', 'repair'], url: '/services/walls',
        keywords: kw(
          ['drywall repair', 'drywall contractor', 'drywall installation', 'drywall patch', 'drywall hanging and finishing',
            'water damaged drywall repair', 'sheetrock repair'],
          ['drywall repair near me', 'drywall contractors near me'],
        ),
        headlines: ['Drywall Repair in Morganton', 'Patch Holes to Full Rooms', 'Hang, Tape & Finish Drywall', 'Wall Repair After Leaks', 'Free Drywall Estimate'],
        descriptions: [
          'From a patched hole to a full room, hung, taped and finished, ready for paint.',
          'Wall damaged after a leak or plumbing work? We repair it. Book a free estimate.',
        ],
      },
    ],
  },
  {
    // Roof clicks cost several times more, so roofing gets its own budget and cannot starve the rest
    name: 'Search | Roofing',
    budget: 20,
    bid: 'Maximize conversions',
    adGroups: [
      {
        name: 'Roof Replacement', path: ['roofing', 'replacement'], url: '/services/roofing',
        keywords: kw(
          ['roofing contractor', 'roof replacement', 'new roof', 'new roof cost', 'shingle roof replacement', 'roofing company',
            'reroof', 'roofers morganton'],
          ['roofing contractor near me', 'roofers near me', 'roof replacement near me', 'roofing companies near me', 'roofers morganton nc'],
        ),
        headlines: ['Roof Replacement Morganton', 'Roofing Contractor Near You', 'Tear-Off, Decking & Shingles', 'New Roof, Free Estimate', 'Bad Decking Replaced First'],
        descriptions: [
          'We tear off the old roof, replace bad decking and lay new underlayment and shingles.',
          'Licensed and insured roofing crew in Morganton. Pick a time for a free estimate.',
        ],
      },
      {
        name: 'Roof Repair & Leaks', path: ['roofing', 'repair'], url: '/services/roofing',
        keywords: kw(
          ['roof repair', 'roof leak repair', 'roof leak', 'storm damage roof repair', 'roof damage repair', 'shingle repair', 'roof patch'],
          ['roof repair near me', 'roof leak repair near me', 'roofer near me'],
        ),
        headlines: ['Roof Repair in Morganton', "Roof Leak? We'll Look at It", 'Storm Damage Roof Repair', 'Roof Leak Repair Near You', 'Free Roof Repair Estimate'],
        descriptions: [
          'Leak or storm damage? Tell us what happened and we will come look at it.',
          'Roof repairs, decking and shingles by a licensed, insured local crew. Free estimate.',
        ],
      },
    ],
  },
  {
    // Cheap clicks from people already looking for Kava. Kept apart so they do not inflate the other campaigns.
    name: 'Search | Brand',
    budget: 3,
    bid: 'Maximize clicks',
    brand: true,
    adGroups: [
      {
        name: 'Kava Brand', path: ['free-estimate'], url: '/',
        keywords: kw(
          ['kava construction', 'kava home improvements', 'kava remodeling'],
          ['kava construction', 'kava construction llc', 'kava home improvements', 'kava home improvements llc', 'kava remodeling'],
        ),
        headlines: ['Kava Construction LLC', 'Kava Construction Morganton', 'Was Kava Home Improvements', 'Official Site', 'Book Your Free Estimate'],
        descriptions: [
          'Kava Construction, formerly Kava Home Improvements. Licensed and insured, 10+ years.',
          'Kitchens, baths, roofing, decks and more in Morganton. Book your free estimate.',
        ],
      },
    ],
  },
];

const errors = [];
function check(text, max, where) {
  if ([...text].length > max) errors.push(`${where}: "${text}" is ${[...text].length}/${max}`);
}

const columns = [
  'Campaign', 'Campaign Type', 'Networks', 'Budget', 'Budget type', 'Bid Strategy Type', 'Languages', 'Campaign Status',
  'Final URL suffix', 'Ad Group', 'Ad Group Status', 'Keyword', 'Criterion Type', 'Ad type', 'Final URL', 'Path 1', 'Path 2',
  ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`),
  ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`),
];
const rows = [];
const row = (data) => rows.push(columns.map((c) => data[c] ?? ''));

for (const c of campaigns) {
  // Paused on import so nothing spends until the settings in the guide are checked
  row({
    Campaign: c.name, 'Campaign Type': 'Search', Networks: 'Google search', Budget: c.budget, 'Budget type': 'Daily',
    'Bid Strategy Type': c.bid, Languages: 'en;es', 'Campaign Status': 'Paused', 'Final URL suffix': urlSuffix,
  });
  if (!c.brand) {
    negatives.phrase.forEach((k) => row({ Campaign: c.name, Keyword: k, 'Criterion Type': 'Negative Phrase' }));
    negatives.broad.forEach((k) => row({ Campaign: c.name, Keyword: k, 'Criterion Type': 'Negative Broad' }));
    row({ Campaign: c.name, Keyword: 'kava', 'Criterion Type': 'Negative Broad' });
  }
  for (const g of c.adGroups) {
    row({ Campaign: c.name, 'Ad Group': g.name, 'Ad Group Status': 'Enabled' });
    g.keywords.phrase.forEach((k) => row({ Campaign: c.name, 'Ad Group': g.name, Keyword: k, 'Criterion Type': 'Phrase' }));
    g.keywords.exact.forEach((k) => row({ Campaign: c.name, 'Ad Group': g.name, Keyword: k, 'Criterion Type': 'Exact' }));

    const headlines = [...g.headlines, ...sharedHeadlines].slice(0, 15);
    const descriptions = [...g.descriptions, ...sharedDescriptions];
    const where = `${c.name} / ${g.name}`;
    if (new Set(headlines).size !== 15) errors.push(`${where}: needs 15 unique headlines`);
    headlines.forEach((h) => check(h, 30, `${where} headline`));
    descriptions.forEach((d) => check(d, 90, `${where} description`));
    g.path.forEach((p) => check(p, 15, `${where} path`));

    const ad = { Campaign: c.name, 'Ad Group': g.name, 'Ad type': 'Responsive search ad', 'Final URL': site + g.url, 'Path 1': g.path[0], 'Path 2': g.path[1] };
    headlines.forEach((h, i) => (ad[`Headline ${i + 1}`] = h));
    descriptions.forEach((d, i) => (ad[`Description ${i + 1}`] = d));
    row(ad);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const csv = [columns, ...rows].map((r) => r.map((v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v)).join(',')).join('\n');
const out = new URL('./kava-search-campaigns.csv', import.meta.url);
writeFileSync(out, csv + '\n');
const keywordCount = campaigns.flatMap((c) => c.adGroups).reduce((n, g) => n + g.keywords.phrase.length + g.keywords.exact.length, 0);
console.log(`${campaigns.length} campaigns, ${campaigns.flatMap((c) => c.adGroups).length} ad groups, ${keywordCount} keywords, ${rows.length} rows -> ${out.pathname}`);
