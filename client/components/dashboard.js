import React from 'react'

import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id='title'> Dashboard </div>
      <Link to="/dashboard/profile/39c61aaa-1036-4ed9-bc46-36f97bb6ddf5"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard