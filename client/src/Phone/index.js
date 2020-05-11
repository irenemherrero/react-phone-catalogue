import React from 'react'
import { PhoneDetailContainer } from './PhoneDetail/PhoneDetailContainer'
import { Header } from '@/common/Header'

const Phone = () => {
  return (
    <main>
      <Header title="Phone Detail" />
      <PhoneDetailContainer />
    </main>
  )
}

export { Phone }
