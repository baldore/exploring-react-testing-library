import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Also can be imported from "queries"
  waitFor,
} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function getExampleDOM() {
  const div = document.createElement('div')
  div.innerHTML = `
    <label for="username">Username</label>
    <input id="username" />
    <button>Print Username</button>
    `

  const button = div.querySelector('button')
  const input = div.querySelector('input')
  button?.addEventListener('click', () => {
    // This is async
    setTimeout(() => {
      const printedUsernameContainer = document.createElement('div')
      printedUsernameContainer.innerHTML = `
       <div data-testid="printed-username">${input?.value}</div>
       `
      div.appendChild(printedUsernameContainer)
    }, Math.floor(Math.random() * 200))
  })
  return div
}

test('examples of some things', async () => {
  const famousWomanInHistory = 'Ada Lovelace'
  const container = getExampleDOM()

  const input = getByLabelText(container, 'Username') as HTMLInputElement
  input.value = famousWomanInHistory

  getByText(container, 'Print Username').click()

  await waitFor(() =>
    expect(queryByTestId(container, 'printed-username')).toBeTruthy()
  )

  expect(getByTestId(container, 'printed-username')).toHaveTextContent(
    famousWomanInHistory
  )

  expect(container).toMatchSnapshot()
})
