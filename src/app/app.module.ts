import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Dados
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { FormComponent } from './components/form/form.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlertaComponent,
    FormComponent,
    InfoBoxComponent,
    SubmitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
