<!-- BRUNO'S SECTION START -->

1. I implemented a global context to manage the selected season, replacing the previous hardcoded approach. See [SeasonContext](https://vscode.dev/github/brunoviews/technicalTest/blob/master/src/contexts/SeasonContext.tsx).
   The [Layout](https://vscode.dev/github/brunoviews/technicalTest/blob/master/src/app/layout.tsx) now wraps the app with _SeasonProvider_, making the season accessible throughout the project.
   All API requests now use the selected season from context, ensuring consistency and flexibility.

2. EntitySelector: this component is now used for both league and season selection. I followed the same prop pattern for season options, which are centralized in _SEASON_OPTIONS_ for maintainability and reuse. [SEASON_OPTIONS](https://vscode.dev/github/brunoviews/technicalTest/blob/master/src/models/football.ts)

3. Team Comparison: To enable stat highlighting, I extended [TeamStatsCard](https://vscode.dev/github/brunoviews/technicalTest/blob/master/src/components/TeamStatsCard.tsx) to accept an _otherStats_ prop, so each card receives both its own and the opposing team's stats.

The _getStatColor_ function compares the relevant stats and applies color coding:

`Green for Better` for better,

# Red for worse,

[Blue] for a tie.
The boolean argument determines if "higher is better" (e.g., wins) or "lower is better" (e.g., losses).

4. State Reset on Context Change: I added a useEffect in [CompareTeamsContent.tsx](https://vscode.dev/github/brunoviews/technicalTest/blob/master/src/components/CompareTeamsContent.tsx) to reset selected teams whenever the league, season, or team list changes.
   This prevents stale or mismatched selections and ensures the correct data is always fetched and displayed.

5. The project uses a [.env.local](https://vscode.dev/github/brunoviews/technicalTest/blob/master/.env.local) file to securely store the API key and base URL.
   These are required for both local development and deployment (e.g., on Vercel).

6. Deployment: The project is ready and deployed on Vercel: [VercelLink](https://technical-test-livid.vercel.app/).


<!-- BRUNO'S SECTION END -->

# Next.js Football Teams Comparison App

This project is a web application built with Next.js and React that allows users to compare football teams from different leagues. It features team selectors, statistics comparison, and a clean, responsive UI using Tailwind CSS.

## Features

- Select a football league and compare statistics between two teams.
- Fetches and displays team data and statistics.
- Responsive design for desktop and mobile.
- Modular component structure and context-based state management.

## Project Structure

- `src/app/` - Main Next.js app directory (pages, API routes, global styles).
- `src/components/` - Reusable UI components (selectors, cards, etc.).
- `src/containers/` - Container components for managing data and state.
- `src/contexts/` - React context providers for teams and statistics.
- `src/models/` - TypeScript models and types.
- `src/utils/` - Utility functions and API logic.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the root directory (see below).
3. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

To run this project, you need to create a `.env.local` file in the root directory. The following environment variables may be required:

```
# Example .env.local
# API base URL for fetching football data
FOOTBALL_API_BASE_URL=https://your-api-base-url.com

# (Optional) API key for external football data provider
FOOTBALL_API_KEY=your_api_key_here
```

- `FOOTBALL_API_BASE_URL`: The base URL for your football data API (required if using a custom/external API).
- `FOOTBALL_API_KEY`: API key for authenticating with the football data provider (if required).

> All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and can be accessed in your frontend code.

## API Information

This project uses the [API-FOOTBALL](https://v3.football.api-sports.io) service to fetch football leagues, teams, and statistics data. You can find the official documentation and sign up for an API key at [https://www.api-football.com/](https://www.api-football.com/).

- **API Base URL:** https://v3.football.api-sports.io
- **Documentation & Sign Up:** https://www.api-football.com/

To use this API, you must register for an account and obtain an API key. Add your API key to your `.env.local` file as follows:

```
FOOTBALL_API_KEY=your_api_key_here
```

Refer to the [API-FOOTBALL documentation](https://www.api-football.com/documentation-v3) for details on available endpoints and usage limits.

If you run the app in `development` mode, the app will consume `mockapi` instead of the real API.

## License

MIT
