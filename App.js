import React,{useState} from "react";
import './App.css';

function App() {
  let saludo = "Rutas en React"
  let lista = ["Lola","Jose","Alejandro"]
  let [nombre, setNombre]=useState(lista[0])
  let num = 0

  function cambiar(){
    if(num<=2){
      num=num+1;
      setNombre(lista[num])
    }else{
      num=0;
      setNombre(lista[num])
    }
  }

  return (
    <>
    <h1>{nombre}</h1>
    <button onClick={cambiar}>Cambiar</button>
    </>
    
  );
}

export default App;
