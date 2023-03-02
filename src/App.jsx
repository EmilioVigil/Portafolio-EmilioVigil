// Components
import { NavBar } from './components/navBar/NavBar'
import { SectionHome } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { MainPrincipal } from './App.styled';


function App() {

  return (
    <div>
      <MainPrincipal>
        <NavBar />
        <SectionHome />
        <Skills />


      </MainPrincipal>

    </div>


  )
}

export default App

// Demo para ver
// https://codepen.io/CodeBoomer/pen/dXgyPq