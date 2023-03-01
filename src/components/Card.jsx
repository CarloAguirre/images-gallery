import React from 'react'

import "../index.css"

export default function Card({img, title, desc, fullWidth}) {


  return (
    <>

    {/* {
        (fullWidth === true)
            ? <img src={img} alt="imagen de chile" className='card-img full-width' />
            : <img src={img} alt="imagen de chile" className='card-img half-width' />
    } */}



{
        (fullWidth === true)
            ?
            <div className='full-width'>
              <img src={img} alt="imagen de chile" className='card-img full-width' />
              <h2 className='title'>{title}</h2>
              <p className='desc'>{desc}</p>
            </div> 
            : 
            <div className='half-width'>
              <img src={img} alt="imagen de chile" className='card-img half-width' />
              <h2 className='title'>{title}</h2>
              <p className='desc'>{desc}</p>
            </div>
    }




        

            {/* <div className='half-width'>
              <img src={img} alt="imagen de chile" className='card-img half-width' />
              <h2 className='title'>{title}</h2>
              <p className='desc'>{desc}</p>
            </div> */}

    </>

            
  )
}
