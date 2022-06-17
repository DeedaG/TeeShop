import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
    /**
     * selected color
     */
    colorChoice: string = 'grey';

    /**
     * sets selected color choice to colorChoice string
     * @param colorChoice
     */
    public showTee(colorChoice: string): void {
        if (colorChoice) {
            this.colorChoice = colorChoice;
            return;
        }
    }

    public getColorChoice(): void {
        return this.colorChoice;
    }
}
