export interface Service {
  slug: string;
  name: string;
  shortName: string;
  urlPath: string;
  localSlug: string; // used in location-service URLs: e.g. "carpet-flooring-in-..."
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  icon: string;
  features: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'carpet-flooring',
    name: 'Carpet Flooring',
    shortName: 'Carpet',
    urlPath: '/carpet-flooring/',
    localSlug: 'carpet-flooring',
    tagline: 'Soft, Durable Carpet for Every Room',
    description:
      'From plush bedroom carpet to durable berber for high-traffic areas, All About Floors NW carries hundreds of carpet styles, colors, and textures from top brands like Mohawk, Shaw, and Dream Weaver.',
    heroImage: '/images/carpet-flooring-vancouver-wa.webp',
    heroImageAlt: 'Beautiful carpet flooring installation in a Vancouver WA living room',
    icon: '🏠',
    features: [
      'Hundreds of styles, textures & colors',
      'Plush, Berber, Frieze, Patterned & more',
      'Stain-resistant & pet-friendly options',
      'Professional measurement & installation',
      'Free in-home estimates',
    ],
    benefits: [
      'Warmth and comfort underfoot',
      'Sound insulation for quieter rooms',
      'Slip-resistant, safer for families',
      'Budget-friendly flooring option',
      'Available in eco-friendly materials',
    ],
    faq: [
      {
        q: 'How long does carpet installation take?',
        a: 'Most residential carpet installations are completed in a single day. Larger homes may take 1–2 days depending on square footage and room configuration.',
      },
      {
        q: 'Do you move furniture during carpet installation?',
        a: 'Yes, our installation crew will move standard furniture at no extra charge. We ask that you remove fragile items, electronics, and valuables beforehand.',
      },
      {
        q: 'What carpet brands do you carry?',
        a: 'We carry Mohawk, Shaw, Dream Weaver, Stanton, Aladdin, Godfrey Hirst, and Anderson Tuftex, all available for viewing in our Vancouver showroom.',
      },
      {
        q: 'Do you offer pet-friendly carpet options?',
        a: 'Absolutely. We stock several lines of pet-resistant, stain-protected carpet including Mohawk SmartStrand and Shaw\'s LifeGuard waterproof backing systems.',
      },
      {
        q: 'Is carpet a good choice for Pacific Northwest homes?',
        a: 'Yes, properly installed carpet with moisture-resistant padding is a great choice. We recommend options with antimicrobial properties for the Pacific Northwest climate.',
      },
    ],
  },
  {
    slug: 'hardwood-flooring',
    name: 'Hardwood Flooring',
    shortName: 'Hardwood',
    urlPath: '/hardwood-flooring/',
    localSlug: 'hardwood-flooring',
    tagline: 'Timeless Hardwood That Lasts a Lifetime',
    description:
      'Solid and engineered hardwood flooring adds enduring elegance and value to any home. Our Vancouver showroom features hundreds of hardwood options in every species, stain, and finish, from rustic oak to refined walnut.',
    heroImage: '/images/hardwood-flooring-vancouver-wa.webp',
    heroImageAlt: 'Premium hardwood flooring installed in a Vancouver WA home',
    icon: '🪵',
    features: [
      'Solid & engineered hardwood options',
      'Dozens of species: oak, maple, hickory, walnut & more',
      'Custom stain matching available',
      'Nail-down, glue-down & floating installs',
      'Can be refinished multiple times',
    ],
    benefits: [
      'Adds lasting resale value to your home',
      'Easy to clean and maintain',
      'Allergen-free compared to carpet',
      'Refinishable, looks new again for decades',
      'Timeless style that never goes out of fashion',
    ],
    faq: [
      {
        q: 'What is the difference between solid and engineered hardwood?',
        a: 'Solid hardwood is milled from a single piece of wood and can be refinished 3–5 times. Engineered hardwood has a real wood veneer over a stable plywood core, it handles humidity better and works over concrete subfloors.',
      },
      {
        q: 'Can hardwood be installed below grade or over radiant heat?',
        a: 'Engineered hardwood is ideal for below-grade spaces and radiant heat systems. We will recommend the right product and installation method for your specific situation.',
      },
      {
        q: 'How long does hardwood installation take?',
        a: 'A typical room takes 1–2 days. Acclimation of the wood before installation is important in the Pacific Northwest and we factor that into our timeline.',
      },
      {
        q: 'Do you offer custom hardwood staining?',
        a: 'Yes, we can custom match stain colors to your existing woodwork, cabinets, or furniture. Our experienced installers provide on-site stain samples before committing.',
      },
      {
        q: 'How do I maintain hardwood floors in a rainy climate like Vancouver, WA?',
        a: 'Use a hardwood-specific cleaner, avoid excess moisture, and use area rugs near entrances. Engineered hardwood is especially well-suited to the Pacific Northwest humidity.',
      },
    ],
  },
  {
    slug: 'luxury-vinyl-plank',
    name: 'Luxury Vinyl Plank (LVP)',
    shortName: 'Luxury Vinyl',
    urlPath: '/luxury-vinyl-plank/',
    localSlug: 'luxury-vinyl-flooring',
    tagline: '100% Waterproof Beauty for Every Room',
    description:
      'Luxury Vinyl Plank (LVP) is the fastest-growing flooring category, and for good reason. It\'s 100% waterproof, incredibly durable, and looks stunning. Perfect for kitchens, bathrooms, basements, and high-traffic areas throughout your Vancouver home.',
    heroImage: '/images/LVPKitchen.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in a modern Vancouver WA kitchen',
    icon: '💧',
    features: [
      '100% waterproof, ideal for kitchens & bathrooms',
      'Realistic wood and stone looks',
      'Scratch & dent resistant',
      'Easy floating installation',
      'Comfortable underfoot with attached underlayment',
    ],
    benefits: [
      'Stands up to kids, pets, and heavy foot traffic',
      'No warping, swelling, or buckling from moisture',
      'Lower cost than hardwood with similar aesthetics',
      'DIY-friendly floating installation',
      'Easy to clean and maintain',
    ],
    faq: [
      {
        q: 'What is LVP flooring?',
        a: 'Luxury Vinyl Plank (LVP) is a multi-layer synthetic flooring with a realistic wood or stone print layer, a durable wear layer, and a waterproof core. It looks like hardwood but handles moisture like no natural floor can.',
      },
      {
        q: 'Is LVP good for homes with dogs or kids?',
        a: 'LVP is one of the best flooring options for pets and children. It resists scratches, dents, and moisture, and cleans up easily. We carry commercial-grade wear layer options for the most demanding households.',
      },
      {
        q: 'Can LVP be installed over existing floors?',
        a: 'In many cases, yes. LVP can float over existing tile, hardwood, or concrete provided the subfloor is level. We assess your subfloor condition as part of every free estimate.',
      },
      {
        q: 'What brands of LVP do you carry?',
        a: 'We carry COREtec, Mohawk, Shaw, Quick Step, DuChateau, and Hallmark, including rigid core and WPC options for the best performance.',
      },
      {
        q: 'How does LVP hold up in the Pacific Northwest climate?',
        a: 'Exceptionally well. The 100% waterproof core means humidity swings and occasional moisture from Pacific Northwest rain won\'t cause damage, making it our most popular recommendation for Vancouver homeowners.',
      },
    ],
  },
  {
    slug: 'laminate-flooring',
    name: 'Laminate Flooring',
    shortName: 'Laminate',
    urlPath: '/laminate-flooring/',
    localSlug: 'laminate-flooring',
    tagline: 'Durable, Affordable, Beautiful Laminate',
    description:
      'Modern laminate flooring offers the authentic look of hardwood or tile at a fraction of the cost. Highly scratch-resistant and easy to maintain, laminate is an excellent choice for families, rentals, and budget-conscious renovation projects.',
    heroImage: '/images/laminate-flooring-vancouver-wa.webp',
    heroImageAlt: 'Laminate flooring installed in a Vancouver WA dining room',
    icon: '✨',
    features: [
      'Authentic wood & stone appearance',
      'Scratch and abrasion resistant',
      'Easy click-lock floating installation',
      'AC3–AC5 wear layer ratings available',
      'Wide range of widths and lengths',
    ],
    benefits: [
      'Most affordable hardwood-look option',
      'Excellent for rentals and flip properties',
      'Highly scratch resistant, great for active families',
      'Easy DIY installation with click-lock planks',
      'No sanding or refinishing needed',
    ],
    faq: [
      {
        q: 'How durable is laminate compared to hardwood?',
        a: 'Laminate is actually more scratch-resistant than most hardwood species due to its melamine wear layer. However, it cannot be refinished, so deep damage requires plank replacement.',
      },
      {
        q: 'Is laminate waterproof?',
        a: 'Standard laminate is water-resistant, not waterproof. We carry waterproof laminate lines for kitchens and bathrooms. Ask our team about the right grade for your space.',
      },
      {
        q: 'What thickness of laminate should I choose?',
        a: 'For residential use, we recommend 8mm–12mm thick laminate. Thicker planks feel more solid underfoot and hide minor subfloor imperfections better.',
      },
      {
        q: 'Can laminate go in a basement?',
        a: 'Yes, provided the basement is moisture-controlled. We recommend using a vapor barrier underlayment and selecting a waterproof laminate product for basements.',
      },
      {
        q: 'What is the lifespan of laminate flooring?',
        a: 'Quality laminate typically lasts 15–25 years with proper care. Commercial-grade laminate can last even longer in high-traffic areas.',
      },
    ],
  },
  {
    slug: 'tile-flooring',
    name: 'Tile Flooring',
    shortName: 'Tile',
    urlPath: '/tile-flooring/',
    localSlug: 'tile-flooring',
    tagline: 'Beautiful, Long-Lasting Tile for Any Space',
    description:
      'Porcelain, ceramic, glass, and natural stone tile offer unmatched durability and design versatility. From elegant bathroom floors to bold kitchen backsplashes, All About Floors NW carries thousands of tile options and our expert tile setters deliver flawless results.',
    heroImage: '/images/tile-flooring-vancouver-wa.webp',
    heroImageAlt: 'Professional tile flooring installation in a Vancouver WA bathroom',
    icon: '🏛️',
    features: [
      'Porcelain, ceramic, glass & natural stone',
      'Floor tile, wall tile & backsplash options',
      'Custom tile patterns and layouts',
      'Expert grouting and waterproofing',
      'Countertop tile installation available',
    ],
    benefits: [
      'Virtually maintenance-free when sealed',
      'Perfect for bathrooms, kitchens, and entryways',
      'Extremely durable and long-lasting',
      'Adds significant home value',
      'Hygienic and allergen-free surface',
    ],
    faq: [
      {
        q: 'What is the difference between porcelain and ceramic tile?',
        a: 'Porcelain is denser, harder, and less porous than ceramic, making it better for wet areas and high-traffic floors. Ceramic is a great budget option for walls and low-traffic floors.',
      },
      {
        q: 'Do you install heated tile floors?',
        a: 'Yes, we work with in-floor radiant heat systems and can install electric heat mats beneath your tile for warm, comfortable floors in bathrooms and kitchens.',
      },
      {
        q: 'How long does tile installation take?',
        a: 'A typical bathroom floor takes 1–2 days for installation plus cure time. Larger projects like a full kitchen tile or large-format tile work may take longer.',
      },
      {
        q: 'What grout options do you offer?',
        a: 'We offer sanded, unsanded, and epoxy grout options. We recommend epoxy grout for kitchen floors and wet areas for superior stain resistance.',
      },
      {
        q: 'Can you match existing tile for a repair or addition?',
        a: 'We do our best to source matching tile. If an exact match is unavailable, we offer creative solutions like accent borders or complementary blends.',
      },
    ],
  },
  {
    slug: 'vinyl-flooring',
    name: 'Vinyl Flooring',
    shortName: 'Vinyl',
    urlPath: '/vinyl-flooring/',
    localSlug: 'vinyl-flooring',
    tagline: 'Practical, Affordable Vinyl for Every Budget',
    description:
      'Sheet vinyl, vinyl tile, and vinyl plank flooring offer exceptional value and practicality. All About Floors NW carries a wide selection of vinyl options for laundry rooms, utility spaces, kitchens, and anywhere you need durable, easy-clean flooring at an affordable price.',
    heroImage: '/images/vinyl-flooring-vancouver-wa.webp',
    heroImageAlt: 'Vinyl sheet flooring installed in a Vancouver WA kitchen',
    icon: '🔷',
    features: [
      'Sheet vinyl, vinyl tile & plank options',
      'Fully waterproof construction',
      'Cushion-backed comfort underfoot',
      'Wide array of patterns and colors',
      'Commercial and residential grades',
    ],
    benefits: [
      'Most budget-friendly waterproof option',
      'Seamless sheet vinyl for large wet areas',
      'Extremely easy to clean and maintain',
      'Comfortable and quiet underfoot',
      'Great for rental properties and investment homes',
    ],
    faq: [
      {
        q: 'What is the difference between sheet vinyl and LVP?',
        a: 'Sheet vinyl comes in large rolls and is ideal for seamless, budget waterproofing. LVP uses floating planks with more realistic visuals and is easier to replace individual pieces if damaged.',
      },
      {
        q: 'How long does vinyl flooring last?',
        a: 'Quality sheet vinyl typically lasts 10–20 years. LVP with a thick wear layer can last 20–30 years with proper care.',
      },
      {
        q: 'Can vinyl flooring be installed over old flooring?',
        a: 'In many cases, yes. Sheet vinyl can be installed over smooth, clean existing flooring. We assess the subfloor condition during your free estimate.',
      },
      {
        q: 'Is vinyl flooring safe for kids and pets?',
        a: 'Absolutely. All the vinyl products we carry are FloorScore certified, meaning they meet strict indoor air quality standards for low VOC emissions.',
      },
      {
        q: 'Do you offer commercial-grade vinyl?',
        a: 'Yes, we carry commercial vinyl options with heavy-duty wear layers ideal for restaurants, retail spaces, offices, and other high-traffic commercial environments.',
      },
    ],
  },
];

