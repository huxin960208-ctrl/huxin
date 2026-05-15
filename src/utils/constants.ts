export const ADSENSE_CONFIG = {
  enabled: false,
  publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  slots: {
    inArticle: { slotId: '1234567890', format: 'auto' },
    sidebar: { slotId: '2345678901', format: 'auto' },
    footer: { slotId: '3456789012', format: 'auto' },
    header: { slotId: '4567890123', format: 'auto' },
  },
} as const;

export const ADSENSE_PLACEHOLDER_TEXT = 'Advertisement';
