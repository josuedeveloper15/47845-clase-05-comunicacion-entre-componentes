import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCardComponent } from './components/my-card/my-card.component';
import { StudentListModule } from './components/student-list/student-list.module';

@NgModule({
  declarations: [AppComponent, MyCardComponent],
  imports: [BrowserModule, StudentListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
