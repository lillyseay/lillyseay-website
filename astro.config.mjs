// @ts-check
import { defineConfig } from "astro/config";

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repo". From that we derive:
//   site: https://<owner>.github.io
//   base: "/" for a user site (repo named <owner>.github.io), otherwise "/<repo>"
// Locally (no env var) the site builds at "/" so `npm run dev` just works.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isUserSite = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}` : "/",
});
