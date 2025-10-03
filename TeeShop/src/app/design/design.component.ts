import { Component, Inject, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TShirt } from '../tShirt.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss']
})
export class DesignComponent {

    constructor(private route: ActivatedRoute,
    private homeData: HomeComponent) { }

    ngOnInit(): void {
    }

    /**
     * sets selected design choice to designChoice string
     * @param designChoice
     */
    public showTee(designChoice: string): void {
        if (designChoice) {
            this.homeData.designChoice = designChoice;
            return;
        }
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
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.colorChoice;
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

    // /**
    //  * returns the asset url for the selected color/design
    //  */
    // public getTShirtUrl(): string {
    //     const color = this.homeData.colorChoice ? this.homeData.colorChoice : 'grey';
    //     const design = this.homeData.designChoice ? this.homeData.designChoice : 'pac-man';
    //     return `/assets/images/teeshirts/tshirt-${color}-${design}.svg`;
    // }

    /**
     * Map the current colorChoice to an actual hex color used to fill the inline SVG.
     */
    public getColorHex(): string {
        const map: { [key: string]: string } = {
            'red': '#e74c3c',
            'orange': '#f39c12',
            'yellow': '#f1c40f',
            'green': '#2ecc71',
            'pink': '#ff69b4',
            'blue': '#3498db',
            'white': '#ffffff',
            'grey': '#95a5a6'
        };
        const key = this.homeData.colorChoice ? this.homeData.colorChoice : 'grey';
        return map[key] || '#95a5a6';
    }

}
