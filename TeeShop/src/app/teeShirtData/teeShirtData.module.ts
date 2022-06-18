import { NgModule } from '@angular/core';
import { SizeComponent } from '../size/size.component';
import { ColorComponent } from '../color/color.component';
import { DesignComponent } from '../design/design.component';

@NgModule({
    imports: [BrowserModule ],
    declarations: [SizeComponent, ColorComponent, DesignComponent],
    bootstrap: [SizeComponent, ColorComponent, DesignComponent ]
})
export class TeeShirtDataModule { }