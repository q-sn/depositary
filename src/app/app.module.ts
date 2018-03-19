import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BidComponent } from './bid/bid.component';
import { PersonComponent } from './person/person.component';
import { CustodyComponent } from './custody/custody.component';
import { ShowBidComponent } from './bid/show-bid/show-bid.component';
import { ShowPersonComponent } from './person/show-person/show-person.component';
import { ShowCustodyComponent } from './custody/show-custody/show-custody.component';

import { BidService } from './services/bid.service';
import { PersonService } from './services/person.service';
import { CustodyService } from './services/custody.service';

const routes: Routes = [
  { path: 'bid', component: BidComponent },
  { path: 'person', component: PersonComponent },
  { path: 'custody', component: CustodyComponent },
  { path: 'bid-show', component: ShowBidComponent },
  { path: 'person-show', component: ShowPersonComponent },
  { path: 'custody-show', component: ShowCustodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BidComponent,
    PersonComponent,
    CustodyComponent,
    ShowBidComponent,
    ShowPersonComponent,
    ShowCustodyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BidService, PersonService, CustodyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
