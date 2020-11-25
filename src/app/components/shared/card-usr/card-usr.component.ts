import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-usr',
  templateUrl: './card-usr.component.html',
  styleUrls: ['./card-usr.component.css']
})

export class CardUsrComponent implements OnInit {

  @Input() Items: any[]= [];

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }
}
