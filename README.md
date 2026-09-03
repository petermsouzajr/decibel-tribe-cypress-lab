# Decibel Tribe — Cypress Lab

Practice **Cypress** end-to-end testing against the live **Decibel Tribe** web platform.

| | |
|--|--|
| **App under test (SUT)** | https://www.decibeltribe.com |
| **This repo** | Specs, page objects, fixtures, commands only |
| **App code** | [`decibel-tribe`](https://github.com/petermsouzajr/decibel-tribe) — do **not** put app PRs here |

## Why a separate repo?

Learners can fork, open PRs, and break tests safely without write access to production application code.

## Quick start

```bash
git clone https://github.com/petermsouzajr/decibel-tribe-cypress-lab.git
cd decibel-tribe-cypress-lab
npm install
cp cypress.env.json.example cypress.env.json   # fill test users if you have them
npm run cy:open                                 # interactive
npm run cy:run                                  # headless
```

Point at a local app (if you run decibel-tribe yourself):

```bash
npm run cy:open:local
# or
CYPRESS_BASE_URL=https://your-preview.vercel.app npm run cy:run
```

## Layout

```text
cypress/
  e2e/          # specs (ui / api / accessibility)
  pages/        # page objects
  fixtures/     # JSON fixtures
  support/      # commands, hooks
  factories/    # test data builders
cypress.config.ts
cypress.env.json.example
```

## Credentials

Never commit real passwords. Use `cypress.env.json` (gitignored) from the example file. Ask the lab owner for seeded test users.

## Sister lab

Playwright track: [`decibel-tribe-playwright-lab`](https://github.com/petermsouzajr/decibel-tribe-playwright-lab)
