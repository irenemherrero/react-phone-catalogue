import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import logo from '@/assets/logo.png'

const StickyHeader = styled.header`
  ${tw`flex sticky top-0 bg-primary z-50 text-white`}
`
const Logo = styled.div`
  ${tw`flex items-center p-3`}
  img {
    ${tw`w-10 mr-4`}
  }
  span {
    ${tw`tracking-wide font-semibold text-lg`}
  }
`
const Title = styled.div`
  ${tw`p-3 absolute w-full text-center 
    font-semibold tracking-wider text-2xl
    hidden md:block`}
`
const Header = (props) => {
  const { title } = props
  return (
    <StickyHeader>
      <Logo>
        <img src={logo} />
        <span>GS Phones</span>
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
