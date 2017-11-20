import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';

/*
  any angular module is a class with @NgModule decorator
  A module is a block of code that belongs to a specific domain or a workflow
  When you want to add new components in app => you import this component into 
  the app module;
  Decorator is an expressionwhich returns a function and can take:
  1. name
  2. property
  3. descriptor as arguments

  class Cat {
    meow() {
      return `${this.name} says Meow!`;
    }
  }
  <=>
  Object.defineProperty(Cat.prototype, 'meow', {
    value: specifiedFunction, 
    enumerable: false,
    configurable: true, 
    writable: true
  });

*/
@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
