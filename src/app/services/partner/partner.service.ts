import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IBranches, IPartner } from '../../interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class PartnerService {
    constructor(private http: HttpClient) {}
    getPartnerData(): Observable<IPartner> {
        return this.http.get<IPartner>('Partners/api/v1/Partners/Get');
    }
    getPartnerBranches(): Observable<IBranches> {
        return this.http.get<IBranches>('Partners/api/v1/Partners/Branches');
    }
    getPartnerByPin(pin): Observable<IPartner> {
        console.log(pin);

        return this.http.get<IPartner>('Partners/api/v1/Partners/Get/' + pin);
    }
}
