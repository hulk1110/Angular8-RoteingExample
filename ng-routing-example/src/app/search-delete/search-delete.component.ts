import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  constructor(private service: UserRegistrationService) { }

  users: any;
  email: string;
  ngOnInit() {
    const resp = this.service.getUsers();
    resp.subscribe((data) => this.users = data);
  }

  public deleteUser(id: number) {
    const resp = this.service.deleteuser(id);
    resp.subscribe((data) => this.users = data);

  }

  public finduserByEmail() {
    const resp = this.service.getUserByEmail(this.email);
    resp.subscribe((data) => this.users = data);

  }

}
