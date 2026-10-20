// // // // los componentes de react tienen dos partes la parte de javascript y la parte de return donde va el html
// // // //rfc atajo |
// // // //          v
// // // // export default function App() {
// // // // //aqui va el javascript
// // // //  let carros = ["Ford", "mazda", "tesla"];

import { Route, Router, Routes } from "react-router-dom";
import { AuthLayout } from "./components/layout/AuthLayout";

 
// // // //  return(
// // // //   <ul>
// // // //     {carros.map((carros)=> <li>{carros}</li>)}
// // // //   </ul>
// // // //  )
// // //  }
// npm run dev

//  export default function app(){
//   let edad = 18
//    if (edad == 18){
//     console.log("puedes ingresar")
  
//   }else{
//     ("no puedes ingresar")
//   }

//  return(
//    <ul>{edad}</ul>
//  )

//  }



// if(cargando) return (
//   <p>Cargando los usuarios</p>
// )
//  import { Saludo } from "./components/Saludo";
// import { useState,useEffect } from "react";

// function App(){

// const [usuarios, Setusuarios] = useState([]);
// const [cargando, Setcargando] = useState([true]);

// useEffect (() => {
//   const getDatos = async () => {
//     try {
//       const response = fetch("https://jsonplaceholder.typicode.com/users");
//       const result = await response.json();
//       Setusuarios(result);
//       Setcargando(false);
      

//     } catch (error) {
//       console.log(error);
      
      
//     }
//   }
//   getDatos();

// },[]);//esto se va ejecutar una swola vez

//   return (
//     <div>
//       <h1>Lista de usuarios</h1>
//       <ul>
//         {usuarios.map(usuario=>{
//           <li>{usuario.name}, {usuario.email}</li>
//         })}
//       </ul>
//       {/* <Saludo nombre="maycol"></Saludo> */}
//     </div>
//   )
// }

// export default App

//talwing 

function App(){
    return (
        <>
        <Router>
            <Routes>
            <Route path= "/" element={<AuthLayout/>}>
            //aqui vnas las rutas hijas
            <Route index element={<login/>}></Route>
            </Route>
            </Routes>
            </Router>
        </>
    )
}

export default App