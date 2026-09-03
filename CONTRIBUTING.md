# Contributing — Cypress Lab

Thanks for practicing on Decibel Tribe. This repo is **tests only**. Application code lives in [`decibel-tribe`](https://github.com/petermsouzajr/decibel-tribe).

## Rules

1. **Do not** open PRs against the app repo for homework unless the instructor asks.
2. **Never commit** `cypress.env.json`, passwords, tokens, or real user data.
3. Prefer **Page Objects** + custom commands over raw selectors in every `it`.
4. Keep tests **independent** — set up in `beforeEach`, don’t rely on run order.
5. One focused behavior per `it` when you can.

## Branch + PR

```bash
git checkout -b exercise/your-name-short-topic
# write tests
npm run cy:run   # or cy:open while developing
git add -A
git commit -m "test: add login invalid-password exercise"
git push -u origin HEAD
```

Open a PR into `main` with:

- What flow you covered
- How you ran it (`cy:open` / `cy:run` / smoke)
- Any flake or SUT bugs you noticed

## Naming conventions

```ts
describe("[AuthTeam] Login Page Functionality [smoke]", () => {
  it("displays an error when password is wrong", () => { ... });
});
```

| Piece | Example | Meaning |
|-------|---------|---------|
| `[Team]` | `[AuthTeam]`, `[SocialTeam]` | Owner / course track |
| Feature | `Login Page Functionality` | Area under test |
| Tag | `[smoke]`, `[functional]`, `[a11y]` | Suite filter |
| Case id (optional) | `[C313433]` | External case id |

Smoke filter:

```bash
npm run cy:smoke
```

## Where to put files

| Kind | Path |
|------|------|
| UI specs | `cypress/e2e/ui/<feature>/*.cy.ts` |
| API specs | `cypress/e2e/api/<feature>/*.cy.ts` |
| A11y specs | `cypress/e2e/accessibility/<feature>/*.cy.ts` |
| Page objects | `cypress/pages/<feature>/*Page.ts` |
| Fixtures | `cypress/fixtures/<feature>/*.json` |
| Commands | `cypress/support/commands.ts`, `apiCommands.ts` |

## Credentials

1. Copy `cypress.env.json.example` → `cypress.env.json` (gitignored).
2. Ask the lab owner for seeded users, **or** use only public unauthenticated flows until you have them.
3. Prefer `Cypress.env("verifiedUser")` over hardcoding emails in new tests.

Hardcoded demo users in older specs are legacy — migrate when you touch a file.

## SUT (system under test)

| Env | URL |
|-----|-----|
| Default lab | `https://www.decibeltribe.com` |
| Local app | `CYPRESS_BASE_URL=http://localhost:3000 npm run cy:open` |
| Preview | `CYPRESS_BASE_URL=https://….vercel.app npm run cy:run` |

Read [docs/LAB_CONTRACT.md](./docs/LAB_CONTRACT.md) before relying on a feature for a grade.

## Docs map

| Doc | Use when |
|-----|----------|
| [README](./README.md) | Clone + first run |
| [docs/FIRST_TEST.md](./docs/FIRST_TEST.md) | 15‑minute first green test |
| [docs/LAB_CONTRACT.md](./docs/LAB_CONTRACT.md) | What is safe to automate |
| [cypress/CYPRESS_TEST_WRITING_GUIDE.md](./cypress/CYPRESS_TEST_WRITING_GUIDE.md) | Conventions + structure |
| [cypress/CYPRESS_DEBUGGING_WORKFLOW.md](./cypress/CYPRESS_DEBUGGING_WORKFLOW.md) | Failures + flake |
| [cypress/README.md](./cypress/README.md) | Suite overview |

## Sister lab

Playwright track: https://github.com/petermsouzajr/decibel-tribe-playwright-lab
