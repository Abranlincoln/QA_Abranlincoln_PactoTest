import { test, expect } from '@playwright/test';

test('Atividade 1 - Yahoo: Deve buscar Pacto Soluções e validar resultado', async ({ page }) => {

  await page.goto('https://br.search.yahoo.com');

  const campoBusca = page.locator('input[name="p"]');
  await campoBusca.fill('Pacto Soluções');
  await campoBusca.press('Enter');

  const resultados = page.locator('#web');
  
  await expect(resultados).toContainText('pactosolucoes.com.br');

  await page.screenshot({ path: 'resultado_yahoo.png' });
});