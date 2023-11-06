import Link from "next/link";

export default function RestaurantNavbar({ slug }: { slug: string }) {
  return (
    <nav className="flex gap-7 border-b pb-2 text-reg">
      <Link href={`/restaurant/${slug}`}>Overview</Link>
      <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
    </nav>
  );
}
