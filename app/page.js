import HeroSection from "@/components/landing/HeroSection";
import PopularCards from "@/components/popular/PopularCards";
import TopRatedCard from "@/components/tep-rated/TopRatedCard";
import TrendingNowCard from "@/components/trending/TrendingNowCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* Add my landing page content here */}
      <TrendingNowCard />
      <PopularCards />
      <TopRatedCard />
    </div>
  );
}
