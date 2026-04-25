import { BlogPreviewGrid } from '@/components/BlogPreviewGrid';
import { FreebieSection } from '@/components/FreebieSection';
import { HeroSection } from '@/components/HeroSection';
import { IntroBlock } from '@/components/IntroBlock';
import { SoftShopCTA } from '@/components/SoftShopCTA';
import { getFeaturedPosts } from '@/lib/cms';

export default async function HomePage() {
  const posts = await getFeaturedPosts(3);

  return (
    <>
      <HeroSection />
      <IntroBlock />
      <BlogPreviewGrid posts={posts} />
      <FreebieSection />
      <SoftShopCTA />
    </>
  );
}
