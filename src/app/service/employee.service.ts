import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  getData(){
    return this.httpClient.get('https://backened-curd-meanstack.onrender.com/api/employees')
  }


  insertData(data: any){
    return this.httpClient.post('https://backened-curd-meanstack.onrender.com/api/employee/add',data)
  }

  getDataById(id: string){  
    return this.httpClient.get('https://backened-curd-meanstack.onrender.com/api/employee/'+id);
  }

  updateData(id: string,data: Partial<{ name: string | null; email: string | null; salary: string | null; }>){
    return this.httpClient.put('https://backened-curd-meanstack.onrender.com/api/employee/edit/'+id,data)
  }

  deleteData({ id }: { id: string; }){
    return this.httpClient.delete('https://backened-curd-meanstack.onrender.com/api/employee/'+id);
  }
}
