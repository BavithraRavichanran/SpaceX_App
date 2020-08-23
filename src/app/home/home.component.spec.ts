import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    const homeServiceStub = () => ({
      getAllSpaceXDetails: () => ({ subscribe: f => f({}) }),
      getYear: (selectedYear, selectedLaunch, selectedLand) => ({
        subscribe: f => f({})
      })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{ provide: HomeService, useFactory: homeServiceStub }],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`years has default value`, () => {
    expect(component.years).toEqual([
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020
    ]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getAllSpaceXDetails').and.callThrough();
      component.ngOnInit();
      expect(component.getAllSpaceXDetails).toHaveBeenCalled();
    });
  });
  describe('getAllSpaceXDetails', () => {
    it('makes expected calls', () => {
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(
        HomeService
      );
      spyOn(homeServiceStub, 'getAllSpaceXDetails').and.callThrough();
      component.getAllSpaceXDetails();
      expect(homeServiceStub.getAllSpaceXDetails).toHaveBeenCalled();
    });
  });
});
