import React from 'react'
import Products from './Products'

// Carousel con imagenes del Home y llamada a <Products/>

function Home() {

  let carrouselContent = [
    {
      img:'slider-img4',
      title:'Los mejores productos orgánicos!',
      description:'Envíos a la puerta de tu casa'
    },
    {
      img:'slider-img1',
      title:'100% orgánicos y de productores locales',
      description:'Del campo directo a tu puerta.'
    },
    {
      img:'slider-img2',
      title:'Precios inigualables',
      description:'Productos sin intermediarios'
    },
    {
      img:'slider-img5',
      title:'Envíos a todo el país',
      description:'Con nuestro Delivery Orgánico'
    }
  ]

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
         <div className="carousel-inner">
           {
             carrouselContent.map((value, index)=>{
               return (
                <div className={`carousel-item ${index == 0? 'active':''}`} >
                  <img src={`/assets/images/slider/${value.img}.jpg`} className="d-block w-100" alt="primer-slide" height="auto"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h1>{value.title}</h1>
                      <p>{value.description}</p>
                    </div>
                </div>
               )

             })
           }
        </div> 
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previo</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <Products />
    </div>
  )
}

export default Home