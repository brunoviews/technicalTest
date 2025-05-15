'use client';
import React, { createContext, ReactNode, useContext } from 'react';
import { TeamStatistics } from '../models/football';
import { fetchTeamStatistics } from '../utils/api';
import { SeasonContext } from './SeasonContext';
interface TeamStatisticsContextType {
	getTeamStatistics: (
		leagueId: string,
		teamId: string,
	) => Promise<TeamStatistics>;
}

const TeamStatisticsContext = createContext<
	TeamStatisticsContextType | undefined
>(undefined);

export const TeamStatisticsProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const { season } = useContext(SeasonContext);
	const getTeamStatistics = async (leagueId: string, teamId: string) => {
		return fetchTeamStatistics(leagueId, teamId, season);
	};
	return (
		<TeamStatisticsContext.Provider value={{ getTeamStatistics }}>
			{children}
		</TeamStatisticsContext.Provider>
	);
};

export const useTeamStatistics = () => {
	const context = useContext(TeamStatisticsContext);
	if (!context) {
		throw new Error(
			'useTeamStatistics must be used within a TeamStatisticsProvider',
		);
	}
	return context;
};
