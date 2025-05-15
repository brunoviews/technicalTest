'use client';
import MobileNav from '../components/MobileNav';
import './globals.css';
import type { ReactNode } from 'react';
import { SeasonProvider } from '../contexts/SeasonContext';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-100 min-h-screen flex flex-col items-center">
				<SeasonProvider>
					<MobileNav />
					<main className="flex-1 w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 md:px-4 pb-20">
						{children}
					</main>
				</SeasonProvider>
			</body>
		</html>
	);
}
