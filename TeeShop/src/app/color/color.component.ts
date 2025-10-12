import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
    

    constructor(
    private homeData: HomeComponent) { }

    ngOnInit(): void {
    }

    /**
     * sets selected color choice to colorChoice string
     * @param colorChoice
     */
    public showTee(colorChoice: string): void {
        if(this.homeData.buyTShirt && !this.homeData.buyTShirt.id){
            this.homeData.createTShirt();
        }
            switch (colorChoice) {
                case 'red':
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/checks-316861_1280.jpg';
                    this.homeData.buyTShirt.color = 'red';
                    break;
                case 'orange':
                    this.homeData.buyTShirt.color = 'orange';
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/checks-316855_1280.jpg';
                    break;
                case 'yellow':
                    this.homeData.buyTShirt.color = 'yellow';
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/pattern-7039741_1280.png';
                    break;
                case 'green':
                    this.homeData.buyTShirt.color = 'green';
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/green-2847123_1280.jpg';
                    break;
                case 'blue':
                    this.homeData.buyTShirt.color = 'blue';
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/jeans-1161035_1280.jpg';
                    break;
                case 'pink':
                    this.homeData.buyTShirt.color = 'pink';
                    this.homeData.buyTShirt.colorURL = '/assets/images/teeshirts/checks-316856_1280.jpg';
                    break;
                default:
                     this.homeData.buyTShirt.color = 'grey';
                     this.homeData.buyTShirt.colorURL = null;
                     break;
            }   
            return;
        }
    

    /**
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.buyTShirt.color;
    }

     /**
     * returns color choice url css
     */
    public getColorChoiceURL(): string {
        return this.homeData.buyTShirt.colorURL;
    }

    public clearColor(): void {
        this.homeData.buyTShirt.color = null;
        this.homeData.buyTShirt.colorURL = null;
        this.homeData.buyTShirt.base = true;
    }

  
}
