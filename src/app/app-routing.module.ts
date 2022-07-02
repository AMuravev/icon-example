import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'lazy1', loadChildren: () => import('./pages/lazy1/lazy1.module').then(m => m.Lazy1Module) },
  { path: 'lazy2', loadChildren: () => import('./pages/lazy2/lazy2.module').then(m => m.Lazy2Module) },
  { path: 'lazy3', loadChildren: () => import('./pages/lazy3/lazy3.module').then(m => m.Lazy3Module) },
  { path: 'lazy4', loadChildren: () => import('./pages/lazy4/lazy4.module').then(m => m.Lazy4Module) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
