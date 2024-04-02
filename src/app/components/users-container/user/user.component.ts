import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input()
  user:IUser
}
