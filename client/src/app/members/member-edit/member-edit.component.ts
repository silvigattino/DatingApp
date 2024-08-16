import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { take } from 'rxjs';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhotoEditorComponent } from '../photo-editor/photo-editor.component';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [CommonModule, NgIf, TabsModule, NgxGalleryModule, FormsModule, 
            PhotoEditorComponent, DatePipe, TimeagoModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;

  @HostListener('window:beforeunload',['$event']) unloadNotification($event:any){
    if (this.editForm?.dirty){
      $event.returnValue = true;
    }  
  }

  member: Member | undefined;
  user: User | null = null;
  
  constructor(private accountService: AccountService, private memberService: MembersService, private toastr: ToastrService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe({
        next: user => this.user = user
      })
  }

  ngOnInit(): void{    
    this.loadMember();
  }

  loadMember(){
    if(!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }

  updateMember(){
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: _ =>{
        this.toastr.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      }
    });    
  }

  
}
