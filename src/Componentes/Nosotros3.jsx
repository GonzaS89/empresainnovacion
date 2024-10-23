import React from 'react'
import { Info } from '../Minicomponentes/Info'

export const Nosotros3 = () => {
  return (
    <div className='flex flex-col items-center py-12 px-10'>
      <div className='max-w-7xl md:grid grid-cols-2 lg:grid-cols-3 gap-4'>
      <Info titulo = {'diseño de apps'} texto = {'Checkea nuestro blog para enterarte de las últimas novedades'}/>
        <Info titulo = {'desarrollo'} texto = {'Estamos desarrollando grandes cosas apartir de hoy'}/>
        <Info titulo = {'marketing'} texto = {'Una buena estratégia de marketing es el mejor plan'}/>
      </div>
        
    </div>
  )
}
