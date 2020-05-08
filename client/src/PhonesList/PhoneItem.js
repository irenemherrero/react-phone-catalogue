import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ResponsiveContainer = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 px-2 my-2`}
`
const PhoneCard = styled.div`
  ${tw`flex flex-row shadow-md bg-white cursor-pointer hover:shadow-xl`}
  &:hover {
    transform: scale(1.04);
  }
`
const PhoneCardImage = styled.img`
  ${tw`h-48 w-40`}
`
const PhoneCardInfo = styled.div`
  ${tw`flex flex-col p-6`}
  h1 {
    ${tw`font-semibold text-lg`}
  }
  p {
    ${tw`text-gray-600`}
  }
`
const ColorsContainer = styled.div`
  ${tw`flex flex-row mt-6`}
`

const PhoneColor = styled.span`
  ${tw`w-10 h-5 mr-1 border rounded`}
  background-color: ${(props) => props.color}
`

const PhoneItem = (props) => {
  const { id, name, onClick, imageFileName, price, color } = props
  const urlImage = process.env.PHONES_IMAGES_URL + imageFileName
  return (
    <ResponsiveContainer onClick={() => onClick(id)}>
      <PhoneCard>
        <div className="flex-shrink-0">
          <PhoneCardImage src={urlImage} alt={name} />
        </div>
        <PhoneCardInfo>
          <h1>{name}</h1>
          <p>{price}€</p>
          <ColorsContainer>
            {color.split(',').map((c) => (
              <PhoneColor key={c} color={c} />
            ))}
          </ColorsContainer>
        </PhoneCardInfo>
      </PhoneCard>
    </ResponsiveContainer>
  )
}

PhoneItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  imageFileName: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
}
PhoneItem.defaultProps = {
  imageFileName: 'noimage.png',
  price: 0,
  onClick: () => {},
}

export { PhoneItem }
