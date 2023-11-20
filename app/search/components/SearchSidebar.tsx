import Link from "next/link";
import clsx from "clsx";
import { type Cuisine, type Location, PRICE } from "@prisma/client";
import { type SearchParams } from "../../../utils/fetch-restaurants";

export function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      classes: "w-full rounded-l border p-2 text-center text-reg",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      classes: "w-full border-b border-r border-t p-2 text-center text-reg",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      classes:
        "w-full rounded-r border-b border-r border-t p-2 text-center text-reg",
    },
  ];

  return (
    <aside className="-mt-4 flex w-1/5 flex-col gap-4 divide-y">
      <div className="pt-4">
        <h2 className="mb-2">Regions</h2>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className={clsx("block text-reg capitalize", {
              "font-bold": searchParams.city?.toLowerCase() === location.name,
            })}
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Cuisine</h2>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className={clsx("block text-reg capitalize", {
              "font-bold": searchParams.cuisine?.toLowerCase() === cuisine.name,
            })}
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Price</h2>
        <div className="flex">
          {prices.map(({ price, label, classes }) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={clsx(classes, {
                "font-bold": searchParams.price === price,
              })}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
