import styled from 'styled-components'
import tw from 'tailwind.macro'

const LoaderWrapper = styled.div`
  ${tw`flex items-center
      text-secondary opacity-75 h-screen`}
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
