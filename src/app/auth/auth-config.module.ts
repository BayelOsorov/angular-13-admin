import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
    imports: [
        AuthModule.forRoot({
            config: {
                authority: 'https://stage.c2u.io:7001',
                redirectUrl: window.location.origin + '/cb',
                postLogoutRedirectUri: window.location.origin + '/logout',
                clientId: 'partner_admin_app',
                scope: 'openid profile offline_access', // 'openid profile ' + your scopes
                responseType: 'code',
                silentRenew: true,
                silentRenewUrl: window.location.origin + '/silent-renew.html',
                renewTimeBeforeTokenExpiresInSeconds: 10,
            },
        }),
    ],
    exports: [AuthModule],
})
export class AuthConfigModule {}
