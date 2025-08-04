type EnvVars = {
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  };
  
  function getEnv<K extends keyof EnvVars>(key: K): string {
    const val = process.env[key];
    if (!val) {
      throw new Error(`Missing required env var: ${key}`);
    }
    return val;
  }
  
  export const env: EnvVars = {
    DATABASE_URL: getEnv("DATABASE_URL"),
    GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
    GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
    NEXTAUTH_URL: getEnv("NEXTAUTH_URL"),
    NEXTAUTH_SECRET: getEnv("NEXTAUTH_SECRET"),
  };
  