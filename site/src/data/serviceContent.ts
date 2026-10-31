export interface ServiceContent {
  answer: string;
  bestFor: string[];
  costIntro: string;
  costFactors: string[];
  related: string[];
}

// Answer-first copy for each service page. No prices or results are stated
// here because none have been supplied by the owner.
export const serviceContent: Record<string, ServiceContent> = {
  kitchen: {
    answer: 'Kava Construction remodels kitchens in Morganton, NC, from a new backsplash to a full gut job. Our crew handles cabinets, countertops, tile, flooring and sink installation, so you are not coordinating separate trades. Book a free estimate and we will look at the room and give you a price.',
    bestFor: [
      'Homeowners who want new cabinets, counters and floors in one project',
      'Older kitchens with worn cabinets or a layout that no longer works',
      'Anyone updating one piece, such as a backsplash or countertop',
      'Rental and flip kitchens that need to be ready for the next owner',
    ],
    costIntro: 'Kitchen cost depends on how much changes. Keeping the layout and swapping finishes costs less than moving plumbing or taking walls down to the studs. We give you a price after seeing the room.',
    costFactors: ['Size of the kitchen', 'Cabinet style and how many you need', 'Countertop material', 'Whether plumbing or electrical moves', 'Whether the floor is replaced too'],
    related: ['flooring', 'bathroom', 'remodel'],
  },
  bathroom: {
    answer: 'Kava Construction remodels bathrooms in Morganton, NC, including showers, tubs, tile, vanities and full rebuilds. When we open a wall, we fix what we find behind it, including framing and water lines, before anything new goes up. Book a free estimate to get a price for your bathroom.',
    bestFor: [
      'Homeowners replacing an old tub or tub surround',
      'Anyone switching from a tub to a walk-in shower',
      'Bathrooms with soft spots, leaks or failing tile',
      'Rental bathrooms that need a clean, durable update',
    ],
    costIntro: 'Bathroom cost comes down to size, finishes and what is behind the walls. A new surround costs less than a custom tiled shower, and repairs to framing or plumbing add to the job. We price it after seeing the room.',
    costFactors: ['Tile shower or ready-made surround', 'Size of the bathroom', 'Vanity and fixture choices', 'Plumbing changes', 'Repairs behind the walls or under the floor'],
    related: ['flooring', 'kitchen', 'remodel'],
  },
  flooring: {
    answer: 'Kava Construction installs vinyl plank, laminate and tile flooring in Morganton, NC. We work in kitchens, bedrooms, bathrooms and on covered porches, and we finish each room with new baseboard. Book a free estimate and we will measure the space and give you a price.',
    bestFor: [
      'Rooms with worn carpet or dated flooring',
      'Kitchens and baths that need a water-resistant floor',
      'Covered porches and entries that call for tile',
      'Whole-house flooring before a move or a sale',
    ],
    costIntro: 'Flooring is priced by the size of the area, the material, and the prep work. Removing old flooring or leveling a subfloor adds to the job, and patterned tile takes longer to lay than plank. We measure first, then give you a price.',
    costFactors: ['Square footage', 'Plank, laminate or tile', 'Removing the old floor', 'Subfloor repair or leveling', 'New baseboard and trim'],
    related: ['kitchen', 'bathroom', 'porches'],
  },
  roofing: {
    answer: 'Kava Construction repairs and replaces roofs in Morganton, NC. On a replacement we tear off the old roof, replace bad decking, and lay new underlayment and shingles. If you have a leak or storm damage, book a free estimate and we will look at it and tell you what it needs.',
    bestFor: [
      'Homeowners with a leak or a stain on the ceiling',
      'Roofs with missing, curling or worn shingles',
      'Homes with storm damage',
      'Anyone preparing a home for sale',
    ],
    costIntro: 'Roof cost depends on the size and pitch of the roof, how many layers come off, and how much decking is damaged. Decking damage often stays hidden until the tear-off, so we tell you what we find. A small repair costs far less than a replacement.',
    costFactors: ['Roof size', 'Pitch and access', 'Layers to tear off', 'Decking that needs replacing', 'Repair or full replacement'],
    related: ['porches', 'windows', 'remodel'],
  },
  decks: {
    answer: 'Kava Construction builds, replaces and repairs pressure-treated decks in Morganton, NC. Our crew digs the footings, sets the posts, frames the deck, and builds the stairs and railings. Book a free estimate and we will look at the site and give you a price.',
    bestFor: [
      'Homes with no outdoor space off the back door',
      'Old decks with soft boards or loose railings',
      'Back doors and side doors that need safe stairs and a landing',
      'Sloped yards that need a raised deck on posts',
    ],
    costIntro: 'Deck cost is set by size, height and stairs. A tall deck on a sloped lot needs longer posts and more bracing than a low one, and every extra stair run adds time. We look at the site, then give you a price.',
    costFactors: ['Deck size', 'Height off the ground', 'Stairs and landings', 'Railing length', 'Removing an old deck'],
    related: ['porches', 'concrete', 'roofing'],
  },
  porches: {
    answer: 'Kava Construction builds covered porches, front house extensions, room additions and sheds in Morganton, NC. We frame the structure, put the roof on, and finish it with siding or a tongue-and-groove ceiling. Book a free estimate and we will talk through your plan and give you a price.',
    bestFor: [
      'Homes that need a covered front or back porch',
      'Families who need more room without moving',
      'Anyone who wants a large storage shed built on site',
      'Plain brick ranch homes that could use a gabled entry',
    ],
    costIntro: 'Porch, addition and shed cost depends on size, foundation, roof tie-in and finish level. An addition with plumbing and electrical costs more than an open porch. We review your plan on site and give you a price.',
    costFactors: ['Size of the build', 'Foundation or slab', 'How the roof ties into the house', 'Ceiling, siding and trim finishes', 'Plumbing or electrical needs'],
    related: ['roofing', 'decks', 'concrete'],
  },
  concrete: {
    answer: 'Kava Construction builds concrete steps, patios, walkways and driveways in Morganton, NC. We clear the site, build the forms, and pour and finish the concrete ourselves, including on steep slopes. Book a free estimate and we will look at the site and give you a price.',
    bestFor: [
      'Worn, cracked or unsafe outdoor steps',
      'Hillside paths that get slick in the rain',
      'Homes that need a patio or walkway',
      'Driveway repair or replacement',
    ],
    costIntro: 'Concrete cost depends on the area, thickness, access and how much prep the site needs. Steps on a slope take more forming than a flat slab, and old concrete has to be removed first. We see the site, then give you a price.',
    costFactors: ['Size and thickness', 'Site access', 'Slope and forming', 'Removing old concrete', 'Finish'],
    related: ['decks', 'porches', 'remodel'],
  },
  windows: {
    answer: 'Kava Construction installs windows in Morganton, NC, from a single replacement to a whole house. We can also repair the wall around each window while we are there, so you are not hiring a second crew for drywall. Book a free estimate to get a price.',
    bestFor: [
      'Drafty or foggy windows',
      'Windows that stick or no longer lock',
      'Remodels that add or resize a window',
      'Homes where the wall around a window also needs repair',
    ],
    costIntro: 'Window cost depends on how many you replace, the size and style, and the condition of the opening. Rot in the frame or sill adds repair work. We look at each window, then give you a price.',
    costFactors: ['Number of windows', 'Size and style', 'Window product chosen', 'Rot or damage in the opening', 'Interior wall repair'],
    related: ['walls', 'remodel', 'roofing'],
  },
  walls: {
    answer: 'Kava Construction repairs and installs drywall in Morganton, NC. We patch holes, hang new sheets, and tape and finish the seams so the room is ready for paint. We also repair walls opened for plumbing or electrical work. Book a free estimate to get a price.',
    bestFor: [
      'Holes, dents and cracks in a wall',
      'Walls opened up for plumbing or electrical work',
      'Water-damaged drywall after a leak',
      'New rooms, additions and finished basements',
    ],
    costIntro: 'Drywall cost depends on the size of the area, how many seams need finishing, and any damage behind the wall. A small patch is a quick job, while a full room takes several coats and drying time. We look at it, then give you a price.',
    costFactors: ['Size of the repair', 'Patch or new sheets', 'Ceiling or wall height', 'Damage behind the wall', 'Number of rooms'],
    related: ['windows', 'remodel', 'bathroom'],
  },
  remodel: {
    answer: 'Kava Construction handles whole-home and basement remodels in Morganton, NC. One crew takes the project from demolition and framing through drywall, floors, kitchen and bath, so you deal with one company. Book a free estimate and we will walk the home with you and give you a price.',
    bestFor: [
      'Homeowners updating an older house room by room',
      'Basements that could become usable living space',
      'Rental and flip properties',
      'Projects that would otherwise need several contractors',
    ],
    costIntro: 'Whole-home cost depends on how many rooms change and how far each one goes. Cosmetic updates cost less than moving walls or plumbing, and an older home can hide repairs. We walk the house with you, then give you a price.',
    costFactors: ['Number of rooms', 'Cosmetic updates or structural changes', 'Kitchen and bath scope', 'Plumbing and electrical work', 'Condition of the home'],
    related: ['kitchen', 'bathroom', 'flooring'],
  },
};
