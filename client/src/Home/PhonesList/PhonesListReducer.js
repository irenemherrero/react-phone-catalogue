import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING,
} from './PhonesListActions'

const initialState = {
  isFetching: false,
  phones: [],
  error: null,
}

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHONES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PHONES:
      return {
        ...state,
        isFetching: false,
        phones: action.phones,
      }
    case ERROR_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

export { phonesReducer }
