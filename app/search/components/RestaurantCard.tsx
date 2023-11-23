import Link from "next/link";
import Price from "../../components/Price";
import { RestaurantCardType } from "../../../utils/fetchRestaurants";
import { getReviewsCountAndText } from "../../../utils/getReviewsCountAndText";
import { calculateReviewRating } from "../../../utils/calculateReviewRating";
import Stars from "../../components/Stars";

export function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  const renderRatingText = () => {
    const rating = calculateReviewRating(restaurant.reviews);

    if (rating > 4) return "Awesome";
    if (rating <= 4 && rating > 3) return "Good";
    if (rating <= 3 && rating > 0) return "Average";
    return "";
  };

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
        <div className="flex items-center gap-2">
          <Stars reviews={restaurant.reviews} />
          <p className="text-sm">{renderRatingText()}</p>
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
