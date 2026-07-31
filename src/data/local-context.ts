/**
 * Per-(service × city) differentiation for the 63 {service}-in-{city} pages.
 *
 * Those pages measured 79% identical across cities and 88.8% across services.
 * They also compete directly with the flat service pages, which is why GSC showed
 * 10 of our own URLs on "hardwood flooring vancouver wa" (324 impressions, 0 clicks).
 *
 * Sourcing: the archetypes below are grounded in `areaLocalContext` in areas.ts,
 * which carries genuine per-city housing-stock research — mid-century Hazel Dell
 * and Minnehaha vs newer Cascade Park and Fisher's Landing in Vancouver, Irvington
 * four-squares and Sellwood bungalows in Portland, acreage toward Yacolt and
 * Heisson in Battle Ground, upscale Prune Hill in Camas. Nothing here is asserted
 * that is not in that source.
 *
 * The genuine differentiator available here is regional and verifiable: this is
 * one of the wettest metros in the country. Damp winters, long wet seasons and
 * real seasonal humidity swings are the dominant flooring consideration in Clark
 * County and Portland, and they change the right answer per material. That is
 * true, useful, and it is what these pages should be saying.
 */

export type Archetype = 'urban' | 'growth' | 'rural' | 'premium';

export interface AreaProfile {
  archetype: Archetype;
  character: string;
  jobNote: string;
}

export const AREA_PROFILE: Record<string, AreaProfile> = {
  'vancouver-wa': { archetype: 'urban', character: 'mid-century homes in Hazel Dell and Minnehaha through to newer construction in Cascade Park and Fisher\u2019s Landing', jobNote: 'The full range of eras in one city, so the right floor for an east-side original is rarely the right floor for a Fisher\u2019s Landing build.' },
  'portland-or': { archetype: 'premium', character: 'character homes from Irvington four-squares to Sellwood bungalows, many with original wood worth preserving', jobNote: 'Original floors here are frequently worth refinishing rather than replacing, and that is the first thing we check.' },
  'gresham-or': { archetype: 'urban', character: 'diverse housing from established Powell Valley homes to newer east-county developments', jobNote: 'Housing as varied as the neighborhoods, so we scale prep to the house rather than quoting a district average.' },
  'hazel-dell-wa': { archetype: 'urban', character: 'long-established homes alongside busy commercial corridors', jobNote: 'A lot of the flooring here is simply old and ready for replacement rather than damaged — worn carpet and dated surfaces more than failures.' },
  'ridgefield-wa': { archetype: 'growth', character: 'new subdivisions around Union Ridge and South Ridgefield adding homes every year', jobNote: 'We work with builders as well as homeowners here, specifying for new construction and upgrading builder-grade floors afterwards.' },
  'battle-ground-wa': { archetype: 'growth', character: 'newer neighborhoods around Daybreak and downtown, with acreage properties out toward Yacolt and Heisson', jobNote: 'Two different jobs in one city — builder-grade replacement in town, hard-wearing floors for acreage further out.' },
  'salmon-creek-wa': { archetype: 'growth', character: 'established neighborhoods blended with newer development around Felida and Lakeshore', jobNote: 'Minutes from our Vancouver showroom, and an even enough mix that we confirm the subfloor rather than assuming from the street.' },
  'la-center-wa': { archetype: 'rural', character: 'a rural, farm-country setting where many homes sit on acreage', jobNote: 'Hard-working entryways and pets are the norm out here, and the floor has to hold up to country living without looking utilitarian.' },
  'brush-prairie-wa': { archetype: 'rural', character: 'spacious rural properties across Brush Prairie and neighboring Hockinson', jobNote: 'Larger homes with busy mudrooms — the mudroom specification matters as much as the living areas here.' },
  'camas-wa': { archetype: 'premium', character: 'one of Clark County\u2019s most design-conscious communities, with upscale homes on Prune Hill and around Lacamas Lake', jobNote: 'Homeowners here often invest in premium hardwood and large-format tile, and the in-home design service is where those finishes get matched.' },
  'washougal-wa': { archetype: 'rural', character: 'homes at the mouth of the Columbia River Gorge meeting the region\u2019s damp, humidity-swinging climate head-on', jobNote: 'Gorge moisture is a genuine factor here, which is why we steer toward waterproof vinyl and stable engineered wood rather than anything that moves.' },
};

