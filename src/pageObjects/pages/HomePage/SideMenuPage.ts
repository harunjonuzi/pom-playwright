import { type Page } from '@playwright/test';
import { SideMenuComponent } from '../../components/HomePage/SideMenuComponent';

export class SideMenuPage {
  readonly page: Page;

  // Component
  readonly SideMenuComponent: SideMenuComponent;

  constructor(page: Page) {
    this.page = page;

    // Component
    this.SideMenuComponent = new SideMenuComponent(page);
  }
}
