import styled from 'styled-components'
import tw from 'tailwind.macro'

const DetailWrapper = styled.div`
  ${tw`flex flex-wrap justify-center h-96`}
`
//TODO: ¿generalize?
const PhoneCardInfo = styled.div`
  ${tw`flex flex-col pt-12 pl-1 md:pl-6`}
  h1 {
    ${tw`font-semibold text-2xl`}
  }
  h2 {
    ${tw`text-gray-600`}
  }
  footer {
    ${tw`mt-4 font-semibold text-secondary text-xl`}
  }
`
const TitleClose = styled.div`
  ${tw`flex flex-row justify-between`}
  svg {
    ${tw`h-6 w-6 text-primary cursor-pointer`}
  }
`

const PhoneDescription = styled.div`
  ${tw`px-8 lg:px-56 xl:px-64`}
  h1 {
    ${tw`font-semibold text-2xl border-b-2 text-primary border-secondary`}
  }
  p {
    ${tw`text-justify mt-2`}
  }
`
const SpecsContainer = styled.div`
  ${tw`flex flex-col sm:flex-row`}
`
const Spec = styled.div`
  ${tw`flex flex-row mr-4 mt-4`}
  svg {
    ${tw`text-secondary h-6 w-auto`}
  }
  span {
    ${tw`text-gray-700 ml-2`}
  }
`

export {
  DetailWrapper,
  PhoneCardInfo,
  TitleClose,
  PhoneDescription,
  SpecsContainer,
  Spec,
}
