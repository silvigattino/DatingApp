import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../_modules/shared.module';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, SharedModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})

export class NavComponent implements OnInit {
 
  model: any = {}
  constructor(public accountService: AccountService, private toastr: ToastrService) {}
  
  ngOnInit(): void{ } 
  
  login() {
    this.accountService.login(this.model).subscribe({
      next: response =>
      {
        console.log(response);
      },
      error: error => {        
        this.toastr.error(error.error);
        console.log(error);
      }
    })
  }

  logout(){
    this.accountService.logout();
  }
}

 
