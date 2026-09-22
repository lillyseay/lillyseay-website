# Working on the case studies

This branch (`case-studies`) holds the three app design case studies. It is
**not** on `main`, so nothing here is live. The deploy workflow only fires on a
push to `main`, so you can push this branch as often as you like without
touching lillyseay.com.

## Run it

```sh
git checkout case-studies
npm run dev          # http://localhost:4321/case-studies/
npm run dev:phone    # same, but reachable from your phone on the same wifi
```

`dev:phone` prints a `Network:` URL — open that on your phone. Worth doing:
phone width is the one thing that has never been checked on a real device.

## Where everything lives

| What you want to change | File |
|---|---|
| **All the words and numbers** | `src/data/caseStudies.ts` |
| Page structure, section order | `src/components/AppCase.astro` |
| Styling | `src/styles/global.css`, the `.bh-*` rules near the bottom |
| The index page listing all case studies | `src/pages/case-studies/index.astro` |
| The per-app page wrapper (prev/next, back link) | `src/pages/case-studies/[slug].astro` |
| Screenshots, character art, theme icons | `public/case-studies/<app>/` |

Almost every edit you want is in `caseStudies.ts`. The component and the CSS
only decide how that data is drawn.

## The five sections

Each case study renders in this order. Anything you leave out of the data is
skipped, and the section numbers renumber themselves.

1. **Hero + overview** — `lede`, `overview.stats` (these count up), `overview.facts`, `overview.problem`
2. **Target audience** — `audience.primary` (big figures) and `audience.adjacent`
3. **User research** — `research.note`, `research.quotes` (rendered as real comments), `research.findings`
4. **Design** — `design.screens`, `design.palette`, `design.typography`, `design.characters`, `design.themes`, `design.decisions`, `design.system`
5. **Marketing** — `marketing.cycle` (the timeline), `marketing.strategies`, `marketing.pipeline`, `marketing.results`

## Two conventions

**Headings split on a `|`.** Everything after the pipe drops to its own line in
the app's accent colour:

```ts
heading: "Social media is my|research instrument"
```

**Numbers animate automatically.** Any `value` in `overview.stats`,
`audience.primary` or `marketing.results` counts up on scroll. Prefixes,
suffixes and decimals survive, so `1.5B`, `533%`, `$75K`, `200+` and `4.3` all
work as written.

## Before you push

```sh
npm run build
```

The last line must say **`[build] Complete!`**. Astro prints
`✓ Completed in …ms` for intermediate steps even when the build later fails, so
don't stop at the first green tick — the CSS minifier in particular only runs
in the production build and has caught a broken rule that `npm run dev` was
happy with.

## Going live

When you are ready:

```sh
git checkout main
git merge case-studies
git push            # this deploys
```

Or open a pull request first:

```sh
gh pr create --base main --head case-studies --title "App design case studies"
```

## Still open

- Phone width has never been verified on a real device. The grids all collapse
  and the screen rows lose their perspective tilt below 720px, but it has only
  been checked by reading the CSS.
- Tappily's promo typeface is described by what it does, not by name. If you
  know what it is, it goes in `design.typography.faces` on the Tappily entry.
- The TikTok comments are lightly edited for spelling. Handles, like counts and
  reply counts are the real ones, pulled 2026-09-22.
