import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASantosComponent } from './a-santos.component';

describe('ASantosComponent', () => {
  let component: ASantosComponent;
  let fixture: ComponentFixture<ASantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASantosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
