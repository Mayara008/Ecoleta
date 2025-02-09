import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nome:string = environment.nome
  foto:string = environment.foto
  constructor(private router: Router) { }

  ngOnInit(){
  }
  sair(){
    this.router.navigate(['/entrar'])
    environment.token=''
    environment.id=0
    environment.foto=''
    environment.tipo=''
    environment.nome=''
  }
}
