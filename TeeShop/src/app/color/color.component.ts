import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TShirt } from '../tShirt.model';
import { v4 as uuidv4 } from 'uuid';

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
        if (colorChoice) {
            switch (colorChoice) {
                case 'red':
                    this.homeData.colorChoiceURL = '/assets/images/teeshirts/checks-316861_1280.jpg';
                    break;
                case 'orange':
                    this.homeData.colorChoice = 'orange';
                    break;
                case 'yellow':
                    this.homeData.colorChoice = 'yellow';
                    break;
                case 'green':
                    this.homeData.colorChoice = 'green';
                    break;
                case 'blue':
                    this.homeData.colorChoice = 'blue';
                    break;
                    case 'pink':
                    this.homeData.colorChoice = 'pink';
                    break;
                    default:
                    this.homeData.colorChoice = 'grey';
            }
            //this.homeData.colorChoice = colorChoice;
            return;
        }
    }

    /**
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.colorChoice;
    }

     /**
     * returns color choice css
     */
    public getColorChoiceURL(): string {
        return this.homeData.colorChoiceURL;
    }

    /**
     * returns design choice css string
     */
    public getDesignChoice(): string {
        let cssString = this.homeData.designChoice;

        if (this.homeData.colorChoice) {
            let changeCss = cssString.concat(' ').concat(this.homeData.colorChoice);
            cssString = changeCss;
            console.log(cssString);
        }

        return cssString;
    }

    /**
     *set selections to buyTShirt object
     */
    public addToCart(): void {
        this.homeData.count += 1;
        let newTee = new TShirt();

        newTee.id = uuidv4();
        newTee.design = this.homeData.designChoice;
        newTee.color = this.homeData.colorChoice;
        newTee.count = this.homeData.count;

        this.homeData.buyTShirt = newTee;
    }
}
