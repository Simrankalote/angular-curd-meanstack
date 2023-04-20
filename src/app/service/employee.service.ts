import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  getData(){
    return this.httpClient.get('http://localhost:3000/api/employees')
  }


  insertData(data: any){
    return this.httpClient.post('http://localhost:3000/api/employee/add',data)
  }

  getDataById(id: string){  
    return this.httpClient.get('http://localhost:3000/api/employee/'+id);
  }

  updateData(id: string,data: Partial<{ name: string | null; email: string | null; salary: string | null; }>){
    return this.httpClient.put('http://localhost:3000/api/employee/edit/'+id,data)
  }

  deleteData({ id }: { id: string; }){
    return this.httpClient.delete('http://localhost:3000/api/employee/'+id);
  }
}
