// const { test, expect } = require('@playwright/test');

// test('Add two items to cart and verify', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   // Step 1: Login
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();

//   // Step 2: Add first two items to the cart
//   const addButtons = page.locator('button:has-text("Add to cart")');

//   // Click first button
//   await addButtons.nth(0).click();

//   // Click second button
//   await addButtons.nth(1).click();

//   // Step 3: Go to cart
//   await page.locator('.shopping_cart_link').click();

//   // Step 4: Assert there are 2 items
//   const cartItems = page.locator('.cart_item');
//   await expect(cartItems).toHaveCount(2);
// });


const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { InventoryPage } = require('../pages/InventoryPage');

test('User can add items to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.addFirstTwoItemsToCart();
  await inventoryPage.openCart();

  // Assert that cart page opened and has 2 items (optional)
  const cartItems = page.locator('.cart_item');
  await expect(cartItems).toHaveCount(2);
});

