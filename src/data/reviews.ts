export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

// Real, verbatim 5-star Google reviews for All About Floors NW.
// Reviewer names and review text are exactly as left on Google — do not edit.
// City is generalized to the metro (Vancouver, WA). No dates/counts are fabricated.
export const reviews: Review[] = [
  {
    name: 'jodi Cousins',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'Donovan is amazing to work with. Floor is done on your time schedule and a good price. Floors look beautiful when finished. I am a Property Manager, and this is something I really look for. Thank you All About Floors!',
    service: 'Property Management Flooring',
  },
  {
    name: 'Christy Merrill',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'Kurt and his team were great. Wonderful customer service, everything was completed in the time frame they said it would be. Gave great advice for what we were looking for. I highly recommend them for all your flooring needs. Thank you for helping Clover Podiatry\'s office look amazing!',
    service: 'Commercial Flooring',
  },
  {
    name: 'Chris Hendrickson',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'Great price and prompt installation, as scheduled. Entire house in one day and nothing left behind. First class.',
    service: 'Flooring Installation',
  },
  {
    name: 'Suzi Wong Swint',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'The folks in the store were very knowledgeable and helpful - but also allowed me to shop at my own pace without hovering. The installer was fabulous. My carpet has an obvious pattern and the installer matched the pattern PERFECTLY.',
    service: 'Carpet Flooring',
  },
  {
    name: 'Michael White',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'It was a wonderful experience from the show room when we were looking at the different options to the installation. All the staff and the installers were highly professional and attentive to the details throughout the entire process. I would highly recommend them for all your flooring needs.',
    service: 'Flooring Installation',
  },
  {
    name: 'Megan Summers',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'We are really happy with the floors that were installed by All About Floors NW. We walked in with specific ideas and they were able to come up with a reasonably priced option. They were prompt in their service and the men that came to do the floors were very fast and professional. We would definitely recommend this company.',
    service: 'Flooring Installation',
  },
  {
    name: 'Dave Pope',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'Best flooring experience ever! The installers were above top notch! We will definitely do business again!',
    service: 'Flooring Installation',
  },
  {
    name: 'Bruce Moore',
    location: 'Vancouver, WA',
    rating: 5,
    text: 'Highly recommend this company! They did an excellent job on our bathroom floors, and the pricing was very reasonable.',
    service: 'Tile Flooring',
  },
];
