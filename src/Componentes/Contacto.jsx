import React from 'react'

export const Contacto = () => {
  return (
    <div className='flex flex-col  items-center py-12 px-10'>
        <div className='max-w-7xl flex flex-col md:flex-row justify-between gap-4'>
        <div className='flex flex-col md:basis-1/2'>
        <h1 className='text-3xl'>Contacto</h1>
        <form action="" className='md:full'>
            <div className='flex flex-col items-start gap-1 mt-4'>
                <label>Nombre</label>
                <input type="text" className='w-full h-12 border-b-2 border-azulfuerte placeholder:text-gray-300 p-2' placeholder='Ingresá tu nombre'/>
            </div>
            <div className='flex flex-col items-start gap-1 mt-4'>
                <label>Email</label>
                <input type="text" className='w-full h-12 border-b-2 border-azulfuerte placeholder:text-gray-300 p-2' placeholder='Ingresá tu dirección de e-mail'/>
            </div>
            <div className='flex flex-col items-start gap-1 mt-4'>
                <label>Mensaje</label>
                <textarea className='w-full h-48 border-b-2 border-azulfuerte p-2'></textarea>
            </div>
            <input type="submit" className='bg-azulfuerte rounded-3xl py-3 w-full mt-5 text-white uppercase font-semibold'/>
        </form>
        </div>
        <div className='flex flex-col md:w-2/5 bg-verdeclaro mt-12 py-8 px-6 gap-12 rounded-3xl'>
            <div>
                <h2 className='text-azulfuerte font-bold uppercase'>Llamános</h2>
                <p className='font-thin mt-5'>(0381) 4690418</p>
            </div>
            <div>
                <h2 className='text-azulfuerte font-bold uppercase'>Dirección</h2>
                <p className='font-thin mt-5'>Av. Salta 480 - San Miguel de tucumán <br />Tucumán</p>
            </div>
            <div>
                <h2 className='text-azulfuerte font-bold uppercase'>Nuestra misión</h2>
                <p className='font-bold mt-5'>Dar soporte y asistencia a todo aquel que quiera innovar</p>
            </div>
        </div>
        </div>
        
        
    </div>
  ) 
}
