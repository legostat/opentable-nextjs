import { Cuisine, Location } from "@prisma/client";

export function SearchSidebar({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) {
  return (
    <aside className="-mt-4 flex w-1/5 flex-col gap-4 divide-y">
      <div className="pt-4">
        <h2 className="mb-2">Regions</h2>
        {locations.map((location) => (
          <p className="text-reg capitalize" key={location.id}>
            {location.name}
          </p>
        ))}
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Cuisine</h2>
        {cuisines.map((cuisine) => (
          <p className="text-reg capitalize" key={cuisine.id}>
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Price</h2>
        <div className="flex">
          <button className="w-full rounded-l border p-2 text-reg font-light">
            $
          </button>
          <button className="w-full border-b border-r border-t p-2 text-reg font-light">
            $$
          </button>
          <button className="w-full rounded-r border-b border-r border-t p-2 text-reg font-light">
            $$$
          </button>
        </div>
      </div>
    </aside>
  );
}
