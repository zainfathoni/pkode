# Manual Releases

- [Manual Releases](#manual-releases)
  - [Version to bump](#version-to-bump)
    - [Major](#major)
    - [Minor](#minor)
    - [Patch](#patch)
  - [Manual Releases Count](#manual-releases-count)

This project has an automated release set up. So things are only released when
there are useful changes in the code that justify a release. But sometimes
things get messed up one way or another and we need to trigger the release
ourselves. When this happens, simply bump the number below and commit that with
the following commit message based on your needs:

## Version to bump

### Major

```txt
fix(release): manually release a major version

There was an issue with a major release, so this manual-releases.md
change is to release a new major version.

Reference: #<the number of a relevant pull request, issue, or commit>

BREAKING CHANGE: <mention any relevant breaking changes
(this is what triggers the major version change so don't skip this!)>
```

### Minor

```txt
feat(release): manually release a minor version

There was an issue with a minor release, so this manual-releases.md
change is to release a new minor version.

Reference: #<the number of a relevant pull request, issue, or commit>
```

### Patch

```txt
fix(release): manually release a patch version

There was an issue with a patch release, so this manual-releases.md
change is to release a new patch version.

Reference: #<the number of a relevant pull request, issue, or commit>
```

## Manual Releases Count

The number of times we've had to do a manual release is: 0
