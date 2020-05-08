import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const PhoneItem = (props) => {
  const { imageFileName, name, price, id, processor, screen, ram } = props
  return (
    <div>
      <span>
        {id} - {name}
      </span>
      <Link to={`/phone/${id}`}>Ver</Link>
    </div>
  )
}

export { PhoneItem }
