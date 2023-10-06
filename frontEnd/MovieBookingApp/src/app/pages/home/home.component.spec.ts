import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

//this is a test suite for the 'HomeComponent' ,and all the tests for this component are written within this 'describe' block
describe('HomeComponent', () => {
  let component: HomeComponent; 
  let fixture: ComponentFixture<HomeComponent>;

//this is executed before each test within the test suit.Used for initialize the testing
  beforeEach(async () => {
  //configures the testing module and set up the necessary testing modules and components  
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,MatToolbarModule,MatIconModule,
      MatMenuModule], //import for testing
      declarations: [ HomeComponent ,NavbarComponent] //declarations:available for testing
    })
    .compileComponents(); //compile the component's template and css 

    fixture = TestBed.createComponent(HomeComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test:checking if the 'login()' function in the 'HomeComponent' correctly navigates to the login pages.uses spyOn to create spy on the router's navigate function and then calls the login() function.and it expects the router's navigate function was called with the specific route.

  it('should navigate to login page', () => {
    const routerSpy=spyOn(component['router'],'navigate');
    component.login();
    expect(routerSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith(['api/v1.0/moviebooking/login']);
  });

  it('should navigate to register page', () => {
    const routerSpy=spyOn(component['router'],'navigate');
    component.register();
    expect(routerSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith(['api/v1.0/moviebooking/register']);
  });
  
});
