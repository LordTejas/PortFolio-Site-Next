import { NavBar, NameCard, SkillsTab, ServicesTab } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-center">
      
      <NavBar />

      <NameCard />

      <SkillsTab />

      <ServicesTab />

    </main>
  );
}
