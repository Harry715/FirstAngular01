import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View02Component } from './view02.component';

describe('View02Component', () => {
  let component: View02Component;
  let fixture: ComponentFixture<View02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(View02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
