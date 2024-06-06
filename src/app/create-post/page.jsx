"use client";
import { handleCreatePost } from "@/lib/actions";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";

export default function CreatePost() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="container p-4">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
        <form action={(formData) => handleCreatePost(formData)}>
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            title="title"
            id="title"
            placeholder="Add your title here"
            className="border p-2 mb-4 w-full"
          />
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <input
            name="description"
            id="description"
            placeholder="Add your description here"
            className="border p-2 mb-4 w-full"
          />
          <label htmlFor="image_url" className="block mb-2">
            Image URL
          </label>
          <input
            name="image_url"
            id="image_url"
            placeholder="Add an Image URL here"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          {imageUrl && (
            <div className="border border-gray-300 rounded-lg p-4 inline-block mt-4">
              <h3 className="mb-2">Image Preview:</h3>
              <img
                src={imageUrl}
                alt="Image Preview"
                className="max-w-xs max-h-48 object-contain"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Post
          </button>
        </form>
      </SignedIn>
      <SignedOut>
        <div className="text-center mt-10">
          <p className="mb-4 text-lg">
            You need to be signed in to create a post.
          </p>
          <SignInButton mode="modal">
            <button className="bg-blue-500 text-white p-2 rounded">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </div>
  );
}
