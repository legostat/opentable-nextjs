import { Cuisine, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchCuisines = (): Promise<Cuisine[]> => {
  return prisma.cuisine.findMany();
};
