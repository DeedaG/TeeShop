import { Component, Inject, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

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
        if(this.homeData.buyTShirt && !this.homeData.buyTShirt.id){
            this.homeData.createTShirt();
        } 

        if (designChoice) {
            this.homeData.buyTShirt.design = designChoice;
            
            switch (designChoice) {
                case 'sunshine':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/sun-1837376_1280.png';
                    this.homeData.buyTShirt.base = true;
                    break;
                case 'heartPic':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/heart-1288420_1280.jpg';
                    this.homeData.buyTShirt.base = false;
                    break;
                case 'diamond':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/diamond-161739_1280.png';
                    this.homeData.buyTShirt.base = false;
                    break;
                 case 'star':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/star-1870164_1280.jpg';
                    this.homeData.buyTShirt.base = true;
                    break;   
                 case 'lock':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/padlock-428549_1280.jpg';
                    this.homeData.buyTShirt.base = false;
                    break; 
                case 'space-invader':
                    this.homeData.buyTShirt.designURL = '/assets/images/teeshirts/invader-42007_1280.png';
                    this.homeData.buyTShirt.base = false;
                    break;  
            }
            this.homeData.validate();
            return;
        }
    }


 

    /**
     * returns color choice css
     */
    public getColorChoice(): string {
        return this.homeData.buyTShirt.color;
    }


    public clearDesign(): void {
        this.homeData.buyTShirt.design = null;
        this.homeData.buyTShirt.designURL = null;
        this.homeData.buyTShirt.base = true;
    }

}
