"use client";

import Image from "next/image";
import { type Review } from "@prisma/client";
import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";
import { calculateReviewRating } from "../../utils/calculateReviewRating";

export default function Stars({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || calculateReviewRating(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = Number.parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) {
        stars.push(fullStar);
      } else if (difference < 1 && difference > 0.2) {
        if (difference <= 0.6) {
          stars.push(halfStar);
        } else {
          stars.push(fullStar);
        }
      } else {
        stars.push(emptyStar);
      }
    }

    return stars.map((star, idx) => (
      <Image key={idx} className="h-4 w-4 flex-none" src={star} alt="" />
    ));
  };

  return <div className="flex gap-x-1">{renderStars()}</div>;
}
