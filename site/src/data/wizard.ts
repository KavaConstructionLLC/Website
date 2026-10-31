export interface WizardService {
  id: string;
  label: string;
  question: string;
  options: string[];
}

export const wizardServices: WizardService[] = [
  { id: 'kitchen', label: 'Kitchen', question: 'What is changing in the kitchen?', options: ['Full remodel', 'Cabinets', 'Countertops', 'Backsplash', 'Floors'] },
  { id: 'bathroom', label: 'Bathroom', question: 'What is changing in the bathroom?', options: ['Full remodel', 'Shower', 'Tub', 'Vanity', 'Tile'] },
  { id: 'flooring', label: 'Flooring', question: 'What kind of floor?', options: ['Vinyl plank', 'Tile', 'Laminate', 'Not sure yet'] },
  { id: 'roofing', label: 'Roofing', question: 'What does the roof need?', options: ['Leak or repair', 'Full replacement', 'Storm damage', 'Not sure yet'] },
  { id: 'decks', label: 'Decks', question: 'What do you need?', options: ['New deck', 'Replace old deck', 'Repair', 'Stairs or railing'] },
  { id: 'porches', label: 'Porches, Additions & Sheds', question: 'What are you building?', options: ['Covered porch', 'Room addition', 'Shed', 'Something else'] },
  { id: 'concrete', label: 'Concrete & Steps', question: 'What concrete work?', options: ['Steps', 'Driveway', 'Patio', 'Walkway'] },
  { id: 'windows', label: 'Windows', question: 'How many windows?', options: ['One or two', 'Several', 'Whole house'] },
  { id: 'walls', label: 'Walls & Drywall', question: 'What do the walls need?', options: ['Patch a hole', 'New drywall', 'A full room'] },
  { id: 'remodel', label: 'Whole-Home Remodel', question: 'How much of the home?', options: ['Whole house', 'A few rooms', 'Basement', 'Rental or flip'] },
  { id: 'other', label: 'Something Else', question: 'What can we help with?', options: ['Fence', 'Basement', 'Cabinets', 'Pressure washing', 'Demolition', 'Something else'] },
];
