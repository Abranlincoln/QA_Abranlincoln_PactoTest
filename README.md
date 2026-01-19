# Desafio Técnico QA - Pacto Soluções

Este repositório contém a automação de testes para o processo seletivo da **Pacto Soluções**. O projeto foi desenvolvido utilizando **Cypress** e **Playwright**, demonstrando versatilidade na escolha de ferramentas para diferentes cenários de automação.

---

## Atividades Realizadas

### 1. Questão 01: Busca Yahoo (Playwright)
* **Cenário**: Realizar uma busca por "Pacto Soluções" no Yahoo Search e validar se o site oficial aparece nos resultados.
* **Ferramenta**: Playwright.
* **Evidência**: O teste gera automaticamente um print da tela de resultados (`resultado_yahoo.png`).

### 2. Questão 02: Validação de Segurança UOL (Cypress)
* **Cenário**: Partir da Home da UOL, navegar via rodapé até a página de "Segurança e Privacidade" e validar a data da última atualização dos termos.
* **Ferramenta**: Cypress.
* **Destaques Técnicos**:
    * Tratamento de exceções globais com `uncaught:exception`.
    * Uso de `removeAttr` para evitar que o navegador abra novas abas e perca o contexto do teste.
    * Geração de print de evidência (`evidencia-data-uol.png`) com foco na data encontrada.

---

## Tecnologias e Dependências

* **Node.js** (Ambiente de execução)
* **Yarn** (Gerenciador de pacotes)
* **Playwright** (Automação E2E - Questão 1)
* **Cypress** (Automação E2E - Questão 2)


---

## Como Executar o Projeto

### 1. Instalação
Clone o repositório e instale as dependências:
```bash
yarn install
```
### 2. Executando via Interface Visual (IDE)
Para acompanhar a execução dos robôs passo a passo:
Questão 1 (Playwright):
```bash

yarn pw:ui
```
Questão 2 (Cypress):
```bash

yarn cy:open
```
3. Executando via Terminal (Modo Headless)
Para uma execução rápida com geração de evidências:

```bash

yarn cy:run    # Executa apenas Cypress
yarn pw:test   # Executa apenas Playwright
yarn test:all  # Executa ambos em sequência

```
Evidências de Teste
Após a execução via terminal, as imagens de evidência estarão disponíveis em:

UOL (Cypress): cypress/screenshots/evidencia-data-uol.png

Yahoo (Playwright): resultado_yahoo.png

Desenvolvido por: Abranlincoln