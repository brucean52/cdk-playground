import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-component',
  templateUrl: './step-component.component.html',
  styleUrls: ['./step-component.component.scss']
})
export class StepComponentComponent implements OnInit {
  @Input() step: string;
  constructor() { }

  ngOnInit() {
  }

}
