'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TeamsProvider } from '../contexts/TeamsContext';
import TeamsListContent from '../components/TeamsListContent';

export default function TeamListContainer() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const leagueFromUrl = searchParams.get('league') || '';
	const [initialLeague, setInitialLeague] = useState(leagueFromUrl);

	useEffect(() => {
		setInitialLeague(leagueFromUrl);
	}, [leagueFromUrl]);

	// Custom setter to update both context and URL
	const handleSetLeague =
		(setSelectedLeague: (id: string) => void) => (leagueId: string) => {
			setSelectedLeague(leagueId);
			const params = new URLSearchParams(window.location.search);
			if (leagueId) {
				params.set('league', leagueId);
			} else {
				params.delete('league');
			}
			router.replace(`?${params.toString()}`);
		};

	return (
		<TeamsProvider initialLeague={initialLeague}>
			<TeamsListContent handleSetLeague={handleSetLeague} />
		</TeamsProvider>
	);
}
