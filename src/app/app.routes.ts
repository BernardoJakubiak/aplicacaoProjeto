import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {CadastroComponent} from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: '', component: PaginaInicialComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}