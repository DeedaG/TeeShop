import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.scss']
})
export class TshirtComponent {
    
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
            this.homeData.colorChoice = colorChoice;
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

}
