import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    logged = false;
    constructor(private oidcSecurityService: OidcSecurityService) {}

    isLoggedIn() {
        this.oidcSecurityService
            .checkAuth()
            .subscribe(
                ({ isAuthenticated, userData, accessToken, idToken }) =>
                    (this.logged = isAuthenticated)
            );
        return this.logged;
    }
    login() {
        this.oidcSecurityService.authorize();
    }

    logout() {
        this.oidcSecurityService.logoff();
        sessionStorage.clear();
        localStorage.clear();
    }
    getAccessToken() {
        const token = JSON.parse(
            sessionStorage.getItem('0-partner_admin_app')
        ).authzData;
        return token;
    }
}
