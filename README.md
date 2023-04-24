# How to update existing configs (e.g for marketplace, for network menu)?

1. Checkout to `dev` branch - `git checkout dev`
2. Pull the latest changes in the repo - `git pull`
3. Create your branch - `git checkout -b <your-branch-name>`
4. Make necessary changes in config files and schemas
5. Commit your changes - `git commit -m '<your-commit-message>'`
6. Push changes to the repo -  `git push --set-upstream origin <your-branch-name>`
7. Create Pull Request in the Github UI from `<your-branch-name>` to `dev` branch
8. Wait until all checks are passed; make fixes if needed
9. Merge Pull Request to `dev` branch
10. Go to corresponding development stand and validate that your updates are applied correctly
11. Create Pull Request in the Github UI from `dev` to `main` branch
12. Merge Pull Request and check updates on production stand

# How to update existing configs for network assets (logos, icons)?

Preview state for these assets is not available. So, follow next steps:

1. Checkout to `main` branch - `git checkout main`
2. Pull the latest changes in the repo - `git pull`
3. Create your branch - `git checkout -b <your-branch-name>`
4. Make necessary changes in SVG-files
5. Commit your changes - `git commit -m '<your-commit-message>'`
6. Push changes to the repo -  `git push --set-upstream origin <your-branch-name>`
7. Create Pull Request in the Github UI from `<your-branch-name>` to `main` branch
8. Wait until all checks are passed; make fixes if needed
9. Merge Pull Request to `main` branch