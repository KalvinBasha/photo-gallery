import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
