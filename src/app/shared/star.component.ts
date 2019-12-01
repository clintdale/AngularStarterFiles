import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';



@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
    
    
})
export class StarComponent {
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    @Input() rating: number = 4;
    starWidth: number;
    ngOnChanges() : void{
        this.starWidth = this.rating * 100 / 5
    }
    starClicked(): void{
        console.log(this.rating);
        this.ratingClicked.emit("My rating is: "+ this.rating);
    }
}