export default function Navbar() {
    return (
      <header className=" bg-white my-10 h-11">
        <div className="flex  items-center justify-between px-4 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2 text-black no-underline">
           <img src="logo-33.svg" alt="Logo" />
            
          </a>
          <div className="flex items-center gap-4">
            <button className="flex font-Roboto text-center content-center">
             <img src="mas.svg" alt="" className="px-1" />
              <p>Crear actividad</p>
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent cursor-pointer">
              <img src="perfil.svg" alt="" />
                Mi cuenta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  
  
  