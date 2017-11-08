import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpProxyService {

  constructor(private http: HttpClient) {
  }

  get<T>(url: string, options?: HttpParamsOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }
}

export interface HttpParamsOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
