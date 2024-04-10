const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.selectLocationText = page.locator("//h1[@class='landing-page-location-dropdown-title']");
    this.dropDownSelectText = page.locator("//div[@class='select-location-select-elem-text']");
    this.closeModal = page.locator("//img[@alt='close-icon']")
  }

  async clickOnCloseModal()
  {
    //await this.page.pause();
    await this.closeModal.click();
  }

  async verifyLocationText()
  {
    expect.soft(await this.selectLocationText.textContent()).toBe("Please Select a location");

  }
  async verifyDropDownSelectText()
  {
    expect.soft(await this.dropDownSelectText.textContent()).toBe("        Select Location    ");

  }


};