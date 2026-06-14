# .rbg B2B SaaS Marketplace

This is the foundational frontend codebase for the **.rbg** B2B SaaS marketplace. It provides a production-ready, highly modular, component-based architecture using HTML5, Vanilla ES6+ JavaScript, and SCSS.

## Technology Stack

- **Frontend:** HTML5, Vanilla JS (ES6+)
- **Styling:** SCSS (compiled to standard CSS)
- **Architecture:** Component-based modular design

## Design System

We adhere to the **70/20/10 Rule**:
- **70% Dominant:** White (`#FFFFFF`) for background and main content.
- **20% Secondary:** Light Blue (`#E0F7FA`) for navigation bars, headers, and structural cards.
- **10% Accent:** Light Gold (`#FFECB3`) for calls to action, highlights, and active states.

## Setup Instructions

1. Ensure you have Node.js installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. To compile SCSS to CSS during development, run the watch script:
   ```bash
   npm run watch:css
   ```

## 🔒 Strict GitHub Workflow & Version Control

To maintain a secure and stable codebase, all contributors **MUST** adhere to the following workflow:

1. **Issues:** Every new feature, bug fix, or technical task must be documented as an issue on the GitHub board before any code is written.
2. **Branching:** Create a specific feature branch from `main` (or `develop`) for every task.
   - Example: `feature/user-auth` or `bugfix/header-alignment`.
3. **Commits:** Push your code to GitHub frequently. Commit messages must be clear and meaningful.
4. **Pull Requests:** Code **MUST** be merged exclusively via Pull Requests (PRs). Direct pushes to production/main branches are strictly prohibited. At least one review is required before merging.

## Security & SEO

- **Security:** CSP (Content-Security-Policy) headers are included in HTML files. All JavaScript DOM manipulations involving user input utilize strict DOM sanitization (see `src/js/utils/sanitize.js`). API calls are structured to securely handle authorization tokens.
- **SEO:** Built with fully semantic HTML. Dynamic meta tags, Open Graph tags, Twitter Cards, `sitemap.xml`, and `robots.txt` are configured for optimal B2B discoverability.
