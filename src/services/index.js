"use server";

import { cookies } from "next/headers";

export async function setToken(token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getToken() {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || null;
}

export async function removeToken() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}
