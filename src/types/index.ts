export const CATEGORIES = [
  'car-accidents',
  'slip-and-fall',
  'medical-malpractice',
  'workplace-injuries',
  'wrongful-death',
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface CategoryInfo {
  slug: Category;
  title: string;
  description: string;
  icon: string;
}

export const CATEGORY_MAP: Record<Category, CategoryInfo> = {
  'car-accidents': {
    slug: 'car-accidents',
    title: 'Car Accidents',
    description:
      'Settlement guides, fault laws, insurance claims, and legal rights for auto accident victims.',
    icon: '🚗',
  },
  'slip-and-fall': {
    slug: 'slip-and-fall',
    title: 'Slip & Fall',
    description:
      'Premises liability, store injury claims, settlement values, and proving negligence.',
    icon: '⚠️',
  },
  'medical-malpractice': {
    slug: 'medical-malpractice',
    title: 'Medical Malpractice',
    description:
      'Surgical errors, misdiagnosis, birth injuries, and navigating malpractice claims.',
    icon: '🏥',
  },
  'workplace-injuries': {
    slug: 'workplace-injuries',
    title: 'Workplace Injuries',
    description:
      "Workers' compensation, third-party claims, construction accidents, and disability benefits.",
    icon: '🔧',
  },
  'wrongful-death': {
    slug: 'wrongful-death',
    title: 'Wrongful Death',
    description:
      'Filing a wrongful death lawsuit, calculating damages, and understanding standing requirements.',
    icon: '🕊️',
  },
};

export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  ogImage: string;
  author: string;
}

export const SITE: SiteConfig = {
  name: 'Injury Rights Guide',
  tagline: 'Understanding Your Personal Injury Rights',
  url: 'https://lawassociates.uk',
  ogImage: '/images/og-default.svg',
  author: 'Injury Rights Guide Editorial Team',
};
