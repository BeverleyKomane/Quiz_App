import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3Page } from './test3.page';

describe('Test3Page', () => {
  let component: Test3Page;
  let fixture: ComponentFixture<Test3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
