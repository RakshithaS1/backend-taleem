import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CommonServices } from '../services/common-services.service';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor triggered');

  const common = inject(CommonServices);
  const router = inject(Router);

  if (!req.url.includes('login')) {
    const tokenData = common.getLocalData(environment.AUTH_NAME+'token');
    if (typeof tokenData === 'string' && tokenData !== '') {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'Bearer ' + tokenData
        }
      });
    }
  }

  return next(req).pipe(
    tap(
      () => {},
      (err) => {
        if (err.status === 401) {
          // common.removeLocalData();
          // router.navigate(['sign-in']);
          // location.reload();
        }
      }
    )
  );
};
