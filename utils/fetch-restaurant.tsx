import { PrismaClient } from "@prisma/client";
import { cache } from "react";

type Restaurant = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
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
      },
    });

    if (!restaurant) {
      throw new Error();
    }

    // console.log("restaurant", restaurant);

    return restaurant;
  },
);
