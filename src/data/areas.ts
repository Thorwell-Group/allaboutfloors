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
  // Unique, verifiable per-city local content. Every fact is sourced in a
  // code comment next to the data. `body` is rendered as a distinct
  // "local flooring context" section so each location page differs in body
  // copy even after the city name is removed. `localAngle` is a short phrase
  // woven into the meta description / intro to vary them per city.
  localContent: {
    heading: string;     // section heading for this city
    localAngle: string;  // short phrase for meta + intro variation
    body: string[];      // paragraphs of city-specific, sourced content (~120-250 words total)
  };
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
    localContent: {
      heading: 'Flooring for Vancouver’s Mix of Historic and Mid-Century Homes',
      localAngle: 'a housing stock spanning 1840s Officers Row to 1970s east-side tracts',
      body: [
        // Founding/incorporation + WWII shipyard boom: https://en.wikipedia.org/wiki/Vancouver,_Washington
        // 2020 census 190,915 residents, 81,809 housing units: https://en.wikipedia.org/wiki/Vancouver,_Washington
        'Vancouver is one of the oldest settlements in Washington, founded in 1825 and incorporated in 1857. Its housing stock is unusually varied: during World War II the population swelled from roughly 18,000 to over 80,000 within months to staff the Kaiser shipyards, leaving behind extensive mid-century neighborhoods. By the 2020 census the city counted 190,915 residents across more than 81,000 housing units, ranging from pre-war cottages near downtown to 1970s tracts in Fircrest and brand-new construction on the east side.',
        // Officers Row Historic District, 1846 Grant House, NRHP 1974: https://en.wikipedia.org/wiki/Officers_Row,_Fort_Vancouver_Barracks
        // ~42 in/yr rain, ~163 precip days (NOAA 1991-2020 normals via Visit Vancouver): https://www.visitvancouverwa.com/trip-planning/weather/
        'That range shapes our work here. The Victorian homes of the Officers Row Historic District at Fort Vancouver — listed on the National Register since 1974, with the Grant House dating to 1846 — are exactly the kind of older property where original solid hardwood can be sanded and refinished rather than replaced. Newer Vancouver homes, by contrast, often pair better with engineered hardwood or waterproof luxury vinyl plank. With Vancouver averaging about 42 inches of rain across roughly 163 days a year, moisture management and proper acclimation matter in every install, whether we are restoring a century-old floor or laying new plank in a recently built home.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Battle Ground’s Fast-Growing Subdivisions',
      localAngle: 'one of Washington’s fastest-growing cities through the 2000s',
      body: [
        // Ranked 4th in WA for population growth 2000-2005: https://en.wikipedia.org/wiki/Battle_Ground,_Washington
        'Battle Ground sits in northern Clark County along State Route 503 and has been one of the region’s growth stories. Between 2000 and 2005 it ranked fourth among all 279 incorporated communities in Washington for population growth, and new subdivisions have continued to spread north and east toward Brush Prairie and the Dollars Corner corridor ever since. The result is a city with a notably young housing stock — neighborhood after neighborhood of homes built in the last two decades, often on compact modern lots.',
        // Pacific NW wet climate, Clark County ~42 in/yr rain (NOAA via Visit Vancouver): https://www.visitvancouverwa.com/trip-planning/weather/
        'For these newer Battle Ground homes, our most popular recommendation is waterproof luxury vinyl plank, which stands up to the wet Pacific Northwest climate — Clark County averages roughly 42 inches of rain a year — while delivering the look of real wood. Engineered hardwood is another strong fit for slab-on-grade and ground-floor rooms in recent construction, since it resists the seasonal humidity swings that can cup or gap solid wood. We bring samples directly to your Battle Ground home so you can see how each option looks against your existing cabinetry and natural light before you commit.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Camas — Historic Downtown to Hilltop Estates',
      localAngle: 'a historic mill town with explosive new luxury growth on Prune Hill',
      body: [
        // Incorporated 1906; population 12,534 (2000) -> 19,355 (2010) -> 26,065 (2020): https://en.wikipedia.org/wiki/Camas,_Washington
        // Paper mill founded 1883, now Georgia-Pacific Camas Mill, 140th anniversary: https://www.kptv.com/2026/01/20/camas-paper-mill-celebrates-140-years-heartbeat-washington-city/
        'Camas grew up around its paper mill, established in 1883 and operating today as the Georgia-Pacific Camas Mill, which recently marked its 140th anniversary. That long history is visible in the bungalows around its walkable historic downtown. At the same time, Camas has been one of Clark County’s fastest-growing communities — its population jumped from 12,534 in 2000 to 26,065 by 2020 — pushing waves of new luxury construction up onto Prune Hill and the Grass Valley area.',
        // Prune Hill / Lacamas Hills new construction: https://www.portlandrealestate.com/blog/best-neighborhoods-camas/
        // Clark County ~42 in/yr rain (NOAA via Visit Vancouver): https://www.visitvancouverwa.com/trip-planning/weather/
        'This split gives Camas two very different flooring conversations. In older downtown homes, refinishing original hardwood often makes more sense than replacing it. In the newer estates on Prune Hill and Lacamas Lake — many built within the last decade — homeowners tend to choose wide-plank engineered hardwood and high-end waterproof vinyl that suit large open floor plans. Across both, the area’s roughly 42 inches of annual rain makes moisture-aware product selection and careful subfloor prep essential, and we tailor our recommendations to each home’s age and construction.',
      ],
    },
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
    localContent: {
      heading: 'Flooring at the Western Gateway to the Columbia River Gorge',
      localAngle: 'a historic river town where the Columbia River Gorge begins',
      body: [
        // Incorporated 1908; textile mill 1910 (later Pendleton); population 17,039 (2020): https://en.wikipedia.org/wiki/Washougal,_Washington
        // Gorge begins east of Washougal (city .gov): https://www.cityofwashougal.us/314/Columbia-River-Gorge
        'Washougal sits on the north bank of the Columbia River about 18 miles east of Vancouver, right where, in the City of Washougal’s own words, the Columbia River Gorge National Scenic Area begins. Incorporated in 1908, the town built its identity around a 1910 textile mill — later Pendleton Woolen Mills — and retains a genuine historic core near downtown. Around it, newer hillside developments such as Granite Highlands have added recent construction with Gorge and river views, giving Washougal a blend of older homes and modern subdivisions.',
        // Gorge-influenced wet, breezy climate; western WA abundant Pacific moisture: https://climate.uw.edu/washingtons-climate/
        'Living at the mouth of the Gorge means wind and abundant Pacific Northwest moisture, which is exactly why we steer many Washougal homeowners toward waterproof luxury vinyl plank and engineered hardwood rather than solid wood in lower-level and river-facing rooms. Older downtown homes with existing hardwood are often excellent candidates for refinishing instead of replacement. Whether you are updating a historic Washougal house or finishing a new build above the river, we bring samples to your door and match the flooring to your home’s exposure, age, and how each room is used.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Ridgefield’s New Master-Planned Neighborhoods',
      localAngle: 'one of the fastest-growing cities in Washington',
      body: [
        // Population 4,763 (2010) -> 10,319 (2020), +116.6%: https://en.wikipedia.org/wiki/Ridgefield,_Washington
        // 6th fastest-growing WA city (2022 estimate): https://www.thereflector.com/stories/state-estimates-ridgefield-is-sixth-fastest-growing-city-in-state,296689
        'Few places in Washington have grown like Ridgefield. The city more than doubled in size between 2010 and 2020 — from 4,763 to 10,319 residents, a 116.6% increase — and state estimates have since ranked it among the fastest-growing cities in the state. That growth has arrived as master-planned subdivisions: the City of Ridgefield’s own neighborhood directory catalogs more than 30 HOA communities, and notes that new subdivisions are required to have one. Neighborhoods like Pioneer Canyon were largely built between 2009 and 2017, so the vast majority of Ridgefield homes are recent construction.',
        // Ridgefield National Wildlife Refuge, est. 1965, along Columbia: https://www.fws.gov/refuge/ridgefield
        // Wet PNW climate, western WA Pacific moisture: https://climate.uw.edu/washingtons-climate/
        'New homes near the Ridgefield National Wildlife Refuge and the Columbia floodplain are ideal candidates for waterproof luxury vinyl plank and engineered hardwood — both of which handle the damp Pacific Northwest climate far better than solid wood on ground-level slabs. Because so much of Ridgefield’s housing is so new, our work here leans toward fresh installs and tasteful upgrades rather than refinishing. We bring the showroom to you, matching durable, low-maintenance flooring to the open layouts that define the city’s newer neighborhoods.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for La Center’s Riverside Homes and New Builds',
      localAngle: 'a small Lewis River town with a newer-than-it-looks housing stock',
      body: [
        // Population 3,424 (2020); growth from under 500 in 1990 to over 2,500 by 2010: https://en.wikipedia.org/wiki/La_Center,_Washington
        // On north bank of East Fork Lewis River, ~16 mi north of Vancouver: https://en.wikipedia.org/wiki/La_Center,_Washington
        'La Center is a small community of about 3,400 people on the north bank of the East Fork of the Lewis River, roughly 16 miles north of Vancouver. Though the town was founded in the 1870s, its housing is newer than that history suggests: La Center grew from under 500 residents in 1990 to over 2,500 by 2010, and the city’s own housing analysis reports that more than 40% of its housing units were built after 2000. That makes recent subdivisions, not historic stock, the heart of today’s La Center.',
        // 40.6% of housing built after 2000 (city HNAS doc): https://ci.lacenter.wa.us/wp-content/uploads/2024/09/LaCenter_HNAS_Final_toCity-1.pdf
        // Western WA abundant Pacific moisture: https://climate.uw.edu/washingtons-climate/
        'Being a river town matters for flooring. Homes near the East Fork Lewis River sit in a setting where Pacific Northwest moisture is a constant, so for ground-level and lower-level rooms we frequently recommend 100% waterproof luxury vinyl plank and engineered hardwood over solid wood. In La Center’s many post-2000 homes, those products pair naturally with open modern layouts and stand up to family life. We bring samples and measurements directly to your La Center home, with no need to drive to Vancouver to start your project.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Brush Prairie’s Rural, Larger-Lot Homes',
      localAngle: 'a rural community of large lots and custom homes near Hockinson',
      body: [
        // CDP, population 2,738 (2020), 7.8 sq mi land, ~350/sq mi: https://en.wikipedia.org/wiki/Brush_Prairie,_Washington
        // Post office since 1871, borders Hockinson: https://en.wikipedia.org/wiki/Brush_Prairie,_Washington
        'Brush Prairie is a rural community northeast of Vancouver — a census-designated place of about 2,738 residents spread across 7.8 square miles, bordering Hockinson to the east. With fewer than 350 people per square mile, it is defined by larger lots, acreage properties, and custom-built homes rather than dense subdivisions. A community has existed here since at least 1871, when the Brush Prairie post office opened, so the area mixes long-standing farmhouses with newer custom builds on roomy parcels.',
        // Western WA abundant Pacific moisture: https://climate.uw.edu/washingtons-climate/
        'Rural Brush Prairie homes come with their own flooring considerations. Properties on acreage often have shops, finished outbuildings, and bonus rooms where waterproof luxury vinyl plank shines — it shrugs off the mud, pets, and moisture that come with country living in the wet Pacific Northwest. In the main house, engineered hardwood offers the warm look of real wood with better stability for larger open spaces. Because driving to a showroom from out here can mean a real trip, we bring the full selection of samples to your Brush Prairie home and measure on-site, so your whole project can start at your kitchen table.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Salmon Creek’s Newer North-Vancouver Suburbs',
      localAngle: 'a fast-growing north-Vancouver suburb anchored by WSU Vancouver',
      body: [
        // Population 11,989 (1990) -> 21,293 (2020), +78%; downtown Vancouver 6 mi south: https://en.wikipedia.org/wiki/Salmon_Creek,_Washington
        // WSU Vancouver campus is in Salmon Creek (14204 NE Salmon Creek Ave): https://www.vancouver.wsu.edu/campus-map-directions
        // Legacy Salmon Creek Medical Center opened 2005: https://www.legacyhealth.org/doctors-and-locations/hospitals/legacy-salmon-creek-medical-center
        'Salmon Creek is a suburban community about six miles north of downtown Vancouver that has grown steadily for decades — its population climbed roughly 78%, from 11,989 in 1990 to 21,293 in 2020. It is anchored by the Washington State University Vancouver campus, which sits on Salmon Creek Avenue, and by Legacy Salmon Creek Medical Center, which opened in 2005. That combination of a university and a major hospital has driven a wave of newer subdivisions and rental housing across the area.',
        // Clark County ~42 in/yr rain (NOAA via Visit Vancouver): https://www.visitvancouverwa.com/trip-planning/weather/
        'Because so much of Salmon Creek’s housing is relatively recent, our work here is largely fresh installs in modern floor plans rather than restoration. For these homes — and for the rental and student-adjacent properties near campus — waterproof luxury vinyl plank is a favorite for its durability and easy upkeep, while engineered hardwood brings warmth to living and dining areas. With Clark County averaging about 42 inches of rain a year, we always plan for moisture, acclimating materials properly and prepping subfloors before installation in every Salmon Creek home.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Hazel Dell’s Older Mid-Century Homes',
      localAngle: 'a post-WWII Highway 99 community ripe for remodels',
      body: [
        // CDP north/west of Vancouver, population 23,569 (2020), +21.3% from 2010: https://en.wikipedia.org/wiki/Hazel_Dell,_Washington
        // One of the first suburban areas developed after WWII; agricultural until early 1970s: https://en.wikipedia.org/wiki/Hazel_Dell,_Washington
        'Hazel Dell is an older urban community of about 23,569 people just north of Vancouver’s city center, strung along Highway 99 and bisected by Interstate 5. It was one of the first areas to suburbanize after World War II — Wikipedia notes Hazel Dell and Minnehaha led that postwar expansion — and it stayed semi-agricultural, with horses and cattle visible along the highway, into the early 1970s. The result today is a dense neighborhood of mid-century homes rather than new subdivisions.',
        // Clark County ~42 in/yr rain (NOAA via Visit Vancouver): https://www.visitvancouverwa.com/trip-planning/weather/
        'That older housing stock makes Hazel Dell one of our strongest remodel and replacement markets. Mid-century homes here often have original, aging floors and dated finishes ready for an update, and many have hardwood worth refinishing rather than tearing out. Where subfloors have aged or moisture is a concern — Clark County sees roughly 42 inches of rain a year — waterproof luxury vinyl plank and laminate are budget-friendly, durable upgrades. We assess each home’s existing floors and subfloor condition during a free in-home visit, then recommend the most cost-effective path for that specific Hazel Dell house.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Portland’s Historic Craftsman and Bungalow Homes',
      localAngle: 'a city full of pre-1940 Craftsman bungalows and Foursquares',
      body: [
        // ~26.7% of Portland housing built before 1940 (real-estate blog citing Census): https://realestateagentpdx.com/portlands-housing-supply-dense-old-big/11233
        // Post-1905 World's Fair boom; Craftsman concentrations in Irvington, Ladd's Addition, etc.: https://www.brianporter.com/portland-real-estate-blog/2017/9/4/portland-architecture-the-most-common-house-styles-in-portland
        'Portland is known for one of the oldest housing stocks on the West Coast: by some estimates more than a quarter of the city’s homes were built before 1940. After the 1905 Lewis and Clark Exposition, an explosive building boom filled neighborhoods like Irvington, Ladd’s Addition, and Sunnyside with Craftsman bungalows and Old Portland Foursquares — many of which still have their original wood floors beneath later carpet and finishes.',
        // Portland avg annual precipitation 36.92 in (NOAA 1991-2020 normals, PDX): https://en.wikipedia.org/wiki/Portland,_Oregon
        'For Portland homeowners, that history makes hardwood refinishing one of the most rewarding projects we do. Sanding back and resealing original old-growth fir or oak preserves a home’s character at a fraction of replacement cost. When floors are too far gone — or in basements and additions where Portland’s roughly 37 inches of annual rain raises moisture concerns — we recommend engineered hardwood or waterproof luxury vinyl plank that mimics period-appropriate looks. Our Vancouver showroom is a short drive across the river, and we bring samples directly to your Portland home for a free, no-pressure estimate.',
      ],
    },
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
    localContent: {
      heading: 'Flooring for Gresham’s Later-20th-Century Housing',
      localAngle: 'Oregon’s fourth-largest city with a predominantly newer housing base',
      body: [
        // Gresham 4th-largest in OR, pop 114,247 (2020); settled 1851, incorporated 1905: https://en.wikipedia.org/wiki/Gresham,_Oregon
        // Median construction year 1981 (ACS via Point2Homes): https://www.point2homes.com/US/Neighborhood/OR/Gresham-Demographics.html
        'Gresham is Oregon’s fourth-largest city, with 114,247 residents at the 2020 census, sitting just east of Portland in Multnomah County. Although it was first settled in 1851 and has a historic downtown core, its housing stock is markedly newer than Portland’s — the city’s median construction year is around 1981, reflecting decades of later-20th-century suburban development across neighborhoods like Powell Valley and Pleasant Valley.',
        // Gresham avg annual precipitation 47.78 in (Wikipedia climate section): https://en.wikipedia.org/wiki/Gresham,_Oregon
        'That newer, largely owner-occupied housing base shapes our recommendations in Gresham. Homes from the 1980s onward pair well with modern materials — waterproof luxury vinyl plank for high-traffic and moisture-prone rooms, and engineered hardwood for living spaces — rather than the refinishing-heavy work common in older Portland neighborhoods. And Gresham is genuinely wet, averaging about 48 inches of rain a year, even more than Portland’s airport normals, so moisture-resistant flooring and proper subfloor prep are priorities on every job. We serve Gresham from our Vancouver showroom and bring samples to your door.',
      ],
    },
  },
];

// Unique, grounded per-city context used to differentiate location pages.
// Built from each area's real neighborhoods (above) + documented local character
// + verifiable Pacific Northwest climate guidance. No invented landmarks or stats.
export const areaLocalContext: Record<string, string> = {
  'vancouver-wa':
    "From mid-century homes in Hazel Dell and Minnehaha to newer construction in Cascade Park and Fisher's Landing, Vancouver's housing spans the full range of eras and styles. That mix means we fit everything from moisture-tolerant luxury vinyl in busy family homes to refinished original hardwood in established east-side neighborhoods.",
  'battle-ground-wa':
    "Battle Ground's strong residential growth has filled neighborhoods around Daybreak and downtown with newer homes, while properties toward Yacolt and Heisson lean rural and acreage-based. We help Battle Ground homeowners choose durable, low-maintenance floors that stand up to mudrooms, pets, and wet Pacific Northwest winters.",
  'camas-wa':
    "Camas is one of Clark County's most design-conscious communities, with upscale homes on Prune Hill and around Lacamas Lake. Camas homeowners often invest in premium hardwood and large-format tile, and our in-home design service helps match those finishes to the area's Columbia Gorge setting.",
  'washougal-wa':
    "Sitting at the mouth of the Columbia River Gorge, Washougal homes meet the region's damp, humidity-swinging climate head-on. We steer Washougal homeowners toward waterproof luxury vinyl and stable engineered hardwood that handle Gorge moisture better than solid wood.",
  'ridgefield-wa':
    "Ridgefield is one of Clark County's fastest-growing cities, with new subdivisions around Union Ridge and South Ridgefield adding homes every year. We work with both Ridgefield builders and homeowners to spec floors for new construction and to upgrade builder-grade materials.",
  'la-center-wa':
    "La Center's rural, farm-country setting means many homes sit on acreage with hard-working entryways and pets. We help La Center homeowners pick scratch- and moisture-resistant floors that hold up to country living without sacrificing style.",
  'brush-prairie-wa':
    "Brush Prairie and neighboring Hockinson are known for spacious properties and rural character northeast of Vancouver. Larger homes and busy mudrooms make durable luxury vinyl and refinished hardwood popular choices for Brush Prairie families.",
  'salmon-creek-wa':
    "Salmon Creek blends established neighborhoods with newer development around Felida and Lakeshore, just minutes from our Vancouver showroom. We outfit Salmon Creek homes with everything from cozy carpet to waterproof plank for high-traffic living areas.",
  'hazel-dell-wa':
    "Hazel Dell's mix of long-established homes and busy commercial corridors means a lot of older flooring is ready for an update. We help Hazel Dell homeowners refresh worn carpet and dated surfaces with durable, modern flooring built for daily wear.",
  'portland-or':
    "Portland's character homes, from Irvington four-squares to Sellwood bungalows, often feature original wood floors worth preserving. We help Portland-metro homeowners refinish vintage hardwood or add moisture-smart flooring suited to the city's wet winters.",
  'gresham-or':
    "Gresham's diverse housing stock, from established Powell Valley homes to newer east-county developments, calls for flooring as varied as its neighborhoods. We bring samples and expert guidance to Gresham homeowners for projects of every size and budget.",
};
