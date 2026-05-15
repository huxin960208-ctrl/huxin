import { SITE, type Category, CATEGORY_MAP } from '../types';

interface ArticleData {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  featuredImage?: string;
  category: Category;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function buildArticleSchema(article: ArticleData) {
  const categoryInfo = CATEGORY_MAP[article.category];
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.featuredImage
      ? `${SITE.url}${article.featuredImage}`
      : `${SITE.url}/images/og-default.jpg`,
    datePublished: article.pubDate.toISOString(),
    dateModified: (article.updatedDate ?? article.pubDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    ...(categoryInfo && {
      articleSection: categoryInfo.title,
    }),
  };
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/og-default.jpg`,
    description: SITE.tagline,
    sameAs: [],
  };
}
