import { Component, OnInit } from '@angular/core';
import { IPartner } from '../../interfaces/interfaces';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    partner: IPartner;
    constructor(private partnerService: PartnerService) {}

    ngOnInit(): void {
        this.partnerService.getPartnerData().subscribe({
            next: (data) => {
                this.partner = data;
            },
        });
    }
}
