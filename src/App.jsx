import React from 'react'

import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'


import "../src/index.css"

export default  function App() {

  const props = {
    title: "Galería de Imágenes con React",
    imgs: [{
      path: "1.jpg",
      title: "Parque Nacional Torres del Paine",
      desc: "Magallanes - Chile",
      fullWidth:true
    },
    {
      path: "2.jpg",
      title: "Geysers Del Tatio",
      desc: "Calama, Antofagasta - Chile",
      fullWidth:false
    },
    {
      path: "3.jpg",
      title: "Puerto Natales",
      desc: "Magallanes - Chile",
      fullWidth:false
    },
    {
      path: "4.jpg",
      title: "Glaciar Perito Moreno",
      desc: "Natales - Chile",
      fullWidth:true
    },
    {
      path: "5.jpg",
      title: "Volcan Villarrica",
      desc: "Los Ríos - Chile",
      fullWidth:false
    },
    {
      path: "6.jpg",
      title: "Desierto de Atacama",
      desc: "Antofagasta - Chile",
      fullWidth:false
    },
    {
      path: "7.jpg",
      title: "Isla de Pascua",
      desc: "Valparaíso - Chile",
      fullWidth:true
    },
    {
      path: "8.jpg",
      title: "Salar de Atacama",
      desc: "Antofagasta - Chile",
      fullWidth:false
    },
    {
      path: "9.jpg",
      title: "Chiu Chiu",
      desc: "San Pedro - Chile ",
      fullWidth:false
    }],   

  }

  return (
    <>

      <Header title={ props.title }/>
      
      <div className='cardGrid'>
        {
          props.imgs.map(img => <Card img={ img.path } title={ img.title } desc={ img.desc } fullWidth={ img.fullWidth } key={ img.title }/>)
        }
      </div>

      <Footer />
      
    </>
  )
}
