export default function Header(){
    return(
        <>
            <header className="flex flex-row justify-between">

                <div className="px-5 py-3">
                    <i className="bi bi-justify-left text-2xl"></i>
                </div>

                <div className="flex flex-row items-center gap-4 px-10 py-3">

                    <div>
                        <i class="bi bi-bell text-2xl"></i>
                    </div>

                    <div>
                        <p className="text-3xl">|</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <i class="bi bi-cc-circle-fill text-2xl"></i>
                        <p className="font-sans text-base">Carlos Carrilo</p>
                    </div>

                </div>
            </header>
        </>
    )
}