import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title = 'angular9-zcost';
  color = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

}
