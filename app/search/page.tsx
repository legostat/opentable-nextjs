import { Header } from "./components/Header";
import { RestaurantCard } from "./components/RestaurantCard";
import { SearchSidebar } from "./components/SearchSidebar";

export default function Search() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-2/3 gap-10 py-4">
        <SearchSidebar />
        <section className="flex-1">
          <RestaurantCard />
        </section>
      </main>
    </>
  );
}
