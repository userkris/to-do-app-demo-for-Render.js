import { node } from 'Library/Render'
import ReadOnlyList from 'View/Components/ReadOnlyList'
import Link from 'View/Components/Link'

export default () => {
  return node(
    node('h2', 'Read-Only Mode'),
    node('div', Link('/', 'Switch to editor mode')),
    ReadOnlyList
  )
}
