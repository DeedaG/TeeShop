import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss']
})
export class DesignComponent {
    

    /*
     * selected color
     */ 
    //colorChoice: string = <string>{};

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

}
