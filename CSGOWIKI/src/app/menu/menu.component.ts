import { Component } from '@angular/core';

@Component({
  selector: 'csgo-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  itens: menu[] = [
    {
      id: 1,
      title: 'Armas e equipamentos',
      description: '',
      image:''
    },
    {
      id: 2,
      title: 'skins',
      description: '',
      image:''
    },
    {
      id: 3,
      title: 'granadas estratégicas',
      description: '',
      image:''
    },
    {
      id: 4,
      title: 'dicas e informações',
      description: '',
      image:''
    },
    {
      id: 5,
      title: 'Jogadores profissinais',
      description: '',
      image:''
    },
    {
      id: 6,
      title: 'Campeonatos',
      description: '',
      image:''
    }
  ];
}

class menu {
  id: number = 0;
  title!: string;
  description!: string;
  image!:string;
}
