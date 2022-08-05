

import { Component, OnInit } from '@angular/core';

import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {


  public getAllPokemons:any;
  private setAllPokemons: any;

  public getAllAbilities: any;

  public apiError: boolean = false;
  constructor(
    private pokeapiService: PokeapiService

  ) { }

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(res =>{
      this.getAllPokemons = res.results;
      this.setAllPokemons = this.getAllPokemons
      console.log("reponse", res)
    });
  }

  // getPokeImg(url: string) {
  //   return http
  // }


}
