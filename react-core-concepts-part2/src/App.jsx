import Counter from './counter';
import Users from './Users';
import Friends from './Friends';
import './App.css';
import { Suspense } from 'react';
import Post from './post';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// }
const fetchPost = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}
function App() {
  // const fetchPromise = fetchFriends();
  const fetchPosts = fetchPost();
  function handleClick() {
    alert('Habibi!')
  }
  const handleClick2 = () => {
    alert('ERA 2!')   
  }

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Suspense fallback={<h2>Loading Users...</h2>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense> */}
{/* 
      <Suspense fallback={<h2>Loading Friends...</h2>}>
        <Friends fetchPromise = {fetchPromise}></Friends>
      </Suspense> */}
      <Suspense fallback={<h2>Loading Post...</h2>}>
        <Post fetchPosts = {fetchPosts}></Post>
      </Suspense>

      <Counter></Counter>

      
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click Me</button>
    </>
  );
}

export default App
