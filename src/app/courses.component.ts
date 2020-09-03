import { Component } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector : 'courses',
    template: `
            <div class="container">
            <h1>notre application sur Angular</h1>
                <ul class="list-group">
                    <li class="list-group-item"> titre : {{ course.titre | lowercase | uppercase }}</li>
                    <li  class="list-group-item">Ratting : {{ course.avis | number:'2.1-1' }}</li>
                    <li  class="list-group-item">students : {{ course.participants }} </li>
                    <li  class="list-group-item">Price : {{ course.prix | currency:'MAD':'symbol':'3.1-1' }} </li>
                    <li  class="list-group-item">release date : {{ course.publicationDate | date:'shortDate' }}</li>
                </ul>
            </div>
            `
})

export class CoursesComponent {
    course = {
        titre: 'formation compléte sur Angular',
        avis : '4.9762',
        participants : 136,
        prix: 950.38,
        publicationDate: new Date(2017,11,21)
    }
}