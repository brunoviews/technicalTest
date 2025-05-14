import { TeamStatistics } from '../models/football';

interface TeamStatsCardProps {
  stats: TeamStatistics;
  otherStats?: TeamStatistics | null;
  label: string;
}

function getStatColor(value: number, otherValue: number, higherIsBetter: boolean) {
  if (otherValue === undefined || otherValue === null) return '';
  if (value === otherValue) return 'text-blue-600';
  if (higherIsBetter) return value > otherValue ? 'text-green-600' : 'text-red-600';
  return value < otherValue ? 'text-green-600' : 'text-red-600';
}

export default function TeamStatsCard({ stats, otherStats, label }: TeamStatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <span className="text-xs text-gray-400 mb-1">{label}</span>
      <img src={stats.team.logo} alt={stats.team.name} className="w-14 h-14 rounded-full object-contain bg-white border mb-2" />
      <div className="font-bold text-lg text-center mb-1">{stats.team.name}</div>
      <div className="text-sm text-gray-500 mb-2">{stats.league.name} ({stats.league.season})</div>
      <table className="w-full text-sm mb-2">
        <tbody>
          <tr><td className="font-semibold">Played</td><td className={otherStats ? getStatColor(stats.fixtures.played.total, otherStats.fixtures.played.total, true): ''}>{stats.fixtures.played.total}</td></tr>
          <tr><td className="font-semibold">Wins</td><td className={otherStats ? getStatColor(stats.fixtures.wins.total, otherStats.fixtures.wins.total, true) : ''}>{stats.fixtures.wins.total}</td></tr>
          <tr><td className="font-semibold">Draws</td><td className={otherStats ? getStatColor(stats.fixtures.draws.total, otherStats.fixtures.draws.total, true): ''} >{stats.fixtures.draws.total}</td></tr>
          <tr><td className="font-semibold">Losses</td><td className={otherStats ? getStatColor(stats.fixtures.loses.total, otherStats.fixtures.loses.total, false) : ''}>{stats.fixtures.loses.total}</td></tr>
          <tr><td className="font-semibold">Goals For</td><td className={otherStats ? getStatColor(stats.goals.for.total.total, otherStats.goals.for.total.total, true) : ''}>{stats.goals.for.total.total}</td></tr>
          <tr><td className="font-semibold">Goals Against</td><td className={otherStats ? getStatColor(stats.goals.against.total.total, otherStats.goals.against.total.total, false) : ''}>{stats.goals.against.total.total}</td></tr>
          <tr><td className="font-semibold">Clean Sheets</td><td className={otherStats ? getStatColor(stats.clean_sheet.total, otherStats.clean_sheet.total, true) : ''}> {stats.clean_sheet.total}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
