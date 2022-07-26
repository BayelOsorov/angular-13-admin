/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SeoService } from './@core/utils/seo.service';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
    constructor(
        private seoService: SeoService,
        public oidcSecurityService: OidcSecurityService
    ) {}

    ngOnInit(): void {
        this.seoService.trackCanonicalChanges();
        this.oidcSecurityService
            .checkAuth()
            .subscribe(
                ({ isAuthenticated, userData, accessToken, idToken }) => {
                    if (!isAuthenticated) {
                        this.oidcSecurityService.authorize();
                    }
                }
            );
    }
}
