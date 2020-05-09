import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import logo from '../assets/logo.png'

const StickyHeader = styled.div`
  ${tw`flex sticky top-0 bg-gray-600 p-3 z-50`}
`
const Logo = styled.div`
  ${tw`flex items-center text-white mr-12`}
  img {
    ${tw`w-10 mr-4`}
  }
  h1 {
    ${tw`font-semibold text-lg`}
  }
`
const Header = () => {
  return (
    <StickyHeader>
      <Logo>
        <img src={logo} />
        <h1>JGL Phones</h1>
      </Logo>
    </StickyHeader>
  )
}

export { Header }
