import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormReactiveComponent } from './client-form-reactive.component';

describe('ClientFormReactiveComponent', () => {
  let component: ClientFormReactiveComponent;
  let fixture: ComponentFixture<ClientFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
