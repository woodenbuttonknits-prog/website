# Wooden Button Knits

A calm, nature-inspired headless website for Wooden Button Knits.

## Stack

- **Frontend:** Next.js + Tailwind CSS
- **CMS:** WordPress (headless) + WPGraphQL + ACF + WPGraphQL for ACF
- **Email capture:** Mailchimp or ConvertKit via `/api/subscribe`
- **Hosting:** Vercel (frontend) + managed WordPress host

## Routes

- `/` home
- `/blog` blog overview
- `/blog/[slug]` blog detail
- `/freebie` freebie email capture
- `/freebie/download` freebie asset page
- `/about` about
- `/shop` external Etsy redirect

## WordPress setup (headless)

1. Install WordPress on your host.
2. Install and activate plugins:
   - WPGraphQL
   - Advanced Custom Fields
   - WPGraphQL for ACF
3. Keep the default **Posts** post type for blog content.
4. Add an ACF field group for posts with fields:
   - `introText` (Text Area)
   - `coverImage` (Image)
   - `ctaText` (Text, optional)
5. In WordPress > Settings > Reading, do not rely on theme rendering for frontend UX.

## Frontend environment variables

```bash
WORDPRESS_GRAPHQL_ENDPOINT=https://your-wordpress-site.com/graphql
NEXT_PUBLIC_ETSY_SHOP_URL=https://www.etsy.com/shop/your-shop-name

MAIL_PROVIDER=mailchimp # or convertkit

MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_DC=

CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
```

## Data fetching notes

This project uses the Next.js App Router:

- `generateStaticParams` for static blog paths (App Router equivalent of `getStaticPaths`)
- fetch caching/revalidation for static-like CMS data behavior (App Router equivalent workflow for `getStaticProps`)

## Run

```bash
npm install
npm run dev
```

## Future-ready notes

- Route groups can be added for a future `/app` product section.
- i18n can be added with locale-segment routing when multilingual content is introduced.
- Shop route is decoupled now so an internal shop can replace Etsy later.
