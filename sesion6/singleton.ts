export class ConfigService {
  private static instancia: ConfigService | null = null;

  private constructor() {}

  static getInstance(): ConfigService {
    if (ConfigService.instancia === null) {
      ConfigService.instancia = new ConfigService();
    }
    return ConfigService.instancia;
  }
}