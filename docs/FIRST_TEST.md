# First test in 15 minutes (Cypress)

## 1. Setup

```bash
git clone https://github.com/petermsouzajr/decibel-tribe-cypress-lab.git
cd decibel-tribe-cypress-lab
npm install
cp cypress.env.json.example cypress.env.json
# optional: paste lab users from instructor
```

## 2. Open the runner

```bash
npm run cy:open
```

Choose **E2E** → **Chrome** (or Electron).

## 3. Run an existing smoke-style login test

In the file tree open:

`cypress/e2e/ui/authentication/login.cy.ts`

Run it. You should see the login form against **https://www.decibeltribe.com**.

If credentials fail, you still practiced: visit, fill, assert URL — ask for `cypress.env.json` values next.

## 4. Write your own tiny spec

Create `cypress/e2e/ui/authentication/login_page_loads.cy.ts`:

```ts
describe("[Student] Login page loads [smoke]", () => {
  it("shows username and password fields", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });
});
```

Run it from the Cypress UI. Commit on a branch and open a PR.

## 5. Level up

- Refactor selectors into `cypress/pages/authentication/loginPage.ts` (already exists — reuse it).
- Read [CYPRESS_TEST_WRITING_GUIDE.md](../cypress/CYPRESS_TEST_WRITING_GUIDE.md).
- Read [LAB_CONTRACT.md](./LAB_CONTRACT.md) so you don’t automate deprecated dating flows.

## Common failures

| Symptom | Try |
|---------|-----|
| Base URL wrong | Check `cypress.config.ts` / `CYPRESS_BASE_URL` |
| Element not found | App UI changed — update POM, don’t only sleep |
| Login fails | Need lab user in `cypress.env.json` |
| Flaky | Prefer `data-testid` / roles; avoid fixed `cy.wait(5000)` |

Debug guide: [CYPRESS_DEBUGGING_WORKFLOW.md](../cypress/CYPRESS_DEBUGGING_WORKFLOW.md)
