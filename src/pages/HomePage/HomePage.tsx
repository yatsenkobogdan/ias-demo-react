import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col font-montserrat bg-white">

      <main className="flex-1">
        <MainSection />
      </main>

      <Footer />
    </div>
  );
}
