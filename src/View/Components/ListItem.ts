import { node } from 'Library/Render'
import RemoveEntryButton from 'View/Components/RemoveEntryButton'
import Input from 'View/Components/Input'

export default (value = '', index, lastItem = false) => () => {
  return node('li', Input(value, index, lastItem), RemoveEntryButton(index))
}
