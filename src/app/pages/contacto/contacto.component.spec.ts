import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPageComponent } from './contacto.component';

describe('ContactoPageComponent', () => {
  let component: ContactoPageComponent;
  let fixture: ComponentFixture<ContactoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
