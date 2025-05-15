'use client';
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { TeamResponse } from '../models/football';
import { fetchTeamsByLeague } from '../utils/api';
import { SeasonContext } from './SeasonContext';

interface TeamsContextType {
	selectedLeague: string;
	setSelectedLeague: (leagueId: string) => void;
	teams: TeamResponse[];
	loading: boolean;
	error: string | null;
}

export const TeamsContext = createContext<TeamsContextType>({
	selectedLeague: '39',
	setSelectedLeague: () => {},
	teams: [],
	loading: false,
	error: null,
});

interface TeamsProviderProps {
	children: ReactNode;
	initialLeague?: string;
}

export const TeamsProvider = ({
	children,
	initialLeague = '',
}: TeamsProviderProps) => {
	const [selectedLeague, setSelectedLeague] = useState(initialLeague);
	const [teams, setTeams] = useState<TeamResponse[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { season } = useContext(SeasonContext);

	useEffect(() => {
		if (!selectedLeague) {
			setTeams([]);
			setLoading(false);
			return;
		}
		setLoading(true);
		setError(null);
		fetchTeamsByLeague(selectedLeague, season)
			.then(setTeams)
			.catch(() => setError('Failed to fetch team stats.'))
			.finally(() => setLoading(false));
	}, [selectedLeague, season]);

	return (
		<TeamsContext.Provider
			value={{ selectedLeague, setSelectedLeague, teams, loading, error }}
		>
			{children}
		</TeamsContext.Provider>
	);
};
