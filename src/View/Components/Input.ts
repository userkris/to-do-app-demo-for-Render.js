import { node } from 'Library/Render'
import { updateEntry, addEntry, loadStorage } from 'Controller/Crud'

const ENTER_KEY = { key: 'Enter', keyCode: 13 }
Object.freeze(ENTER_KEY)

export default (value, index, lastItem) => ({ $refresh, $state, $on_mount }) => {
  $state.list = $state.list || loadStorage()

  $on_mount.focusInput = ({ element }) => {
    if (Object.hasOwn(element, 'lastInput')) {
      element['lastInput'].focus()
    }
  }

  return node('input', {
    ref: lastItem ? 'lastInput' : '',
    attr: { 'type': 'text' },
    props: { value },
    event: { 'keyup': (event) => {
      const { key, keyCode, target } = event
      if (key === ENTER_KEY.key && keyCode === ENTER_KEY.keyCode) {
        addEntry($state.list, '')
        $refresh()
        return
      }
      updateEntry(index, target.value, $state.list)
    }}
  })
} 
