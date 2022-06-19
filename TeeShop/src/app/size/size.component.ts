import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-size',
    templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {
    selectedSize: string = '';

    constructor(private homeData: HomeComponent) { }

    public setSize(size: string): void {
        this.selectedSize = size;
        this.homeData.teeSize = size;
    }

}
