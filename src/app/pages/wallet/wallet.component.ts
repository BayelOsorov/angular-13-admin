import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CashOutModalComponent } from '../../components/cash-out-modal/cash-out-modal.component';
import { DetailTransactionModalComponent } from '../../components/detail-transaction-modal/detail-transaction-modal.component';
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
        this.openDetailModal();
        console.log(event);
    }
    openTransferModal() {
        this.openModal(true, ModalComponent);
    }
    openCashOutModal() {
        this.openModal(true, CashOutModalComponent);
    }
    openDetailModal() {
        this.openModal(true, DetailTransactionModalComponent);
    }
    ngOnInit(): void {}

    protected openModal(closeOnBackdropClick: boolean, component) {
        this.dialogService.open(component, {
            context: { title: 'this is some additional data passed to dialog' },
        });
    }
}
