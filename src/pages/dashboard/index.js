import React from 'react'
import { Helmet } from 'react-helmet'
import Dash from 'components/Dashboard'

const Dashboard = () => {
  return (
    <div>
      <Helmet title="Dashboard" />
      <Dash />
      <div />
    </div>
  )
}

export default Dashboard

