/**
 * @description Accepts an async value or function and returns a tuple of the result with the possible error object.
 * @param fn Promise<T> or () => Promise<T>
 * @returns Tuple of awaited fn and Error
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
