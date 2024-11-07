import { node } from 'Library/Render'
import List from 'View/Components/List'
import AddNewEntryButton from 'View/Components/AddNewEntryButton'
import ClearStorageButton from 'View/Components/ClearStorageButton'
import Link from 'View/Components/Link'

export default () => {
  return node(
    node('h2', 'Editor Mode'),
    node('div', Link('/read-only', 'Switch to read only mode')),
    node(AddNewEntryButton, ClearStorageButton),
    List
  )
}
