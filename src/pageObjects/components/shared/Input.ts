import { type Page, expect } from '@playwright/test';
import { Button } from './Button';

export class Input {
  readonly page: Page;
  readonly buttonSelector: Button;

  constructor(page: Page) {
    this.page = page;
    this.buttonSelector = new Button(page);
  }

  // Fill
  async inputFillTextByString(inputSelector: string, message: string) {
    const textareaElement = this.page.locator(inputSelector);
    await textareaElement.fill(message);
  }

  // Fill & Click
  async inputAddTextByString(inputSelector: string, buttonSelector: string, message: string) {
    const textareaElement = this.page.locator(inputSelector);
    await textareaElement.fill(message);
    await this.buttonSelector.clickString(buttonSelector);
  }

  async inputAddTextByRole(inputSelector: string, buttonSelector: string, message: string) {
    const textareaElement = this.page.getByRole('textbox', { name: `${inputSelector}` });
    await textareaElement.fill(message);
    await this.buttonSelector.clickByRoleButton(buttonSelector);
  }

  // Assertions
  async newPostVerify(inputSelector: string, message: string) {
    const newPostText = this.page.locator(`${inputSelector}`);
    const textContent = await newPostText.textContent();
    console.log('Verified text:', textContent);
    await expect(newPostText).toContainText(message);
  }
}
