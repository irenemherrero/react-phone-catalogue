import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from './PhonesListActions'
import { PhoneList } from './PhonesList'
import { PageCenterWrapper, Loader } from '@/common'

const PhonesListContainer = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  // return <Loader />
  return (
    <PageCenterWrapper>
      {error ? (
        <span>{error}</span>
      ) : isFetching ? (
        <Loader />
      ) : (
        <PhoneList phones={phones} />
      )}
    </PageCenterWrapper>
  )
}

export { PhonesListContainer }
