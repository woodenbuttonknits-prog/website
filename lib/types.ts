export type BlogPost = {
  title: string;
  slug: string;
  coverImage: string;
  intro: string;
  content: unknown;
  optionalCta?: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
  publishedAt?: string;
};
