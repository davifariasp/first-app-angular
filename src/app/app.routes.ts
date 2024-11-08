import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'login',
      component: LoginComponent,
  },
];
