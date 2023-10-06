import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

//this is a test suite for the 'FooterComponent' ,and all the tests for this component are written within this 'describe' block
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

//this is executed before each test within the test suit.Used for initialize the testing  
  beforeEach(async () => {
//configures the testing module and set up the necessary testing modules and components    
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ] //declarations:available for testing
    })
    .compileComponents(); //compile the component's template and css

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //triggers changes detection
  });

//Test:if component is created successfully.It uses the 'expect' function to check if the 'component' variable hold a truthy value,indicating that the component was created successfully.  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});