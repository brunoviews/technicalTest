import { useEffect, Dispatch, SetStateAction } from "react";
import EntitySelector from "./EntitySelector";
import TeamStatsCard from "./TeamStatsCard";
import { useTeamStatistics } from "../contexts/TeamStatisticsContext";
import {
  TeamResponse,
  TeamStatistics,
  LEAGUE_OPTIONS,
} from "../models/football";
import { SEASON_OPTIONS } from "../models/football";
import { SeasonContext } from "../contexts/SeasonContext";
import { useContext } from "react";

interface CompareTeamsContentProps {
  league: string;
  setLeague: Dispatch<SetStateAction<string>>;
  teams: TeamResponse[];
  team1: string;
  setTeam1: Dispatch<SetStateAction<string>>;
  team2: string;
  setTeam2: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  stats1: TeamStatistics | null;
  setStats1: Dispatch<SetStateAction<TeamStatistics | null>>;
  stats2: TeamStatistics | null;
  setStats2: Dispatch<SetStateAction<TeamStatistics | null>>;
}

export default function CompareTeamsContent({
  league,
  setLeague,
  teams,
  team1,
  setTeam1,
  team2,
  setTeam2,
  loading,
  setLoading,
  stats1,
  setStats1,
  stats2,
  setStats2,
}: CompareTeamsContentProps) {
  const { getTeamStatistics } = useTeamStatistics();
  const { season, setSeason } = useContext(SeasonContext);
  useEffect(() => {
    // Only fetch stats if selected teams exist in the current teams list
    const teamIds = teams.map((t) => t.team.id.toString());
    const validTeam1 = team1 && teamIds.includes(team1);
    const validTeam2 = team2 && teamIds.includes(team2);
    async function fetchStats() {
      setLoading(true);
      if (validTeam1) {
        setStats1(await getTeamStatistics(league, team1));
      } else {
        setStats1(null);
      }
      if (validTeam2) {
        setStats2(await getTeamStatistics(league, team2));
      } else {
        setStats2(null);
      }
      setLoading(false);
    }
    if (validTeam1 || validTeam2) fetchStats();
    else {
      setStats1(null);
      setStats2(null);
    }
  }, [team1, team2, teams, season]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-6 px-2 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl p-4 md:p-8 ">
        <div className="flex flex-col justify-center md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <EntitySelector
              entity="league"
              options={LEAGUE_OPTIONS}
              selectedId={league}
              onChange={setLeague}
            />
          </div>
          <div className="flex-1">
            <EntitySelector
              entity="season"
              options={SEASON_OPTIONS}
              selectedId={season}
              onChange={(id) => setSeason(id)}
            />
          </div>
        </div>

        {league && (
          <div className="flex flex-col justify-center md:flex-row gap-4 mb-6 ">
            <div className="flex-1">
              <label className="block mb-2  font-semibold text-gray-700">
                Team 1
              </label>
              <EntitySelector
                entity="team"
                options={teams.map((t) => ({
                  id: t.team.id.toString(),
                  name: t.team.name,
                }))}
                selectedId={team1}
                onChange={setTeam1}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-gray-700">
                Team 2
              </label>
              <EntitySelector
                entity="team"
                options={teams
                  .filter((t) => t.team.id.toString() !== team1)
                  .map((t) => ({
                    id: t.team.id.toString(),
                    name: t.team.name,
                  }))}
                selectedId={team2}
                onChange={setTeam2}
              />
            </div>
          </div>
        )}
        {loading && (
          <div className="text-center text-blue-600 font-medium py-8 animate-pulse">
            Loading stats...
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            {team1 && stats1 && (
              <TeamStatsCard
                stats={stats1}
                otherStats={stats2}
                label="Team 1"
              />
            )}
          </div>
          <div>
            {team2 && stats2 && (
              <TeamStatsCard
                stats={stats2}
                otherStats={stats1}
                label="Team 2"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
