export interface Team {
	id: number;
	name: string;
	code: string | null;
	country: string;
	founded: number | null;
	national: boolean;
	logo: string;
}

export interface Venue {
	id: number;
	name: string;
	address: string;
	city: string;
	capacity: number;
	surface: string;
	image: string;
}

export interface TeamResponse {
	team: Team;
	venue: Venue;
}

export interface TeamsApiResponse {
	response: TeamResponse[];
}

export interface TeamStatistics {
	league: {
		id: number;
		name: string;
		country: string;
		logo: string;
		season: string;
	};
	team: Team;
	form: string;
	fixtures: Record<string, any>;
	goals: Record<string, any>;
	biggest: Record<string, any>;
	clean_sheet: Record<string, any>;
	failed_to_score: Record<string, any>;
	penalty: Record<string, any>;
	lineups: Array<Record<string, any>>;
	cards: Record<string, any>;
}

export interface TeamStatisticsApiResponse {
	response: TeamStatistics;
}

export enum League {
	PremierLeague = '39',
	LaLiga = '140',
	SerieA = '135',
}

export const LEAGUE_OPTIONS = [
	{ id: League.PremierLeague, name: 'Premier League' },
	{ id: League.LaLiga, name: 'La Liga' },
	{ id: League.SerieA, name: 'Serie A' },
];

export const SEASON_OPTIONS = [
	{ id: "2023", name: "2023" },
	{ id: "2022", name: "2022" },
	{ id: "2021", name: "2021" },
];