export const installationServices = [
  {
    slug: 'flooring-installation',
    name: 'Flooring Installation',
    urlPath: '/flooring-installation/',
    tagline: 'Expert Installation for Every Floor Type',
    description: 'Our certified installers handle carpet, hardwood, LVP, laminate, tile, and vinyl with precision and care. Every installation comes backed by our satisfaction guarantee.',
    heroImage: '/images/flooring-installation-vancouver-wa.webp',
    heroImageAlt: 'Professional flooring installation in progress in a Vancouver WA home',
  },
  {
    slug: 'hardwood-refinishing',
    name: 'Hardwood Refinishing',
    urlPath: '/hardwood-refinishing/',
    tagline: 'Restore Your Hardwood Floors to Like-New Condition',
    description: 'Don\'t replace your hardwood floors, refinish them! Our professional sanding and refinishing service removes scratches, stains, and wear, revealing the beautiful wood underneath at a fraction of replacement cost.',
    heroImage: '/images/hardwood-refinishing-vancouver-wa.webp',
    heroImageAlt: 'Hardwood floor refinishing service in Vancouver WA',
  },
  {
    slug: 'commercial-flooring',
    name: 'Commercial Flooring',
    urlPath: '/commercial-flooring/',
    tagline: 'Professional Flooring Solutions for Your Business',
    description: 'From retail showrooms and offices to restaurants and healthcare facilities, All About Floors NW delivers commercial-grade flooring solutions with minimal disruption to your operations.',
    heroImage: '/images/commercial-flooring-vancouver-wa.webp',
    heroImageAlt: 'Commercial flooring installation in a Vancouver WA office building',
  },
  {
    slug: 'countertops',
    name: 'Countertop Installation',
    urlPath: '/countertops/',
    tagline: 'Beautiful Countertops for Kitchen & Bath',
    description: 'Complete your kitchen or bathroom renovation with professionally installed countertops. All About Floors NW installs tile, quartz, and stone countertops with the same care and craftsmanship we bring to every floor.',
    heroImage: '/images/countertop-installation-vancouver-wa.webp',
    heroImageAlt: 'Beautiful countertop installation in a Vancouver WA kitchen',
  },
];

export const localServices = [
  { slug: 'carpet-flooring', name: 'Carpet Flooring', mainSlug: 'carpet-flooring' },
  { slug: 'hardwood-flooring', name: 'Hardwood Flooring', mainSlug: 'hardwood-flooring' },
  { slug: 'hardwood-refinishing-flooring', name: 'Hardwood Refinishing', mainSlug: 'hardwood-refinishing' },
  { slug: 'luxury-vinyl-flooring', name: 'Luxury Vinyl Flooring', mainSlug: 'luxury-vinyl-plank' },
  { slug: 'laminate-flooring', name: 'Laminate Flooring', mainSlug: 'laminate-flooring' },
  { slug: 'tile-flooring', name: 'Tile Flooring', mainSlug: 'tile-flooring' },
];
