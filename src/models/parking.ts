import { NumberValueAccessor } from '@angular/forms';

export interface IParking {
    id: number;
    name: string;
    description?: string;
    distance?: number;
    available?: number;
    lat?: number;
    lng?: number;
    photo?: string;
    share_by?: string;
    share_photo?: string;
    share_phone?: string;
    shared_date?: string;
}