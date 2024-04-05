import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './guards/authentication.guard';
import { environment } from '../environments/environment';

export const unAuthenticatedRoute: Partial<Route> = {
  canActivate: [AuthenticateGuard],
  data: {
    routeToRedirect: environment.configuration.routeToRedirectWhenUnAuthenticated,
    unprotectedRoute: true,
  },
};

export const authenticatedRoute: Partial<Route> = {
  canActivate: [AuthenticateGuard],
  data: {
    routeToRedirect: environment.configuration.routeToRedirectWhenAuthenticated,
    protectedRoute: true,
  },
};

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    ...unAuthenticatedRoute
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    ...authenticatedRoute
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
