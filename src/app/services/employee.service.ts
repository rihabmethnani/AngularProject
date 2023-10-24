import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
  }

  postEmployees(data: any): Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/employees`,data)
  }

  getEmployee(employeeId: number): Observable<any>{
    
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`)
  }

  getEmployeesByDepartment(departmentId: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${departmentId}`)
  }

  deleteEmployee(employeeId: number): Observable<any>{
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`)
  }

  getDepartmentById(id: number):Observable<any>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/${id}`)
  }
}
