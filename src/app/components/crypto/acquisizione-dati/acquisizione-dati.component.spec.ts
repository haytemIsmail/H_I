import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisizioneDatiComponent } from './acquisizione-dati.component';

describe('AcquisizioneDatiComponent', () => {
  let component: AcquisizioneDatiComponent;
  let fixture: ComponentFixture<AcquisizioneDatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisizioneDatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisizioneDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
