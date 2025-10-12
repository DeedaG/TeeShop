import { Component } from '@angular/core';
import { TShirt } from '../tShirt.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    /**
     * tee shirt selections
     */
    buyTShirt: TShirt = <TShirt>{};

    /**
     * tee shirt count
     */
    itemCount: number = 0;

    addedToCart: TShirt[] = [];

    warning: string = 'Please select size';
    success = 'Great choices!';
    paid = 'Thanks for shopping with us!';
    message: string = '';


    public clearTshirt(): void {
        this.buyTShirt = new TShirt();
    }

    public createTShirt(): void {
        this.buyTShirt = new TShirt();
        this.buyTShirt.id = uuidv4();
        this.buyTShirt.itemCount = 1;
    }

      /**
     *set selections to buyTShirt object
     */
    public addToCart(): void {
        this.updateMessage();
        this.addedToCart.push(this.buyTShirt);
        this.updateItemCount();
    }

    public updateItemCount(): void {
      let itemCount = 0;
        this.addedToCart.forEach(item => {
            if (item.itemCount) {
                itemCount += item.itemCount;
            }
        });

        console.log('addedtocart',this.addedToCart);
        this.itemCount = itemCount;
        console.log('itemcount',this.itemCount);
    }

    validate(){
         this.addedToCart.forEach(tShirt => {
            if(tShirt.id == this.buyTShirt.id){
                tShirt.editing = true;
                this.buyTShirt.editing = true;
                this.updateMessage();
            }
        });
    }

    updateMessage(): void {
        if (!this.buyTShirt.teeSize) {
            this.message = this.warning;
            return;
        }
        if(!this.buyTShirt.color) {
            this.message = 'Please select a color';
            return;
        }
        if(!this.buyTShirt.design) {
            this.message = 'Please select a design';
            return;
        }

        if (this.buyTShirt.teeSize && this.buyTShirt.color && this.buyTShirt.design) {
            this.message = this.success;
        }
    }

}
