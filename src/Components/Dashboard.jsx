import React, { useContext } from 'react'
import { contextGlobal } from '../Context/Index'

function Dashboard() {

    const {state:{ user:{alias}}} = useContext(contextGlobal)

  return (
        <h2>Hello onboard {alias} 🤩🤩!!</h2>
  )
}

export default Dashboard