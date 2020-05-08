import React from 'react'
import { useHistory } from 'react-router-dom'

const PhoneDetail = (props) => {
  const { imageFileName, name, price } = props
  const history = useHistory()
  // const goList = () => {
  //   history.pushState("/")
  // }
  return (
    <div>
      <div>
        {imageFileName}
        {name} - {price}
      </div>
      <button onClick={() => history.goBack()}>Volver</button>
    </div>
  )
}

export default PhoneDetail
