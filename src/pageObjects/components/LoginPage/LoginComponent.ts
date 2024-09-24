import { Page } from '@playwright/test';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';

export class LoginComponent {
  readonly page: Page;
  readonly inputComponentsUsername: Input;
  readonly inputComponentsPassword: Input;
  readonly buttonComponentsLogin: Button;

  constructor(page: Page) {
    this.page = page;
    this.inputComponentsUsername = new Input(page);
    this.inputComponentsPassword = new Input(page);
    this.buttonComponentsLogin = new Button(page);
  }

  async gotoLoginPage() {
    // const url = process.env.BASE_URL || '';
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.inputComponentsUsername.inputFillTextByString('#email', username);
    await this.inputComponentsPassword.inputFillTextByString('#password', password);
    await this.buttonComponentsLogin.clickString('#login_submit');
  }
}
