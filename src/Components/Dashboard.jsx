import React, { useContext } from 'react'
import { userContext } from '../store/user/Context'

function Dashboard() {

    const {state:{ user:{alias}}} = useContext(userContext)

  return (
        <h2>Hello onboard {alias} 🤩🤩!!</h2>
  )
}

export default Dashboard