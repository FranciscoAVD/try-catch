/**
 * Accepts an async value or function and returns a tuple of the result with the possible error object.
 *
 * @param fn - A `Promise<T>` or a function returning one.
 * @returns A tuple of `[result, null]` on success, or `[null, error]` on failure.
 */
export default async function tryCatch<T>(
  fn: Promise<T> | (() => Promise<T>),
): Promise<[T, null] | [null, Error]> {
  try {
    return [await (typeof fn === "function" ? fn() : fn), null];
  } catch (e) {
    return [null, e instanceof Error ? e : Error(String(e))];
  }
}
