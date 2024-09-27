import { test } from '@playwright/test';
import { LoginPage } from '../../pageObjects/pages/LoginPage';
import { HomePage } from '../../pageObjects/pages/HomePage/HomePage';
import { SideMenuPage } from '../../pageObjects/pages/HomePage/SideMenuPage';
import { ManageOrgDataPage } from '../../pageObjects/pages/HomePage/SideMenuPage/ManageOrgDataPage';

test.beforeEach('[ TestCaseID ] - Before each test runs', async ({ page }) => {
  // 📦 Calling LoginPage > LoginComponent
  const LoginPageObject = new LoginPage(page);
  const LoginContainer = LoginPageObject.LoginComponent;

  await LoginContainer.gotoLoginPage();
  const username = process.env.USERNAME || '';
  const password = process.env.PASSWORD || '';
  await LoginContainer.login(username, password);
  await page.waitForTimeout(2000);
});

test('[ TestCaseID ] - HomePage', async ({ page }) => {
  // 📦 Calling HomePage > FeedComponent
  const HomePageObject = new HomePage(page);
  const FeedContainer = HomePageObject.FeedComponent;

  // New Post
  await FeedContainer.createNewPost('Creating a new post for my team members!');
  await FeedContainer.verifyNewPost('Creating a new post for my team members!');

  // New Comment
  await FeedContainer.createNewComment('Adding a new comment on the post.');
  await FeedContainer.createNewComment('Another comment right after the first one.');
});

test.afterEach('[ TestCaseID ] - Run this test after each test', async ({ page }) => {
  // 📦 Calling SideMenuPage >> SideMenuComponent
  const SideMenuObject = new SideMenuPage(page);
  const SideMenuContainer = SideMenuObject.SideMenuComponent;

  // 📦 Calling ManageOrgDataPage >> ManageOrgDataPageComponent
  const ManageOrgDataObject = new ManageOrgDataPage(page);
  const ManageOrgDataContainer = ManageOrgDataObject.ManageOrgDataComponent;

  await SideMenuContainer.clickManageOrgData();
  await ManageOrgDataContainer.clickDeleteFeeds();
  await ManageOrgDataContainer.clickDeleteQuestions();
  await SideMenuContainer.clickLogout();
  await page.waitForTimeout(2000);
});
