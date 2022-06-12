# How to set up a new project

- [How to set up a new project](#how-to-set-up-a-new-project)
  - [Manual steps with integration](#manual-steps-with-integration)
  - [Manual steps without integration with `pkode`](#manual-steps-without-integration-with-pkode)
    - [Bots](#bots)
      - [Setup Kodiak bot](#setup-kodiak-bot)
      - [Setup All Contributors bot](#setup-all-contributors-bot)
    - [GitHub templates](#github-templates)
      - [Issue templates](#issue-templates)
      - [Pull Request template](#pull-request-template)
  - [TODO](#todo)

## Manual steps with integration

- [ ] Jest
- [ ] Playwright

## Manual steps without integration with `pkode`

### Bots

#### Setup [Kodiak](https://kodiakhq.com/#quickstart) bot

Adopted from the official [Quickstart](https://kodiakhq.com/#quickstart) guide.

1. Install
   [the GitHub app](https://github.com/marketplace/kodiakhq#pricing-and-setup)
   to the repository
2. Copy [.kodiak.toml](../.kodiak.toml) file to the root directory
3. [Configure GitHub branch protection](https://help.github.com/en/articles/configuring-protected-branches)
4. Create an automerge label (default: "automerge")
5. Start auto merging PRs with Kodiak\
   Label your PRs with your automerge label and let Kodiak do the rest! 🎉

#### Setup [All Contributors](https://allcontributors.org) bot

1. Install the Bot to your project\
   Check the [installation documentation](https://allcontributors.org/docs/en/bot/installation)
   for how to add it
2. Start a pull request or comment
3. Mention the @all-contributors Bot
4. Add a contributor’s username and contribution type\
   Check the contribution types in the [Emoji Key Cheatsheet](https://allcontributors.org/docs/en/emoji-key)
5. Post and your README.md updates automatically! It'll add the Contributor
   Table for your first time, too.

### GitHub templates

#### Issue templates

1. Copy the whole [ISSUE_TEMPLATE](../.github/ISSUE_TEMPLATE) directory
2. Paste it under `.github` directory in the repository

#### Pull Request template

1. Copy the [pull_request_template.md](../.github/pull_request_template.md) file
2. Paste it under `.github` directory in the repository

## TODO

TODO: Document these manual steps which require no integration with `pkode`

- [ ] Git pre-commit hooks using husky
- [ ] Commitlint configuration
  - [ ] [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
  - [ ] [Integrate with husky](https://commitlint.js.org/#/guides-local-setup?id=install-husky)
  - [ ] [Test integration with husky](https://commitlint.js.org/#/guides-local-setup?id=test)
- [x] All Contributors integration
- [x] Kodiak bot
- [x] GitHub Issue and Pull Request templates
