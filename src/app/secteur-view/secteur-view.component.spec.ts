import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurViewComponent } from './secteur-view.component';

describe('SecteurViewComponent', () => {
  let component: SecteurViewComponent;
  let fixture: ComponentFixture<SecteurViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteurViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
