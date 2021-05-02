import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit {

  @Input("Category") Category = 0; 
  isshow: boolean;


  constructor() {
    this.isshow = true;
   }

  ngOnInit(): void {
  }

}
