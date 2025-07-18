import { test, expect } from '@playwright/test';
import { HomePage } from './Pages/homePage';

test.describe('Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('should navigate to home page', async () => {
    await homePage.navigateToHome();
    await expect(homePage.page).toHaveURL('/');
  });

  test('should navigate to home page clicking on the logo', async () => {
    await homePage.navigateToHome();
    await homePage.clickLogo();
    await expect(homePage.page).toHaveURL('/');
  });
});