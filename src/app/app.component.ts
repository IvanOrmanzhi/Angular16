import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export interface IDiscreteValue {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular16';

  isShowPanel: boolean = false;
  isIndeterminate: boolean = false;

  discreteValues: IDiscreteValue[] = [
    { name: 'Black', checked: true },
    { name: 'White', checked: false },
    { name: 'Red', checked: false },
    { name: 'Blue', checked: false }
  ];

  onCheckboxChange($event: MatCheckboxChange) {
    this.isShowPanel = $event.checked;
  }

  onCheckboxIndeterminateChange($event: MatCheckboxChange) {
    this.isIndeterminate = $event.checked;
  }

  onCheckboxValueChange(name: string, $event: MatCheckboxChange) {
    const foundItem = this.discreteValues.find(item => item.name === name);
    if (foundItem) {
      foundItem.checked = $event.checked;
    }
  }

  public trackByName(index: number, value: IDiscreteValue): string {
    return value.name;
  }
}
