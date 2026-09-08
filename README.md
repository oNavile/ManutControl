# ManutControl

Sistema web para acompanhamento de manutenção industrial da Indústria Atlas.

O ManutControl permite visualizar ordens de serviço, agenda diária e equipamentos críticos em uma interface responsiva desenvolvida com Next.js e Tailwind CSS.

---

## Tecnologias utilizadas

- Next.js
- React
- Tailwind CSS
- JavaScript
- JSON para armazenamento dos dados locais

---

## Funcionalidades

### Visão geral

A página principal apresenta:

- Quantidade de ordens abertas;
- Quantidade de ordens vencidas;
- Quantidade de equipamentos parados;
- Lista de ordens de serviço;
- Agenda diária;
- Equipamentos críticos.
- Histórico resumido do equipamento.

### Ordens de serviço

A tabela apresenta:

- Código da ordem;
- Descrição;
- Equipamento;
- Prioridade;
- Técnico;
- Vencimento;
- Status.

As prioridades e os status possuem estilos visuais diferentes para facilitar a identificação.

### Agenda diária

A agenda apresenta:

- Horário;
- Descrição;
- Codigo e Nome do equipamento;
- Técnico.

Os itens são organizados pelo horário.

### Equipamentos críticos

A seção apresenta:

- Código;
- Nome;
- Setor;
- Status.

### Histórico dos equipamentos

- Nome;
- Codigo;
- Descrição;
- Tipo;
- Técnico
- Data

---

## Componentização

O projeto foi dividido em componentes reutilizáveis para separar responsabilidades e facilitar a manutenção do código.

Principais componentes:

- `header.jsx` — cabeçalho da aplicação;
- `aside.jsx` — menu lateral;
- `welcome.jsx` — conteudo principal.

---

## Dados

Os dados utilizados na aplicação estão armazenados localmente no arquivo:

`src/manutcontrol_dados.jon`

---

## Tailwind CSS

O projeto utiliza Tailwind CSS para construção da interface.

Foram utilizados recursos como:

- Flexbox;
- CSS Grid;
- Responsividade;
- Espaçamentos;
- Tipografia;
- Bordas;
- Sombras;
- Estados de hover;
- Classes condicionais;
- Breakpoints responsivos.

A aplicação utiliza uma paleta baseada principalmente em:

- `slate` para fundos, textos e bordas;
- `blue` para ações principais;
- `emerald` para sucesso;
- `amber` para atenção;
- `orange` para alta prioridade;
- `red` para situações urgentes ou vencidas.

---

## Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela.

Foram utilizados breakpoints do Tailwind CSS para adaptar:

- Menu lateral;
- Cards;
- Tabela de ordens;
- Agenda;
- Equipamentos.

---

## Como executar o projeto

Primeiro, instale as dependências:

```bash
npm install

```rodar
npm run dev