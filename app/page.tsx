import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-10 grid grid-cols-4 gap-6 px-36 py-3">
        <RestaurantCard />
      </main>
    </>
  );
}
