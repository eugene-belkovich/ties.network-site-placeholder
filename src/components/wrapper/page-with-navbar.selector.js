import { createStructuredSelector } from 'reselect'
import { routerSelector } from '../../selectors'

export const pageWithNavbarSelector = createStructuredSelector({
  router: routerSelector,
})
