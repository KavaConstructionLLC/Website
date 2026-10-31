import { wizardServices } from './wizard';
import { serviceContent, type ServiceContent } from './serviceContent';

export interface Photo { file: string; alt: string }
export interface Faq { q: string; a: string }
export interface Service {
  answer: string;
  bestFor: string[];
  costIntro: string;
  costFactors: string[];
  related: string[];
  id: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  includes: string[];
  photos: Photo[];
  faqs: Faq[];
}

const estimateFaq: Faq = {
  q: 'Is the estimate free?',
  a: 'Yes. Tell us about the job, pick a time on the calendar, and the estimate costs you nothing.',
};

const baseServices: Omit<Service, keyof ServiceContent>[] = [
  {
    id: 'kitchen',
    name: 'Kitchen Remodeling',
    title: 'Kitchen Remodeling in Morganton, NC | Kava Construction',
    metaDescription: 'Kitchen remodeling in Morganton, NC: cabinets, countertops, backsplash, flooring and full gut jobs. Licensed and insured. Book a free estimate.',
    h1: 'Kitchen remodeling in Morganton, NC',
    intro: 'We install cabinets, countertops, backsplash and floors, or take the room down to the studs and rebuild it. Every photo on this page is a kitchen our crew worked on.',
    includes: ['Full kitchen remodels', 'Cabinet installation', 'Cabinet refinishing', 'Countertops and islands', 'Backsplash tile', 'Faucet and sink installation', 'Kitchen flooring'],
    photos: [
      { file: 'kitchen-01', alt: 'Finished kitchen with white shaker cabinets, glossy tile backsplash and wood-look floor' },
      { file: 'kitchen-02', alt: 'White kitchen with a gray island, pendant lights and stainless appliances' },
      { file: 'kitchen-03', alt: 'New stainless range between white cabinets with black pulls' },
      { file: 'kitchen-04', alt: 'White corner cabinets with a quartz countertop and undermount sink' },
      { file: 'kitchen-05', alt: 'Stainless refrigerator and dishwasher set into new white cabinets' },
      { file: 'kitchen-06', alt: 'White cabinets with a glass door and marble-look tile backsplash' },
      { file: 'kitchen-07', alt: 'Kitchen island with a marble-look top, shiplap base and crystal pendant lights' },
      { file: 'kitchen-08', alt: 'New white wall cabinets with a glass-front door during installation' },
      { file: 'kitchen-09', alt: 'Marble-look countertop being fitted, with protective tape still on the cabinets' },
      { file: 'kitchen-10', alt: 'Kitchen wall opened up with outlets and plumbing roughed in during a remodel' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you keep my layout and only change part of the kitchen?', a: 'Yes. We take on single items like cabinets or a backsplash as well as full remodels. Pick what you need when you fill out the request.' },
      { q: 'Do you handle the floors too?', a: 'Yes. We install flooring, so one crew can handle the cabinets, counters and floor.' },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom Remodeling',
    title: 'Bathroom Remodeling in Morganton, NC | Kava Construction',
    metaDescription: 'Bathroom remodeling in Morganton, NC: showers, tubs, tile, vanities and full remodels, including plumbing behind the walls. Book a free estimate.',
    h1: 'Bathroom remodeling in Morganton, NC',
    intro: 'We swap a tub for a shower, tile the walls, set a new vanity, or open everything up and rebuild it. When a wall is rotten behind the surround, we fix that before the new one goes in.',
    includes: ['Full bathroom remodels', 'Shower installation', 'Bathtub installation', 'Wall and floor tile', 'Vanities and mirrors', 'Faucet installation'],
    photos: [
      { file: 'bathroom-01', alt: 'Tub and shower surrounded by floor-to-ceiling marble-look tile with black fixtures' },
      { file: 'bathroom-02', alt: 'Tiled walk-in shower with a built-in niche and hexagon floor tile' },
      { file: 'bathroom-03', alt: 'Gray vanity with a dark top and round wood mirror on a tiled wall' },
      { file: 'bathroom-04', alt: 'Finished bathroom with a white tub surround, white vanity and dark wood-look floor' },
      { file: 'bathroom-05', alt: 'New white tub and shower surround with a chrome shower head' },
      { file: 'bathroom-06', alt: 'Double vanity with white cabinets, dark tile and a framed mirror' },
      { file: 'bathroom-07', alt: 'Toilet and new gray vinyl floor beside a white tub' },
      { file: 'bathroom-08', alt: 'Kava crew member connecting plumbing in a bathroom opened to the studs' },
      { file: 'bathroom-09', alt: 'Crew member crimping new PEX water lines above a tub' },
      { file: 'bathroom-10', alt: 'Bathroom stripped to the framing and insulation before rebuilding' },
      { file: 'bathroom-11', alt: 'Bathroom during tile work with backer board and thinset on the floor' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you replace a tub with a walk-in shower?', a: 'Yes. Choose Shower when you fill out the request and tell us what is there now.' },
      { q: 'What if there is damage behind the wall?', a: 'We open the wall, show you what is there, and repair it before the new surround or tile goes up.' },
    ],
  },
  {
    id: 'flooring',
    name: 'Flooring Installation',
    title: 'Flooring Installation in Morganton, NC | Kava Construction',
    metaDescription: 'Flooring installation in Morganton, NC: vinyl plank, laminate and tile for kitchens, baths, bedrooms and porches. Book a free estimate.',
    h1: 'Flooring installation in Morganton, NC',
    intro: 'We lay plank flooring and tile in kitchens, bedrooms, baths and on covered porches, then finish the room with new baseboard.',
    includes: ['Vinyl plank flooring', 'Laminate flooring', 'Tile floors', 'Porch tile', 'Baseboard and trim'],
    photos: [
      { file: 'flooring-01', alt: 'Gray wood-look porch tile with patterned tile inlays outside a white door' },
      { file: 'flooring-02', alt: 'Covered entry with gray plank tile and patterned accents' },
      { file: 'flooring-03', alt: 'Porch tile with patterned inlays along a white board-and-batten wall' },
      { file: 'flooring-04', alt: 'Plank floor and white baseboard in a blue painted room' },
      { file: 'flooring-05', alt: 'Newly installed wood-look floor in a primed room' },
      { file: 'flooring-06', alt: 'Warm wood-look plank floor running along a white baseboard' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you take out my old floor?', a: 'Yes. Tell us what is down now when you request the estimate.' },
      { q: 'Do you do tile as well as plank?', a: 'Yes. The photos on this page show both.' },
    ],
  },
  {
    id: 'roofing',
    name: 'Roofing Services',
    title: 'Roofing Contractor in Morganton, NC | Kava Construction',
    metaDescription: 'Roof repair and replacement in Morganton, NC. Tear-off, decking, underlayment and shingles by a licensed and insured crew. Book a free estimate.',
    h1: 'Roof repair and replacement in Morganton, NC',
    intro: 'We tear off the old roof, replace bad decking, and lay new underlayment and shingles. If you have a leak or storm damage, tell us and we will look at it.',
    includes: ['Roof replacement', 'Roof repairs and leaks', 'Decking replacement', 'Underlayment and shingles', 'Storm damage'],
    photos: [
      { file: 'roofing-02', alt: 'Kava roofer kneeling on new underlayment while laying shingles' },
      { file: 'roofing-01', alt: 'View from a roof during shingle installation, with the work trailer in the driveway below' },
      { file: 'roofing-03', alt: 'Roofer walking across a roof during tear-off' },
      { file: 'roofing-04', alt: 'New decking and underlayment along the roof edge' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Do you repair roofs or only replace them?', a: 'Both. Choose Leak or repair when you fill out the request.' },
      { q: 'What if the wood under the shingles is bad?', a: 'We replace damaged decking before the new underlayment and shingles go on.' },
    ],
  },
  {
    id: 'decks',
    name: 'Decks',
    title: 'Deck Builder in Morganton, NC | Kava Construction',
    metaDescription: 'Deck builder in Morganton, NC: new pressure-treated decks, stairs, railings and repairs. Licensed and insured. Book a free estimate.',
    h1: 'Deck building in Morganton, NC',
    intro: 'We build pressure-treated decks, entry landings and stairs, and we replace or repair the ones that have worn out. Posts, framing and rails are all done by our crew.',
    includes: ['New decks', 'Deck replacement', 'Deck repairs', 'Stairs and landings', 'Railings'],
    photos: [
      { file: 'decks-01', alt: 'Finished deck with a porch swing and new rails behind a brown-sided home' },
      { file: 'decks-02', alt: 'Long pressure-treated deck with capped posts and a red chair' },
      { file: 'decks-03', alt: 'Crew finishing a deck and stairs under a blue sky' },
      { file: 'decks-04', alt: 'New deck with stairs on the side of a gray home' },
      { file: 'decks-05', alt: 'Pressure-treated deck and railing behind a gray home' },
      { file: 'decks-06', alt: 'Close view of deck stairs, posts and bolted framing' },
      { file: 'decks-07', alt: 'Deck and stairs built on post footings next to a gray home' },
      { file: 'decks-08', alt: 'Entry stairs and railing at the back door of a home' },
      { file: 'decks-09', alt: 'Long straight stair run leading up to a landing' },
      { file: 'decks-10', alt: 'Crew member framing the deck boards on a new platform outside French doors' },
      { file: 'decks-11', alt: 'Crew building a deck and cutting stringers on site' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you rebuild my old deck?', a: 'Yes. Choose Replace old deck on the request and tell us about the size.' },
      { q: 'Can you add stairs or railing to a deck I already have?', a: 'Yes. We do stairs and railing work on its own.' },
    ],
  },
  {
    id: 'porches',
    name: 'Porches, Additions & Sheds',
    title: 'Porches, Additions & Sheds in Morganton, NC | Kava',
    metaDescription: 'Covered porches, room additions and sheds in Morganton, NC, framed and finished by our own crew. Licensed and insured. Book a free estimate.',
    h1: 'Porches, additions and sheds in Morganton, NC',
    intro: 'We frame covered porches, front extensions, additions and sheds from the ground up, then finish them with tongue-and-groove ceilings, siding and roofing.',
    includes: ['Covered porches', 'Front house extensions', 'Room additions', 'Sheds', 'Tongue-and-groove porch ceilings'],
    photos: [
      { file: 'porches-01', alt: 'New gabled front porch on a brick ranch home with wide lawn' },
      { file: 'porches-02', alt: 'Covered front porch with wood posts on a brick home' },
      { file: 'porches-03', alt: 'Tongue-and-groove pine porch ceiling with a ceiling fan' },
      { file: 'porches-04', alt: 'Porch roof framing tied into a brick home' },
      { file: 'porches-05', alt: 'Rafters and decking over a new porch' },
      { file: 'porches-06', alt: 'Close view of framed porch rafters and sheathing' },
      { file: 'porches-07', alt: 'Mountain home with wood siding and a long covered porch' },
      { file: 'porches-08', alt: 'Timber porch posts along a mountain home during work' },
      { file: 'porches-09', alt: 'Finished cream shed with double doors and a dark shingle roof' },
      { file: 'porches-10', alt: 'Finished shed with double doors and windows' },
      { file: 'porches-11', alt: 'Two crew members cutting lumber while a building is framed on a slab' },
      { file: 'porches-12', alt: 'Wall framing standing on a concrete slab beside a home' },
      { file: 'porches-13', alt: 'Sheathed building with roof trusses set in place' },
      { file: 'porches-14', alt: 'Shed walls wrapped in house wrap under a finished roof' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Do you build from the ground up?', a: 'Yes. Our photos show the framing, roofing and finish work on our own projects.' },
      { q: 'Can a new porch match my house?', a: 'Tell us what you have in mind and send photos of your home with your request. We will talk it through at the estimate.' },
    ],
  },
  {
    id: 'concrete',
    name: 'Concrete & Steps',
    title: 'Concrete Contractor in Morganton, NC | Kava Construction',
    metaDescription: 'Concrete steps, patios, walkways and driveways in Morganton, NC. Forms, pour and finish by our own crew. Book a free estimate.',
    h1: 'Concrete work in Morganton, NC',
    intro: 'We build forms, pour and finish concrete. The stairs on this page started as a worn dirt slope and ended as a full flight of poured steps.',
    includes: ['Concrete steps', 'Patios', 'Walkways', 'Driveways', 'Form building'],
    photos: [
      { file: 'concrete-01', alt: 'Finished flight of poured concrete steps between timber retaining walls' },
      { file: 'concrete-02', alt: 'Wood forms set for concrete steps on the same hillside' },
      { file: 'concrete-03', alt: 'Crew member clearing the old slope before building the forms' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you replace old steps on a slope?', a: 'Yes. The stairs shown here were built on a steep slope between retaining walls.' },
      { q: 'Do you also tear out old concrete?', a: 'We offer demolition, so tell us what needs to come out when you request the estimate.' },
    ],
  },
  {
    id: 'windows',
    name: 'Window Installation',
    title: 'Window Installation in Morganton, NC | Kava Construction',
    metaDescription: 'Window installation in Morganton, NC, from one replacement to a whole house, with trim and interior repair. Book a free estimate.',
    h1: 'Window installation in Morganton, NC',
    intro: 'We replace single windows or the whole house, and we can repair the wall around them while we are there.',
    includes: ['Window replacement', 'New window openings', 'Wall repair around windows'],
    photos: [
      { file: 'windows-01', alt: 'Black-framed windows installed in a room with new wall sheathing' },
      { file: 'windows-02', alt: 'Tall black windows and a ladder in a room during work' },
      { file: 'windows-03', alt: 'Single tall black-framed window installed and ready for trim' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Can you replace just one window?', a: 'Yes. Choose One or two on the request.' },
      { q: 'Can you fix the drywall around the new window?', a: 'Yes. We do drywall work too.' },
    ],
  },
  {
    id: 'walls',
    name: 'Walls & Drywall',
    title: 'Drywall Repair in Morganton, NC | Kava Construction',
    metaDescription: 'Drywall repair and installation in Morganton, NC, from a patched hole to a full room. Book a free estimate.',
    h1: 'Walls and drywall in Morganton, NC',
    intro: 'We patch holes, hang new drywall and finish the seams so the room is ready for paint.',
    includes: ['Drywall patching', 'New drywall', 'Taping and finishing', 'Wall repair after plumbing or electrical work'],
    photos: [
      { file: 'walls-01', alt: 'New drywall with taped and mudded seams around outlets' },
      { file: 'walls-02', alt: 'Drywall seams finished in the corner of a room' },
      { file: 'walls-03', alt: 'Finished drywall seams around a new window' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Do you take small repair jobs?', a: 'Yes. Choose Patch a hole on the request.' },
      { q: 'Can you repair a wall after a leak?', a: 'Yes. Tell us what happened when you send your request.' },
    ],
  },
  {
    id: 'remodel',
    name: 'Whole-Home Remodeling',
    title: 'Home Remodeling in Morganton, NC | Kava Construction',
    metaDescription: 'Whole-home and basement remodeling in Morganton, NC. One crew for demo, framing, floors, kitchens and baths. Book a free estimate.',
    h1: 'Whole-home remodeling in Morganton, NC',
    intro: 'If your project touches several rooms, one crew can handle the demolition, framing, drywall, floors, kitchen and bath. You deal with one company from start to finish.',
    includes: ['Whole-house remodels', 'Basement remodeling', 'Demolition', 'Rental and flip updates', 'Framing and drywall'],
    photos: [
      { file: 'kitchen-02', alt: 'Remodeled open kitchen with island, pendant lights and plank floor' },
      { file: 'bathroom-04', alt: 'Remodeled bathroom with white tub surround and wood-look floor' },
      { file: 'flooring-04', alt: 'Refinished bedroom with blue walls and a new plank floor' },
      { file: 'bathroom-10', alt: 'Room stripped to the studs at the start of a remodel' },
      { file: 'kitchen-10', alt: 'Opened kitchen wall during rough-in work' },
      { file: 'walls-01', alt: 'New drywall with finished seams during a remodel' },
    ],
    faqs: [
      estimateFaq,
      { q: 'Do you work on rental properties?', a: 'Yes. Choose Rental or flip on the request.' },
      { q: 'Do you remodel basements?', a: 'Yes. Choose Basement on the request.' },
    ],
  },
];

export const services: Service[] = baseServices.map((s) => ({ ...s, ...serviceContent[s.id] }));

export const serviceById = Object.fromEntries(services.map((s) => [s.id, s]));

// Tile images and labels for the "What do you need done?" grid
export const tiles = wizardServices.map((w) => ({
  id: w.id,
  label: w.label,
  href: serviceById[w.id] ? `/services/${w.id}` : '/book',
  photo: serviceById[w.id]?.photos[0],
}));
