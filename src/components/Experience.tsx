
export const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-4">
                Experiencia
            </h2>
        </div>
        <div>
            <ol className="group/list">
                <li className="mb-12">
                    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 
                    hover:bg-slate-950 hover:bg-opacity-10 p-2 rounded-lg duration-300">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                            2023 - 2024
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="group-hover:text-teal-400 font-medium leading-snug text-slate-200">
                                Tsoft (Multinacional) – Desarrollador Frontend Junior 
                            </h3>
                            <p className="mt-2 leading-normal text-sm">
                                Proyecto Prisma: Visualización de métricas de medios de pago
                                Participé activamente en el desarrollo del proyecto Prisma, enfocado en la visualización de
                                métricas relacionadas con los medios de pago.
                                Desarrollé en distintos componentes interactivos utilizando framework Ionic, React y JavaScript,
                                mejorando la experiencia de usuario y la integración con el backend, para la implementación de
                                nuevas funcionalidades y la resolución de bugs.
                                Utilicé Git para control de versiones y Bitbucket como plataforma de repositorio, 
                                Contribuí a la optimización del rendimiento de las aplicaciones frontend, mejorando tiempos de
                                carga y la interacción con el usuario.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 
                    hover:bg-slate-950 hover:bg-opacity-10 p-2 rounded-lg duration-300">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                            2023 - 2024
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="group-hover:text-teal-400 font-medium leading-snug text-slate-200">
                                Tsoft (Multinacional) – Analista de Soporte Técnico
                            </h3>
                            <p className="mt-2 leading-normal text-sm">
                                Carries (Área de Telefónica) : Brindé soporte técnico a usuarios, resolviendo incidencias en plataformas y aplicaciones internas.
                                Utilicé herramientas como Oracle SQL, WinSCP, y Putty para diagnosticar y resolver problemas,
                                analizando procesos en PL/SQL y scripts en Unix
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 
                    hover:bg-slate-950 hover:bg-opacity-10 p-2 rounded-lg duration-300">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                            2020 - Presente
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="group-hover:text-teal-400 font-medium leading-snug text-slate-200">
                                Profesor Particular de Matemáticas
                            </h3>
                            <p className="mt-2 leading-normal text-sm">
                                Impartí clases particulares de matemáticas a estudiantes de nivel secundario
                            </p>   
                        </div>
                    </div>
                </li>
            </ol>
        </div>
        <div className="mt-12">
            <a  
                className="p-1 leading-tight text-slate-200 hover:text-teal-400 font-medium"
                href="https://drive.google.com/file/d/1AzvgaT2xZezVWFFCIb-xsCAmQRcN1Aef/view?usp=drive_link"
                target="_blank" 
                rel="noreferrer noopener"
            >
                <span>Currículum</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="ml-1 h-4 w-4 inline-block" 
                    aria-hidden="true"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                        clip-rule="evenodd">
                    </path>
                </svg>
            </a>
        </div>
    </section>
  )
}
