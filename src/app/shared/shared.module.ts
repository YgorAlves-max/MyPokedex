import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    PokeListComponent
  ]

})
export class SharedModule { }
