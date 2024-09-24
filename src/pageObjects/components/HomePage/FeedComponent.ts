import { Page } from '@playwright/test';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';

export class FeedComponent {
  readonly page: Page;
  readonly inputComponentNewPost: Input;
  readonly buttonComponentLogout: Button;

  constructor(page: Page) {
    this.page = page;
    this.inputComponentNewPost = new Input(page);
    this.buttonComponentLogout = new Button(page);
  }

  // 📌 Method of selecting: page.locator
  // async createNewPost(message: string) {
  //   await this.inputComponentNewPost.inputAddTextByString(
  //     '#new_post_textarea',
  //     '#new_post_submit',
  //     `${message}`,
  //   );
  // }

  // 📌 Method of selecting: page.getByRole
  async createNewPost(message: string) {
    await this.inputComponentNewPost.inputAddTextByRole(
      'What do you want to share with your team?',
      'Share',
      `${message}`,
    );
  }

  async verifyNewPost(message: string) {
    await this.inputComponentNewPost.newPostVerify('.feed-post:nth-of-type(1)', `${message}`);
  }

  async createNewComment(message: string) {
    await this.inputComponentNewPost.inputAddTextByString(
      '[placeholder="Write a comment"] >> nth=0',
      '.new-comment-submit >> nth=0',
      `${message}`,
    );
  }
}
