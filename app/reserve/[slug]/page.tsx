import Header from "./components/Header";
import ReserveForm from "./components/ReserveForm";

export default function Reserve() {
  return (
    <main className="border-t">
      <div className="m-auto w-3/5 py-9">
        <Header />
        <ReserveForm />
      </div>
    </main>
  );
}
