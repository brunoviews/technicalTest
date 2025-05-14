# Copilot Instructions: Next.js Best Practices

## General

- Use TypeScript for all files and components.
- Prefer functional components and React hooks.
- Keep code modular and reusable.
- Use absolute imports from the `src` directory.
- Avoid using `any` type; prefer explicit types and interfaces.

## File & Folder Structure

- Organize code into the following folders under `src`: `api`, `assets`, `components`, `containers`, `contexts`, `globals`, `guards`, `hooks`, `i18n`, `model`, `pages`, `stories`, `styles`, `utils`.
- Place shared UI components in `components` and page-level containers in `containers`.
- Store global styles in `globals` and utility functions in `utils`.

## imports

- Use named imports for components and hooks.

## Styling

- Use Tailwind CSS for all styling.
- Add Tailwind classes directly to JSX elements.
- Avoid inline styles and CSS modules unless necessary.

## Data Fetching

- Use Next.js `fetch` for API requests.
- Prefer server-side data fetching (`getServerSideProps`, `getStaticProps`) when possible.
- Use SWR or React Query for client-side data fetching if needed.

## Routing & Pages

- Use the App Router (`src/app`) for routing.
- Place page components in the `pages` or `app` directory as per Next.js conventions.
- Use dynamic routes and catch-all routes as needed.

## API Routes

- Use API routes for server-side logic and data fetching.
- Place API routes in the `src/pages/api` directory.
- Use TypeScript for API route handlers.

## Components pattern

- Use a consistent naming convention for components (PascalCase).
- USe function declaration + default export pattern for components.

## State Management

- Use React Context for global state when necessary.
- Prefer local state and hooks for component-specific state.

## Testing

- Write unit tests with Jest and React Testing Library.
- Place test files alongside the components or in a `__tests__` folder.

## Storybook

- Use Storybook for UI component development and documentation.
- Place stories in the `stories` folder or alongside components.

## Accessibility & SEO

- Use semantic HTML elements.
- Add `alt` attributes to images and `aria` attributes where appropriate.
- Use the `metadata` export for SEO in page components.

## Performance

- Use Next.js Image component for optimized images.
- Use dynamic imports for code splitting when needed.
- Avoid unnecessary re-renders and large dependencies.

## Miscellaneous

- Use environment variables for configuration/secrets.
- Keep the codebase clean and remove unused code/files.
- Follow Prettier and ESLint rules for code formatting and linting.
