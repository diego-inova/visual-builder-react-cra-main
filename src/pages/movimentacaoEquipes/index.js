import React from 'react'
import { Helmet } from 'react-helmet'
import MovEquipes from 'components/MovimentacaoEquipes'

const MovimentacaoEquipes = () => {
  return (
    <div>
      <Helmet title="Movimentacao das Equipes" />
      <MovEquipes />
      <div />
    </div>
  )
}

export default MovimentacaoEquipes

