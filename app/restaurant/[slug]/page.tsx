import { Metadata, ResolvingMetadata } from "next";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ReviewsList from "./components/ReviewsList";
import Title from "./components/Title";

export const metadata: Metadata = {
  title: "Milestones Grill | OpenTable",
};

export default function RestarauntDetails() {
  return (
    <>
      <section className="w-[70%] rounded bg-white p-3 shadow-lg">
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
    </>
  );
}
