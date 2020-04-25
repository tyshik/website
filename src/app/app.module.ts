import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionBlockComponent } from './question-block/question-block.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { CenterColumnComponent } from './center-column/center-column.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBlockComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    LeftColumnComponent,
    RightColumnComponent,
    CenterColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
