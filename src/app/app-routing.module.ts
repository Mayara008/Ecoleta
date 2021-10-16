import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import {InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';



const routes: Routes = [ //Todo componente que precisar ter acesso tem que referencia-lo aqui . (qui é um arrey de objetos de rotas
  //Para separar os obejtos dentro do arrey utiliza-se virgula
// {} utiliza-se para referencia um objeto e dentro dessa chave colocar os atributos dos objetos
//path: - é nome da minha rota
//"", nas aspas e virgula é onde vai o nome da minha rota ("entrar")
// redirectTo: é onde falo q essa rota vai para algum lugar (,component:)
// : indico qual componete essa rota vai.   (EntrarComponent)
  { path:"",redirectTo:'entrar',pathMatch:'full'}, //Ele traz todas as rotas a baixo. 
  { path:"entrar",component:EntrarComponent  },
  { path:"cadastrar",component:CadastrarComponent  },
  { path:"inicio",component:InicioComponent  },
  { path:"tema",component:TemaComponent  },
  { path:"tema-edit/:id",component:TemaEditComponent  },
  { path:"tema-delete/:id",component:TemaDeleteComponent  },
  { path:"postagem-edit/:id", component: PostagemEditComponent  },
  { path:"postagem-delete/:id", component: PostagemDeleteComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
