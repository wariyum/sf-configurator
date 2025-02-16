import { Component, signal } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HompageConfiguratorService } from './hompage-configurator.service';
import { Section } from './homepageConfigurator.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage-configurator',
  standalone: true,
  imports: [CdkDropList, CdkDrag, FormsModule,CommonModule],
  templateUrl: './homepage-configurator.component.html',
  styleUrl: './homepage-configurator.component.css'
})
export class HomepageConfiguratorComponent {

  constructor(private homepageConfigService: HompageConfiguratorService) {
    this.nearmeItems = this.homepageConfigService.sections;
  }
  nearmeItems: any[];
  selectedOption = signal<string>('Brand');
  isDragging = false;
  selectedSection: Section| undefined;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nearmeItems, event.previousIndex, event.currentIndex);
  }

  showAlert(item: Section) {
    if (!this.isDragging) {
     //selectedSection should from the item
     this.selectedSection = item;
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
