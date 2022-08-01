import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-detail-transaction-modal',
    templateUrl: './detail-transaction-modal.component.html',
    styleUrls: ['./detail-transaction-modal.component.scss'],
})
export class DetailTransactionModalComponent implements OnInit {
    @Input() title: string;
    constructor() {}

    ngOnInit(): void {
        console.log(this.title);
    }
}
