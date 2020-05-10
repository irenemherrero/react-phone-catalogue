import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import logo from './../assets/logo.png'

const StickyHeader = styled.header`
  ${tw`flex sticky top-0 bg-gray-600 p-3 z-50 text-white`}
`
const Logo = styled.div`
  ${tw`flex items-center`}
  img {
    ${tw`w-10 mr-4`}
  }
  span {
    ${tw`tracking-wide font-semibold text-lg`}
  }
`
const Title = styled.div`
  ${tw`w-full absolute text-center font-semibold tracking-wider text-2xl`}
`
const Header = (props) => {
  const { title } = props
  return (
    <StickyHeader>
      <Logo>
        <img src={logo} />
        <span>JGL Phones</span>
      </Logo>
      <Title>{title}</Title>
    </StickyHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}
Header.defaultProps = {
  title: '',
}

export { Header }
