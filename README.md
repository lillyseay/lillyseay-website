# lillyseay-website

Personal website built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Deploy

Deployment is automatic. `.github/workflows/deploy.yml` builds and publishes the
site on every push to `main`.

One-time setup on GitHub:

1. Create a repository and push this project to its `main` branch.
2. In the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push (or run the workflow from the **Actions** tab). The site URL appears in the
   workflow summary.

The site URL and base path are derived automatically from the repository name in
`astro.config.mjs`:

- Repo named `<username>.github.io` → served at `https://<username>.github.io/`
- Any other repo name → served at `https://<username>.github.io/<repo>/`

Always prefix internal links and asset paths with `import.meta.env.BASE_URL` (see `src/layouts/Layout.astro`)
so links work in both cases.
