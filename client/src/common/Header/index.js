import React from 'react'
import PropTypes from 'prop-types'
import logo from '@/assets/logo.png'
import { StickyHeader, Logo, Title } from './styles'

const Header = (props) => {
  const { title } = props
  return (
    <StickyHeader>
      <Logo>
        <img src={logo} />
        <span>GS Phones</span>
      </Logo>
      <Title>
        <h1>{title}</h1>
      </Title>
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
