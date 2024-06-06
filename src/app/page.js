import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="ml-40 flex items-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-4">Home</h1>
          <h2 className="text-2xl mt-12 text-gray-500">
            Your World, captured.
          </h2>
          <p className="mt-6">
            Discover a curated gallery of high-quality images from talented
            photographers worldwide. Explore diverse collections, from
            breathtaking nature shots to vibrant cityscapes. Connect with a
            passionate community and create personalized collections. Experience
            captivating visuals that capture moments and memories from around
            the globe.
          </p>
        </div>
        <div className="ml-80 mt-20">
          <img
            src="https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pink Flowers"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="flex justify-around items-center mt-20">
        <div className="text-center max-w-xs">
          <img
            src="https://images.unsplash.com/photo-1717196214667-801a4b796262?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Light on Person"
            className="rounded-lg w-80 h-80 object-cover mx-auto mb-5"
          />
          <h3 className="text-2xl font-bold">Explore</h3>
          <p className="text-gray-500 mt-2">
            Venture into a vast gallery of breathtaking photos that capture the
            essence of diverse landscapes, vibrant cultures, and unique
            perspectives from around the globe.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <img
            src="https://images.unsplash.com/photo-1717379026819-b3b480d810eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="City Lights"
            className="rounded-lg w-80 h-80 object-cover mx-auto mb-5"
          />
          <h3 className="text-2xl font-bold">Create</h3>
          <p className="text-gray-500 mt-2">
            Unleash your artistic vision and craft captivating images that tell
            your personal story, turning everyday moments into extraordinary
            works of art.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <img
            src="https://images.unsplash.com/photo-1717062587597-5fe4f718e7d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="City Blur"
            className="rounded-lg w-80 h-80 object-cover mx-auto mb-5"
          />
          <h3 className="text-2xl font-bold">Share</h3>
          <p className="text-gray-500 mt-2">
            Connect with others, share your favourite moments, passion and
            creativity, and inspire the world with your visual stories and
            stunning imagery.
          </p>
        </div>
      </section>
    </>
  );
}
