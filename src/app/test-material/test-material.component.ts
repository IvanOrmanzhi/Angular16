import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-test-material',
  templateUrl: './test-material.component.html',
  standalone: true,
  imports: [MatListModule, NgFor],
})
export class TestMaterialComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
