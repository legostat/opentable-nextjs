import { type Review } from "@prisma/client";

export const getReviewsCountAndText = (reviews: Review[]) =>
  `${reviews.length} review${reviews.length > 1 ? "s" : ""}`;
