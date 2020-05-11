import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from './PhonesListActions'
import { PhoneList } from './PhonesList'
import { CenterContentWrapper } from '@/common/CenterContentWrapper'
import { Loader } from '@/common/Loader'

const PhonesListContainer = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  // return <Loader />
  return (
    <CenterContentWrapper>
      {error ? (
        <span>{error}</span>
      ) : isFetching ? (
        <Loader />
      ) : (
        <PhoneList phones={phones} />
      )}
    </CenterContentWrapper>
  )
}

export { PhonesListContainer }
