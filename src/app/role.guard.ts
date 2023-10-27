import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const expectedRoles = route.data['roles']; // Obtiene los roles requeridos desde los datos de la ruta
    if (this.authService.isUserLoggedIn() && await this.checkRoles(expectedRoles)) {
      return true; // El usuario tiene al menos uno de los roles requeridos
    } else {
      this.router.navigate(['/login']); // Redirige a una página de acceso no autorizado
      return false;
    }
  }

  private async checkRoles(expectedRoles: string[]): Promise<boolean> {
    const userRoles = this.authService.getRole(); // Obtiene los roles del usuario
    for (const role of expectedRoles) {
      if (userRoles===role) {
        return true; // El usuario tiene al menos uno de los roles requeridos
      }
    }

    return false; // El usuario no tiene ninguno de los roles requeridos
  }
}
