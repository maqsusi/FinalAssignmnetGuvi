import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeBarComponent } from './free-bar.component';

describe('FreeBarComponent', () => {
  let component: FreeBarComponent;
  let fixture: ComponentFixture<FreeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
