import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GROINCYService {

  constructor(private http: HttpClient) { }

  getdata(data:any){
    this.http.post('https://reqres.in/api/login',data).subscribe((data: any)=>{
      console.log(data);
    })
  }
}
