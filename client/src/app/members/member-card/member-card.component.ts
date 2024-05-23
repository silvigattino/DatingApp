import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { NgIf} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'  
})
export class MemberCardComponent implements OnInit
{
  @Input() member: Member  | undefined;
  
  constructor() {}

  ngOnInit(): void {
    
  }

}
