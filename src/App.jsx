// Components
import { NavBar } from './components/navBar/NavBar'
import { SectionHome } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { MainPrincipal } from './App.styled';
import Projects from './components/projects/Projects';

function App() {

  return (
    <div>
      <MainPrincipal>

        {/* NAV */}
        <NavBar />

        {/* HOME */}
        <SectionHome />

        {/* SKILLS TECHS */}
        <Skills />

        {/* PROJECTS */}
        <Projects />



      </MainPrincipal>

    </div>


  )
}

export default App

