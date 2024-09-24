import { Page } from '@playwright/test';
import { Button } from '../shared/Button';

export class SideMenuComponent {
  readonly page: Page;
  readonly buttonComponentManageOrgData: Button;
  readonly buttonComponentLogout: Button;

  constructor(page: Page) {
    this.page = page;
    this.buttonComponentManageOrgData = new Button(page);
    this.buttonComponentLogout = new Button(page);
  }

  async clickManageOrgData() {
    await this.buttonComponentManageOrgData.clickByRoleLink('Manage Org. Data');
  }

  async clickLogout() {
    await this.buttonComponentLogout.clickByRoleLink('Log Out');
  }
}
