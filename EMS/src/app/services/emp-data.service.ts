import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private http:HttpClient) { }
  postEmpData(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{return res}))
  }
  getEmpData(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{return res}))
  }
  updateEmpData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{return res}))
  }
  deleteEmpData(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{return res}))
  }
}
