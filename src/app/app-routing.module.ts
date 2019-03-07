import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';

const routes: Routes = [
  {path: '', component: ToolbarComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
