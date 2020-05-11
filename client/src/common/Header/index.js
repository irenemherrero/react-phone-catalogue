import React from 'react'
import PropTypes from 'prop-types'
import { StickyHeader, Logo, Title } from './styles'

const Header = (props) => {
  const { title, logoImg, logoText } = props
  return (
    <StickyHeader>
      <Logo>
        <img src={logoImg} />
        <span>{logoText}</span>
      </Logo>
      <Title>
        <h1>{title}</h1>
      </Title>
    </StickyHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  logoImg: PropTypes.string,
  logoText: PropTypes.string,
}
Header.defaultProps = {
  title: '',
}

export { Header }
