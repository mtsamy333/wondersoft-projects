import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdserviceComponent } from './prodservice.component';

describe('ProdserviceComponent', () => {
  let component: ProdserviceComponent;
  let fixture: ComponentFixture<ProdserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
