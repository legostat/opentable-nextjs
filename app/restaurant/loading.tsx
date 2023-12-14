export default function Loading() {
  return (
    <>
      <header className="h-96 animate-pulse overflow-hidden bg-slate-200">
        <div className="h-full bg-center" />
      </header>
      <div className="0  m-auto -mt-9 flex w-2/3 items-start justify-between">
        <div className="w-[70%] rounded bg-white p-3 shadow">
          <div className="mt-4 h-16 w-[400px] animate-pulse rounded border-b bg-slate-200 pb-6"></div>

          <div className="h-40 animate-pulse items-end bg-slate-200"></div>
        </div>
      </div>
    </>
  );
}
