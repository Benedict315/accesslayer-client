# Security Policy

## Reporting a vulnerability

Please do not open public GitHub issues for security vulnerabilities.

Instead:

1. Gather the affected area, impact, and reproduction details.
2. Contact the maintainers privately or use GitHub private vulnerability reporting if it is enabled for this repository.
3. Give the maintainers time to validate and coordinate a fix before public disclosure.

## Scope

Security reports are especially relevant for:

- wallet connection flows
- transaction signing and submission
- auth and session handling
- environment variable exposure
- client-side handling of privileged or gated resources

## Secret handling

- Never commit live keys, API secrets, or production endpoints.
- Use `.env.example` for safe placeholders.
- Redact screenshots and logs before sharing them publicly.
