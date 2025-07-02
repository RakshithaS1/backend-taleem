import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import moment from 'moment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonServices {
  private profileData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private breadCrumData = new BehaviorSubject<any>({});
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private snackbar: MatSnackBar,
    ) { }
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticted());

  public isLoggedIn$ = this.loggedIn.asObservable();


  isAuthenticted() {
    return Object.keys(this.getLocalData(environment.AUTH_NAME + "token")).length > 0;
  }

  login(tokenObj: any) {
    sessionStorage.setItem(environment.AUTH_NAME + 'token', JSON.stringify(tokenObj));
    this.loggedIn.next(true);
  }

  logout() {
    sessionStorage.removeItem(environment.AUTH_NAME + 'token');
    this.loggedIn.next(false);
  }

  setLocalData(key: string, data: any) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(key, JSON.stringify(data));
    }
    // sessionStorage.setItem(key, JSON.stringify(data));
  }

  // getLocalData(key: string) {
  //   if (sessionStorage.getItem(key)) {
  //     const data: any = sessionStorage.getItem(key);
  //     return JSON.parse(data);
  //   }
  //   return {};
  // }
  // removeLocalData(key?: string) {
  //   if (key) {
  //     sessionStorage.removeItem(key);
  //   } else {
  //     sessionStorage.clear();
  //   }
  // }

  getLocalData(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      const data: any = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : {};
    }
    return {};
  }

  removeLocalData(key?: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (key) {
        sessionStorage.removeItem(key);
      } else {
        sessionStorage.clear();
      }
    }
  }

  notification(message: string, isError: boolean) {
    if (isError) {
      this.snackbar.open(message, '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['success-snackbar', 'custom-snackbar']
      });
    } else {
      this.snackbar.open(message, '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['error-snackbar', 'custom-snackbar']
      });
    }
  }

  setBreadCrumData(data: any) {
    this.breadCrumData.next(data);
  }

  getBreadCrumData() {
    return this.breadCrumData.asObservable();
  }

  genrateQueryParams(data: any) {
    const queryParam: any = [];
    Object.keys(data)?.forEach((r) => {
      if (data[r]?.toString() !== '') {
        if (r.indexOf('Date') !== -1) {
          queryParam.push(`${r}=${moment(data[r]).format('YYYY-MM-DD 00:00:00')}`);
        } else {
          queryParam.push(`${r}=${data[r]}`);
        }
      }
    });
    // queryParam.push(`page=${config.paginationData.page - 1}`, `limit=${config.paginationData.limit}`);
    // if (config.sortData && Object.keys(config.sortData).length) {
    //     if (config.sortData.direction !== '') {
    //         const fieldArr = config.sortData.active?.split('.');
    //         queryParam.push(`sort=${fieldArr.at(-1)} ${config.sortData.direction}`);
    //     }
    // }
    return queryParam.join('&');
  }



  setProfileData(data: any) {
    this.profileData.next(data);
  }

  getProfileData() {
    return this.profileData.asObservable();
  }


}
