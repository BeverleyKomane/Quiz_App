import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'test2', loadChildren: './page/test2/test2.module#Test2PageModule' },
  { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
