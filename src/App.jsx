// Components
import { NavBar } from './components/navBar/NavBar'
import { SectionHome } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { MainPrincipal } from './App.styled';
import { Projects } from './components/projects/Projects'
import SectionContact from './components/contact/Contact';

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

        {/* CONTACT */}
        <SectionContact />


      </MainPrincipal>

    </div>


  )
}

export default App

