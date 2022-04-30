import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {WindowService} from '../window.service';
import {TokenKey} from "@config/constant";

// 路由守卫，没有TokenKey则跳转登录页
@Injectable({
  providedIn: 'root'
})
export class JudgLoginGuard implements CanActivate {
  constructor(private windowSrc: WindowService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogin = !!this.windowSrc.getStorage(TokenKey);
    if (isLogin) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}
