import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ColorsWrapper = styled.div`
  ${tw`flex flex-row mt-4`}
`
const SpanColor = styled.span`
  ${tw`w-10 h-5 mr-1 border rounded`}
  background-color: ${(props) => props.color}
`

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
