import TeamStatsContainer from '../../../containers/TeamStatsContainer';

interface TeamStatsPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    league: string;
  }>;
}
export default async function Page({ params, searchParams }: TeamStatsPageProps) {
  const { id } = await params;
  const { league } = await searchParams;
  return <TeamStatsContainer leagueId={league} teamId={id} />;
}
