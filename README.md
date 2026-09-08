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

### Ordens de serviço

A tabela apresenta:

- Código da ordem;
- Descrição;
- Prioridade;
- Técnico responsável;
- Status.

As prioridades e os status possuem estilos visuais diferentes para facilitar a identificação.

### Agenda diária

A agenda apresenta:

- Horário;
- Código da ordem;
- Descrição;
- Equipamento;
- Técnico responsável.

Os itens são organizados pelo horário.

### Equipamentos críticos

A seção apresenta:

- Imagem do equipamento;
- Nome;
- Código;
- Setor;
- Status.

---

## Componentização

O projeto foi dividido em componentes reutilizáveis para separar responsabilidades e facilitar a manutenção do código.

Principais componentes:

- `Header.jsx` — cabeçalho da aplicação;
- `Sidebar.jsx` — menu lateral;
- `IndicatorCard.jsx` — indicadores do painel;
- `SearchFilters.jsx` — busca e filtros;
- `WorkOrderList.jsx` — tabela de ordens;
- `WorkOrderRow.jsx` — linha individual da tabela;
- `DailySchedule.jsx` — agenda diária;
- `CriticalEquipment.jsx` — equipamentos críticos;
- `PriorityBadge.jsx` — indicador visual de prioridade;
- `StatusBadge.jsx` — indicador visual de status.

---

## Dados

Os dados utilizados na aplicação estão armazenados localmente no arquivo:

`src/Data/manut_control.json`

O arquivo contém três conjuntos principais:

- `ordens`
- `agenda`
- `equipamentos`

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