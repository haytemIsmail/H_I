import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaPrezziCryptoComponent } from './tabella-prezzi-crypto.component';

describe('TabellaPrezziCryptoComponent', () => {
  let component: TabellaPrezziCryptoComponent;
  let fixture: ComponentFixture<TabellaPrezziCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaPrezziCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaPrezziCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
