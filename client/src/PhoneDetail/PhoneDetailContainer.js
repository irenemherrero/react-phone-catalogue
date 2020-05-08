import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PhoneDetail from './PhoneDetail'

const PhoneDetailContainer = () => {
  const { id } = useParams()
  const { isFetching, phones } = useSelector((state) => state)
  const selectedPhone = phones.find((item) => item.id == id)
  return (
    <div>
      {isFetching ? (
        <span>loading...</span>
      ) : (
        <PhoneDetail {...selectedPhone} />
      )}
    </div>
  )
}

export { PhoneDetailContainer }
