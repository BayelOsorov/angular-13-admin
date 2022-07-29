import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBranches } from '../../interfaces/interfaces';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    branches: IBranches;
    settings = {
        hideSubHeader: true,
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
            address: {
                title: 'Адрес',
                type: 'string',
            },
        },
    };

    constructor(private partnerService: PartnerService) {}

    ngOnInit(): void {
        this.subscription = this.partnerService.getPartnerBranches().subscribe({
            next: (data) => (this.branches = data),
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
