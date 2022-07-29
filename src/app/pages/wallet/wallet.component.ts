import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
    transactions = [
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 500,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
        {
            id: 3,
            type: 'CashOut',
            amount: 5445,
            walletInitiator: '05446000000',
            walletReceiver: '07777545777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 5050,
            walletInitiator: '0534000000',
            walletReceiver: '07773437777',
        },
        {
            id: 3,
            type: 'Cashin',
            amount: 5300,
            walletInitiator: '0500000000',
            walletReceiver: '07777777777',
        },
    ];
    settings = {
        actions: false,
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            name: {
                title: 'Название',
                type: 'string',
            },
            amount: {
                title: 'Сумма',
                type: 'number',
            },
            type: {
                title: 'Тип',
                type: 'string',
            },
            walletInitiator: {
                title: 'От',
                type: 'string',
            },
            walletReceiver: {
                title: 'Куда',
                type: 'string',
            },
        },
    };
    constructor(private dialogService: NbDialogService) {}
    onUserRowSelect(event): void {
        console.log(event);
    }
    openWithBackdropClick() {
        this.open(true);
    }

    ngOnInit(): void {}

    protected open(closeOnBackdropClick: boolean) {
        this.dialogService.open(ModalComponent, {
            context: 'this is some additional data passed to dialog',
        });
    }
}
