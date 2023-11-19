import { Metadata } from "next";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { fetchRestaurants } from "../utils/fetch-restaurants";

export const metadata: Metadata = {
  title: "Catalog | OpenTable",
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <>
      <Header />
      <main className="mt-10 grid grid-cols-4 gap-6 px-36 py-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </main>
    </>
  );
}
