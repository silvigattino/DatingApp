import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  registerMode = false;
  users : any;

  constructor() {};

  ngOnInit(): void{  
  }
 
  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  
  cancelRegisterMode(event:boolean)
  {
    this.registerMode = event;
  }

}