type Block = { heading: string; body: string[]; checklist: string[] };

const PNW_DAMP =
  'This is one of the wettest metros in the country, and that is the single biggest factor in how a floor performs here. Long wet seasons mean water comes in on shoes for months at a time, and the humidity swing between a soaked November and a dry August is what moves wood and opens seams. We plan for that rather than treating it as bad luck.';

const wrap = (heading: string, first: string, third: string, checklist: string[]): Block => ({
  heading,
  body: [first, PNW_DAMP, third],
  checklist,
});

export const SERVICE_BY_ARCHETYPE: Record<string, Record<Archetype, Block>> = {
  'hardwood-flooring': {
    urban: wrap('Hardwood in an urban Pacific Northwest home', 'Hardwood is still the floor buyers ask about first, and in an established urban home it usually suits the architecture better than anything else. The question worth asking before you spend is whether there is already wood under the current covering.', 'Entryways do the damage in this climate. A hardwood floor that runs straight to an exterior door without a proper transition or a mat well will show it within a couple of wet seasons.', ['Existing wood checked for before replacing', 'Entry transitions specified for wet-season traffic', 'Moisture read at the subfloor before ordering', 'Species and finish chosen for real humidity swing']),
    growth: wrap('Hardwood in a newer or growing neighborhood', 'Most homes in a growth area are carrying builder-grade flooring chosen to hit a price point. Real hardwood on the main level is the single change that most alters how a newer house reads, and it holds its value at resale.', 'Before ordering we confirm whether your main floor sits on a wood subfloor or a slab — solid hardwood needs wood, and we will tell you that at the measure rather than after.', ['Straight upgrade from builder-grade covering', 'Subfloor type confirmed before quoting', 'Whole-floor continuity rather than room-by-room', 'Finish specified for family traffic']),
    rural: wrap('Hardwood on a rural property', 'Acreage living is harder on a floor than square footage suggests. Grit tracked in from a gravel drive acts like sandpaper, and that wears a finish far faster than foot traffic alone.', 'For rural homes we generally steer toward harder species and more durable finishes, and we treat the entry as a separate specification from the rest of the floor.', ['Harder species recommended for grit and mud', 'Entry areas specified separately', 'Durable finish over fashionable sheen', 'Mud-room and transition detailing considered']),
    premium: wrap('Hardwood specified to the house', 'In these homes plank width, grade and sheen carry the room more than the species name does. Wide-plank white oak in a low sheen reads completely differently from narrow strip in semi-gloss.', 'Large windows and Gorge-facing light are a real factor here — strong direct sun fades stain unevenly, and it usually lands exactly where the view is. We factor that into color choice rather than discovering it a year later.', ['Width, grade and sheen specified deliberately', 'Fade behaviour considered for strong direct light', 'Samples laid in the actual room', 'Whole-floor layout planned as one run']),
  },
  'hardwood-refinishing': {
    urban: wrap('Refinishing in an established urban home', 'A lot of homes here have hardwood under carpet that the owners have never seen. Lifting a corner before you price a replacement is worth doing — refinishing routinely costs about half what replacing does.', 'What we look for is thickness above the tongue, pet stains that have reached the wood, and cupping that points at a moisture problem worth solving before any finish goes down.', ['Carpet lifted to assess the wood first', 'Refinish-vs-replace costed honestly', 'Moisture issues solved before finishing', 'Most homes done in 3-4 days']),
    growth: wrap('Refinishing or recoating a newer floor', 'Newer homes usually have prefinished hardwood with a factory coating, and that changes the right answer — often a screen and recoat restores the surface without a full sand, for a fraction of the cost and disruption.', 'A full refinish only makes sense when wear has gone through the finish into the wood, or when you want a different color. We tell you which you are actually dealing with.', ['Screen-and-recoat considered before a full sand', 'Wear depth assessed — finish or wood?', 'Bevel detail preserved on prefinished boards', 'Much less disruption than a full refinish']),
    rural: wrap('Refinishing a floor that takes rural traffic', 'Floors on acreage properties wear in patterns — heavy at the back door, light everywhere else. That uneven wear is exactly what refinishing fixes well, and it is why these floors often look far worse than they actually are.', 'We specify a harder finish on the re-coat than a suburban home would need, because the grit is not going away.', ['Uneven wear evened out across the floor', 'Harder finish specified for grit', 'Back-door and mud-room areas prioritised', 'Assessment of what caused the wear pattern']),
    premium: wrap('Refinishing to a standard that holds up', 'These floors get judged in long raking light across open spans, which is the least forgiving condition there is. Drum marks and edger swirl that would pass elsewhere are obvious here, so the sanding sequence goes further than a standard job needs.', 'Stain matching is its own piece of work, and we prepare samples on your own floor rather than showing a manufacturer chip — the same stain reads differently on your wood in your light.', ['Sanding carried beyond standard grit progression', 'Stain sampled on your own boards', 'Sheen specified deliberately', 'Finished to hold up under raking light']),
  },
  'luxury-vinyl-plank': {
    urban: wrap('LVP in an urban home', 'LVP is the most practical answer for the rooms that take water in this climate — entries, kitchens, laundries and lower levels. It is genuinely waterproof, not merely resistant.', 'Wear layer is the spec that matters and the one most quotes omit. For a household with pets, 12 mil is the sensible minimum and 20 mil is genuinely durable.', ['Wear layer specified for real traffic', 'Waterproof through entries and wet rooms', 'Subfloor levelled before laying', 'Realistic wood looks judged in your own light']),
    growth: wrap('LVP in a newer home', 'This is the most common upgrade we do in newer homes. Builder-grade LVP is thin with a shallow wear layer; stepping up a grade changes how it sounds underfoot and how long it lasts.', 'Newer subfloors are usually flat and dry, so these installs move quickly — often finished inside a week.', ['Upgrade from thin builder-grade LVP', 'Wear layer specified properly', 'Typically installed inside a week', 'Waterproof through kitchen, bath and laundry']),
    rural: wrap('LVP on a rural property', 'For acreage homes LVP is frequently the most sensible floor in the house. Mud, grit and wet boots are a daily reality, and a waterproof plank with a thick wear layer handles that better than wood will.', 'We specify the heaviest wear layer that suits the budget here, because this is the environment where the difference actually shows.', ['Heaviest practical wear layer specified', 'Fully waterproof for wet boots and mud', 'Entry and mud-room areas prioritised', 'Subfloor levelled before laying']),
    premium: wrap('Premium LVP where it belongs', 'Premium LVP is a genuinely different product from the builder-grade version — deeper embossing, longer and wider planks, real bevel detail and a wear layer that survives a household.', 'In a higher-specification home it belongs in the working rooms: mud-rooms, laundries, lower levels. We will tell you honestly where it is the smart call and where wood is worth the extra.', ['Designer LVP lines, not builder-grade', 'Specified for working rooms', 'Honest advice on where wood is worth more', 'Waterproof where performance matters']),
  },
  'laminate-flooring': {
    urban: wrap('Laminate in an urban home', 'Modern waterproof laminate is a different product from the boards that swelled at the seams a decade ago — treated cores and sealed edges, with genuine waterproof warranties.', 'It usually beats LVP on scratch resistance and costs slightly less, while LVP beats it on water performance. We will say which way we would go in your rooms.', ['Genuinely waterproof core, not just a coating', 'Honest laminate-vs-LVP comparison', 'Substrate flattened before floating the floor', 'Strong value against engineered wood']),
    growth: wrap('Laminate in a newer home', 'Laminate is the value option that no longer feels like one, and in a newer home with a flat, dry subfloor it usually goes down in a couple of days.', 'Scratch resistance is where laminate genuinely leads, which makes it a sensible answer for households with large dogs.', ['Two-day install in most newer homes', 'Leading scratch resistance for pets', 'Waterproof core options', 'Flat subfloor confirmed before laying']),
    rural: wrap('Laminate on a rural property', 'Laminate handles grit better than most surfaces, which matters on a property with a gravel drive. Its wear layer is genuinely hard.', 'Where water is the bigger concern than scratching — a mud-room, a back entry — we would point you at LVP instead, and we will say so.', ['Hard wear layer for tracked-in grit', 'Honest steer to LVP where water dominates', 'Substrate flattened first', 'Entry areas specified separately']),
    premium: wrap('Laminate in a high-specification home', 'In these homes laminate belongs in the working rooms rather than the headline spaces, and the premium end of the category has genuinely good texture and bevel detail now.', 'We will tell you plainly where laminate is the smart call and where it will read as the compromise it is.', ['Specified for working rooms', 'Premium textures and bevel detail', 'Pairs sensibly with wood elsewhere', 'Straight advice on where it does not belong']),
  },
  'tile-flooring': {
    urban: wrap('Tile in an urban home', 'Tile is the most water-tolerant surface available, which makes it the default for bathrooms and a strong option for entries in a climate this wet.', 'Substrate preparation decides whether tile lasts. Movement in the subfloor is what cracks grout lines, and it gets addressed before anything is set.', ['Substrate deflection assessed before setting', 'Waterproofing detailed properly in wet areas', 'Grout and sealing specified for real use', 'Layout set out to avoid awkward cuts']),
    growth: wrap('Tile in a newer home', 'Newer homes usually give a flat, sound substrate, so tile work moves predictably. The decisions are format, layout and grout colour rather than remediation.', 'Large-format tile needs a flatter substrate than smaller sizes, and we check that rather than assuming a new build is flat enough.', ['Flatness verified for large-format tile', 'Layout planned before setting', 'Waterproofing to current standards', 'Grout colour chosen with the tile, not after']),
    rural: wrap('Tile on a rural property', 'For a mud-room or back entry on acreage, tile is hard to beat — it does not care about water, grit or boots.', 'Slip resistance genuinely matters at a wet entry, and it is worth choosing a finish rated for it rather than the smoothest tile on the board.', ['Slip resistance specified at wet entries', 'Waterproof detailing at thresholds', 'Durable grout suited to grit', 'Mud-room layout planned for real use']),
    premium: wrap('Tile at specification level', 'At this level tile is a design decision: format, layout, grout width and colour all change how a room reads as much as the tile itself does.', 'Large-format and book-matched work demands a very flat substrate and careful setting-out, and that preparation is most of the job.', ['Large-format and book-matched work', 'Substrate flattened to tight tolerance', 'Layout and grout specified deliberately', 'Waterproofing detailed to a high standard']),
  },
  'commercial-flooring': {
    urban: wrap('Commercial flooring in an urban property', 'Commercial work is specified by use and cleaning regime rather than appearance. Traffic levels and the chemicals your cleaners actually run both drive the product, and a finish that photographs well but cannot survive nightly cleaning is the wrong finish.', 'In this climate the entry zone does most of the damage — five months of wet shoes and grit concentrated in the first fifteen feet. We specify that zone separately from the rest of the floor rather than running one product wall to wall.', ['Specified by traffic and cleaning regime', 'Entry zones specified separately', 'Phased around your trading hours', 'Commercial-grade wear layers']),
    growth: wrap('Commercial flooring in newer premises', 'Newer commercial space usually gives a clean, flat slab, so the conversation moves straight to specification rather than remediation.', 'Slab moisture still gets confirmed before anything goes down. It is the most common cause of commercial floor failure and the cheapest thing to check.', ['Slab moisture confirmed first', 'Traffic-rated specification', 'Fast install on a sound substrate', 'Scheduled around operating hours']),
    rural: wrap('Commercial flooring for a rural or agricultural property', 'Shop floors, equipment areas and rural commercial space take a different kind of abuse — machinery, chemicals, dropped tools and constant in-out traffic.', 'That calls for a heavier build than a retail or office specification, and we will say plainly where a lighter system will not hold up rather than quoting the cheaper option.', ['Heavier build for equipment and shop use', 'Chemical and impact resistance specified', 'Entry and wash-down areas prioritised', 'Scheduled around your season']),
    premium: wrap('Commercial flooring where design leads', 'In a design-led commercial space the floor has to perform and look considered at the same time, which is a specification conversation rather than a product pick.', 'We will flag honestly where an aesthetic choice will not survive the footfall or the cleaning chemicals — before it goes down rather than after it fails.', ['Premium commercial lines available', 'Honest flags where a look will not last', 'Performance matched to actual use', 'Phased to keep the space presentable']),
  },
  countertops: {
    urban: wrap('Countertops in an urban home', 'Countertops are the surface people touch every day, and the decision is mostly about how you actually cook rather than what looks best in a showroom. Quartz is the low-maintenance answer; natural stone rewards a bit of care with something no engineered surface replicates.', 'Templating matters more than the material choice. Older urban homes rarely have square walls, and a template that assumes they do produces gaps at the backsplash that no amount of caulk hides.', ['Templated to real, out-of-square walls', 'Quartz vs natural stone advised on how you cook', 'Seam placement planned before fabrication', 'Sink and cooktop cutouts fitted to your appliances']),
    growth: wrap('Countertops in a newer home', 'Builder-grade laminate or entry-level quartz is usually the first thing homeowners replace in a newer house, and it is the change that most alters how a kitchen reads.', 'Newer cabinetry is generally square and level, so templating and install are predictable — most kitchens template one week and install the next.', ['Straight upgrade from builder-grade tops', 'Predictable template-to-install timeline', 'Edge profile and thickness specified', 'Sink and faucet coordination handled']),
    rural: wrap('Countertops on a rural property', 'Rural kitchens work harder — more cooking from scratch, more preserving, more people through the room. Durability and heat tolerance matter more here than the current fashionable finish.', 'We will tell you honestly which materials stain and which shrug it off, because a surface that needs babying is the wrong surface for a working farmhouse kitchen.', ['Durability prioritised over fashion', 'Heat and stain behaviour explained honestly', 'Templated to older, out-of-square cabinetry', 'Hard-wearing edge profiles']),
    premium: wrap('Countertops at specification level', 'At this level the slab itself is the decision. Veining runs differently across every slab, and where a seam lands or how a waterfall edge is book-matched changes the whole room.', 'We select from the actual slab rather than a sample chip, and plan seam placement around the veining instead of around the easiest cut.', ['Slab selected in person, not from a chip', 'Seams planned around the veining', 'Book-matched and waterfall edges', 'Full-height splash and mitred detailing']),
  },
  'carpet-flooring': {
    urban: wrap('Carpet in an urban home', 'Carpet still wins in bedrooms and on stairs, and in an older urban home it does real acoustic work between floors.', 'The pad matters more than most quotes admit — it carries the traffic, and cheap pad is why carpet flattens in the walkways within a couple of years.', ['Pad density specified openly', 'Bedrooms, stairs and sound control', 'Stain-resistant fibres for family traffic', 'Most homes completed in a day']),
    growth: wrap('Carpet in a newer home', 'Builder-grade carpet is usually the first thing to wear out in a newer home, and it is frequently the pad underneath that failed rather than the carpet itself.', 'We specify pad properly. It adds little to the total and it is the difference between carpet that still feels new in year three and carpet that has flattened.', ['Replacing worn builder-grade carpet and pad', 'Pad specified, not defaulted', 'Stain-resistant fibres', 'Usually completed in a day']),
    rural: wrap('Carpet on a rural property', 'On acreage, carpet belongs upstairs and in bedrooms rather than anywhere near a back door. We will say so rather than fitting carpet where it will not survive.', 'Where it does go down, stain resistance and a denser construction are worth the extra in a house that sees outdoor traffic.', ['Honest advice on where carpet belongs', 'Denser construction for real traffic', 'Strong stain resistance specified', 'Hard surface recommended at entries']),
    premium: wrap('Carpet at specification level', 'In these homes carpet is a texture decision — wool and wool blends, patterned loops, and runners cut and bound to a specific staircase.', 'A stair runner on a good staircase is hand-work, and a badly fitted one is visible from the moment you walk in.', ['Wool and wool-blend options', 'Runners cut and bound to the staircase', 'Premium lines brought to the home', 'Texture judged in the actual room']),
  },
};

