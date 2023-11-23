import { Metadata, ResolvingMetadata } from "next";
import Header from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";
import { fetchRestaurantBySlug } from "../../../utils/fetchRestaurant";

export type SlugParams = {
  slug: string;
};

export async function generateMetadata(
  { params }: { params: SlugParams },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  const restaurant = await fetchRestaurantBySlug(slug);

  if (!restaurant) throw new Error();

  return {
    title: `${restaurant.name} | OpenTable`,
  };
}

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: SlugParams;
}) {
  return (
    <>
      <Header name={params.slug} />
      <RestaurantContainer>{children}</RestaurantContainer>
    </>
  );
}
