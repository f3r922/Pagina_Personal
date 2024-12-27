import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"

function App() {

  return (
    <>
      <div 
        className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 bg-gradient-to-t scroll-smooth"
      >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
     </div>
    </>
  )
}

export default App