const SERVICE_FAQ: Record<string, { q: string; a: () => string }[]> = {
  'hardwood-flooring': [
    { q: 'Does all this rain rule out hardwood?', a: () => 'No, but it does change how it should be installed. The issues we see in this climate come from water at entries and from seasonal humidity swings, not from the rain itself. Proper acclimation, correct expansion gaps and sensible entry detailing handle both. Where a room genuinely sits wet, we will recommend something else instead of selling you a floor that will fail.' },
    { q: 'Should I choose solid or engineered here?', a: () => 'It depends on what is under the room and how much humidity swing it sees. Over a wood subfloor on a main level, solid is fine. Over concrete, or in a basement, engineered is the correct product. Engineered also copes better with big seasonal swings, which is a genuine consideration in this region.' },
  ],
  'hardwood-refinishing': [
    { q: 'How do I know my floor can be sanded again?', a: () => 'It comes down to how much wood sits above the tongue. Solid hardwood typically has several sands in it across its life; engineered may have one or none depending on the wear layer. We measure at a vent or doorway edge before quoting and tell you honestly what is left.' },
    { q: 'How long before we can walk on it?', a: () => 'Water-based finishes are usually walkable the same day and fully cured in about a week; oil-based takes longer to cure but some people prefer the warmth of the colour. We will lay out both with the trade-offs rather than defaulting to whichever suits our schedule.' },
  ],
  'luxury-vinyl-plank': [
    { q: 'What wear layer do I need?', a: () => 'For a family home with pets, 12 mil is the sensible minimum and 20 mil is genuinely durable. Builder-grade LVP is often 6-8 mil, which is why it looks tired after a few years. It is the one spec worth paying up for and we will show you the grades side by side.' },
    { q: 'Is LVP genuinely waterproof?', a: () => 'The plank is — a rigid core will not swell. What is not automatically waterproof is the seam detail and the subfloor beneath it if water sits long enough to find a way through. In wet rooms we detail the perimeter properly rather than relying on the plank alone.' },
  ],
  'laminate-flooring': [
    { q: 'Is this the laminate that swells at the seams?', a: () => 'Not any more. Older laminate used a fibreboard core that swelled once water reached a seam. Current waterproof products use treated or composite cores with sealed edges and carry genuine waterproof warranties. It is a different product wearing an old name.' },
    { q: 'Laminate or LVP for my house?', a: () => 'Laminate generally wins on scratch resistance and costs a little less; LVP wins on water and feels softer underfoot. Large dog, laminate usually. Busy bathroom, LVP usually. We will tell you which way we would go in your specific rooms.' },
  ],
  'tile-flooring': [
    { q: 'Will my grout crack?', a: () => 'Only if the substrate moves. Cracked grout is almost always a deflection problem rather than a grout problem, which is why we assess the subfloor before setting anything. Where movement is likely we address it first or specify a system that accommodates it.' },
    { q: 'Do you handle the waterproofing in a shower or wet area?', a: () => 'Yes, and it is the part that matters most. Waterproofing detail at the substrate is what determines whether a wet area lasts, and it is invisible once the tile is on — which is exactly why it is worth doing to standard rather than to budget.' },
  ],
  'commercial-flooring': [
    { q: 'Can you work outside our business hours?', a: () => 'Yes — most commercial work we do is phased around trading hours, evenings or weekends so the space keeps operating. We agree the phasing before starting so you know which areas are out of use and when.' },
    { q: 'How do you specify for our traffic?', a: () => 'By use and cleaning regime, not appearance. Footfall and the chemicals your cleaners actually use both drive the product. If a finish you like will not survive that, we will say so before it goes down.' },
  ],
  countertops: [
    { q: 'Quartz or natural stone?', a: () => 'Quartz is engineered, non-porous and effectively maintenance-free, which suits most households. Natural stone — granite, marble, quartzite — has depth and variation no engineered surface reproduces, but it wants sealing and a bit of care. We ask how you actually cook before recommending either.' },
    { q: 'Where will the seams be?', a: () => 'We plan seam placement before fabrication and show you on the template rather than letting it fall wherever the cut is easiest. On a patterned or heavily veined slab that decision changes how the whole run reads.' },
  ],
  'carpet-flooring': [
    { q: 'What pad goes underneath?', a: () => 'We specify pad density and thickness openly on the quote rather than leaving it as an unnamed line. It matters more than the carpet in most cases — the pad carries the traffic, and thin pad is why carpet flattens in walkways within a couple of years.' },
    { q: 'Can you carpet stairs with an open side or winders?', a: () => 'Yes, and it is where a carpet installer is genuinely judged. Winders, bullnose treads and open sides are hand-work — cut, wrapped and stitched on site rather than folded over.' },
  ],
};

