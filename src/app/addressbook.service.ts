import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @Injectable class decorators to automatically resolve and inject all the parameters of class constructor.
 * The metadata, providedIn: 'root' , means that the EmployeeService is visible throughout the application.
 * 'root' : The application-level injector in most apps
 */
@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
   /**
   * injected HttpClient to perform Http request  
   */
  constructor(private http:HttpClient) { }

  /**
   * Purpose: this method is used to request the POST http method.
   * it save the addressbook data in the database.
   * and also we passed the localhost 8080 url as parameter in post method,
   * @param addressbookdata here we passing addressbook object
   * @returns the repsonse message of the POST method
   */
  addAddressbookdata(addressbookdata: any){
    return this.http.post("http://localhost:8080/addressbook/create", addressbookdata);
  }

  /**
   * Purpose: this methos is used to request the GET http method.
   * it fetch the addressbook data form the database.
   * @returns the repsonse message of the GET method
   */ 
  getAllAddressBookData(){
    return this.http.get("http://localhost:8080/addressbook/get");
  }

  /**
   * Purpose : DELETE request method to hit the HTTP server.
   * @param id addressbookid for which the delete action needs to be taken.
   * @returns the delete request response.
   */
  deleteAddressBookById(id:number){
    return this.http.delete("http://localhost:8080/addressbook/"+id);
  }

  /**
    * Purpose: this methos is used to request the put http method.
    * Used HttpClient service class  to perform Http request to update data in database on given url
    * @param addressbookdata addressbook details we are updating,
    * @param id addressbookid for which the update action needs to be taken.
    * @returns the updated response
    */
  updateAddressBookById(addressbookdata:any,id:number){
    return this.http.put("http://localhost:8080/addressbook/update/"+id,addressbookdata)
  }

  /**
   * Purpose : get request method to hit the HTTP server.
   * @param id addressbookid for which the get all details action needs to be taken.
   * @returns the get request response.
   */
  getAddressBookDataById(id: number){
    return this.http.get("http://localhost:8080/addressbook/"+ id);
  }
}
