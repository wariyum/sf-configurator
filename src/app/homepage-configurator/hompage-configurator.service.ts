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

  /**
   * Creates a new section object based on the provided section type
   * @param sectionType The type of section to create ('banner', 'categories', 'topSelling', 'brands')
   * @returns A new Section object of the specified type
   */
  addNewSection(sectionType: string) {
    switch (sectionType.toLowerCase()) {
      case 'banner':
        const bannerSection: BannerSection = {
          name: 'banner',
          TabletHeight: 'auto',
          desktopHeight: 'auto',
          mobileHeight: 'auto',
          bannerId: `banner-${Date.now()}`, // Generate unique banner ID
          showByDeviceType: false
        };
        //new this bannerSection to section
        this.sections.push(bannerSection);
        break;
      case 'categories':
        const categoriesSection: CategoriesSection = {
          name: 'categories',
          size: 12, // Default size
          categoryId: `cat-${Date.now()}` // Generate unique category ID
        };
        this.sections.push(categoriesSection);
        break;
      case 'topselling':
        const topSellingSection: TopSellingSection = {
          name: 'topSelling'
        };
        this.sections.push(topSellingSection);

        break;
      case 'brands':
        const brandsSection: BrandsSection = {
          name: 'brands'
        };
        this.sections.push(brandsSection);
        break

      default:
        throw new Error(`Invalid section type: ${sectionType}`);
    }
  }

}
