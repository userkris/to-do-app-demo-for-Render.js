import { node } from 'Library/Render' 
import { loadStorage } from 'Controller/Crud'

export default ({ $state }) => {
  $state.list = $state.list || loadStorage()
  
  if (!$state.list.length) {
    return node('ul', node('li', node('i', 'The list has no entries.')))
  }

  return node('ul', ...$state.list.map((item) => node('li', item ? item : node('i', 'empty entry.') )))
}
