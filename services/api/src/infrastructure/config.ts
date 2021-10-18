const DEFAULT_PORT = 3000;

export type Config = {
  PORT: number;
  PICKATALE_API_URL: string;
};

export const config = (): Config => ({
  PORT: Number(process.env.PORT || DEFAULT_PORT),
  PICKATALE_API_URL: process.env.PICKATALE_API_URL,
});
