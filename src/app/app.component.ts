import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
        new Goal(1,'Watch Finding Nemo','goal 1',new Date(2019,10,10)),
        new Goal(2,'Buy Cookies','goal 2',new Date(2019,10,10)),
        new Goal(3, 'Get new Phone Case','goal3',new Date(2019,10,10)),
        new Goal(4, 'Get Dog Food','goal 4',new Date(2019,10,10)),
        new Goal(5, 'Solve math homework','goal 5',new Date(2019,10,10)),
        new Goal(6, 'Plot my world domination plan','goal 6',new Date(2019,10,10)),

    ]
}
