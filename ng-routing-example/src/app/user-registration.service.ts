import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpClient: HttpClient) { }

  public doRegistration(user) {
    return this.httpClient.post('http://localhost:9090/register', user, {
      responseType: 'text' as
      'json'
    });
  }

  public getUsers() {
    return this.httpClient.get('http://localhost:9090/getAllUsers');
  }

  public getUserByEmail(email) {
    return this.httpClient.get('http://localhost:9090/finduser/' + email);
  }


  public deleteuser(id) {
    return this.httpClient.delete('http://localhost:9090/cancel/' + id);
  }
}
