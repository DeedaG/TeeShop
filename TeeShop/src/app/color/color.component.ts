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

    constructor(private route: ActivatedRoute,
    private homeData: HomeComponent) { }

    ngOnInit(): void {
        //this.route.params.subscribe(params => {
        //    if (params['designChoice']) {
        //        this.designChoice = designChoice;
        //    }
        //});
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
}
