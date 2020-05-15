import React from 'react'
import { LoaderWrapper } from './styles'

/**
 * Showing loading animation
 * @component
 */
const GifLoader = (props) => {
  const { gif } = props
  return (
    <LoaderWrapper>
      <img src={gif} />
    </LoaderWrapper>
  )
}

export { GifLoader }
