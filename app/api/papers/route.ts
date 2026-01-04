import axios from "axios";
import { NextResponse } from "next/server";




export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({ error: "Query is required" }, { status: 400 });
    };


    try {
        const res = await axios.get(`https://api.semanticscholar.org/graph/v1/paper/search`,
            {
                params: {
                    query,
                    limit: "10",
                    fields: "title,authors.name,year,abstract,citationCount"
                },
                headers: {
                    "User-Agent": "NextJS-App"
                }
            },
        )
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error.response?.data || 'Failed to fetch papers'
            },
            {
                status: error.response?.status || 500
            }
        )
    }


}