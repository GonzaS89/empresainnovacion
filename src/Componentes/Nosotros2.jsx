import React from 'react'
import { Categoria } from '../Minicomponentes/Categoria';
import '../Estilos/nosotros.css';

export const Nosotros2 = () => {

    const arrayDeCategorias = [
        { name: 'diseño',
            array : ['Producto Mockup', 'Branding', 'Ilustraciones', 'UX-UI', 'Sitios Webs']
        },
        { name: 'marketing',
            array : ['SEO Marketing', 'Optimizaciones', 'Marketing Certero', 'Keys', 'Redacciones']
        },
        { name: 'desarrollo',
            array : ['Wordpress', 'Aplicaciones', 'Front-End', 'PHP', 'Javascript']
        },
        { name: 'edición de video',
            array : ['Animación', 'Motion Graphics', 'After Effects', 'Cine 4D']
        },

    ]

  return (
    <section className='bg-white p-12 flex flex-col items-center gap-8'>
        <div className='max-w-7xl flex flex-col w-full'>
        <h1 className="text-4xl lg:text-5xl text-left py-3">Nosotros construimos productos de calidad</h1>
        <p className='text-2xl text-left w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reiciendis consequatur veritatis</p>
        <div className='flex flex-col justify-between gap-8 lg:flex-row mt-12 w-full'>   
        <div className="flex flex-col md:grid grid-cols-2 gap-8 lg:basis-1/2">
            {arrayDeCategorias.map( (element, index) => (
                <Categoria key={index} titulo={element.name} array={element.array}/>
            )) }
        </div>
        <span className="nosotros2-img rounded-2xl lg:basis-1/2"></span>
        </div>
        </div>
        
        
    </section>
  )
}
