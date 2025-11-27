//istanbul ignore file
export const wrapWithContainer = (elm: HTMLElement): HTMLDivElement => {
  const container = document.createElement('div')
  container.setAttribute('id', 'container')
  container.appendChild(elm)
  return container
}
