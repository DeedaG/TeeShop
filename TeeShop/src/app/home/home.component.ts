import { Component } from '@angular/core';
import { TShirt } from '../tShirt.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
   
    /**
     * selected color
     */
    colorChoice: string = 'grey';

    /**
     * selected design
     */
    designChoice: string = 'sunshine';

    /**
     * colorChoiceURL string = '';
     */
    colorChoiceURL: string;

    /**
     * tee shirt selections
     */
    buyTShirt: TShirt = <TShirt>{};

    /**
     * tee shirt size
     */
    teeSize: string = '';

    /**
     * tee shirt count
     */
    itemCount: number = 0;
    
    designChoiceURL: string;

    base: boolean = true;

    addedToCart: TShirt[] = [];

    warning: string = 'Please select size';
    success = 'Great choices!';
    paid = 'Thanks for shopping with us!';
    message: string;


    public clearTshirt(): void {
        this.buyTShirt = <TShirt>{};
        this.teeSize = '';
        this.colorChoice = '';
        this.colorChoiceURL = '';
        this.designChoice = '';
        this.designChoiceURL = '';
        this.base = true;
    }

      /**
     *set selections to buyTShirt object
     */
    public addToCart(): void {
        let newTee = new TShirt();

        newTee.id = uuidv4();
        newTee.design = this.designChoice;
        newTee.color = this.colorChoice;
        newTee.itemCount = 1;
        newTee.teeSize = this.teeSize;
        
        this.checkForSize(newTee);

        this.buyTShirt = newTee;
        this.addedToCart.push(newTee);

        this.updateItemCount();
    }

    public updateItemCount(): void {
      let itemCount = 0;
        this.addedToCart.forEach(item => {
            if (item.itemCount) {
                itemCount += item.itemCount;
            }
        });

        this.itemCount = itemCount;
    }

    checkForSize(tee: TShirt): void {
        if (!tee.teeSize) {
            this.message = this.warning;
            return;
        }
        if(!tee.color) {
            this.message = 'Please select a color';
            return;
        }
        if(!tee.design) {
            this.message = 'Please select a design';
            return;
        }

        if (tee.teeSize && tee.color && tee.design) {
            this.message = this.success;
        }
    }

}
