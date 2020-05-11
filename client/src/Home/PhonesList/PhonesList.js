import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PhoneItem } from './PhoneItem'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ItemsWrapper = styled.div`
  ${tw`flex flex-wrap justify-center       
       py-2 px-0 sm:px-8 
       max-w-6xl`}
`
const PhoneList = (props) => {
  const { phones } = props
  const history = useHistory()
  const showDetail = (id) => {
    history.push(`/phone/${id}`)
  }
  return (
    <ItemsWrapper>
      {phones.map((phone) => (
        <PhoneItem {...phone} key={phone.id} onClick={showDetail} />
      ))}
    </ItemsWrapper>
  )
}

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired,
}

export { PhoneList }
