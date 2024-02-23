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
  open_time: string;
  close_time: string;
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
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurant) {
      notFound();
    }

    return restaurant;
  },
);
