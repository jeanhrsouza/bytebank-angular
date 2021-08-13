import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //Utilizando decorator input para ter uma property bind
  @Input() transferencias: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
