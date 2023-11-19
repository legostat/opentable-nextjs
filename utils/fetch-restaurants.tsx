import { Cuisine, PRICE, Location, PrismaClient } from "@prisma/client";
import { cache } from "react";

export type RestaurantCardType = {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
};

const prisma = new PrismaClient();

export const fetchRestaurants = cache(
  async (location?: string): Promise<RestaurantCardType[]> => {
    const select = {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    };

    if (!location) {
      return await prisma.restaurant.findMany({
        select,
      });
    }

    return await prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: location,
          },
        },
      },
      select,
    });
  },
);
