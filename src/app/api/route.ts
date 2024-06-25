import { NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request, response:NextApiResponse,) {
    try{
        const res = await req.json();

        const { clientName, data, petName, reason } = res;

        console.log( clientName, data, petName, reason )
        const vetQuery = await prisma.vetQuery.create({
            data:{
                clientName,
                data,
                petName,
                reason,
            }
        })
        response.status(201).json(vetQuery);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Erro ao inserir os dados no banco de dados' });
    }
  }