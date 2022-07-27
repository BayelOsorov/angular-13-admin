import { Component, OnInit } from '@angular/core';
import { IBranches } from '../../interfaces/interfaces';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent implements OnInit {
    branches: IBranches;
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
            address: {
                title: 'Адрес',
                type: 'string',
            },
        },
    };

    constructor(private partnerService: PartnerService) {}

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    ngOnInit(): void {
        this.partnerService.getPartnerBranches().subscribe({
            next: (data) => (this.branches = data),
        });
    }
}
