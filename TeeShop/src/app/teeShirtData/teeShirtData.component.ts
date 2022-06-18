import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-data'
})
export class TeeShirtDataComponent {
    colorChoice: string = <string>{};
    designChoice: string = <string>{};
    size: string = <string>{};
}
