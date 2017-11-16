import { Component } from '@angular/core';
/*
  Component is made by importing the compoennt from the Component module
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
  the second piece of code is the component decorator which starts with '@'
  We are using Component that we got from the import stmt
  selector is the name of the tag the component is applied to => at index.html we have app-root tag
  <app-root></app-root>
  styleUrls - > defines an html template and stylesheet associated with this component
*/
export class AppComponent {
  title = 'app';
}

/*
  At the last piece of code we have the class of this compoentns
  here we define the props and methods
  What is defined here is also accessible from the template !
  Its where dependency injection occurs
*/ 
