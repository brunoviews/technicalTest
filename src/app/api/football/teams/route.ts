import { NextRequest, NextResponse } from 'next/server';

const BASE_URL =
	process.env.FOOTBALL_API_BASE_URL || 'https://v3.football.api-sports.io';

export async function GET(req: NextRequest) {
	const { search } = req.nextUrl;
	const url = `${BASE_URL}/teams${search}`;
	const res = await fetch(url, {
		headers: {
			'x-apisports-key': process.env.FOOTBALL_API_KEY as string,
		},
	});
	const data = await res.json();
	return NextResponse.json(data);
}
