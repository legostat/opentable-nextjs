import { type Review } from "@prisma/client";
import Stars from "../../../components/Stars";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-b pb-7">
      <div className="flex gap-10">
        <div className="flex w-1/6 flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
            <h3 className="text-2xl uppercase text-white">
              {review.first_name[0]}
              {review.last_name[0]}
            </h3>
          </div>
          <p className="text-center">
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-5">
            <Stars rating={review.rating} reviews={[]} />
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
