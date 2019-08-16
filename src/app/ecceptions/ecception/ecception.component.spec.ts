import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcceptionComponent } from './ecception.component';

describe('EcceptionComponent', () => {
  let component: EcceptionComponent;
  let fixture: ComponentFixture<EcceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
