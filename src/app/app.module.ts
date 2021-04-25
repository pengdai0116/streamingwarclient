import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DemoListComponent } from './lists/demo-list/demo-list.component';
import { AddDemoComponent } from './forms/demo-forms/add-demo/add-demo.component';
import { StreamListComponent } from './lists/stream-list/stream-list.component';
import { StudioListComponent } from './lists/studio-list/studio-list.component';
import { DemoDetailComponent } from './details/demo-detail/demo-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { WatchEventComponent } from './forms/demo-forms/watch-event/watch-event.component';
import { UpdateDemoComponent } from './forms/demo-forms/update-demo/update-demo.component';
import { StreamDetailComponent } from './details/stream-detail/stream-detail.component';
import { StudioDetailComponent } from './details/studio-detail/studio-detail.component';
import { EventDetailComponent } from './details/event-detail/event-detail.component';
import { AddStreamComponent } from './forms/stream-forms/add-stream/add-stream.component';
import { AddStudioComponent } from './forms/studio-forms/add-studio/add-studio.component';
import { EventListComponent } from './lists/event-list/event-list.component';
import { AddEventComponent } from './forms/event-forms/add-event/add-event.component';
import { OfferEventComponent } from './forms/stream-forms/offer-event/offer-event.component';
import { UpdateEventComponent } from './forms/event-forms/update-event/update-event.component';
import { RetractMovieComponent } from './forms/event-forms/retract-movie/retract-movie.component';
import { UpdateStreamComponent } from './forms/stream-forms/update-stream/update-stream.component';
import { UserDashboardComponent } from './dashboard/dashboard/user-dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import {AdminDashboardComponent} from './dashboard/admin/admin-dashboard.component';
import { AddUserComponent } from './forms/add-user/add-user.component';
import {OfferEventListComponent} from './lists/offer-list/offer-list.component';
import {OfferDetailComponent} from './details/offer-detail/offer-detail.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DemoListComponent,
    AddDemoComponent,
    StreamListComponent,
    StudioListComponent,
    DemoDetailComponent,
    WatchEventComponent,
    UpdateDemoComponent,
    StreamDetailComponent,
    StudioDetailComponent,
    EventDetailComponent,
    AddStreamComponent,
    AddStudioComponent,
    EventListComponent,
    AddEventComponent,
    OfferEventComponent,
    UpdateEventComponent,
    RetractMovieComponent,
    UpdateStreamComponent,
    UserDashboardComponent,
    LoginComponent,
    OfferEventListComponent,
    AdminDashboardComponent,
    AddUserComponent,
    LoginComponent,
    OfferDetailComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, {dataEncapsulation: false, delay: 0},
        // ),
        ReactiveFormsModule,

        // material imports
        FlexLayoutModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
