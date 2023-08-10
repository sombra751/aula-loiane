import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class CursosGuard implements CanActivateChild {
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : Observable<boolean> | boolean {
        // return this.permissions.CanActivate(this.currentUser, route.params.id)
        console.log('guarda de rota filha')
        return true
      }
}