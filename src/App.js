import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
// import Forms from './Components/Forms/Forms';
import Nav from './Components/Nav/Nav';

function App() {
  // Button click dark mode 
  const [mode, setMode] = useState('dark');

  // Button text
  const [btntx, setBtntx] = useState('Enable Dark mode');


  // Button click dark mode 
  const lightDark = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtntx('Enable light mode')
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'blue';
    }
    else{
      setMode('light')
      setBtntx('Enable Dark mode')
      document.body.style.backgroundColor = 'yellow';
    }
  }

  // Button text


  return (
    <div className="App">
      <Nav lightDark={lightDark} btntx={btntx} mode={mode}></Nav>
      {/* <Forms/>*/}
      <About/>
    </div>
  );
}

export default App;
