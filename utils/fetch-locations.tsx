import { Location, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchLocations = (): Promise<Location[]> => {
  return prisma.location.findMany();
};
