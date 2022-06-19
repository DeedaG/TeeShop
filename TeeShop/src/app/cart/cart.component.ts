import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { TShirt } from '../tShirt.model';     

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html'
})
export class CartComponent {
    total: number = 0;
    price: number = 10.00;
    warning: string = 'Please select size';
    success = 'Thanks for shopping with us!';
    message: string = 'Great taste!';

    itemsInCart: TShirt[] = [];

    constructor(
        private homeData: HomeComponent) { }

    public add() {
        let teeCount = this.homeData.buyTShirt.count;
        this.homeData.buyTShirt.count = teeCount + 1;
        this.getTotal();
    }

    public remove() {
        let teeCount = this.homeData.buyTShirt.count;
        if (teeCount > 2) {
            this.homeData.buyTShirt.count = teeCount - 1;
        }
        this.getTotal();
    }

    public anyItemsInCart(): boolean {
        let tee = this.homeData.buyTShirt;
        tee.price = this.price;
        tee.teeSize = this.homeData.teeSize;
        if (tee && tee.color && tee.design) {
            this.checkForSize(tee);
            this.getTotal();
        }
        return this.itemsInCart.length > 0;
    }

    checkForSize(tee: TShirt): void {
        if (!tee.teeSize) {
            this.message = this.warning;
        }
        if (tee.teeSize) {
            this.itemsInCart.push(tee);
            this.message = this.success;
        }
    }

    getTotal(): void {
        this.total = this.homeData.buyTShirt.count * this.price;
    }

}
