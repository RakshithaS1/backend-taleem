import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonServices } from './common-services.service';
import { Observable , of, catchError} from 'rxjs';
// import { SecurityService } from './security.service';
@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  private readonly api = `${environment.API_URL}/v1/`;
  constructor(private http: HttpClient, private commonService: CommonServices,
    // private security : SecurityService
    ) { }

  get(url: string): Observable<any> {
    return this.http.get(this.api + url).pipe(catchError(this.handleError(url, [])));
  }

  post(url: string, data: any, disableSecurity?: boolean): Observable<any> {
    // const postData = {
    //   data: this.security.encrypt(btoa(this.commonService.getLocalData('starttime')), data),
    //   time: this.commonService.getLocalData('starttime')
    // };

    // const hybrid = this.security.encryptHybrid(data);
    // const postData1 = {
    //   encryptedData: hybrid.encryptedData,
    //   encryptedKey: hybrid.encryptedKey,
    //   iv: hybrid.iv,
    // };
    return this.http.post(this.api + url, disableSecurity ? data : data).pipe(catchError(this.handleError(url, [])));
  }

  put(url: string, data: any, disableSecurity?: boolean): Observable<any> {
    // const hybrid = this.security.encryptHybrid(data);
    // const postData1 = {
    //   encryptedData: hybrid.encryptedData,
    //   encryptedKey: hybrid.encryptedKey,
    //   iv: hybrid.iv,
    // };
    return this.http.put(`${this.api}${url}`, disableSecurity ? data : data ).pipe(catchError(this.handleError(url, [])));
  }

  delete(url: string): Observable<any> {

    return this.http.delete(this.api + url).pipe(catchError(this.handleError(url, [])));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.commonService.notifications(error.error.message, true);
      return of(result as T);
    };
  }
}
