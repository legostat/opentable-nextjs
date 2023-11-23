import { type Review } from "@prisma/client";
import { calculateReviewRating } from "../../../../utils/calculateReviewRating";
import Stars from "../../../components/Stars";

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <section className="flex items-end gap-4">
      <div className="ratings mt-2 flex items-center gap-3">
        <Stars reviews={reviews} />
        <p className="text-reg">
          {" "}
          {calculateReviewRating(reviews).toFixed(1)}{" "}
        </p>
      </div>
      <p className="text-reg">
        {reviews.length} Review{reviews.length === 1 ? "" : "s"}
      </p>
    </section>
  );
}
