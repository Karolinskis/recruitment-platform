"use server";
import { fetchUsers } from "@/lib/users";

export default async function test() {
  const users = fetchUsers();
  console.log("zaza");
}
