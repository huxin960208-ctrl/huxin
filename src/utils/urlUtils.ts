import { CATEGORY_MAP, type Category } from '../types';

export function getCategoryUrl(category: Category): string {
  return `/categories/${category}`;
}

export function getCategoryTitle(category: Category): string {
  return CATEGORY_MAP[category]?.title ?? category;
}

export function getArticleUrl(slug: string): string {
  return `/articles/${slug}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncate(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).replace(/\s+\S*$/, '') + '...';
}
