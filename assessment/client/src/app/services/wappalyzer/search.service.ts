
  import { Injectable } from '@angular/core';
  import { HttpClient,HttpParams } from '@angular/common/http';
  import { environment } from '../../../environments/environment';
  import { Observable } from 'rxjs';

  
  @Injectable({
    providedIn: 'root'
  })
  export class SearchService {   
   constructor(private http: HttpClient) { }

      listResult(email): Observable<any> {
        // alert(email)
        let params = new HttpParams().set('parm', email);
        return this.http.get(environment.apiBaseUrl + '/webSearchResult',{ params: params });
      
    }
  }
  