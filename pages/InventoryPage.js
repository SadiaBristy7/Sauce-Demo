const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.pageTitle = page.locator('.title');
  }

  async addFirstTwoItemsToCart() {
    await this.addToCartButtons.nth(0).click();
    await this.addToCartButtons.nth(1).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyOnInventoryPage() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.pageTitle).toHaveText('Products');
  }
}

module.exports = { InventoryPage };
