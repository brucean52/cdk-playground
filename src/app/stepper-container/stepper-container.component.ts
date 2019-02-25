import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.scss']
})
export class StepperContainerComponent {
  index: number;

  data = [
    {
      title: 'First Step',
      description: 'This is the first step'
    },
    {
      title: 'Second Step',
      description: 'This is the second step'
    },
    {
      title: 'Third Step',
      description: 'This is the third step'
    },
    {
      title: 'Fourth Step',
      description: 'This is the fourth step'
    }
  ];

  addStep(): void {
    const newStep = {
      title: 'New Step',
      description: 'This is a new step'
    };
    this.data.push(newStep);
  }
  selectedStep(index: number) {
    this.index = index;
  }
  deleteStep() {
    this.data.splice(this.index, 1);
  }
  drop(output: any) {
    moveItemInArray(this.data, output.previous, output.current);
  }

}
