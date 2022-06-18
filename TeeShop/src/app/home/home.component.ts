import { Component } from '@angular/core';

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

    size: string = <string>{};
}
