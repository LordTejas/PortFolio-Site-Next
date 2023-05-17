import { NavBar } from "@/components";
import NameCard from "@/components/NameCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-center p-2">
      <NavBar />

      <NameCard />
      
    </main>
  );
}
