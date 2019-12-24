import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PtableComponent } from './person/ptable.component'
import { PlistComponent } from './person/plist.component'
import { PformComponent} from './person/pform.component'
@NgModule({
  declarations: [
    AppComponent,PtableComponent,PlistComponent,PformComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
