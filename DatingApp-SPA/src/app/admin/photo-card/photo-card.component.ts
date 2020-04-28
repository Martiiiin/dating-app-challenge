import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoForModerationDto } from 'src/app/_dtos/photoForModerationDto';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input() photoForModeration: PhotoForModerationDto;
  @Output() reject: EventEmitter<number> = new EventEmitter<number>();
  @Output() accept: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  rejectPhoto() {
    this.reject.emit(this.photoForModeration.id);
  }

  acceptPhoto() {
    this.accept.emit(this.photoForModeration.id);
  }

}
