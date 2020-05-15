import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from './PhonesListActions'
import { PhonesList } from './PhonesList'
import { PageCenterWrapper, GifLoader, Error } from '../../common'
import loading from '../../assets/loading.gif'

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
      {isFetching && <GifLoader gif={loading} />}
      {error !== null ? <Error>{error}</Error> : <PhonesList phones={phones} />}
    </PageCenterWrapper>
  )
}

export { PhonesListContainer }
