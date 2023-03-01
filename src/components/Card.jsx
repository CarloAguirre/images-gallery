import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from "react-bootstrap/Button";

import "../index.css"

export default function Card({img, title, desc, fullWidth}) {


  return (
    <>

      {
          (fullWidth === true)
              ?
              <div className='full-width'>
                <img src={img} alt="imagen de chile" className='card-img full-width' />
                <h2 className='title'>{title}</h2>
                <p className='desc'>{desc}</p>
                <Button className='btn btn-light btn-outline-success p-3'>Ver más</Button>
              </div> 
              : 
              <div className='half-width'>
                <img src={img} alt="imagen de chile" className='card-img half-width' />
                <h2 className='title'>{title}</h2>
                <p className='desc'>{desc}</p>
                <Button className='btn btn-light btn-outline-success p-3'>Ver más</Button>
              </div>
      }

    </>

            
  )
}
