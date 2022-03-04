import React from 'react'
import pizza from '../assets/img/pizza.png'
import sushi from '../assets/img/sushi.png'
import taco from '../assets/img/taco.png'
import vegetable from '../assets/img/vegetable.png'




const Populares = () => {


  const cajasCate = document.querySelectorAll('.cajascategoria')
  const cajasPopu = document.querySelectorAll('.cajapopulares')

   
  
    for(let i=0;i<cajasCate.length;i++){
        cajasCate[i].addEventListener('click',function(e){
            const current = document.getElementsByClassName('active')
            current[0].className = current[0].className.replace("active"," ")
            this.className +='active';
            const filter = e.target.dataset.filter
            cajasPopu.forEach((producto)=>{
                if(filter === 'all'){
                    producto.style.display = 'block'
                }else if(producto.classList.contains(filter)){
                    producto.style.display ='block';

                }else{
                    producto.style.display = 'none'
                }



            })
        })
    }   







  return (
    <>
           <section className='categorias'>
                <h2 className='titulocategorias'>Categorias</h2>
                <div className='contenedorcategorias'>
                   
                    <div className='cajascategorias active'>
                            <img src={pizza}/>
                            <p className='nombrecategoria'>Pizzas-Italiano</p>
                    </div>
                    <div className='cajascategorias'>
                            <img src={sushi}/>
                            <p className='nombrecategoria'>Sushi</p>
                    </div>
                    <div className='cajascategorias'>
                            <img src={taco}/>
                            <p className='nombrecategoria'>Taco</p>
                    </div>
                    <div className='cajascategorias'>
                            <img src={vegetable}/>
                            <p className='nombrecategoria'>Vegetariano</p>
                    </div>




                </div>


        </section>

        <section className='populares'>
            <h2 className='titulopopulares'>
                Restaurantes Populares
            </h2>
            <div  className='contenedorpopulares'>
               <div className='cajapopulares pizza ' data-filter = "Pizza">
                  <a href='https://fervent-poitras-91798a.netlify.app'><p className='tiporestaurante'>Pizza</p>
                    <p className='descuento'>30%</p>
                    <h3 className='nombrerestaurante'>Pizzodino Taglio</h3></a> 
                </div>
                <div className='cajapopulares sushi' data-filter = "Pescado">
                    <p className='tiporestaurante'>Pescados</p>
                    <p className='descuento'>15%</p>
                    <h3 className='nombrerestaurante'>El Señor Delfin</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Hamburguesa">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Pescado">
                    <p className='tiporestaurante'>Pescados</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
                <div className='cajapopulares pizza' data-filter = "Pizza">
                    <p className='tiporestaurante'>Pizza</p>
                    <p className='descuento'>30%</p>
                    <h3 className='nombrerestaurante'>Pizzodino Taglio</h3>
                </div>
                <div className='cajapopulares sushi' data-filter = "Vegetariano">
                    <p className='tiporestaurante'>Sushi</p>
                    <p className='descuento'>15%</p>
                    <h3 className='nombrerestaurante'>El Señor Delfin</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Hamburguesa">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Sushi">
                    <p className='tiporestaurante'>Sushi</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
                <div className='cajapopulares pizza' data-filter = "Pizza">
                    <p className='tiporestaurante'>Pizza</p>
                    <p className='descuento'>30%</p>
                    <h3 className='nombrerestaurante'>Pizzodino Taglio</h3>
                </div>
                <div className='cajapopulares sushi' data-filter = "Pescado">
                    <p className='tiporestaurante'>Pescados</p>
                    <p className='descuento'>15%</p>
                    <h3 className='nombrerestaurante'>El Señor Delfin</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Vegetariano">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Sushi">
                    <p className='tiporestaurante'>Sushi</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Vegetariano">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Sushi">
                    <p className='tiporestaurante'>Sushi</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>   <div className='cajapopulares hamburguesa'>
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Pescado">
                    <p className='tiporestaurante'>Pescados</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Hamburguesa">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Sushi">
                    <p className='tiporestaurante'>Sushi</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
                <div className='cajapopulares hamburguesa' data-filter = "Hamburguesa">
                    <p className='tiporestaurante'>Hamburguesa</p>
                    <p className='descuento'>20%</p>
                    <h3 className='nombrerestaurante'>Sanguchon </h3>
                </div>
                <div className='cajapopulares vegetariano' data-filter = "Pescado">
                    <p className='tiporestaurante'>Pescados</p>
                    <p className='descuento'>10%</p>
                    <h3 className='nombrerestaurante'>Entre Redes</h3>
                </div>
            </div>
        </section>
    
    
    
    
    
    </>
  )
}

export default Populares