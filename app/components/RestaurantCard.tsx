import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="cursor-pointer overflow-hidden rounded border"
    >
      <img
        className="h-36 w-full object-cover object-center"
        src={restaurant.main_image}
        alt=""
      />
      <div className="px-3 py-2">
        <h3 className="mb-3 text-2xl font-bold"> {restaurant.name} </h3>
        <div className="flex items-center gap-2">
          <div className="flex">*****</div>
          <p className="font-medium">77 reviews</p>
        </div>
        <div className="flex gap-3 text-reg font-light capitalize">
          <p>{restaurant.cuisine.name}</p>
          <Price price={restaurant.price} />
          <p> {restaurant.location.name} </p>
        </div>
        <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
      </div>
    </Link>
  );
}
