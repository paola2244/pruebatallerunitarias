export type PasswordStrength = "WEAK" | "MEDIUM" | "STRONG";

export class PasswordClassifier {

  static classify(password: string): PasswordStrength {

   this.validateEmpty(password);

    if (this.isWeakByLength(password)) {
      return "WEAK";
    }

    if (this.isStrong(password)) {
      return "STRONG";
    }

    if (this.isMedium(password)) {
      return "MEDIUM";
    }

    return "WEAK";
  }
private static validateEmpty(password: string): void {
    if (!password || password.trim().length === 0) {
      throw new Error("Password cannot be empty");
    }
  }

  private static isWeakByLength(password: string): boolean {
    return password.length < 6;
  }

  private static hasLetter(password: string): boolean {
    return /[a-zA-Z]/.test(password);
  }

  private static hasNumber(password: string): boolean {
    return /[0-9]/.test(password);
  }

  private static hasUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  private static hasSymbol(password: string): boolean {
    return /[^a-zA-Z0-9]/.test(password);
  }
  private static isStrong(password: string): boolean {
    return (
      password.length >= 8 &&
      this.hasUpperCase(password) &&
      this.hasNumber(password) &&
      this.hasSymbol(password)
    );
  }

  private static isMedium(password: string): boolean {
    return (
      password.length >= 6 &&
      this.hasLetter(password) &&
      this.hasNumber(password)
    );
  }
}