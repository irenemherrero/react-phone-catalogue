import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PhoneItem } from './PhoneItem'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CardsContainer = styled.div`
  ${tw`flex flex-wrap my-4 mx-16 md:mx-8 lg:mx-1 xl:mx-16`}
`

const PhoneList = (props) => {
  const { phones } = props
  const history = useHistory()
  const showDetail = (id) => {
    history.push(`/phone/${id}`)
  }
  return (
    <CardsContainer>
      {phones.map((phone) => (
        <PhoneItem {...phone} key={phone.id} onClick={showDetail} />
      ))}
    </CardsContainer>
  )
}

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired,
}

export { PhoneList }
