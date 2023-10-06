import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DeleteMovieComponent } from './delete-movie.component';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

//this is a test suite for the 'DeleteMovieComponent' ,and all the tests for this component are written within this 'describe' block
describe('DeleteMovieComponent', () => {
  let component: DeleteMovieComponent;
  let fixture: ComponentFixture<DeleteMovieComponent>;

//this is executed before each test within the test suit.Used for initialize the testing  
  beforeEach(async () => {
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule,MatToolbarModule,MatIconModule,MatMenuModule], //import for testing
      declarations: [ DeleteMovieComponent ,NavbarComponent] //declarations:available for testing
    })
    .compileComponents();  //compile the component's template and css

    fixture = TestBed.createComponent(DeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

