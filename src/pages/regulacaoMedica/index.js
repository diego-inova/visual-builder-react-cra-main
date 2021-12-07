import React from 'react'
import { Helmet } from 'react-helmet'
import RegulacaoMedica from 'components/RegulacaoMedica'

const PageRegulacaoMedica = () => {
  return (
    <div>
      <Helmet title="Regulacao Medica" />
      <RegulacaoMedica />
      <div />
    </div>
  )
}

export default PageRegulacaoMedica

