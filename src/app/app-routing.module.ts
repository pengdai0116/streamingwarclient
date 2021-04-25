import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoListComponent } from './lists/demo-list/demo-list.component';
import { StreamListComponent } from './lists/stream-list/stream-list.component';
import { StudioListComponent } from './lists/studio-list/studio-list.component';
import { DemoDetailComponent } from './details/demo-detail/demo-detail.component';
import { AddDemoComponent } from './forms/demo-forms/add-demo/add-demo.component';
import { WatchEventComponent } from './forms/demo-forms/watch-event/watch-event.component';
import { UpdateDemoComponent } from './forms/demo-forms/update-demo/update-demo.component';
import {StreamDetailComponent} from './details/stream-detail/stream-detail.component';
import {AddStreamComponent} from './forms/stream-forms/add-stream/add-stream.component';
import {StudioDetailComponent} from './details/studio-detail/studio-detail.component';
import {AddStudioComponent} from './forms/studio-forms/add-studio/add-studio.component';
import {EventListComponent} from './lists/event-list/event-list.component';
import {EventDetailComponent} from './details/event-detail/event-detail.component';
import {AddEventComponent} from './forms/event-forms/add-event/add-event.component';
import {UpdateStreamComponent} from './forms/stream-forms/update-stream/update-stream.component';
import {OfferEventComponent} from './forms/stream-forms/offer-event/offer-event.component';
import {UpdateEventComponent} from './forms/event-forms/update-event/update-event.component';
import {UserDashboardComponent} from './dashboard/dashboard/user-dashboard.component';
import {LoginComponent} from './dashboard/login/login.component';
import {AdminDashboardComponent} from './dashboard/admin/admin-dashboard.component';
import {AddUserComponent} from './forms/add-user/add-user.component';
import {RetractMovieComponent} from './forms/event-forms/retract-movie/retract-movie.component';
import {OfferEventListComponent} from './lists/offer-list/offer-list.component';
import {OfferDetailComponent} from './details/offer-detail/offer-detail.component';
import { AuthGuard } from './dashboard/login/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]},
  {path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard]},

  { path: 'demoGroups', component: DemoListComponent , canActivate: [AuthGuard]},
  { path: 'addDemoGroup', component: AddDemoComponent , canActivate: [AuthGuard]},
  { path: 'demoGroups/:id', component: DemoDetailComponent , canActivate: [AuthGuard]},
  { path: 'demoGroups/:id/watchEvent', component: WatchEventComponent , canActivate: [AuthGuard]},
  { path: 'demoGroups/:id/updateDemo', component: UpdateDemoComponent , canActivate: [AuthGuard]},

  { path: 'streams', component: StreamListComponent , canActivate: [AuthGuard]},
  { path: 'addStream', component: AddStreamComponent , canActivate: [AuthGuard]},
  { path: 'streams/:id', component: StreamDetailComponent , canActivate: [AuthGuard]},
  { path: 'streams/:id/offerEvent', component: OfferEventComponent , canActivate: [AuthGuard]},
  { path: 'streams/:id/updateStream', component: UpdateStreamComponent , canActivate: [AuthGuard]},

  { path: 'studios', component: StudioListComponent , canActivate: [AuthGuard]},
  { path: 'addStudio', component: AddStudioComponent , canActivate: [AuthGuard]},
  { path: 'studios/:id', component: StudioDetailComponent , canActivate: [AuthGuard]},

  { path: 'events', component: EventListComponent , canActivate: [AuthGuard]},
  { path: 'addEvent', component: AddEventComponent , canActivate: [AuthGuard]},
  { path: 'events/:id', component: EventDetailComponent , canActivate: [AuthGuard]},
  { path: 'events/:id/updateEvent', component: UpdateEventComponent , canActivate: [AuthGuard]},
  { path: 'events/:id/retractEvent', component: RetractMovieComponent, canActivate: [AuthGuard]},

  {path: 'offerEvents', component: OfferEventListComponent , canActivate: [AuthGuard]},
  {path: 'offerEvents/:id', component: OfferDetailComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
