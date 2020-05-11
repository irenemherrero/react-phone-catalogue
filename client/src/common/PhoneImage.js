import styled from 'styled-components'
import tw from 'tailwind.macro'

const PhoneImage = styled.img.attrs({
  className: 'object-cover',
})`
  ${tw`w-40`}
`

export { PhoneImage }
