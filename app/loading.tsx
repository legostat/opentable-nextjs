import Header from "./components/Header";

export default function Loading() {
  return (
    <>
      <Header />
      <main className="mt-10 grid grid-cols-4 gap-6 px-36 py-3">
        {Array(10)
          .fill(1)
          .map((item) => (
            <div
              key={item}
              className="h-72 animate-pulse cursor-pointer overflow-hidden rounded border bg-slate-200 shadow-lg"
            ></div>
          ))}
      </main>
    </>
  );
}