export function localFaqs(serviceKey: string, serviceName: string, areaSlug: string, areaName: string) {
  const p = AREA_PROFILE[areaSlug];
  const lower = serviceName.toLowerCase();
  const climate: Record<Archetype, string> = {
    urban: `${areaName} is ${p?.character}, and like the rest of this metro it sees long wet seasons. That means water arriving on shoes for months at a time, so entry detailing and moisture readings matter more here than they would in a dry climate.`,
    growth: `${areaName} is ${p?.character}. Newer subfloors are generally flat and dry so the work moves quickly, but we still confirm moisture rather than assuming — in this climate that check is worth the ten minutes.`,
    rural: `${areaName} is ${p?.character}. Rural properties bring grit and mud indoors continuously through the wet season, which changes what a floor has to survive and where the durable specification belongs.`,
    premium: `${areaName} is ${p?.character}. Homes here get scrutinised closely and often have large windows, so both the finish quality and how a colour behaves under strong direct light are worth deciding deliberately.`,
  };
  return [
    { q: `What should I know about ${lower} in ${areaName}?`, a: climate[p?.archetype ?? 'urban'] },
    ...(SERVICE_FAQ[serviceKey] ?? []).map((f) => ({ q: f.q, a: f.a() })),
    { q: `Do you serve all of ${areaName}?`, a: `Yes — ${areaName} and the surrounding Clark County and Portland metro area. ${p?.jobNote} Free in-home estimate, and the same crew on every job.` },
  ];
}

export function pageVariant(serviceKey: string, areaSlug: string) {
  let h = 0;
  const key = `${serviceKey}:${areaSlug}`;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return { pick: (n: number) => h % n, flip: (bit = 0) => ((h >> bit) & 1) === 1 };
}

export const INTRO_VARIANTS = [
  (s: string, a: string) => `${a} homeowners choose All About Floors NW for ${s} because we look at the actual house — and in this climate, what happens at the entries and under the floor decides more than the product name does.`,
  (s: string, a: string) => `We have been installing ${s} across ${a} long enough to know how these floors behave through a full wet season. That is most of what you are paying for.`,
  (s: string, a: string) => `Our approach to ${s} in ${a} is straightforward: measure properly, price it in writing, and tell you honestly if the floor you want is wrong for the room you want it in.`,
  (s: string, a: string) => `For ${s} in ${a}, we would rather steer you to the right product than sell you the more expensive one. It is why most of our work comes by referral.`,
];
