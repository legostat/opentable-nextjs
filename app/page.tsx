import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="m-auto min-h-screen max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        {/* CARDS */}
        <main className="mt-10 grid grid-cols-4 gap-6 px-36 py-3">
          <RestaurantCard />
        </main>
        {/* CARDS */}
      </div>
    </div>
  );
}
