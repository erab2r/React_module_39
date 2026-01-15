import Counter from './counter';
import Users from './Users';
import './App.css';
import { Suspense } from 'react';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());
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

      <Suspense fallback={<h2>Loading Users...</h2>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <Counter></Counter>

      
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click Me</button>
    </>
  );
}

export default App
