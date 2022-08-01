import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbSelectModule,
    NbStepperModule,
} from '@nebular/theme';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CashOutModalComponent } from './cash-out-modal/cash-out-modal.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DetailTransactionModalComponent } from './detail-transaction-modal/detail-transaction-modal.component';

@NgModule({
    imports: [
        CommonModule,
        NbStepperModule,
        NbCardModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NbButtonModule,
        ngFormsModule,
        NbSelectModule,
        NbInputModule,
        NbListModule,
    ],
    declarations: [
        ModalComponent,
        CashOutModalComponent,
        DetailTransactionModalComponent,
    ],
})
export class ComponentsModule {}
