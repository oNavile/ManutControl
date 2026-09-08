import dados from "../../manutcontrol_dados.json"

const ordensAbertas = dados.ordensServico
    .filter((ordem) => ordem.status === "aberta")
    .map((ordem) => {
        const equipamento = dados.equipamentos.find(
            (equipamento) => equipamento.id === ordem.equipamentoId
        );

        return {
            ...ordem,
            equipamento
        };
    });

const equipamentosCriticos = dados.equipamentos.filter(
    (equipamento) => equipamento.criticidade === "alta"
);


const agendaHoje = dados.ordensServico
    .filter((ordem) => ordem.horarioAgendado !== null)
    .map((ordem) => {
        const equipamento = dados.equipamentos.find(
            (equipamento) => equipamento.id === ordem.equipamentoId
        );

        return {
            ...ordem,
            equipamento
        };
    })
    .sort((a, b) => a.horarioAgendado.localeCompare(b.horarioAgendado));


const quantidadeAbertas = dados.ordensServico.filter(
    (ordem) => ordem.status === "aberta"
).length;

const getHistoricoEquipamento = (equipamentoId) => {
  return dados.ordensServico
    .filter((ordem) => ordem.equipamentoId === equipamentoId)
    .sort(
      (a, b) =>
        new Date(b.vencimento) - new Date(a.vencimento)
    );
};



const quantidadeVencidas = dados.ordensServico.filter(
    (ordem) => ordem.status === "vencida"
).length;

const quantidadeParado = dados.equipamentos.filter(
    (equipamento) => equipamento.status === "parado"
).length;


