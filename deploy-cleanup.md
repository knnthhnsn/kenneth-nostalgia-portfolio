# Plan: Deploy Clean Portfolio to New GitHub Repository

The goal is to create a new GitHub repository named `kenneth-nostalgia-portfolio` and upload only the necessary files for the static portfolio website, excluding agent frameworks, smart contracts, and server-side logic.

## Phase 1: Preparation
- [ ] Create a temporary deployment directory to avoid messing with the source files.
- [ ] Identify all necessary static files (HTML, CSS, JS, assets, sounds, portfolio folder).
- [ ] Initialize a new Git repository in the temporary directory.

## Phase 2: Cleanup and Staging
- [ ] Copy `index.html`, `style.css`, `game.js`.
- [ ] Copy `assets/` and `sounds/` directories.
- [ ] Copy the `portfolio/` directory (excluding its `.agent` and other non-static files).
- [ ] Create a proper `.gitignore` for the new repository to exclude common junk.

## Phase 3: GitHub Deployment
- [ ] Create the new repository `kenneth-nostalgia-portfolio` using GitHub CLI (`gh repo create`).
- [ ] Add the new remote to the temporary repository.
- [ ] Commit and push the clean files to the `main` branch.

## Phase 4: Verification
- [ ] Verify the files on GitHub.
- [ ] (Optional) Provide the link to the user.
- [ ] Cleanup temporary files.

## Verification Criteria
- New repository `kenneth-nostalgia-portfolio` exists on GitHub.
- Repository contains 0 agent frameworks (`.agent` folders).
- Repository contains 0 smart contracts (`.sol` files).
- Repository contains 0 server files (`server.js`, `package.json`).
- Website works correctly when hosted (all assets and sub-folder links are preserved).
