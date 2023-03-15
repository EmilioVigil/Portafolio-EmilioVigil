// Components
import { NavBar } from './components/navBar/NavBar'
import { SectionHome } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { MainPrincipal } from './App.styled';
import { Projects } from './components/projects/Projects'
import SectionContact from './components/contact/Contact';
import { SectionRedes } from './components/redes/Redes';
import { SectionFooter } from './components/footer/Footer';


function App() {

  return (
    <>
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

        {/* REDES */}
        <SectionRedes />

        {/* FOOTER */}
        <SectionFooter />
      </MainPrincipal>

    </>


  )
}

export default App

