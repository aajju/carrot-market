import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

// client.user.create({
//   data: {
//     email: "hi",
//     name: "hi",
//   },
// });

export default new PrismaClient();
