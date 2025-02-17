import { Component, signal } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HompageConfiguratorService } from './hompage-configurator.service';
import { BannerSection, Section } from './homepageConfigurator.types';
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
  selectedOption = 'brand';
  isDragging = false;
  selectedSection: Section| undefined;
  bannerSection: BannerSection | undefined;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nearmeItems, event.previousIndex, event.currentIndex);
  }

  showAlert(item: Section) {
    if (!this.isDragging) {
     //selectedSection should from the item
     this.selectedSection = item;
     //get the type of section
     const sectionType = this.homepageConfigService.getSectionType(item);
     switch (sectionType) {
      case 'banner':
        this.bannerSection = item as BannerSection;
        break;
      default:
        break;
     }
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

  /**
   * based on selectedOption, will create a new object into nearmeItems
   */
  addSection(){
    //based on selectedOption, get the type of section
    //create a new object based on sectionType
    this.homepageConfigService.addNewSection(this.selectedOption);
  }

   // Type guard for BannerSection
  //  isBannerSection(section: Section): section is BannerSection {
  //   return section.name === 'banner';
  // }
}
