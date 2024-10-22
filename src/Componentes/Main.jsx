import React from 'react'
import { Portada } from './Portada'
import { Virtudes } from './Propuestas'
import { Mastexto } from './Mastexto'
import { Productos } from './Productos'
import { Nuestrosprof } from './Nuestrosprof'

export const Main = () => {
  return (
    <div>
        <Portada />
        <Virtudes />
        <Mastexto />
        <Productos />
        <Nuestrosprof />
    </div>
  )
}
