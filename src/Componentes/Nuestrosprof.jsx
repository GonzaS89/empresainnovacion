import React from 'react';
import '../Estilos/profesionales.css';

export const Nuestrosprof = () => {
  return (
    <div className="flex flex-col items-center py-12 px-12 w-full">
      <div className="max-w-7xl">
      <h1 className="text-4xl  lg:text-5xl">Sobre nuestros profesionales</h1>
        <p className="text-2xl mt-6 leading-loose">Somos un equipo de personas valiosas, con un enfoque confiable en el trabajo y pasiones y objetivos de vida interesantes.</p>
        <span className="img-profesionales flex rounded-3xl mt-8"></span>
      </div>
        
    </div>
  )
}
