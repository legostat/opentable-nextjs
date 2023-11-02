import { Metadata } from "next";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export const metadata: Metadata = {
  title: "Catalog | OpenTable",
};

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
