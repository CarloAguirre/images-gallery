import React from 'react'
import Card from './components/Card'
import Header from './components/Header'

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

      <Header title={props.title}/>

      
      <div className='cardGrid'>
        <Card img={props.imgs[0].path} title={props.imgs[0].title} desc={props.imgs[0].desc} fullWidth={props.imgs[0].fullWidth}/>
        <Card img={props.imgs[1].path} title={props.imgs[1].title} desc={props.imgs[1].desc} fullWidth={props.imgs[1].fullWidth}/>
        <Card img={props.imgs[2].path} title={props.imgs[2].title} desc={props.imgs[2].desc} fullWidth={props.imgs[2].fullWidth} />
        <Card img={props.imgs[3].path} title={props.imgs[3].title} desc={props.imgs[3].desc} fullWidth={props.imgs[3].fullWidth}/>
        <Card img={props.imgs[4].path} title={props.imgs[4].title} desc={props.imgs[4].desc} fullWidth={props.imgs[4].fullWidth}/>
        <Card img={props.imgs[5].path} title={props.imgs[5].title} desc={props.imgs[5].desc} fullWidth={props.imgs[5].fullWidth}/>
        <Card img={props.imgs[6].path} title={props.imgs[6].title} desc={props.imgs[6].desc} fullWidth={props.imgs[6].fullWidth}/>
        <Card img={props.imgs[7].path} title={props.imgs[7].title} desc={props.imgs[7].desc} fullWidth={props.imgs[7].fullWidth}/>
        <Card img={props.imgs[8].path} title={props.imgs[8].title} desc={props.imgs[8].desc} fullWidth={props.imgs[8].fullWidth}/>
      </div>

    </>
  )
}
