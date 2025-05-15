import { TeamStatisticsProvider } from '../contexts/TeamStatisticsContext';
import TeamStatsContent from '../components/TeamStatsContent';

interface TeamStatsContainerProps {
	leagueId: string;
	teamId: string;
}

// Server Component
export default function TeamStatsContainer({
	leagueId,
	teamId,
}: TeamStatsContainerProps) {
	return (
		<TeamStatisticsProvider>
			<TeamStatsContent leagueId={leagueId} teamId={teamId} />
		</TeamStatisticsProvider>
	);
}
