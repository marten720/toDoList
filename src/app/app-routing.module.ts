import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitRequestComponent } from './submit-request/submit-request.component';
import { ActiveRequestsComponent } from './active-requests/active-requests.component';

const routes: Routes = [
  { path: 'submit-request', component: SubmitRequestComponent },
  { path: 'active-requests', component: ActiveRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
