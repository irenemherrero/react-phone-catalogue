import styled from 'styled-components'
import tw from 'tailwind.macro'

const LoaderWrapper = styled.div`
  ${tw`flex items-center h-screen`}
  img {
    ${tw`w-92 h-auto`}
  }
`

export { LoaderWrapper }
