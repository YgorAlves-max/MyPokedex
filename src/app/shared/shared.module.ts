import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PokeListComponent
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
