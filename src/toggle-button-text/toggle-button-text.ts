type Label = 'ON' | 'OFF'

const getLabel = (isActive: boolean): Label => (isActive ? 'ON' : 'OFF')

export function init() {
  let isActive = true
  const button = document.createElement('button')

  button.innerHTML = getLabel(isActive)

  button.addEventListener('click', () => {
    isActive = !isActive
    button.innerHTML = getLabel(isActive)
  })

  return button
}
