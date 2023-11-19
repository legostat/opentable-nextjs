import Link from "next/link";
import Price from "../../components/Price";
import { RestaurantCardType } from "../../../utils/fetch-restaurants";

export function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  return (
    <div className="flex gap-5 pt-5">
      <div className="w-44 flex-none">
        <img
          src={restaurant.main_image}
          alt=""
          className="h-full w-44 rounded object-cover object-center"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex gap-2">
          <div className="flex">*****</div>
          <p className="text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex gap-4 text-reg">
            <Price price={restaurant.price} />
            <p className="capitalize">{restaurant.cuisine.name}</p>
            <p className="font-medium capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
