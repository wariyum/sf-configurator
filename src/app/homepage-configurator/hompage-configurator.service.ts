import { Injectable } from '@angular/core';
import { Section, BannerSection, CategoriesSection, TopSellingSection, BrandsSection } from './homepageConfigurator.types';

@Injectable({
  providedIn: 'root'
})
export class HompageConfiguratorService {

  constructor() { }

  // Usage example:
  sections: Section[] = [
    {
      name: "banner",
      TabletHeight: "auto",
      desktopHeight: "auto",
      mobileHeight: "auto",
      bannerId: "mainbanner",
      showByDeviceType: false
    },
    {
      name: "banner",
      TabletHeight: "auto",
      desktopHeight: "auto",
      mobileHeight: "auto",
      bannerId: "homePageBanner1",
      showByDeviceType: false
    },
    {
      name: "banner",
      TabletHeight: "auto",
      desktopHeight: "auto",
      mobileHeight: "auto",
      bannerId: "homePageBanner2",
      showByDeviceType: false
    },
    {
      name: "categories",
      size: 12,
      categoryId: "f66076e9-8147-46e2-9621-ec93c6c2d0cc"
    },
    {
      name: "banner",
      TabletHeight: "auto",
      desktopHeight: "auto",
      mobileHeight: "auto",
      bannerId: "homePageBanner3",
      showByDeviceType: false
    },
    {
      name: "topSelling"
    },
    {
      name: "brands"
    }
  ];

  //function to type of section from passed object
  getSectionType(section: Section): string {
    return section.name;
  }

}
