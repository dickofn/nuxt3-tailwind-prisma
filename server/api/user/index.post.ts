import Prisma from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default async (req) => {
  const client = new Prisma.PrismaClient();

  const body = await useBody(req);

  try {
    const res = await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    return res;
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        e.message = `${e.meta.target[0]} already exists`;
        throw e;
      }
    }
  }
};
