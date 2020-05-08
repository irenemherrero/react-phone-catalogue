import React from 'react'
import PropTypes from 'prop-types'
import { PhoneItem } from './PhoneItem'

const PhoneList = (props) => {
  const { phones } = props
  return (
    <div>
      {phones.map((phone) => (
        <PhoneItem {...phone} key={phone.id} />
      ))}
    </div>
  )
}

PhoneList.propTypes = {
  phones: PropTypes.array,
}

export { PhoneList }
