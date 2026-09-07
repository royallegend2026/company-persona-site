import productPortacabins from "@/assets/product-portacabins.jpg";
import productFencing from "@/assets/product-fencing.jpg";
import productParking from "@/assets/product-parking.jpg";
import productTents from "@/assets/product-tents.jpg";
import productContainers from "@/assets/product-containers.jpg";
import productSolar from "@/assets/product-solar.jpg";
import productPremium from "@/assets/product-premium.jpg";
import productSpecialty from "@/assets/product-specialty.jpg";
import productWarehouse from "@/assets/product-warehouse.jpg";
import productCamps from "@/assets/product-camps.jpg";

export const PHONE = "+971 56 881 4433";
export const PHONE_TEL = "+971568814433";
export const WHATSAPP = "https://wa.me/971568814433";
export const EMAIL = "royallgdmetal@gmail.com";
export const ADDRESS = "Al Bataeh, Sharjah, United Arab Emirates";

export const sectors = [
  {
    id: "S-01",
    name: "Construction & Infrastructure",
    desc: "Site offices, worker accommodation, security facilities, storage and project support infrastructure.",
    detail:
      "Contractors mobilising a new site need a working compound before the first foundation is poured. We supply the full set — offices, meeting rooms, stores, ablution blocks, canteens, fencing and gates — sequenced so the compound is live in days, not weeks.",
    points: [
      "Site offices and meeting rooms",
      "Labour accommodation and welfare units",
      "Hoarding, fencing and gatehouses",
      "Material stores and secure yards",
    ],
  },
  {
    id: "S-02",
    name: "Government & Public Sector",
    desc: "Temporary and permanent modular facilities, offices, clinics and public utilities.",
    detail:
      "Public projects demand documentation, safety compliance and dependable programme dates. We work to specification, provide drawings for approval and deliver facilities built for long service life.",
    points: [
      "Administrative and service offices",
      "Clinics and inspection facilities",
      "Public utility and amenity buildings",
      "Security posts and control rooms",
    ],
  },
  {
    id: "S-03",
    name: "Hospitality, Farms & Resorts",
    desc: "Farmhouses, resort cottages, majlis, staff accommodation and custom modular structures.",
    detail:
      "For farms and resorts the building is part of the guest experience. We deliver premium-finish modular units — insulated, air-conditioned and finished to the level of a permanent build.",
    points: [
      "Farmhouses and desert cottages",
      "Majlis and reception buildings",
      "Staff accommodation and kitchens",
      "Shaded seating and event structures",
    ],
  },
  {
    id: "S-04",
    name: "Oil & Gas and Industrial",
    desc: "Modular offices, accommodation, security facilities, utility buildings and containers.",
    detail:
      "Industrial sites need robust, hard-wearing structures that survive heat, dust and constant use. Our steel frames, protective coatings and heavy-duty fit-outs are specified with that in mind.",
    points: [
      "Site and shift offices",
      "Containerised stores and workshops",
      "Guard posts and access control",
      "Diesel tanks and utility structures",
    ],
  },
  {
    id: "S-05",
    name: "Real Estate & Development",
    desc: "Sales offices, site facilities, accommodation, security booths and support buildings.",
    detail:
      "A sales pavilion is a shopfront. We build presentable, well-finished units that carry a developer's brand while the project is under construction, then relocate or remove them at handover.",
    points: [
      "Sales and marketing pavilions",
      "Show units and mock-up rooms",
      "Site management offices",
      "Perimeter fencing and signage frames",
    ],
  },
  {
    id: "S-06",
    name: "Commercial & Industrial",
    desc: "Offices, workshops, storage facilities, utility buildings, shelters and custom solutions.",
    detail:
      "Growing businesses often need extra covered space faster than a conventional build allows. Modular extensions, mezzanines, canopies and warehouses give them that space at a predictable cost.",
    points: [
      "Workshops and light industrial units",
      "Warehouses and covered storage",
      "Car parking and loading canopies",
      "Custom steel fabrication",
    ],
  },
];

