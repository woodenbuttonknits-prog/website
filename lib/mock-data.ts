import { BlogPost } from './types';

export const mockPosts: BlogPost[] = [
  {
    title: 'Why Knitting Slows the Mind',
    slug: 'why-knitting-slows-the-mind',
    coverImage: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1400&q=80',
    intro: 'A gentle reflection on repetitive motion, breath, and calm focus.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'Knitting invites us to move slower, breathe deeper, and settle into a softer rhythm.', marks: [], data: {} }],
          data: {}
        }
      ],
      data: {}
    },
    optionalCta: {
      title: 'A soft start for your next project',
      description: 'Download the free mindful knitting tracker.',
      href: '/freebie',
      label: 'Get the freebie'
    },
    publishedAt: '2026-01-10'
  },
  {
    title: 'Choosing Yarn by Texture, Not Trend',
    slug: 'choosing-yarn-by-texture-not-trend',
    coverImage: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80',
    intro: 'How touch, warmth, and drape guide better handmade choices.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'Texture changes how we experience a project from cast-on to wear.', marks: [], data: {} }],
          data: {}
        }
      ],
      data: {}
    },
    publishedAt: '2026-02-14'
  },
  {
    title: 'Simple Rituals for a Quiet Creative Evening',
    slug: 'simple-rituals-for-a-quiet-creative-evening',
    coverImage: 'https://images.unsplash.com/photo-1473679408190-0693dd22fe6f?auto=format&fit=crop&w=1400&q=80',
    intro: 'Build an easy routine that turns making into restoration.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'A candle, warm tea, and one familiar project can shift an entire evening.', marks: [], data: {} }],
          data: {}
        }
      ],
      data: {}
    },
    publishedAt: '2026-03-08'
  }
];
