import { Navbar } from "@/components/layout/Navbar";
import { FullPageScroll } from "@/components/layout/FullPageScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersContent } from "@/components/sections/PartnersContent";
import { AboutContent } from "@/components/sections/AboutContent";
import { LeaderboardContent } from "@/components/sections/LeaderboardContent";
import { CommunitySection } from "@/components/sections/CommunitySection";

const Index = () => {
  const sections = [
    { id: 'hero', content: <HeroSection />, internalStates: 2 },
    { id: 'partners', content: <PartnersContent /> },
    { id: 'about', content: <AboutContent /> },
    { id: 'leaderboard', content: <LeaderboardContent /> },
    { id: 'community', content: <CommunitySection />, internalStates: 2, hideDefaultBackground: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FullPageScroll sections={sections} />
    </div>
  );
};

export default Index;
