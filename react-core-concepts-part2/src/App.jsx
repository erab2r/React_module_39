import Counter from './counter';
import './App.css'

function App() {
  function handleClick() {
    alert('Habibi!')
  }
  const handleClick2 = () => {
    alert('ERA 2!')
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click Me</button>
    </>
  )
}

export default App
