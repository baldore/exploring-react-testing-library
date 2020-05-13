type DomCardOptions = {
  title?: string
  content?: string
}

export function init(options: DomCardOptions) {
  const parent = document.createElement('div')

  parent.innerHTML = `
    <h1 data-testid="title">${options.title}</h1>
    <div data-testid="content">${options.content}</div>
  `

  return parent
}
