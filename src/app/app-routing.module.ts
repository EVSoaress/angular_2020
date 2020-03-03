import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ClienteComponent } from './Components/home/cliente/cliente.component';
import { EnderecoComponent } from './Components/home/endereco/endereco.component';
import { FinanceiroComponent } from './Components/home/financeiro/financeiro.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children:[
  { path: 'cliente', component: ClienteComponent,outlet: 'cadastro' },
  { path: 'endereco', component: EnderecoComponent, outlet: 'cadastro' },
  { path: 'financeiro', component: FinanceiroComponent, outlet: 'cadastro' }]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
