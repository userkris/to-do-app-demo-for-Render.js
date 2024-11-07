import { node } from 'Library/Render'

export default () => {
  return node(node('h2', '404'), node('i', 'Requested route could not be found.'))
}

