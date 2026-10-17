import { test, expect } from '@playwright/test';

test('example.com has expected page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Example Domain');
});
