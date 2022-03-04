import React from 'react'
import insta from '../assets/img/instagram.png'
import face from '../assets/img/facebook.png'
import twitter from '../assets/img/gorjeo.png'

const Footer = () => {
  return (
    <>
    
        <footer className='piedepagina'>

            <div className='contenedorpiedepagina'>

                <div className='piedepaginacontactos'>
                        <li className='contactostitulo'>CONTACTOS</li>
                        <li>Direccion : Los Andres 890 - Barranco</li>
                        <li><a  className='telefonowsp' href='https://wa.me/51936210916?text=Hola+Bienvenido+a+Zimma+Delivery+%21%0D%0A%0D%0A1.-+Quiero+Afiliar+mi+Restaurante%0D%0A2.-+Tengo+una+duda%0D%0A3.-+Cuale+son+las+comisiones'> Telefono : +51 987-896-874</a></li>  
                        <li>Correo : zimmadelivery@zimdelivery.com</li>
                </div>
                <div className='redessociales'>
                       <a href='https://www.facebook.com/anzg07'><img src={face}/></a> 
                        <a href='https://www.instagram.com/'><img src={insta}/></a>
                        <img src={twitter}/>
                </div>




            </div>



        </footer>


    
    
    </>
  )
}

export default Footer