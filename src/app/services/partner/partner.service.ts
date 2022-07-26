import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPartner } from '../../interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class PartnerService {
    partnerData: string;
    constructor(private http: HttpClient) {}
    getPartnerData(): Observable<IPartner> {
        return this.http.get<IPartner>('Partners/api/v1/Partners/Get');
    }
}
