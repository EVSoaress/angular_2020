import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




    validlogin = new FormGroup({
    'usuario' : new FormControl('', Validators.required),
    'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))

  });

  constructor(public router: Router) { }

  ngOnInit(): void {

  }
  validar(){



    if (this.validlogin.get("usuario").value.toLowerCase() == "admin" && this.validlogin.get("senha").value.toLowerCase() == "admin"){

      this.router.navigate(['home'])

    } else{

      alert("Senha ou Usuário Incorreto(s)");

    }

    // const a = this.validlogin.controls.usuario.value
    // const b = this.validlogin.controls.senha.value
    // const c = document.getElementById('usuario')
    // if(){

    }

  }



