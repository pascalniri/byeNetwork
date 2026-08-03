export type Chapter = {
  id: string;
  college: string;
  chapterName: string;
  city: string;
  state: string;
  yearLabel: string;
  currentPresident: string;
  foundingPresident: string;
  quote: string;
  /** [longitude, latitude], as used by react-simple-maps' <Marker coordinates>. */
  coordinates: [number, number];
};

export const chapters: Chapter[] = [
  {
    id: "morehouse-college",
    college: "Morehouse College",
    chapterName: "BYEN House",
    city: "Atlanta",
    state: "Georgia",
    yearLabel: "Established 2025",
    currentPresident: "Ethan Griffin",
    foundingPresident: "Miles Darby",
    quote: "Where Black leadership continues—rooted in empowerment, driven by impact, and united through collaboration.",
    coordinates: [-84.388, 33.749],
  },
  {
    id: "university-of-georgia",
    college: "University of Georgia",
    chapterName: "BYEN UGA",
    city: "Athens",
    state: "Georgia",
    yearLabel: "Established 2025",
    currentPresident: "Zion Wright",
    foundingPresident: "Kiersten Johnson",
    quote: "Uplifting students at the University of Georgia—rooted in excellence and driven by purpose.",
    coordinates: [-83.3576, 33.9519],
  },
  {
    id: "alabama-am-university",
    college: "Alabama A&M University",
    chapterName: "BYEN on the Hill",
    city: "Huntsville",
    state: "Alabama",
    yearLabel: "Established 2026",
    currentPresident: "Matthew Brown",
    foundingPresident: "Matthew Brown",
    quote: "Where voices are heard, leadership is fostered, and legacies are born.",
    coordinates: [-86.5861, 34.7304],
  },
  {
    id: "savannah-state-university",
    college: "Savannah State University",
    chapterName: "BYEN at Savannah State University",
    city: "Savannah",
    state: "Georgia",
    yearLabel: "Established 2026",
    currentPresident: "Cayden Rodger",
    foundingPresident: "Cayden Rodger",
    quote: "Where impact meets the uproar.",
    coordinates: [-81.0912, 32.0809],
  },
  {
    id: "clark-atlanta-university",
    college: "Clark Atlanta University",
    chapterName: "BYEN at Clark Atlanta University",
    city: "Atlanta",
    state: "Georgia",
    yearLabel: "Established 2026",
    currentPresident: "Kynnedi De'shon",
    foundingPresident: "Kynnedi De'shon",
    quote: "Where leadership grows, community thrives, and development becomes impact.",
    coordinates: [-84.4105, 33.7538],
  },
  {
    id: "north-carolina-at-state-university",
    college: "North Carolina A&T State University",
    chapterName: "BYEN Aggies",
    city: "Greensboro",
    state: "North Carolina",
    yearLabel: "Launching 2026",
    currentPresident: "Kaylib Streeter",
    foundingPresident: "Kaylib Streeter",
    quote:
      "Empowering the next generation of Black excellence through mentorship, leadership, and advocacy—building a legacy from East Market Street.",
    coordinates: [-79.792, 36.0726],
  },
  {
    id: "bethune-cookman-university",
    college: "Bethune-Cookman University",
    chapterName: "The Black Rose Chapter of BYEN",
    city: "Daytona Beach",
    state: "Florida",
    yearLabel: "Launching 2026",
    currentPresident: "Cayden Anglin",
    foundingPresident: "Cayden Anglin",
    quote: "Rooted in Black excellence, strengthened by community, and building legacy at THEE Bethune-Cookman University.",
    coordinates: [-81.0228, 29.2108],
  },
  {
    id: "hampton-university",
    college: "Hampton University",
    chapterName: "BYEN at Hampton University",
    city: "Hampton",
    state: "Virginia",
    yearLabel: "Launching 2026",
    currentPresident: "Briana Riggins",
    foundingPresident: "Briana Riggins",
    quote: "Cultivating leaders who serve, advocate, and inspire—grounded in Hampton values and connected through BYEN.",
    coordinates: [-76.3452, 37.0299],
  },
];
