import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaCircleNotch } from 'react-icons/fa'

const LoaderWrapper = styled.div`
  ${tw`text-secondary mt-20 opacity-75`}
  svg {
    ${tw`h-16 w-16`} {
      animation: spin 2s linear infinite;
      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`

const Loader = () => {
  return (
    <LoaderWrapper>
      <FaCircleNotch />
    </LoaderWrapper>
  )
}

export { Loader }
