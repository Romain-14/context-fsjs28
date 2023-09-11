import React, { useContext, useEffect } from 'react'
import { contextGlobal } from '../Context/Index'
import { useNavigate } from 'react-router-dom'

function Signout() {

    const navigate = useNavigate();

    const {signout} = useContext(contextGlobal)

    useEffect(()=>{

        signout();
        navigate("/");
    }, [])

  return null
}

export default Signout