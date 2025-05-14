import { TeamStatistics } from '../models/football';

export function calculateTeamAverages(stats: TeamStatistics) {
	const played = stats.fixtures?.played || { total: '-', home: '-', away: '-' };
	const goalsFor = stats.goals?.for?.total || {
		total: '-',
		home: '-',
		away: '-',
	};
	const goalsAgainst = stats.goals?.against?.total || {
		total: '-',
		home: '-',
		away: '-',
	};
	const safeDiv = (a: any, b: any) =>
		b && b !== '-' && a !== '-' && b !== 0 ? (a / b).toFixed(2) : '-';
	return {
		avgFor: {
			total: safeDiv(goalsFor.total, played.total),
			home: safeDiv(goalsFor.home, played.home),
			away: safeDiv(goalsFor.away, played.away),
		},
		avgAgainst: {
			total: safeDiv(goalsAgainst.total, played.total),
			home: safeDiv(goalsAgainst.home, played.home),
			away: safeDiv(goalsAgainst.away, played.away),
		},
	};
}
