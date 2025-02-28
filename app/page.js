import HeroSection from "@/components/landing/HeroSection";
import TrendingNowCard from "@/components/trending/TrendingNowCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* Add my landing page content here */}
      <TrendingNowCard />
    </div>
  );
}
