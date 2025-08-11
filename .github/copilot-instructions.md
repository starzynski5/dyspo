# Copilot Instructions for dyspo

## Project Overview
- This is a Next.js project (App Router, TypeScript) bootstrapped with `create-next-app`.
- Main UI logic is in `src/app/`, with subfolders for `components/`, `modules/`, `fonts/`, and `scripts/`.
- Uses Material UI (`@mui/material`) for UI components and theming.
- Custom fonts (Geist) are loaded via `next/font` and stored in `src/app/fonts/`.

## Key Files & Structure
- `src/app/layout.tsx`: Root layout, applies global styles and providers.
- `src/app/page.tsx`: Main landing page.
- `src/app/components/ClientThemeProvider.tsx`: Handles MUI theming and color mode.
- `src/app/modules/`: Contains feature modules (e.g., `Dashboard.tsx`, `Navbar.tsx`).
- `src/app/scripts/theme.ts`: Theme configuration and helpers.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Hot reload:** All changes in `src/app/` auto-update in the browser.
- **No custom build/test scripts** beyond Next.js defaults (see `README.md`).

## Patterns & Conventions
- **Component organization:**
  - `components/` for shared UI logic (e.g., theming, providers)
  - `modules/` for feature-specific UI (e.g., dashboard, navbar)
- **Material UI:**
  - Use `@mui/material` components for all UI; theme via `ClientThemeProvider`.
  - Import MUI hooks/components directly (e.g., `import useMediaQuery from '@mui/material/useMediaQuery'`).
- **Styling:**
  - Global styles in `globals.scss`.
  - Component/module styles in `.module.css` files.
- **Routing:**
  - Next.js App Router structure; pages/components live under `src/app/`.

## Integration & External Dependencies
- **Material UI**: All theming and responsive logic should use MUI APIs.
- **Next.js**: Use built-in routing, font, and image optimization features.
- **No custom API/backend logic** present in this repo as of now.

## Examples
- To add a new feature module, create a file in `src/app/modules/` and import it in `page.tsx` or another module.
- To update the theme, edit `ClientThemeProvider.tsx` and/or `scripts/theme.ts`.

## Troubleshooting
- If you see errors like `unstable_createUseMediaQuery is not a function`, check your MUI version and import paths.
- For new dependencies, prefer the latest stable versions compatible with Next.js 14+ and MUI 5+.

---

For more, see `README.md` or Next.js/MUI docs. Update this file as project structure evolves.
