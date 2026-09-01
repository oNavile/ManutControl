export default function Aside() {
    return (
        <>
            <aside className="w-60 min-h-screen bg-slate-100 border-r border-gray-200 flex flex-col justify-between py-4">

                <nav className="flex flex-col gap-6">

                    <div className="p-4 ">
                        <h1 className="font-bold text-gray-800 text-2xl">
                            ManutControl
                        </h1>
                    </div>

                    <div className="navegacao">

                        <a className="flex flex-row items-center gap-4 px-6 py-2.5 bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium transition-colors">
                            <i className="bi bi-house-door-fill text-2xl"></i>
                            <h1 className="text-lg">Visão Geral</h1>
                        </a>

                        <a className="flex flex-row items-center gap-4 px-6">
                            <i className="bi bi-clipboard2-minus text-2xl"></i>
                            <h1 className="text-lg">Ordens de serviço</h1>
                        </a>

                        <a className="flex flex-row items-center gap-4 px-6">
                            <i className="bi bi-gear text-2xl"></i>
                            <h1 className="text-lg">Equipamentos</h1>
                        </a>

                        <a className="flex flex-row items-center gap-4 px-6">
                            <i className="bi bi-people text-2xl"></i>
                            <h1 className="text-lg">Técnicos</h1>
                        </a>

                    </div>

                </nav>

                <nav>

                    <a className="flex flex-row items-center gap-4 text-lg px-6">
                        <i className="bi bi-box-arrow-right"></i>
                        <p>Sair</p>
                    </a>

                </nav>

            </aside>
        </>
    )
}