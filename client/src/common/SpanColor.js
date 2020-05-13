import styled from 'styled-components'
import tw from 'tailwind.macro'

/**
 * Box color
 */
const SpanColor = styled.span`
  ${tw`w-10 h-5 mr-1 border rounded`}
  background-color: ${(props) => props.color}
`

export { SpanColor }
