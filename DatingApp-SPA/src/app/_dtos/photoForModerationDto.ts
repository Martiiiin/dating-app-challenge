import { UserForPhotoModerationDto } from './userForPhotoModerationDto';

export interface PhotoForModerationDto {
    id: number;
    url: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;
    isValidated: boolean;
    user: UserForPhotoModerationDto;
}
