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

```bash
bun run build
bun publish --access public
```
