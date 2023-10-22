import Link from "next/link";

export function RestaurantCard() {
  return (
    <div className="flex gap-5 border-b pb-5">
      <div className="w-44 flex-none">
        <img
          src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
          alt=""
          className="w-44 rounded"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
        <div className="flex gap-2">
          <div className="flex">*****</div>
          <p className="text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex gap-4 text-reg font-light">
            <p>$$$</p>
            <p>Mexican</p>
            <p>Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/milestones-grill`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
