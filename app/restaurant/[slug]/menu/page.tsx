import { Metadata, ResolvingMetadata } from "next";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import type { SlugParams } from "../layout";
import { fetchItems } from "../../../../utils/fetchItems";

export async function generateMetadata(
  _: null,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = (await parent).title;

  return {
    title: `Menu of ${title?.absolute}`,
  };
}

export default async function RestaurantMenu({
  params,
}: {
  params: SlugParams;
}) {
  const menu = await fetchItems(params.slug);
  return (
    <section className="w-[100%] rounded bg-white p-3 shadow-lg">
      <RestaurantNavbar slug={params.slug} />
      <Menu menu={menu} />
    </section>
  );
}
