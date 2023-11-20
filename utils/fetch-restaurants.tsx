import { Cuisine, PRICE, Location, PrismaClient } from "@prisma/client";
import { cache } from "react";

export type SearchParams = {
  city?: string;
  cuisine?: string;
  price?: PRICE;
};

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
  (searchParams?: SearchParams): Promise<RestaurantCardType[]> =>
    prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: searchParams?.city?.toLowerCase(),
          },
        },
        cuisine: {
          name: {
            equals: searchParams?.cuisine?.toLocaleLowerCase(),
          },
        },
        price: {
          equals: searchParams?.price,
        },
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true,
        price: true,
        slug: true,
      },
    }),
);
