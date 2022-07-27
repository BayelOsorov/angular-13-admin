import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BranchesComponent } from './branches/branches.component';
import { AboutComponent } from './about/about.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: ECommerceComponent,
            },
            {
                path: 'iot-dashboard',
                component: DashboardComponent,
            },
            {
                path: 'branches',
                component: BranchesComponent,
            },
            {
                path: 'about',
                component: AboutComponent,
            },
            {
                path: 'reports',
                component: ReportsComponent,
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: ECommerceComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
