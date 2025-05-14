"use client";
import React, { useState, useEffect } from "react";
import { fetchTeamsByLeague } from "../../utils/mockapi";
import {
  TeamResponse,
  TeamStatistics,
  LEAGUE_OPTIONS,
} from "../../models/football";
import { TeamStatisticsProvider } from "../../contexts/TeamStatisticsContext";
import CompareTeamsContent from "../../components/CompareTeamsContent";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";

export default function CompareTeamsPage() {
  const [league, setLeague] = useState("");
  const [teams, setTeams] = useState<TeamResponse[]>([]);
  const [team1, setTeam1] = useState<string>("");
  const [team2, setTeam2] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [stats1, setStats1] = useState<TeamStatistics | null>(null);
  const [stats2, setStats2] = useState<TeamStatistics | null>(null);
  const { season } = useContext(SeasonContext);
  useEffect(() => {
    setTeam1("");
    setTeam2("");
    setStats1(null);
    setStats2(null);
    if (league) {
      fetchTeamsByLeague(league, season).then(setTeams);
    } else {
      setTeams([]);
    }
  }, [league]);

  return (
    <TeamStatisticsProvider>
      <CompareTeamsContent
        league={league}
        setLeague={setLeague}
        teams={teams}
        team1={team1}
        setTeam1={setTeam1}
        team2={team2}
        setTeam2={setTeam2}
        loading={loading}
        setLoading={setLoading}
        stats1={stats1}
        setStats1={setStats1}
        stats2={stats2}
        setStats2={setStats2}
      />
    </TeamStatisticsProvider>
  );
}
