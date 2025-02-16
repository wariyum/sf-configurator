// section.types.ts
export interface BannerSection {
  name: 'banner';
  TabletHeight: string;
  desktopHeight: string;
  mobileHeight: string;
  bannerId: string;
  showByDeviceType: boolean;
}

export interface CategoriesSection {
  name: 'categories';
  size: number;
  categoryId: string;
}

export interface TopSellingSection {
  name: 'topSelling';
}

export interface BrandsSection {
  name: 'brands';
}

export type Section = BannerSection | CategoriesSection | TopSellingSection | BrandsSection;
