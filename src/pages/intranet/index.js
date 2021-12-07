import React from 'react'
import { Helmet } from 'react-helmet'
import Intranet from 'components/Intranet'

const PageIntranet = () => {
  return (
    <div>
      <Helmet title="Intranet" />
      <Intranet />
      <div />
    </div>
  )
}

export default PageIntranet

