import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegisterComponent } from './register.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Swal from 'sweetalert2';

// Create a mock service to handle registration API call
class MockUserService {
  register() {
  // Return an observable with a mock response
  return of({ message: 'Registration successful' });
  }
  }

//this is a test suite for the 'RegisterComponent' ,and all the tests for this component are written within this 'describe' block
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  //this is executed before each test within the test suit.Used for initialize the testing
  beforeEach(async () => {
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule ,MatCardModule,MatFormFieldModule,MatRadioModule,MatToolbarModule,MatIconModule,MatMenuModule,FormsModule,MatInputModule,BrowserAnimationsModule],//import for testing

      declarations: [ RegisterComponent ,NavbarComponent],//declarations:available for testing
      providers: [
        // Provide the mock service instead of the UserService
        { provide:UserService, useClass: MockUserService }
        ]
    })
    .compileComponents();  //compile the component's template and css 

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test1:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test2:checking if the formSubmit() function in 'registerComponent' displays an alert when the loginId is not provided.It sets the loginId is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.  
  it('should display Swal with error message when loginId is not provided', () => {
    component.user.loginId = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'User Name is required !', 'info');
    });
 
//Test3:checking if the formSubmit() function in 'registerComponent' displays an alert when the firstName is not provided.It sets the firstName is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when firstName is not provided', () => {
    component.user.loginId = 'username';
    component.user.firstName = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'First Name is required', 'info');
    });

//Test4:checking if the formSubmit() function in 'registerComponent' displays an alert when the lastName is not provided.It sets the lastName is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when lastName is not provided', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Last Name is required !', 'info');
    });

//Test5:checking if the formSubmit() function in 'registerComponent' displays an alert when the role is not provided.It sets the loginId,firstName,lastName to valid values but set admin and user to false(incomplete form) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when role is not selected', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = 'Kumar';
    component.user.admin = false;
    component.user.users = false;
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Select Role !', 'info');
    });
 
//Test6:checking if the formSubmit() function in 'registerComponent' displays an alert when the email is not provided.It sets the email is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when email is not provided', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = 'Kumar';
    component.user.admin = true;
    component.user.email = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Email is Required!', 'info');
    });
  
//Test7:checking if the formSubmit() function in 'registerComponent' displays an alert when the contactNumber is not provided.It sets the contactNumber is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when contactNumber is not provided or invalid', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = 'Kumar';
    component.user.admin = true;
    component.user.email = 'rahul.kumar@example.com';
    component.user.contactNumber = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Enter Correct Contact Number', 'info');
    
    });
    
//Test8:checking if the formSubmit() function in 'registerComponent' displays an alert when the password is not provided.It sets the password is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when password is not provided or invalid', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = 'Kumar';
    component.user.admin = true;
    component.user.email = 'rahul.kumar@example.com';
    component.user.contactNumber = '1234567890';
    component.user.password = '';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Enter Valid Password!', 'info');
    
    });

//Test9:checking if the formSubmit() function in 'registerComponent' displays an alert when the confirmPassword does not match password.It sets the confirmPassword to different value then the 'password' and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
    it('should display Swal with error message when confirmPassword does not match password', () => {
    component.user.loginId = 'username';
    component.user.firstName = 'Rahul';
    component.user.lastName = 'Kumar';
    component.user.admin = true;
    component.user.email = 'rahul.kumar@example.com';
    component.user.contactNumber = '1234567890';
    component.user.password = 'password';
    component.user.confirmPassword = 'pass';
    spyOn(Swal, 'fire').and.callThrough();
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('Oops!', 'Enter Correct Password!', 'error');
    });
  
});
