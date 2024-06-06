"use server";
import { auth } from "@clerk/nextjs/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleCreatePost(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image_url");

  const { userId } = auth();

  await sql`INSERT INTO posts (title, description, image_url, user_id) values (${title}, ${description}, ${image}, ${userId})`;

  revalidatePath("/");
  redirect("/explore");
}
