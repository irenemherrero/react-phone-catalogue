import styled from 'styled-components'
import tw from 'tailwind.macro'

const LoaderWrapper = styled.div`
  ${tw`flex justify-center
      text-secondary mt-20 opacity-75`}
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

export { LoaderWrapper }
