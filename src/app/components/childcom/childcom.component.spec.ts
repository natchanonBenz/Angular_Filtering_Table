import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomComponent } from './childcom.component';

describe('ChildcomComponent', () => {
  let component: ChildcomComponent;
  let fixture: ComponentFixture<ChildcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
