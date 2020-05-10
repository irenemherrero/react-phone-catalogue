import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { SpanColor } from '../../common/SpanColor'

const ResponsiveContainer = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 px-2 my-2`}
`
const PhoneCard = styled.div`
  ${tw`flex flex-row shadow-md bg-white cursor-pointer hover:shadow-xl h-48`}
  &:hover {
    transform: scale(1.05);
  }
`
const PhoneCardImage = styled.img`
  ${tw`w-40`}
`
const PhoneCardInfo = styled.div`
  ${tw`flex flex-col pt-6 w-full`}
  h1 {
    ${tw`font-semibold text-xl`}
  }
  h2 {
    ${tw`text-gray-600`}
  }
  price {
    ${tw`self-end m-6 font-semibold text-gray-700 text-lg`}
  }
`
const ColorsContainer = styled.div`
  ${tw`flex flex-row mt-4`}
`

const PhoneItem = (props) => {
  const { id, name, manufacturer, color, price, imageFileName, onClick } = props
  const urlImage = process.env.PHONES_IMAGES_URL + imageFileName
  return (
    <ResponsiveContainer onClick={() => onClick(id)}>
      <PhoneCard>
        <PhoneCardImage src={urlImage} alt={name} />
        <PhoneCardInfo>
          <h1>{name}</h1>
          <h2>{manufacturer}</h2>
          <ColorsContainer>
            {color.split(',').map((c) => (
              <SpanColor key={c} color={c} />
            ))}
          </ColorsContainer>
          <price>{price}€</price>
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
