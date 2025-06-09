import { Language } from "./Language";

export class Russian extends Language {
  public toIETF(): string {
    return "ru-RU";
  }

  public toButtonText(): string {
    return "Русский";
  }
}
