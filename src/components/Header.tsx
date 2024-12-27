import { SocialMedia } from "./SocialMedia"

export const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 
        lg:flex-col lg:justify-between lg:py-24"
    >
        <div>
            <h1 
                className="text-4xl font-bold text-slate-200
                tracking-tighter sm:text-5xl"
            >
                <a href="#">Fernando Carrizo</a>
            </h1>
            <h2 className="mt-3 text-2xl font-medium text-white tracking-tighter sm:text-xl">Frontend Developer</h2>
            <p className="mt-4 text-slate-200 max-w-xs leading-normal">
                Técnico Universitario en Programación
                Profesor en Matemática
            </p>
            <nav className="nav hidden lg:block " aria-label="In-page jump links">
                <ul className="mt-16 space-y-2 w-max">
                    <li>
                        <a href="#about" className="group flex items-center py-3">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest
                                text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                            >Sobre mi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="group flex items-center py-3">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest
                                text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                            >Experiencia</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="group flex items-center py-3">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest
                                text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                            >Proyectos</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <SocialMedia/>
        </div>
    </header>
  )
}
