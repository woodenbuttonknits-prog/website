import { redirect } from 'next/navigation';

export default function ShopPage() {
  redirect(process.env.NEXT_PUBLIC_ETSY_SHOP_URL ?? 'https://www.etsy.com');
}
