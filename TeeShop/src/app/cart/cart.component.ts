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
    selectedItem: TShirt | null = null;

    constructor(
        private homeData: HomeComponent) { }

    public add(item: TShirt) {
        let teeCount = item.itemCount;

        this.homeData.addedToCart.forEach(tee => {
            if (tee.id === item.id && teeCount) {
                tee.itemCount = teeCount + 1;
            }
        });

        this.getTotal();
        this.homeData.updateItemCount();
    }

    public removeItem(item: TShirt) {
        this.homeData.addedToCart.forEach(tee => {
            if (tee.id === item.id && tee.itemCount > 0) {
                let index = this.homeData.addedToCart.findIndex(item => item.id === tee.id);
                if (index > -1 && tee.itemCount === 1) {
                    this.homeData.addedToCart.splice(index, 1);
                }else{
                    tee.itemCount = tee.itemCount - 1;
                }
            }
        });
        this.getTotal();
        this.homeData.updateItemCount();
    }

    public anyItemsInCart(): boolean {
        let tee = this.homeData.buyTShirt;
        tee.price = this.price;
        tee.teeSize = this.homeData.buyTShirt.teeSize;
        if (tee && tee.color && tee.design) {
            this.homeData.updateMessage();
            this.getTotal();
        }
        return this.homeData.addedToCart.length > 0;
    }

    
    getTotal(): void {
        let amount = 0;
        this.homeData.addedToCart.forEach(item => {
            if (item.itemCount && this.price) {
                let thisTotal = item.itemCount * this.price;
                amount += thisTotal;
            }
        });
        this.total = amount;
    }

    selectItem(item: TShirt): void {
        this.selectedItem = item;
        this.homeData.buyTShirt = item;
        this.homeData.validate();
    }

    getDisplayDesign(item: TShirt){
        switch(item.design){
            case 'heartPic':
                return 'Love';
            case 'sunshine':
                return 'Sunshine';
            case 'diamond':
                return 'Sparkly';
            case 'lock':
                return 'Keeper';
            case 'star':
                return 'Bright';
            case 'space-invader':
                return 'Space Invader';
        }
    }

}
