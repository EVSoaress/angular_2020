import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ClienteComponent } from './Components/home/cliente/cliente.component';
import { EnderecoComponent } from './Components/home/endereco/endereco.component';
import { FinanceiroComponent } from './Components/home/financeiro/financeiro.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClienteComponent,
    EnderecoComponent,
    FinanceiroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
