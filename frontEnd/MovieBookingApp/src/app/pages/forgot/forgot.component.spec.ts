
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ForgotComponent } from './forgot.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

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
import Swal from 'sweetalert2';

// Create a mock service to handle the forgot password API call
class MockUserService {
  forgot() {
  // Return an observable with a mock response
  return of({ message: 'Password changed successfully' });
  }
  }

//this is a test suite for the 'ForgotComponent' ,and all the tests for this component are written within this 'describe' block  
describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;

//this is executed before each test within the test suit.Used for initialize the testing  
  beforeEach(async () => {
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule , MatCardModule ,MatFormFieldModule,MatToolbarModule,MatIconModule,
      MatMenuModule,FormsModule,MatInputModule,BrowserAnimationsModule],//import for testing
      declarations: [ ForgotComponent ,NavbarComponent], //declarations:available for testing
      providers: [
        // Provide the mock service instead of the UserService
        { provide: UserService, useClass: MockUserService },
        ],
    })
    .compileComponents();  //compile the component's template and css

    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test:checking if the formSubmit() function in 'forgotComponent' displays an alert when the loginId is not provided.It sets the loginId is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.  
  it('should display Swal with error message when loginId is not provided', () => {
    spyOn(Swal, 'fire').and.callThrough();
    component.user.loginId = '';
    component.user.password = 'testpassword';
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('Success', 'Password for user  is Changed', 'success');
    });
    
//Test:checking if the formSubmit() function in 'forgotComponent' displays an alert when the password is not provided.It sets the password is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.      
    it('should display Swal with error message when password is not provided or invalid', () => {
    spyOn(Swal, 'fire').and.callThrough();
    component.user.loginId = 'testuser';
    component.user.password = '';
    component.formSubmit();
    expect(Swal.fire).toHaveBeenCalledWith('Success', 'Password for user testuser is Changed', 'success');
    });

});
