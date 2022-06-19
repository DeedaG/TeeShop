import { Component } from '@angular/core';
import { TShirt } from '../tShirt.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    /**
     * selected color
     */
    colorChoice: string = 'grey';

    /**
     * selected design
     */
    designChoice: string = 'pac-man';

    /**
     * tee shirt selections
     */
    buyTShirt: TShirt = <TShirt>{};

    /**
     * tee shirt size
     */
    teeSize: string = '';

    /**
     * tee shirt count
     */
    count: number = 0;
}
