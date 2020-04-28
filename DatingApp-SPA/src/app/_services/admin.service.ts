import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { PhotoForModerationDto } from '../_dtos/photoForModerationDto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/usersWithRoles');
  }

  updateUserRoles(user: User, roles: {}) {
    return this.http.post(this.baseUrl + 'admin/editRoles/' + user.userName, roles);
  }

  getPhotosForModeration() {
    return this.http.get<PhotoForModerationDto[]>(this.baseUrl + 'admin/photosForModeration');
  }

  rejectPhoto(id: number) {
    return this.http.delete(this.baseUrl + 'admin/rejectPhoto/' + id);
  }

  acceptPhoto(id: number) {
    return this.http.post(this.baseUrl + 'admin/validatePhoto/' + id, {});
  }

}
