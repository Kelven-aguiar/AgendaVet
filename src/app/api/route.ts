import { NextApiResponse } from "next";
import { prisma } from "../util";

export async function POST(req: Request, response: NextApiResponse) {
	try {
		const res = await req.json();

		const { clientName, data, petName, reason } = res;

		console.log(clientName, data, petName, reason);
		const vetQuery = await prisma.vetQueries.create({
			data: {
				clientName,
				data,
				petName,
				reason,
			},
		});
		response.status(201).json(vetQuery);
	} catch (error) {
		console.error(error);
		response
			.status(500)
			.json({ error: "Erro ao inserir os dados no banco de dados" });
	}
}

export async function GET(req: Request, response: NextApiResponse) {
	try {
		const request = await req.json();
		const vetQueries = await prisma.vetQueries.findMany({
			where: { data: request.data },
		});
		response.status(201).json(vetQueries);
	} catch (error) {
		console.error(error);
		response
			.status(500)
			.json({ error: "Erro ao inserir os dados no banco de dados" });
	}
}
