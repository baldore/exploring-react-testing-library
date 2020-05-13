import { getNodeText, fireEvent } from '@testing-library/dom'
import { init } from './toggle-button-text'

test('should display the default text', () => {
  const button = init()

  expect(getNodeText(button)).toBe('ON')
})

test('should toggle the text on click', () => {
  const button = init()
  const clickEvent = new MouseEvent('click')

  fireEvent(button, clickEvent)
  expect(getNodeText(button)).toBe('OFF')
  fireEvent(button, clickEvent)
  expect(getNodeText(button)).toBe('ON')
})
