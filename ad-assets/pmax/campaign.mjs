// Kava Construction Performance Max campaign: copy, search themes and signals.
// Run `node ad-assets/pmax/campaign.mjs` to check every asset against Google's length limits.
// Copy only uses facts the site states: licensed and insured, 10+ years, free estimate,
// 5% off, Se habla español, 40 miles around Morganton, own crew, real job photos.

const site = 'https://www.kavaconstructionllc.com';

export const campaign = {
  name: 'PMax | Decks & Extensions - Morganton 40mi',
  budget: '$15/day. Live asset groups: Decks & Stairs, Porches & Home Extensions. Roofing is not live (too costly per click at this budget).',
  channels: 'Google channels high priority; Search partners low (5% cap); Display low (10% cap)',
  goal: 'Leads: Submit lead form + Phone call lead (account defaults)',
  bidding: 'Maximize conversions (no target CPA until 15+ conversions in 30 days)',
  location: '40 mi radius around 105 Reep St, Morganton, NC 28655, Presence only',
  languages: ['English', 'Spanish'],
  finalUrlExpansion: 'Off (every click lands on the matching service page)',
  urlExclusions: ['/privacy', '/404'],
  finalUrlSuffix: 'utm_source=google&utm_medium=pmax&utm_campaign={campaignid}&utm_content={adgroupid}',
  businessName: 'Kava Construction',
  callToAction: 'Get quote',
  brandExclusion: 'none needed (Search | Brand handles brand terms if launched)',
};

const shared = {
  headlines: [
    'Free Estimate + 5% Off',
    'Licensed & Insured Crew',
    'Morganton, NC Contractor',
    '10+ Years Experience',
    'Se Habla Español',
    'Book Your Estimate Online',
  ],
  descriptions: [
    'Free estimate and 5% off. Call or book online.',
    'Licensed and insured, 10+ years. Serving homes within 40 miles of Morganton, NC.',
  ],
};

export const assetGroups = [
  {
    name: 'Decks & Stairs',
    finalUrl: `${site}/services/decks`,
    path: ['decks', 'morganton'],
    images: 'images/decks',
    headlines: [
      'Deck Builder in Morganton',
      'New Decks, Stairs & Rails',
      'Sloped Yard? We Build On It',
      'Deck Repair & Replacement',
      'Pressure-Treated Decks',
      'Safe Stairs & Landings',
      ...shared.headlines.slice(0, 4),
      'Get a Free Deck Estimate',
      'Built by Our Own Crew',
      'Old Deck? Soft Boards?',
      'Concrete & Wood Steps',
      'Book Online in a Minute',
    ],
    longHeadlines: [
      'New decks, stairs and railings built by a licensed Morganton crew. Free estimate.',
      'Soft boards or loose rails? Get a new pressure-treated deck. Free estimate + 5% off.',
      'Sloped yard? We set the posts and build the deck and stairs. Book a free estimate.',
      'Deck builder in Morganton, NC. Licensed, insured, 10+ years. Call or book online.',
      'From footings to railings, one crew builds your deck. Free estimate + 5% off.',
    ],
    descriptions: [
      'Free deck estimate + 5% off. Pick a time online.',
      'New decks, rebuilds, stairs, landings and railings, built from pressure-treated lumber.',
      'We dig the footings, set the posts, frame it, and build the stairs and rails ourselves.',
      shared.descriptions[1],
      'Wood and poured concrete steps, built to fit your slope. Se habla español.',
    ],
    searchThemes: [
      'deck builder', 'deck builders near me', 'deck contractor', 'deck installation', 'build a deck',
      'new deck', 'deck replacement', 'replace deck', 'deck repair', 'deck rebuild',
      'pressure treated deck', 'wood deck builder', 'raised deck', 'deck on sloped yard',
      'deck stairs', 'deck railing', 'stair builder', 'outdoor stairs', 'porch steps', 'concrete steps',
      'deck builder morganton nc', 'deck builder hickory nc', 'deck builder lenoir nc',
      'deck builder marion nc', 'deck builder valdese nc', 'deck contractor burke county',
    ],
  },
  {
    name: 'Porches & Home Extensions',
    finalUrl: `${site}/services/porches`,
    path: ['porches', 'additions'],
    images: 'images/extensions',
    headlines: [
      'Porches & Home Additions',
      'Covered Porch Builder',
      'Front House Extensions',
      'Room Additions & Sheds',
      'Add Space Without Moving',
      'Gabled Front Porches',
      ...shared.headlines.slice(0, 4),
      'Framed by Our Own Crew',
      'Get a Free Porch Estimate',
      'Custom Sheds Built On Site',
      'Tongue & Groove Ceilings',
      'Book Online in a Minute',
    ],
    longHeadlines: [
      'Covered porches, front extensions and room additions built by a Morganton crew.',
      'Need more room without moving? Get a free estimate on a home addition + 5% off.',
      'Turn a plain front entry into a covered gabled porch. Licensed and insured crew.',
      'Porches, additions and sheds framed, roofed and finished by one crew. Free estimate.',
      'Home extensions in Morganton, NC. Licensed, insured, 10+ years. Call or book online.',
    ],
    descriptions: [
      'Free estimate + 5% off. Call or book online today.',
      'We frame it, roof it and finish it: covered porches, front extensions, additions, sheds.',
      'One crew from the ground up, so you are not juggling separate trades. Se habla español.',
      shared.descriptions[1],
      'Tell us your plan, send photos of your home, and pick a time for your free estimate.',
    ],
    searchThemes: [
      'home addition', 'room addition', 'house extension', 'home extension contractor',
      'front porch addition', 'covered porch builder', 'porch builder', 'porch contractor',
      'build a covered porch', 'porch roof', 'add a porch', 'screened porch', 'sunroom addition',
      'addition contractor', 'garage addition', 'shed builder', 'custom shed', 'storage shed built on site',
      'general contractor near me', 'home remodeling contractor',
      'home addition morganton nc', 'porch builder hickory nc', 'home addition lenoir nc',
      'room addition burke county', 'general contractor morganton nc',
    ],
  },
  {
    name: 'Roofing',
    finalUrl: `${site}/services/roofing`,
    path: ['roofing', 'morganton'],
    images: 'images/roofing',
    headlines: [
      'Roofer in Morganton, NC',
      'Roof Repair & Replacement',
      'Roof Leak? Call Us Today',
      'Storm Damage Roof Repair',
      'New Shingles & Decking',
      'Free Roof Estimate',
      ...shared.headlines.slice(1, 5),
      '5% Off Your Roof Job',
      'Bad Decking Replaced',
      'Local Roofing Contractor',
      'Tear-Off to New Shingles',
      'Book Online in a Minute',
    ],
    longHeadlines: [
      'Roof leak or storm damage? A licensed Morganton roofer will look at it. Free estimate.',
      'Roof repair and replacement in Morganton, NC. Licensed, insured, 10+ years.',
      'Full tear-off, new decking, underlayment and shingles. Free estimate + 5% off.',
      'Missing or curling shingles? Get a free roof estimate from a local crew.',
      'Local roofing contractor serving 40 miles around Morganton. Call or book online.',
    ],
    descriptions: [
      'Free roof estimate + 5% off. Call or book online.',
      'Leaks, storm damage and full replacements. We replace bad decking before new shingles.',
      'Tear-off, decking, underlayment and shingles, all by our own licensed and insured crew.',
      shared.descriptions[1],
      'Tell us about the leak or damage and pick a time. Se habla español.',
    ],
    searchThemes: [
      'roofer', 'roofers near me', 'roofing contractor', 'roofing company', 'roof replacement',
      'new roof', 'roof repair', 'roof leak repair', 'leaking roof', 'storm damage roof',
      'shingle roof replacement', 'shingle repair', 'roof decking replacement', 'reroof',
      'roof inspection', 'emergency roof repair',
      'roofer morganton nc', 'roofing contractor hickory nc', 'roofer lenoir nc',
      'roofer marion nc', 'roof replacement burke county nc',
    ],
  },
];

