import dados from "../../manutcontrol_dados.json"

export default function Header(){
    return(
        <>
            <header className="flex flex-row justify-between">

                <div className="px-5 py-3">
                    <i className="bi bi-justify-left text-2xl"></i>
                </div>

                <div className="flex flex-row items-center gap-4 px-10 py-3">

                    <div>
                        <i className="bi bi-bell text-2xl"></i>
                    </div>

                    <div>
                        <p className="text-3xl">|</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-lg">
                            RA
                        </div>
                        <p className="font-sans text-base">{dados.usuario}</p>
                    </div>

                </div>
            </header>
        </>
    )
}