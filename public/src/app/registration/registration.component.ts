import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser= {};
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { 
    this.newUser = {"firstName": "", "lastName": "", "birthday": "", "email": "", "password": ""}

  }

  ngOnInit() {
    this.newUser = {"firstName": "", "lastName": "", "birthday": "", "email": "", "password": ""}

  }

  addUser(){
    let tempObservable = this._httpService.createUser(this.newUser)
    tempObservable.subscribe(data => {
      if (data['errors']){
        console.log("There are errors")
        this.errors = data['errors']
        console.log(data['errors'])
      } else {
        console.log("There are NO errors")
        console.log(data);
        this.errors = [];
        this.newUser = {"firstName": "", "lastName": "", "birthday": "", "email": "", "password": ""}
        this._router.navigate(['/dashboard/home']);
      }
    });
  }

}
