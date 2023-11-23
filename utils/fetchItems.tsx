import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) throw new Error();

  return restaurant.items;
};
