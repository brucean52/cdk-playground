import { Component, Output, EventEmitter } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper {

  @Output() dropEvent = new EventEmitter();
  @Output() stepClicked = new EventEmitter();

  onClick(index: number): void {
    this.selectedIndex = index;
    this.stepClicked.emit(index);
  }
  dropped(event: CdkDragDrop<string[]>) {
    const output = {
      previous: event.previousIndex,
      current: event.currentIndex
    };
    this.dropEvent.emit(output);
    this.selectedIndex = event.currentIndex;
  }
}
