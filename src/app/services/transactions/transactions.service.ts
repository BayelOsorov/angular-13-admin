import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IBalance } from '../../interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class TransactionsService {
    constructor(private http: HttpClient) {}
    partnerBalance(): Observable<IBalance> {
        return this.http.get<IBalance>(
            environment.transactionsUrl + '/api/v1/partner-wallets/balance'
        );
    }
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
    partnerCashOut(data) {
        return this.http.post(
            environment.transactionsUrl + '/api/v1/partner-wallets/cash-out',
            data
        );
    }
    checkCashOutStatus(id): Observable<IBalance> {
        return this.http.get<IBalance>(
            environment.transactionsUrl +
                'api/v1/partner-wallets/cash-outs/' +
                id
        );
    }
}
