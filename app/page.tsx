import { NavBar, NameCard, SkillsTab } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-center p-2">
      
      <NavBar />

      <NameCard />

      <SkillsTab />
      
    </main>
  );
}
