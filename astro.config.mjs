// @ts-check
import { defineConfig } from "astro/config";

// The site is served from the custom domain lillyseay.com (GitHub Pages, deployed by
// .github/workflows/deploy.yml), so everything lives at the root. public/CNAME keeps the
// domain attached to each deployment.
export default defineConfig({
  site: "https://lillyseay.com",
  base: "/",
});
