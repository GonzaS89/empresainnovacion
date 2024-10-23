import React from 'react'
import { Logro } from '../Minicomponentes/Logro'

export const Logros = () => {
  return (
    <div className="flex justify-center pb-10 px-10 w-full">
      <div className="max-w-7xl">
      <div className="w-[1200px] grid grid-cols-2 place-items-center lg:flex justify-between">
        <Logro titulo = {'premios ganados'} numeros = {17}/>
        <Logro titulo = {'años de exp.'} numeros = {16}/>
        <Logro titulo = {'clientes'} numeros = {508}/>
        <Logro titulo = {'proyectos'} numeros = {950}/>
      </div>
      </div>
    </div>
  )
}
