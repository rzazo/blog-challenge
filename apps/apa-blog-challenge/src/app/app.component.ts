import {Component} from '@angular/core';
import {MENU_CONFIGURATION} from "./constants";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public menuConfiguration = MENU_CONFIGURATION;
}
