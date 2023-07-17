import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { discordValidationSchema } from 'validationSchema/discords';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.discord
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getDiscordById();
    case 'PUT':
      return updateDiscordById();
    case 'DELETE':
      return deleteDiscordById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDiscordById() {
    const data = await prisma.discord.findFirst(convertQueryToPrismaUtil(req.query, 'discord'));
    return res.status(200).json(data);
  }

  async function updateDiscordById() {
    await discordValidationSchema.validate(req.body);
    const data = await prisma.discord.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteDiscordById() {
    const data = await prisma.discord.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
