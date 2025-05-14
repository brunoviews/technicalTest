import { useContext } from "react";
import EntitySelector from "./EntitySelector";
import TeamCard from "./TeamCard";
import { TeamsContext } from "../contexts/TeamsContext";
import { LEAGUE_OPTIONS } from "../models/football";
import { SeasonContext } from "../contexts/SeasonContext";
import { SEASON_OPTIONS } from "../models/football";

interface TeamsListContentProps {
  handleSetLeague: (
    setSelectedLeague: (id: string) => void
  ) => (leagueId: string) => void;
}



export default function TeamsListContent({
  handleSetLeague,
}: TeamsListContentProps) {
  const { selectedLeague, setSelectedLeague, teams, loading, error } =
    useContext(TeamsContext);

  const { season, setSeason } = useContext(SeasonContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4">
      <div className="max-w-5xl  mx-auto">
        <div className="bg-white/80  shadow-xl p-8 mb-8 backdrop-blur-md rounded-2xl">
          <EntitySelector
            entity="league"
            options={LEAGUE_OPTIONS}
            selectedId={selectedLeague}
            onChange={handleSetLeague(setSelectedLeague)}
          />
          <EntitySelector
            entity="season"
            options={SEASON_OPTIONS}
            selectedId={season}
            onChange={(id) => setSeason(id)}
          />
          {loading && (
            <div className="text-center text-blue-600 font-medium py-8 animate-pulse">
              Loading...
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 font-semibold py-8">
              {error}
            </div>
          )}
          {!loading && !error && <TeamCard teams={teams} />}
        </div>
      </div>
    </div>
  );
}
