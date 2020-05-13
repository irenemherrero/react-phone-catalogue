import React from 'react'
import { PhoneItem } from '../PhoneItem'
import { render, cleanup, fireEvent } from '@testing-library/react'

const mockRequiredPhone = {
  id: 0,
  name: 'iPhone 7',
  color: 'black,blue',
}
const mockFullPhone = {
  ...mockRequiredPhone,
  manufacturer: 'Apple',
  description:
    'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
  price: 769,
  imageFileName: 'IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
}

describe('PhoneItem (a child of PhonesList)', () => {
  afterEach(cleanup)

  it('render correctly', () => {
    const component = render(<PhoneItem {...mockFullPhone} />)
    expect(component).toMatchSnapshot()
  })
  it('check default values', () => {
    const { getByText } = render(<PhoneItem {...mockRequiredPhone} />)
    const name = getByText(mockRequiredPhone.name)
    const manufacturer = getByText(PhoneItem.defaultProps.manufacturer)
    const price = getByText(`${PhoneItem.defaultProps.price} €`)

    expect(name).toBeTruthy()
    expect(manufacturer).toBeTruthy()
    expect(price).toBeTruthy()
  })
  it('click on phone', () => {
    const clickMock = jest.fn()
    const { container } = render(
      <PhoneItem {...mockFullPhone} onClick={clickMock} />
    )
    fireEvent.click(container.firstChild)
    expect(clickMock).toHaveBeenCalled()
  })
})
