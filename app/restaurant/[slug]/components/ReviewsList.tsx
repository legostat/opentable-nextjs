import { type Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
  return (
    <section>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        What {reviews.length}{" "}
        {reviews.length === 1 ? "person is" : "people are"} saying
      </h2>
      <div className="flex flex-col gap-7">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
