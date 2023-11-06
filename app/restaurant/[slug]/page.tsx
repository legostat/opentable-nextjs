import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ReviewsList from "./components/ReviewsList";
import Title from "./components/Title";
import Head from "next/head";
import type { SlugParams } from "./layout";

type Restaurant = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
};

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  console.log("restaurant", restaurant);

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: SlugParams;
}) {
  // console.log(params.slug);

  const restaurant = await fetchRestaurantBySlug(params.slug);
  // console.log("restaurant", restaurant);

  return (
    <>
      <Head>
        <title>{`${restaurant.name} | OpenTable`}</title>
      </Head>
      <section className="w-[70%] rounded bg-white p-3 shadow-lg">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Gallery images={restaurant.images} />
        <ReviewsList />
      </section>
      <aside className="w-[27%] text-reg">
        <ReservationCard />
      </aside>
    </>
  );
}
