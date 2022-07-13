import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsideComponent } from './contentside.component';

describe('ContentsideComponent', () => {
  let component: ContentsideComponent;
  let fixture: ComponentFixture<ContentsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
