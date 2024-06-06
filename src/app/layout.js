import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ProfileForm from "./components/ProfileForm";
import { auth } from "@clerk/nextjs/server";
import { db } from "@vercel/postgres";

export const metadata = {
  title: "Picture Planet",
  description: "Share any photo on the planet!",
};

export default async function RootLayout({ children }) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth(); // user_98sddfiusdfi7syf  or null

  const users = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );

  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (users.rowCount === 0 && userId !== null) {
    // add them to our database
    await db.query(`INSERT INTO users (clerk_id) VALUES ('${userId}')`);
  }

  // has username will be true if we have a username and (shockingly) false if we don't
  const hasUsername = users.rows[0]?.username !== null ? true : false;
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="pt-40">
          <header>
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
                  href="/about"
                  className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
                >
                  About
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
          </header>
          <main>
            <SignedOut>{children}</SignedOut>

            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>
          </main>
          <footer className="bg-gray-100 text-gray-500 p-10 mt-10">
            <div className="container mx-auto flex justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Picture Planet</h3>
                <p>© 2024 Picture Planet. All rights reserved.</p>
              </div>
              <div className="space-x-4">
                <Link href="/about" className="hover:text-gray-400">
                  About
                </Link>
                <Link href="/about" className="hover:text-gray-400">
                  Contact
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
