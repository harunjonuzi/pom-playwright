import { Page } from '@playwright/test';
import { ManageOrgDataComponent } from '../../../components/HomePage/SideMenuPage/ManageOrgDataComponent';

export class ManageOrgDataPage {
  readonly page: Page;

  // Component
  readonly ManageOrgDataComponent: ManageOrgDataComponent;

  constructor(page: Page) {
    this.page = page;

    // Component
    this.ManageOrgDataComponent = new ManageOrgDataComponent(page);
  }
}
