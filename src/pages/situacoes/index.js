import React from 'react'
import { Helmet } from 'react-helmet'
import Situacao from 'components/Situacoes'

const PageSituacoes = () => {
  return (
    <div>
      <Helmet title="Situacoes" />
      <Situacao />
      <div />
    </div>
  )
}

export default PageSituacoes

