import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { TShirt } from '../tShirt.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-size',
    templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {
    selectedSize: string = '';

    constructor(private homeData: HomeComponent) { }

    public setSize(size: string): void {
      if(this.homeData.buyTShirt && !this.homeData.buyTShirt.id){
            this.homeData.createTShirt();
        }
        this.selectedSize = size;
        this.homeData.buyTShirt.teeSize = size;
    }

}
