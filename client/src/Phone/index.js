import React from 'react'
import { PhoneDetailContainer } from './PhoneDetail/PhoneDetailContainer'
import { Header } from '@/common'

const Phone = () => {
  return (
    <main>
      <Header title="Phone Detail" />
      <PhoneDetailContainer />
    </main>
  )
}

export { Phone }
