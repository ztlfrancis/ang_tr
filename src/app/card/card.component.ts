import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() index!: string;
  @Input() first_name!: string;
  @Input() last_name!: string;
  @Input() img!: string;
  bgimg!: string;
  constructor() {}

  ngOnInit(): void {
    this.bgimg = "https://picsum.photos/id/"+this.index+"/200/300"
  }

}
