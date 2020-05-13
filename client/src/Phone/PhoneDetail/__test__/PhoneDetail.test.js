import React from 'react'
import { PhoneDetail } from '../PhoneDetail'
import { render, cleanup } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

const mockPhone = {
  name: 'iPhone 7',
  color: 'black,blue',
  manufacturer: 'Apple',
  description:
    'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
  price: 769,
  imageFileName: 'IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
}

describe('PhoneDetail', () => {
  afterEach(cleanup)

  it('render correctly', () => {
    const component = render(<PhoneDetail {...mockPhone} />)
    expect(component).toMatchSnapshot()
  })
  it('correct composition image src', () => {
    const { container } = render(<PhoneDetail {...mockPhone} />)
    expect(container.querySelector('img').getAttribute('src')).toBe(
      process.env.PHONES_IMAGES_URL + mockPhone.imageFileName
    )
  })
})
