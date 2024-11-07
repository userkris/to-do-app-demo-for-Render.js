import { node } from 'Library/Render'

export default (href, text) => () => {
  return node('a', { attr: { href: `#${href}` } }, text)
}
