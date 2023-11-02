import { Metadata } from "next";
import Header from "./components/Header";
import ReserveForm from "./components/ReserveForm";

export const metadata: Metadata = {
  title: "Reserve at Milestones Grill | OpenTable",
};

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
