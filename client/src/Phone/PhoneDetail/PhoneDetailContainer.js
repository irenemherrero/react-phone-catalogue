import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { PhoneDetail } from './PhoneDetail'

/**
 * Functional container for phone detail
 * @component
 */
const PhoneDetailContainer = () => {
  const { id } = useParams()
  const { phones } = useSelector((state) => state)
  const history = useHistory()

  if (phones.length === 0) {
    history.push(`/`)
    return null
  }
  const selectedPhone = phones.find((item) => item.id == id)
  return <PhoneDetail {...selectedPhone} />
}

export { PhoneDetailContainer }
