// import React, { useState, useEffect } from 'react'

// function App() {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [userList, setUserList] = useState([]);


//   useEffect(() => {
//     const getPokemon = async () => {
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon');

//         if (!response.ok) {
//           throw new Error('eror woy');
//         }

//         const data = await response.json();

//         setPokemonList(data.results);
//       } catch (error) {
//         console.log(error.message);
//       }

//       // fetch('https://pokeapi.co/api/v2/pokemon')
//       //   .then((response) => response.json())
//       //   .then((data) => setPokemonList(data.results));
//     };
   
//     getPokemon();
//   }, []);

//   useEffect(() => {
//     const getUsers = async () => {
//       const response = await fetch('https://dummyjson.com/users');
//       const data = await response.json();

//       setUserList(data.users);
//     };

//     getUsers();
//   }, []);
//   //   fetch('https://dummyjson.com/users')
//   //     .then(res => res.json())
//   //     .then(data => setUserList(data.users));
//   // }, []);

 
//   return (
//      <div
//        style={{ display: 'flex', gap: '40px',}}>
       
//        <div style={{ display: 'flex', flexDirection: 'column' }}>
//          {pokemonList.map((pokemon, index) => {
//            return <span key={index}>{pokemon.name}</span>
//          })}
//        </div>

//        <div style={{ display: 'flex', flexDirection: 'column' }}>
//           {userList.map((user, index) => {
//             return <span key={index}>{user.firstName}</span>
//           })}
//         </div>
 
//      </div>
//    )
//  }

// export default App


// import Quotes from "./components/Quotes";
// import Pokemon from "./components/Pokemon";
// import User from "./components/User";

// function App() {
//   return (
//     <div>
//       <h1>Hasill</h1>
//       {/* <Quotes /> */}
//       <Pokemon />
//       <User />
//     </div>
//   );
// }

// export default App;


// import Comment from "./components/comment";
// import CommentForm from "./components/comment/CommentForm";

// function App() {
//   return (
//     <main className="min-h-screen bg-gray-100 flex justify-center p-6">
//       <section className="w-full max-w-xl bg-white rounded-xl p-6 shadow-sm">
//         <CommentForm />
//       </section>
//     </main>
//   );
// }

// export default App;

