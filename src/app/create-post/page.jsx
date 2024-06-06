"use client";
import { handleCreatePost } from "@/lib/actions";
import { useState } from "react";

export default function CreatePost() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      <h1>Create a Post</h1>
      <form action={(formData) => handleCreatePost(formData)}>
        <label htmlFor="title">Title</label>
        <input title="title" id="title" placeholder="Title" />
        <label htmlFor="description">Description</label>
        <input name="description" id="description" placeholder="Description" />
        <label htmlFor="image_url">Image URL</label>
        <input
          name="image_url"
          id="image_url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {imageUrl && (
          <div>
            <h3>Image Preview:</h3>
            <img
              src={imageUrl}
              alt="Image Preview"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
