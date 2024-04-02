import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
users:IUser[]
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
        this.userService.getAll().subscribe(value => this.users)
    }

}
