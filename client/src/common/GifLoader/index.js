import React from 'react'
import { LoaderWrapper } from './styles'
import loading from '../../assets/loading.gif'

/**
 * Showing loading animation
 * @component
 */
const GifLoader = () => {
  return (
    <LoaderWrapper>
      <img src={loading} />
    </LoaderWrapper>
  )
}

export { GifLoader }
