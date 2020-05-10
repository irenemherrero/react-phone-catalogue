import React from 'react'
import { PhonesListContainer } from './PhonesList/PhonesListContainer'
import { Header } from '../common/Header'

const Home = () => {
  return (
    <main>
      <Header title="Phones List" />
      <PhonesListContainer />
    </main>
  )
}

export { Home }
