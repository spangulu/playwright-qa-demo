import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'https://example.com', headless: true },
  reporter: 'html'
});
