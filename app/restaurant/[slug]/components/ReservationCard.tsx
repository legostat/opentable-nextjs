"use client";

export default function ReservationCard() {
  return (
    <div className="sticky top-4 rounded bg-white p-3 shadow-lg">
      <h4 className="border-b pb-2 text-center text-lg font-bold">
        Make a reservation
      </h4>
      <label className="my-3 flex flex-col">
        <span>Party Size</span>
        <select className="border-b bg-transparent py-2 font-light">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </label>
      <div className="flex justify-between">
        <label className="flex w-[48%] flex-col">
          <span>Date</span>
          <input type="text" className="w-28 border-b px-2 py-2 font-light" />
        </label>
        <label className="flex w-[48%] flex-col">
          <span>Time</span>
          <select className="border-b bg-transparent py-2 font-light">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </label>
      </div>
      <div className="mt-5">
        <button className="h-12 w-full rounded bg-red-600 px-4 font-bold text-white">
          Find a Time
        </button>
      </div>
    </div>
  );
}
