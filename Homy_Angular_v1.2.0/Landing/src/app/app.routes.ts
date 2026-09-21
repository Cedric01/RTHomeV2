import { DashboardIndexComponent } from './Pages/Dashboard/dashboard-index/dashboard-index.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AccountSettingsComponent } from './Pages/Dashboard/account-settings/account-settings.component';
import { AccountSettingsPassChangeComponent } from './Pages/Dashboard/account-settings-pass-change/account-settings-pass-change.component';
import { AddPropertyComponent } from './Pages/Dashboard/add-property/add-property.component';
import { FavouritesComponent } from './Pages/Dashboard/favourites/favourites.component';
import { MembershipComponent } from './Pages/Dashboard/membership/membership.component';
import { MessageComponent } from './Pages/Dashboard/message/message.component';
import { ProfileComponent } from './Pages/Dashboard/profile/profile.component';
import { PropertiesListComponent } from './Pages/Dashboard/properties-list/properties-list.component';
import { ReviewComponent } from './Pages/Dashboard/review/review.component';
import { SavedSearchComponent } from './Pages/Dashboard/saved-search/saved-search.component';
import { authGuard, agentGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./layout/layout.route').then((mod) => mod.MP_ROUTES),
    },
    {
        path: 'dashboard-index',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: DashboardIndexComponent, outlet: 'dashboard' }],
    },
    {
        path: 'account-settings',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: AccountSettingsComponent, outlet: 'dashboard' }],
    },
    {
        path: 'account-settings-pass-change',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: AccountSettingsPassChangeComponent, outlet: 'dashboard' }],
    },
    {
        path: 'add-property',
        component: DashboardLayoutComponent,
        canActivate: [agentGuard],
        children: [{ path: '', component: AddPropertyComponent, outlet: 'dashboard' }],
    },
    {
        path: 'favourites',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: FavouritesComponent, outlet: 'dashboard' }],
    },
    {
        path: 'membership',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: MembershipComponent, outlet: 'dashboard' }],
    },
    {
        path: 'message',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: MessageComponent, outlet: 'dashboard' }],
    },
    {
        path: 'profile',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: ProfileComponent, outlet: 'dashboard' }],
    },
    {
        path: 'properties-list',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: PropertiesListComponent, outlet: 'dashboard' }],
    },
    {
        path: 'saved-search',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: SavedSearchComponent, outlet: 'dashboard' }],
    },
    {
        path: 'review',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [{ path: '', component: ReviewComponent, outlet: 'dashboard' }],
    },
];
