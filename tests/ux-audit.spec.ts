import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const relevantConsoleTypes = new Set(["error", "warning"]);

test.describe("Hack am Hof rendered UX audit", () => {
  test("home page renders, key controls work, and serious accessibility issues stay visible", async ({
    page,
  }, testInfo) => {
    const consoleMessages: string[] = [];
    const pageErrors: string[] = [];

    page.on("console", (message) => {
      if (relevantConsoleTypes.has(message.type())) {
        consoleMessages.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    await page.goto("/");

    await expect(page).toHaveTitle(/Hack am Hof/i);
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
    await expect(page.getByText(/Museum|Museumswissen|Höfemuseum/i).first()).toBeVisible();

    await page.screenshot({
      path: testInfo.outputPath(`home-${testInfo.project.name}.png`),
      fullPage: true,
    });

    await page.locator('a[href="#app-dummy"]').first().click();
    await expect(page.locator("#app-dummy")).toBeInViewport();

    await page.locator('a[href="#demo"]').first().click();
    await expect(page.locator("#demo")).toBeInViewport();

    const modeTabs = page.getByRole("tab");
    const tabCount = await modeTabs.count();
    expect(tabCount).toBeGreaterThan(2);

    for (let index = 0; index < Math.min(tabCount, 4); index += 1) {
      const tab = modeTabs.nth(index);
      await tab.click();
      await expect(tab).toHaveAttribute("aria-selected", "true");
    }

    await page.screenshot({
      path: testInfo.outputPath(`demo-${testInfo.project.name}.png`),
      fullPage: true,
    });

    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const seriousViolations = accessibility.violations.filter((violation) =>
      violation.impact === "serious" || violation.impact === "critical"
    );

    expect(
      seriousViolations,
      seriousViolations
        .map((violation) => `${violation.id}: ${violation.help}`)
        .join("\n"),
    ).toEqual([]);
    expect(pageErrors).toEqual([]);
    expect(consoleMessages.filter((message) => !message.includes("DevTools"))).toEqual([]);
  });
});
