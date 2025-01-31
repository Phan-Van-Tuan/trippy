import { NgModule } from '@angular/core';

import {
  URL_HOME,
  URL_TOUR,
  URL_TOURDETAIL,
  URL_DESTINATION,
  URL_DESTINATIONDETAIL,
  URL_LOGIN,
  URL_REGISTER,
  URL_MANAGER,
} from '@core/constants';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guard';
import { ManagerModule } from '../libs/pages/manager/manager.module';

const publicRoute: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@pages/home').then((page) => page.HomeModule),
  },
  {
    path: URL_HOME,
    // canActivate: [AuthGuard],
    loadChildren: () => import('@pages/home').then((page) => page.HomeModule),
  },
  {
    path: URL_TOUR,
    // canActivate: [AuthGuard],
    loadChildren: () => import('@pages/tour').then((page) => page.TourModule),
  },
  {
    path: URL_TOURDETAIL,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/tourDetail').then((page) => page.TourDetailModule),
  },
  {
    path: URL_DESTINATION,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/destination').then((page) => page.DestinationModule),
  },
  {
    path: URL_DESTINATIONDETAIL,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/destinationDetail').then(
        (page) => page.DestinationDetailModule
      ),
  },
  {
    path: URL_LOGIN,
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/login').then((page) => page.LoginModule),
  },
  {
    path: URL_REGISTER,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/register').then((page) => page.RegisterModule),
  },

  {
    path: URL_REGISTER,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/register').then((page) => page.RegisterModule),
  },
  {
    path: URL_MANAGER,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/manager').then((page) => page.ManagerModule),
  },
];
const privateRoute = [];
const routes: Routes = [...publicRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
