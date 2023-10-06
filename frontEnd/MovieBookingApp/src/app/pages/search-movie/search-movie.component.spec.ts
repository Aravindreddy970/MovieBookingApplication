import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchMovieComponent } from './search-movie.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Swal from 'sweetalert2';

// Create a mock service to handle the searchMovie API call
class MockUserService {
  searchMovie(movieName:String) {
    if(movieName==='Movie Y'){
      return of([]);
    }
  // Return an observable with a mock response
  return of([
  { movieName: 'Movie 1', theatreName: 'Theatre A', ticketsStatus: 'AVAILABLE' },
  { movieName: 'Movie 2', theatreName: 'Theatre B', ticketsStatus: 'SOLD OUT' },
  { movieName: 'Movie 3', theatreName: 'Theatre C', ticketsStatus: 'AVAILABLE' }
  ]);
  }
  }
//this is a test suite for the 'HomeComponent' ,and all the tests for this component are written within this 'describe' block
describe('SearchMovieComponent', () => {
  let component: SearchMovieComponent;
  let fixture: ComponentFixture<SearchMovieComponent>;
  let userService: MockUserService;

//this is executed before each test within the test suit.Used for initialize the testing  
  beforeEach(async () => {
    userService = new MockUserService();
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule , MatCardModule ,MatFormFieldModule,MatDividerModule,MatToolbarModule,MatIconModule,MatMenuModule,
      FormsModule,MatInputModule,BrowserAnimationsModule],
       //import for testing
      declarations: [ SearchMovieComponent ,NavbarComponent],//declarations:available for testing
      providers: [
        // Provide the mock service instead of the UserService
        { provide:UserService, useClass: MockUserService }
        ]
    })
    .compileComponents(); //compile the component's template and css

    fixture = TestBed.createComponent(SearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test2:checking if the search() function in 'searchMovieComponent' displays an alert when the movie name is not provided.It sets the movieName is not provided(empty string) and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.    
  it('should display Swal with info message when the movie name is not provided', () => {
    spyOn(Swal, 'fire').and.callThrough();
    component.movieName = '';
    component.search();
    expect(Swal.fire).toHaveBeenCalledWith('', 'Enter Movie Name', 'info');
    });

//Test3:checking if the search() function in 'searchMovieComponent' displays an alert when the no movie name is found on search and uses spyOn to create a spy on the swal.fire function.The test expects that 'swal.fire' function was called with specified message.
    it('should display Swal with info message when no movie is found on search', () => {
      spyOn(Swal, 'fire').and.callThrough();
      component.search();
      expect(Swal.fire).toHaveBeenCalledWith('', 'Enter Movie Name', 'info');
      });
});
