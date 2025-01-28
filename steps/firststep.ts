import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('Print Say Hello', async ({ page }) => {
  console.log('Running BDD Test');
});

Given('Say {string}', async ({ page }, name: string) => {
  console.log(name);
});