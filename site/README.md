# diegoazuela.com

The website, built with [Astro](https://astro.build). Static output, deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

Run everything from this `site/` directory.

```sh
npm install        # first time
npm run dev         # live preview at http://localhost:4321
npm run build       # static output into site/dist/
npm run preview     # serve the built site
npm run cv:pdf      # regenerate public/cv/Diego-Azuela-CV.pdf from /cv/print
```

On Windows PowerShell, if `npm` is blocked by the execution policy, either run
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or use `npm.cmd`.

## Where things live

| Path | What |
|---|---|
| `src/pages/` | one file per route (`index.astro` = `/`) |
| `src/layouts/Base.astro` | shared HTML shell, nav, footer, scroll-reveal |
| `src/components/` | reusable pieces (`SiteNav`, `Footer`, `Icon`, `CvBody`, `PageHeader`) |
| `src/data/*.ts` | all content — CV, work, publications, museums, books, concerts, quotes, projects, interests |
| `src/styles/global.css` | design tokens (colours, type scale, motion) |
| `public/` | static assets served as-is — fonts, `media/`, `cv/`, `CNAME`, `robots.txt` |
| `scripts/generate-cv-pdf.mjs` | renders `/cv/print` to the downloadable PDF |

## Add content

- **Book:** add to `src/data/books.ts`; drop the cover in `public/media/books/<slug>.jpg`.
- **Museum piece:** add to the `pieces` array of that museum in `src/data/museums.ts`.
- **Concert / painting / project:** edit the matching `src/data/*.ts` and add any
  image under `public/media/`.
