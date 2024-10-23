import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";


export const Info = (props) => {
  return (
    <div className='bg-verdeclaro flex flex-col lg:justify-evenly gap-4 lg-gap-none text-left p-5 rounded-xl max-h-96 lg:h-80'>
        <h3 className='text-azulfuerte uppercase text-xl lg:text-2xl font-bold'>{props.titulo}</h3>
        <h3 className='text-white text-2xl lg:text-3xl'>{props.texto}</h3>
        <div className='flex gap-8 items-center'>
            <h3 className='text-azulfuerte font-bold text-sm lg:text-base tracking-widest'>Ver más</h3>
            <FaLongArrowAltRight  className='text-azulfuerte'/>
        </div>
    </div>
  )
}
