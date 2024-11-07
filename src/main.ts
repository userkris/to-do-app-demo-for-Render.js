import { hydrate } from 'Library/Render'

import index from 'View/Views/index'
import readOnly from 'View/Views/read-only'
import notFound from 'View/Views/404'

hydrate('#to-do-demo-app', {
  '/': index,
  '/read-only': readOnly,
  '/404': notFound
})
