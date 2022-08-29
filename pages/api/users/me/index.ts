import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // console.log(req.session.user);
  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    res.json({ ok: true, profile });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { name, email, phone },
    } = req;

    const currentUser = await client.user.findUnique({
      where: { id: user?.id },
    });

    if (email && email !== currentUser?.email) {
      const alreadyExists = Boolean(
        await client.user.findUnique({
          where: { email },
        })
      );
      if (alreadyExists) {
        res.json({ ok: false, error: "email already taken" });
      }
      await client.user.update({
        where: { id: user?.id },
        data: { email },
      });
      res.json({ ok: true });
    }

    if (phone && phone !== currentUser?.phone) {
      const alreadyExists = Boolean(
        await client.user.findUnique({
          where: { phone },
        })
      );
      if (alreadyExists) {
        res.json({ ok: false, error: "phone already taken" });
      }
      await client.user.update({
        where: { id: user?.id },
        data: { phone },
      });
      res.json({ ok: true });
    }

    if (name && name !== currentUser?.name) {
      await client.user.update({
        where: { id: user?.id },
        data: { name },
      });
      res.json({ ok: true });
    }
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
