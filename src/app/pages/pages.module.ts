import { NgModule } from '@angular/core';
import {
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbListModule,
    NbMenuModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AboutComponent } from './about/about.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        DashboardModule,
        ECommerceModule,
        Ng2SmartTableModule,
        NbCardModule,
        NbListModule,
        NbDatepickerModule,
        NbInputModule,
    ],

    declarations: [
        PagesComponent,
        BranchesComponent,
        AboutComponent,
        ReportsComponent,
    ],
})
export class PagesModule {}
