import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { PhotoForModerationDto } from 'src/app/_dtos/photoForModerationDto';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {

  photosForModeration: PhotoForModerationDto[];

  constructor(private adminService: AdminService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.getPhotosForManagement();
  }

  getPhotosForManagement() {
    this.adminService.getPhotosForModeration().subscribe(res => {
      this.photosForModeration = res;
    }, error => {
      this.alertify.error(error);
    });
  }

  rejectPhoto(id) {
    // Call the delete photo method
    this.adminService.rejectPhoto(id).subscribe(next => {
      this.photosForModeration.splice(this.photosForModeration.findIndex(p => p.id === id), 1);
      this.alertify.warning('Photo rejected');
    }, error => {
      this.alertify.error(error);
    });
  }

  acceptPhoto(id) {
    this.adminService.acceptPhoto(id).subscribe(next => {
      this.photosForModeration.splice(this.photosForModeration.findIndex(p => p.id === id), 1);
      this.alertify.success('Photo validated');
    }, error => {
      this.alertify.error(error);
    });
  }



}
