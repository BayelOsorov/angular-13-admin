import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbStepperModule } from '@nebular/theme';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        NbStepperModule,
        NbCardModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NbButtonModule,
    ],
    declarations: [ModalComponent],
})
export class ComponentsModule {}
