import React from 'react'
import arakiri from '../assets/img/Logos.png'
import { signInWithGoogle } from '../Firebase'







const Cabecera = () => {
  return (
    <>

     <header className='cabecera'>
       <div className='contenedor'>
         <div className='logoimagen'>
            <img className='loguito' src={arakiri}/>
          </div>
        <nav className='flex'>
          <ul className='navegacion'>
            <li><a href='#'>Restaurantes</a></li>
            <li><a href='#'>Nosotros</a></li>
            <li><a href='#'>Como Funciona</a></li>
          </ul>
          <ul className='botonesinicio'>
            <button onClick={()=>signInWithGoogle()}  className='botondos'>Inicia con Google</button>
          </ul>
        </nav>
      

       </div>
     
       <form>
         <div className='contenedorinput'>
         <h1 className='titulo'>
         Busca los mejores restaurantes cerca a tu zona
         </h1>
         <input type="text"placeholder='Que quieres comer hoy?'/>
         </div>
       </form>
     </header>
    
    </>
    
  )
}

export default Cabecera