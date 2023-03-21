import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import Newsletters from "@/components/Newsletters";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletters />
      <Cards />
    </div>
  )
}
