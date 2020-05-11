import { phonesService } from '@/services/phonesService'

export const ERROR_FETCHING = 'ERROR_FETCHING'
export const REQUEST_PHONES = 'REQUEST_PHONES'
export const RECEIVE_PHONES = 'RECEIVE_PHONES'

export const requestPhones = () => ({
  type: REQUEST_PHONES,
})

export const receivePhones = (data) => ({
  type: RECEIVE_PHONES,
  phones: data,
})

export const errorFetching = (error) => ({
  type: ERROR_FETCHING,
  error: error,
})

export const getPhones = (dispatch) => {
  dispatch(requestPhones())
  return phonesService
    .fetchPhones()
    .then((data) => {
      dispatch(receivePhones(data))
    })
    .catch((err) => dispatch(errorFetching(err)))
}
