import React from 'react';
import '../Estilos/portada.css'

export const Portada = () => {
  return (
    <section className="bg-grisfondo px-[50px] pb-10 sm:py-12">
        <div className="w-full lg:max-w-7xl h-[800px] flex justify-center relative margin0Auto">
          <span className="w-full h-[300px] sm:h-[600px] sm:translate-y-14 bg-verdeclaro rounded-3xl absolute top-0 left-0"></span>
          <div className="flex sm:h-[800px] sm:w-3/4 lg:w-[1000px] h-[650px] lg:h-[700px] bg-azulfuerte absolute z-40 bottom-0 lg:bottom-auto sm:right-0 sm:top-0 rounded-3xl">
            <div className="w-full h-full flex flex-col justify-evenly lg:flex-row lg:gap-8 translate-y-[-90px] sm:translate-y-[0] lg:translate-y-[90px] lg:translate-x-[-130px]">
            <span className="bloqueimg rounded-2xl self-end sm:self-auto sm:basis-1/2 sm:translate-x-[-50px] sm:translate-y-[25px]"></span>
            <div className="w-full flex flex-col items-start px-[20px] mt-[20px] text-white text-left lg:gap-8">
              <h2 className="text-4xl lg:text-6xl font-bas">Empresa de innovacion</h2>
              <p className="text-md lg:text-lg font-thin py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nemo fugiat totam molestiae modi tempora? Ullam nesciunt cupiditate quae natus, atque, voluptatum consequatur illo, labore facilis cumque distinctio minima deserunt.</p>
              <button className="border-2 w-[150px] py-2 rounded-xl uppercase mt-2">ver más</button>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}