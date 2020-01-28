import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router

  ){}

    ngOnInit(){
      this.goLogin();
    }

    goLogin() {
      this._router.navigate(['/login'])
    }
  }