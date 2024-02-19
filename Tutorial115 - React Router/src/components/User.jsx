import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams()

  return (
    <h1>
      I am an user and I am {params.username}
    </h1>
  )
}

export default User
