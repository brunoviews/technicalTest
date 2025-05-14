import { TeamResponse, TeamStatistics } from '../models/football';

const leagueTeams: Record<string, TeamResponse[]> = {
	'39': [
		{
			team: {
				id: 33,
				name: 'Manchester United',
				code: 'MUN',
				country: 'England',
				founded: 1878,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/33.png',
			},
			venue: {
				id: 556,
				name: 'Old Trafford',
				address: 'Sir Matt Busby Way',
				city: 'Manchester',
				capacity: 76212,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/556.png',
			},
		},
		{
			team: {
				id: 40,
				name: 'Liverpool',
				code: 'LIV',
				country: 'England',
				founded: 1892,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/40.png',
			},
			venue: {
				id: 550,
				name: 'Anfield',
				address: 'Anfield Road',
				city: 'Liverpool',
				capacity: 54074,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/550.png',
			},
		},
		{
			team: {
				id: 50,
				name: 'Manchester City',
				code: 'MCI',
				country: 'England',
				founded: 1880,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/50.png',
			},
			venue: {
				id: 555,
				name: 'Etihad Stadium',
				address: 'Rowsley St',
				city: 'Manchester',
				capacity: 55017,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/555.png',
			},
		},
		{
			team: {
				id: 49,
				name: 'Chelsea',
				code: 'CHE',
				country: 'England',
				founded: 1905,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/49.png',
			},
			venue: {
				id: 537,
				name: 'Stamford Bridge',
				address: 'Fulham Road',
				city: 'London',
				capacity: 41841,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/537.png',
			},
		},
		{
			team: {
				id: 47,
				name: 'Tottenham',
				code: 'TOT',
				country: 'England',
				founded: 1882,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/47.png',
			},
			venue: {
				id: 593,
				name: 'Tottenham Hotspur Stadium',
				address: '782 High Road',
				city: 'London',
				capacity: 62850,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/593.png',
			},
		},
		{
			team: {
				id: 42,
				name: 'Arsenal',
				code: 'ARS',
				country: 'England',
				founded: 1886,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/42.png',
			},
			venue: {
				id: 519,
				name: 'Emirates Stadium',
				address: 'Hornsey Road',
				city: 'London',
				capacity: 60260,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/519.png',
			},
		},
		{
			team: {
				id: 34,
				name: 'Newcastle',
				code: 'NEW',
				country: 'England',
				founded: 1892,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/34.png',
			},
			venue: {
				id: 562,
				name: "St. James' Park",
				address: 'Barrack Road',
				city: 'Newcastle upon Tyne',
				capacity: 52354,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/562.png',
			},
		},
		{
			team: {
				id: 51,
				name: 'Leicester',
				code: 'LEI',
				country: 'England',
				founded: 1884,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/51.png',
			},
			venue: {
				id: 546,
				name: 'King Power Stadium',
				address: 'Filbert Way',
				city: 'Leicester',
				capacity: 32312,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/546.png',
			},
		},
		{
			team: {
				id: 36,
				name: 'Everton',
				code: 'EVE',
				country: 'England',
				founded: 1878,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/36.png',
			},
			venue: {
				id: 556,
				name: 'Goodison Park',
				address: 'Goodison Road',
				city: 'Liverpool',
				capacity: 39572,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/556.png',
			},
		},
		{
			team: {
				id: 48,
				name: 'West Ham',
				code: 'WHU',
				country: 'England',
				founded: 1895,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/48.png',
			},
			venue: {
				id: 574,
				name: 'London Stadium',
				address: 'Marshgate Lane',
				city: 'London',
				capacity: 60000,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/574.png',
			},
		},
	],
	'140': [
		{
			team: {
				id: 529,
				name: 'Barcelona',
				code: 'BAR',
				country: 'Spain',
				founded: 1899,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/529.png',
			},
			venue: {
				id: 146,
				name: 'Spotify Camp Nou',
				address: "C. d'Arístides Maillol",
				city: 'Barcelona',
				capacity: 99354,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/146.png',
			},
		},
		{
			team: {
				id: 541,
				name: 'Real Madrid',
				code: 'RMA',
				country: 'Spain',
				founded: 1902,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/541.png',
			},
			venue: {
				id: 155,
				name: 'Santiago Bernabéu',
				address: 'Avenida de Concha Espina 1',
				city: 'Madrid',
				capacity: 81044,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/155.png',
			},
		},
		{
			team: {
				id: 530,
				name: 'Atlético Madrid',
				code: 'ATL',
				country: 'Spain',
				founded: 1903,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/530.png',
			},
			venue: {
				id: 149,
				name: 'Cívitas Metropolitano',
				address: 'Avenida de Luis Aragonés',
				city: 'Madrid',
				capacity: 68456,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/149.png',
			},
		},
		{
			team: {
				id: 536,
				name: 'Sevilla',
				code: 'SEV',
				country: 'Spain',
				founded: 1890,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/536.png',
			},
			venue: {
				id: 153,
				name: 'Ramón Sánchez Pizjuán',
				address: 'Calle Sevilla Fútbol Club',
				city: 'Sevilla',
				capacity: 43883,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/153.png',
			},
		},
		{
			team: {
				id: 543,
				name: 'Betis',
				code: 'BET',
				country: 'Spain',
				founded: 1907,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/543.png',
			},
			venue: {
				id: 154,
				name: 'Benito Villamarín',
				address: 'Avenida de Heliópolis',
				city: 'Sevilla',
				capacity: 60721,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/154.png',
			},
		},
		{
			team: {
				id: 533,
				name: 'Villarreal',
				code: 'VIL',
				country: 'Spain',
				founded: 1923,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/533.png',
			},
			venue: {
				id: 151,
				name: 'Estadio de la Cerámica',
				address: 'Calle Blasco Ibáñez',
				city: 'Villarreal',
				capacity: 23500,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/151.png',
			},
		},
		{
			team: {
				id: 538,
				name: 'Real Sociedad',
				code: 'SOC',
				country: 'Spain',
				founded: 1909,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/538.png',
			},
			venue: {
				id: 152,
				name: 'Reale Arena',
				address: 'Paseo de Anoeta',
				city: 'San Sebastián',
				capacity: 39800,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/152.png',
			},
		},
		{
			team: {
				id: 531,
				name: 'Athletic Club',
				code: 'ATH',
				country: 'Spain',
				founded: 1898,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/531.png',
			},
			venue: {
				id: 150,
				name: 'San Mamés',
				address: 'Rafael Moreno Pitxitxi',
				city: 'Bilbao',
				capacity: 53289,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/150.png',
			},
		},
		{
			team: {
				id: 728,
				name: 'Getafe',
				code: 'GET',
				country: 'Spain',
				founded: 1983,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/728.png',
			},
			venue: {
				id: 156,
				name: 'Coliseum Alfonso Pérez',
				address: 'Avenida Teresa de Calcuta',
				city: 'Getafe',
				capacity: 17393,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/156.png',
			},
		},
		{
			team: {
				id: 720,
				name: 'Celta Vigo',
				code: 'CEL',
				country: 'Spain',
				founded: 1923,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/720.png',
			},
			venue: {
				id: 158,
				name: 'Abanca-Balaídos',
				address: 'Avenida de Balaídos',
				city: 'Vigo',
				capacity: 29000,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/158.png',
			},
		},
	],
	'135': [
		{
			team: {
				id: 496,
				name: 'Juventus',
				code: 'JUV',
				country: 'Italy',
				founded: 1897,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/496.png',
			},
			venue: {
				id: 210,
				name: 'Allianz Stadium',
				address: 'Corso Gaetano Scirea 50',
				city: 'Torino',
				capacity: 41507,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/210.png',
			},
		},
		{
			team: {
				id: 489,
				name: 'Inter',
				code: 'INT',
				country: 'Italy',
				founded: 1908,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/489.png',
			},
			venue: {
				id: 208,
				name: 'Giuseppe Meazza',
				address: 'Via Piccolomini 5',
				city: 'Milano',
				capacity: 80018,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/208.png',
			},
		},
		{
			team: {
				id: 497,
				name: 'Milan',
				code: 'MIL',
				country: 'Italy',
				founded: 1899,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/497.png',
			},
			venue: {
				id: 208,
				name: 'Giuseppe Meazza',
				address: 'Via Piccolomini 5',
				city: 'Milano',
				capacity: 80018,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/208.png',
			},
		},
		{
			team: {
				id: 500,
				name: 'Roma',
				code: 'ROM',
				country: 'Italy',
				founded: 1927,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/500.png',
			},
			venue: {
				id: 212,
				name: 'Stadio Olimpico',
				address: 'Viale dei Gladiatori',
				city: 'Roma',
				capacity: 72698,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/212.png',
			},
		},
		{
			team: {
				id: 502,
				name: 'Napoli',
				code: 'NAP',
				country: 'Italy',
				founded: 1926,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/502.png',
			},
			venue: {
				id: 214,
				name: 'Diego Armando Maradona',
				address: 'Piazzale Vincenzo Tecchio',
				city: 'Napoli',
				capacity: 54726,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/214.png',
			},
		},
		{
			team: {
				id: 488,
				name: 'Lazio',
				code: 'LAZ',
				country: 'Italy',
				founded: 1900,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/488.png',
			},
			venue: {
				id: 212,
				name: 'Stadio Olimpico',
				address: 'Viale dei Gladiatori',
				city: 'Roma',
				capacity: 72698,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/212.png',
			},
		},
		{
			team: {
				id: 498,
				name: 'Fiorentina',
				code: 'FIO',
				country: 'Italy',
				founded: 1926,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/498.png',
			},
			venue: {
				id: 213,
				name: 'Artemio Franchi',
				address: 'Viale Manfredo Fanti',
				city: 'Firenze',
				capacity: 43147,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/213.png',
			},
		},
		{
			team: {
				id: 487,
				name: 'Atalanta',
				code: 'ATA',
				country: 'Italy',
				founded: 1907,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/487.png',
			},
			venue: {
				id: 209,
				name: 'Gewiss Stadium',
				address: 'Viale Giulio Cesare',
				city: 'Bergamo',
				capacity: 21300,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/209.png',
			},
		},
		{
			team: {
				id: 503,
				name: 'Torino',
				code: 'TOR',
				country: 'Italy',
				founded: 1906,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/503.png',
			},
			venue: {
				id: 210,
				name: 'Stadio Olimpico Grande Torino',
				address: 'Via Filadelfia',
				city: 'Torino',
				capacity: 27994,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/210.png',
			},
		},
		{
			team: {
				id: 499,
				name: 'Sampdoria',
				code: 'SAM',
				country: 'Italy',
				founded: 1946,
				national: false,
				logo: 'https://media.api-sports.io/football/teams/499.png',
			},
			venue: {
				id: 211,
				name: 'Luigi Ferraris',
				address: 'Via Giovanni de Prà',
				city: 'Genova',
				capacity: 36599,
				surface: 'grass',
				image: 'https://media.api-sports.io/football/venues/211.png',
			},
		},
	],
};

