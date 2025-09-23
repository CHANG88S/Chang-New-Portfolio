This repository is configured to automatically build and deploy the production site from the `main` branch using GitHub Actions.

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (the action runs `npm ci` and `npm run build` and deploys the `dist` folder to GitHub Pages)

To trigger a deploy, push commits to `main`. The Actions page in GitHub will show build logs and deployment status.
