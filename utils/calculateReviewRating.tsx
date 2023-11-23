import { type Review } from "@prisma/client";

export const calculateReviewRating = (reviews: Review[]) => {
  /* If restaurant doesn't have any review return 0 */
  if (!reviews.length) return 0;

  /* Calculate average rating */
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
