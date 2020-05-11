import styled from 'styled-components'
import tw from 'tailwind.macro'

const StickyHeader = styled.header`
  ${tw`flex sticky top-0 bg-primary z-50 text-white p-3 overflow-x-hidden`}
`
const Logo = styled.div`
  ${tw`flex items-center`}
  img {
    ${tw`w-10 mr-4`}
  }
  span {
    ${tw`tracking-wide font-semibold text-lg`}
  }
`
const Title = styled.div`
  ${tw`hidden md:block w-full
    text-center absolute`}
  h1 {
    ${tw`font-semibold tracking-wider text-2xl`}
  }
`

export { StickyHeader, Logo, Title }
