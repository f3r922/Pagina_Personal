import { projects } from "../data/projects"

export const Projects = () => {
  return (
    <section 
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
        <div>
            <h2 
            className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-4"
            >Algunos Proyectos</h2>
        </div>
        <div>
            <ul className="group/list">
                { projects.map( project => (
                                    <li key={project.id}  className="mb-12">
                                    <div
                                        className="group relative grid gap-4 pb-1 transition-all
                                        sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:/list:opacity-100
                                        hover:bg-slate-950 hover:bg-opacity-10 p-2 rounded-lg duration-300"
                                    >
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a  
                                                    className="font-medium leading-tight text-slate-200 hover:text-teal-500"
                                                    href={project.url}
                                                    target="_blank" rel="noreferrer noopener"
                                                >
                                                    {project.title}
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        viewBox="0 0 20 20" 
                                                        fill="currentColor" 
                                                        className="ml-1 inline-block h-4 w-4" 
                                                        aria-hidden="true">
                                                            <path 
                                                                fill-rule="evenodd" 
                                                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                                                                clip-rule="evenodd">
                                                            </path>
                                                    </svg>
                                                </a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">
                                                {project.description}
                                            </p>
                                            <ul className="mt-2 flex flex-wrap">
                                                {project.techs.map( tech => (
                                                    <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center bg-teal-800 text-teal-200 text-xs font-medium 
                                                        px-2 py-1 rounded-xl leading-5"
                                                    >{tech}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            width={200}
                                            height={50}
                                            className="aspect-video rounded border-2 border-slate-200/10 group-hover:border-slate-200/30
                                            transition sm:order-1 sm:col-span-2 sm:translate-y-1"
                                        />
                                    </div>
                                </li>
                ))}

            </ul>
        </div>
    </section>
  )
}
