import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function CreatePost() {
  return (
    <nav
      id="navBar"
      className="fixed top-0 left-0 right-0 flex items-center justify-between p-10 border-b border-gray-300 shadow-md z-50 bg-white"
    >
      <h2 className="text-2xl font-bold">Picture Planet</h2>
      <div className="flex items-center space-x-12">
        <Link
          href="/home"
          className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/explore"
          className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
        >
          Explore
        </Link>
        <Link
          href="/create-post"
          className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
        >
          Create
        </Link>
        <Link
          href="/profile"
          className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
        >
          Profile
        </Link>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
