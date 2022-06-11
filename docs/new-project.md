# How to set up a new project

## Manual steps with integration

- [ ] Jest
- [ ] Playwright

## Manual steps without integration

### Setup [Kodiak](https://kodiakhq.com/#quickstart) bot

Adopted from the official [Quickstart](https://kodiakhq.com/#quickstart) guide.

1. Install
   [the GitHub app](https://github.com/marketplace/kodiakhq#pricing-and-setup)
   to the repository
2. Copy [.kodiak.toml](../.kodiak.toml) file to the root directory
3. [Configure GitHub branch protection](https://help.github.com/en/articles/configuring-protected-branches)
4. Create an automerge label (default: "automerge")
5. Start auto merging PRs with Kodiak\
   Label your PRs with your automerge label and let Kodiak do the rest! 🎉

TODO: Document these manual steps which require no integration with `pkode`

- [ ] Git pre-commit hooks using husky
- [ ] Commitlint configuration
  - [ ] [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
  - [ ] [Integrate with husky](https://commitlint.js.org/#/guides-local-setup?id=install-husky)
  - [ ] [Test integration with husky](https://commitlint.js.org/#/guides-local-setup?id=test)
- [ ] allcontributors integration
- [ ] Kodiak bot
