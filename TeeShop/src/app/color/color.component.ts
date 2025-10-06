import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
    
    /*
     * selected design
     */
    designChoice: string = <string>{};

    constructor(
    private homeData: HomeComponent) { }

    ngOnInit(): void {
    }

    /**
     * sets selected color choice to colorChoice string
     * @param colorChoice
     */
    public showTee(colorChoice: string): void {
            switch (colorChoice) {
                case 'red':
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/checks-316861_1280.jpg';
                    this.homeData.colorChoice = 'red';
                    break;
                case 'orange':
                    this.homeData.colorChoice = 'orange';
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/checks-316855_1280.jpg';
                    break;
                case 'yellow':
                    this.homeData.colorChoice = 'yellow';
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/pattern-7039741_1280.png';
                    break;
                case 'green':
                    this.homeData.colorChoice = 'green';
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/green-2847123_1280.jpg';
                    break;
                case 'blue':
                    this.homeData.colorChoice = 'blue';
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/jeans-1161035_1280.jpg';
                    break;
                case 'pink':
                    this.homeData.colorChoice = 'pink';
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/checks-316856_1280.jpg';
                    break;
                default:
                     this.homeData.colorChoice = 'grey';
                     this.homeData.colorChoiceURL = null;
                     break;
            }
            return;
        }
    

    /**
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.colorChoice;
    }

     /**
     * returns color choice url css
     */
    public getColorChoiceURL(): string {
        return this.homeData.colorChoiceURL;
    }

    public clearColor(): void {
        this.homeData.colorChoice = null;
        this.homeData.colorChoiceURL = null;
        this.homeData.base = true;
    }

  
}
