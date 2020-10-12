import { Component } from '@angular/core';
import {Tab2Page} from './../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public items: any[] = [
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000',
    },
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000'
    },
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000'
    },
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000'
    },
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000'
    },
    {
      img: '../../assets/items/milktea.png',
      name: 'Trà sữa trân châu đường đen',
      real: '45 000',
      sale: '30 000'
    },
  ]
  
  constructor() {}
}
