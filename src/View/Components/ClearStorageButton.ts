import { node } from 'Library/Render'
import { clearStorage, loadStorage } from 'Controller/Crud'

export default ({ $refresh, $state }) => {
  $state.list = $state.list || loadStorage()

  return node('button', 'Clear List', {
    attr: { 'type': 'button' },
    event: { 'click': () => {
      $state.list = clearStorage($state.list)
      $refresh()
    }}
  })
}
