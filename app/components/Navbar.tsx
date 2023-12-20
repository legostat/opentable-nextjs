import Link from "next/link";
import AuthModal from "./AuthModal";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>
      <div>
        <div className="flex gap-x-2">
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
}
