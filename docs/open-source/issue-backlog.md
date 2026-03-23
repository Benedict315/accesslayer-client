# Access Layer Client Issue Backlog

This backlog is organized into contributor-friendly sections. Each section contains 10 issue drafts that can be opened individually on GitHub and labeled by difficulty.

## Section 1: Foundations and Developer Experience

1. `client-foundations-01` Replace remaining template naming in package metadata and docs.
2. `client-foundations-02` Add a shared app shell layout for future marketplace routes.
3. `client-foundations-03` Introduce a route-level `NotFound` page with Access Layer branding.
4. `client-foundations-04` Add a reusable empty-state component for no creators, no holdings, and no transactions.
5. `client-foundations-05` Standardize toast, loader, and error helpers under a single UI utilities module.
6. `client-foundations-06` Add a frontend environment validation layer for required public config.
7. `client-foundations-07` Document the local frontend setup, env vars, and command workflow with screenshots or examples.
8. `client-foundations-08` Add a basic test runner and one smoke test for the root route.
9. `client-foundations-09` Add route guards for authenticated versus public pages without introducing hidden redirects.
10.   `client-foundations-10` Add CI-friendly checks for lint, build, and future test execution.

## Section 2: Marketplace and Creator Experience

1. `client-marketplace-01` Build a creator listing page with placeholder data and loading states.
2. `client-marketplace-02` Create a creator profile page shell for bio, supply, and perks.
3. `client-marketplace-03` Add a creator onboarding flow for handle, avatar, and perk summary input.
4. `client-marketplace-04` Build a key holdings dashboard view for fans.
5. `client-marketplace-05` Design a creator perk card system that supports gated and public perks.
6. `client-marketplace-06` Add search and filter controls for creator discovery.
7. `client-marketplace-07` Add a transaction history view with human-readable status states.
8. `client-marketplace-08` Improve the landing page with product sections for creators, fans, and how it works.
9. `client-marketplace-09` Add responsive navigation for signed-out and signed-in states.
10.   `client-marketplace-10` Add form validation states and inline errors across onboarding flows.

## Section 3: Stellar Wallet and Transaction Integration

1. `client-stellar-01` Replace EVM-specific wallet hooks with Stellar wallet integration scaffolding.
2. `client-stellar-02` Add a network configuration module for Stellar testnet and future mainnet support.
3. `client-stellar-03` Create a wallet connect CTA and connected-account status component.
4. `client-stellar-04` Build a buy-key confirmation modal with fee and supply previews.
5. `client-stellar-05` Build a sell-key confirmation modal with proceeds and warnings.
6. `client-stellar-06` Add optimistic transaction states for submitted, confirmed, and failed actions.
7. `client-stellar-07` Add contract read hooks for creator data, supply, and key ownership.
8. `client-stellar-08` Add transaction error mapping for common Stellar and Soroban failures.
9. `client-stellar-09` Add a wallet reconnection flow after refresh or session restore.
10.   `client-stellar-10` Document the client contract-integration boundary and expected API contract.
