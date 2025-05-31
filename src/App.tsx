import './App.css';
import MouseCircle from './Components/MouseCircle';
import Nav from './Components/Nav';
import Title from './Components/Title';

import Background from './Components/Background';

import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

let App = () => {
  return (
    <>
      <Background />

      <MouseCircle />
      <Nav />
      <Title />

      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default App