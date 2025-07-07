import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <section className="mb-12">
          <div className="bg-orange-500 h-64 rounded-lg p-8 text-white">
            {/* مساحة الإعلانات */}
          </div>
        </section>
        <ProductGrid />
      </main>
    </div>
  );
}
