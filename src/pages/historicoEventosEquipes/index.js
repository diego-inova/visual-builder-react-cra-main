import React from 'react'
import { Helmet } from 'react-helmet'
import HistoricoEquipes from 'components/HistoricoEventosEquipes'

const HistoricoEventosEquipes = () => {
  return (
    <div>
      <Helmet title="Historico de Eventos das Equipes" />
      <HistoricoEquipes />
      <div />
    </div>
  )
}

export default HistoricoEventosEquipes

