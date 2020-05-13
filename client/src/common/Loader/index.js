import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import { LoaderWrapper } from './styles'

/**
 * Showing loading animation
 * @component
 */
const Loader = () => {
  return (
    <LoaderWrapper>
      <FaCircleNotch />
    </LoaderWrapper>
  )
}

export { Loader }
