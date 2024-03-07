import CTA from "@/components/CTA";
import Home from "@/components/Home";
import MenuHome from "@/components/MenuHome";
import Testimonials from "@/components/Testimonials";

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto">
    <Home/>
    
    <MenuHome/>
    <CTA/>
    <Testimonials/>
    </main>
  );
}
