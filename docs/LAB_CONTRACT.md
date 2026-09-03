# Lab contract — Decibel Tribe (Cypress)

This document is the **agreement between the live app and this test lab**.  
If the app changes, the lab owner updates this file and announces it.

## System under test

| | |
|--|--|
| **Production lab URL** | https://www.decibeltribe.com |
| **App repo** | https://github.com/petermsouzajr/decibel-tribe |
| **This repo** | Specs only — no app deploy access required |

## Stable enough for homework (prefer these)

| Area | Notes |
|------|--------|
| **Authentication UI** | `/login`, signup, forgot password — high priority for exercises |
| **Public / logged-out shell** | Home, marketing chrome, title |
| **Posts / feed** (if seeded) | Needs test user + seed data |
| **Profile view** | Own profile after login |
| **Search** | Empty + basic query |
| **Events list** | Read-only paths safer than destructive RSVP |

## Use with care

| Area | Why |
|------|-----|
| Groups invite / promote | Needs multi-user seed state |
| Messaging | Stream/chat credentials + flaky timing |
| Notifications | Depends on other users’ actions |
| Settings delete account | **Do not** run against shared lab users |

## Deprecated / moving out

| Area | Status |
|------|--------|
| **Dating** (`cypress/e2e/ui/dating/*`) | Leaving web app for Expo (`datingtribe`). Do **not** start new dating homework here. Existing specs may fail as features are removed. |

## Data rules

1. Prefer **seeded lab users** from the owner — don’t create dozens of throwaway accounts on prod.
2. Don’t delete or ban other students’ data.
3. Don’t load-test or hammer APIs.
4. Destructive tests (`delete_account`, purge flows) = local/preview only unless the instructor says otherwise.

## Tagging for CI / class

- `[smoke]` — fast, safe, few dependencies  
- `[functional]` — deeper happy/path  
- `[a11y]` — axe / accessibility folder  

## When the SUT breaks your test

1. Confirm on the website manually.
2. Check this contract — was the feature deprecated?
3. Open an issue on **this** lab repo (not a silent force-push).
4. If it’s an app bug, note it in the PR; instructor may file on `decibel-tribe`.

## Env overrides

```bash
CYPRESS_BASE_URL=https://www.decibeltribe.com npm run cy:run
CYPRESS_BASE_URL=http://localhost:3000 npm run cy:open:local
```
