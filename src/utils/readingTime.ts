export function getReadingTime(text: string): number {
  const wordsPerMinute = 238;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return 'Less than 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}
