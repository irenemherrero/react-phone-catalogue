import React from 'react'
import { PhonesListContainer } from './PhonesList/PhonesListContainer'
import { Header } from '../common/Header'

const Home = () => {
  return (
    <main className="h-screen">
      <Header title="Phones List" />
      <PhonesListContainer />
    </main>
  )
}

export { Home }
