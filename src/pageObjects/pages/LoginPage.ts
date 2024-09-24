import { Page } from '@playwright/test';
import { LoginComponent } from '../components/LoginPage/LoginComponent';

export class LoginPage {
  readonly page: Page;

  // Component
  readonly LoginComponent: LoginComponent;

  constructor(page: Page) {
    this.page = page;

    // Component
    this.LoginComponent = new LoginComponent(page);
  }
}
