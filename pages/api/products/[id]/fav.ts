import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  const alreadyExist = await client.fav.findFirst({
    where: {
      productId: Number(id),
      userId: user?.id,
    },
  });

  if (alreadyExist) {
    //delete
    await client.fav.delete({
      where: {
        id: alreadyExist.id,
      },
    });
  } else {
    //create
    await client.fav.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: Number(id),
          },
        },
      },
    });
  }

  //   const product = await client.product.findUnique({
  //     where: {
  //       id: Number(id),
  //     },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           name: true,
  //           avatar: true,
  //         },
  //       },
  //     },
  //   });

  //   const terms = product?.name.split(" ").map((word) => ({
  //     name: {
  //       contains: word,
  //     },
  //   }));
  //   const relatedProducts = await client.product.findMany({
  //     where: {
  //       OR: terms,
  //       AND: {
  //         id: {
  //           not: product?.id,
  //         },
  //       },
  //     },
  //   });

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
