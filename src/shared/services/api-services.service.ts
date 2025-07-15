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

  private readonly api = `${environment.API_URL}/v1/websiteRoutes/`;
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
      console.error(`${operation} failed:`, error);
      // Return empty array for GET requests to prevent null errors
      if (operation.includes('get') || operation.includes('GET')) {
        return of([] as T);
      }
      return of(result as T);
    };
  }

  // Fetch all main courses
  getMainCourses(): Observable<any> {
    return this.get('main-courses');
  }

  // Fetch subcourses for a main course
  getSubCourses(mainCourseId: string): Observable<any> {
    return this.get(`sub-courses?mainCourseId=${mainCourseId}`);
  }

  // Fetch course details by id
  getCourseDetailsById(id: string): Observable<any> {
    return this.get(`subcourse-details/${id}`);
  }

  getSubCourseDetails(courseId: string) {
    return this.get(`subcourse-details/${courseId}`);
  }

  // Get all subcourses for course details page
  getAllSubCourses(): Observable<any> {
    return this.get('sub-courses');
  }

  // Static course details for testing
  getCourseDetailsStatic(): Observable<any> {
    return this.get('course-details-static');
  }
  getWebsiteSubCourseDetails(courseId: string) {
    return this.get(`subcourse-details/${courseId}`);
  }
  getSubCourseImage(courseId: string) {
    return this.get(`subcourse-image/${courseId}`);
  }

  getSubCoursesCurriculumList(mainCourseId: number) {
    return this.http.get<{ curriculum: any[] }>(`http://localhost:3214/v1/websiteRoutes/subcourses-curriculum/${mainCourseId}`);
  }
 
  // Get a specific subcourse curriculum
  // Fetch reviews for a course by id
  getCourseReviews(courseId: string) {
    return this.http.get<{ reviews: any[] }>(`${this.api}getReviews?id=${courseId}`);
  }
}
