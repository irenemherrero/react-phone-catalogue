import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from './PhonesListActions'
import { PhoneList } from './PhonesList'

const PhonesListContainer = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  return (
    <div>
      {error ? (
        <span>{error}</span>
      ) : isFetching ? (
        <span>loading...</span>
      ) : (
        <PhoneList phones={phones} />
      )}
    </div>
  )
}

export { PhonesListContainer }
