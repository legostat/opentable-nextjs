import { Item } from "@prisma/client";

export default function MenuCard({ item }: { item: Item }) {
  return (
    <div className="rounded border p-3">
      <h3 className="text-lg font-bold ">{item.name}</h3>
      <p className="mt-1 text-sm font-light">{item.description}</p>
      <div className="mt-7">{item.price}</div>
    </div>
  );
}
