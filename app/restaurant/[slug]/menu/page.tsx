import { Metadata } from "next";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

export const metadata: Metadata = {
  title: "Menu of Milestones Grill | OpenTable",
};

export default function RestaurantMenu() {
  return (
    <section className="w-[100%] rounded bg-white p-3 shadow-lg">
      <RestaurantNavbar />
      <Menu />
    </section>
  );
}
