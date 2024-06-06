"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleCreatePost(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image_url");

  await sql`INSERT INTO posts (title, description, image_url) values (${title}, ${description}, ${image})`;

  revalidatePath("/");
  redirect("/explore");
}