export const products = [
  {
    id: "RL-01",
    slug: "portacabins",
    name: "Portacabins & Site Offices",
    spec: "Rapid deployment",
    desc: "Site offices, labour and staff accommodation, security cabins, ablution units, kitchens and welfare facilities.",
    img: productPortacabins,
    alt: "Two-storey modular portacabin site office with dark green trim on a UAE construction site",
    features: [
      "Single units through to multi-unit complexes",
      "Insulated sandwich panel walls and roofing",
      "Air conditioning, electrical and plumbing fitted",
      "Relocatable — designed to be moved and reused",
    ],
  },
  {
    id: "RL-02",
    slug: "fencing",
    name: "Fencing & Site Security",
    spec: "Temporary & permanent",
    desc: "Chain link, welded mesh, panel hoarding and perimeter fencing with pedestrian and vehicle gates.",
    img: productFencing,
    alt: "Galvanized chain link perimeter fencing around a desert construction site",
    features: [
      "Chain link, welded mesh and solid hoarding",
      "Sliding, swing and pedestrian gates",
      "Galvanized and powder-coated finishes",
      "Branded hoarding panels on request",
    ],
  },
  {
    id: "RL-03",
    slug: "parking-shades",
    name: "Car Parking & Shade Structures",
    spec: "Custom spans",
    desc: "Car parking shades, vehicle shelters, walkway shades and custom structural shade systems.",
    img: productParking,
    alt: "Row of dark green steel car parking shade structures at a UAE commercial plaza",
    features: [
      "Cantilever, single and double-sided layouts",
      "PVDF fabric and steel sheet roofing options",
      "Engineered for UAE wind loading",
      "Walkway, entrance and poolside shades",
    ],
  },
  {
    id: "RL-04",
    slug: "tents",
    name: "Tents & Temporary Structures",
    spec: "Site · storage · event",
    desc: "Storage tents, site tents, PVC tents, event tents and customized temporary tent structures.",
    img: productTents,
    alt: "White PVC event and storage tent in a desert compound at dusk",
    features: [
      "Clear-span aluminium and steel frames",
      "Fire-retardant PVC fabric",
      "Flooring, lighting and cooling packages",
      "Short-term hire or outright purchase",
    ],
  },
  {
    id: "RL-05",
    slug: "containers",
    name: "Containers & Containerized Units",
    spec: "20ft / 40ft",
    desc: "Office, storage, kitchen and bespoke containerized units — modified, insulated and finished.",
    img: productContainers,
    alt: "Dark green converted shipping container office unit in a container yard",
    features: [
      "New and one-trip containers modified in-house",
      "Doors, windows, insulation and cladding",
      "Office, store, kitchen and ablution conversions",
      "Stackable multi-container arrangements",
    ],
  },
  {
    id: "RL-06",
    slug: "solar-lighting",
    name: "Solar, Lighting & Infrastructure",
    spec: "Off-grid ready",
    desc: "Solar street lighting, site poles, security and surveillance posts and yard infrastructure.",
    img: productSolar,
    alt: "Solar-powered street lights on steel poles glowing at a site at dusk",
    features: [
      "All-in-one and split solar street lights",
      "Site lighting masts and yard poles",
      "CCTV and surveillance mounting posts",
      "No trenching or grid connection required",
    ],
  },
  {
    id: "RL-07",
    slug: "premium-facilities",
    name: "Premium Facilities",
    spec: "Full fit-out",
    desc: "Permanent public utility buildings, reception buildings, majlis and premium-finish modular spaces.",
    img: productPremium,
    alt: "Premium modular facility with glass facade and dark green steel cladding",
    features: [
      "Glazed facades and architectural cladding",
      "Full interior fit-out and joinery",
      "Climate control and lighting design",
      "Built to permanent-building standards",
    ],
  },
  {
    id: "RL-08",
    slug: "specialty",
    name: "Specialty Products",
    spec: "Bespoke",
    desc: "Flag poles, diesel tanks, structural and steel frames, interlock tiles and custom metal fabrication.",
    img: productSpecialty,
    alt: "Custom steel staircase and frames being fabricated on a workshop floor",
    features: [
      "Flag poles and signage frames",
      "Diesel and water storage tanks",
      "Structural steel frames and staircases",
      "Interlock tiles and site paving",
    ],
  },
  {
    id: "RL-09",
    slug: "modular-facilities",
    name: "Specialized Modular Facilities",
    spec: "Project-specific",
    desc: "Control rooms, depot facilities, reception buildings and other bespoke engineered modular solutions.",
    img: productWarehouse,
    alt: "Modular steel warehouse with roll-up doors and dark green trim in the desert",
    features: [
      "Control and switch rooms",
      "Depot, workshop and warehouse buildings",
      "Clean, dust-sealed interiors",
      "Designed around the client's equipment",
    ],
  },
  {
    id: "RL-10",
    slug: "permanent",
    name: "Permanent Installations",
    spec: "G+1 & turnkey",
    desc: "Permanent buildings with prefabrication — G+1 buildings, mosques and multi-storey modular camps.",
    img: productCamps,
    alt: "Two-storey modular accommodation camp with external stairs on a UAE site",
    features: [
      "Ground and G+1 modular buildings",
      "Multi-block labour camps",
      "Mosques and community buildings",
      "Turnkey handover including MEP",
    ],
  },
];

