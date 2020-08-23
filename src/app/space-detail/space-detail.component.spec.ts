import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SpaceDetailComponent } from './space-detail.component';
describe('SpaceDetailComponent', () => {
  let component: SpaceDetailComponent;
  let fixture: ComponentFixture<SpaceDetailComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SpaceDetailComponent]
    });
    fixture = TestBed.createComponent(SpaceDetailComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
