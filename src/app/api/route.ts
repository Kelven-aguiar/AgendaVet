import { NextApiResponse } from "next";

export async function POST(req: Request, response:NextApiResponse) {
    const res = await req.json();
    console.log(response)
    return Response.json(res);
}