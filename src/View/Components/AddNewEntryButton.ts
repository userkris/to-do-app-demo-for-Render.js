import { node } from 'Library/Render'
import { addEntry, loadStorage } from 'Controller/Crud'

export default ({ $refresh, $state }) => {
  $state.list = $state.list || loadStorage()

  return node('button', 'Add New Entry', {
    attr: { 'type': 'button' },
    event: { 'click': () => {
      addEntry($state.list, '')
      $refresh()
    }}
  })
}
