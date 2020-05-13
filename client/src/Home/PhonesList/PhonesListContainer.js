import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from './PhonesListActions'
import { PhonesList } from './PhonesList'
import { PageCenterWrapper, Loader, Error } from '../../common'

/**
 * Functional container for phones list
 * @component
 */
const PhonesListContainer = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  // return <Loader />
  return (
    <PageCenterWrapper>
      {isFetching ? (
        <Loader />
      ) : error !== null ? (
        <Error>{error}</Error>
      ) : (
        <PhonesList phones={phones} />
      )}
    </PageCenterWrapper>
  )
}

export { PhonesListContainer }
