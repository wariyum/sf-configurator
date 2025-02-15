import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageConfiguratorComponent } from './homepage-configurator.component';

describe('HomepageConfiguratorComponent', () => {
  let component: HomepageConfiguratorComponent;
  let fixture: ComponentFixture<HomepageConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
