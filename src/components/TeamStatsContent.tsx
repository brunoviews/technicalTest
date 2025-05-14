'use client';
import { useState, useEffect } from 'react';
import { useTeamStatistics } from '../contexts/TeamStatisticsContext';
import { TeamStatistics } from '../models/football';
import Link from 'next/link';
import { calculateTeamAverages } from '../utils/calculations';


interface TeamStatsContentProps {
  leagueId: string;
  teamId: string;
}

export default function TeamStatsContent({ leagueId, teamId }: TeamStatsContentProps) {
  const { getTeamStatistics } = useTeamStatistics();
  const [stats, setStats] = useState<TeamStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getTeamStatistics(leagueId, teamId)
      .then((data) => { if (mounted) { setStats(data); setLoading(false); } })
      .catch(() => { if (mounted) { setError('Failed to load team statistics.'); setLoading(false); } });
    return () => { mounted = false; };
  }, [getTeamStatistics, leagueId, teamId]);

  if (loading) {
    return <div className="max-w-2xl mx-auto py-12 text-center text-blue-600 font-semibold animate-pulse">Loading team statistics...</div>;
  }
  if (error || !stats) {
    return <div className="max-w-2xl mx-auto py-12 text-center text-red-600 font-semibold">{error}</div>;
  }

  const fixtures = stats.fixtures || {};
  const played = fixtures.played || { total: '-', home: '-', away: '-' };
  const wins = fixtures.wins || { total: '-', home: '-', away: '-' };
  const draws = fixtures.draws || { total: '-', home: '-', away: '-' };
  const loses = fixtures.loses || { total: '-', home: '-', away: '-' };
  const goals = stats.goals || { for: { total: {} }, against: { total: {} } };
  const goalsFor = goals.for?.total || { total: '-', home: '-', away: '-' };
  const goalsAgainst = goals.against?.total || { total: '-', home: '-', away: '-' };
  const { avgFor, avgAgainst } = calculateTeamAverages(stats);

  const StatRow = ({ label, all, home, away }: { label: string, all: any, home: any, away: any }) => (
    <tr className="border-b">
      <td className="py-2 px-4 font-medium text-gray-700 w-1/3 text-left">{label}</td>
      <td className="py-2 px-4 text-center w-1/6">{all}</td>
      <td className="py-2 px-4 text-center w-1/6">{home}</td>
      <td className="py-2 px-4 text-center w-1/6">{away}</td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8">
        <Link href={`/?league=${leagueId}`} className="inline-block mb-6 text-blue-600 hover:underline font-semibold">&larr; Back to teams</Link>
        <div className="flex flex-col items-center mb-8">
          <img src={stats.team.logo} alt={stats.team.name} className="w-20 h-20 rounded-full shadow mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{stats.team.name}</h1>
          <div className="text-gray-600">{stats.league.name} ({stats.league.season})</div>
        </div>
        <div className="space-y-8">
          {/* SECTION 1: GAMES */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Games</h2>
            <table className="w-full border rounded-lg overflow-hidden mb-4">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4 text-left w-1/3">Stat</th>
                  <th className="py-2 px-4 text-center w-1/6">ALL</th>
                  <th className="py-2 px-4 text-center w-1/6">HOME</th>
                  <th className="py-2 px-4 text-center w-1/6">AWAY</th>
                </tr>
              </thead>
              <tbody>
                <StatRow label="Played" all={played.total} home={played.home} away={played.away} />
                <StatRow label="Wins" all={wins.total} home={wins.home} away={wins.away} />
                <StatRow label="Draws" all={draws.total} home={draws.home} away={draws.away} />
                <StatRow label="Losses" all={loses.total} home={loses.home} away={loses.away} />
              </tbody>
            </table>
          </div>
          {/* SECTION 2: GOALS */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Goals</h2>
            <table className="w-full border rounded-lg overflow-hidden mb-4">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4 text-left w-1/3">Stat</th>
                  <th className="py-2 px-4 text-center w-1/6">ALL</th>
                  <th className="py-2 px-4 text-center w-1/6">HOME</th>
                  <th className="py-2 px-4 text-center w-1/6">AWAY</th>
                </tr>
              </thead>
              <tbody>
                <StatRow label="Goals For" all={goalsFor.total} home={goalsFor.home} away={goalsFor.away} />
                <StatRow label="Goals Against" all={goalsAgainst.total} home={goalsAgainst.home} away={goalsAgainst.away} />
              </tbody>
            </table>
          </div>
          {/* SECTION 3: GOALS AVERAGE */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Goals Average</h2>
            <table className="w-full border rounded-lg overflow-hidden">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4 text-left w-1/3">Stat</th>
                  <th className="py-2 px-4 text-center w-1/6">ALL</th>
                  <th className="py-2 px-4 text-center w-1/6">HOME</th>
                  <th className="py-2 px-4 text-center w-1/6">AWAY</th>
                </tr>
              </thead>
              <tbody>
                <StatRow label="Avg Goals For" all={avgFor.total} home={avgFor.home} away={avgFor.away} />
                <StatRow label="Avg Goals Against" all={avgAgainst.total} home={avgAgainst.home} away={avgAgainst.away} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
