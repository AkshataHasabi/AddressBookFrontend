import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
   /**
   * injected HttpClient to perform Http request  
   */
  constructor(private http:HttpClient) { }

  addAddressbookdata(addressbookdata: any){
    return this.http.post("http://localhost:8080/addressbook/create", addressbookdata);
  }

  getAllAddressBookData(){
    return this.http.get("http://localhost:8080/addressbook/get");
  }

  deleteAddressBookById(id:number){
    return this.http.delete("http://localhost:8080/addressbook/"+id);
  }

  updateAddressBookById(addressbookdata:any,id:number){
    return this.http.put("http://localhost:8080/addressbook/update/"+id,addressbookdata)
  }

}
