import React from 'react';
import '../Estilos/portada.css'

export const Portada = () => {
  return (
    <section className="bg-grisfondo w-full h-[700px] flex justify-center items-center">
        <div className="w-[1000px] h-[600px] flex items-center justify-center relative">
            <span className="bg-verdeclaro h-[400px] w-[440px] rounded-3xl absolute left-0">
            </span>
            <span className="bg-azulfuerte w-[780px] h-[550px] rounded-3xl absolute right-0">
            </span>
            <div className='w-[800px] h-[500px] flex justify-space-between gap-10 basis 2/4 z-50 absolute left-20 bottom-[-20px] text-left'>
            <span className="bloqueimg rounded-3xl"></span>
            <div className='basis-2/4 text-white flex flex-col items-start flex gap-4'>
              <h2 className='text-5xl'>Empresa de innovación</h2>
              <p className='text-sm leading-loose font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit impedit distinctio commodi. Voluptatum expedita esse, necessitatibus porro voluptates repudiandae delectus saepe voluptatem dolore reprehenderit facilis quisquam. Provident mollitia repudiandae nisi?</p>
              <button className='border-white w-[150px] border-2 uppercase p-[10px] rounded-[20px] tracking-widest text-sm'>ver más</button>
            </div>
            </div>
            
        </div>
    </section>
  )
}
