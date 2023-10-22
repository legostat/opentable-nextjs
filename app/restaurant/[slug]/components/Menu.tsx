import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section className="mt-5 bg-white">
      <h2 className="mb-1 mt-4 pb-1 text-4xl font-bold">Menu</h2>
      <section className="grid grid-cols-2 gap-3">
        <MenuCard />
      </section>
    </section>
  );
}