// Audience signal (same on every asset group; PMax uses it as a starting hint, not a limit)
export const audienceSignal = {
  name: 'Kava - Homeowners planning outdoor & home projects',
  customSegmentSearchTerms: [
    'deck builder near me', 'deck replacement cost', 'home addition cost', 'covered porch cost',
    'roof replacement cost', 'roof leak repair', 'general contractor near me',
    'contractor morganton nc', 'contractor hickory nc',
  ],
  customSegmentWebsites: ['angi.com', 'homeadvisor.com', 'thumbtack.com', 'houzz.com', 'homedepot.com/services', 'lowes.com/l/installation-services'],
  interestsAndInMarket: [
    'In-market: Home Improvement > Home Repair & Maintenance',
    'In-market: Home Improvement > Roofing Services',
    'In-market: Home Improvement > Decking & Patio',
    'In-market: Home Improvement > Construction & Remodeling',
    'Life events: Recently purchased a home',
    'Detailed demographics: Homeowners',
  ],
};

const limits = { headlines: [3, 15, 30], longHeadlines: [1, 5, 90], descriptions: [2, 5, 90] };

let errors = 0;
for (const g of assetGroups) {
  for (const [key, [min, max, len]] of Object.entries(limits)) {
    const list = g[key];
    if (list.length < min || list.length > max) { errors++; console.error(`${g.name} ${key}: ${list.length} items (need ${min}-${max})`); }
    if (new Set(list).size !== list.length) { errors++; console.error(`${g.name} ${key}: duplicates`); }
    for (const t of list) if (t.length > len) { errors++; console.error(`${g.name} ${key} too long (${t.length}/${len}): ${t}`); }
  }
  if (!g.descriptions.some((d) => d.length <= 60)) { errors++; console.error(`${g.name}: needs one description of 60 chars or less`); }
  if (g.searchThemes.length > 50) { errors++; console.error(`${g.name}: over 50 search themes`); }
  for (const p of g.path) if (p.length > 15) { errors++; console.error(`${g.name} path too long: ${p}`); }
}
if (campaign.businessName.length > 25) errors++;
if (errors) process.exit(1);
console.log(`OK: ${assetGroups.length} asset groups, all assets within Google limits`);
