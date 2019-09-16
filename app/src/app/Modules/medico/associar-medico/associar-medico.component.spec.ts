import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarMedicoComponent } from './associar-medico.component';

describe('AssociarMedicoComponent', () => {
  let component: AssociarMedicoComponent;
  let fixture: ComponentFixture<AssociarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
