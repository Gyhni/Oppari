import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.html',
})
export class Nav {
  getCSSClasses(){
    let cssClasses;
    if(localStorage.getItem('currentUserLevel') == null){
      cssClasses = {
        'hidden':true
      }
    }
    if(parseInt(localStorage.getItem('currentUserLevel')) == 3){
      cssClasses = {
        'hidden':true
      }
    }
    if(parseInt(localStorage.getItem('currentUserLevel')) == 1){
      cssClasses = {
        'hidden':false
      }
    }
    return cssClasses;
  }
  getCSSClassesBar(){
    let cssClasses;
    if(localStorage.getItem('currentUserLevel') == null){
      cssClasses = {
        'hidden':true
      }
    }
    if(parseInt(localStorage.getItem('currentUserLevel')) == 2){
      cssClasses = {
        'hidden':true
      }
    }
    if(parseInt(localStorage.getItem('currentUserLevel')) == 3){
      cssClasses = {
        'hidden':true
      }
    }
    return cssClasses;
  }
  getCSSClassesIn(){
    let cssClasses;
    if(localStorage.getItem('currentUserLevel') == null){
      cssClasses = {
        'hidden':true
      }
    }
    return cssClasses;
  }
  signOut(){
    localStorage.clear();
  }


}
