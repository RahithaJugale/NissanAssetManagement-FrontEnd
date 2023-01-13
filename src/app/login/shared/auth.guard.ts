import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private toastr:ToastrService) { }
  canActivate(
    next: ActivatedRouteSnapshot): boolean {

    const expectedRole = next.data.role;
    const currentRole = localStorage.getItem("ACCESS_ROLE");

    if (currentRole != expectedRole) {
      this.toastr.error("UNAUTHORIZED ACCESS");
      localStorage.removeItem("EMAIL");
      localStorage.removeItem("ACCESS_ROLE");
      localStorage.removeItem("ACCESS_TOKEN");
      sessionStorage.removeItem("EMAIL");
      this.router.navigateByUrl('');
      return false;
    }

    return true;

    //if false, redirect to login....else show the authorized page
  }

}
