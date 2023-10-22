import Navbar from "../../components/Navbar";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantContainer from "./components/RestaurantContainer";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ReviewsList from "./components/ReviewsList";
import Title from "./components/Title";

export default function RestarauntDetails() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="m-auto min-h-screen max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <RestaurantContainer>
          <section className="w-[70%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
            <Title />
            <Rating />
            <Description />
            <Gallery />
            <ReviewsList />
          </section>
          <aside className="w-[27%] text-reg">
            <ReservationCard />
          </aside>
        </RestaurantContainer>
      </div>
    </div>
  );
}
