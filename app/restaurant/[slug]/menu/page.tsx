import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import RestaurantContainer from "../components/RestaurantContainer";

export default function RestaurantMenu() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="m-auto min-h-screen max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <RestaurantContainer>
          <section className="w-[100%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </section>
        </RestaurantContainer>
      </div>
    </div>
  );
}
