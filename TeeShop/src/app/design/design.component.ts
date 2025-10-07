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
            
            switch (designChoice) {
                case 'sunshine':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/sun-1837376_1280.png';
                    console.log('showTee(sunshine)', this.homeData.designChoiceURL);
                    this.homeData.base = true;
                    break;
                case 'heartPic':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/heart-1288420_1280.jpg';
                    this.homeData.base = false;
                    break;
                case 'diamond':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/diamond-161739_1280.png';
                    this.homeData.base = false;
                    break;
                 case 'star':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/star-1870164_1280.jpg';
                    this.homeData.base = true;
                    break;   
                 case 'lock':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/padlock-428549_1280.jpg';
                    this.homeData.base = false;
                    break; 
                case 'space-invader':
                    this.homeData.designChoiceURL = '/assets/images/teeshirts/invader-42007_1280.png';
                    this.homeData.base = false;
                    break;  
            }
            return;
        }
    }


 

    /**
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.colorChoice;
    }


    public clearDesign(): void {
        this.homeData.designChoice = null;
        this.homeData.designChoiceURL = null;
        this.homeData.base = true;
    }

}
