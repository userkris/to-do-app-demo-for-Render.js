import { node } from 'Library/Render'
import { removeEntry, loadStorage } from 'Controller/Crud'

export default (index) => ({ $refresh, $state }) => {
  $state.list = $state.list || loadStorage()

  return node('button', 'X', {
    attr: { 'type': 'button' },
    event: { 'click': () => {
      removeEntry(index, $state.list)
      $refresh()
    }}
  })
}
