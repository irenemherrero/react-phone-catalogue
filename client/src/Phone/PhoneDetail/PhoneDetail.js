import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useHistory } from 'react-router-dom'
import { FaMobileAlt, FaMemory, FaMicrochip, FaTimes } from 'react-icons/fa'
import { AvailableColors } from '@/common/ColorsWrapper'
import { CenterContentWrapper } from '@/common/CenterContentWrapper'

const PhoneImage = styled.img.attrs({
  className: 'object-cover',
})`
  ${tw`h-96 w-40`}
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

const PhoneDetail = (props) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = props
  const urlImage = process.env.PHONES_IMAGES_URL + imageFileName
  const history = useHistory()
  const goHome = () => {
    history.push('/')
  }
  return (
    <div>
      <CenterContentWrapper>
        <PhoneImage src={urlImage} alt={name} />
        <PhoneCardInfo>
          <TitleClose>
            <h1>{name}</h1>
            <FaTimes onClick={() => goHome()} />
          </TitleClose>
          <h2>{manufacturer}</h2>
          <SpecsContainer>
            <Spec>
              <FaMobileAlt />
              <span>{screen}</span>
            </Spec>
            <Spec>
              <FaMicrochip />
              <span>{processor}</span>
            </Spec>
            <Spec>
              <FaMemory />
              <span>{ram} Gb</span>
            </Spec>
          </SpecsContainer>
          <AvailableColors colors={color.split(',')} />
          <footer>{price} €</footer>
        </PhoneCardInfo>
      </CenterContentWrapper>
      <PhoneDescription>
        <h1>Description</h1>
        <p>{description}</p>
      </PhoneDescription>
    </div>
  )
}

PhoneDetail.propTypes = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  imageFileName: PropTypes.string,
  screen: PropTypes.string,
  processor: PropTypes.string,
  ram: PropTypes.number,
}
PhoneDetail.defaultProps = {
  manufactured: '',
  description: '',
  color: '',
  price: 0,
  imageFileName: 'noimage.png',
  screen: 'N/A',
  processor: 'N/A',
  ram: '0',
}

export { PhoneDetail }
