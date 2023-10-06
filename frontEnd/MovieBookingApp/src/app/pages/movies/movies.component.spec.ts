import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesComponent } from './movies.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import Swal from 'sweetalert2';

// Create a mock service to handle the allMovies API call
class MockUserService {
  allMovies() {
    // Return an observable with a mock response
    return of([
      { movieName: 'Movie A', theatreName: 'Theatre X', ticketsStatus: 'AVAILABLE' },
      { movieName: 'Movie B', theatreName: 'Theatre Y', ticketsStatus: 'SOLD OUT' }
    ]);
  }
}

//this is a test suite for the 'MoviesComponent' ,and all the tests for this component are written within this 'describe' block
describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let userService: MockUserService;

  //this is executed before each test within the test suit.Used for initialize the testing
  beforeEach(async () => {
    userService = new MockUserService();
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule], //import for testing
      declarations: [MoviesComponent, NavbarComponent],  //declarations:available for testing
      providers: [
        // Provide the mock services directly
        { provide: UserService, useValue: userService },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

  //Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Test:Checking if the onClickBuyTicket() function in the 'movieComponent' displays a swal alert with an info msgs when a movie with 'SOLD OUT' status is clicked to buy tickets.It sets the 'movies' property to list of movie objects and uses spyOn to create a spy on the 'swal.fire' function.after that it calls the 'Movie A' and expects that 'swal.fire' was called with the specified parameters.
  it('should display Swal with info message when a movie with "SOLD OUT" status is clicked to buy tickets', () => {
    spyOn(Swal, 'fire');
    component.movies = [
      { position: 1, movieName: 'Movie A', theaterName: 'Theatre X', ticketStatus: 'SOLD OUT' },
      { position: 2, movieName: 'Movie B', theaterName: 'Theatre Y', ticketStatus: 'AVAILABLE' }
    ];
    component.onClickBuyTicket('Movie A');
    expect(Swal.fire).toHaveBeenCalledWith('Cannot Book', 'This Movie is Sold Out', 'info');
  });
});
