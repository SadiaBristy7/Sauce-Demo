// const { test, expect } = require('@playwright/test');

// test('Login page test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   // Locate and fill the username
//   await page.locator('#user-name').fill('standard_user');

//   // Locate and fill the password
//   await page.locator('#password').fill('secret_sauce');

//   // Locate and click the login button
//   await page.locator('#login-button').click();

//   // Verify successful login by checking for a product title
//   await expect(page.locator('.title')).toHaveText('Products');
// });


const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login'); // import LoginPage

test('Login using Page Object', async ({ page }) => {
  const loginPage = new LoginPage(page); // create instance

  await page.goto('https://www.saucedemo.com'); 
  await loginPage.login('standard_user', 'secret_sauce'); // use login method
  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //  assertion
  // const productTitle = page.locator('.title');
  await expect(productTitle).toHaveText('Products');
});
