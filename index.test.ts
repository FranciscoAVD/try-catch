import { describe, expect, test } from "bun:test";
import tryCatch from "./index";

describe("tryCatch", () => {
  test("resolves a promise to [value, null]", async () => {
    const [value, error] = await tryCatch(Promise.resolve(42));
    expect(value).toBe(42);
    expect(error).toBeNull();
  });

  test("resolves a function to [value, null]", async () => {
    const [value, error] = await tryCatch(async () => "ok");
    expect(value).toBe("ok");
    expect(error).toBeNull();
  });

  test("catches a rejected promise as [null, error]", async () => {
    const [value, error] = await tryCatch(Promise.reject(new Error("boom")));
    expect(value).toBeNull();
    expect(error).toBeInstanceOf(Error);
    expect(error?.message).toBe("boom");
  });

  test("wraps a thrown non-Error value", async () => {
    const [value, error] = await tryCatch(async () => {
      throw "nope";
    });
    expect(value).toBeNull();
    expect(error).toBeInstanceOf(Error);
    expect(error?.message).toBe("nope");
  });
});
