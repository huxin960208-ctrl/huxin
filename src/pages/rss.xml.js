import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../types';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sortedArticles = articles.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site ?? SITE.url,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.slug}`,
      categories: [article.data.category, ...article.data.tags],
      author: article.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
