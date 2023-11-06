import { Metadata } from "next";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";

export type RestaurantCardType = {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
};

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });
  return restaurants;
};

export const metadata: Metadata = {
  title: "Catalog | OpenTable",
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log("restaurants", { restaurants });

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
