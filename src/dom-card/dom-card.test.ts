import { init } from './dom-card'
import { getByTestId } from '@testing-library/dom'
import faker from 'faker'

test('should have a title', () => {
  const title = faker.commerce.productName()
  const card = init({ title })
  expect(getByTestId(card, 'title')).toHaveTextContent(title)
})

test('should have a content', () => {
  const content = faker.lorem.paragraph()
  const card = init({ content })
  expect(getByTestId(card, 'content')).toHaveTextContent(content)
})

test('should match snapshot', () => {
  const card = init({
    title: 'My Title',
    content: 'My Content',
  })
  expect(card).toMatchSnapshot()
})
