import { expect } from '@playwright/test';
import test from 'node:test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('Navigate to media releases via {string}', async ({ page }, url: string) => {
    await page.goto(url);
    await expect(page).toHaveTitle ("Ministerial releases | NSW Government");

});



Then('On the left panel I see {string} and click it', async ({ page }, accordion: string) => {
   switch(accordion.toLocaleLowerCase()) {
    case 'ministers':
     //   await page.locator(`//input[@name="accountHolder"][@value=('${accountHolder}')]`).click();
    //    await page.locator('//input[@name="accountHolder"][@value=('${accountHolder}')]').click();
          await page.locator(`//span[@class="nsw-filters__item-name"]`)
                    .filter({ hasText: accordion })
                  //  .locator(`//button[@type="button"]`).click()
        break;
    default: 
        throw new Error(accordion + 'action not defined')

   }
   
});

When('I click on {} check box', async ({ page }, ministers: string) => {


      await page.locator(`//fieldset[@id="filter-ministers"]`)
                .locator(`label:has-text(${ministers})`).click();


});

When('I click on {string} button', async ({ page }, filter: string) => {
    switch(filter.toLocaleLowerCase()) {
        case 'apply filters':
              await page.locator(`//input[@data-test="finder-submit"]`).click()
            break;
        case 'clear all filters':
            await page.locator(`//button[@data-test="finder-clear-all"]`).click()
                   break;
        default: 
            throw new Error(filter + 'action not defined')
    
       }
});

Then('User is landed on the results page with {string} results', async ({ page }, results: string) => {
    await expect(page.locator(`//header[@class="nsw-results-bar"]`)).toContainText(results);
});

