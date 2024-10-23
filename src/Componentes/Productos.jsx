import React from 'react'
import { Producto } from '../Minicomponentes/Producto'

export const Productos = () => {

  const arrayProductos = [

    { "id" : 0,
      "imgref" : 'paint',
      "titulo" : 'Necesidades del usuario',
      "texto" : 'Descubra los puntos débiles y comprenda el comportamiento del usuario'
    },
    { "id" : 1,
      "imgref" : 'light',
      "titulo" : 'Generación de ideas',
      "texto" : 'Conviértase en líder de categoría utilizando designops y diseño UX/UI'
    },
    { "id" : 2,
      "imgref" : 'design',
      "titulo" : 'Prototipar una idea',
      "texto" : 'Valide ideas con un prototipo interactivo de su visión'
    },
    { "id" : 3,
      "imgref" : 'product',
      "titulo" : 'Diseñar un nuevo producto',
      "texto" : 'Lanza un MVP con la mejor experiencia de usuario de su clase'
    },
    { "id" : 4,
      "imgref" : 'code',
      "titulo" : 'Abastecimiento',
      "texto" : 'Una vez que tenga un prototipo de producto con el que esté satisfecho, es hora'
    },
    { "id" : 5,
      "imgref" : 'rocket',
      "titulo" : 'Elaborar un plan de marketing',
      "texto" : 'La forma más sencilla de gestionar sus proyectos y tareas.'
    },
  ]

  return (
    <section className="flex flex-col items-center bg-grisfondo py-12 px-10">
      <div className='max-w-7xl flex flex-col items-center'>
      <h1 className="text-4xl lg:text-5xl">El nuevo producto
        Proceso de desarrollo</h1>
        <div className="flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-12">
          {arrayProductos.map((prod,index) => (
            <Producto key={index} id = {index} imgref={prod.imgref} titulo={prod.titulo} texto={prod.texto}/>
          ))}
        </div>
      </div>
        
    </section>
  )
}
