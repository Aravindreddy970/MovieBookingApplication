import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//this is a test suite for the 'DashboardComponent' ,and all the tests for this component are written within this 'describe' block
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

//this is executed before each test within the test suit.Used for initialize the testing  
  beforeEach(async () => {
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule ,MatCardModule,MatFormFieldModule,MatToolbarModule,MatIconModule,MatMenuModule,FormsModule,MatInputModule,BrowserAnimationsModule], //import for testing
      declarations: [ DashboardComponent ,NavbarComponent], //declarations:available for testing

    })
    .compileComponents();  //compile the component's template and css

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});