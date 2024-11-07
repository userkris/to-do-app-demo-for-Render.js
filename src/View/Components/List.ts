import { node } from 'Library/Render' 
import { loadStorage } from 'Controller/Crud'
import ListItem from 'View/Components/ListItem'

export default ({ $state, $refresh }) => {
  $state.list = $state.list || loadStorage()

  return node('ul', ...$state.list.map((item, key) => ListItem(item, key, key === $state.list.length - 1)))
}
