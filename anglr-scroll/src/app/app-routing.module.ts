import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerScrollComponent } from './container-scroll/container-scroll.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: 'bad',
    component: ContainerComponent
  },
  {
    path: 'good',
    component: ContainerScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
