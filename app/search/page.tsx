import { Metadata } from "next";
import { Header } from "./components/Header";
import { RestaurantCard } from "./components/RestaurantCard";
import { SearchSidebar } from "./components/SearchSidebar";
import { SearchParams, fetchRestaurants } from "../../utils/fetch-restaurants";
import { fetchLocations } from "../../utils/fetch-locations";
import { fetchCuisines } from "../../utils/fetch-cuisines";
import { PRICE } from "@prisma/client";

export const metadata: Metadata = {
  title: "Search | OpenTable",
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <main className="mx-auto flex w-2/3 gap-10 py-4">
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <section className="flex-1 space-y-5 divide-y">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="mt text-center text-5xl">No restaurants found</p>
          )}
        </section>
      </main>
    </>
  );
}
