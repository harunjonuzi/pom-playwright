// import { type Locator, type Page } from '@playwright/test';
import { type Page } from '@playwright/test';
import { FeedComponent } from '../../components/HomePage/FeedComponent';

export class HomePage {
  readonly page: Page;

  // Component
  readonly FeedComponent: FeedComponent;

  constructor(page: Page) {
    this.page = page;

    // Component
    this.FeedComponent = new FeedComponent(page);
  }
}
