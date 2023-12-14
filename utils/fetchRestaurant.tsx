import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import { cache } from "react";

type Restaurant = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
};

const prisma = new PrismaClient();

export const fetchRestaurantBySlug = cache(
  async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        images: true,
        description: true,
        slug: true,
        reviews: true,
      },
    });

    if (!restaurant) {
      notFound();
    }

    return restaurant;
  },
);
