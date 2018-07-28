import { Routes, RouterModule } from '@angular/router';
import * as components from '../../components'

const APP_ROUTES: Routes = [
  {
    path: '', component: components.HomePage
  },
  {
    path: 'work/:id', component: components.WorkExample
  }
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);