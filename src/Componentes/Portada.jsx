import React from 'react';
import '../Estilos/portada.css'

export const Portada = () => {
  return (
    <section className="bg-grisfondo w-full h-[700px] flex justify-center items-center">
        <div className="w-[1000px] h-[600px] flex items-center justify-center relative">
            <span className="bg-verdeclaro h-[400px] w-[400px] rounded-3xl absolute left-0">
            </span>
            <span className="bg-azulfuerte w-[700px] h-[500px] rounded-3xl absolute right-0">
            </span>
            <div className='flex w-[700px] h-[500px] z-50 absolute left-20 bottom-[-50px]'>
            <span className="bloqueimg rounded-3xl"></span>
            </div>
            
        </div>
    </section>
  )
}
