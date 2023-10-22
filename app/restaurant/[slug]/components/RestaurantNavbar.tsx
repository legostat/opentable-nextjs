import Link from "next/link";

export default function RestaurantNavbar() {
  return (
    <nav className="flex gap-7 border-b pb-2 text-reg">
      <Link href={`/restaurant/milestones-grill`}>Overview</Link>
      <Link href={`/restaurant/milestones-grill/menu`}>Menu</Link>
    </nav>
  );
}