export async function fetchTeamsByLeague(
	leagueId: string,
	season: string
): Promise<TeamResponse[]> {
	return leagueTeams[leagueId] || [];
}

export async function fetchTeamStatistics(
	leagueId: string,
	teamId: string,
	season: string
): Promise<TeamStatistics> {
	if (!leagueId) {
		throw new Error('[mockapi] No leagueId provided to fetchTeamStatistics');
	}
	if (!teamId) {
		throw new Error('[mockapi] No teamId provided to fetchTeamStatistics');
	}
	const leagueArr = leagueTeams[String(leagueId)] || [];
	const teamEntry = leagueArr.find((t) => String(t.team.id) === String(teamId));
	if (!teamEntry) {
		throw new Error(
			`[mockapi] Team not found in mock data for leagueId=${leagueId}, teamId=${teamId}. Available team ids: ${leagueArr
				.map((t) => t.team.id)
				.join(', ')}`
		);
	}
	console.log('[mockapi] fetchTeamStatistics', {
		leagueId,
		teamId,
		leagueTeams: leagueTeams[leagueId]?.map((t) => t.team.id),
	});
	console.log('[mockapi] found teamEntry:', teamEntry);
	return {
		league: {
			id: Number(leagueId),
			name:
				leagueId === '39'
					? 'Premier League'
					: leagueId === '140'
					? 'La Liga'
					: 'Serie A',
			country:
				leagueId === '39' ? 'England' : leagueId === '135' ? 'Italy' : 'Spain',
			logo: `https://media.api-sports.io/football/leagues/${leagueId}.png`,
			season: season,
		},
		team: teamEntry.team,
		form: 'WWDLW',
		fixtures: {
			played: { total: 30, home: 15, away: 15 },
			wins: { total: 18, home: 10, away: 8 },
			draws: { total: 6, home: 3, away: 3 },
			loses: { total: 6, home: 2, away: 4 },
		},
		goals: {
			for: { total: { total: 60, home: 35, away: 25 } },
			against: { total: { total: 30, home: 10, away: 20 } },
			average: {},
		},
		biggest: {},
		clean_sheet: { total: 10, home: 6, away: 4 },
		failed_to_score: { total: 5, home: 2, away: 3 },
		penalty: {},
		lineups: [],
		cards: {},
	};
}
