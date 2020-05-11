import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { FaMobileAlt, FaMemory, FaMicrochip, FaTimes } from 'react-icons/fa'
import { AvailableColors, PhoneImage } from '@/common'

import {
  DetailWrapper,
  PhoneCardInfo,
  TitleClose,
  PhoneDescription,
  SpecsContainer,
  Spec,
} from './styles'

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
      <DetailWrapper>
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
      </DetailWrapper>
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
