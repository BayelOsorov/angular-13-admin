import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPartner } from '../../interfaces/interfaces';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    partner: IPartner;
    constructor(private partnerService: PartnerService) {}
    ngOnInit(): void {
        this.subscription = this.partnerService.getPartnerData().subscribe({
            next: (data) => {
                this.partner = data;
            },
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
