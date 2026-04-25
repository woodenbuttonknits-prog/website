# Wooden Button Knits

A calm, content-first Next.js site designed around slow making and nature-inspired storytelling.

## Stack

- Next.js + Tailwind CSS
- Headless CMS integration (Contentful out of the box with mock fallback)
- Mailchimp / ConvertKit API route for freebie capture

## Routes

- `/` home
- `/blog` blog overview
- `/blog/[slug]` blog detail
- `/freebie` freebie email capture
- `/freebie/download` freebie asset page
- `/about` about
- `/shop` external Etsy redirect

## CMS setup (Contentful)

Set these environment variables:

```bash
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_ENVIRONMENT=master
```

Expected fields in `blogPost` content type:

- `title`
- `slug`
- `coverImage`
- `intro`
- `content` (Rich text)
- `optionalCtaTitle` (optional)
- `optionalCtaDescription` (optional)
- `optionalCtaHref` (optional)
- `optionalCtaLabel` (optional)
- `publishedAt` (optional)

## Email setup

Choose provider with:

```bash
MAIL_PROVIDER=mailchimp # or convertkit
```

Mailchimp:

```bash
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_DC=
```

ConvertKit:

```bash
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
```

## Etsy redirect

```bash
NEXT_PUBLIC_ETSY_SHOP_URL=https://www.etsy.com/shop/your-shop-name
```

## Run

```bash
npm install
npm run dev
```
