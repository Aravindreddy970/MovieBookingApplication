import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//this is a test suite for the 'LoginComponent' ,and all the tests for this component are written within this 'describe' block
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

//this is executed before each test within the test suit.Used for initialize the testing
  beforeEach(async () => {
    //configures the testing module and set up the necessary testing modules and components
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule , MatCardModule,MatFormFieldModule,MatToolbarModule,MatIconModule,
      MatMenuModule,MatInputModule,FormsModule,BrowserAnimationsModule], //import for testing
      declarations: [ LoginComponent , NavbarComponent ] //declarations:available for testing
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

  //Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test:checking if the formSubmit() function in 'loginComponent' displays an alert when the loginId is not provided.It sets the loginId is not provided(empty string) and uses spyOn to create a spy on the windows.alert function.The test expects that 'windows.alert' function was called with specified message.

  it('should display alert if loginId is not provided', () => {
    component.user.loginId='';
    component.user.password='password';
    spyOn(window,'alert');
    component.formSubmit();
    expect(window.alert).toHaveBeenCalledWith('Enter Username!');
  })

  //Test:checking if the formSubmit() function in 'loginComponent' displays an alert when the password is not provided.It sets the password is not provided(empty string) and uses spyOn to create a spy on the windows.alert function.The test expects that 'windows.alert' function was called with specified message.
  it('should display alert if password is not provided', () => {
    component.user.loginId='username';
    component.user.password='';
    spyOn(window,'alert');
    component.formSubmit();
    expect(window.alert).toHaveBeenCalledWith('Enter password!');
  })

});
