import { Component, Input } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index: number;
  title = 'cdk-playground';

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
    }
    this.data.push(newStep);
  }
  selectedStep(index: number) {
    console.log('selected step index' , index);
    this.index = index;
  }
  deleteStep(index: number) {
    console.log('delete index');
    this.data.splice(this.index, 1);
  }
  drop(output: any) {
    moveItemInArray(this.data, output.previous, output.current);
  }
}
