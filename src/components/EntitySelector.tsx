'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface EntitySelectorProps {
	entity: string;
	options: { id: string; name: string }[];
	selectedId: string;
	onChange: (id: string) => void;
}

export default function EntitySelector({
	entity,
	options,
	selectedId,
	onChange,
}: EntitySelectorProps) {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const selected = options.find((o) => o.id === selectedId);

	// Close dropdown on outside click
	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (
				!buttonRef.current?.contains(e.target as Node) &&
				!listRef.current?.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		if (open) {
			document.addEventListener('mousedown', handleClick);
		} else {
			document.removeEventListener('mousedown', handleClick);
		}
		return () => document.removeEventListener('mousedown', handleClick);
	}, [open]);

	// Keyboard navigation
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') setOpen(false);
	}

	return (
		<div className="relative mb-6 w-full md:w-80">
			<label className="block mb-2 text-base font-semibold text-gray-700">
				Select {entity}:
			</label>
			<button
				ref={buttonRef}
				type="button"
				className="w-full flex justify-between items-center px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
				onClick={() => setOpen((o) => !o)}
				aria-haspopup="listbox"
				aria-expanded={open}
			>
				<span>{selected?.name || `Select a ${entity}`}</span>
				<svg
					className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{open && (
				<ul
					ref={listRef}
					tabIndex={-1}
					className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none"
					role="listbox"
					onKeyDown={handleKeyDown}
				>
					{options.map((option) => (
						<li
							key={option.id}
							role="option"
							aria-selected={selectedId === option.id}
							className={`px-4 py-3 cursor-pointer text-lg hover:bg-blue-50 transition flex items-center ${selectedId === option.id ? 'bg-blue-100 font-semibold text-blue-700' : 'text-gray-800'}`}
							onClick={() => {
								onChange(option.id);
								setOpen(false);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									onChange(option.id);
									setOpen(false);
								}
							}}
						>
							{option.name}
							{selectedId === option.id && (
								<svg
									className="w-4 h-4 ml-2 text-blue-500"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
