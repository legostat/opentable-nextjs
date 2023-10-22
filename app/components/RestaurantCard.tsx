import Link from "next/link";

export default function RestaurantCard() {
  return (
    <Link
      href={`/restaurant/milestones-grill`}
      className="cursor-pointer overflow-hidden rounded border"
    >
      <img
        className="h-36 w-full object-cover object-center"
        src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
        alt=""
      />
      <div className="px-3 py-2">
        <h3 className="mb-3 text-2xl font-bold">Milestones Grill</h3>
        <div className="flex items-center gap-2">
          <div className="flex">*****</div>
          <p className="font-medium">77 reviews</p>
        </div>
        <div className="flex gap-3 text-reg font-light capitalize">
          <p>Mexican</p>
          <p>$$$$</p>
          <p>Toronto</p>
        </div>
        <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
      </div>
    </Link>
  );
}
