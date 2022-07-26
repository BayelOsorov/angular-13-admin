import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    NbMediaBreakpointsService,
    NbMenuService,
    NbSidebarService,
    NbThemeService,
} from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { HttpInterceptorService } from '../../../services/http/http.service';
import { PartnerService } from '../../../services/partner/partner.service';
import { IPartner } from '../../../interfaces/interfaces';

@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
    userPictureOnly = false;
    user: any;
    partner: IPartner;
    themes = [
        {
            value: 'default',
            name: 'Light',
        },
        {
            value: 'dark',
            name: 'Dark',
        },
        {
            value: 'cosmic',
            name: 'Cosmic',
        },
        {
            value: 'corporate',
            name: 'Corporate',
        },
    ];

    currentTheme = 'default';

    userMenu = [{ title: 'Log out' }];
    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private userService: UserData,
        private layoutService: LayoutService,
        private breakpointService: NbMediaBreakpointsService,
        private nbMenuService: NbMenuService,
        private authService: AuthService,
        private partnerService: PartnerService
    ) {}

    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;

        this.userService
            .getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((users: any) => (this.user = users.nick));

        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService
            .onMediaQueryChange()
            .pipe(
                map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
                takeUntil(this.destroy$)
            )
            .subscribe(
                (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
            );

        this.themeService
            .onThemeChange()
            .pipe(
                map(({ name }) => name),
                takeUntil(this.destroy$)
            )
            .subscribe((themeName) => (this.currentTheme = themeName));
        this.nbMenuService
            .onItemClick()
            .pipe(
                filter(({ tag }) => tag === 'my-context-menu'),
                map(({ item: { title } }) => title)
            )
            .subscribe(() => this.authService.logout());
        this.partnerService.getPartnerData().subscribe({
            next: (data) => {
                this.partner = data;
            },
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    changeTheme(themeName: string) {
        this.themeService.changeTheme(themeName);
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();

        return false;
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}
