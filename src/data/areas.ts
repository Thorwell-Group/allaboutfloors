export interface Area {
  slug: string;          // e.g. "vancouver-wa"
  name: string;          // e.g. "Vancouver"
  state: string;         // e.g. "WA"
  stateFull: string;     // e.g. "Washington"
  displayName: string;   // e.g. "Vancouver, WA"
  county: string;
  mapEmbed: string;
  mapLink: string;
  population: string;
  description: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  zipCodes: string[];
}

export const areas: Area[] = [
  {
    slug: 'vancouver-wa',
    name: 'Vancouver',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Vancouver, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Vancouver,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Vancouver,+WA',
    population: '190,000+',
    description:
      'Vancouver, WA is the largest city in Clark County and sits just across the Columbia River from Portland, OR. As a rapidly growing urban center, Vancouver homeowners and businesses depend on All About Floors NW for premium flooring products and professional installation.',
    neighborhoods: ['Hazel Dell', 'Salmon Creek', 'Orchards', 'Felida', 'Cascade Park', 'Fisher\'s Landing', 'Camas Ridge', 'Minnehaha'],
    nearbyAreas: ['Battle Ground, WA', 'Camas, WA', 'Washougal, WA', 'Ridgefield, WA', 'Portland, OR'],
    zipCodes: ['98660', '98661', '98662', '98663', '98664', '98665', '98682', '98683', '98684', '98686', '98687'],
  },
  {
    slug: 'battle-ground-wa',
    name: 'Battle Ground',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Battle Ground, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Battle+Ground,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Battle+Ground,+WA',
    population: '22,000+',
    description:
      'Battle Ground, WA is a charming small city in northern Clark County known for its community feel and strong residential growth. Homeowners in Battle Ground trust All About Floors NW for quality flooring and expert installation just minutes away.',
    neighborhoods: ['Downtown Battle Ground', 'Yacolt', 'Heisson', 'Lucia Falls', 'Daybreak'],
    nearbyAreas: ['Vancouver, WA', 'Ridgefield, WA', 'La Center, WA', 'Brush Prairie, WA'],
    zipCodes: ['98604'],
  },
  {
    slug: 'camas-wa',
    name: 'Camas',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Camas, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Camas,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Camas,+WA',
    population: '23,000+',
    description:
      'Camas, WA is one of Clark County\'s most desirable communities, known for top-rated schools, beautiful homes, and stunning views of the Columbia River Gorge. All About Floors NW serves Camas homeowners seeking premium flooring to match their beautiful surroundings.',
    neighborhoods: ['Downtown Camas', 'Prune Hill', 'Crown Point', 'Lacamas Shores', 'Grass Valley'],
    nearbyAreas: ['Vancouver, WA', 'Washougal, WA', 'Portland, OR'],
    zipCodes: ['98607'],
  },
  {
    slug: 'washougal-wa',
    name: 'Washougal',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Washougal, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Washougal,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Washougal,+WA',
    population: '16,000+',
    description:
      'Washougal, WA is a scenic city nestled at the base of the Columbia River Gorge, offering a relaxed Pacific Northwest lifestyle with easy access to outdoor recreation. We proudly serve Washougal residents with beautiful flooring options for every home style.',
    neighborhoods: ['Downtown Washougal', 'Hathaway', 'Cape Horn', 'Steigerwald', 'Two Rivers'],
    nearbyAreas: ['Camas, WA', 'Vancouver, WA', 'Stevenson, WA', 'Portland, OR'],
    zipCodes: ['98671'],
  },
  {
    slug: 'ridgefield-wa',
    name: 'Ridgefield',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Ridgefield, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Ridgefield,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Ridgefield,+WA',
    population: '10,000+',
    description:
      'Ridgefield, WA is one of Clark County\'s fastest-growing communities, with new construction and established neighborhoods alike seeking quality flooring. All About Floors NW is the go-to flooring resource for Ridgefield homeowners and builders.',
    neighborhoods: ['South Ridgefield', 'Union Ridge', 'Crest Airpark', 'Pioneer Street District'],
    nearbyAreas: ['Battle Ground, WA', 'Vancouver, WA', 'La Center, WA', 'Woodland, WA'],
    zipCodes: ['98642'],
  },
  {
    slug: 'la-center-wa',
    name: 'La Center',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'La Center, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=La+Center,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=La+Center,+WA',
    population: '3,500+',
    description:
      'La Center, WA is a small but growing rural community in northern Clark County, known for its tight-knit feel and picturesque farm country setting. We serve La Center homeowners with the same quality and dedication we bring to every job.',
    neighborhoods: ['Downtown La Center', 'East La Center', 'Twin Bridges'],
    nearbyAreas: ['Battle Ground, WA', 'Ridgefield, WA', 'Woodland, WA', 'Amboy, WA'],
    zipCodes: ['98629'],
  },
  {
    slug: 'brush-prairie-wa',
    name: 'Brush Prairie',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Brush Prairie, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Brush+Prairie,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Brush+Prairie,+WA',
    population: '10,000+',
    description:
      'Brush Prairie, WA is an unincorporated community northeast of Vancouver known for its spacious properties, rural character, and strong community ties. Homeowners in Brush Prairie count on All About Floors NW for dependable flooring service close to home.',
    neighborhoods: ['Brush Prairie', 'Hockinson', 'Dollars Corner'],
    nearbyAreas: ['Battle Ground, WA', 'Vancouver, WA', 'Camas, WA', 'Washougal, WA'],
    zipCodes: ['98606'],
  },
  {
    slug: 'salmon-creek-wa',
    name: 'Salmon Creek',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Salmon Creek, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Salmon+Creek,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Salmon+Creek,+WA',
    population: '20,000+',
    description:
      'Salmon Creek is a vibrant unincorporated community in northern Vancouver with excellent schools, shopping, and a mix of established and new neighborhoods. We serve Salmon Creek residents from our Vancouver showroom just minutes away.',
    neighborhoods: ['Salmon Creek', 'Felida', 'Hazel Dell North', 'Lakeshore', 'Meadow Homes'],
    nearbyAreas: ['Vancouver, WA', 'Ridgefield, WA', 'Battle Ground, WA'],
    zipCodes: ['98685', '98686'],
  },
  {
    slug: 'hazel-dell-wa',
    name: 'Hazel Dell',
    state: 'WA',
    stateFull: 'Washington',
    displayName: 'Hazel Dell, WA',
    county: 'Clark County',
    mapEmbed: 'https://maps.google.com/maps?q=Hazel+Dell,+WA&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Hazel+Dell,+WA',
    population: '19,000+',
    description:
      'Hazel Dell is a thriving unincorporated urban community just north of Vancouver\'s city center. Known for its mix of residential neighborhoods and commercial corridors, Hazel Dell homeowners and businesses rely on All About Floors NW for all their flooring needs.',
    neighborhoods: ['Hazel Dell', 'Fruit Valley', 'NorthImage', 'Minnehaha'],
    nearbyAreas: ['Vancouver, WA', 'Salmon Creek, WA', 'Ridgefield, WA'],
    zipCodes: ['98665'],
  },
  {
    slug: 'portland-or',
    name: 'Portland',
    state: 'OR',
    stateFull: 'Oregon',
    displayName: 'Portland, OR',
    county: 'Multnomah County',
    mapEmbed: 'https://maps.google.com/maps?q=Portland,+OR&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Portland,+OR',
    population: '650,000+',
    description:
      'Portland, OR is a major Pacific Northwest city known for its vibrant neighborhoods, eclectic design aesthetic, and strong community values. All About Floors NW serves Portland homeowners across the river, offering easy access to our Vancouver showroom and full installation services.',
    neighborhoods: ['Pearl District', 'Alberta Arts District', 'Sellwood', 'Division', 'Concordia', 'Irvington', 'Multnomah Village'],
    nearbyAreas: ['Vancouver, WA', 'Gresham, OR', 'Beaverton, OR', 'Lake Oswego, OR'],
    zipCodes: ['97201', '97202', '97203', '97206', '97211', '97212', '97217', '97218', '97220', '97230'],
  },
  {
    slug: 'gresham-or',
    name: 'Gresham',
    state: 'OR',
    stateFull: 'Oregon',
    displayName: 'Gresham, OR',
    county: 'Multnomah County',
    mapEmbed: 'https://maps.google.com/maps?q=Gresham,+OR&output=embed&iwloc=',
    mapLink: 'https://maps.google.com/?q=Gresham,+OR',
    population: '115,000+',
    description:
      'Gresham, OR is Oregon\'s fourth-largest city, located east of Portland with a mix of established neighborhoods and newer developments. Gresham homeowners seek quality flooring to match the area\'s diverse housing stock, and All About Floors NW delivers.',
    neighborhoods: ['Downtown Gresham', 'Rockwood', 'Pleasant Valley', 'Powell Valley', 'Kelly Creek'],
    nearbyAreas: ['Portland, OR', 'Troutdale, OR', 'Fairview, OR', 'Vancouver, WA', 'Camas, WA'],
    zipCodes: ['97030', '97080'],
  },
];