export const processSteps = [
  {
    id: "P-01",
    name: "Requirement & Consultation",
    desc: "Understanding project scope, site conditions and functional requirements.",
    detail:
      "We start with a conversation and, where useful, a site visit. Access, ground conditions, power, water, headroom for craneage and the programme date all shape what we recommend.",
  },
  {
    id: "P-02",
    name: "Design & Engineering",
    desc: "Layouts, structural design and shop drawings tailored to the site.",
    detail:
      "Our team prepares layouts, elevations and structural details, sized for UAE wind and thermal loading, and issues shop drawings for your approval before anything is cut.",
  },
  {
    id: "P-03",
    name: "Quotation & Approval",
    desc: "Transparent pricing and client sign-off before production begins.",
    detail:
      "You receive an itemised quotation covering materials, fabrication, transport and installation. No production starts until the drawings and price are formally signed off.",
  },
  {
    id: "P-04",
    name: "Manufacturing",
    desc: "Fabrication under controlled conditions at our Sharjah facility.",
    detail:
      "Frames, panels and fit-out are produced in our Al Bataeh facility under supervision, with checks at frame, cladding and finishing stages so problems are caught in the workshop.",
  },
  {
    id: "P-05",
    name: "Delivery & Installation",
    desc: "Coordinated logistics, crane-set installation and MEP tie-in.",
    detail:
      "We arrange transport, permits and lifting equipment, set the units on your prepared bases and complete electrical and plumbing connections on site.",
  },
  {
    id: "P-06",
    name: "Handover & After-Sales",
    desc: "Formal handover with ongoing support as required.",
    detail:
      "A joint walk-through closes out any snags. After handover we remain available for modifications, relocations, additional units and maintenance support.",
  },
];

export const whyUs = [
  "End-to-end capability — concept, design, manufacturing, transport, installation and after-sales.",
  "Practical, cost-conscious engineering that balances quality, functionality and budget.",
  "Speed of installation with engineering integrity and premium finishing options.",
  "Chamber of Commerce member — structured, transparent and accountable delivery.",
];

export const values = [
  {
    name: "Quality",
    desc: "Materials, welds and finishes checked at each stage of fabrication.",
  },
  {
    name: "Integrity",
    desc: "Clear pricing, honest advice and commitments we intend to keep.",
  },
  {
    name: "Safety",
    desc: "Safe practice in the workshop, in transit and on the client's site.",
  },
  {
    name: "Reliability",
    desc: "Realistic programme dates and consistent communication against them.",
  },
  {
    name: "Innovation",
    desc: "Better details, better materials and smarter modular arrangements.",
  },
  {
    name: "Customer Focus",
    desc: "Solutions shaped around the project, not around our standard catalogue.",
  },
];

export const faqs = [
  {
    q: "How quickly can a site office be delivered?",
    a: "Standard portacabin units can typically be delivered and installed within a short lead time once drawings are approved. Bespoke or multi-unit complexes take longer, and we confirm a realistic date with the quotation.",
  },
  {
    q: "Do you install, or do we arrange that?",
    a: "We install. Transport, permits, craneage, setting on base and MEP connection are all part of our scope unless you prefer to handle them yourself.",
  },
  {
    q: "Can units be relocated later?",
    a: "Yes. Prefabricated units are designed to be dismantled, transported and reinstalled on a new site — one of the main reasons clients choose modular over conventional construction.",
  },
  {
    q: "Do you work outside Sharjah?",
    a: "Yes. We manufacture in Al Bataeh, Sharjah and deliver across the United Arab Emirates.",
  },
  {
    q: "Can you build to our own drawings?",
    a: "Absolutely. Send drawings or a written brief and we will detail, price and fabricate to your specification.",
  },
];
