export default function ManutControl() {
  return (
    <>
      <main className="bg-slate-100">
        <nav>

          <div className="flex flex-row p-5 justify-between">

            <div>
              <h1 className="flex flex-col font-bold text-2xl">Bom dia, Carlos</h1>
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
      </main>
    </>
  )
}