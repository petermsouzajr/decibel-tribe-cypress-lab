# Decibel Tribe — Cypress Lab

Practice **Cypress** end-to-end testing against the live **Decibel Tribe** web platform.

| | |
|--|--|
| **App under test (SUT)** | https://www.decibeltribe.com |
| **This repo** | Specs, page objects, fixtures, commands only |
| **App code** | [`decibel-tribe`](https://github.com/petermsouzajr/decibel-tribe) — **do not** put app PRs here |

## Why a separate repo?

Learners fork, open PRs, and break tests safely without write access to production application code.

## Quick start

```bash
git clone https://github.com/petermsouzajr/decibel-tribe-cypress-lab.git
cd decibel-tribe-cypress-lab
npm install
cp cypress.env.json.example cypress.env.json   # fill test users from instructor
npm run cy:open                                 # interactive
npm run cy:run                                  # headless
```

Local or preview app:

```bash
npm run cy:open:local
# or
CYPRESS_BASE_URL=https://your-preview.vercel.app npm run cy:run
```

**New here?** → **[docs/FIRST_TEST.md](./docs/FIRST_TEST.md)** (15 minutes to green).

## Student docs

| Doc | Purpose |
|-----|---------|
| [docs/FIRST_TEST.md](./docs/FIRST_TEST.md) | First green test |
| [docs/LAB_CONTRACT.md](./docs/LAB_CONTRACT.md) | Stable vs deprecated areas (read before homework) |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Branches, PR rules, naming, credentials |
| [cypress/CYPRESS_TEST_WRITING_GUIDE.md](./cypress/CYPRESS_TEST_WRITING_GUIDE.md) | How we structure specs + POMs |
| [cypress/CYPRESS_DEBUGGING_WORKFLOW.md](./cypress/CYPRESS_DEBUGGING_WORKFLOW.md) | Debugging + flake |
| [cypress/README.md](./cypress/README.md) | Suite overview |

## Layout

```text
cypress/
  e2e/           # ui / api / accessibility specs
  pages/         # page objects
  fixtures/      # JSON fixtures
  support/       # commands + hooks
  factories/     # test data builders
cypress.config.ts
cypress.env.json.example
docs/
CONTRIBUTING.md
```

## Credentials

Never commit real passwords. Use gitignored `cypress.env.json` from the example. Ask the lab owner for seeded users.

## Scripts

| Script | What |
|--------|------|
| `npm run cy:open` | Interactive runner (lab URL) |
| `npm run cy:run` | Headless |
| `npm run cy:smoke` | Specs tagged `[smoke]` (grep) |
| `npm run cy:open:local` | `http://localhost:3000` |
| `npm run cy:types` | Typecheck Cypress TS |

## Sister lab

Playwright track: [decibel-tribe-playwright-lab](https://github.com/petermsouzajr/decibel-tribe-playwright-lab)
