import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TransactionsService {
    constructor(private http: HttpClient) {}

    // getTransactions(): Observable<ITransactions> {
    //     return http.get<ITransactions>(
    //         environment.transactionsUrl +
    //     );
    // }
    partnerTransfer(data) {
        return this.http.post(
            environment.transactionsUrl + '/api/v1/partner-wallets/transfer',
            data
        );
    }
}
