import { useState } from "react";

export default function Registrar() {
const [nome, setNome] = useState ("");
const[email, setEmail] = useState("")

const resgistrar = async (event) => {
  event.preventeDaefault();
  try{
    await fetch('http://locoalhost:3000/usuarios',{
      method: 'POST' , 
      headers: { 'Content-Type':'Application/json'},
      body: JSON.stringify({
        nome:nome,
        email:email
      })
    })
  }catch{
    
  }
}
  return (
        
  );
}