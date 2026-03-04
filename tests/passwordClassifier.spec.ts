import { describe, it, expect } from "vitest";
import { PasswordClassifier } from "../src/passwordClassifier";

describe("PasswordClassifier", () => {

  it("should throw error if password is empty", () => {
    expect(() => PasswordClassifier.classify("")).toThrow();
  });

  it("should classify password shorter than 6 as WEAK", () => {
    expect(PasswordClassifier.classify("abc")).toBe("WEAK");
  });

  it("should classify password with letters and numbers (>=6) as MEDIUM", () => {
    expect(PasswordClassifier.classify("abc123")).toBe("MEDIUM");
  });

  it("should classify strong password correctly", () => {
    expect(PasswordClassifier.classify("Abc123!@")).toBe("STRONG");
  });

  it("should classify 6+ characters without number as WEAK", () => {
    expect(PasswordClassifier.classify("abcdef")).toBe("WEAK");
  });

});