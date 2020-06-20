import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContributionByUserComponent } from './list-contribution-by-user.component';

describe('ListContributionByUserComponent', () => {
  let component: ListContributionByUserComponent;
  let fixture: ComponentFixture<ListContributionByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContributionByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContributionByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
