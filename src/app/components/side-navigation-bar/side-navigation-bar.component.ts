import { Component } from '@angular/core';

type MenuItems = {
  name: string,
  link: string,
  iconUrl: string,
};

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.scss']
})
export class SideNavigationBarComponent {

  constructor() { }

  public menuItems: MenuItems[] = [
    {
      name: 'Criar',
      link: '', // TODO: Adicionar a rota mais tarde
      iconUrl: 'assets/icons/plus-circle.svg',
    },
    {
      name: 'Listar',
      link: '', // TODO: Adicionar a rota mais tarde
      iconUrl: 'assets/icons/list.svg',
    },
  ]

}
