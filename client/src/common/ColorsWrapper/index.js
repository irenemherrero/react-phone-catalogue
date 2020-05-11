import React from 'react'
import PropTypes from 'prop-types'
import { ColorsWrapper, SpanColor } from './styles'

const AvailableColors = (props) => {
  const { colors } = props
  return (
    <ColorsWrapper>
      {colors.map((color) => (
        <SpanColor key={color} color={color} />
      ))}
    </ColorsWrapper>
  )
}
AvailableColors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export { AvailableColors }
