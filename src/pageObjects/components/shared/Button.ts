import { type Page, type Locator } from '@playwright/test';

export class Button {
  readonly page: Page;
  readonly buttonSelector: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async clickString(cssSelector: string) {
    const button = this.page.locator(cssSelector);
    await button.click();
  }

  async clickByRoleButton(cssSelector: string) {
    const button = this.page.getByRole('button', { name: `${cssSelector}` });
    await button.click();
  }

  async clickByRoleLink(cssSelector: string) {
    const button = this.page.getByRole('link', { name: `${cssSelector}` });
    await button.click();
  }
}
