import Navbar from "../../components/Navbar";
import Header from "./components/Header";
import ReserveForm from "./components/ReserveForm";

export default function Reserve() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="m-auto min-h-screen max-w-screen-2xl bg-white">
        <Navbar />
        <main className="border-t">
          <div className="m-auto w-3/5 py-9">
            <Header />
            <ReserveForm />
          </div>
        </main>
      </div>
    </div>
  );
}
