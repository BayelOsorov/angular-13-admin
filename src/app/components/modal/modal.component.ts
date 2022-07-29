import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    NbComponentStatus,
    NbGlobalPhysicalPosition,
    NbStepperComponent,
    NbToastrService,
} from '@nebular/theme';
import { Subscription } from 'rxjs';
import { IPartner } from '../../interfaces/interfaces';
import { PartnerService } from '../../services/partner/partner.service';
import { TransactionsService } from '../../services/transactions/transactions.service';

@Component({
    selector: 'ngx-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @ViewChild('stepper') stepper: NbStepperComponent;

    firstForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;
    subscription: Subscription;
    partnerData: IPartner;
    constructor(
        private fb: FormBuilder,
        private partnerService: PartnerService,
        private transactionsService: TransactionsService,
        private toastrService: NbToastrService
    ) {}

    ngOnInit() {
        this.firstForm = this.fb.group({
            firstCtrl: ['', Validators.required],
        });

        this.secondForm = this.fb.group({
            secondCtrl: ['', Validators.required],
        });

        this.thirdForm = this.fb.group({
            thirdCtrl: ['', Validators.required],
        });
    }

    onFirstSubmit() {
        this.firstForm.markAsDirty();
        this.subscription = this.partnerService
            .getPartnerByPin(this.firstForm.value.firstCtrl)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.partnerData = data;
                    this.stepper.next();
                },
                error: (err) => {
                    this.showToast(
                        'danger',
                        'Партнер не найден',
                        err.error.title
                    );
                },
            });
    }

    onSecondSubmit() {
        this.secondForm.markAsDirty();
        this.transactionsService
            .partnerTransfer({
                ReceiverInn: this.partnerData.tin,
                Amount: this.secondForm.value.secondCtrl,
            })
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.stepper.next();
                },
                error: (err) => {
                    // this.stepper.next();
                    console.log(err.error.errors);
                    this.showToast(
                        'danger',
                        'Партнер не найден',
                        err.error.errors
                    );
                },
            });
    }

    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
    private showToast(type: NbComponentStatus, title: string, body: string) {
        const config = {
            status: type,
            destroyByClick: true,
            duration: 2000,
            hasIcon: true,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: false,
        };
        const titleContent = title ? ` ${title}` : '';

        this.toastrService.show(body, titleContent, config);
    }
}