export default function Welcome() {
    return (
        <>
            <main className="bg-slate-100">
                <nav>

                    <div className="flex flex-row p-5 justify-between">

                        <div>
                            <h1 className="flex flex-col font-bold text-2xl">Bom dia, {dados.usuario}</h1>
                            <p>Veja o que precisa de atenção hoje</p>
                        </div>

                        <div className="flex">
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                <i className="bi bi-plus-lg text-lg"></i>
                                <span>Nova ordem</span>
                            </button>
                        </div>

                    </div>

                </nav>

                <div className="space-y-6">
                    {/* 1. Cards de Métricas (Topo) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                                <i className="bi bi-clipboard2-check"></i>
                            </div>
                            <p className="text-gray-700 font-medium">
                                <strong className="text-xl text-gray-900 mr-1">{quantidadeAbertas}</strong> ordens abertas
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center text-xl">
                                <i className="bi bi-clock"></i>
                            </div>
                            <p className="text-gray-700 font-medium">
                                <strong className="text-xl text-gray-900 mr-1">{quantidadeVencidas}</strong> vencidas
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center text-xl">
                                <i className="bi bi-pause-circle"></i>
                            </div>
                            <p className="text-gray-700 font-medium">
                                <strong className="text-xl text-gray-900 mr-1">{quantidadeParado}</strong> equipamentos parados
                            </p>
                        </div>
                    </div>

                    {/* 2. Conteúdo Principal (Grid 2 Colunas) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Coluna Esquerda: Tabela de Ordens (Ocupa 2 colunas no desktop) */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-4">Ordens que exigem atenção</h2>

                                {/* Barra de Filtros */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="relative flex-1 min-w-[200px]">
                                        <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input
                                            type="text"
                                            placeholder="Buscar ordem, equipamento ou técnico"
                                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <select className="px-3 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 bg-white outline-none">
                                        <option>Todos os status</option>
                                    </select>
                                    <select className="px-3 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 bg-white outline-none">
                                        <option>Todas as prioridades</option>
                                    </select>
                                </div>

                                {/* Tabela */}
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs text-gray-600">
                                        <thead className="border-b border-gray-100 text-gray-400 uppercase font-medium">
                                            <tr>
                                                <th className="py-3 px-2"><input type="checkbox" className="rounded" /></th>
                                                <th className="py-3 px-2">OS</th>
                                                <th className="py-3 px-2">Descrição</th>
                                                <th className="py-3 px-2">Equipamento</th>
                                                <th className="py-3 px-2">Prioridade</th>
                                                <th className="py-3 px-2">Técnico</th>
                                                <th className="py-3 px-2">Vencimento</th>
                                                <th className="py-3 px-2">Status</th>
                                            </tr>
                                        </thead>
                                        {/* Linha 1 */}
                                        {ordensAbertas.map((ordem) => (
                                            <tbody className="divide-y divide-gray-100">
                                                <tr className="hover:bg-gray-50/50">
                                                    <td className="py-3.5 px-2"><input type="checkbox" className="rounded" /></td>
                                                    <td className="py-3.5 px-2 text-blue-600 font-medium cursor-pointer">{ordem.codigo}</td>
                                                    <td className="py-3.5 px-2 text-gray-800 font-medium">{ordem.descricao}</td>
                                                    <td className="py-3.5 px-2">MTR-020 • Motor 20 CV<br /><span className="text-gray-400">{ordem.equipamento.codigo} • {ordem.equipamento.nome}</span></td>
                                                    <td className="py-3.5 px-2">
                                                        <span className="inline-flex items-center gap-1 text-gray-700">
                                                            <span className="w-2 h-2 rounded-full bg-red-500"></span>{ordem.prioridade}
                                                        </span>
                                                    </td>
                                                    <td className="py-3.5 px-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">ML</span>
                                                            {ordem.tecnico}
                                                        </div>
                                                    </td>
                                                    <td className="py-3.5 px-2 text-red-500 font-medium">{ordem.vencimento}</td>
                                                    <td className="py-3.5 px-2">
                                                        <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-md font-medium text-[11px]">{ordem.status}</span>
                                                    </td>
                                                </tr>

                                                {/* Linha 2 */}

                                            </tbody>
                                        ))}

                                        

                                    </table>
                                </div>
                            </div>

                            {/* Rodapé da Tabela */}
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-xs">
                                <a href="#" className="text-blue-600 font-medium hover:underline">Ver todas as ordens</a>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <span>1–5 de 12</span>
                                    <div className="flex items-center gap-1">
                                        <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50"><i className="bi bi-chevron-left"></i></button>
                                        <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50"><i className="bi bi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna Direita: Widgets Laterais */}
                        <div className="flex flex-col gap-6">

                            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                                        Agenda de hoje
                                    </h2>

                                    <div className="space-y-4">

                                        {agendaHoje.map((ordem) => (
                                            <div
                                                key={ordem.id}
                                                className="flex items-start gap-3"
                                            >
                                                {/* Horário */}
                                                <span className="text-xs font-semibold text-blue-600 w-10 pt-0.5">
                                                    {ordem.horarioAgendado}
                                                </span>

                                                {/* Informações */}
                                                <div className="relative pl-4 border-l-2 border-blue-500 space-y-0.5">

                                                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600"></span>

                                                    <h3 className="text-xs font-bold text-gray-800">
                                                        {ordem.descricao}
                                                    </h3>

                                                    <p className="text-[11px] text-gray-500">
                                                        {ordem.equipamento?.codigo} • {ordem.equipamento?.nome}
                                                    </p>

                                                    <p className="text-[11px] text-gray-400">
                                                        Técnico: {ordem.tecnico}
                                                    </p>

                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="text-xs text-blue-600 font-medium hover:underline pt-4 mt-2 border-t border-gray-100 block"
                                >
                                    Ver agenda completa
                                </a>
                            </div>


                            {/* Widget 2: Equipamentos Críticos */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                                        Equipamentos críticos
                                    </h2>

                                    <div className="space-y-3 text-xs">

                                        {equipamentosCriticos.map((equipamento) => (
                                            <div
                                                key={equipamento.id}
                                                className="flex items-center justify-between pb-2 border-b border-gray-50"
                                            >

                                                <div className="flex items-center gap-2">

                                                    {/* Bolinha de acordo com o status */}
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${equipamento.status === "parado"
                                                                ? "bg-red-500"
                                                                : equipamento.status === "atencao"
                                                                    ? "bg-amber-500"
                                                                    : equipamento.status === "em manutencao"
                                                                        ? "bg-blue-500"
                                                                        : "bg-green-500"
                                                            }`}
                                                    ></span>

                                                    <div>
                                                        <strong className="text-gray-800">
                                                            {equipamento.codigo}
                                                        </strong>

                                                        <span className="text-gray-500">
                                                            {" "}{equipamento.nome}
                                                        </span>

                                                        <p className="text-[10px] text-gray-400">
                                                            Setor {equipamento.setor}
                                                        </p>
                                                    </div>

                                                </div>

                                                {/* Status */}
                                                <span
                                                    className={`font-medium text-[11px] ${equipamento.status === "parado"
                                                            ? "text-red-500"
                                                            : equipamento.status === "atencao"
                                                                ? "text-amber-500"
                                                                : equipamento.status === "em manutencao"
                                                                    ? "text-blue-500"
                                                                    : "text-green-500"
                                                        }`}
                                                >
                                                    {equipamento.status === "parado"
                                                        ? "Parado"
                                                        : equipamento.status === "atencao"
                                                            ? "Atenção"
                                                            : equipamento.status === "em manutencao"
                                                                ? "Em manutenção"
                                                                : equipamento.status === "operando"
                                                                    ? "Operando"
                                                                    : equipamento.status}
                                                </span>

                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="text-xs text-blue-600 font-medium hover:underline pt-4 mt-2 border-t border-gray-100 block"
                                >
                                    Ver todos os equipamentos
                                </a>
                            </div>

                            <div className="bg-white rounded-xl border border-gray-200 p-6">

  <div className="mb-5">
    <h2 className="text-lg font-bold text-gray-800">
      Histórico dos equipamentos
    </h2>

    <p className="text-xs text-gray-400 mt-1">
      Histórico resumido de ordens de serviço por equipamento
    </p>
  </div>

  <div className="overflow-x-auto">

    <table className="w-full text-left">

      <thead>
        <tr className="border-b border-gray-200 text-xs text-gray-400">
          <th className="py-3 px-3 font-medium">
            Equipamento
          </th>

          <th className="py-3 px-3 font-medium">
            OS
          </th>

          <th className="py-3 px-3 font-medium">
            Descrição
          </th>

          <th className="py-3 px-3 font-medium">
            Tipo
          </th>

          <th className="py-3 px-3 font-medium">
            Técnico
          </th>

          <th className="py-3 px-3 font-medium">
            Data
          </th>

          <th className="py-3 px-3 font-medium">
            Status
          </th>
        </tr>
      </thead>

      <tbody>

        {dados.equipamentos.map((equipamento) => {

          const historico = getHistoricoEquipamento(
            equipamento.id
          );

          return historico.map((ordem) => (

            <tr
              key={ordem.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >

              {/* Equipamento */}
              <td className="py-3 px-3">

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    {equipamento.codigo}
                  </p>

                  <p className="text-[11px] text-gray-500">
                    {equipamento.nome}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    {equipamento.setor}
                  </p>
                </div>

              </td>

              {/* OS */}
              <td className="py-3 px-3">
                <span className="text-xs font-medium text-blue-600">
                  {ordem.codigo}
                </span>
              </td>

              {/* Descrição */}
              <td className="py-3 px-3">
                <span className="text-xs text-gray-700">
                  {ordem.descricao}
                </span>
              </td>

              {/* Tipo */}
              <td className="py-3 px-3">

                <span className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {ordem.tipo}
                </span>

              </td>

              {/* Técnico */}
              <td className="py-3 px-3">
                <span className="text-xs text-gray-600">
                  {ordem.tecnico}
                </span>
              </td>

              {/* Data */}
              <td className="py-3 px-3">
                <span className="text-xs text-gray-500">
                  {new Date(
                    ordem.vencimento
                  ).toLocaleDateString("pt-BR")}
                </span>
              </td>

              {/* Status */}
              <td className="py-3 px-3">

                <span
                  className={`text-[11px] font-medium ${
                    ordem.status === "concluida"
                      ? "text-green-600"
                      : ordem.status === "vencida"
                      ? "text-red-600"
                      : ordem.status === "em andamento"
                      ? "text-blue-600"
                      : ordem.status === "aberta"
                      ? "text-amber-600"
                      : "text-gray-500"
                  }`}
                >
                  {ordem.status}
                </span>

              </td>

            </tr>

          ));

        })}

      </tbody>

    </table>

  </div>

</div>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}