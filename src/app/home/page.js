import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
      <section className="mt-60 p-10 ml-20">
        <h1 className="text-8xl font-bold mb-4">Home</h1>
        <h2 className="text-2xl mt-12 text-gray-500">Your World, captured.</h2>
        <p className="mt-6 max-w-lg">
          Discover a curated gallery of high-quality images from talented
          photographers worldwide. Explore diverse collections, from
          breathtaking nature shots to vibrant cityscapes. Connect with a
          passionate community and create personalized collections. Experience
          captivating visuals that capture moments and memories from around the
          globe.
        </p>
      </section>
    </>
  );
}
