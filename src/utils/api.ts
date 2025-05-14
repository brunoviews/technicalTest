import * as mock from './mockapi';
import {
	TeamsApiResponse,
	TeamResponse,
	TeamStatisticsApiResponse,
	TeamStatistics,
} from '../models/football';

export async function fetchTeamsByLeague(
	leagueId: string,
	season: string,
): Promise<TeamResponse[]> {
	if (process.env.NODE_ENV === 'development') {
		return mock.fetchTeamsByLeague(leagueId, season);
	}
	// Use proxy route for CORS safety
	const res = await fetch(`/api/football/teams?league=${leagueId}&season=${season}`);
	if (!res.ok) throw new Error('Failed to fetch teams');
	const data: TeamsApiResponse = await res.json();
	return data.response;
}

export async function fetchTeamStatistics(
	leagueId: string,
	teamId: string,
	season: string
): Promise<TeamStatistics> {
	if (process.env.NODE_ENV === 'development') {
		return mock.fetchTeamStatistics(leagueId, teamId,season);
	}
	// Use proxy route for CORS safety
	const res = await fetch(
		`/api/football/teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`
	);
	if (!res.ok) throw new Error('Failed to fetch team statistics');
	const data: TeamStatisticsApiResponse = await res.json();
	return data.response;
}
