import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration, Model, RecentSearchResult, ISearchService } from 'my-lib'

interface d{
  name:string;
  description:string
}
@Injectable({
  providedIn: 'root'
})
export class GetRequestService implements ISearchService<d> {

  constructor(private http:HttpClient) { }

  searchApiRequest(searchUrl:string, match:string, source:'All'|Model,limit?:number,limitByType?:boolean, order?:string, offset?:number,saveInRecents?:boolean):Observable<Array<{name:string,description:string}>>{
    
    let url = "";
    url =searchUrl + `?query[match]=${match}`;
    if (limit) {
      url = url + `&query[limit]=${limit}`
    }
    if (limitByType) {
      url = url + `&query[limitByType]=${limitByType}`
    }
    if (order) {
      url = url + `&query[order]=${order}`
    }
    if (offset) {
      url = url + `&query[offset]=${offset}`
    }
   
    if (source !== 'All') {
      url = url + `&query[sources][0]=${source.name}`
    }
    if (saveInRecents) {
      url = url + `&saveInRecents=${saveInRecents}`
    }
    return this.http.get<Array<{name:string,description:string}>>(url)
  }

  recentSearchApiRequest(recentSearchUrl:string){
     return this.http.get<Array<RecentSearchResult>>(recentSearchUrl)
  }

  

}
