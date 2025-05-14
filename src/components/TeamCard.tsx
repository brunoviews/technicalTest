'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { TeamResponse } from '../models/football';

interface TeamStatsProps {
  teams: TeamResponse[];
}

export default function TeamCard({ teams }: TeamStatsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const leagueId = searchParams.get('league') || '39';
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teams.map(({ team, venue }) => (
        <div
          key={team.id}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow border border-gray-100 cursor-pointer hover:bg-blue-50"
          onClick={() => router.push(`/team/${team.id}?league=${leagueId}`)}
          tabIndex={0}
          role="button"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/team/${team.id}?league=${leagueId}`); }}
        >
          <img
            src={team.logo}
            alt={team.name}
            className="w-16 h-16 mb-4 rounded-full shadow-md border-2 border-blue-100 bg-white object-contain p-1 aspect-square"
            style={{ background: 'white' }}
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{team.name}</h2>
          <ul className="w-full text-gray-600 text-base space-y-1 mb-2">
            <li><span className="font-semibold text-gray-700">Country:</span> {team.country}</li>
            <li><span className="font-semibold text-gray-700">Founded:</span> {team.founded}</li>
            <li><span className="font-semibold text-gray-700">Venue:</span> {venue.name}</li>
          </ul>
          <span className="inline-block mt-auto text-xs text-gray-400">{venue.city}</span>
        </div>
      ))}
    </div>
  );
}
