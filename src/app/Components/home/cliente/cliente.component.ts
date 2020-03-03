import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  validcliente = new FormGroup({
    'cnpjcpf' : new FormControl('', Validators.required),
    'endereco' : new FormControl('', Validators.required),
    'nomeFantasia' : new FormControl('', Validators.required),
    'cep' : new FormControl('', Validators.required),
    'tipo': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))


  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
