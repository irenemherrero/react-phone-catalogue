import React from 'react'
import PropTypes from 'prop-types'
import { AvailableColors, PhoneImage } from '@/common'
import { ResponsiveContainer, PhoneCard, PhoneCardInfo } from './styles'

const PhoneItem = (props) => {
  const { id, name, manufacturer, color, price, imageFileName, onClick } = props
  const urlImage = process.env.PHONES_IMAGES_URL + imageFileName
  return (
    <ResponsiveContainer onClick={() => onClick(id)}>
      <PhoneCard>
        <PhoneImage src={urlImage} alt={name} />
        <PhoneCardInfo>
          <h1>{name}</h1>
          <h2>{manufacturer}</h2>
          <AvailableColors colors={color.split(',')} />
          <footer>
            {price.toLocaleString('es-ES', {
              style: 'currency',
              currency: 'EUR',
              // no decimals
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            })}
          </footer>
        </PhoneCardInfo>
      </PhoneCard>
    </ResponsiveContainer>
  )
}

PhoneItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  imageFileName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
PhoneItem.defaultProps = {
  imageFileName: 'noimage.png',
  price: 0,
  onClick: () => {},
}

export { PhoneItem }
