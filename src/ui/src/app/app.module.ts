import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule, routingComponents} from './app-routing.module'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component'
import {NotesService} from './notes.service'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
