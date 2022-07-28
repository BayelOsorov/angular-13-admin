import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
    constructor(private dialogService: NbDialogService) {}

    openWithBackdropClick() {
        this.open(true);
    }

    openWithoutBackdropClick() {
        this.open(false);
    }
    ngOnInit(): void {}

    protected open(closeOnBackdropClick: boolean) {
        this.dialogService.open(ModalComponent, {
            context: 'this is some additional data passed to dialog',
        });
    }
}
