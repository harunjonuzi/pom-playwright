import { Page } from '@playwright/test';
import { Button } from '../../shared/Button';

export class ManageOrgDataComponent {
  readonly page: Page;
  readonly buttonComponentDeleteFeeds: Button;
  readonly buttonComponentDeleteQuestions: Button;

  constructor(page: Page) {
    this.page = page;
    this.buttonComponentDeleteFeeds = new Button(page);
    this.buttonComponentDeleteQuestions = new Button(page);
  }

  async clickDeleteFeeds() {
    await this.buttonComponentDeleteFeeds.clickByRoleButton(
      'Delete feed posts and associated data',
    );
  }

  async clickDeleteQuestions() {
    await this.buttonComponentDeleteQuestions.clickByRoleButton('Delete profile questions');
  }
}
