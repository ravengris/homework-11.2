import React from 'react'

import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id='title'> Main </div>
      <Link to="/dashboard/profile/39c61aaa-1036-4ed9-bc46-36f97bb6ddf5"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain