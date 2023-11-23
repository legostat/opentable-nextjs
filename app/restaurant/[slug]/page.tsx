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
import { fetchRestaurantBySlug } from "../../../utils/fetchRestaurant";

export default async function RestaurantDetails({
  params,
}: {
  params: SlugParams;
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <Head>
        <title>{`${restaurant.name} | OpenTable`}</title>
      </Head>
      <section className="w-[70%] rounded bg-white p-3 shadow-lg">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Gallery images={restaurant.images} />
        <ReviewsList reviews={restaurant.reviews} />
      </section>
      <aside className="w-[27%] text-reg">
        <ReservationCard />
      </aside>
    </>
  );
}
