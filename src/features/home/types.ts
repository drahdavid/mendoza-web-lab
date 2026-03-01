export type Package = {
  id: string;
  featured: boolean;
  badge: string;
  badgeColor: string;
  borderHover: string;
  title: string;
  targetAudience: string;
  mainDiff: string;
  desc: string;
  price: string;
  delivery: string;
  includes: readonly { text: string; tooltip: string }[];
  excludes: readonly { text: string; tooltip: string }[];
  demoHref: string;
  waText: string;
};

export type CompareRow = {
  label: string;
  start: string;
  pro: string;
  marcaWeb: string;
};
