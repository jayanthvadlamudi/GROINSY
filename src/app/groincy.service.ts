import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GROINCYService {

  constructor(private http: HttpClient,public Dashboard:Router) { }

  getdata(data:any){
    this.http.post('https://reqres.in/api/login',data).subscribe((data: any)=>{
      console.log(data);
    this.Dashboard.navigate(['Dashboard']);

      return data;
    })
  }
}
