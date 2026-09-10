# ProductExplorer

ProductExplorer is a single-page web application for browsing a product catalog. It lets users search through a list of products by title, then click into a detail view to see the full description, price, category, and rating for a selected item.

## Features

- **Product catalog view** — browse all products in a responsive grid layout
- **Live search** — filter products by title as you type, with a result count indicator
- **Product detail view** — view an individual product's image, category, price, rating, and full description
- **Loading & error states** — dedicated loading spinner and error message components (with retry) for a smooth experience when data is fetching or a request fails
- **Client-side routing** — navigation between the catalog and product detail pages without full page reloads
 
## Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — static typing
- **[Vite](https://vite.dev/)** — build tool and dev server
- **[React Router](https://reactrouter.com/)** — client-side routing
- **[oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — linting
- **CSS** — plain, component-scoped stylesheets (no CSS framework)

## Project Structure

```
public/                     # Static assets served as-is
src/
├── api/
│   └── products.ts         # Functions for fetching product data
├── assets/                 # Images and other static assets used in-app
├── components/
│   ├── ErrorMessage.tsx     # Reusable error display with retry action
│   ├── ErrorMessage.css
│   ├── LoadingSpinner.tsx   # Reusable loading indicator
│   ├── LoadingSpinner.css
│   ├── ProductCard.tsx      # Product summary card used in the grid
│   ├── ProductCard.css
│   ├── SearchBar.tsx        # Search input with result count
│   └── SearchBar.css
├── pages/
│   ├── HomePage.tsx         # Catalog page: search + product grid
│   ├── HomePage.css
│   ├── ProductDetailPage.tsx  # Individual product detail page
│   └── ProductDetailPage.css
├── types/
│   └── product.ts           # Shared Product type definition
├── App.tsx                  # Root component (routes)
├── App.css
├── index.css                # Global styles
└── main.tsx                 # App entry point
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (recommended: latest LTS)
- npm (bundled with Node.js) — or another package manager such as pnpm/yarn if you prefer, adjusting commands accordingly

## Local Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd productexplorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Vite will print a local URL (typically `http://localhost:5173`) — open it in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

   This runs a TypeScript project build (`tsc -b`) followed by `vite build`, and outputs static assets to the `dist/` folder.

5. **Preview the production build locally**

   ```bash
   npm run preview
   ```

6. **Lint the code**

   ```bash
   npm run lint
   ```

## Available Scripts

| Script            | Description                                      |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Start the Vite development server with hot reload |
| `npm run build`   | Type-check and build the app for production        |
| `npm run lint`    | Run oxlint against the codebase                    |
| `npm run preview` | Preview the production build locally               |

