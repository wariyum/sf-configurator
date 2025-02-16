import {Component, signal} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage-configurator',
  standalone: true,
  imports: [CdkDropList, CdkDrag, FormsModule],
  templateUrl: './homepage-configurator.component.html',
  styleUrl: './homepage-configurator.component.css'
})
export class HomepageConfiguratorComponent {

  selectedOption = signal<string>('Brand');
  nearmeItems = [
   'Banner1',"Category1"
  ];

  isDragging = false;



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nearmeItems, event.previousIndex, event.currentIndex);
  }

  showAlert(item: string) {
    if (!this.isDragging) {
      alert(`You clicked: ${item}`);
    }
  }

  dragStarted() {
    this.isDragging = true;
  }

  dragEnded() {
    setTimeout(() => {
      this.isDragging = false;
    }, 0);
  }


}
