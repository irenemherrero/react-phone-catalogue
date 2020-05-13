import React from 'react'
import PropTypes from 'prop-types'
import { AvailableColors, PhoneImage } from '../../common'
import { ResponsiveWrapper, PhoneCard, PhoneCardInfo } from './styles'

/**
 * Showing phone item
 * @component
 */
const PhoneItem = (props) => {
  const { id, name, manufacturer, color, price, imageFileName, onClick } = props
  const urlImage = process.env.PHONES_IMAGES_URL + imageFileName
  return (
    <ResponsiveWrapper onClick={() => onClick(id)}>
      <PhoneCard>
        <PhoneImage src={urlImage} alt={name} />
        <PhoneCardInfo>
          <h1>{name}</h1>
          <h2>{manufacturer}</h2>
          <AvailableColors colors={color.split(',')} />
          <footer>{`${price} €`}</footer>
        </PhoneCardInfo>
      </PhoneCard>
    </ResponsiveWrapper>
  )
}

PhoneItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string,
  /**comma separated colors */
  color: PropTypes.string,
  price: PropTypes.number,
  imageFileName: PropTypes.string,
  /**fires parent onClick */
  onClick: PropTypes.func,
}
PhoneItem.defaultProps = {
  manufacturer: 'N/A',
  imageFileName: 'noimage.png',
  price: 0,
  onClick: () => {},
}

export { PhoneItem }
