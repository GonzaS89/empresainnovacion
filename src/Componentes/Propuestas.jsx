import React from 'react'
import { Propuesta } from '../Minicomponentes/Propuesta'

export const Virtudes = () => {

  const arrayPropuestas = [
    {
      "nombre" : "Explorar el problema",
      "imgref" : "problema"
    },
    {
      "nombre" : "Construir un ux framework",
      "imgref" : "framework"
    },
    {
      "nombre" : "Buscar y preparar",
      "imgref" : "buscar"
    },
    {
      "nombre" : "Vender una nuevo producto",
      "imgref" : "producto"
    },
    {
      "nombre" : "Creación de una nueva startup",
      "imgref" : "recaudar"
    },
    {
      "nombre" : "Antes de un rediseño completo del product",
      "imgref" : "diseño"
    }

  ]

  return (
    <section className='flex flex-col items-center bg-white py-12 px-10'>
      <div className='flex flex-col items-start gap-8 lg:max-w-7xl'>
      <h1 className='text-4xl lg:text-5xl text-left'>Prototipo de una idea de producto digital</h1>
        <div className='flex flex-col gap-8 sm:grid grid-cols-2'>
          {arrayPropuestas.map( (propuesta, index) => (
            <Propuesta key = {index} titulo = {propuesta.nombre} imgref = {propuesta.imgref}/>
          ))}
        </div>
      </div>
        
    </section>
  )
}
