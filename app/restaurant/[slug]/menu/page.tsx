import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import RestaurantContainer from "../components/RestaurantContainer";

export default function RestaurantMenu() {
  return (
    <section className="w-[100%] rounded bg-white p-3 shadow-lg">
      <RestaurantNavbar />
      <Menu />
    </section>
  );
}
