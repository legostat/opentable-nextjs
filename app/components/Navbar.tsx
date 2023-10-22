import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>
      <div>
        <div className="flex gap-x-2">
          <button className="rounded border bg-blue-700 px-4 py-1 text-white">
            Signin
          </button>
          <button className="rounded border px-4 py-1">Signup</button>
        </div>
      </div>
    </nav>
  );
}
