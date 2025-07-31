import EnquirySection from "@/components/EnquirySection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import LandingSection from "@/components/LandingSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full max-w-3xl mx-auto text-center my-8"></header>
      <main className="flex-1 w-full flex flex-col items-center gap-8">
        <LandingSection />
        <ExperienceSection />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  );
}
