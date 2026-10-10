# @vicstack/try-catch

Accepts an async value or function and returns a tuple of the result with the possible error object — Go-style error handling for async code.

## Install

```bash
bun add @vicstack/try-catch
```

## Usage

```ts
import tryCatch from "@vicstack/try-catch";

const [user, error] = await tryCatch(fetchUser(id));
if (error) {
  // handle error
}
```

## Develop

```bash
bun install
bun test
bun run build
```

## Publish

Publishing happens automatically via GitHub Actions ([`.github/workflows/publish.yml`](.github/workflows/publish.yml)) whenever a `v*.*.*` tag is pushed:

```bash
bun pm version <patch|minor|major|x.y.z>  # bumps package.json and tags
git push origin master --follow-tags
```

The workflow requires an `NPM_TOKEN` repository secret (an npm Automation or Granular Access token with publish rights to `@vicstack`).
