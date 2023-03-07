import type { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).send("Requested method is not allowed for that route");
    }
    const integrityInfos = await fetch("https://pauldb09.dev/api/integrity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });

    return res.send(integrityInfos.text());
}
